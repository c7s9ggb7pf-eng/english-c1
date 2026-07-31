import { PLAN, BASELINE, ERRORS, DAYS } from './content.js';

/* ============================================================
   Zustand
   ============================================================ */

const KEY = 'ec1.state.v1';

const defaults = () => ({
  answers:   {},        // blockId -> { fieldId: text }
  revealed:  {},        // drillItemId -> true
  done:      {},        // "1:morning" -> ISO-Zeitstempel
  errors:    {},        // errorId -> Anzahl fehlerfreier Tage
  vocab:     [],        // { id, term, example, added, seen }
  levels:    [{ date: BASELINE.date, ...BASELINE.skills, overall: BASELINE.overall }],
  settings:  { morning: '08:00', evening: '19:00', theme: 'auto', sound: true }
});

let S = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaults(), ...JSON.parse(raw) } : defaults();
  } catch { return defaults(); }
}
let saveTimer;
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {}
  }, 250);
}

/* ============================================================
   Hilfsfunktionen
   ============================================================ */

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const today = () => iso(new Date());

const DE_DAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const DE_MON  = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
function prettyDate(isoStr) {
  const [y, m, d] = isoStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return `${DE_DAYS[dt.getDay()]}, ${d}. ${DE_MON[m - 1]} ${y}`;
}
const mmss = sec => {
  const s = Math.max(0, Math.round(sec));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};
const words = t => (t.trim().match(/[\p{L}\p{N}'’-]+/gu) || []).length;

function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2600);
}

/* Welcher Trainingstag ist heute? */
function resolveDay() {
  const t = today();
  const exact = DAYS.find(d => d.date === t);
  if (exact) return exact;
  const past = DAYS.filter(d => d.date < t);
  if (past.length) return past[past.length - 1];   // letzter verfügbarer Tag
  return DAYS[0];                                   // Training beginnt erst
}
const currentPhase = date => PLAN.phases.find(p => date >= p.from && date <= p.to) || PLAN.phases[0];
const sessionKey = (day, part) => `${day.day}:${part}`;
const isDone = (day, part) => !!S.done[sessionKey(day, part)];

function streak() {
  let n = 0;
  const d = new Date();
  for (;;) {
    const key = iso(d);
    const day = DAYS.find(x => x.date === key);
    if (!day) break;
    if (S.done[sessionKey(day, 'morning')] || S.done[sessionKey(day, 'evening')]) n++;
    else if (key !== today()) break;
    else { d.setDate(d.getDate() - 1); continue; }
    d.setDate(d.getDate() - 1);
  }
  return n;
}

/* ============================================================
   Timer
   ============================================================ */

const Timer = {
  total: 0, left: 0, running: false, id: null,

  start(minutes) {
    this.stop();
    this.total = minutes * 60;
    this.left  = this.total;
    this.running = true;
    $('#timebar').hidden = false;
    $('#timerWrap').hidden = false;
    this.paint();
    this.id = setInterval(() => { this.left--; this.paint(); }, 1000);
  },

  toggle() {
    if (!this.id && !this.running) return;
    if (this.running) { clearInterval(this.id); this.id = null; this.running = false; }
    else { this.running = true; this.id = setInterval(() => { this.left--; this.paint(); }, 1000); }
    $('#timerWrap').classList.toggle('is-paused', !this.running);
    $('#timerBtn').setAttribute('aria-label', this.running ? 'Timer anhalten' : 'Timer fortsetzen');
    $('#timerBtn').innerHTML = this.running
      ? '<svg viewBox="0 0 24 24"><rect x="7" y="6" width="3.5" height="12" rx="1"/><rect x="13.5" y="6" width="3.5" height="12" rx="1"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M8 5.5l10 6.5-10 6.5z"/></svg>';
  },

  paint() {
    const over = this.left < 0;
    $('#timerVal').textContent = (over ? '+' : '') + mmss(Math.abs(this.left));
    $('#timerWrap').classList.toggle('is-over', over);
    $('#timebar').classList.toggle('is-over', over);
    const frac = over ? 1 : 1 - this.left / this.total;
    $('#timebar').querySelector('i').style.transform = `scaleX(${1 - frac})`;
    if (this.left === 0 && !over) this.chime();
  },

  /* Weicher Zweiklang, ohne Audiodatei */
  chime() {
    if (!S.settings.sound) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [880, 660].forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        o.connect(g); g.connect(ctx.destination);
        const t0 = ctx.currentTime + i * 0.26;
        g.gain.setValueAtTime(0, t0);
        g.gain.linearRampToValueAtTime(0.16, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.45);
        o.start(t0); o.stop(t0 + 0.5);
      });
    } catch {}
  },

  stop() {
    clearInterval(this.id); this.id = null; this.running = false;
    $('#timebar').hidden = true;
    $('#timerWrap').hidden = true;
    $('#timerWrap').classList.remove('is-over', 'is-paused');
    $('#timebar').classList.remove('is-over');
  }
};

