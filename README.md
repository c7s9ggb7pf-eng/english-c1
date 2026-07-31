# English C1 — Trainings-App

**Live: https://c7s9ggb7pf-eng.github.io/english-c1/**

PWA für iPhone und MacBook. Kein Build-Schritt, keine Abhängigkeiten, kein Konto, kein Server —
der gesamte Fortschritt liegt lokal im Gerät (`localStorage`).

## Veröffentlichen

GitHub Pages liefert direkt aus dem Zweig `master`, Wurzelverzeichnis. Ein `git push`
veröffentlicht die neue Fassung nach etwa einer Minute.

```bash
git add -A && git commit -m "Tag N ergänzt" && git push
```

Das Netlify-Projekt `english-c1.netlify.app` ist angelegt, aber gesperrt, bis das
Credit-Kontingent am 11.08.2026 zurückgesetzt wird. Danach alternativ:
`node tools/build.js && netlify deploy --prod --dir=dist`

## Lokal starten

```bash
node server.js          # http://localhost:4173
```

Ein Server ist nötig, weil ES-Module und Service Worker unter `file://` nicht laufen.

## Installieren

- **iPhone:** URL in Safari öffnen → Teilen → „Zum Home-Bildschirm“
- **Mac:** URL in Safari öffnen → Ablage → „Zum Dock hinzufügen“

Danach läuft die App im Vollbild mit eigenem Icon und funktioniert offline.

## Erinnerungen

Unter „Mehr“ Uhrzeiten setzen und **Kalendertermine erzeugen**. Die `.ics`-Datei legt zwei täglich
wiederkehrende Termine mit Alarm an, die bis zum 01.09.2026 laufen und beim Antippen die App öffnen.
Das ist bewusst der Kalenderweg statt Web-Push: Er funktioniert auf iPhone und Mac zuverlässig,
auch wenn die App geschlossen ist, und braucht keinen Push-Server.

## Neue Tage ergänzen

Alles Inhaltliche steht in `content.js`. Ein neuer Tag ist ein weiterer Eintrag im Array `DAYS`:

```js
{
  day: 2, date: '2026-08-02', phase: 1,
  focus: '…',
  morning: { label: 'Morgens', minutes: 30, blocks: [ … ] },
  evening: { label: 'Abends',  minutes: 30, blocks: [ … ] }
}
```

Die App wählt den Tag über das Datum; liegt für heute nichts vor, zeigt sie den letzten
verfügbaren Tag.

### Blocktypen

| Typ | Zweck | Pflichtfelder |
|---|---|---|
| `read`   | Lesetext mit Fragen        | `title`, `paragraphs[]`, `rule`, `questions[]` |
| `drill`  | Regeln + Übungssätze       | `rules[]`, `instruction`, `items[]` (mit `solution`) |
| `speak`  | Monolog mit Aufnahme       | `prompt`, `ruleTitle`, `ruleBody`, `phrases[]`, `after`, `seconds` |
| `write`  | Schreibaufgabe mit Zählung | `prompt`, `min`, `max`, `checklist[]` |
| `repair` | Fehlerkorrektur            | `instruction`, `fields[]` |
| `vocab`  | Vokabelbank-Anbindung      | `instruction` |

Jeder Block braucht `id`, `type`, `name`, `minutes`. `minutes` steuert den Countdown oben.
In `rules[].example` und `rules[].body` ist HTML erlaubt (autorierter Inhalt); alles andere
wird escaped.

## Icons neu erzeugen

```bash
node tools/make-icons.js
```

Schreibt die vier PNGs nach `icons/`. Kein externes Modul nötig — der PNG-Encoder steckt im Skript.

## Dateien

```
index.html              Gerüst: Zeitleiste, Kopfzeile, Reiterleiste
style.css               Design „Verlag“, hell/dunkel über CSS-Variablen
app.js                  Zustand, Router, Timer, Ansichten, ICS-Export
content.js              Plan, Einstufung, Fehlerprofil, Tageseinheiten
sw.js                   Service Worker, Netz zuerst mit Cache-Rückfall
manifest.webmanifest    Installierbarkeit
server.js               Statischer Server für die Entwicklung
tools/make-icons.js     Icon-Generator
```

## Daten sichern

„Mehr“ → **Alles als Datei sichern** schreibt den kompletten Zustand als JSON. Vor dem Löschen
von Browserdaten sinnvoll — sonst ist der Fortschritt weg.
