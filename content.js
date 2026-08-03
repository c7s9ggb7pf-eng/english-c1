/* Inhalte des Trainings.
   Neue Tage werden unten an DAYS angehängt — die App findet den heutigen Tag über das Datum. */

export const PLAN = {
  start: '2026-08-01',
  end:   '2026-09-01',
  goal:  'C1',
  totalDays: 32,
  phases: [
    { n: 1, name: 'Fundament',            from: '2026-08-01', to: '2026-08-09' },
    { n: 2, name: 'B2 festigen',          from: '2026-08-10', to: '2026-08-18' },
    { n: 3, name: 'Business & Bewerbung', from: '2026-08-19', to: '2026-08-26' },
    { n: 4, name: 'Simulation',           from: '2026-08-27', to: '2026-09-01' }
  ]
};

export const BASELINE = {
  date: '2026-07-31',
  overall: 'B1+',
  skills: { reading: 'B1+', use: 'B1', writing: 'B1+', speaking: 'B1+/B2−' }
};

/* Fehlerprofil aus der Einstufung. Ein Punkt gilt als erledigt,
   wenn er an drei verschiedenen Tagen fehlerfrei produziert wurde. */
export const ERRORS = [
  { id: 'precision', group: 'Lesen',     text: 'Wortgenauigkeit — gives away ≠ gives way, employees ≠ employers' },
  { id: 'inference', group: 'Lesen',     text: 'Inferenz — implizite Aussagen erkennen' },
  { id: 'paraphr',   group: 'Lesen',     text: 'Umformulieren statt zitieren' },
  { id: 'speed',     group: 'Lesen',     text: 'Lesetempo — Testtext in 8 statt 20 Minuten' },
  { id: 'wrather',   group: 'Grammatik', text: 'would rather + Subjekt + Vergangenheitsform' },
  { id: 'inversion', group: 'Grammatik', text: 'Inversion nach negativem Adverb' },
  { id: 'wish',      group: 'Grammatik', text: 'wish + Past Perfect' },
  { id: 'saidto',    group: 'Grammatik', text: 'Passiv der Meinung — is said to be' },
  { id: 'cond2',     group: 'Grammatik', text: 'Konditional Typ 2 ohne would im if-Satz' },
  { id: 'preps',     group: 'Wendungen', text: 'fall short of · taken aback · agree with · tendency to' },
  { id: 'spelling',  group: 'Schreiben', text: 'different · development · business · statement · academic' },
  { id: 'length',    group: 'Schreiben', text: 'Mindestlänge einhalten' },
  { id: 'counter',   group: 'Schreiben', text: 'Gegenposition behandeln, nicht die eigene Sicht verdoppeln' },
  { id: 'degree',    group: 'Schreiben', text: 'Grad der Zustimmung benennen' },
  { id: 'repair',    group: 'Sprechen',  text: 'Reparieren statt neu anfangen' },
  { id: 'topicvoc',  group: 'Sprechen',  text: 'Themenwortschatz statt Umschreibung' },
  { id: 'filler',    group: 'Sprechen',  text: 'Füllwortdichte senken' }
];