/* ============================================================
   Router
   ============================================================ */

let session = null;   // { day, part, index }

function setTop(kicker, title, back) {
  $('#topKicker').textContent = kicker || '';
  $('#topTitle').textContent  = title;
  $('#backBtn').hidden = !back;
}

function go(tab) {
  session = null;
  Timer.stop();
  document.body.classList.remove('in-session');
  $$('.tab').forEach(b => b.classList.toggle('is-active', b.dataset.tab === tab));
  ({ today: viewToday, progress: viewProgress, vocab: viewVocab, settings: viewSettings }[tab])();
  window.scrollTo(0, 0);
}

/* ============================================================
   Ansicht: Heute
   ============================================================ */

function viewToday() {
  const day = resolveDay();
  const ph  = currentPhase(day.date);
  const st  = streak();
  const behind = day.date < today();

  const sess = part => {
    const s = day[part];
    const done = isDone(day, part);
    return `
      <button class="card ${done ? 'is-done' : ''}" data-open="${part}">
        <div class="card-head">
          <span class="card-title">${esc(s.label)}</span>
          <span class="card-meta">${done ? 'erledigt' : s.minutes + ' Min'}</span>
        </div>
        <div class="card-body">${s.blocks.map(b => esc(b.name)).join(' · ')}</div>
        <div class="card-blocks">
          ${s.blocks.map(b => `<span class="chip ${done ? 'is-done' : ''}">${esc(b.name)} ${b.minutes}′</span>`).join('')}
        </div>
      </button>`;
  };

  setTop('', 'English C1', false);
  $('#view').innerHTML = `
    <div class="dayhead">
      <span class="kicker">Phase ${ph.n} · ${esc(ph.name)}</span>
      <div class="daynum">
        <b>Tag ${day.day}</b>
        <span>von ${PLAN.totalDays}</span>
      </div>
      <p class="lede" style="margin:10px 0 0">${esc(prettyDate(day.date))}${behind ? ' — noch offen' : ''}</p>
      ${st ? `<div class="streak"><b>${st}</b> ${st === 1 ? 'Tag' : 'Tage'} in Folge</div>` : ''}
    </div>

    <p class="callout"><strong>Fokus heute.</strong> ${esc(day.focus)}</p>

    ${sess('morning')}
    ${sess('evening')}

    <hr class="rule-line">
    <h3>Regel</h3>
    <p style="font-size:15px">Kein Nachschlagen während der Aufgabe — nur in der Repair-Phase am Abend.
    C1 ist keine Wissensfrage, sondern eine Frage der Abrufgeschwindigkeit.</p>
  `;

  $$('[data-open]').forEach(b => b.onclick = () => openSession(day, b.dataset.open));
}

/* ============================================================
   Ansicht: Session
   ============================================================ */

function openSession(day, part) {
  session = { day, part, index: 0 };
  document.body.classList.add('in-session');
  $('#tabs').querySelectorAll('button').forEach(b => b.blur());
  renderBlock();
}

