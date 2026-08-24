/* Inhalte des Trainings.
   Neue Tage werden unten an DAYS angehängt — die App findet den heutigen Tag über das Datum. */

/* Startvorschläge für die Vokabelbank: Wörter aus den bisherigen Lesetexten, mit kurzer
   englischer Bedeutung (zum Nachschlagen erlaubt) und dem Originalsatz als Beispiel. Wer noch
   nicht genug Wortschatz hat, um eigene Beispielsätze zu schreiben, übernimmt diese zuerst und
   ersetzt sie später durch eigene. Wird ergänzt, wenn neue Tage schwierige Wörter einführen. */
export const VOCAB_STARTER = [
  { term: 'setback', meaning: 'a temporary difficulty that delays progress', example: 'Every setback is a lesson in disguise.', day: 1 },
  { term: 'venture', meaning: 'a risky or ambitious undertaking, especially in business', example: 'Where a failed venture ends a career, the rational response is to attempt nothing that might fail.', day: 1 },
  { term: 'verdict', meaning: 'a decision or judgement, especially a final one', example: 'The first invites a verdict; the second gives you the reasoning.', day: 2 },
  { term: 'reckless', meaning: 'acting without thinking about the consequences or danger', example: 'A choice made in March may look reckless by June.', day: 3 },
  { term: 'dissolve', meaning: '(figurative) to make a feeling or problem disappear gradually', example: 'No amount of confidence dissolves it.', day: 3 },
  { term: 'stigma', meaning: 'a mark of shame or disgrace attached to something', example: 'The stigma, when it appears, rarely attaches to the mistake as such.', day: 4 },
  { term: 'asymmetry', meaning: 'a lack of balance or equality between two things', example: 'The result is an asymmetry that no policy document mentions.', day: 4 },
  { term: 'resilience', meaning: 'the capacity to recover from difficulties; not the same as toughness', example: 'Resilience uses the blow to revise something.', day: 4 },
  { term: 'forecaster', meaning: 'someone who predicts future events, e.g. weather or markets', example: 'The analysts whose predictions were wildest were also the ones most often invited back.', day: 5 },
  { term: 'calibration', meaning: 'checking or adjusting something against a known standard', example: 'Confidence earned through calibration, tracking one’s own past accuracy.', day: 5 },
  { term: 'depletion', meaning: 'the reduction of a resource to a low level', example: 'The more accurate account is one of resource depletion.', day: 6 },
  { term: 'discrete', meaning: 'separate and distinct, not connected to others — NOT the same word as “discreet” (careful/secretive)', example: 'Decisions are not discrete events that reset the mind between one and the next.', day: 6 },
  { term: 'parole', meaning: 'the early, conditional release of a prisoner', example: 'Judges reviewing parole applications granted release far more often early in the morning.', day: 6 },
  { term: 'sunk cost', meaning: 'money or time already spent that cannot be recovered', example: 'Behavioural economists call this the sunk cost fallacy.', day: 7 },
  { term: 'enormity', meaning: 'the extreme seriousness of something bad — NOT the same as “enormous” (great size)', example: 'Its enormity lies not in any single bad decision but in how reliably it compounds one mistake into several.', day: 7 },
  { term: 'compound', meaning: '(verb) to make a problem worse by adding to it', example: 'It compounds one mistake into several.', day: 7 },
  { term: 'fluent', meaning: 'able to speak or express something smoothly and easily', example: 'A fluent, quickly delivered answer feels more trustworthy than a hesitant one.', day: 8 },
  { term: 'invaluable', meaning: 'extremely useful, of great value — the “in-” does NOT negate here, unlike in “invisible”', example: 'Dissenting views tend to disappear precisely when they would be most invaluable.', day: 9 },
  { term: 'dissent', meaning: 'disagreement with a widely held opinion', example: 'None of this means dissent should be manufactured for its own sake.', day: 9 },
  { term: 'entrench', meaning: 'to establish something so firmly that it becomes hard to change', example: 'Algorithmic curation is routinely blamed for entrenching political polarisation.', day: 10 },
  { term: 'specious', meaning: 'seeming reasonable or true but actually wrong or misleading', example: 'The argument is, on closer inspection, rather specious.', day: 10 },
  { term: 'complementary', meaning: 'combining well with something else so as to improve it', example: 'The two are complementary rather than substitutable.', day: 10 },
  { term: 'inertia', meaning: 'a tendency to remain unchanged or do nothing', example: 'The very fact that inertia keeps most people enrolled in whatever option was pre-selected.', day: 11 },
  { term: 'ostensibly', meaning: 'apparently or seemingly true, but perhaps not actually true — NOT the same as “obviously” or “guaranteed”', example: 'Opting out remains ostensibly available to anyone who wishes it.', day: 11 },
  { term: 'coercion', meaning: 'the use of force or threats to make someone do something', example: 'This is meant to distinguish nudging from outright coercion.', day: 11 }
];

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
  { id: 'noCopy',    group: 'Schreiben', text: 'Aufgabenstellung nicht abschreiben — mit der These beginnen' },
  { id: 'filler',    group: 'Sprechen',  text: 'Füllwortdichte senken' },
  { id: 'lexvar',    group: 'Schreiben', text: 'Lexikalische Variation — kein Wort im Fließtext zweimal' },
  { id: 'transfer',  group: 'Schreiben', text: 'Transferversagen — im Drill richtig, im Aufsatz nicht angewendet' },
  { id: 'nominal',   group: 'Schreiben', text: 'Deutsche Substantivketten (Nominalisierung) — Verb statt Nomen prüfen' },
  { id: 'ingEd',     group: 'Grammatik', text: '-ing vs. -ed beim Partizip' },
  { id: 'synStack',  group: 'Schreiben', text: 'Synonyme gestapelt statt variiert — erst beim zweiten Vorkommen wechseln' },
  { id: 'register',  group: 'Schreiben', text: 'Gesprochenes Register im Aufsatz vermeiden' }
];

/* Aktueller Gesamtstand aus der letzten Auswertung der Sicherungsdateien (siehe REVIEWS unten). */
export const REVIEW_LEVEL = {
  date: '2026-08-11',
  overall: 'B1+/B2−',
  skills: { reading: 'B1+/B2−', use: 'B2−', writing: 'B1+/B2−', speaking: 'B1+/B2−' }
};

/* An wie vielen verschiedenen Tagen ein Fehlerprofil-Punkt beim Auswerten der Sicherungen
   fehlerfrei war. Läuft neben dem Antippen in der App — der höhere der beiden Werte zählt. */
export const REVIEW_ERRORS = {
  precision: 0, inference: 0, paraphr: 0, speed: 0,
  wrather: 2, inversion: 3, wish: 4, saidto: 1, cond2: 5,
  preps: 1,
  spelling: 0, length: 5, counter: 3, degree: 2, noCopy: 5,
  repair: 3, topicvoc: 2, filler: 0, lexvar: 0,
  transfer: 0, nominal: 0, ingEd: 0, synStack: 0, register: 0
};

/* Auswertung jeder Sicherung, Tag für Tag — dieselbe Rückmeldung wie in FORTSCHRITT.md.
   Wird ergänzt, sobald eine neue Sicherung ausgewertet wird. */
