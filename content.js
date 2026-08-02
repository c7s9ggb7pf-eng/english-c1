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
  }
];