function renderBlock() {
  const { day, part, index } = session;
  const blocks = day[part].blocks;
  const b = blocks[index];

  setTop(`Tag ${day.day} · ${index + 1} von ${blocks.length}`, b.name, true);
  Timer.start(b.minutes);

  $('#view').innerHTML = ({
    read:   renderRead, drill: renderDrill, speak: renderSpeak,
    write:  renderWrite, repair: renderRepair, vocab: renderVocabBlock
  }[b.type])(b) + `
    <div class="actions">
      ${index > 0 ? '<button class="btn ghost" id="prevBtn">Zurück</button>' : ''}
      <button class="btn" id="nextBtn">${index === blocks.length - 1 ? 'Einheit abschließen' : 'Weiter'}</button>
    </div>`;

  wireFields(b);
  const prev = $('#prevBtn');
  if (prev) prev.onclick = () => { session.index--; renderBlock(); window.scrollTo(0, 0); };
  $('#nextBtn').onclick = () => {
    if (index === blocks.length - 1) finishSession();
    else { session.index++; renderBlock(); window.scrollTo(0, 0); }
  };
  window.scrollTo(0, 0);
}

const ans = (bid, fid) => (S.answers[bid] || {})[fid] || '';
function setAns(bid, fid, v) {
  (S.answers[bid] ||= {})[fid] = v;
  save();
}

function wireFields(b) {
  $$('[data-field]', $('#view')).forEach(el => {
    el.value = ans(b.id, el.dataset.field);
    el.addEventListener('input', () => {
      setAns(b.id, el.dataset.field, el.value);
      const wc = el.parentElement.querySelector('.wordcount');
      if (wc) paintCount(wc, el.value, +wc.dataset.min, +wc.dataset.max);
      el.style.height = 'auto';
      el.style.height = Math.max(84, el.scrollHeight) + 'px';
    });
    if (el.tagName === 'TEXTAREA') {
      el.style.height = 'auto';
      el.style.height = Math.max(84, el.scrollHeight) + 'px';
    }
    const wc = el.parentElement.querySelector('.wordcount');
    if (wc) paintCount(wc, el.value, +wc.dataset.min, +wc.dataset.max);
  });

  $$('[data-reveal]', $('#view')).forEach(btn => btn.onclick = () => {
    const id = btn.dataset.reveal;
    S.revealed[id] = true; save();
    const item = b.items.find(i => i.id === id);
    btn.outerHTML = `<div class="solution"><small>Musterlösung</small><span lang="en">${esc(item.solution)}</span></div>`;
  });
}

function paintCount(el, val, min, max) {
  const n = words(val);
  el.textContent = min ? `${n} / ${min}–${max} Wörter` : `${n} Wörter`;
  el.classList.toggle('is-ok', min ? n >= min && n <= max : false);
  el.classList.toggle('is-short', min ? n > 0 && n < min : false);
}

/* --- Blocktypen --- */

const fieldHTML = (bid, f, i) => `
  <div class="field">
    <div class="field-q"><i>${i}</i><span>${esc(f.text)}</span></div>
    ${f.hint ? `<p class="field-hint">${esc(f.hint)}</p>` : ''}
    <textarea data-field="${esc(f.id)}" placeholder="Deine Antwort auf Englisch …"></textarea>
  </div>`;

function renderRead(b) {
  return `
    <div class="readtext" lang="en">
      ${b.kicker ? `<span class="kicker" lang="de">${esc(b.kicker)}</span>` : ''}
      <h2 class="rt-title">${esc(b.title)}</h2>
      ${b.paragraphs.map(p => `<p>${esc(p)}</p>`).join('')}
    </div>
    ${b.intro ? `<p class="callout">${esc(b.intro)}</p>` : ''}
    <hr class="rule-line">
    <p class="callout"><strong>Regel.</strong> ${esc(b.rule)}</p>
    ${b.questions.map((q, i) => fieldHTML(b.id, q, i + 1)).join('')}`;
}