export const REVIEWS = [
  {
    day: 1, date: '2026-08-01',
    blocks: [
      { label: 'Use of English', text: '<b>2 von 10 richtig.</b> Richtig nur <i>If … were</i> (i9) und, verkürzt, <i>agree</i> (i8, es fehlte <i>with you</i>). Die drei Inversionssätze (i2, i5, i10) hatten alle dieselbe Ursache: das Hilfsverb blieb hinter dem Subjekt. <i>would rather</i> doppelt gemoppelt (<i>would rather prefer</i>), <i>wish</i> ohne Zeitform, <i>is said to</i> ohne folgendes Verb, <i>fall short</i> fälschlich im Passiv, <i>take aback</i> als <i>push aback</i>.' },
      { label: 'Reading', text: 'q1 und q3 inhaltlich getroffen. q2 verfehlt — <i>price risk</i> wurde als „efficiency“ gelesen. q4 ist der Kernfehler: Antwort „Yes“, Beleg <i>„Failure teaches nothing on its own“</i> — der Beleg widerlegt die Antwort. Beleg zuerst suchen, dann ja/nein festlegen.' },
      { label: 'Writing', text: '168 Wörter, aber Struktur unter Niveau. Erster Satz war die abgeschriebene Aufgabenstellung. „On one hand“ ohne „on the other“ — die Gegenposition fehlt vollständig. Schreibung: <i>tought, neurones, handle with failure, handy with</i>.' },
      { label: 'Speaking', text: '<i>what I mean is</i> wurde benutzt — der erste Punkt aus dem Fehlerprofil bewegt sich. Dagegen: „setting“ dreimal für mindset/norm, hohe Füllwortdichte (yeah, um), kein Themenwortschatz.' }
    ]
  },
  {
    day: 2, date: '2026-08-02',
    blocks: [
      { label: 'Use of English', text: '<b>1 von 10</b>, mit denselben Fehlern wie gestern. Nur j3 (<i>Not until … did</i>) saß sauber. Der Rest wiederholt fast wortgleich die Fehler von Tag 1, obwohl die Korrekturhinweise direkt über den Sätzen standen: „pushed me aback“ statt <i>taken aback</i> (j10), „was fallen short“ wird zu „were fallen short“ (j9), „is believed to that“ wiederholt exakt das Muster von „is said to that“ (j7), <i>would rather</i> und <i>prefer</i> stehen wieder doppelt (j1).' },
      { label: 'Reading', text: 'Die Ja-Nein-Falle von gestern schlägt erneut zu: q3 fragt, ob der Autor rät „was soll ich tun“ zu fragen — die Antwort ist eindeutig nein, hier steht „Definitely yes“ ohne passenden Beleg. q4 tappt genau in die angekündigte Falle: „hardly anyone is asked“ wird als „jeder wird gefragt“ gelesen — das genaue Gegenteil.' },
      { label: 'Writing', text: '144 Wörter, mit eigener These. Zum ersten Mal beginnt der Text nicht mit der abgeschriebenen Aufgabe, sondern mit „My opinion is that …“ — das sitzt. Ein echtes Gegenargument fehlt aber weiterhin. Rechtschreibung: <i>there</i> statt <i>their</i>, <i>ideal</i> statt <i>idea</i>.' },
      { label: 'Repair', text: 'Nur 3 von 8 Feldern ausgefüllt, der Rest mit „Ich weiss es nicht mehr“ abgehakt — der falsche Satz von gestern (p5) wird unverändert wieder hingeschrieben, nicht korrigiert.' },
      { label: 'Speaking', text: '<i>track record</i>, <i>mindset</i> und <i>with hindsight</i> kommen vor — drei von fünf geforderten Themenwörtern. <i>weigh sth up</i> wird als „wait“ verschriftlicht — eine eigene Verwechslung.' }
    ]
  },
  {
    day: 3, date: '2026-08-03',
    blocks: [
      { label: 'Use of English', text: '<b>3 von 10 sicher</b>, dazu ein Fast-Treffer. k1, k9, k10 sitzen. k6 ist inhaltlich richtig, nur mit <i>sounds</i> statt <i>may seem</i>. Der eigentliche Punkt des Tages, Inversion nach <i>Not only</i>, schlägt fehl: „Not only the report was too late“ bleibt in normaler Wortstellung stehen (k7).' },
      { label: 'Reading', text: 'Die Umformulieren-Aufgabe (q1) bricht mitten im Satz ab. Die Ja-Nein-Falle (q3) trifft zufällig das richtige „no“, aber mit einem Zitat, das nicht die Antwort stützt. Positiv: q4 („few“ bedeutet nicht viele) wird zum ersten Mal richtig erkannt.' },
      { label: 'Writing', text: 'Deutlich länger, beide Sichtweisen behandelt — zum ersten Mal zwei Absätze für zwei Positionen, plus ein eigenes Beispiel aus der Wirtschaft. Weiterhin deutsche Interferenz: „I ask me the questions“ statt „I ask myself“.' },
      { label: 'Repair', text: 'Wieder nur die Rechtschreib-Paare (r5) bearbeitet, r1–r4 mit „I don’t know“ abgehakt — zweiter Tag in Folge.' },
      { label: 'Speaking', text: '„Let me take a concrete example“ wird korrekt verwendet. Die Füllwortdichte bleibt hoch.' }
    ]
  },
  {
    day: 4, date: '2026-08-04',
    blocks: [
      { label: 'Reading', text: '<b>Schwächster Tag der Woche.</b> Mehrere Antworten liegen am Thema vorbei (q1, q2, q4, q5). Die Ja-Nein-Falle (q3) schlägt erneut fehl: „Yes“ wird mit einem Zitat belegt, das eindeutig „No“ stützt — derselbe Widerspruch wie in der Einstufung.' },
      { label: 'Use of English', text: '3 von 10 sicher, dazu ein deutlicher Fortschritt bei Inversion. d4i3 (<i>Never had the team seen …</i>) sitzt sauber — die erste vollständig korrekte <i>Never</i>-Inversion seit der Einstufung. Bei d4i4 (<i>Not only</i>) steht die Inversion richtig am Satzanfang, aber danach folgt „did he lost“ statt „did he lose“.' },
      { label: 'Writing', text: 'Gegenargument diesmal wirklich vorhanden: „On the other side I think that too much failure is a mistake“ ist ein echter Einwand. Der erste Satz bleibt grammatisch instabil („The behaviour or punish failure“).' },
      { label: 'Repair', text: 'Alle vier freien Felder mit „I do not know them“ — drittes Mal in Folge ausgelassen.' },
      { label: 'Speaking', text: '<i>resilience</i> und <i>failure</i> fallen, „or rather“ repariert einen Satz korrekt — aber nur zwei von vier geforderten Themenwörtern.' }
    ]
  },
  {
    day: 5, date: '2026-08-05',
    blocks: [
      { label: 'Use of English', text: '<b>Stärkster Drill-Tag bisher, 4 von 10 sicher</b> plus zwei Fast-Treffer. d5i1, d5i2, d5i5, d5i8 sitzen. d5i10 zeigt zum ersten Mal <i>fall short of</i> aktiv und richtig. Neu und jetzt dreimal belegt: nach einem Inversions-Hilfsverb bleibt das Hauptverb in der Vergangenheitsform stehen statt in der Grundform — „did he knew“, „did I knew“ statt <i>did he know / did I understand</i>.' },
      { label: 'Reading', text: 'Schwächer als der Rest der Woche. q1 und q2 liegen am Thema vorbei, q4 fehlt ganz. q5 ist wörtlich aus dem Text abgeschrieben, nicht umformuliert. Die Ja-Nein-Falle (q3) schlägt zum vierten Mal fehl.' },
      { label: 'Writing', text: 'Erster expliziter Zustimmungsgrad: „I partly agree to the statement“ eröffnet den Text. Ironischerweise direkt dahinter der genau geübte Fehler: <i>agree to</i> statt <i>agree with</i>.' },
      { label: 'Repair', text: 'Vierter Tag in Folge ohne echten Versuch bei r1–r4.' },
      { label: 'Speaking', text: '<i>overconfidence</i> und <i>expertise</i> fallen, die vorgegebene Einwand-Formel wird nicht wörtlich verwendet.' }
    ]
  },
  {
    day: 6, date: '2026-08-06',
    blocks: [
      { label: 'Reading', text: 'Die Wortgenauigkeits-Frage zu <i>discrete</i> verfehlt das Thema komplett. <b>Positiv:</b> die Ja-Nein-Falle (q3) sitzt zum ersten Mal vollständig — „No“, belegt mit dem richtigen Satz. Nach vier Fehlversuchen der erste klare Treffer.' },
      { label: 'Use of English', text: '4 von 10 sicher. d6i1, d6i2 (<i>wish</i>), d6i3 (<i>Never</i>) und d6i6 sitzen. d6i4 zeigt wieder dieselbe Lücke wie an Tag 3: nach <i>Not only</i> bleibt die normale Wortstellung stehen.' },
      { label: 'Writing', text: '„I agree only in part“ wiederholt den Zustimmungsgrad von gestern. Im selben Text aber wieder der Klassiker aus der Einstufung: „If this client would come earlier“ — im Drill seit Tagen richtig, überträgt sich noch nicht ins freie Schreiben.' },
      { label: 'Repair', text: 'Fünfter Tag in Folge ohne Versuch bei den freien Feldern.' },
      { label: 'Speaking', text: '<i>tend to</i> und „Some would say that“ kommen beide vor — zum ersten Mal wird die Hedging-Vorgabe vollständig erfüllt.' }
    ]
  },
  {
    day: 7, date: '2026-08-07',
    blocks: [
      { label: 'Use of English', text: '<b>Bester Drill-Tag bisher, 6 von 10 sicher.</b> d7i5 und d7i10 exakt, d7i3 (<i>Never had the team wasted…</i>) bestätigt die Never-Inversion erneut. d7i4 ist der Durchbruch: „Not only had they ignored the warnings, they also invested more“ stellt zum ersten Mal das Hilfsverb korrekt vor das Subjekt — nur das <i>but</i> fehlt, nach vier Fehlversuchen der erste Treffer. d7i8 zeigt <i>is known to have</i> sauber, während d7i7 den altbekannten Fehler wiederholt: „It is thought that investors are decided emotional“ statt <i>Investors are thought to decide emotionally</i>. d7i9 trifft <i>agree with</i> zum ersten Mal.' },
      { label: 'Reading', text: 'Die neue Wortgenauigkeits-Falle (q1, <i>enormity</i>) wird komplett verfehlt — die Antwort geht gar nicht auf das Wort ein. Die Ja-Nein-Falle (q3) sitzt zum zweiten Mal in Folge. q4 inhaltlich richtig, aber „we should made decisions“ statt <i>should make</i>. q5 verfehlt die eigentliche Frage und rutscht zurück in die q2-Erklärung.' },
      { label: 'Writing', text: '<b>215 Wörter, deutlich über dem Zielrahmen — und der alte Fehler ist zurück.</b> Der erste Satz ist wieder die umformulierte Aufgabenstellung („Our today’s topic is a culture that stigmatises failure…“), obwohl das seit Tag 2 als erledigt galt. Der Zustimmungsgrad widerspricht sich selbst — der Text beginnt mit „I largely disagree“ und endet mit „so I partly agree“, ohne dass sich die Position dazwischen wirklich ändert. Ein echtes Gegenargument fehlt weiterhin; „they could also cost your whole identity and fortune“ bleibt eine Randbemerkung statt einer behandelten Gegenposition. Deutsche Interferenz: „we all are going to habe failures“ — das deutsche <i>habe</i> statt <i>have</i>. Dazu „a bit to negative“ statt <i>too negative</i> und „one of the most pressure“ statt einer korrekten Steigerung.' },
      { label: 'Repair', text: 'Sechster Tag in Folge ohne echten Versuch bei den freien Feldern (r1–r4, alle mit „I don’t know it.“ abgehakt). Die Rechtschreib-Paare (r5) sitzen weiterhin zuverlässig: <i>different, development, business, statement, academic, generally</i> je zweimal korrekt.' },
      { label: 'Speaking', text: 'Vier von fünf Themenwörtern fallen tatsächlich (<i>fails, setback, stigma, risk taking, resilience</i>) — das bisher vollständigste Ergebnis. <i>tend to</i> als Hedge-Wort vorhanden, Füllwortdichte bleibt hoch.' }
    ]
  },
  {
    day: 8, date: '2026-08-08',
    blocks: [
      { label: 'Use of English', text: '<b>5 von 10 sicher, dazu ein Fast-Treffer — bisher konstantester Drill-Tag.</b> d8i3 ist der Durchbruch der Woche: „The board is thought to decide not so careful“ — zum ersten Mal steht <i>is thought to</i> direkt vor der Grundform, nach sieben Tagen ohne Treffer (nur „careful“ statt „carefully“ bleibt als Adjektiv/Adverb-Fehler). d8i9 ist der erste saubere Treffer für <i>under the pretext of</i> überhaupt. d8i1 (<i>would rather</i>), d8i6 (<i>fall short of</i>) und d8i8 (<i>a tendency to</i>) sitzen ebenfalls. Falsch: d8i2 (<i>Not only</i>-Inversion komplett zusammengebrochen, ein Rückschritt gegenüber Tag 7), d8i4 (<i>is known to have</i> wird zu „is known that…“), d8i5 (<i>agree to</i> statt <i>agree with</i>, trotz Tag-7-Erfolg), d8i7 (<i>aback</i> wird zu „back“).' },
      { label: 'Reading', text: 'Die <i>enormity</i>-Falle aus Tag 7 kommt in neuem Text zurück (q1) — diesmal ein Versuch, aber die Antwort vermischt <i>enormity</i> mit <i>enormous</i> statt sie zu trennen. <b>Die Ja-Nein-Falle (q3) sitzt zum dritten Mal in Folge</b> (nach Tag 6, 7) — „No“, mit vollständigem Zitat, damit über drei Tage sicher beherrscht. q4 verfehlt weiterhin die Aussage, q5 und q6 unbeantwortet.' },
      { label: 'Writing', text: '171 Wörter, im Zielrahmen. Nach dem NRW-Raster limitiert <b>Sprachrichtigkeit</b>: „datas“ als Plural eines unzählbaren Substantivs viermal wiederholt, dazu „there“ statt „their“. Ein echtes Gegenargument (Fehleranfälligkeit von KI-Systemen) ist vorhanden — vierter Beleg für „Gegenposition behandeln“. Der erste Satz ist aber wieder fast wörtlich die Aufgabenstellung — zweiter Rückfall nach Tag 7 bei einem formal erledigten Punkt.' },
      { label: 'Repair', text: 'Siebter Tag in Folge ohne echten Versuch bei r1–r4. r5 weiterhin zuverlässig.' },
      { label: 'Speaking', text: 'Position wird klar gehalten und geht auf beide Seiten der Frage ein, bevor eine eigene Schlussfolgerung kommt — gutes Zeichen für Reaktionsfähigkeit im Unterrichtsgespräch. Zwei von fünf Themenwörtern (<i>expertise, confidence</i>) erfüllen das Minimum. Kein <i>or rather / what I mean is</i>, Füllwortdichte weiterhin hoch.' }
    ]
  },
  {
    day: 9, date: '2026-08-09',
    blocks: [
      { label: 'Use of English', text: '<b>5 von 10 sicher, dazu ein bemerkenswerter Fast-Treffer.</b> d9i1 und d9i2 (beide <i>is thought to</i> + Grundform) sitzen fehlerfrei — zwei saubere Belege in derselben Runde, der erste vollständig fehlerfreie Tag für diesen Punkt seit sieben Tagen ohne Treffer. d9i8 (<i>a tendency to</i>, zweiter Tag in Folge) und d9i10 sitzen exakt — Letzteres verbindet <i>agree with</i> und <i>development for</i> im selben Satz. d9i7 ist ein bemerkenswerter Fast-Treffer: <i>taken aback</i> steht zum ersten Mal überhaupt richtig da, nur die Präposition „from“ statt „by“ bleibt offen. Falsch: d9i3 und d9i4 (leer gelassen), d9i5 (<i>would rather prefer</i> — derselbe Doppelfehler wie Tag 1/2, Rückfall trotz Tag 8), d9i9 (<i>strange as its may sound</i> statt <i>may seem</i>, derselbe hartnäckige Fehler wie Tag 3, 5, 6).' },
      { label: 'Reading', text: '<b>Schwächster Lesetag seit Tag 4.</b> Nur q1 wird versucht: die neue Falle <i>invaluable</i> wird als Verwechslungsgefahr erkannt, aber selbst falsch aufgelöst („underperformance“ statt „von unschätzbarem Wert“). q2 bis q5 bleiben komplett unbeantwortet mit derselben Formel „ohne Übersetzung nicht verständlich“ — passt zum knappen 10-Minuten-Abstand zwischen den Blöcken, spricht für eine durchgehastete Einheit.' },
      { label: 'Writing', text: '160 Wörter, knapp im Zielrahmen. Nach dem NRW-Raster erneut <b>Sprachrichtigkeit</b> limitierend, diesmal deutsche Interferenz: „our“ statt „their“, „more as“ statt „more than“ (mehr als). Positiv: der erste Satz ist diesmal eine eigene These, keine abgeschriebene Aufgabenstellung — Erholung nach dem Rückfall von Tag 8. Ein echtes, differenziertes Gegenargument ist vorhanden — fünfter Beleg für „Gegenposition behandeln“, damit an mindestens drei Tagen sicher belegt. Der Grad der Zustimmung fehlt aber ganz.' },
      { label: 'Repair', text: 'Achter Tag in Folge ohne echten Versuch bei r1–r4. r5 weiterhin zuverlässig.' },
      { label: 'Speaking', text: 'Die Position wird gehalten, aber der Beitrag ist auffällig repetitiv — derselbe Gedanke wird dreimal fast wortgleich wiederholt statt weiterentwickelt. Keines der fünf Themenwörter (<i>consensus, groupthink, dissent, conformity, deference</i>) kommt korrekt vor — <i>consensus</i> wird zweimal versucht, aber missverständlich transkribiert, was auf eine Aussprache-Unsicherheit hindeutet. Positiv: „Or rather, don’t agree to them…“ nutzt die Reparatur-Formel zur Präzisierung — dritter belegter Fall nach Tag 1 und 4, „Reparieren statt neu anfangen“ damit erfüllt.' }
    ]
  },
  {
    day: 10, date: '2026-08-10',
    blocks: [
      { label: 'Use of English', text: '<b>7 von 10 sicher, dazu ein Fast-Treffer — bester Drill-Tag seit Beginn.</b> Drei Fehlerprofil-Punkte werden an einem Tag zum dritten Mal sauber und damit erledigt: <i>a tendency to</i>, <i>agree with</i> + <i>development for</i> im selben Satz, und <i>fall short of</i>. Zwei weitere sitzen zum ersten Mal überhaupt fehlerfrei: <i>taken aback by</i> (nach falscher Präposition an Tag 9) und <i>strange as it may seem</i> (nach vier Fehlversuchen). <i>is known to have</i> sitzt zum zweiten Mal. Fast-Treffer bei <i>is thought to</i>: die Struktur sitzt, aber „reduction“ statt „editorial team“ (vermutlich eine Verwechslung mit „Redaktion“) und „mislead“ mit falschem Objekt ergeben keinen sinnvollen Satz — dieselbe Verwechslung taucht im selben Drill noch einmal auf. Falsch: <i>Not only</i>-Inversion (diesmal vorhanden, aber „did … related“ statt „did … relate“) und <i>would rather</i> (neue dritte Fehlervariante).' },
      { label: 'Reading', text: 'Die neue Wortgenauigkeits-Falle (q1, <i>specious</i>) wird als Falle erkannt, aber falsch aufgelöst. <b>Die Ja-Nein-Falle (q3) sitzt wieder</b> — nach der Auslassung an Tag 9 das vierte richtige Ergebnis in fünf Versuchen. q2, q4 und q5 bleiben inhaltlich vage bis am Thema vorbei.' },
      { label: 'Writing', text: '200 Wörter, genau an der neuen Untergrenze. Nach dem NRW-Raster bleibt <b>Sprachrichtigkeit</b> zum dritten Tag in Folge limitierend (datas, „the looser“, „Chine“). Bei der Textkompetenz der bisher deutlichste Rückfall: die Aufgabenstellung wird wörtlich zitiert statt mit einer eigenen These zu beginnen. Positiv und neu: ein erster, grammatisch instabiler Versuch einer echten Konzession vor dem Gegenargument — genau das, was Phase 2 verlangt.' },
      { label: 'Repair', text: 'Neunter Tag in Folge ohne echten Versuch bei r1–r4. r5 weiterhin zuverlässig.' },
      { label: 'Speaking', text: 'Die neue Gegenpositions-Vorgabe wird nicht erkennbar aufgegriffen — der Beitrag wechselt stattdessen unkommentiert die eigene Position, ohne auf den vorgegebenen Einwand einzugehen. Nur <i>transparency</i> aus dem Themenwortschatz fällt eindeutig — das Minimum von zwei wird zum zweiten Mal in Folge verfehlt.' }
    ]
  }
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
  },

  {
    day: 5,
    date: '2026-08-05',
    phase: 1,
    focus: 'Lesetempo Richtung 8 Minuten · wish + Past Perfect gezielt korrigiert · Position halten und ein Gegenargument benennen',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd5-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Sound of Certainty',
          kicker: 'Text 5 · Phase 1',
          intro: 'Von Tag 2 bis Tag 4 liegt weiterhin keine Sicherung vor — die einzige bestätigte Fehlerquelle bleibt Tag 1. Dort saß „If … were" schon richtig, aber der wish-Satz (i3, „I whish I already know it") ist offen und kommt heute doppelt vor. Ziel für Text + Fragen: 8 statt 9 Minuten.',
          paragraphs: [
            'Confidence is often mistaken for competence, and nowhere is the confusion more costly than in expert advice. A large study of financial forecasters found that the analysts whose predictions were wildest were also the ones most often invited back for comment; certainty, not accuracy, decided who got asked again. Viewers rated the confident forecasters as more knowledgeable even when a simple coin toss would have outperformed their calls. What the audience rewarded was not the forecast being right but the forecaster sounding sure.',
            'This pattern is not confined to finance. In hiring panels, the candidate who answers without pausing is frequently marked higher than one who visibly weighs the question, regardless of which answer later proves correct. The pause is read as doubt, and doubt is read as weakness, even though a brief pause is often the surest sign that someone is actually thinking rather than reciting a stored fact.',
            'None of this means confidence is worthless. A surgeon who hesitates mid-procedure is not thereby more careful. The distinction that matters is between confidence earned through calibration, tracking one’s own past accuracy and adjusting accordingly, and confidence that is simply a personality trait, unrelated to whether the person has ever been checked against outcomes. Only the first kind should influence how much weight a listener gives to what is said.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'According to the writer, what did the audience actually reward in the forecasters — being right, or something else? Answer precisely.', hint: 'Präzisionsfrage. Der letzte Satz des ersten Absatzes trennt beides ausdrücklich.' },
            { id: 'q2', text: 'Explain “certainty, not accuracy, decided who got asked again” in your own words.' },
            { id: 'q3', text: 'Does the writer think a pause in an interview is a sign of weakness? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — die naheliegende Antwort ist die falsche.' },
            { id: 'q4', text: 'What, according to the writer, is surprising about the hiring-panel finding?' },
            { id: 'q5', text: 'How does the writer distinguish confidence earned through calibration from confidence as a personality trait? One sentence, without using the word “calibration”.' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd5-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'wish + Past Perfect im Fokus, alles andere aus der Sammelrunde bleibt aktiv',
          rules: [
            { title: 'wish + Past Perfect für Vergangenheitsbedauern', body: 'Nach <i>wish</i> steht für Bedauern über Vergangenes das Past Perfect, nie das einfache Perfekt oder Präsens. Tag 1 lief hier noch falsch (<i>„I whish I already know it"</i>).', example: 'I <b>wish I had asked</b> earlier. · She <b>wishes she had told</b> him the truth.' },
            { title: 'Inversion — weiter aus der Sammelrunde', body: '<i>Little</i> und <i>Not until</i> bleiben aktiv, mit Hilfsverb vor Subjekt.', example: '<b>Little did</b> he know that the decision had already been made. · <b>Not until</b> I saw the figures <b>did</b> I understand the problem.' },
            { title: 'Konditional Typ 2 — kein <i>would</i> im if-Satz', body: 'Weiterhin die häufigste deutsche Interferenz: „würde" darf nur in der Hauptsatz-Hälfte stehen.', example: '<b>If</b> I <b>had</b> more time, I <b>would</b> read the text again.' },
            { title: 'Passiv der Meinung — is thought to have', body: 'Subjekt bleibt die Person oder Sache selbst.', example: 'The company <b>is thought to have</b> underestimated the market.' },
            { title: 'agree <i>to</i> / agree <i>with</i> / a development <i>for</i> · feste Wendungen', body: 'Weiterhin unbestätigt aus der Sammelrunde: <b>fall short of</b> · <b>a tendency to</b> · <b>for all its flaws</b> · <b>strange as it may seem</b>.', example: 'He <b>agreed to</b> the proposal, but his colleagues didn’t <b>agree with</b> him.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd5i1',  prompt: 'Ich wünschte, ich hätte früher gefragt.',                                                    key: 'wish + had',         solution: 'I wish I had asked earlier.' },
            { id: 'd5i2',  prompt: 'Ich wünschte, sie hätte mir die Wahrheit gesagt.',                                          key: 'wish + had',         solution: 'I wish she had told me the truth.' },
            { id: 'd5i3',  prompt: 'Kaum wusste er, dass die Entscheidung schon gefallen war.',                                 key: 'Little …',           solution: 'Little did he know that the decision had already been made.' },
            { id: 'd5i4',  prompt: 'Erst als ich die Zahlen sah, verstand ich das Problem.',                                    key: 'Not until …',        solution: 'Not until I saw the figures did I understand the problem.' },
            { id: 'd5i5',  prompt: 'Wenn ich mehr Zeit hätte, würde ich den Text noch einmal lesen.',                           key: 'If … had',           solution: 'If I had more time, I would read the text again.' },
            { id: 'd5i6',  prompt: 'Man geht davon aus, dass die Firma den Markt unterschätzt hat.',                            key: 'is thought to have', solution: 'The company is thought to have underestimated the market.' },
            { id: 'd5i7',  prompt: 'Er stimmte dem Vorschlag zu, aber seine Kollegen stimmten ihm nicht zu.',                   key: 'agree to · with',    solution: 'He agreed to the proposal, but his colleagues didn’t agree with him.' },
            { id: 'd5i8',  prompt: 'Der neue Standort war eine positive Entwicklung für die gesamte Region.',                   key: 'development for',    solution: 'The new location was a positive development for the whole region.' },
            { id: 'd5i9',  prompt: 'Trotz aller Mängel hielt das Team an dem Plan fest, so seltsam es auch klingen mag.',       key: 'For all … · Strange as …', solution: 'For all its flaws, the team stuck to the plan, strange as it may seem.' },
            { id: 'd5i10', prompt: 'Die Ergebnisse blieben hinter den Erwartungen zurück, was auf eine Tendenz zur Selbstüberschätzung hindeutet.', key: 'fall short of · a tendency to', solution: 'The results fell short of expectations, which points to a tendency to overestimate.' }
          ]
        },
        {
          id: 'd5-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Describe a situation where you had to sound confident even though you weren’t sure you were right. Was that the right approach?',
          ruleTitle: 'Neu: Position halten und ein Gegenargument ausdrücklich benennen, bevor du reparierst.',
          ruleBody: 'Sag zuerst klar, wofür du stehst. Nenne dann ausdrücklich einen Einwand dagegen („Some would say that … / One could object that …"), bevor du ihn entkräftest. Reparieren, Themenwortschatz und Pausen statt Füllwörter laufen weiter mit.',
          phrases: [
            'overconfidence · calibration · expertise · credibility · judgement',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …',
            'On the other hand, …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden: der Einwand muss tatsächlich benannt werden, nicht nur die eigene Position wiederholt, und unter fünf Füllwörtern bleiben.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd5-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Grad der Zustimmung und ein echtes Gegenargument — weiter im Fokus',
          prompt: '“Confident people are trusted more than they deserve to be.” To what extent do you agree?',
          min: 160, max: 180,
          checklist: [
            'Erster Satz: deine These — nie die Aufgabenstellung abschreiben.',
            '„To what extent" verlangt ein Maß: largely · only in part · rarely — nicht nur „I agree" oder „I disagree".',
            'Ein echtes Gegenargument behandeln (dass Zuversicht auch nötig ist, um überhaupt zu handeln), dann entkräften.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '160–180 Wörter. Die Zählung unten läuft mit.',
            'Schreibung prüfen: different · development · business · statement · academic · generally · decision · judgement'
          ]
        },
        {
          id: 'd5-repair',
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
          id: 'd5-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (calibration · forecaster · a coin toss · to weigh a question · a stored fact). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },

  {
    day: 6,
    date: '2026-08-06',
    phase: 1,
    focus: 'Wortgenauigkeit gezielt geprüft (discrete vs. discreet) · wish + Past Perfect und Inversion bleiben in der Sammelrunde · Gegenargument benennen und zusätzlich hedgen',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd6-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Cost of Choosing',
          kicker: 'Text 6 · Phase 1',
          intro: 'Von Tag 2 bis Tag 5 liegt weiterhin keine Sicherung vor — bestätigt ist nach wie vor nur, was aus Tag 1 vorliegt. Heute kommt ein Punkt aus dem Fehlerprofil dazu, der bisher nur nebenbei mitlief: Wortgenauigkeit. Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'Decision fatigue is often described as a drop in willpower, though the more accurate account is one of resource depletion: with each choice a person makes, the quality of the next one tends to decline, regardless of how important either choice actually was. Judges reviewing parole applications, in one widely cited study, granted release far more often early in the morning than late in the afternoon — a pattern that had nothing to do with the merits of the individual cases and everything to do with when the case happened to be heard. Decisions, in other words, are not discrete events that reset the mind between one and the next; they draw on a single, shared reserve that carries over.',
            'The practical remedy is not simply to decide less, since some decisions cannot be delegated or delayed without a cost of their own. It is to notice which decisions are actually consequential, and to protect the reserve needed for those by making the rest automatic. A fixed routine is not a lack of imagination; it is a deliberate refusal to spend a finite resource on a question that does not deserve it.',
            'This has an uncomfortable implication for anyone who prides themselves on flexibility. The person who insists on deciding everything afresh, every day, is not thereby more careful. They are running down the very capacity that careful decisions require, and arriving at the ones that matter with less of it left.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer says decisions are not “discrete” events. What does “discrete” mean here, and which similar-looking English word, with a different meaning, could it easily be confused with?', hint: 'Wortgenauigkeit — dasselbe Muster wie gives away/gives way in der Einstufung.' },
            { id: 'q2', text: 'Explain “everything to do with when the case happened to be heard” in your own words.' },
            { id: 'q3', text: 'Does the writer recommend making fewer decisions overall? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — die naheliegende Antwort ist zu einfach.' },
            { id: 'q4', text: '“A fixed routine is not a lack of imagination.” What does the writer say it actually is instead? One sentence, in your own words.' },
            { id: 'q5', text: 'What is the “uncomfortable implication” for someone who prides themselves on flexibility?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd6-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'wish + Past Perfect und Inversion weiter unbestätigt — Sammelrunde geht weiter',
          rules: [
            { title: 'wish + Past Perfect für Vergangenheitsbedauern', body: 'Weiterhin ohne Rückmeldung aus Tag 5 — deshalb heute erneut, mit neuem Inhalt.', example: 'I wish I <b>had taken</b> a break. · We <b>wish</b> we <b>had decided</b> sooner.' },
            { title: 'Inversion — <i>Never</i> und <i>Not only … but also</i>', body: 'Nach dem vorangestellten negativen Ausdruck: Hilfsverb vor Subjekt, wie in einer Frage. Nach <i>Not only</i> folgt im zweiten Teil <b>but … also</b>.', example: '<b>Never has</b> he decided so quickly. · <b>Not only was</b> the meeting too long, <b>but</b> it was <b>also</b> unnecessary.' },
            { title: 'Konditional Typ 2 — kein <i>would</i> im if-Satz', body: 'Weiterhin die häufigste deutsche Interferenz.', example: '<b>If</b> I <b>made</b> fewer decisions, I <b>would</b> think more clearly.' },
            { title: 'Passiv der Meinung — <i>is thought to</i> / <i>is known to have</i>', body: 'Subjekt bleibt die Person oder Sache selbst, nie „it“.', example: 'Judges <b>are thought to</b> rule more leniently in the morning. · He <b>is known to have</b> introduced the routine himself.' },
            { title: 'Feste Wendungen — Sammelrunde', body: '<b>fall short of</b> · <b>taken aback</b> · <b>under the pretext of</b> · <b>a tendency to</b> · <b>for all its flaws</b> · <b>strange as it may seem</b>.', example: '<b>For all its flaws</b>, the routine remained the most reliable option, <b>strange as it may seem</b>.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd6i1',  prompt: 'Ich wünschte, ich hätte gestern mehr Pausen gemacht.',                                       key: 'wish + had',           solution: 'I wish I had taken more breaks yesterday.' },
            { id: 'd6i2',  prompt: 'Ich wünschte, wir hätten die Entscheidung früher getroffen.',                                key: 'wish + had',           solution: 'I wish we had made the decision earlier.' },
            { id: 'd6i3',  prompt: 'Noch nie hat er eine Entscheidung so schnell getroffen.',                                   key: 'Never …',              solution: 'Never has he made a decision so quickly.' },
            { id: 'd6i4',  prompt: 'Nicht nur war die Sitzung zu lang, sie war auch überflüssig.',                              key: 'Not only …',           solution: 'Not only was the meeting too long, but it was also unnecessary.' },
            { id: 'd6i5',  prompt: 'Wenn ich weniger Entscheidungen träfe, würde ich klarer denken.',                           key: 'If … made',            solution: 'If I made fewer decisions, I would think more clearly.' },
            { id: 'd6i6',  prompt: 'Wäre die Reihenfolge anders, würde das Ergebnis anders aussehen.',                          key: 'If … were',            solution: 'If the order were different, the result would look different.' },
            { id: 'd6i7',  prompt: 'Man geht davon aus, dass Richter am Morgen milder urteilen.',                               key: 'are thought to',       solution: 'Judges are thought to rule more leniently in the morning.' },
            { id: 'd6i8',  prompt: 'Es ist bekannt, dass er die Routine bewusst eingeführt hat.',                               key: 'is known to have',     solution: 'He is known to have introduced the routine deliberately.' },
            { id: 'd6i9',  prompt: 'Trotz aller Mängel blieb die Routine die verlässlichste Option, so seltsam es klingen mag.', key: 'For all … · Strange as …', solution: 'For all its flaws, the routine remained the most reliable option, strange as it may seem.' },
            { id: 'd6i10', prompt: 'Unter dem Vorwand, Zeit zu sparen, überging er die Prüfung, was auf eine Tendenz zur Bequemlichkeit hindeutet.', key: 'pretext · a tendency to', solution: 'Under the pretext of saving time, he skipped the review, which points to a tendency towards complacency.' }
          ]
        },
        {
          id: 'd6-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Does having a fixed daily routine make you more effective, or does it limit you? Give your own view.',
          ruleTitle: 'Weiterhin: Position halten, Gegenargument benennen — jetzt zusätzlich hedgen statt absolut zu formulieren.',
          ruleBody: 'Sag zuerst klar, wofür du stehst, dann den Einwand dagegen. Neu: formuliere deine eigene Position mindestens zweimal mit einem Hedge-Wort statt absolut („I always“, „everyone“). Reparieren, Themenwortschatz und Pausen statt Füllwörter laufen weiter mit.',
          phrases: [
            'decision fatigue · depletion · reserve · deliberate · consequential',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden: mindestens zwei Hedge-Wörter müssen tatsächlich vorkommen, der Einwand muss benannt werden, und unter fünf Füllwörtern bleiben.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd6-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Grad der Zustimmung, Gegenargument und Hedging — alles zusammen',
          prompt: '“People who follow a fixed daily routine make better decisions than those who decide everything as it comes.” To what extent do you agree?',
          min: 160, max: 180,
          checklist: [
            'Erster Satz: deine These — nie die Aufgabenstellung abschreiben.',
            '„To what extent“ verlangt ein Maß: largely · only in part · rarely — nicht nur „I agree“ oder „I disagree“.',
            'Ein echtes Gegenargument behandeln (dass Routine auch bequem machen oder wichtige Ausnahmen übersehen kann), dann entkräften.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '160–180 Wörter. Die Zählung unten läuft mit.',
            'Schreibung prüfen: different · development · business · statement · academic · generally · decision · consequential'
          ]
        },
        {
          id: 'd6-repair',
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
          id: 'd6-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (decision fatigue · depletion · consequential · to carry over from sth · to pride oneself on sth). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },

  {
    day: 7,
    date: '2026-08-07',
    phase: 1,
    focus: 'Wortgenauigkeit an einer neuen Falle (enormity) · wish + Past Perfect, Inversion und Konditional Typ 2 bleiben in der Sammelrunde, dazu agree with und development for · Themenwortschatz aktiv im Speaking',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd7-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Trap of Sunk Costs',
          kicker: 'Text 7 · Phase 1',
          intro: 'Für Tag 2 bis Tag 6 liegt weiterhin keine Sicherung vor — bestätigt ist nach wie vor nur, was aus Tag 1 vorliegt, deshalb bleibt die Grammatik-Sammelrunde unverändert offen. Neu heute: eine Wortgenauigkeits-Falle, die anders funktioniert als discrete/discreet — ein Wort, das harmlos aussieht, aber eine unerwartete Bedeutung trägt. Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'Economists have a simple rule for good decisions: only future costs and benefits should count, and money or time already spent is irrelevant to what should happen next. In practice, almost nobody follows it. A theatre-goer who has paid for a ticket will sit through a play they are visibly not enjoying, reasoning that leaving would waste the money already spent — as though staying could somehow bring it back. The same pattern shows up in far weightier decisions: a company that continues to fund a failing project because of what has already gone into it, or a government that persists with a policy after the evidence has turned against it, out of reluctance to admit that the original choice was wrong.',
            'Behavioural economists call this the sunk cost fallacy, and its enormity lies not in any single bad decision but in how reliably it compounds one mistake into several. Cutting losses early is, for most people, harder than doubling down, since it requires admitting that a previous judgement was mistaken rather than simply unlucky. The rational response, uncomfortable as it is, treats every decision as if it were being made for the first time, with no regard for what has already been paid, and no obligation to defend a choice that no longer serves its purpose.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer refers to the fallacy’s “enormity”. What does “enormity” mean here, and what meaning do many readers wrongly assume it has instead (think of the word “enormous”)?', hint: 'Neue Wortgenauigkeits-Falle — ein Wort, das harmloser klingt, als es ist.' },
            { id: 'q2', text: 'Explain in your own words why the writer compares a theatre-goer who stays in a play to a government that persists with a failing policy.' },
            { id: 'q3', text: 'Does the writer say that admitting a past mistake is easy? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — die naheliegende Antwort ist zu einfach.' },
            { id: 'q4', text: '“The rational response … treats every decision as if it were being made for the first time.” What does this mean in practice? One sentence, in your own words.' },
            { id: 'q5', text: 'What connection does the writer draw between admitting that a past judgement was wrong and why people find that hard to do?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd7-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'wish + Past Perfect, Inversion und Konditional Typ 2 weiter unbestätigt — dazu heute agree with und development for, aus dem Fehlerprofil bisher nur einmal berührt',
          rules: [
            { title: 'wish + Past Perfect für Vergangenheitsbedauern', body: 'Weiterhin ohne Rückmeldung seit Tag 1 — deshalb erneut, mit neuem Inhalt.', example: 'I <b>wish</b> I <b>had stopped</b> earlier. · We <b>wish</b> they <b>had accepted</b> the loss.' },
            { title: 'Inversion — <i>Never</i> und <i>Not only … but also</i>', body: 'Nach dem vorangestellten negativen Ausdruck: Hilfsverb vor Subjekt, wie in einer Frage.', example: '<b>Never had</b> the team wasted so much time. · <b>Not only did</b> they ignore the signs, <b>but</b> they <b>also</b> invested more.' },
            { title: 'Konditional Typ 2 — kein <i>would</i> im if-Satz', body: 'Weiterhin die häufigste deutsche Interferenz — auch wenn das Verb im if-Satz selbst schon eine Konditionalform im Deutschen trägt.', example: '<b>If</b> the price <b>were</b> stable, I <b>would</b> agree. · <b>If</b> the company <b>reported</b> more transparently, investors <b>would</b> react faster.' },
            { title: 'Passiv der Meinung — <i>is thought to</i> / <i>is known to have</i>', body: 'Subjekt bleibt die Person oder Sache selbst, nie „it“.', example: 'Investors <b>are thought to</b> decide emotionally. · He <b>is known to have</b> kept investing despite the losses.' },
            { title: 'agree <u>with</u> (nicht <i>to</i>) · development <u>for</u> sb (nicht <i>to</i>)', body: 'Zwei feste Präpositionen aus dem Fehlerprofil, die seit der Einstufung noch nicht gezielt geprüft wurden.', example: 'I completely <b>agree with</b> you on this point. · The <b>development for</b> the employees was positive.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd7i1',  prompt: 'Ich wünschte, ich hätte früher aufgehört zu investieren.',                        key: 'wish + had',             solution: 'I wish I had stopped investing earlier.' },
            { id: 'd7i2',  prompt: 'Ich wünschte, sie hätten den Verlust akzeptiert.',                                key: 'wish + had',             solution: 'I wish they had accepted the loss.' },
            { id: 'd7i3',  prompt: 'Noch nie hatte das Team so viel Zeit verschwendet.',                              key: 'Never …',                solution: 'Never had the team wasted so much time.' },
            { id: 'd7i4',  prompt: 'Nicht nur ignorierten sie die Warnzeichen, sie investierten auch mehr.',          key: 'Not only …',             solution: 'Not only did they ignore the warning signs, but they also invested more.' },
            { id: 'd7i5',  prompt: 'Wenn der Preis stabil wäre, würde ich zustimmen.',                                key: 'If … were',              solution: 'If the price were stable, I would agree.' },
            { id: 'd7i6',  prompt: 'Wenn die Firma transparenter berichten würde, würden Anleger schneller reagieren.', key: 'If … reported',        solution: 'If the company reported more transparently, investors would react faster.' },
            { id: 'd7i7',  prompt: 'Man geht davon aus, dass Anleger emotional entscheiden.',                         key: 'are thought to',         solution: 'Investors are thought to decide emotionally.' },
            { id: 'd7i8',  prompt: 'Es ist bekannt, dass er trotz der Verluste weiter investiert hat.',               key: 'is known to have',       solution: 'He is known to have kept investing despite the losses.' },
            { id: 'd7i9',  prompt: 'Ich stimme dir bei diesem Punkt völlig zu.',                                      key: 'agree with',             solution: 'I completely agree with you on this point.' },
            { id: 'd7i10', prompt: 'Die Entwicklung für die Angestellten war positiv.',                               key: 'development for',        solution: 'The development for the employees was positive.' }
          ]
        },
        {
          id: 'd7-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Do people become more careful after a failure, or does one setback push them to take bigger risks to make up for it? Give your own view.',
          ruleTitle: 'Themenwortschatz jetzt aktiv Pflicht: failure, setback, stigma, risk-taking, resilience.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. Position halten, Gegenargument benennen, weiterhin mit Hedge-Wörtern statt absolut formulieren, Abbrüche mit „or rather / what I mean is" reparieren statt neu anfangen.',
          phrases: [
            'failure · setback · stigma · risk-taking · resilience',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden: mindestens zwei Themenwörter und mindestens ein Hedge-Wort müssen tatsächlich vorkommen, der Einwand muss benannt werden, und unter fünf Füllwörtern bleiben.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd7-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Grad der Zustimmung, Gegenargument und Hedging — jetzt am Thema Risiko und Scheitern',
          prompt: '“A culture that stigmatises failure discourages the risk-taking that progress depends on.” To what extent do you agree?',
          min: 160, max: 180,
          checklist: [
            'Erster Satz: deine These — nie die Aufgabenstellung abschreiben.',
            '„To what extent" verlangt ein Maß: largely · only in part · rarely — nicht nur „I agree" oder „I disagree".',
            'Ein echtes Gegenargument behandeln (dass manche Risiken auch schlicht unnötig oder schlecht durchdacht sind), dann entkräften.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '160–180 Wörter. Die Zählung unten läuft mit.',
            'Schreibung prüfen: different · development · business · statement · academic · generally · consequential · necessary'
          ]
        },
        {
          id: 'd7-repair',
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
          id: 'd7-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (sunk cost · to write off · marginal · to cut one’s losses · enormity im Sinn von Schwere, nicht Größe). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },

  {
    day: 8,
    date: '2026-08-08',
    phase: 1,
    focus: 'enormity in neuer Einkleidung, dazu die Grenze zwischen is thought to + Grundform und is known to have + Partizip · Not only … but also mit dem fehlenden but · agree with zum zweiten Mal, dazu vier bisher unbearbeitete feste Wendungen',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd8-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Limits of Expert Judgement',
          kicker: 'Text 8 · Phase 1',
          intro: 'Die Wortgenauigkeits-Falle von gestern (enormity) wurde komplett übergangen — die Antwort ging nicht auf das Wort ein, sondern erzählte einen anderen Satz nach. Heute kommt dasselbe Wort in einem neuen Text und einer neuen Frage zurück: Erst das Wort isolieren, dann erklären, dann erst die naheliegende Fehldeutung benennen. Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'Organisations tend to assume that expertise reliably produces good judgement, yet the evidence points the other way almost as often as not. What experience reliably improves is not accuracy but confidence, and the two are easy to mistake for one another because a fluent, quickly delivered answer feels more trustworthy than a hesitant one, regardless of whether it is correct. Doctors who have practised for twenty years are, on average, no better at diagnosing rare conditions than doctors five years into their training; what changes with experience is mainly the speed and certainty with which the wrong answer gets delivered.',
            'None of this means that expertise is worthless, only that its value lies in a narrower place than most people assume. In domains with fast, unambiguous feedback, such as chess or weather forecasting, judgement genuinely does improve with practice. In domains where feedback is slow, rare, or easily explained away, such as long-range forecasting or personnel selection, it does not. The enormity of a single misdiagnosed case may go unnoticed for years, precisely because the feedback that would expose it rarely arrives in time to be traced back to the original decision. Recognising which kind of domain one is operating in is, arguably, a more valuable skill than any accumulated expertise itself.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer refers to “the enormity of a single misdiagnosed case”. Isolate the word first: what does “enormity” mean in this sentence, and what meaning would a reader get wrong by connecting it to “enormous”?', hint: 'Dieselbe Falle wie gestern, neuer Satz — diesmal das Wort zuerst isolieren, dann erklären.' },
            { id: 'q2', text: 'Explain in your own words why the writer says the value of expertise “lies in a narrower place than most people assume”.' },
            { id: 'q3', text: 'Does the writer say that experienced doctors are more accurate than less experienced ones? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — „on average, no better” ist etwas anderes als „schlechter”.' },
            { id: 'q4', text: '“What changes with experience is mainly the speed and certainty with which the wrong answer gets delivered.” What does this mean in practice? One sentence, in your own words.' },
            { id: 'q5', text: 'What connection does the writer draw between the type of feedback a domain provides and how much expert judgement improves with practice in that domain?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd8-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Not only … but also jetzt mit dem but · is thought to vs. is known to have im direkten Kontrast · agree with zum zweiten Mal · vier noch nie bearbeitete feste Wendungen',
          rules: [
            { title: 'would rather + Subjekt + Vergangenheitsform', body: 'Bisher nur an einem Tag richtig — weiter offen.', example: 'I<b>’d rather</b> you <b>checked</b> the figures beforehand. · I<b>’d rather</b> she <b>called</b> first.' },
            { title: 'Inversion — <i>Not only … but also</i> MIT dem <i>but</i>', body: 'Gestern saß zum ersten Mal das Hilfsverb vor dem Subjekt — nur das <i>but</i> vor dem zweiten Teil fehlte. Heute beides zusammen.', example: '<b>Not only did</b> she miss the deadline, <b>but</b> she <b>also</b> ignored the feedback.' },
            { title: 'Passiv der Meinung — <i>is thought to</i> + Grundform (nicht „that”-Satz)', body: 'Gestern falsch: „It is thought that investors are decided emotional”. Richtig: Subjekt bleibt die Person/Sache, direkt gefolgt von <i>to</i> + Verb.', example: 'The board <b>is thought to</b> decide too cautiously.' },
            { title: 'Passiv der Meinung — <i>is known to have</i> + Partizip', body: 'Diese Variante saß gestern zum ersten Mal sauber — heute bestätigen.', example: 'She <b>is known to have</b> postponed the deadline several times.' },
            { title: 'agree <u>with</u> (Person) · fall short <u>of</u> · take sb <u>aback</u> · a tendency <u>to</u> + Grundform · under the pretext <u>of</u> · for all its flaws', body: 'Sechs feste Wendungen aus dem Fehlerprofil — <i>agree with</i> saß gestern zum ersten Mal, die anderen fünf sind noch offen oder nie bearbeitet.', example: 'I completely <b>agree with</b> my colleague on this point. · The results <b>fell</b> well <b>short of</b> expectations. · The criticism <b>took</b> her completely <b>aback</b>. · He <b>has a tendency to</b> underestimate problems. · He left <b>under the pretext of</b> taking a call. · <b>For all its flaws</b>, the plan remains the most realistic option.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd8i1',  prompt: 'Ich würde es vorziehen, wenn du die Zahlen vorher prüfst.',                       key: 'would rather + past',    solution: 'I’d rather you checked the figures beforehand.' },
            { id: 'd8i2',  prompt: 'Nicht nur verpasste sie die Frist, sie ignorierte auch die Rückmeldung.',        key: 'Not only … but',         solution: 'Not only did she miss the deadline, but she also ignored the feedback.' },
            { id: 'd8i3',  prompt: 'Man geht davon aus, dass der Vorstand zu vorsichtig entscheidet.',               key: 'is thought to',          solution: 'The board is thought to decide too cautiously.' },
            { id: 'd8i4',  prompt: 'Es ist bekannt, dass sie die Frist mehrmals verschoben hat.',                    key: 'is known to have',       solution: 'She is known to have postponed the deadline several times.' },
            { id: 'd8i5',  prompt: 'Ich stimme meinem Kollegen bei diesem Punkt völlig zu.',                         key: 'agree with',             solution: 'I completely agree with my colleague on this point.' },
            { id: 'd8i6',  prompt: 'Die Ergebnisse blieben deutlich hinter den Erwartungen zurück.',                 key: 'fall short of',          solution: 'The results fell well short of expectations.' },
            { id: 'd8i7',  prompt: 'Die Kritik überrumpelte sie völlig.',                                            key: 'take sb aback',          solution: 'The criticism took her completely aback.' },
            { id: 'd8i8',  prompt: 'Er neigt dazu, Probleme zu unterschätzen.',                                      key: 'a tendency to',          solution: 'He has a tendency to underestimate problems.' },
            { id: 'd8i9',  prompt: 'Er verließ das Meeting unter dem Vorwand, einen Anruf entgegenzunehmen.',        key: 'under the pretext of',   solution: 'He left the meeting under the pretext of taking a call.' },
            { id: 'd8i10', prompt: 'Bei all seinen Schwächen bleibt der Plan die realistischste Option.',            key: 'for all its flaws',      solution: 'For all its flaws, the plan remains the most realistic option.' }
          ]
        },
        {
          id: 'd8-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Is it more dangerous to trust an overconfident expert, or to distrust every expert equally? Give your own view.',
          ruleTitle: 'Themenwortschatz weiterhin Pflicht: expertise, confidence, judgement, feedback, overconfidence.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. Position halten, Gegenargument benennen, mit Hedge-Wörtern statt absolut formulieren, Abbrüche mit „or rather / what I mean is” reparieren statt neu anfangen — das ist der einzige Punkt aus dem Fehlerprofil, der noch nie eindeutig als erfüllt galt.',
          phrases: [
            'expertise · confidence · judgement · feedback · overconfidence',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden: mindestens zwei Themenwörter und mindestens ein Hedge-Wort müssen tatsächlich vorkommen, der Einwand muss benannt werden, und unter fünf Füllwörtern bleiben.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd8-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Grad der Zustimmung — dritter sauberer Tag gesucht · Gegenposition weiterhin Pflicht',
          prompt: '“Organisations should trust data over experienced judgement whenever the two disagree.” To what extent do you agree?',
          min: 160, max: 180,
          checklist: [
            'Erster Satz: deine These — nie die Aufgabenstellung abschreiben.',
            '„To what extent" verlangt ein Maß: largely · only in part · rarely — nicht nur „I agree" oder „I disagree".',
            'Ein echtes Gegenargument behandeln (dass Daten selbst auch fehlerhaft oder unvollständig sein können), dann entkräften.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '160–180 Wörter. Die Zählung unten läuft mit.',
            'Schreibung prüfen: different · development · business · statement · academic · generally · judgement · necessary'
          ]
        },
        {
          id: 'd8-repair',
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
          id: 'd8-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (expertise · feedback loop · to misdiagnose · accumulated · arguably). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },
  {
    day: 9,
    date: '2026-08-09',
    phase: 1,
    focus: 'Sammelrunde zum Ende der Fundament-Phase: is thought to + Grundform bleibt die größte offene Lücke · taken aback und a tendency to noch nie sauber · Aufgabenstellung nicht abschreiben nach dem Rückfall von Tag 7 erneut prüfen · Grad der Zustimmung ohne Selbstwiderspruch',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd9-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Trouble with Agreement',
          kicker: 'Text 9 · Phase 1 · letzter Tag der Fundament-Phase',
          intro: 'Neue Wortgenauigkeits-Falle: ein Wort, das mit „in-“ beginnt und deshalb wie eine Verneinung aussieht, aber keine ist — dieselbe Familie wie invisible oder incorrect, nur dass die Bedeutung hier nicht negiert. Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'Groups are often assumed to make better decisions than individuals, since more perspectives should catch more errors. Yet research on decision-making suggests the opposite is just as common: once a group has settled into agreement, dissenting views tend to disappear before they can be tested, precisely when they would be most invaluable. A single sceptic willing to interrupt the flow of agreement provides something that cannot be replaced by adding more members who already share the majority’s view — a different starting point.',
            'The danger lies less in the group being uninformed than in it being unanimous too quickly. When a committee reaches consensus within minutes, that speed is more often a sign of deference than of clarity: junior members defer to senior ones, and senior ones defer to whoever spoke first. The eventual decision is thought to reflect the balance of evidence, when in fact it may reflect nothing more than the order in which people spoke.',
            'None of this means dissent should be manufactured for its own sake. A colleague who objects to everything is no more useful than one who objects to nothing. What a functioning group needs is not more disagreement but disagreement that arrives early enough, from someone secure enough in their position, to be heard before the consensus has hardened around a different answer.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer says a dissenting view is most “invaluable” right before it disappears. What does “invaluable” mean here, and what meaning would a reader wrongly assume by reading “in-” as a negation, the way it works in “invisible” or “incorrect”?', hint: 'Neue Wortgenauigkeits-Falle — dieselbe Vorsilbe wie bei „incorrect”, aber keine Verneinung.' },
            { id: 'q2', text: 'Explain in your own words why the writer says that a fast, unanimous committee decision is more a sign of deference than of clarity.' },
            { id: 'q3', text: 'Does the writer say that disagreement should be encouraged for its own sake, regardless of the reason? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — der Text unterscheidet zwischen Dissens an sich und Dissens zur richtigen Zeit.' },
            { id: 'q4', text: '“The eventual decision is thought to reflect the balance of evidence, when in fact it may reflect nothing more than the order in which people spoke.” What does this mean in practice? One sentence, in your own words.' },
            { id: 'q5', text: 'What connection does the writer draw between how early a dissenting view arrives and whether it can still change a group’s decision?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd9-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Sammelrunde zum Phasenende: is thought to gleich zweimal, dazu is known to have, Not only … but also, would rather, Konditional Typ 2, taken aback, a tendency to, strange as it may seem/for all its flaws und agree with/development for in einer Runde',
          rules: [
            { title: 'Passiv der Meinung — <i>is thought to</i> + Grundform, weiterhin die größte offene Lücke', body: 'An sieben Tagen nicht sauber getroffen — immer wieder <i>is thought to</i> + „that”-Satz statt + Verb. Heute zweimal hintereinander, damit sich die Struktur festsetzt.', example: 'The board <b>is thought to</b> react too slowly. · The company <b>is thought to</b> underestimate the risks.' },
            { title: 'Passiv der Meinung — <i>is known to have</i> + Partizip', body: 'Saß an Tag 7 zum ersten Mal sauber — heute bestätigen.', example: 'The committee <b>is known to have</b> postponed the decision several times.' },
            { title: 'Inversion — <i>Not only … but also</i> MIT dem <i>but</i> · <i>would rather</i> + Vergangenheitsform', body: 'Der Durchbruch von Tag 7 (Hilfsverb vor dem Subjekt) heute mit dem fehlenden <i>but</i> komplett. <i>would rather</i> bisher nur an einem Tag richtig.', example: '<b>Not only did</b> the board ignore the warning, <b>but</b> it <b>also</b> invested more money. · I<b>’d rather</b> the report <b>came</b> earlier.' },
            { title: 'Konditional Typ 2 — kein <i>would</i> im if-Satz', body: 'Im Drill seit fünf Tagen sicher, überträgt sich aber noch nicht ins freie Schreiben (Tag 6: „If this client would come earlier”). Heute noch einmal im Drill festigen.', example: '<b>If</b> the data <b>were</b> more reliable, the management <b>would</b> decide faster.' },
            { title: 'Feste Wendungen — noch nie sauber: <i>taken aback</i>, <i>a tendency to</i> · fast erledigt: <i>strange as it may seem</i>, <i>for all its flaws</i> · agree <u>with</u>, development <u>for</u>', body: 'Beide ersten Wendungen sind seit der Einstufung an keinem Tag richtig gestanden — heute mit neuem Inhalt, damit es nicht am auswendig gelernten Satz liegt.', example: 'The whole team <b>was taken aback</b> by the decision. · Experienced experts <b>have a tendency to</b> overestimate their own judgement. · <b>For all its flaws</b>, intuition, <b>strange as it may seem</b>, is often faster than analysis. · I completely <b>agree with</b> my colleague that the <b>development for</b> the team was positive.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd9i1',  prompt: 'Man geht davon aus, dass die Geschäftsführung zu langsam reagiert.',                          key: 'is thought to',          solution: 'The management is thought to react too slowly.' },
            { id: 'd9i2',  prompt: 'Es wird angenommen, dass das Unternehmen die Risiken unterschätzt.',                         key: 'is thought to',          solution: 'The company is thought to underestimate the risks.' },
            { id: 'd9i3',  prompt: 'Es ist bekannt, dass der Ausschuss die Entscheidung mehrmals verschoben hat.',                key: 'is known to have',       solution: 'The committee is known to have postponed the decision several times.' },
            { id: 'd9i4',  prompt: 'Nicht nur ignorierte der Vorstand die Warnung, sondern er investierte auch mehr Geld.',       key: 'Not only … but',         solution: 'Not only did the board ignore the warning, but it also invested more money.' },
            { id: 'd9i5',  prompt: 'Ich würde es vorziehen, wenn der Bericht früher käme.',                                       key: 'would rather + past',    solution: 'I’d rather the report came earlier.' },
            { id: 'd9i6',  prompt: 'Wenn die Daten zuverlässiger wären, würde die Geschäftsführung schneller entscheiden.',        key: 'If … were',              solution: 'If the data were more reliable, the management would decide faster.' },
            { id: 'd9i7',  prompt: 'Die Entscheidung überrumpelte das gesamte Team.',                                             key: 'taken aback',            solution: 'The whole team was taken aback by the decision.' },
            { id: 'd9i8',  prompt: 'Erfahrene Experten neigen dazu, ihre eigene Urteilskraft zu überschätzen.',                   key: 'a tendency to',          solution: 'Experienced experts have a tendency to overestimate their own judgement.' },
            { id: 'd9i9',  prompt: 'Bei all ihren Schwächen ist die Intuition, so seltsam es klingen mag, oft schneller als die Analyse.', key: 'For all … · Strange as …', solution: 'For all its flaws, intuition, strange as it may seem, is often faster than analysis.' },
            { id: 'd9i10', prompt: 'Ich stimme meiner Kollegin völlig zu, dass die Entwicklung für das Team positiv war.',        key: 'agree with · development for', solution: 'I completely agree with my colleague that the development for the team was positive.' }
          ]
        },
        {
          id: 'd9-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Is it more dangerous to challenge a group consensus, or to go along with it even when you have doubts? Give your own view.',
          ruleTitle: 'Neuer Themenwortschatz: consensus, groupthink, dissent, conformity, deference.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. Position halten, Gegenargument benennen, mit Hedge-Wörtern statt absolut formulieren. Reparieren statt neu anfangen (or rather / what I mean is) ist der einzige Fehlerprofil-Punkt aus dem Sprechen, der noch nie eindeutig als erfüllt galt — heute der letzte Tag der Fundament-Phase, um ihn zu belegen.',
          phrases: [
            'consensus · groupthink · dissent · conformity · deference',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden: mindestens zwei Themenwörter und mindestens ein Hedge-Wort müssen tatsächlich vorkommen, der Einwand muss benannt werden, und unter fünf Füllwörtern bleiben.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd9-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Letzter Schreibblock der Fundament-Phase: erster Satz nicht die Aufgabenstellung (Rückfall von Tag 7) · Grad der Zustimmung ohne Selbstwiderspruch · echtes Gegenargument · 160–180 Wörter, nicht mehr',
          prompt: '“People should trust their own judgement more than the opinion of the majority.” To what extent do you agree?',
          min: 160, max: 180,
          checklist: [
            'Erster Satz: deine These, in eigenen Worten — nicht die Aufgabenstellung umformuliert wiederholen (das ist am 07.08. abends passiert).',
            'Ein Maß nennen (largely · only in part · rarely) — und diese Position im Text konsequent durchhalten, nicht am Ende ins Gegenteil kippen.',
            'Ein echtes Gegenargument behandeln (dass eigenes Urteil auch von blinden Flecken oder mangelnder Information verzerrt sein kann), dann entkräften.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '160–180 Wörter — diesmal auch die Obergrenze einhalten, nicht nur die untere.',
            'Schreibung prüfen: different · development · business · statement · academic · generally · judgement · necessary'
          ]
        },
        {
          id: 'd9-repair',
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
          id: 'd9-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (invaluable · to defer to · to harden around · dissenting · secure in one’s position). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },
  {
    day: 10,
    date: '2026-08-10',
    phase: 2,
    focus: 'Start Phase 2 — dichtere Texte mit Argument und Gegenargument · is thought to auf den dritten sauberen Tag, is known to have und Not only … but also nach dem Rückfall reparieren · taken aback mit der richtigen Präposition · Essays jetzt 200–250 Wörter mit Konzession · Speaking erstmals mit vorgegebener Gegenposition',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd10-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'Who Is Responsible for the Algorithm?',
          kicker: 'Text 10 · Phase 2 · erster Tag mit dichterer Argument-Gegenargument-Struktur',
          intro: 'Phase 2 beginnt: die Texte werden dichter, und jeder Text baut jetzt ein Argument gegen ein Gegenargument. Neue Wortgenauigkeits-Falle: ein Wort, das nach etwas Besonderem oder Positivem klingt, aber tatsächlich „scheinbar richtig, in Wahrheit aber trügerisch“ bedeutet. Ziel für Text + Fragen bleibt bei 8 Minuten, trotz der Länge.',
          paragraphs: [
            'Algorithmic curation is routinely blamed for entrenching political polarisation, and there is no shortage of evidence that recommendation systems reward content capable of provoking outrage more reliably than content that merely informs. Yet the argument that dismantling such systems altogether would restore a more balanced public discourse is, on closer inspection, rather specious: platforms did not invent tribal loyalty, selective exposure, or the human preference for information that confirms rather than challenges existing beliefs, all of which predate the internet by generations. What algorithms have done is not create these tendencies but scale them, compressing feedback loops that once took years into a matter of hours.',
            'This distinction matters because it reframes where responsibility, and therefore regulation, should be directed. A platform redesigned to suppress outrage-driven engagement might slow the amplification of polarising content without addressing why users sought it out in the first place. Conversely, media literacy initiatives that ignore the architecture of recommendation systems risk placing the entire burden of restraint on individuals navigating an environment engineered to erode it. Neither intervention alone is sufficient; the two are complementary rather than substitutable, a conclusion that ought to be uncontroversial yet is rarely reflected in policy debates.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer calls a common argument about dismantling algorithmic curation “rather specious”. What does “specious” mean here, and what meaning would a reader wrongly assume if they read it as a compliment (something like “special” or “sophisticated”)?', hint: 'Neue Wortgenauigkeits-Falle — klingt positiv, ist aber eine Abwertung des Arguments, nicht des Sprechers.' },
            { id: 'q2', text: 'Explain in your own words why the writer says algorithms did not “create” polarising tendencies but merely “scale” them.' },
            { id: 'q3', text: 'Does the writer argue that regulating platforms alone would solve the problem of polarisation? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — der Text sagt „komplementär“, nicht „entweder–oder“.' },
            { id: 'q4', text: '“The two are complementary rather than substitutable.” What does this mean in practice, applied to platform regulation and media literacy? One sentence, in your own words.' },
            { id: 'q5', text: 'What connection does the writer draw between how a problem is explained (individual behaviour vs. platform design) and which kind of intervention is proposed to fix it?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd10-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Phase-2-Auftakt: is thought to auf den dritten sauberen Tag · is known to have und Not only … but also nach dem Rückfall von Tag 8 reparieren · taken aback mit der richtigen Präposition · vier Wendungen auf ihren jeweils entscheidenden Tag',
          rules: [
            { title: 'Passiv der Meinung — <i>is thought to</i> + Grundform, dritter sauberer Tag gesucht', body: 'An Tag 9 zum ersten Mal zwei fehlerfreie Sätze in einer Runde. Noch ein sauberer Tag bis zum Erledigt-Kriterium.', example: 'The editorial team <b>is thought to</b> overlook important details.' },
            { title: 'Passiv der Meinung — <i>is known to have</i> + Partizip, nach dem Rückfall von Tag 8 reparieren', body: 'An Tag 7 sauber, an Tag 8 wieder falsche Struktur („is known that …“). Heute erneut mit Grundmuster.', example: 'The platform <b>is known to have</b> altered its algorithm several times without notice.' },
            { title: 'Inversion — <i>Not only … but also</i> MIT dem <i>but</i>, nach dem Zusammenbruch von Tag 8 reparieren', body: 'Tag 7: Hilfsverb korrekt vor dem Subjekt. Tag 8: keine Inversion mehr. Heute den Tag-7-Stand wiederherstellen.', example: '<b>Not only did</b> the platform delay its response, <b>but</b> it <b>also</b> denied the allegations.' },
            { title: '<i>would rather</i> + Vergangenheitsform, dritter sauberer Tag gesucht', body: 'Tag 8 sauber, Tag 9 wieder die alte Doppelung (<i>would rather prefer</i>). Heute ohne <i>prefer</i> danach.', example: 'I<b>’d rather</b> the editorial team <b>disclosed</b> the source beforehand.' },
            { title: '<i>taken aback</i> <u>by</u> (nicht <i>from</i>) · a tendency <u>to</u> · agree <u>with</u> + development <u>for</u> · strange as it may <u>seem</u> (nicht <i>sound</i>) · under the pretext <u>of</u> · fall short <u>of</u>', body: 'An Tag 9 stand <i>taken aback</i> zum ersten Mal richtig, nur die Präposition war falsch (<i>from</i> statt <i>by</i>) — heute gezielt korrigieren. Die anderen fünf Wendungen jeweils auf ihrem entscheidenden Tag: <i>a tendency to</i> und <i>agree with</i> brauchen den dritten sauberen Beleg, <i>strange as it may seem</i> hakt seit drei Tagen an genau derselben Stelle (<i>seem</i> nach dem Modalverb, nicht <i>sound</i>), <i>under the pretext of</i> und <i>fall short of</i> je den nächsten sauberen Tag.', example: 'The users were completely <b>taken aback by</b> the sudden change. · Recommendation algorithms <b>have a tendency to</b> favour outrage-driven content. · I completely <b>agree with</b> the critic that the <b>development for</b> users has been worrying. <b>Strange as it may seem</b>, stricter regulation could actually calm the debate. · The company suspended the account <b>under the pretext of</b> enforcing its guidelines. · The measure <b>fell</b> well <b>short of</b> the critics’ expectations.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd10i1',  prompt: 'Man geht davon aus, dass die Redaktion wichtige Details übersieht.',                              key: 'is thought to',          solution: 'The editorial team is thought to overlook important details.' },
            { id: 'd10i2',  prompt: 'Es ist bekannt, dass die Plattform ihren Algorithmus mehrmals stillschweigend geändert hat.',       key: 'is known to have',       solution: 'The platform is known to have altered its algorithm several times without notice.' },
            { id: 'd10i3',  prompt: 'Nicht nur verzögerte die Plattform die Antwort, sie leugnete auch die Vorwürfe.',                   key: 'Not only … but',         solution: 'Not only did the platform delay its response, but it also denied the allegations.' },
            { id: 'd10i4',  prompt: 'Ich würde es vorziehen, wenn die Redaktion die Quelle vorher offenlegte.',                          key: 'would rather + past',    solution: 'I’d rather the editorial team disclosed the source beforehand.' },
            { id: 'd10i5',  prompt: 'Die Nutzer waren von der plötzlichen Änderung völlig überrumpelt.',                                key: 'taken aback by',         solution: 'The users were completely taken aback by the sudden change.' },
            { id: 'd10i6',  prompt: 'Empfehlungsalgorithmen neigen dazu, empörende Inhalte zu bevorzugen.',                             key: 'a tendency to',          solution: 'Recommendation algorithms have a tendency to favour outrage-driven content.' },
            { id: 'd10i7',  prompt: 'Ich stimme der Kritikerin völlig zu, dass die Entwicklung für die Nutzer besorgniserregend war.',    key: 'agree with · development for', solution: 'I completely agree with the critic that the development for users has been worrying.' },
            { id: 'd10i8',  prompt: 'So seltsam es klingen mag, strengere Regulierung könnte die Debatte tatsächlich beruhigen.',        key: 'strange as it may seem', solution: 'Strange as it may seem, stricter regulation could actually calm the debate.' },
            { id: 'd10i9',  prompt: 'Das Unternehmen sperrte das Konto unter dem Vorwand, die Richtlinien durchzusetzen.',               key: 'under the pretext of',   solution: 'The company suspended the account under the pretext of enforcing its guidelines.' },
            { id: 'd10i10', prompt: 'Die Maßnahme blieb weit hinter den Erwartungen der Kritiker zurück.',                               key: 'fall short of',          solution: 'The measure fell well short of the critics’ expectations.' }
          ]
        },
        {
          id: 'd10-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Should governments regulate algorithmic content curation, or should platforms be left to regulate themselves?',
          ruleTitle: 'Neuer Themenwortschatz: regulation, accountability, self-regulation, oversight, transparency.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. An Tag 9 ist keines der fünf Themenwörter korrekt gefallen — heute bewusst langsamer sprechen, besonders bei mehrsilbigen Wörtern. Position halten, mit Hedge-Wörtern statt absolut formulieren, Abbrüche mit „or rather / what I mean is” reparieren statt neu anfangen.',
          phrases: [
            'regulation · accountability · self-regulation · oversight · transparency',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden, aber ab heute mit einer vorgegebenen Gegenposition, auf die du reagieren musst: „Some would argue that government regulation always lags behind technological change and therefore does more harm than good — how would you respond?” Baue eine erkennbare Reaktion auf genau diesen Einwand ein (zustimmen, einschränken oder widersprechen), nicht nur eine Wiederholung deiner ersten Position. Dazu weiterhin: mindestens zwei Themenwörter, mindestens ein Hedge-Wort, unter fünf Füllwörtern.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd10-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Ab heute 200–250 Wörter statt 160–180 · neu Pflicht: eine echte Konzession vor dem Gegenargument · Grad der Zustimmung weiterhin offen · Sprachrichtigkeit zuletzt zweimal in Folge der limitierende Faktor (datas, more as)',
          prompt: '“Governments should regulate algorithmic content curation.” To what extent do you agree?',
          min: 200, max: 250,
          checklist: [
            'Erster Satz: deine These, in eigenen Worten — nicht die Aufgabenstellung umformuliert wiederholen.',
            '„To what extent" verlangt ein Maß: largely · only in part · rarely — und diese Position bis zum Schluss durchhalten.',
            'Neu ab heute: eine echte Konzession vor dem Gegenargument („It is true that … / Admittedly, …“), erst danach die eigene Position verteidigen — nicht nur eine Gegenposition benennen, sondern ihr zunächst recht geben.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '200–250 Wörter — die Zählung unten läuft mit.',
            'Rechtschreibung bewusst prüfen: different · development · business · statement · academic · generally — und diesmal auf „datas" (Plural von data, unzählbar) und deutsche Interferenzen wie „more as" statt „more than" achten.'
          ]
        },
        {
          id: 'd10-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Die falschen Sätze von heute Morgen neu — aus dem Kopf, nicht abgeschrieben. Repair wurde die letzten acht Tage in Folge übersprungen — heute reicht ein einziger ehrlicher Versuch bei r1, das ist mehr wert als die restlichen Felder mit „weiß nicht" abzuhaken.',
          fields: [
            { id: 'r1', label: 'Falscher Drill-Satz 1 → neu, mit der Regel dahinter in drei Wörtern' },
            { id: 'r2', label: 'Falscher Drill-Satz 2 → neu, mit der Regel dahinter' },
            { id: 'r3', label: 'Falscher Drill-Satz 3 → neu, mit der Regel dahinter' },
            { id: 'r4', label: 'Die Reading-Frage, bei der du am unsichersten warst — Antwort neu, in eigenen Worten, ohne ein einziges Zitat' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd10-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (to entrench · outrage-driven · to dismantle · to reframe · complementary). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },
  {
    day: 11,
    date: '2026-08-11',
    phase: 2,
    focus: 'Bester Drill-Tag bisher (7/10) — jetzt is thought to, is known to have und under the pretext of auf den jeweils entscheidenden Tag bringen · reduction/editorial-team-Verwechslung auflösen · datas und more as gezielt korrigieren · Aufgabenstellung nicht abschreiben nach dem deutlichsten Rückfall wieder herstellen · Speaking-Gegenposition zum zweiten Mal',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd11-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Ethics of the Nudge',
          kicker: 'Text 11 · Phase 2',
          intro: 'Neue Wortgenauigkeits-Falle: ein Wort, das nach „offensichtlich, garantiert wahr" klingt, aber tatsächlich „nur dem Anschein nach, ohne Garantie" bedeutet — das genaue Gegenteil von Sicherheit. Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'Governments increasingly rely on so-called nudges—subtle changes to the way choices are presented—to steer citizens toward outcomes deemed beneficial, from retirement savings to organ donation. Defenders insist that nudging preserves freedom of choice: opting out remains ostensibly available to anyone who wishes it, which is meant to distinguish nudging from outright coercion. Critics counter that this distinction collapses in practice, since defaults are rarely neutral; the very fact that inertia keeps most people enrolled in whatever option was pre-selected means that the choice architect, not the citizen, is doing most of the deciding.',
            'What complicates the debate further is that nudging’s effectiveness depends precisely on the asymmetry it claims not to exploit: a nudge that citizens could effortlessly resist would achieve nothing, yet a nudge robust enough to work reliably is, by the same token, difficult to describe as fully voluntary. This need not settle the argument in favour of banning nudges outright, but it does mean that policymakers who invoke choice architecture cannot simultaneously claim the practice is ethically costless. Whether the benefits justify the cost is a separate question from whether there is a cost to justify at all.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer says opting out of a nudge remains “ostensibly” available. What does “ostensibly” mean here, and what meaning would a reader wrongly assume if they read it as “obviously” or “guaranteed”?', hint: 'Neue Wortgenauigkeits-Falle — klingt nach Sicherheit, bedeutet aber „dem Anschein nach", ohne Garantie.' },
            { id: 'q2', text: 'Explain in your own words why the writer says that a nudge which citizens could “effortlessly resist” would “achieve nothing”.' },
            { id: 'q3', text: 'Does the writer argue that nudges should be banned? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — der Text trennt zwei verschiedene Fragen, statt eine Antwort zu geben.' },
            { id: 'q4', text: '“Policymakers who invoke choice architecture cannot simultaneously claim the practice is ethically costless.” What does this mean in practice? One sentence, in your own words.' },
            { id: 'q5', text: 'What connection does the writer draw between how effective a nudge is and how voluntary it can honestly be called?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd11-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Nach dem bisher besten Drill-Tag: is thought to, is known to have und under the pretext of auf den jeweils entscheidenden dritten Tag · reduction/editorial-team-Verwechslung auflösen · datas und more as gezielt korrigieren',
          rules: [
            { title: 'Passiv der Meinung — <i>is thought to</i> + Grundform, zweiter sauberer Tag gesucht', body: 'An Tag 9 fehlerfrei, an Tag 10 die Struktur richtig, aber „reduction“ statt „editorial team“ (Verwechslung mit „Redaktion“) ergab keinen sinnvollen Satz. Heute mit „editors“ als einfacherer Übersetzung.', example: 'The editors <b>are thought to</b> overlook important context.' },
            { title: 'Passiv der Meinung — <i>is known to have</i> + Partizip, dritter sauberer Tag gesucht', body: 'An Tag 7 und Tag 10 sauber, an Tag 8 falsch. Noch ein sauberer Tag bis zum Erledigt-Kriterium.', example: 'The authority <b>is known to have</b> changed the default setting several times.' },
            { title: '<i>under the pretext of</i>, dritter sauberer Tag gesucht · <i>taken aback</i> <u>by</u> und <i>strange as it may seem</i>, jeweils zweiter sauberer Tag', body: 'Alle drei standen an Tag 8/9/10 zum ersten Mal richtig — heute bestätigen.', example: 'The authority changed the rule <b>under the pretext of</b> protecting citizens. · Many citizens were completely <b>taken aback by</b> the silent change. · <b>Strange as it may seem</b>, most people never object to the default setting.' },
            { title: '<i>would rather</i> + Vergangenheitsform, dritter sauberer Tag gesucht · Inversion — <i>Not only … but also</i>, Grundform nach <i>did</i>', body: 'An Tag 10 zwei neue Fehlervarianten in beiden Punkten. Bei <i>Not only</i> nach <i>did</i> steht die Grundform, nicht die Vergangenheitsform — „did … change“, nicht „did … changed“.', example: 'I<b>’d rather</b> the government <b>explained</b> the default more clearly. · <b>Not only did</b> the authority <b>change</b> the default, <b>but</b> it <b>also</b> concealed the reasons.' },
            { title: '<i>data</i> ist unzählbar (kein „datas“, Verb im Plural) · <i>more than</i> (nicht <i>more as</i>) · <u>-ing</u>-Adjektiv für die Ursache, <u>-ed</u> für die Person, die es erlebt', body: 'Drei Fehler aus dem Schreibblock der letzten Tage direkt im Drill üben, bevor sie im freien Text wieder auftauchen.', example: 'The <b>data show</b> that most people never change the default. · Citizens trust the government <b>more than</b> individual companies. · <b>Shocking</b> revelations spread faster than <b>boring</b> facts.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd11i1',  prompt: 'Man geht davon aus, dass die Herausgeber wichtigen Kontext übersehen.',                          key: 'is thought to',          solution: 'The editors are thought to overlook important context.' },
            { id: 'd11i2',  prompt: 'Es ist bekannt, dass die Behörde die Voreinstellung mehrfach geändert hat.',                    key: 'is known to have',       solution: 'The authority is known to have changed the default setting several times.' },
            { id: 'd11i3',  prompt: 'Die Behörde änderte die Regel unter dem Vorwand, die Bürger zu schützen.',                      key: 'under the pretext of',   solution: 'The authority changed the rule under the pretext of protecting citizens.' },
            { id: 'd11i4',  prompt: 'Viele Bürger waren von der stillschweigenden Änderung völlig überrumpelt.',                     key: 'taken aback by',         solution: 'Many citizens were completely taken aback by the silent change.' },
            { id: 'd11i5',  prompt: 'So seltsam es klingen mag, die meisten Menschen widersprechen der Standardeinstellung nie.',     key: 'strange as it may seem', solution: 'Strange as it may seem, most people never object to the default setting.' },
            { id: 'd11i6',  prompt: 'Ich würde es vorziehen, wenn die Regierung die Voreinstellung klarer erklärte.',                key: 'would rather + past',    solution: 'I’d rather the government explained the default more clearly.' },
            { id: 'd11i7',  prompt: 'Nicht nur änderte die Behörde die Voreinstellung, sie verschwieg auch die Gründe.',             key: 'Not only … but',         solution: 'Not only did the authority change the default, but it also concealed the reasons.' },
            { id: 'd11i8',  prompt: 'Die Daten zeigen, dass die meisten Menschen die Voreinstellung nie ändern.',                    key: 'data + Plural',          solution: 'The data show that most people never change the default.' },
            { id: 'd11i9',  prompt: 'Die Bürger vertrauen der Regierung mehr als den einzelnen Unternehmen.',                        key: 'more than',              solution: 'Citizens trust the government more than individual companies.' },
            { id: 'd11i10', prompt: 'Schockierende Enthüllungen verbreiten sich schneller als langweilige Fakten.',                  key: '-ing-Adjektiv',          solution: 'Shocking revelations spread faster than boring facts.' }
          ]
        },
        {
          id: 'd11-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Should governments use “nudges” to steer citizens toward better choices, or does this cross into manipulation?',
          ruleTitle: 'Neuer Themenwortschatz: autonomy, paternalism, manipulation, consent, coercion.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. An Tag 10 wurde die vorgegebene Gegenposition im zweiten Durchgang gar nicht aufgegriffen — heute bewusst eine Formulierung aus den Phrasen unten benutzen, um explizit auf den Einwand einzugehen, nicht nur die eigene Position zu wiederholen. Abbrüche mit „or rather / what I mean is” reparieren statt neu anfangen.',
          phrases: [
            'autonomy · paternalism · manipulation · consent · coercion',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden, mit einer vorgegebenen Gegenposition, auf die du reagieren musst: „Some would argue that if a nudge is easy to reject, it isn’t really manipulation at all — how would you respond?” Beginne den zweiten Durchgang ausdrücklich mit einer Reaktion auf genau diesen Satz („That said, …“ oder „One could object that …“), bevor du weiterredest — an Tag 10 fehlte diese explizite Anknüpfung ganz. Dazu weiterhin: mindestens zwei Themenwörter, mindestens ein Hedge-Wort, unter fünf Füllwörtern.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd11-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Neu ab heute, Nutzerpriorität: kein inhaltstragendes Wort im Fließtext zweimal · Erster Satz: eigene These, keine zitierte Aufgabenstellung — an Tag 10 der bisher deutlichste Rückfall · Grad der Zustimmung seit drei Tagen ohne klares Maß · Konzession vor dem Gegenargument zum zweiten Mal · datas/more as/the looser gezielt vermeiden',
          prompt: '“Governments should be allowed to use ‘nudges’ to influence citizens’ choices without asking for their explicit consent.” To what extent do you agree?',
          min: 200, max: 250,
          checklist: [
            'Neu und ab jetzt bei jedem Schreibblock Pflicht: kein inhaltstragendes Wort (Nomen, Verb, Adjektiv, Adverb) im ganzen Text zweimal verwenden — für Wiederholungen ein Synonym, eine Umschreibung, ein Pronomen oder einen Oberbegriff nutzen. Funktionswörter (the, a, is, and …) zählen nicht. Vor dem Abgeben den Text noch einmal gezielt nach Wiederholungen absuchen.',
            'Erster Satz: deine These in eigenen Worten. Die Aufgabenstellung darf nicht zitiert werden, auch nicht in Anführungszeichen — genau das ist an Tag 10 passiert.',
            '„To what extent" verlangt ein Maß (largely · only in part · rarely) — das fehlt seit drei Schreibtagen komplett. Heute im ersten oder zweiten Satz ein klares Maß nennen und bis zum Schluss durchhalten.',
            'Eine echte Konzession vor dem Gegenargument („It is true that … / Admittedly, …"), erst danach die eigene Position verteidigen.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '200–250 Wörter — die Zählung läuft mit.',
            'Rechtschreibung gezielt: „data" ist unzählbar (the data show, nicht „datas"), „more than" nicht „more as", „the loser" nicht „the looser" — alle drei sind in den letzten Tagen tatsächlich passiert.'
          ]
        },
        {
          id: 'd11-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Die falschen Sätze von heute Morgen neu — aus dem Kopf, nicht abgeschrieben. Repair wurde die letzten neun Tage in Folge übersprungen — heute reicht ein einziger ehrlicher Versuch bei r1.',
          fields: [
            { id: 'r1', label: 'Falscher Drill-Satz 1 → neu, mit der Regel dahinter in drei Wörtern' },
            { id: 'r2', label: 'Falscher Drill-Satz 2 → neu, mit der Regel dahinter' },
            { id: 'r3', label: 'Falscher Drill-Satz 3 → neu, mit der Regel dahinter' },
            { id: 'r4', label: 'Die Reading-Frage, bei der du am unsichersten warst — Antwort neu, in eigenen Worten, ohne ein einziges Zitat' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd11-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (to steer · to opt out · inertia · choice architect · costless). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },
  {
    day: 12,
    date: '2026-08-12',
    phase: 2,
    focus: 'Sicherung zu Tag 11 fehlt — dieselben Grammatikziele bleiben unverändert offen (is thought to, is known to have, under the pretext of, taken aback by, strange as it may seem, would rather, Not only-Inversion) · Schreiben: lexikalische Variation und Zustimmungsgrad hart prüfen, Aufgabenstellung diesmal nicht zitieren · Speaking-Gegenposition mit expliziter Reaktionsformel',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd12-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Meritocracy Myth',
          kicker: 'Text 12 · Phase 2',
          intro: 'Neue Wortgenauigkeits-Falle: ein Wort mit derselben Wortwurzel wie „envy“ (Neid), das heute aber nicht „neidisch“ bedeutet, sondern „ungerecht und geeignet, Unmut zu erzeugen“. Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'The claim that modern societies reward talent and effort roughly in proportion to their worth has long served as one of liberal democracy’s foundational assumptions, yet a growing body of scholarship suggests that meritocracy functions less as an accurate description of how advancement occurs than as a story societies tell themselves to legitimise existing hierarchies. Its defenders concede certain imperfections while insisting that any alternative grounded explicitly in birth or connections would be worse. Critics counter that this framing performs an invidious manoeuvre: by attributing success overwhelmingly to individual merit, it quietly obscures how far starting positions—inherited wealth, parental education, access to influential networks—continue to shape outcomes long before effort ever enters the equation.',
            'What renders the debate particularly intractable is that meritocratic rhetoric, once internalised, tends to entrench rather than dissolve social divisions. Those who succeed are inclined to regard their achievements as evidence of superior ability rather than of favourable circumstance, whereas those who do not are left without any explanation beyond personal inadequacy—a verdict considerably harsher than one a frankly hereditary system would have offered, since the latter at least spared the unsuccessful the further indignity of self-blame. Whether meritocracy should be abandoned or merely reformed remains open to argument; that the system as currently practised bears little resemblance to its own self-image does not.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer calls a rhetorical move “an invidious manoeuvre”. What does “invidious” mean here, and what wrong meaning would a reader get if they connected it only to “envy”?', hint: 'Neue Wortgenauigkeits-Falle — dieselbe Wortwurzel wie envy, aber heute „ungerecht/unmutserzeugend“, nicht „neidisch“.' },
            { id: 'q2', text: 'Explain in your own words why the writer says meritocratic rhetoric tends to “entrench rather than dissolve social divisions”.' },
            { id: 'q3', text: 'Does the writer conclude that meritocracy should be abandoned? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — der Text hält die Frage ausdrücklich offen, statt eine Seite zu wählen.' },
            { id: 'q4', text: '“The system as currently practised bears little resemblance to its own self-image.” What does this mean in practice? One sentence, in your own words.' },
            { id: 'q5', text: 'What advantage does the writer say a “frankly hereditary system” has over a meritocracy that fails to admit its own limits?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd12-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Sicherung zu Tag 11 fehlt — dieselben Zielsätze wie gestern bleiben offen: is thought to, is known to have, under the pretext of, taken aback by, strange as it may seem, would rather, Not only-Inversion · zusätzlich datas/more as/-ing-/-ed-Adjektiv am neuen Thema Meritokratie',
          rules: [
            { title: 'Passiv der Meinung — <i>is thought to</i> + Grundform, weiterhin zweiter sauberer Tag gesucht', body: 'An Tag 9 fehlerfrei, an Tag 10 die Struktur richtig, aber mit falschem Objekt (reduction statt editorial team). Tag 11 blieb ohne Auswertung — der Zielpunkt bleibt unverändert offen.', example: 'Wealthy families <b>are thought to</b> favour access to good schools.' },
            { title: 'Passiv der Meinung — <i>is known to have</i> + Partizip, weiterhin dritter sauberer Tag gesucht', body: 'An Tag 7 und Tag 10 sauber, an Tag 8 falsch. Noch ein sauberer Tag bis zum Erledigt-Kriterium.', example: 'The system <b>is known to have</b> reinforced inequality across generations.' },
            { title: '<i>under the pretext of</i>, weiterhin dritter sauberer Tag gesucht · <i>taken aback</i> <u>by</u> und <i>strange as it may seem</i>, jeweils zweiter sauberer Tag gesucht', body: 'Alle drei standen an Tag 8/9/10 zum ersten Mal richtig, Tag 11 blieb ohne Auswertung — heute erneut bestätigen.', example: 'The government cut the funding <b>under the pretext of</b> reducing spending. · Many voters were completely <b>taken aback by</b> the sudden change of course. · <b>Strange as it may seem</b>, a hereditary system at least spares the unsuccessful from self-blame.' },
            { title: '<i>would rather</i> + Vergangenheitsform, weiterhin dritter sauberer Tag gesucht · Inversion — <i>Not only … but also</i>, Grundform nach <i>did</i>', body: 'An Tag 10 zwei neue Fehlervarianten in beiden Punkten. Nach <i>did</i> steht die Grundform, nicht die Vergangenheitsform — „did … reinforce“, nicht „did … reinforced“.', example: 'I<b>’d rather</b> the study <b>took</b> each person’s starting point into account. · <b>Not only did</b> the system <b>reinforce</b> inequality, <b>but</b> it <b>also</b> concealed it.' },
            { title: '<i>data</i> ist unzählbar (kein „datas“, Verb im Plural) · <i>more than</i> (nicht <i>more as</i>) · <u>-ing</u>-Adjektiv für die Ursache, <u>-ed</u> für die Person, die es erlebt', body: 'Drei Fehler aus dem Schreibblock der letzten Tage direkt im Drill üben, bevor sie im freien Text wieder auftauchen.', example: 'The <b>data show</b> that starting position determines success <b>more than</b> effort does. · <b>Frustrating</b> inequality produces <b>frustrated</b> citizens.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd12i1',  prompt: 'Reiche Familien sollen angeblich den Zugang zu guten Schulen begünstigen.',                        key: 'is thought to',          solution: 'Wealthy families are thought to favour access to good schools.' },
            { id: 'd12i2',  prompt: 'Es ist bekannt, dass das System die Ungleichheit über Generationen hinweg verstärkt hat.',           key: 'is known to have',       solution: 'The system is known to have reinforced inequality across generations.' },
            { id: 'd12i3',  prompt: 'Die Regierung kürzte die Förderung unter dem Vorwand, die Ausgaben zu senken.',                     key: 'under the pretext of',   solution: 'The government cut the funding under the pretext of reducing spending.' },
            { id: 'd12i4',  prompt: 'Viele Wähler waren von dem plötzlichen Kurswechsel völlig überrumpelt.',                            key: 'taken aback by',         solution: 'Many voters were completely taken aback by the sudden change of course.' },
            { id: 'd12i5',  prompt: 'So seltsam es klingen mag, ein ererbtes System verschont wenigstens die Erfolglosen vor Selbstvorwürfen.', key: 'strange as it may seem', solution: 'Strange as it may seem, a hereditary system at least spares the unsuccessful from self-blame.' },
            { id: 'd12i6',  prompt: 'Ich würde es vorziehen, wenn die Studie den Ausgangspunkt jedes Einzelnen berücksichtigte.',        key: 'would rather + past',    solution: 'I’d rather the study took each person’s starting point into account.' },
            { id: 'd12i7',  prompt: 'Nicht nur verstärkte das System die Ungleichheit, es verschleierte sie auch.',                      key: 'Not only … but',         solution: 'Not only did the system reinforce inequality, but it also concealed it.' },
            { id: 'd12i8',  prompt: 'Die Daten zeigen, dass der Ausgangspunkt den Erfolg stärker bestimmt als die Anstrengung.',         key: 'data + Plural',          solution: 'The data show that starting position determines success more than effort does.' },
            { id: 'd12i9',  prompt: 'Erfolgreiche Menschen vertrauen der eigenen Leistung mehr als dem Zufall.',                         key: 'more than',              solution: 'Successful people trust their own achievement more than chance.' },
            { id: 'd12i10', prompt: 'Frustrierende Ungleichheit erzeugt frustrierte Bürger.',                                            key: '-ing-Adjektiv',         solution: 'Frustrating inequality produces frustrated citizens.' }
          ]
        },
        {
          id: 'd12-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Is meritocracy — the idea that success should depend only on talent and effort — a fair basis for organising society, or is it a myth that conceals unequal starting points?',
          ruleTitle: 'Neuer Themenwortschatz: meritocracy, privilege, social mobility, inequality, entitlement.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. Tag 11 ist nicht ausgewertet — ob die Gegenposition dort aufgegriffen wurde, ist unbekannt. Heute erneut bewusst mit „That said, …“ oder „One could object that …“ in den zweiten Durchgang einsteigen, bevor die eigene Position weitergeführt wird. Abbrüche mit „or rather / what I mean is” reparieren statt neu anfangen.',
          phrases: [
            'meritocracy · privilege · social mobility · inequality · entitlement',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden, mit einer vorgegebenen Gegenposition, auf die du reagieren musst: „Some would argue that meritocracy, whatever its flaws, still gives people far more control over their lives than any hereditary system ever did — how would you respond?“ Beginne den zweiten Durchgang ausdrücklich mit einer Reaktion auf genau diesen Satz, bevor du weiterredest. Dazu weiterhin: mindestens zwei Themenwörter, mindestens ein Hedge-Wort, unter fünf Füllwörtern.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd12-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Weiterhin Nutzerpriorität: kein inhaltstragendes Wort im Fließtext zweimal · Erster Satz: eigene These, keine zitierte Aufgabenstellung — an Tag 10 der bisher deutlichste Rückfall, Tag 11 ohne Auswertung · Grad der Zustimmung seit drei Schreibtagen ohne klares Maß · Konzession vor dem Gegenargument · datas/more as/the looser weiterhin vermeiden',
          prompt: '“Because success under meritocracy is earned rather than inherited, it is inherently fairer than any alternative.” To what extent do you agree?',
          min: 200, max: 250,
          checklist: [
            'Weiterhin Pflicht bei jedem Schreibblock: kein inhaltstragendes Wort (Nomen, Verb, Adjektiv, Adverb) im ganzen Text zweimal verwenden — für Wiederholungen ein Synonym, eine Umschreibung, ein Pronomen oder einen Oberbegriff nutzen. Funktionswörter (the, a, is, and …) zählen nicht. Vor dem Abgeben den Text noch einmal gezielt nach Wiederholungen absuchen.',
            'Erster Satz: deine These in eigenen Worten. Die Aufgabenstellung darf nicht zitiert werden, auch nicht in Anführungszeichen.',
            '„To what extent“ verlangt ein Maß (largely · only in part · rarely) — das fehlt seit drei Schreibtagen komplett. Heute im ersten oder zweiten Satz ein klares Maß nennen und bis zum Schluss durchhalten.',
            'Eine echte Konzession vor dem Gegenargument („It is true that … / Admittedly, …“), erst danach die eigene Position verteidigen.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '200–250 Wörter — die Zählung läuft mit.',
            'Rechtschreibung gezielt: „data“ ist unzählbar (the data show, nicht „datas“), „more than“ nicht „more as“, „the loser“ nicht „the looser“.'
          ]
        },
        {
          id: 'd12-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Die falschen Sätze von heute Morgen neu — aus dem Kopf, nicht abgeschrieben. Repair stand zuletzt bei neun ausgelassenen Tagen in Folge (Stand Tag 10) — ob Tag 11 das fortsetzt, ist mangels Sicherung unbekannt. Heute zählt ein ehrlicher Versuch bei r1.',
          fields: [
            { id: 'r1', label: 'Falscher Drill-Satz 1 → neu, mit der Regel dahinter in drei Wörtern' },
            { id: 'r2', label: 'Falscher Drill-Satz 2 → neu, mit der Regel dahinter' },
            { id: 'r3', label: 'Falscher Drill-Satz 3 → neu, mit der Regel dahinter' },
            { id: 'r4', label: 'Die Reading-Frage, bei der du am unsichersten warst — Antwort neu, in eigenen Worten, ohne ein einziges Zitat' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd12-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (to legitimise · inherited wealth · to entrench · self-blame · hereditary system). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },
  {
    day: 13,
    date: '2026-08-13',
    phase: 2,
    focus: 'Sicherung zu Tag 11 und Tag 12 fehlt weiterhin — dieselben Grammatikziele bleiben unverändert offen (is thought to, is known to have, under the pretext of, taken aback by, strange as it may seem, would rather, Not only-Inversion) · Schreiben: lexikalische Variation und Zustimmungsgrad weiterhin hart prüfen, Aufgabenstellung nicht zitieren · neue Wortgenauigkeits-Falle: sensible ≠ sensibel',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd13-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'Whose Footprint Is It Anyway?',
          kicker: 'Text 13 · Phase 2',
          intro: 'Neue Wortgenauigkeits-Falle: ein Wort, das im Deutschen fast identisch aussieht wie „sensibel“, im Englischen aber „vernünftig, praktisch“ bedeutet — nicht „feinfühlig, empfindsam“ (das wäre sensitive). Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'The term “carbon footprint”, now so pervasive in public discourse that its origins are seldom questioned, was in fact popularised by a multinational oil corporation as part of an advertising campaign in the early 2000s — a sensible fact to bear in mind before accepting the concept at face value. By encouraging individuals to calculate and reduce their personal emissions, the campaign quietly relocated responsibility for a systemic crisis onto the shoulders of consumers, while leaving the far larger contributions of a handful of fossil fuel producers comparatively unexamined. Critics of this framing do not deny that private choices carry some weight; what they dispute is the implicit suggestion that aggregated individual restraint could ever substitute for binding regulation, carbon pricing, or the phasing-out of fossil infrastructure.',
            'Defenders of the personal-responsibility narrative counter that political change is itself downstream of public opinion, and that a population unwilling to alter its own habits is unlikely to sustain the will required for structural reform. Both camps, however, converge on a point rarely voiced explicitly: focusing exclusively on either level — the individual or the systemic — while dismissing the other all but guarantees inertia. Whether the term’s origins are judged cynical or merely opportunistic, its rhetorical effect has been, empirically, to narrow what is fundamentally a collective problem into a private one.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer calls the corporation’s origin story “a sensible fact to bear in mind”. What does “sensible” mean here, and what wrong meaning would a German-speaking reader get if they connected it to “sensibel”?', hint: 'Neue Wortgenauigkeits-Falle — falscher Freund: sensible heißt „vernünftig/praktisch“, nicht „empfindsam/feinfühlig“ (das wäre sensitive).' },
            { id: 'q2', text: 'Explain in your own words why critics say the concept of a “carbon footprint” relocates responsibility.' },
            { id: 'q3', text: 'Does the writer conclude that individual behaviour is entirely irrelevant to climate change? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — der Text sagt, dass das Ignorieren einer der beiden Ebenen Stillstand garantiert, nicht dass eine Ebene bedeutungslos ist.' },
            { id: 'q4', text: '“Its rhetorical effect has been to narrow what is fundamentally a collective problem into a private one.” What does this mean in practice? One sentence, in your own words.' },
            { id: 'q5', text: 'What do defenders of the personal-responsibility narrative say is the connection between private habits and political change?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd13-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Sicherung zu Tag 11 und Tag 12 fehlt weiterhin — dieselben Zielsätze bleiben offen: is thought to, is known to have, under the pretext of, taken aback by, strange as it may seem, would rather, Not only-Inversion · zusätzlich datas/more as/-ing-/-ed-Adjektiv am neuen Thema Klimaverantwortung',
          rules: [
            { title: 'Passiv der Meinung — <i>is thought to</i> + Grundform, weiterhin zweiter sauberer Tag gesucht', body: 'An Tag 9 fehlerfrei, an Tag 10 die Struktur richtig, aber mit falschem Objekt. Tag 11 und Tag 12 blieben ohne Auswertung — der Zielpunkt bleibt unverändert offen.', example: 'The industry <b>is thought to</b> favour individual blame over regulation.' },
            { title: 'Passiv der Meinung — <i>is known to have</i> + Partizip, weiterhin dritter sauberer Tag gesucht', body: 'An Tag 7 und Tag 10 sauber, an Tag 8 falsch. Noch ein sauberer Tag bis zum Erledigt-Kriterium.', example: 'The corporation <b>is known to have</b> been responsible for the original campaign.' },
            { title: '<i>under the pretext of</i>, weiterhin dritter sauberer Tag gesucht · <i>taken aback</i> <u>by</u> und <i>strange as it may seem</i>, jeweils zweiter sauberer Tag gesucht', body: 'Alle drei standen an Tag 8/9/10 zum ersten Mal richtig, Tag 11 und Tag 12 blieben ohne Auswertung — heute erneut bestätigen.', example: 'The company launched the campaign <b>under the pretext of</b> helping consumers. · Many scientists were completely <b>taken aback by</b> the term’s origin. · <b>Strange as it may seem</b>, the term originated with an oil company.' },
            { title: '<i>would rather</i> + Vergangenheitsform, weiterhin dritter sauberer Tag gesucht · Inversion — <i>Not only … but also</i>, Grundform nach <i>did</i>', body: 'An Tag 10 zwei neue Fehlervarianten in beiden Punkten. Nach <i>did</i> steht die Grundform, nicht die Vergangenheitsform — „did … distract“, nicht „did … distracted“.', example: 'I<b>’d rather</b> the government <b>regulated</b> the producers directly instead of the consumers. · <b>Not only did</b> the campaign <b>distract</b> from the producers, <b>but</b> it <b>also</b> slowed down regulation.' },
            { title: '<i>data</i> ist unzählbar (kein „datas“, Verb im Plural) · <i>more than</i> (nicht <i>more as</i>) · <u>-ing</u>-Adjektiv für die Ursache, <u>-ed</u> für die Person, die es erlebt', body: 'Drei Fehler aus dem Schreibblock der letzten Tage direkt im Drill üben, bevor sie im freien Text wieder auftauchen.', example: 'The <b>data show</b> that corporations produce <b>more</b> emissions <b>than</b> individual households. · <b>Alarming</b> statistics produce <b>alarmed</b> citizens.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd13i1',  prompt: 'Die Industrie soll angeblich individuelle Schuldzuweisung der Regulierung vorziehen.',              key: 'is thought to',          solution: 'The industry is thought to favour individual blame over regulation.' },
            { id: 'd13i2',  prompt: 'Der Konzern ist bekanntermaßen für die ursprüngliche Kampagne verantwortlich gewesen.',              key: 'is known to have',       solution: 'The corporation is known to have been responsible for the original campaign.' },
            { id: 'd13i3',  prompt: 'Das Unternehmen startete die Kampagne unter dem Vorwand, Verbrauchern zu helfen.',                    key: 'under the pretext of',   solution: 'The company launched the campaign under the pretext of helping consumers.' },
            { id: 'd13i4',  prompt: 'Viele Wissenschaftler waren von der Herkunft des Begriffs völlig überrascht.',                        key: 'taken aback by',         solution: 'Many scientists were completely taken aback by the term’s origin.' },
            { id: 'd13i5',  prompt: 'So seltsam es klingen mag, der Begriff stammt von einem Ölkonzern.',                                  key: 'strange as it may seem', solution: 'Strange as it may seem, the term originated with an oil company.' },
            { id: 'd13i6',  prompt: 'Ich würde es vorziehen, wenn die Regierung die Erzeuger direkt regulierte statt die Verbraucher.',    key: 'would rather + past',    solution: 'I’d rather the government regulated the producers directly instead of the consumers.' },
            { id: 'd13i7',  prompt: 'Nicht nur lenkte die Kampagne von den Erzeugern ab, sie verlangsamte auch die Regulierung.',          key: 'Not only … but',         solution: 'Not only did the campaign distract from the producers, but it also slowed down regulation.' },
            { id: 'd13i8',  prompt: 'Die Daten zeigen, dass Konzerne mehr Emissionen verursachen als einzelne Haushalte.',                 key: 'data + Plural',          solution: 'The data show that corporations produce more emissions than individual households.' },
            { id: 'd13i9',  prompt: 'Die Öffentlichkeit vertraut der Wissenschaft mehr als der Werbung.',                                  key: 'more than',              solution: 'The public trusts science more than advertising.' },
            { id: 'd13i10', prompt: 'Beunruhigende Statistiken erzeugen besorgte Bürger.',                                                 key: '-ing-Adjektiv',         solution: 'Alarming statistics produce alarmed citizens.' }
          ]
        },
        {
          id: 'd13-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Is it fair to focus climate action mainly on individual behaviour, such as flying less or eating less meat, or should the main responsibility lie with governments and corporations?',
          ruleTitle: 'Neuer Themenwortschatz: responsibility, regulation, footprint, systemic, complicity.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. Tag 11 und Tag 12 sind nicht ausgewertet — ob die Gegenposition dort aufgegriffen wurde, ist unbekannt. Heute erneut bewusst mit „That said, …“ oder „One could object that …“ in den zweiten Durchgang einsteigen, bevor die eigene Position weitergeführt wird. Abbrüche mit „or rather / what I mean is” reparieren statt neu anfangen.',
          phrases: [
            'responsibility · regulation · footprint · systemic · complicity',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden, mit einer vorgegebenen Gegenposition, auf die du reagieren musst: „Some would argue that without individual behavioural change, the political will for real climate policy will never materialise — how would you respond?“ Beginne den zweiten Durchgang ausdrücklich mit einer Reaktion auf genau diesen Satz, bevor du weiterredest. Dazu weiterhin: mindestens zwei Themenwörter, mindestens ein Hedge-Wort, unter fünf Füllwörtern.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd13-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Weiterhin Nutzerpriorität: kein inhaltstragendes Wort im Fließtext zweimal · Erster Satz: eigene These, keine zitierte Aufgabenstellung — an Tag 10 der bisher deutlichste Rückfall, Tag 11 und Tag 12 ohne Auswertung · Grad der Zustimmung seit mehreren Schreibtagen ohne klares Maß · Konzession vor dem Gegenargument · datas/more as/the looser weiterhin vermeiden',
          prompt: '“Because climate change is fundamentally a systemic problem, individual lifestyle choices make little real difference, and governments and corporations should bear nearly all the responsibility.” To what extent do you agree?',
          min: 200, max: 250,
          checklist: [
            'Weiterhin Pflicht bei jedem Schreibblock: kein inhaltstragendes Wort (Nomen, Verb, Adjektiv, Adverb) im ganzen Text zweimal verwenden — für Wiederholungen ein Synonym, eine Umschreibung, ein Pronomen oder einen Oberbegriff nutzen. Funktionswörter (the, a, is, and …) zählen nicht. Vor dem Abgeben den Text noch einmal gezielt nach Wiederholungen absuchen.',
            'Erster Satz: deine These in eigenen Worten. Die Aufgabenstellung darf nicht zitiert werden, auch nicht in Anführungszeichen.',
            '„To what extent“ verlangt ein Maß (largely · only in part · rarely) — das fehlt seit mehreren Schreibtagen komplett. Heute im ersten oder zweiten Satz ein klares Maß nennen und bis zum Schluss durchhalten.',
            'Eine echte Konzession vor dem Gegenargument („It is true that … / Admittedly, …“), erst danach die eigene Position verteidigen.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '200–250 Wörter — die Zählung läuft mit.',
            'Rechtschreibung gezielt: „data“ ist unzählbar (the data show, nicht „datas“), „more than“ nicht „more as“, „the loser“ nicht „the looser“.'
          ]
        },
        {
          id: 'd13-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Die falschen Sätze von heute Morgen neu — aus dem Kopf, nicht abgeschrieben. Repair stand zuletzt bei neun ausgelassenen Tagen in Folge (Stand Tag 10) — ob Tag 11 und Tag 12 das fortsetzen, ist mangels Sicherung unbekannt. Heute zählt ein ehrlicher Versuch bei r1.',
          fields: [
            { id: 'r1', label: 'Falscher Drill-Satz 1 → neu, mit der Regel dahinter in drei Wörtern' },
            { id: 'r2', label: 'Falscher Drill-Satz 2 → neu, mit der Regel dahinter' },
            { id: 'r3', label: 'Falscher Drill-Satz 3 → neu, mit der Regel dahinter' },
            { id: 'r4', label: 'Die Reading-Frage, bei der du am unsichersten warst — Antwort neu, in eigenen Worten, ohne ein einziges Zitat' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd13-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (to relocate responsibility · systemic crisis · to phase out · to converge on a point · empirically). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },
  {
    day: 14,
    date: '2026-08-14',
    phase: 2,
    focus: 'Sicherung zu Tag 11, 12 und 13 fehlt weiterhin — dieselben Grammatikziele bleiben unverändert offen (is thought to, is known to have, under the pretext of, taken aback by, strange as it may seem, would rather, Not only-Inversion) · Schreiben: lexikalische Variation und Zustimmungsgrad weiterhin hart prüfen, Aufgabenstellung nicht zitieren · neue Wortgenauigkeits-Falle: eventually ≠ eventuell',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd14-read',
          type: 'read',
          name: 'Reading',
          minutes: 12,
          title: 'The Hyphen That Would Not Disappear',
          kicker: 'Text 14 · Phase 2',
          intro: 'Neue Wortgenauigkeits-Falle: ein Wort, das im Deutschen fast identisch aussieht wie „eventuell" (möglicherweise), im Englischen aber „schließlich, mit der Zeit" bedeutet — eine Aussage über den Ausgang, keine Unsicherheit. Ziel für Text + Fragen bleibt bei 8 Minuten.',
          paragraphs: [
            'For much of the twentieth century, immigration policy across Western Europe rested on the tacit assumption that assimilation was not merely desirable but, eventually, unavoidable: that the children and grandchildren of migrants would gradually shed whatever distinguished them from the majority until no meaningful difference remained. This expectation has proved considerably less robust than its architects supposed. Longitudinal surveys conducted across several countries now indicate that so-called second-generation migrants frequently report a stronger, not weaker, sense of ethnic or religious belonging than their parents did upon arrival — a finding that straightforwardly linear models of integration struggle to accommodate.',
            'Sociologists increasingly favour the term hyphenated identity to describe this pattern: rather than replacing one affiliation with another, individuals appear to hold both simultaneously, moving between cultural registers as context demands, a practice sometimes labelled code-switching, borrowed from linguistics but now applied more broadly to behaviour and self-presentation. Critics of the assimilationist paradigm argue that its persistence in political rhetoric owes less to empirical support than to an underlying anxiety about social cohesion; defenders counter that some shared civic identity remains indispensable if a diverse society is to function at all. What both camps tend to overlook is that hyphenation itself may not be a stage on the way to somewhere else, but the destination.'
          ],
          rule: 'Auf Englisch, ganze Sätze. Höchstens drei Wörter am Stück aus dem Text. Ziel für Lesen + Fragen: 8 Minuten.',
          questions: [
            { id: 'q1', text: 'The writer says assimilation was thought not merely desirable but, “eventually, unavoidable”. What does “eventually” mean here, and what wrong meaning would a German-speaking reader get if they connected it to “eventuell”?', hint: 'Neue Wortgenauigkeits-Falle — falscher Freund: eventually heißt „schließlich/mit der Zeit", nicht „eventuell/möglicherweise" (das wäre possibly/perhaps).' },
            { id: 'q2', text: 'Explain in your own words why the writer says second-generation migrants challenge “straightforwardly linear models of integration”.' },
            { id: 'q3', text: 'Does the writer conclude that the assimilationist model of integration has been proven broadly correct? Answer yes or no, then quote the exact words that justify your answer.', hint: 'Präzisionsfalle — der Text sagt ausdrücklich, dass sich die Erwartung als „considerably less robust than its architects supposed" erwiesen hat.' },
            { id: 'q4', text: '“Hyphenation itself may not be a stage on the way to somewhere else, but the destination.” What does this mean in practice? One sentence, in your own words.' },
            { id: 'q5', text: 'What do defenders of a shared civic identity say is necessary for a diverse society to function, according to the text?' },
            { id: 'q6', text: 'Fünf Ausdrücke aus dem Text für die Vokabelbank — mit eigenem Beispielsatz, nicht mit Übersetzung.' }
          ]
        },
        {
          id: 'd14-use',
          type: 'drill',
          name: 'Use of English',
          minutes: 10,
          kicker: 'Sicherung zu Tag 11, 12 und 13 fehlt weiterhin — dieselben Zielsätze bleiben offen: is thought to, is known to have, under the pretext of, taken aback by, strange as it may seem, would rather, Not only-Inversion · zusätzlich datas/more as/-ing-/-ed-Adjektiv am neuen Thema Migration und Identität',
          rules: [
            { title: 'Passiv der Meinung — <i>is thought to</i> + Grundform, weiterhin zweiter sauberer Tag gesucht', body: 'An Tag 9 fehlerfrei, an Tag 10 die Struktur richtig, aber mit falschem Objekt. Tag 11 bis Tag 13 blieben ohne Auswertung — der Zielpunkt bleibt unverändert offen.', example: 'Second-generation migrants <b>are thought to</b> favour a hybrid identity over full assimilation.' },
            { title: 'Passiv der Meinung — <i>is known to have</i> + Partizip, weiterhin dritter sauberer Tag gesucht', body: 'An Tag 7 und Tag 10 sauber, an Tag 8 falsch. Noch ein sauberer Tag bis zum Erledigt-Kriterium.', example: 'The policy <b>is known to have</b> discouraged cultural expression in schools.' },
            { title: '<i>under the pretext of</i>, weiterhin dritter sauberer Tag gesucht · <i>taken aback</i> <u>by</u> und <i>strange as it may seem</i>, jeweils zweiter sauberer Tag gesucht', body: 'Alle drei standen an Tag 8/9/10 zum ersten Mal richtig, Tag 11 bis Tag 13 blieben ohne Auswertung — heute erneut bestätigen.', example: 'The school banned the language <b>under the pretext of</b> promoting integration. · Many teachers were completely <b>taken aback by</b> the students’ fluent code-switching. · <b>Strange as it may seem</b>, a stronger sense of heritage often emerges in the second generation, not the first.' },
            { title: '<i>would rather</i> + Vergangenheitsform, weiterhin dritter sauberer Tag gesucht · Inversion — <i>Not only … but also</i>, Grundform nach <i>did</i>', body: 'An Tag 10 zwei neue Fehlervarianten in beiden Punkten. Nach <i>did</i> steht die Grundform, nicht die Vergangenheitsform — „did … ignore", nicht „did … ignored".', example: 'I<b>’d rather</b> the curriculum <b>reflected</b> more than one cultural perspective. · <b>Not only did</b> the policy <b>ignore</b> bilingual pupils, <b>but</b> it <b>also</b> discouraged their parents.' },
            { title: '<i>data</i> ist unzählbar (kein „datas", Verb im Plural) · <i>more than</i> (nicht <i>more as</i>) · <u>-ing</u>-Adjektiv für die Ursache, <u>-ed</u> für die Person, die es erlebt', body: 'Drei Fehler aus dem Schreibblock der letzten Tage direkt im Drill üben, bevor sie im freien Text wieder auftauchen.', example: 'The <b>data suggest</b> that hyphenated identities are becoming <b>more</b> common <b>than</b> official statistics assume. · <b>Alienating</b> policies produce <b>alienated</b> communities.' }
          ],
          instruction: 'Vollständige Sätze, aus dem Kopf, ohne oben nachzusehen. Erst nach allen zehn die Lösungen aufdecken.',
          items: [
            { id: 'd14i1',  prompt: 'Migranten der zweiten Generation sollen angeblich eine hybride Identität einer vollständigen Assimilation vorziehen.', key: 'is thought to',          solution: 'Second-generation migrants are thought to favour a hybrid identity over full assimilation.' },
            { id: 'd14i2',  prompt: 'Die Politik hat bekanntermaßen den kulturellen Ausdruck in Schulen entmutigt.',                                       key: 'is known to have',       solution: 'The policy is known to have discouraged cultural expression in schools.' },
            { id: 'd14i3',  prompt: 'Die Schule verbot die Sprache unter dem Vorwand, die Integration zu fördern.',                                       key: 'under the pretext of',   solution: 'The school banned the language under the pretext of promoting integration.' },
            { id: 'd14i4',  prompt: 'Viele Lehrer waren von dem fließenden Code-Switching der Schüler völlig überrascht.',                                key: 'taken aback by',         solution: 'Many teachers were completely taken aback by the students’ fluent code-switching.' },
            { id: 'd14i5',  prompt: 'So seltsam es klingen mag, ein stärkeres Zugehörigkeitsgefühl entsteht oft erst in der zweiten Generation, nicht in der ersten.', key: 'strange as it may seem', solution: 'Strange as it may seem, a stronger sense of heritage often emerges in the second generation, not the first.' },
            { id: 'd14i6',  prompt: 'Ich würde es vorziehen, wenn der Lehrplan mehr als eine kulturelle Perspektive widerspiegelte.',                      key: 'would rather + past',    solution: 'I’d rather the curriculum reflected more than one cultural perspective.' },
            { id: 'd14i7',  prompt: 'Nicht nur ignorierte die Politik zweisprachige Schüler, sie entmutigte auch deren Eltern.',                          key: 'Not only … but',         solution: 'Not only did the policy ignore bilingual pupils, but it also discouraged their parents.' },
            { id: 'd14i8',  prompt: 'Die Daten deuten darauf hin, dass hybride Identitäten häufiger werden, nicht seltener.',                             key: 'data + Plural',          solution: 'The data suggest that hyphenated identities are becoming more common, not less.' },
            { id: 'd14i9',  prompt: 'Junge Migranten vertrauen oft der eigenen Erfahrung mehr als offiziellen Statistiken.',                              key: 'more than',              solution: 'Young migrants often trust their own experience more than official statistics.' },
            { id: 'd14i10', prompt: 'Entfremdende Politik erzeugt entfremdete Gemeinschaften.',                                                           key: '-ing-Adjektiv',         solution: 'Alienating policies produce alienated communities.' }
          ]
        },
        {
          id: 'd14-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Should societies expect immigrants to assimilate into a single national culture, or should identity be allowed to remain plural and hyphenated?',
          ruleTitle: 'Neuer Themenwortschatz: identity, assimilation, belonging, heritage, hybridity.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. Tag 11 bis Tag 13 sind nicht ausgewertet — ob die Gegenposition dort aufgegriffen wurde, ist unbekannt. Heute erneut bewusst mit „That said, …" oder „One could object that …" in den zweiten Durchgang einsteigen, bevor die eigene Position weitergeführt wird. Abbrüche mit „or rather / what I mean is” reparieren statt neu anfangen.',
          phrases: [
            'identity · assimilation · belonging · heritage · hybridity',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden, mit einer vorgegebenen Gegenposition, auf die du reagieren musst: „Some would argue that without a shared national culture, social cohesion breaks down entirely — how would you respond?“ Beginne den zweiten Durchgang ausdrücklich mit einer Reaktion auf genau diesen Satz, bevor du weiterredest. Dazu weiterhin: mindestens zwei Themenwörter, mindestens ein Hedge-Wort, unter fünf Füllwörtern.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd14-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Weiterhin Nutzerpriorität: kein inhaltstragendes Wort im Fließtext zweimal · Erster Satz: eigene These, keine zitierte Aufgabenstellung — an Tag 10 der bisher deutlichste Rückfall, Tag 11 bis Tag 13 ohne Auswertung · Grad der Zustimmung seit mehreren Schreibtagen ohne klares Maß · Konzession vor dem Gegenargument · datas/more as/the looser weiterhin vermeiden',
          prompt: '“Because a shared national culture is necessary for social cohesion, immigrants should be expected to assimilate rather than maintain a separate, hyphenated identity.” To what extent do you agree?',
          min: 200, max: 250,
          checklist: [
            'Weiterhin Pflicht bei jedem Schreibblock: kein inhaltstragendes Wort (Nomen, Verb, Adjektiv, Adverb) im ganzen Text zweimal verwenden — für Wiederholungen ein Synonym, eine Umschreibung, ein Pronomen oder einen Oberbegriff nutzen. Funktionswörter (the, a, is, and …) zählen nicht. Vor dem Abgeben den Text noch einmal gezielt nach Wiederholungen absuchen.',
            'Erster Satz: deine These in eigenen Worten. Die Aufgabenstellung darf nicht zitiert werden, auch nicht in Anführungszeichen.',
            '„To what extent“ verlangt ein Maß (largely · only in part · rarely) — das fehlt seit mehreren Schreibtagen komplett. Heute im ersten oder zweiten Satz ein klares Maß nennen und bis zum Schluss durchhalten.',
            'Eine echte Konzession vor dem Gegenargument („It is true that … / Admittedly, …“), erst danach die eigene Position verteidigen.',
            'Hedging statt Absolutheit: tend to · in most cases · arguably.',
            '200–250 Wörter — die Zählung läuft mit.',
            'Rechtschreibung gezielt: „data“ ist unzählbar (the data show, nicht „datas“), „more than“ nicht „more as“, „the loser“ nicht „the looser“.'
          ]
        },
        {
          id: 'd14-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Die falschen Sätze von heute Morgen neu — aus dem Kopf, nicht abgeschrieben. Repair stand zuletzt bei neun ausgelassenen Tagen in Folge (Stand Tag 10) — ob Tag 11 bis Tag 13 das fortsetzen, ist mangels Sicherung unbekannt. Heute zählt ein ehrlicher Versuch bei r1.',
          fields: [
            { id: 'r1', label: 'Falscher Drill-Satz 1 → neu, mit der Regel dahinter in drei Wörtern' },
            { id: 'r2', label: 'Falscher Drill-Satz 2 → neu, mit der Regel dahinter' },
            { id: 'r3', label: 'Falscher Drill-Satz 3 → neu, mit der Regel dahinter' },
            { id: 'r4', label: 'Die Reading-Frage, bei der du am unsichersten warst — Antwort neu, in eigenen Worten, ohne ein einziges Zitat' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd14-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem Morgentext aufnehmen (hyphenated identity · to shed (a distinction) · longitudinal survey · code-switching · indispensable). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  },
  {
    day: 25,
    date: '2026-08-25',
    phase: 3,
    focus: 'Rückkehr nach zehn Tagen ohne Einheit (Tag 15–24 nicht erzeugt) — offene Fehlerprofilpunkte aus der letzten Auswertung vom 18.08. unverändert: Nominalisierung, -ing/-ed-Partizip, Transferversagen (Drill richtig, Aufsatz nicht), Synonyme gestapelt statt variiert · erstmals im neuen Format aus PLAN.md (Mustertext klauen, Satzveredelung, Kollokationen) · Thema Phase 3: algorithmische Personalauswahl, weiterhin Abitur-LK-Register statt vereinfachtem Business-Englisch',
    morning: {
      label: 'Morgens',
      minutes: 30,
      blocks: [
        {
          id: 'd25-read',
          type: 'read',
          name: 'Mustertext',
          minutes: 8,
          title: 'The Algorithm That Screens You Before a Human Does',
          kicker: 'Mustertext 25 · Phase 3 — klauen, nicht Verständnis beweisen',
          intro: 'Kurzer Text, ohne Wörterbuch lesbar, ein Niveau über deinem eigenen Schreiben. Keine Verständnisfragen — gesucht sind die sechs wiederverwendbaren Gerüste, die in jedem argumentativen Text funktionieren, unabhängig vom Thema.',
          paragraphs: [
            'At first glance, the case for algorithmic hiring seems compelling. Software can screen thousands of applications in seconds, applying the same criteria to every candidate and, in principle, removing the biases that creep into a tired recruiter’s judgement. Firms that have adopted such systems report shorter hiring cycles and, in some studies, a more diverse shortlist.',
            'Yet closer scrutiny reveals a flaw few employers are willing to name. An algorithm trained on past hiring decisions does not escape bias; it merely launders it, learning to repeat whichever pattern the historical data happens to contain. The real issue lies not in the technology itself, but in the assumption that past success predicts future success in the same narrow way.',
            'A more balanced reading suggests that the truth lies somewhere between these extremes. Algorithms should narrow the field, not decide it outright — not merely because human judgement remains necessary at the margins, but because accountability for a rejected candidate cannot be outsourced to a system nobody can fully explain.'
          ],
          rule: 'Kein Nachschlagen. Ziel für Text + Aufgabe: 8 Minuten. Nachschlagen erst in der Repair-Phase am Abend.',
          questions: [
            { id: 'q1', text: 'Schreib die sechs Gerüste heraus, die du in jedem beliebigen Klausur-Essay wiederverwenden kannst — unabhängig vom Thema. Sie stecken alle im Text (z. B. der Einstieg „At first glance, the case for X seems compelling“, das Scharnier „Yet closer scrutiny reveals …“, die Ursache-statt-Symptom-Wendung, die Synthese am Ende).' },
            { id: 'q2', text: 'Wähl zwei der sechs Gerüste aus und schreib je einen eigenen Satz zu einem KOMPLETT ANDEREN Thema (z. B. Klimapolitik oder Notenbewertung an Schulen). Das ist der eigentliche Test — an Tag 18 saß dieselbe Struktur im Drill, tauchte zwanzig Minuten später im Aufsatz aber an keiner einzigen Stelle mehr auf.' }
          ]
        },
        {
          id: 'd25-use',
          type: 'drill',
          name: 'Satzveredelung & Kollokationen',
          minutes: 14,
          kicker: 'Sicherung zu Tag 15–24 fehlt komplett (keine Einheiten erzeugt) — dieselben Ziele wie in der Auswertung vom 18.08.: is thought to, under the pretext of, would rather, Not only-Inversion weiterhin offen, dazu neu Nominalisierung und -ing/-ed',
          rules: [
            { title: 'Nominalisierung vermeiden — Verb statt Verb-abgeleitetem Nomen', body: 'Deutsch bevorzugt Substantivketten (<i>die Verwendung von X ermöglicht eine Beschleunigung von Y</i>), Englisch bevorzugt Verben. Faustregel: taucht ein Nomen wie <i>usage, reduction, implementation, knowledge</i> auf, prüfen, ob das zugrunde liegende Verb selbst geht.', example: '<b>Using</b> algorithms <b>speeds up</b> how candidates are pre-selected. — nicht: The use of algorithms enables an acceleration of pre-selection.' },
            { title: '-ing vs. -ed beim Partizip', body: '-ing beschreibt, was die Sache tut oder bewirkt; -ed beschreibt, was die Person dabei fühlt. Zweiter dokumentierter Fehler nach Tag 10 und Tag 18 — heute gezielt in einem neuen Satz.', example: 'The process is <b>discouraging</b>; many applicants feel <b>discouraged</b> by it.' },
            { title: 'Synonyme variieren, nicht stapeln', body: 'Variation heißt: beim ZWEITEN Vorkommen ein anderes Wort, nicht drei Synonyme direkt nebeneinander in einem Satz (an Tag 18 „a drawback and shortcoming“ in einem Atemzug).', example: 'This raises a genuine <b>concern</b> — and, further down the text, a separate <b>objection</b> worth taking seriously (nicht: a concern, drawback and shortcoming all at once).' },
            { title: 'Acht Kollokationen für argumentative Texte', body: 'to make a compelling case for sth · to raise legitimate concerns · to strike a balance between X and Y · a sweeping change · a widely held assumption · to gain traction · to fall into the trap of doing sth · to bear the brunt of sth — dieselben acht wie an Tag 18, heute mit neuem Thema neu produziert.', example: 'Critics <b>raise legitimate concerns</b> about how the training data was collected.' }
          ],
          instruction: 'i1–i6: Satzveredelung — den vorgegebenen Satz mit dem genannten Werkzeug auf Oberstufenniveau heben. i7–i10: vier der acht Kollokationen oben, je ein eigener Satz zum Thema algorithmische Personalauswahl. Vollständige Sätze, aus dem Kopf. Erst danach die Lösungen aufdecken.',
          items: [
            { id: 'd25i1',  prompt: 'Die Verwendung von Algorithmen ermöglicht eine Beschleunigung der Vorauswahl.', key: 'Verb statt Nomen', solution: 'Using algorithms speeds up how candidates are pre-selected.' },
            { id: 'd25i2',  prompt: 'Für viele Bewerber ist der automatisierte Auswahlprozess entmutigend, weil sie sich davon entmutigt fühlen.', key: '-ing vs. -ed', solution: 'For many applicants, the automated selection process is discouraging, because they feel discouraged by it.' },
            { id: 'd25i3',  prompt: 'Der Algorithmus wird für neutral gehalten, obwohl er die historischen Vorurteile vermutlich reproduziert.', key: 'is thought to + Grundform', solution: 'The algorithm is thought to be neutral, although it probably reproduces historical bias.' },
            { id: 'd25i4',  prompt: 'Das Unternehmen lehnte den Bewerber unter dem Vorwand mangelnder Erfahrung ab.', key: 'under the pretext of', solution: 'The company rejected the applicant under the pretext of insufficient experience.' },
            { id: 'd25i5',  prompt: 'Ich würde es vorziehen, wenn ein Mensch die endgültige Entscheidung träfe.', key: 'would rather + Vergangenheit', solution: 'I’d rather a human made the final decision.' },
            { id: 'd25i6',  prompt: 'Nicht nur ignorierte der Algorithmus ungewöhnliche Lebensläufe, er benachteiligte auch ältere Bewerber.', key: 'Not only … but also + Grundform', solution: 'Not only did the algorithm ignore unconventional résumés, but it also disadvantaged older applicants.' },
            { id: 'd25i7',  prompt: 'Eigener Satz zum Thema mit „to raise legitimate concerns“.', key: 'to raise legitimate concerns', solution: 'Critics of automated hiring raise legitimate concerns about how the training data was collected.' },
            { id: 'd25i8',  prompt: 'Eigener Satz zum Thema mit „to strike a balance between X and Y“.', key: 'to strike a balance between X and Y', solution: 'Recruiters must strike a balance between efficiency and fairness.' },
            { id: 'd25i9',  prompt: 'Eigener Satz zum Thema mit „to fall into the trap of doing sth“.', key: 'to fall into the trap of doing sth', solution: 'Companies fall into the trap of assuming that a faster process is automatically a fairer one.' },
            { id: 'd25i10', prompt: 'Eigener Satz zum Thema mit „to bear the brunt of sth“.', key: 'to bear the brunt of sth', solution: 'Older applicants often bear the brunt of algorithmic filtering that favours recent graduates.' }
          ]
        },
        {
          id: 'd25-speak',
          type: 'speak',
          name: 'Speaking',
          minutes: 8,
          seconds: 90,
          prompt: 'Should companies be allowed to let AI systems make hiring decisions without human review?',
          ruleTitle: 'Themenwortschatz: bias, accountability, transparency, discretion, oversight.',
          ruleBody: 'Mindestens zwei dieser Wörter müssen tatsächlich fallen, nicht umschrieben. Reagier im zweiten Durchgang wirklich auf den vorgegebenen Einwand — an Tag 10 wurde die eigene Position stattdessen unkommentiert gewechselt, ohne auf das Gegenargument einzugehen. Abbrüche mit „or rather / what I mean is“ reparieren statt neu anfangen.',
          phrases: [
            'bias · accountability · transparency · discretion · oversight',
            'tend to · arguably · in most cases',
            'Some would say that … / One could object that …',
            'That said, …',
            'or rather … · what I mean is …'
          ],
          after: 'Zweiter Durchgang, dieselben 90 Sekunden, mit einer vorgegebenen Gegenposition, auf die du reagieren musst: „Some would argue that human interviewers are just as biased as algorithms, so removing them changes nothing — how would you respond?“ Beginne den zweiten Durchgang ausdrücklich mit einer Reaktion auf genau diesen Satz. Dazu weiterhin: mindestens zwei Themenwörter, mindestens ein Hedge-Wort, unter fünf Füllwörtern.'
        }
      ]
    },
    evening: {
      label: 'Abends',
      minutes: 30,
      blocks: [
        {
          id: 'd25-write',
          type: 'write',
          name: 'Writing',
          minutes: 15,
          kicker: 'Dasselbe Thema wie morgens, mit Absicht — der Inhalt steht schon, volle Aufmerksamkeit auf die Sprache · Pflicht: mindestens zwei Gerüste aus dem Mustertext und zwei Kollokationen aus dem Drill tatsächlich einbauen (Gegenmittel gegen das Transferversagen von Tag 18) · kein inhaltstragendes Wort zweimal · Nominalisierung und gesprochenes Register vermeiden',
          prompt: '“Because algorithmic hiring removes human bias from recruitment, companies should let AI systems make hiring decisions without human review.” To what extent do you agree?',
          min: 200, max: 250,
          checklist: [
            'Mindestens drei Gerüste aus dem Mustertext und zwei Kollokationen aus dem Drill eingebaut — nicht nur im Kopf behalten, tatsächlich in den Text schreiben.',
            'Kein inhaltstragendes Wort (Nomen, Verb, Adjektiv, Adverb) im ganzen Text zweimal — Synonym, Umschreibung, Pro-Form oder Oberbegriff statt Wiederholung. Beim zweiten Vorkommen wechseln, nicht mehrere Synonyme auf einmal stapeln.',
            'Erster Satz: deine These in eigenen Worten. Die Aufgabenstellung wird nicht zitiert, auch nicht in Anführungszeichen — an Tag 10 der bisher deutlichste Rückfall genau hier.',
            'Der Grad der Zustimmung steht im ersten oder zweiten Satz (largely · only in part · to a limited extent) und bleibt bis zum Schluss konsistent.',
            'Eine echte Konzession, bevor du deine Position verteidigst (Admittedly, … / It is true that …).',
            'Verb statt Nomen, wo möglich (keine Substantivketten wie „the reduction of the objectivity of the evaluation“).',
            'Kein gesprochenes Register wie „or something like this“ — das kostet im NRW-Raster Ausdrucksvermögen.',
            'Rechtschreibung: data ist unzählbar (the data suggest, nie „datas“), more than nie more as, the loser nie the looser.'
          ]
        },
        {
          id: 'd25-repair',
          type: 'repair',
          name: 'Repair',
          minutes: 10,
          instruction: 'Erst jetzt darfst du nachschlagen. Ohne aktuelle Sicherung stützt sich Repair heute auf die am längsten offenen Punkte aus dem Fehlerprofil statt auf einen konkreten Fehler von gestern — Repair stand zuletzt (Tag 14) bei neun ausgelassenen Tagen in Folge. Ein ehrlicher Versuch bei r1 reicht.',
          fields: [
            { id: 'r1', label: 'Schreib den would-rather-Satz aus dem Drill (d25i5) aus dem Kopf neu, ohne hinzusehen — mit der Regel in drei Wörtern dahinter' },
            { id: 'r2', label: 'Schreib den Not-only-Satz aus dem Drill (d25i6) aus dem Kopf neu, ohne hinzusehen' },
            { id: 'r3', label: 'Ein Satz aus deinem heutigen Writing, in dem du ein Nomen durch ein Verb ersetzt — die Vorher- und die Nachher-Version' },
            { id: 'r4', label: 'Die Reading-Frage (q2, Transfer auf ein anderes Thema), bei der du am unsichersten warst — Antwort neu, in eigenen Worten' },
            { id: 'r5', label: 'Je zweimal korrekt: different · development · business · statement · academic · generally' }
          ]
        },
        {
          id: 'd25-vocab',
          type: 'vocab',
          name: 'Vokabelbank',
          minutes: 5,
          instruction: 'Fünf Ausdrücke aus dem heutigen Mustertext oder Drill aufnehmen (to launder bias · to outsource accountability · at the margins · to narrow the field · discretion). Drei alte in neuen Sätzen wiederverwenden — die Bank ist erst dann etwas wert, wenn du aus ihr sprichst.'
        }
      ]
    }
  }
];