export const DAYS = [
  {
    day: 1,
    date: '2026-08-01',
    phase: 1,
    focus: 'Präzises Lesen, fünf Grammatiklücken, Reparieren statt Neuanfang',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd1-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'Learning to Fail',
          kicker: 'Text 1 · Phase 1',
          intro: 'Bewusst dein Thema aus dem Speaking-Teil der Einstufung — du hast die Idee schon, jetzt holst du dir die Sprache dazu.',
          paragraphs: [
            'There is a comfortable story we tell about failure: that it teaches us, that every setback is a lesson in disguise. It is a story worth treating with some suspicion. Failure teaches nothing on its own. What teaches is the review that follows it — and most people, most of the time, would rather move on than sit with what went wrong.',
            'This is why cultures differ less in how often people fail than in what happens afterwards. Where a failed venture ends a career, the rational response is to attempt nothing that might fail. Where it is treated as tuition paid, people take on problems whose outcome they cannot guarantee. Neither culture is braver than the other; they simply price risk differently.',
            'The practical question, then, is not whether you are willing to fail, but whether you have any mechanism for extracting something from it. Without that, repeated failure produces only repetition.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text übernehmen.',
          questions: [
            { id: 'q1', text: 'The writer is sceptical about a widely held belief. What is the belief, and what is his objection to it?', hint: 'Max. 2 Sätze.' },
            { id: 'q2', text: 'Explain “they simply price risk differently” in your own words.' },
            { id: 'q3', text: 'What does “repeated failure produces only repetition” mean?' },
            { id: 'q4', text: 'Does the writer think failure is useful? Answer yes or no, then support it with one exact quotation.', hint: 'Präzisionsfrage — lies genau, bevor du antwortest.' },
            { id: 'q5', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.', hint: 'Du kannst sie direkt im Reiter „Vokabeln“ anlegen.' }
          ]
        },
        {
          id: 'd1-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Deine fünf Lücken aus der Einstufung',
          rules: [
            { title: 'would rather + Subjekt + Vergangenheitsform', body: 'Vergangenheitsform, aber Gegenwartsbedeutung.', example: 'I’d rather you <b>didn’t</b> tell anyone.' },
            { title: 'Negatives Adverb vorn → Inversion', body: 'Hilfsverb rutscht vor das Subjekt, wie in einer Frage.', example: '<b>Little did they know</b> … · <b>Never have I seen</b> …' },
            { title: 'wish + Past Perfect', body: 'Bedauern über Vergangenes. Für die Gegenwart dagegen: I wish I <i>had</i> more time.', example: 'I wish you <b>had told</b> me.' },
            { title: 'Passiv der Meinung', body: '„man sagt, dass …“ ohne „people“.', example: 'People say he is rich. → He <b>is said to be</b> rich.' },
            { title: 'Feste Präpositionen', body: 'Nicht logisch, nur auswendig.', example: 'fall short <b>of</b> · taken <b>aback</b> · agree <b>with</b> · a tendency <b>to</b>' }
          ],
          instruction: 'Vollständige Sätze ausschreiben, nicht nur das fehlende Wort. Erst danach prüfen.',
          items: [
            { id: 'i1',  prompt: 'Mir wäre lieber, du kommst heute nicht vorbei.',            key: 'would rather', solution: 'I’d rather you didn’t come today.' },
            { id: 'i2',  prompt: 'Sie ahnten nicht, dass die Firma bereits verkauft war.',    key: 'Little …',     solution: 'Little did they know that the company had already been sold.' },
            { id: 'i3',  prompt: 'Ich wünschte, ich hätte das früher gewusst.',               key: 'wish',         solution: 'I wish I had known that earlier.' },
            { id: 'i4',  prompt: 'Man sagt, das Unternehmen stecke in Schwierigkeiten.',      key: 'is said to',   solution: 'The company is said to be in trouble.' },
            { id: 'i5',  prompt: 'Erst als ich den Text ein zweites Mal las, verstand ich ihn.', key: 'Not until …', solution: 'Not until I read the text a second time did I understand it.' },
            { id: 'i6',  prompt: 'Das Ergebnis blieb hinter den Erwartungen zurück.',         key: 'fall short',   solution: 'The result fell short of expectations.' },
            { id: 'i7',  prompt: 'Seine Antwort überrumpelte mich völlig.',                   key: 'aback',        solution: 'I was completely taken aback by his answer.' },
            { id: 'i8',  prompt: 'Da stimme ich dir zu.',                                     key: 'agree',        solution: 'I agree with you there.' },
            { id: 'i9',  prompt: 'Wäre die Frage anders formuliert, würde ich zustimmen.',    key: 'If … were',    solution: 'If the question were worded differently, I would agree.' },
            { id: 'i10', prompt: 'Noch nie habe ich eine so schlechte Erklärung gehört.',     key: 'Never …',      solution: 'Never have I heard such a poor explanation.' }
          ]
        },
        {
          id: 'd1-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Do people really learn from failure? Give your own answer, not the text’s.',
          ruleTitle: 'Die einzige neue Regel heute: nicht neu anfangen — reparieren.',
          ruleBody: 'In deinem Einstufungs-Transkript hast du sechsmal einen Satz abgebrochen und neu begonnen. Auf C1 bricht man nicht ab, man biegt um. Benutze mindestens drei dieser Wendungen:',
          phrases: [
            'or rather …',
            'what I mean is …',
            'let me put that differently …',
            '… that is to say …',
            '— or at least that’s how it looks from here.'
          ],
          after: 'Danach denselben Monolog ein zweites Mal, nachdem du die Korrektur hast. Die Wiederholung ist die eigentliche Übung, nicht der erste Versuch.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd1-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Gegenposition und Grad der Zustimmung',
          prompt: 'Should schools teach students how to handle failure? Take a clear position, then address one serious counter-argument before you conclude.',
          min: 140, max: 160,
          checklist: [
            'These steht im ersten Satz — die Aufgabenstellung nicht abschreiben.',
            'Ein echtes Gegenargument, nicht die eigene Sicht ein zweites Mal.',
            'Grad benennen: largely / to a limited extent / only where …',
            'Schreibung prüfen: different · development · business · statement · academic'
          ]
        },
        {
          id: 'd1-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Nimm die drei Sätze aus dem Morgen-Drill, die falsch waren, und schreibe sie neu — aus dem Kopf, ohne zurückzublättern. Danach die sechs Wörter aus dem Fehlerprofil je zweimal korrekt.',
          fields: [
            { id: 'r1', label: 'Falscher Satz 1 → neu' },
            { id: 'r2', label: 'Falscher Satz 2 → neu' },
            { id: 'r3', label: 'Falscher Satz 3 → neu' },
            { id: 'r4', label: 'Rechtschreibung: die sechs Wörter, je zweimal' }
          ]
        },
        {
          id: 'd1-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf neue Ausdrücke aus dem Morgentext aufnehmen, drei alte aktiv in einem neuen Satz wiederverwenden.'
        }
      ]
    }
  },

  {
    day: 2,
    date: '2026-08-02',
    phase: 1,
    focus: 'Inversion sitzt noch nicht · Ja-Nein-Antwort und Beleg müssen zusammenpassen · Themenwortschatz statt Umschreibung',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd2-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Trouble with Advice',
          kicker: 'Text 2 · Phase 1',
          intro: 'Gestern hast du bei Frage 4 „Yes“ geantwortet und dann einen Beleg zitiert, der das Gegenteil sagt. Heute steht genau das noch einmal drin — Antwort und Beleg müssen zusammenpassen.',
          paragraphs: [
            'Ask ten people for advice and you will get eleven answers. That is not a failure of the people you asked; it is a feature of advice itself. Advice is a report on what worked once, for someone else, under conditions that have since changed. The person giving it remembers the decision but rarely the luck.',
            'Which is why the useful question is not “what should I do?” but “what were you looking at when you decided?” The first invites a verdict; the second gives you the reasoning, and reasoning travels better than conclusions do. Few people volunteer it. Hardly anyone is asked.',
            'None of this makes advice worthless. It makes it evidence rather than instruction — one observation, from one angle, to be weighed against the others. Treated that way, even bad advice tells you something: at the very least, it tells you how your problem looks to somebody standing outside it.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text übernehmen. Ziel für Lesen + Fragen: 10 Minuten, nicht 20.',
          questions: [
            { id: 'q1', text: 'Why does the writer say that ten people give you eleven answers? Explain the point behind the joke.', hint: 'Inferenz — es steht nicht wörtlich da.' },
            { id: 'q2', text: 'Explain “reasoning travels better than conclusions do” in your own words.' },
            { id: 'q3', text: 'Does the writer recommend asking people what you should do? Answer yes or no, then quote the exact words that prove your answer.', hint: 'Präzisionsfrage. Erst den Beleg suchen, dann yes/no schreiben — nicht umgekehrt.' },
            { id: 'q4', text: '“Hardly anyone is asked.” Asked what, and by whom? One sentence.', hint: 'Ein Wort entscheidet: hardly ist nicht hard.' },
            { id: 'q5', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd2-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Zweiter Durchgang — gestern 2 von 10 richtig',
          rules: [
            { title: 'Inversion: das Hilfsverb springt vor das Subjekt', body: 'Gestern: <i>„Little she doesn’t know …“</i> und <i>„Not until I read the text I understood him.“</i> — In beiden fehlt die Umstellung. Nach dem negativen Adverb kommt <b>Hilfsverb + Subjekt + Grundform</b>, wie in einer Frage. Und: kein zweites „not“, das Negative steckt schon im Adverb.', example: 'Little <b>did she know</b> … · Not until I read it again <b>did I understand</b> it.' },
            { title: 'would rather + Subjekt + Vergangenheitsform', body: 'Gestern: <i>„I would rather prefer that you do not come.“</i> — <b>rather</b> und <b>prefer</b> sind dasselbe Wort zweimal, und nach <i>I’d rather you</i> steht die Vergangenheitsform.', example: 'I’d rather you <b>didn’t</b> come today.' },
            { title: 'wish: zwei Zeiten, zwei Bedeutungen', body: 'Bedauern über Vergangenes → <b>had</b> + Partizip. Wunsch über die Gegenwart → einfache Vergangenheit. Gestern: <i>„I whish I already know it.“</i> — Schreibung <b>wish</b>, und die Zeit fehlte.', example: 'I wish I <b>had known</b> that. (damals) · I wish I <b>had</b> more time. (jetzt)' },
            { title: 'Passiv der Meinung — is said to <i>be</i> / to <i>have</i>', body: 'Gestern: <i>„It is said to that the company had stuck …“</i> — Nach <b>to</b> muss ein Verb kommen. Subjekt ist die Sache selbst, nicht „it“.', example: 'The company <b>is said to be</b> in trouble. · He <b>is said to have left</b> in 2019.' },
            { title: 'Feste Wendungen — Aktiv, nicht Passiv', body: 'Gestern: <i>„The result was fallen short“</i> (fall short ist aktiv) und <i>„His answer pushed me aback“</i> (das Verb ist <b>take</b>). <i>agree</i> braucht ein Gegenüber: agree <b>with</b> sb.', example: 'The result <b>fell short of</b> expectations. · I was <b>taken aback</b>. · I <b>agree with</b> you.' }
          ],
          instruction: 'Vollständige Sätze ausschreiben, aus dem Kopf, ohne oben nachzuschlagen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'j1',  prompt: 'Mir wäre lieber, du sprichst das nicht in der Sitzung an.',       key: 'would rather', solution: 'I’d rather you didn’t raise that in the meeting.' },
            { id: 'j2',  prompt: 'Damals ahnte ich nicht, wie viel davon abhing.',                  key: 'Little …',     solution: 'Little did I know how much depended on it.' },
            { id: 'j3',  prompt: 'Erst als sie nachfragte, verstand ich das Problem.',              key: 'Not until …',  solution: 'Not until she asked did I understand the problem.' },
            { id: 'j4',  prompt: 'Noch nie hat er zugegeben, dass er sich geirrt hat.',             key: 'Never …',      solution: 'Never has he admitted that he was wrong.' },
            { id: 'j5',  prompt: 'Ich wünschte, ich hätte den Vertrag genauer gelesen.',            key: 'wish (damals)', solution: 'I wish I had read the contract more carefully.' },
            { id: 'j6',  prompt: 'Ich wünschte, ich hätte jetzt mehr Zeit dafür.',                  key: 'wish (jetzt)', solution: 'I wish I had more time for it.' },
            { id: 'j7',  prompt: 'Man geht davon aus, dass das Unternehmen expandiert.',            key: 'is believed to', solution: 'The company is believed to be expanding.' },
            { id: 'j8',  prompt: 'Man sagt, er habe die Firma 2019 verlassen.',                     key: 'is said to have', solution: 'He is said to have left the company in 2019.' },
            { id: 'j9',  prompt: 'Die Zahlen blieben deutlich hinter dem Plan zurück.',             key: 'fall short of', solution: 'The figures fell well short of the plan.' },
            { id: 'j10', prompt: 'Ihre Antwort hat mich überrumpelt, aber ich stimme ihr zu.',      key: 'aback · agree', solution: 'I was taken aback by her answer, but I agree with her.' }
          ]
        },
        {
          id: 'd2-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Whose advice do you actually take — and what makes someone worth listening to?',
          ruleTitle: 'Heute neu: Themenwortschatz statt Umschreibung.',
          ruleBody: 'Gestern hast du dreimal „setting“ gesagt, wo das Wort mindset, attitude oder norm heißt, und der Rest war Alltagswortschatz. Das Reparieren („what I mean is“) hat schon funktioniert — das behältst du bei. Neu: mindestens fünf dieser Ausdrücke müssen vorkommen.',
          phrases: [
            'track record — a record of past results',
            'judgement (not: good feeling)',
            'with hindsight — looking back',
            'to weigh sth up — to consider carefully',
            'to second-guess sb — to doubt their decision afterwards',
            'bias — a systematic tilt in how someone sees things',
            'mindset / attitude / norm — instead of “setting”'
          ],
          after: 'Danach dieselben 90 Sekunden ein zweites Mal, mit der Korrektur vor dir. Zähle im ersten Durchgang deine „yeah“ und „um“ — im zweiten sollen es weniger als fünf sein.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd2-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Grad der Zustimmung — und ein echtes Gegenargument',
          prompt: '“The best advice comes from people who have failed at the same thing.” To what extent do you agree?',
          min: 140, max: 160,
          checklist: [
            'Die Aufgabenstellung nicht abschreiben — gestern war dein erster Satz die Frage. Beginne mit deiner These.',
            '„To what extent“ verlangt ein Maß: largely · to a limited extent · only where …',
            'Ein echtes Gegenargument, das gegen dich spricht, dann deine Entkräftung.',
            'Mindestens 140 Wörter — gestern waren es zu wenige.',
            'Schreibung prüfen: taught · believes · business · development · different · statement'
          ]
        },
        {
          id: 'd2-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Deine acht falschen Sätze von gestern, aus dem Kopf neu geschrieben — ohne im Morgen-Drill nachzusehen. Danach die Wörter, die falsch geschrieben waren.',
          fields: [
            { id: 'p1', label: '„Little she doesn’t know that the company was even sold.“ → korrekt' },
            { id: 'p2', label: '„Not until I first red the text I understood him.“ → korrekt' },
            { id: 'p3', label: '„Nerver heard a worser explanation like that“ → korrekt, mit Never am Anfang' },
            { id: 'p4', label: '„I would rather prefer that you do not come apart.“ → korrekt' },
            { id: 'p5', label: '„I whish I already know it.“ → korrekt (Bedauern über die Vergangenheit)' },
            { id: 'p6', label: '„It is said to that the company had stuck in difficuties.“ → korrekt' },
            { id: 'p7', label: '„The result was fallen short of the expectations.“ + „His answer pushed me aback.“ → beide korrekt' },
            { id: 'p8', label: 'Je zweimal korrekt schreiben: wish · taught · believes · difficulties · worse · never' }
          ]
        },
        {
          id: 'd2-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (z. B. to weigh sth against, at the very least, to volunteer information). Gestern ist die Bank leer geblieben — heute nicht.'
        }
      ]
    }
  },

  {
    day: 3,
    date: '2026-08-03',
    phase: 1,
    focus: 'Umformulieren statt Zitieren · deutsche Interferenzen (would im if-Satz, agree to/with) · Füllwörter senken',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd3-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'Deciding Not to Decide',
          kicker: 'Text 3 · Phase 1',
          intro: 'Dichter als die beiden Texte davor. Zwei Fragen verlangen ausdrücklich, dass du ein Wort des Textes nicht benutzt — Umformulieren ist heute die Hauptübung, nicht die Nebensache.',
          paragraphs: [
            'Delay has a bad name. We treat the person who decides quickly as decisive and the one who waits as weak, when in fact waiting is itself a decision — one with costs and benefits like any other. The question is never whether to delay, but what the delay is buying you.',
            'Sometimes it buys information. A choice made in March on the basis of March’s evidence may look reckless by June, and the manager who held off was not indecisive but patient. Sometimes, though, delay buys nothing at all: the evidence will not improve, and waiting merely postpones the discomfort of choosing. Few of us can tell the two apart while we are in the middle of it. That is the honest difficulty, and no amount of confidence dissolves it.',
            'One test is worth applying. Ask what would have to be true for you to decide, and when you expect to know it. If you cannot answer either half, you are not gathering information. You are avoiding a decision, and calling it judgement.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 10 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer describes two kinds of waiting. What is the difference between them? Answer without using the words “delay” or “information”.', hint: 'Umformulieren — die Sperre ist der eigentliche Sinn der Aufgabe.' },
            { id: 'q2', text: 'Explain “no amount of confidence dissolves it” in your own words.' },
            { id: 'q3', text: 'Does the writer think that waiting is a sign of weakness? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfrage. Die Wörter „as weak“ stehen im Text — aber wessen Sicht geben sie wieder? Erst Beleg, dann yes/no.' },
            { id: 'q4', text: '“Few of us can tell the two apart.” Which two things? And does “few” mean many people or not many? One sentence.', hint: 'Ein Wort entscheidet über den ganzen Satz.' },
            { id: 'q5', text: 'The writer proposes a test at the end. State it in two steps, in your own words.' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd3-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Deutsche Interferenzen und die festen Wendungen',
          rules: [
            { title: 'Konditional Typ 2 — kein <i>would</i> im if-Satz', body: 'Im Deutschen steht „würde“ in beiden Hälften, im Englischen nur in der Hauptsatz-Hälfte. <i>If I would have time</i> ist der häufigste deutsche Fehler überhaupt.', example: '<b>If I had</b> more time, I <b>would</b> do it differently. · <b>If it were</b> up to me …' },
            { title: 'agree <i>with</i> jemandem · agree <i>to</i> etwas', body: 'Menschen: <b>with</b>. Vorschläge, Pläne, Bedingungen: <b>to</b>. Und: eine Entwicklung ist gut <b>for</b> jemanden, nicht <i>to</i>.', example: 'I <b>agree with</b> you. · She <b>agreed to</b> the plan. · a good development <b>for</b> the company' },
            { title: 'Vier feste Wendungen, die dir in der Einstufung gefehlt haben', body: 'Nicht herleiten, nur abrufen. Alle vier kommen im heutigen Drill vor.', example: '<b>under the pretext of</b> · <b>a tendency to</b> · <b>for all its flaws</b> · <b>strange as it may seem</b>' },
            { title: 'Inversion, dritte Runde: <i>Not only …</i>', body: 'Dieselbe Mechanik wie <i>Little did I know</i> — nach dem vorangestellten negativen Ausdruck kommt Hilfsverb vor Subjekt. Der zweite Teil braucht <b>but … also</b>.', example: '<b>Not only was</b> the report late, <b>but</b> it was <b>also</b> incomplete.' },
            { title: 'would rather über Vergangenes', body: 'Gegenwart: <i>I’d rather you didn’t</i>. Vergangenheit dagegen mit <b>had</b> + Partizip — parallel zu <i>wish</i>.', example: 'I’d rather you <b>had asked</b> me first. · I wish you <b>had asked</b> me first.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'k1',  prompt: 'Wenn ich mehr Zeit hätte, würde ich das anders angehen.',            key: 'If … had',        solution: 'If I had more time, I would approach it differently.' },
            { id: 'k2',  prompt: 'Sie stimmte dem Plan zu, obwohl sie mir nicht zustimmte.',           key: 'agree to · with', solution: 'She agreed to the plan, although she didn’t agree with me.' },
            { id: 'k3',  prompt: 'Unter dem Vorwand, helfen zu wollen, sah er sich die Zahlen an.',    key: 'pretext',         solution: 'Under the pretext of helping, he looked at the figures.' },
            { id: 'k4',  prompt: 'Er neigt dazu, Probleme zu spät anzusprechen.',                      key: 'tendency',        solution: 'He has a tendency to raise problems too late.' },
            { id: 'k5',  prompt: 'Bei allen Schwächen ist das System immer noch das beste, das wir haben.', key: 'For all …',  solution: 'For all its flaws, the system is still the best we have.' },
            { id: 'k6',  prompt: 'So merkwürdig es klingen mag, das Warten war die bessere Entscheidung.', key: 'Strange as …', solution: 'Strange as it may seem, waiting was the better decision.' },
            { id: 'k7',  prompt: 'Nicht nur kam der Bericht zu spät, er war auch unvollständig.',      key: 'Not only …',      solution: 'Not only was the report late, but it was also incomplete.' },
            { id: 'k8',  prompt: 'Man nimmt an, dass die Entscheidung längst gefallen ist.',           key: 'is thought to',   solution: 'The decision is thought to have already been made.' },
            { id: 'k9',  prompt: 'Ich wünschte, wir hätten früher entschieden.',                       key: 'wish',            solution: 'I wish we had decided earlier.' },
            { id: 'k10', prompt: 'Mir wäre lieber gewesen, du hättest mich vorher gefragt.',           key: 'would rather',    solution: 'I’d rather you had asked me first.' }
          ]
        },
        {
          id: 'd3-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Think of a decision you put off. Was the waiting worth it — and how would you know?',
          ruleTitle: 'Heute neu: Füllwörter durch Pausen ersetzen.',
          ruleBody: 'In der Einstufung war jede zweite Satzfuge ein „yeah“ oder „um“. Eine stille Pause klingt auf C1 souverän, ein Füllwort klingt unsicher — der Unterschied ist nur Gewohnheit. Reparieren und Themenwortschatz bleiben, dazu kommen diese Überleitungen; benutze mindestens drei.',
          phrases: [
            'There are two sides to this. First … Second …',
            'Let me take a concrete example.',
            'The honest answer is that I don’t know yet — but what I’d look at is …',
            'That said, …',
            'to hold off (on sth) · to put sth off · to weigh sth up · with hindsight'
          ],
          after: 'Zähle im ersten Durchgang deine „yeah“ und „um“ mit. Zweiter Durchgang: dieselben 90 Sekunden, aber unter fünf Füllwörtern. An jeder Stelle, an der ein „um“ käme, machst du stattdessen eine Pause und atmest.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd3-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Beide Sichtweisen — und zehn Prozent länger als gestern',
          prompt: 'Some people believe important decisions should be made quickly; others think they should be delayed for as long as possible. Discuss both views and give your own opinion.',
          min: 160, max: 180,
          checklist: [
            'Erster Satz: deine These oder die Spannung zwischen beiden Sichten — nie die abgeschriebene Aufgabe.',
            '„Discuss both views“ heißt: beide bekommen einen eigenen Absatz, nicht einen Nebensatz.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably · rarely.',
            '160–180 Wörter. Die Zählung unten läuft mit.',
            'Schreibung prüfen: different · development · business · statement · academic · generally · decision'
          ]
        },
        {
          id: 'd3-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Die falschen Sätze von heute Morgen neu — aus dem Kopf, nicht abgeschrieben.',
          fields: [
            { id: 'r1', label: 'Falscher Drill-Satz 1 → neu, mit der Regel dahinter in drei Wörtern' },
            { id: 'r2', label: 'Falscher Drill-Satz 2 → neu, mit der Regel dahinter' },
            { id: 'r3', label: 'Falscher Drill-Satz 3 → neu, mit der Regel dahinter' },
            { id: 'r4', label: 'Die Reading-Frage, bei der du am unsichersten warst — Antwort neu, in eigenen Worten, ohne ein einziges Zitat' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd3-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (to hold off · to postpone sth · to tell two things apart · no amount of … · to be worth applying). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },

  {
    day: 4,
    date: '2026-08-04',
    phase: 1,
    focus: 'Sammelrunde ohne bestätigtes Ergebnis · Grad der Zustimmung im Schreiben · Reparieren, Themenwortschatz und Pausen zusammen',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd4-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Reputation Tax',
          kicker: 'Text 4 · Phase 1',
          intro: 'Von Tag 3 liegt keine Sicherung vor — deshalb heute keine neuen Fehlerzitate, sondern eine erste Sammelrunde: alles aus den Tagen 1 bis 3 kommt zusammen vor, bestätigt ist noch nichts. Ziel für Text + Fragen: 9 statt 10 Minuten.',
          paragraphs: [
            'Organisations that say they reward risk-taking rarely mean it the way employees assume. What they reward is risk that pays off; what they penalise, often without saying so, is the failure itself, not the decision behind it. A single visible setback is remembered longer, and weighed more heavily, than several unremarked successes. The result is an asymmetry that no policy document mentions and every employee eventually learns.',
            'The stigma, when it appears, rarely attaches to the mistake as such. It attaches to what the person does next, whether they explain, defend, or simply go quiet. Someone who names a failure early and sets out what they would do differently is, in most organisations, treated more favourably than someone whose project succeeded but who cannot say why. This is not because failure is admired; the explanation is evidence of judgement, and judgement is what was actually being tested.',
            'None of this makes resilience the same as toughness. Toughness absorbs a blow and carries on unchanged; resilience uses the blow to revise something. The test is not whether someone can survive a setback without visible damage, plenty of people manage that by simply refusing to look at it. The real test is what changes in their next decision, and whether they can say, precisely, what that change was.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 9 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer distinguishes between what organisations claim to reward and what they actually penalise. What is the difference?', hint: 'Inferenz — die Formulierung „often without saying so“ ist der Hinweis.' },
            { id: 'q2', text: 'Explain “an asymmetry that no policy document mentions” in your own words.' },
            { id: 'q3', text: 'Does the writer think the stigma attaches to the mistake itself? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfrage. Erst den Beleg suchen, dann yes/no festlegen.' },
            { id: 'q4', text: '“Toughness absorbs a blow and carries on unchanged.” How does the writer say resilience differs from this? One sentence, without using the word “unchanged”.' },
            { id: 'q5', text: 'What, according to the writer, is the real test of resilience?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd4-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Sammelrunde — alle bisherigen Punkte in einer Runde, nichts ist bislang bestätigt',
          rules: [
            { title: 'Passiv der Meinung — Erweiterung: is known to <i>have</i> + Partizip', body: 'Wie <i>is said to</i> und <i>is believed to</i>, aber für gesichertes Wissen statt Gerücht. Subjekt bleibt die Sache oder Person selbst, nie „it“.', example: 'People know he made the decision alone. → He <b>is known to have</b> made the decision alone.' },
            { title: 'Inversion — vier Auslöser im Überblick', body: '<i>Little</i>, <i>Never</i>, <i>Not until</i>, <i>Not only</i> — nach jedem steht Hilfsverb vor Subjekt, wie in einer Frage. Nach <i>Not only</i> zusätzlich <b>but … also</b> im zweiten Teil.', example: '<b>Never had</b> the team seen such a schedule. · <b>Not only did</b> he miss the deadline, <b>but</b> he <b>also</b> said nothing.' },
            { title: 'Konditional Typ 2 — kein <i>would</i> im if-Satz', body: 'Deutsches „würde“ steht in beiden Hälften, Englisch nur in der Hauptsatz-Hälfte.', example: '<b>If</b> the result <b>were</b> different, nobody <b>would</b> question the method.' },
            { title: 'agree <i>to</i> / agree <i>with</i> / a development <i>for</i>', body: 'Menschen: <b>with</b>. Pläne, Bedingungen: <b>to</b>. Eine Entwicklung ist gut <b>for</b> jemanden.', example: 'She <b>agreed to</b> the terms, although her colleagues didn’t <b>agree with</b> her.' },
            { title: 'Feste Wendungen — Sammelrunde', body: 'Alle bislang geübten Wendungen in einer Runde: <b>fall short of</b> · <b>taken aback</b> · <b>under the pretext of</b> · <b>a tendency to</b> · <b>for all its flaws</b> · <b>strange as it may seem</b>.', example: '<b>For all its flaws</b>, the plan was the only option, <b>strange as it may seem</b>.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd4i1',  prompt: 'Man geht davon aus, dass die Firma den Auftrag verloren hat.',                          key: 'is thought to have', solution: 'The company is thought to have lost the contract.' },
            { id: 'd4i2',  prompt: 'Es ist bekannt, dass sie die Entscheidung allein getroffen hat.',                       key: 'is known to have',   solution: 'She is known to have made the decision alone.' },
            { id: 'd4i3',  prompt: 'Noch nie hatte das Team einen so knappen Zeitplan gesehen.',                            key: 'Never …',            solution: 'Never had the team seen such a tight schedule.' },
            { id: 'd4i4',  prompt: 'Nicht nur verpasste er die Frist, er informierte auch niemanden.',                      key: 'Not only …',         solution: 'Not only did he miss the deadline, but he also told no one.' },
            { id: 'd4i5',  prompt: 'Wenn das Ergebnis anders wäre, würde niemand die Methode infrage stellen.',             key: 'If … were',          solution: 'If the result were different, nobody would question the method.' },
            { id: 'd4i6',  prompt: 'Wenn er mehr Erfahrung hätte, würde man ihm die Aufgabe übertragen.',                   key: 'If … had',           solution: 'If he had more experience, they would give him the task.' },
            { id: 'd4i7',  prompt: 'Sie stimmte den neuen Bedingungen zu, obwohl die Kollegen ihr nicht zustimmten.',       key: 'agree to · with',    solution: 'She agreed to the new terms, although her colleagues didn’t agree with her.' },
            { id: 'd4i8',  prompt: 'Der Umzug war eine gute Entwicklung für das gesamte Team.',                             key: 'development for',    solution: 'The move was a good development for the whole team.' },
            { id: 'd4i9',  prompt: 'Bei allen Schwächen blieb der Plan die einzige realistische Option, so merkwürdig es auch klingen mag.', key: 'For all … · Strange as …', solution: 'For all its flaws, the plan remained the only realistic option, strange as it may seem.' },
            { id: 'd4i10', prompt: 'Unter dem Vorwand, Zeit zu sparen, überging er die Prüfung — und die Ergebnisse blieben deutlich hinter den Erwartungen zurück.', key: 'pretext · fall short of', solution: 'Under the pretext of saving time, he skipped the review, and the results fell well short of expectations.' }
          ]
        },
        {
          id: 'd4-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Describe a time you had to defend a decision that didn’t work out. What would you do differently now?',
          ruleTitle: 'Heute alle drei Punkte zusammen: reparieren, Themenwortschatz, Pausen statt Füllwörter.',
          ruleBody: 'Keine einzelne neue Regel heute — die drei aus den letzten Tagen laufen gleichzeitig. Nimm mindestens vier dieser Themenwörter, benutze mindestens eine Reparatur-Wendung, und zähle deine Füllwörter im ersten Durchgang mit.',
          phrases: [
            'setback · failure · stigma · risk-taking · resilience',
            'to bounce back (from sth)',
            'to take sth in your stride',
            'or rather … · what I mean is …',
            'There are two sides to this. First … Second …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden: unter fünf Füllwörtern, und mindestens vier Themenwörter müssen tatsächlich vorkommen, nicht nur vorbereitet gewesen sein.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd4-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Grad der Zustimmung — der letzte offene Punkt beim Schreiben',
          prompt: '“Organisations that punish failure end up with employees who take no risks at all.” To what extent do you agree?',
          min: 160, max: 180,
          checklist: [
            'Erster Satz: deine These — nie die Aufgabenstellung abschreiben.',
            '„To what extent“ verlangt ein Maß: largely · only in part · rarely — nicht nur „I agree“ oder „I disagree“.',
            'Ein echtes Gegenargument behandeln (dass Regeln auch vor echtem Leichtsinn schützen), dann entkräften.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '160–180 Wörter. Die Zählung unten läuft mit.',
            'Schreibung prüfen: different · development · business · statement · academic · generally · decision · resilience'
          ]
        },
        {
          id: 'd4-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Die falschen Sätze von heute Morgen neu — aus dem Kopf, nicht abgeschrieben.',
          fields: [
            { id: 'r1', label: 'Falscher Drill-Satz 1 → neu, mit der Regel dahinter in drei Wörtern' },
            { id: 'r2', label: 'Falscher Drill-Satz 2 → neu, mit der Regel dahinter' },
            { id: 'r3', label: 'Falscher Drill-Satz 3 → neu, mit der Regel dahinter' },
            { id: 'r4', label: 'Die Reading-Frage, bei der du am unsichersten warst — Antwort neu, in eigenen Worten, ohne ein einziges Zitat' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd4-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (stigma · setback · resilience · asymmetry · to attach to sth). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  }
];