function renderDrill(b) {
  return `
    ${b.kicker ? `<span class="kicker">${esc(b.kicker)}</span>` : ''}
    <h1>Regeln</h1>
    <div class="rules">
      ${b.rules.map(r => `
        <div class="rulerow">
          <b>${esc(r.title)}</b>
          <p>${r.body}</p>
          <span class="ex" lang="en">${r.example}</span>
        </div>`).join('')}
    </div>
    <h2>Drill</h2>
    <p class="callout">${esc(b.instruction)}</p>
    ${b.items.map((it, i) => `
      <div class="drill-item">
        <div class="drill-prompt"><i>${i + 1}</i><span>${esc(it.prompt)}</span></div>
        <textarea data-field="${esc(it.id)}" rows="1" placeholder="Vollständiger englischer Satz …"></textarea>
        <p class="drill-key">Schlüssel: ${esc(it.key)}</p>
        ${S.revealed[it.id]
          ? `<div class="solution"><small>Musterlösung</small><span lang="en">${esc(it.solution)}</span></div>`
          : `<button class="btn ghost small" style="margin:10px 0 0 26px" data-reveal="${esc(it.id)}">Lösung zeigen</button>`}
      </div>`).join('')}`;
}

function renderSpeak(b) {
  return `
    <p class="speak-prompt" lang="en">${esc(b.prompt)}</p>
    <p class="callout"><strong>${esc(b.ruleTitle)}</strong><br>${esc(b.ruleBody)}</p>
    <ul class="phrases" lang="en">${b.phrases.map(p => `<li>${esc(p)}</li>`).join('')}</ul>

    <h3>Aufnahme · ${b.seconds} Sekunden</h3>
    <div class="recorder">
      <button class="rec-btn" id="recBtn" aria-label="Aufnahme starten">
        <svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21"/></svg>
      </button>
      <div class="rec-info"><span id="recTime">00:00</span><small id="recHint">Tippen und sofort losreden — nicht vorbereiten.</small></div>
    </div>
    <div id="recPlay"></div>

    <div class="field">
      <div class="field-q"><i>1</i><span>Transkript — unverändert, inklusive Abbrüchen und Füllwörtern.</span></div>
      <textarea data-field="transcript" placeholder="Diktierfunktion mitlaufen lassen und hier einfügen …"></textarea>
      <div class="wordcount" data-min="0" data-max="0"></div>
    </div>
    <p class="callout">${esc(b.after)}</p>`;
}

function renderWrite(b) {
  return `
    ${b.kicker ? `<span class="kicker">${esc(b.kicker)}</span>` : ''}
    <p class="speak-prompt" lang="en">${esc(b.prompt)}</p>
    <h3>Vor dem Abgeben prüfen</h3>
    <ul class="phrases">${b.checklist.map(c => `<li>${esc(c)}</li>`).join('')}</ul>
    <div class="field">
      <textarea data-field="text" style="min-height:260px" placeholder="Schreib in einem Zug. Korrigieren erst am Ende, wenn Zeit bleibt."></textarea>
      <div class="wordcount" data-min="${b.min}" data-max="${b.max}"></div>
    </div>`;
}

function renderRepair(b) {
  return `
    <p class="callout">${esc(b.instruction)}</p>
    ${b.fields.map((f, i) => `
      <div class="field">
        <div class="field-q"><i>${i + 1}</i><span>${esc(f.label)}</span></div>
        <textarea data-field="${esc(f.id)}"></textarea>
      </div>`).join('')}`;
}

function renderVocabBlock(b) {
  const recent = S.vocab.slice(-3);
  return `
    <p class="callout">${esc(b.instruction)}</p>
    <p style="font-size:15px">Neue Ausdrücke legst du im Reiter <b>Vokabeln</b> an. Hier reaktivierst du die alten:</p>
    ${recent.length
      ? recent.map((v, i) => `
          <div class="field">
            <div class="field-q"><i>${i + 1}</i><span>${esc(v.term)}</span></div>
            <textarea data-field="reuse-${esc(v.id)}" placeholder="Neuer eigener Satz mit diesem Ausdruck …"></textarea>
          </div>`).join('')
      : `<p style="font-size:15px;color:var(--ink-dim)">Noch keine Vokabeln angelegt — leg die fünf aus dem Morgentext im Reiter „Vokabeln“ an.</p>`}`;
}

