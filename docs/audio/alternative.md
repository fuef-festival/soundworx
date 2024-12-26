# Reaper: Preisgünstige Alternative zu Ableton für MIDI-Steuerung in Lightkey

Wenn du die Lichtsteuerungssoftware [Lightkey](https://lightkeyapp.com/de) mit MIDI-Noten steuern möchtest, brauchst du eine geeignete Software, die MIDI-Daten senden kann. **Reaper** ist hierbei eine Alternative zu Ableton Live. Mit einer Lizenz ab etwa 60 Euro ist Reaper wesentlich kostengünstiger. Du kannst die Software 60 Tage lang kostenlos testen.

In diesem Artikel erklären wir dir, wie du Reaper einrichtest, um MIDI-Daten an Lightkey zu senden, und wie du dabei unsere bestehende Anleitung für Ableton nutzen kannst.

## Was ist Reaper?

Reaper ist eine sogenannte DAW (Digital Audio Workstation), die sich hervorragend für die Bearbeitung von Audio- und MIDI-Daten eignet. Es ist leichtgewichtig, schnell und lässt sich an nahezu alle Bedürfnisse anpassen.

## MIDI von Reaper zu Lightkey senden: Schritt-für-Schritt-Anleitung

### 1. **Reaper installieren**

Lade Reaper von der [offiziellen Website](https://www.reaper.fm/) herunter und installiere es.


### 2. **Ein MIDI-Projekt erstellen**

1. **Neues Projekt starten**: Öffne Reaper und erstelle ein neues Projekt über das Menü `File > New Project`.
2. **MIDI-Spur hinzufügen**:
  - Klicke mit der rechten Maustaste im leeren Bereich des Projektfensters und wähle **Insert New Track**.
  - Richte diese Spur für MIDI ein, indem du im Spurfenster rechts ein MIDI-Ausgangsgerät wählst.
3. **MIDI-Noten einzeichnen**:
  - Doppelklicke auf die neue Spur, um den MIDI-Editor zu öffnen.
  - Zeichne die gewünschten MIDI-Noten, die in Lightkey Aktionen auslösen sollen.

### 3. **MIDI-Ausgang einrichten**

1. **Einstellungen öffnen**:
   Gehe zu den Reaper-Einstellungen über `Options > Preferences` und wähle den Bereich **MIDI Devices** aus.

2. **MIDI-Interface aktivieren**:
   - Aktiviere das MIDI-Interface, mit dem du Reaper und Lightkey verbinden möchtest.
   - Wenn du ein virtuelles MIDI-Interface wie den [IAC Driver](https://support.apple.com/en-us/HT201840) verwendest (für macOS), stelle sicher, dass es hier sichtbar und aktiviert ist.

### 4. **Lightkey einrichten**

Die Einrichtung von MIDI in Lightkey funktioniert mit Reaper genauso wie mit Ableton Live. Folge einfach der offiziellen Anleitung für Ableton, um Lightkey für den Empfang von MIDI-Daten zu konfigurieren:

### 5. **Verbindung testen**

- Starte die Wiedergabe in Reaper.
- Überprüfe in Lightkey, ob die MIDI-Daten ankommen und die Lichtszenen ausgelöst werden.
- Falls es nicht funktioniert, überprüfe die MIDI-Einstellungen in Reaper und Lightkey.