/* --- Aufnahme --- */

let media = null, chunks = [], recTick = null;

async function toggleRec() {
  const btn = $('#recBtn'), t = $('#recTime'), hint = $('#recHint');
  if (media && media.state === 'recording') { media.stop(); return; }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    media = new MediaRecorder(stream);
    chunks = [];
    media.ondataavailable = e => chunks.push(e.data);
    media.onstop = () => {
      clearInterval(recTick);
      stream.getTracks().forEach(x => x.stop());
      btn.classList.remove('is-rec');
      btn.innerHTML = '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21"/></svg>';
      hint.textContent = 'Hör dir zu: Wo brichst du ab, statt umzubiegen?';
      const url = URL.createObjectURL(new Blob(chunks, { type: media.mimeType }));
      $('#recPlay').innerHTML = `<audio controls src="${url}"></audio>`;
    };
    media.start();
    let s = 0;
    t.textContent = '00:00';
    recTick = setInterval(() => { t.textContent = mmss(++s); }, 1000);
    btn.classList.add('is-rec');
    btn.innerHTML = '<svg viewBox="0 0 24 24"><rect x="6.5" y="6.5" width="11" height="11" rx="2"/></svg>';
    hint.textContent = 'Läuft. Nicht neu anfangen — reparieren.';
  } catch {
    toast('Kein Mikrofonzugriff. Nimm mit der Sprachmemo-App auf.');
  }
}

/* --- Abschluss einer Einheit --- */

function finishSession() {
  const { day, part } = session;
  S.done[sessionKey(day, part)] = new Date().toISOString();
  save();
  Timer.stop();
  setTop(`Tag ${day.day}`, day[part].label + ' abgeschlossen', true);

  const st = streak();
  $('#view').innerHTML = `
    <div class="done-mark"><svg viewBox="0 0 24 24"><path d="M4 12.5l5.5 5.5L20 6.5"/></svg></div>
    <h1>${esc(day[part].label)} erledigt</h1>
    <p class="lede">Tag ${day.day} von ${PLAN.totalDays}${st ? ` · ${st} ${st === 1 ? 'Tag' : 'Tage'} in Folge` : ''}</p>
    <p class="callout">Jetzt die Antworten kopieren und in den Chat einfügen — die Korrektur bestimmt,
    was in der nächsten Einheit drankommt.</p>
    <div class="actions" style="flex-direction:column">
      <button class="btn wide" id="copyBtn">Antworten kopieren</button>
      <button class="btn ghost wide" id="homeBtn">Zurück zur Übersicht</button>
    </div>
    <details class="export">
      <summary>Text anzeigen</summary>
      <textarea readonly id="exportBox">${esc(exportSession(day, part))}</textarea>
    </details>`;

  $('#copyBtn').onclick = async () => {
    const md = exportSession(day, part);
    try { await navigator.clipboard.writeText(md); toast('Kopiert — jetzt in den Chat einfügen.'); }
    catch {
      const ta = document.createElement('textarea');
      ta.value = md; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove(); toast('Kopiert.');
    }
  };
  $('#homeBtn').onclick = () => go('today');
  window.scrollTo(0, 0);
}

function exportSession(day, part) {
  const out = [`# Tag ${day.day} — ${day[part].label} (${day.date})`, ''];
  for (const b of day[part].blocks) {
    out.push(`## ${b.name}`);
    const a = S.answers[b.id] || {};
    if (b.type === 'read') {
      b.questions.forEach((q, i) => out.push(`**${i + 1}. ${q.text}**`, a[q.id] || '_(leer)_', ''));
    } else if (b.type === 'drill') {
      b.items.forEach((it, i) => {
        const mine = a[it.id] || '_(leer)_';
        out.push(`${i + 1}. ${it.prompt}`, `   → ${mine}${S.revealed[it.id] ? '  _(Lösung angesehen)_' : ''}`);
      });
      out.push('');
    } else if (b.type === 'speak') {
      out.push('**Transkript:**', a.transcript || '_(leer)_', '');
    } else if (b.type === 'write') {
      const t = a.text || '';
      out.push(`_${words(t)} Wörter (Ziel ${b.min}–${b.max})_`, '', t || '_(leer)_', '');
    } else if (b.type === 'repair') {
      b.fields.forEach((f, i) => out.push(`**${i + 1}. ${f.label}**`, a[f.id] || '_(leer)_', ''));
    } else if (b.type === 'vocab') {
      Object.entries(a).forEach(([k, v]) => out.push(`- ${k.replace('reuse-', '')}: ${v}`));
      out.push('');
    }
  }
  return out.join('\n');
}

/* ============================================================
   Ansicht: Fortschritt
   ============================================================ */

function viewProgress() {
  setTop('', 'Fortschritt', false);
  const last = S.levels[S.levels.length - 1];
  const t = today();

  const cells = DAYS.length ? Array.from({ length: PLAN.totalDays }, (_, i) => {
    const d = new Date(PLAN.start); d.setDate(d.getDate() + i);
    const key = iso(d);
    const day = DAYS.find(x => x.date === key);
    let cls = 'gd';
    if (day) {
      const m = !!S.done[sessionKey(day, 'morning')], e = !!S.done[sessionKey(day, 'evening')];
      if (m && e) cls += ' full'; else if (m || e) cls += ' half';
    }
    if (key === t) cls += ' today';
    return `<div class="${cls}" title="${key}"></div>`;
  }).join('') : '';

  const groups = [...new Set(ERRORS.map(e => e.group))];

  $('#view').innerHTML = `
    <h1>Fortschritt</h1>
    <p class="lede">Einstufung ${prettyDate(BASELINE.date)} · Zielmarke C1 im Frühjahr 2027</p>

    <h3>Level</h3>
    <table class="leveltable">
      <tr><th>Fertigkeit</th><th>Einstufung</th><th>Aktuell</th></tr>
      <tr><td>Reading</td><td class="lv">${BASELINE.skills.reading}</td><td class="lv">${esc(last.reading)}</td></tr>
      <tr><td>Use of English</td><td class="lv">${BASELINE.skills.use}</td><td class="lv">${esc(last.use)}</td></tr>
      <tr><td>Writing</td><td class="lv">${BASELINE.skills.writing}</td><td class="lv">${esc(last.writing)}</td></tr>
      <tr><td>Speaking</td><td class="lv">${BASELINE.skills.speaking}</td><td class="lv">${esc(last.speaking)}</td></tr>
      <tr><td><b>Gesamt</b></td><td class="lv">${BASELINE.overall}</td><td class="lv">${esc(last.overall)}</td></tr>
    </table>

    <h2>Ferienphase</h2>
    <div class="grid-days">${cells}</div>
    <p style="font-size:13px;color:var(--ink-dim)">Halb gefüllt = eine Einheit · voll = beide Einheiten</p>

    <h2>Fehlerprofil</h2>
    <p class="callout">Ein Punkt gilt als erledigt, wenn er an <strong>drei verschiedenen Tagen</strong>
    fehlerfrei produziert wurde. Tippen zählt hoch.</p>
    ${groups.map(g => `
      <div class="errgroup">${esc(g)}</div>
      <ul class="errlist">
        ${ERRORS.filter(e => e.group === g).map(e => {
          const n = S.errors[e.id] || 0;
          return `<li class="erritem ${n >= 3 ? 'done' : ''}" data-err="${esc(e.id)}">
            <span class="box">${n >= 3 ? '✓' : n || ''}</span><span>${esc(e.text)}</span></li>`;
        }).join('')}
      </ul>`).join('')}`;

  $$('[data-err]').forEach(li => li.onclick = () => {
    const id = li.dataset.err;
    S.errors[id] = ((S.errors[id] || 0) + 1) % 4;
    save(); viewProgress();
  });
}

/* ============================================================
   Ansicht: Vokabeln
   ============================================================ */

function viewVocab() {
  setTop('', 'Vokabelbank', false);
  $('#view').innerHTML = `
    <h1>Vokabelbank</h1>
    <p class="lede">Ausdruck plus <b>eigener</b> Beispielsatz — keine Übersetzung. Übersetzungen
    bleiben passiv, eigene Sätze werden aktiv.</p>
    <div class="vocab-add">
      <input type="text" id="vTerm" placeholder="Ausdruck, z. B. „to fall short of“">
      <textarea id="vEx" placeholder="Eigener Beispielsatz auf Englisch …"></textarea>
      <button class="btn" id="vAdd">Aufnehmen</button>
    </div>
    <h3>${S.vocab.length} ${S.vocab.length === 1 ? 'Eintrag' : 'Einträge'}</h3>
    <ul class="vlist">
      ${[...S.vocab].reverse().map(v => `
        <li class="vitem">
          <div class="vterm">${esc(v.term)}</div>
          ${v.example ? `<div class="vex">${esc(v.example)}</div>` : ''}
          <div class="vmeta">
            <small>${esc(v.added)}</small>
            <button class="link-btn" data-del="${esc(v.id)}">entfernen</button>
          </div>
        </li>`).join('') || '<li class="vitem" style="color:var(--ink-dim)">Noch leer.</li>'}
    </ul>`;

  $('#vAdd').onclick = () => {
    const term = $('#vTerm').value.trim();
    if (!term) { toast('Ausdruck fehlt.'); return; }
    S.vocab.push({ id: 'v' + Date.now(), term, example: $('#vEx').value.trim(), added: today() });
    save(); viewVocab(); toast('Aufgenommen.');
  };
  $$('[data-del]').forEach(b => b.onclick = () => {
    S.vocab = S.vocab.filter(v => v.id !== b.dataset.del);
    save(); viewVocab();
  });
}

/* ============================================================
   Ansicht: Einstellungen
   ============================================================ */

function viewSettings() {
  setTop('', 'Mehr', false);
  const s = S.settings;
  $('#view').innerHTML = `
    <h1>Einstellungen</h1>

    <h2>Erinnerungen</h2>
    <p class="callout">Der Export legt zwei täglich wiederkehrende Kalendertermine mit Alarm an —
    auf iPhone und Mac zuverlässig, auch wenn die App geschlossen ist.</p>
    <div class="setrow">
      <label for="tM">Morgens<small>Reading · Use of English · Speaking</small></label>
      <input type="time" id="tM" value="${esc(s.morning)}">
    </div>
    <div class="setrow">
      <label for="tE">Abends<small>Writing · Repair · Vokabeln</small></label>
      <input type="time" id="tE" value="${esc(s.evening)}">
    </div>
    <button class="btn wide" id="icsBtn" style="margin-top:18px">Kalendertermine erzeugen</button>
    <button class="btn ghost wide" id="notifyBtn" style="margin-top:10px">Benachrichtigung testen</button>

    <h2>Darstellung</h2>
    <div class="setrow">
      <label for="theme">Erscheinungsbild</label>
      <select id="theme">
        <option value="auto"${s.theme === 'auto' ? ' selected' : ''}>Automatisch</option>
        <option value="light"${s.theme === 'light' ? ' selected' : ''}>Hell</option>
        <option value="dark"${s.theme === 'dark' ? ' selected' : ''}>Dunkel</option>
      </select>
    </div>
    <div class="setrow">
      <label for="snd">Ton bei Zeitablauf</label>
      <select id="snd">
        <option value="1"${s.sound ? ' selected' : ''}>An</option>
        <option value="0"${!s.sound ? ' selected' : ''}>Aus</option>
      </select>
    </div>

    <h2>Installieren</h2>
    <p style="font-size:15px"><b>iPhone:</b> in Safari öffnen → Teilen → „Zum Home-Bildschirm“.<br>
    <b>Mac:</b> in Safari öffnen → Ablage → „Zum Dock hinzufügen“.</p>

    <h2>Daten</h2>
    <p style="font-size:15px;color:var(--ink-dim)">Alles liegt lokal auf dem Gerät — kein Konto, kein Server.
    Sichere dir die Datei, bevor du den Browserspeicher löschst.</p>
    <div class="actions" style="flex-direction:column">
      <button class="btn ghost wide" id="expBtn">Alles als Datei sichern</button>
      <button class="btn ghost wide" id="resetBtn">Fortschritt zurücksetzen</button>
    </div>`;

  $('#tM').onchange = e => { S.settings.morning = e.target.value; save(); };
  $('#tE').onchange = e => { S.settings.evening = e.target.value; save(); };
  $('#snd').onchange = e => { S.settings.sound = e.target.value === '1'; save(); };
  $('#theme').onchange = e => { S.settings.theme = e.target.value; save(); applyTheme(); };
  $('#icsBtn').onclick = downloadICS;
  $('#notifyBtn').onclick = testNotification;
  $('#expBtn').onclick = () => {
    dl('english-c1-sicherung.json', JSON.stringify(S, null, 2), 'application/json');
    toast('Gesichert.');
  };
  $('#resetBtn').onclick = () => {
    if (!confirm('Alle Antworten, Vokabeln und der Fortschritt werden gelöscht. Fortfahren?')) return;
    S = defaults(); save(); applyTheme(); go('today'); toast('Zurückgesetzt.');
  };
}

function applyTheme() {
  const t = S.settings.theme;
  if (t === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', t);
}

function dl(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/* Zwei tägliche Termine mit Alarm, als Ortszeit ohne Zeitzonenangabe */
function downloadICS() {
  const stamp = new Date().toISOString().replace(/[-:]|\.\d{3}/g, '');
  const until = PLAN.end.replace(/-/g, '') + 'T235900';
  const url = location.origin + location.pathname;

  const ev = (uid, time, title, desc) => {
    const [h, m] = time.split(':');
    const start = PLAN.start.replace(/-/g, '') + `T${h}${m}00`;
    const endH  = String((+h + 1) % 24).padStart(2, '0');
    const end   = PLAN.start.replace(/-/g, '') + `T${endH}${m}00`;
    return [
      'BEGIN:VEVENT', `UID:${uid}@english-c1`, `DTSTAMP:${stamp}`,
      `DTSTART:${start}`, `DTEND:${end}`,
      `RRULE:FREQ=DAILY;UNTIL=${until}`,
      `SUMMARY:${title}`, `DESCRIPTION:${desc}`, `URL:${url}`,
      'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${title}`, 'TRIGGER:PT0S', 'END:VALARM',
      'END:VEVENT'
    ].join('\r\n');
  };

  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//English C1//DE', 'CALSCALE:GREGORIAN',
    ev('ec1-morning', S.settings.morning, 'English C1 — Morgens (30 Min)', 'Reading, Use of English, Speaking'),
    ev('ec1-evening', S.settings.evening, 'English C1 — Abends (30 Min)',  'Writing, Repair, Vokabelbank'),
    'END:VCALENDAR'
  ].join('\r\n');

  dl('english-c1-erinnerungen.ics', ics, 'text/calendar');
  toast('Datei öffnen und in den Kalender übernehmen.');
}

async function testNotification() {
  if (!('Notification' in window)) { toast('Dieser Browser kennt keine Benachrichtigungen.'); return; }
  let p = Notification.permission;
  if (p === 'default') p = await Notification.requestPermission();
  if (p !== 'granted') { toast('Nicht erlaubt — nimm den Kalender-Export.'); return; }
  new Notification('English C1', { body: 'So sieht die Erinnerung aus. 30 Minuten, dann ist Feierabend.' });
}

/* ============================================================
   Start
   ============================================================ */

document.addEventListener('click', e => {
  if (e.target.closest('#recBtn')) toggleRec();
});
$$('.tab').forEach(b => b.onclick = () => go(b.dataset.tab));
$('#backBtn').onclick = () => go('today');
$('#timerBtn').onclick = () => Timer.toggle();

applyTheme();
go('today');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
