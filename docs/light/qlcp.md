# Die Lichtsteuerungssoftware QLC+

## Einleitung

Das Projekt SoundworX arbeitet hauptsächlich mit der Lichtsteuerungssoftware **Lightkey**, da diese intuitiv und einfach zu bedienen ist. Es gibt jedoch auch freie und quelloffene Alternativen wie [**QLC+**](https://www.qlcplus.org/). Diese Open-Source-Software ist kostenlos und funktioniert auf allen Betriebssystemen (Windows, macOS und Linux).

QLC+ eignet sich vor allem für kleine bis mittlere Lichtprojekte und wird von einer engagierten Community weiterentwickelt. Allerdings haben wir die Erfahrung gemacht, dass die Bedienung oft etwas umständlich ist. In komplexen Live-Situationen kann QLC+ daher an seine Grenzen stoßen.

QLC+ bietet viele Möglichkeiten, ist aber manchmal etwas komplex in der Bedienung. Mit dieser Anleitung solltest du die Grundfunktionen verstehen und eine einfache Lichtsteuerung einrichten können. Für tiefergehende Fragen bietet die [offizielle Dokumentation von QLC+](https://www.qlcplus.org/documentation.html) und das [Benutzerforum](https://www.qlcplus.org/forum/) hilfreiche Informationen.


## Was ist QLC+?

QLC+ steht für **„Q Light Controller Plus“** und ist eine Software zur Steuerung von Lichtsystemen. Mit QLC+ kannst du Lichtgeräte (sogenannte **Fixtures**) wie Scheinwerfer, Moving Heads oder LED-Bars steuern. Die Software ermöglicht es, Lichtstimmungen zu erstellen, Shows zu programmieren und sogar MIDI-Controller oder andere Eingabegeräte zu verwenden.

Die Oberfläche von QLC+ ist modular aufgebaut, was bedeutet, dass verschiedene Funktionen in separaten Ansichten zugänglich sind.


## Aufbau der Benutzeroberfläche

Die Benutzeroberfläche von QLC+ ist in mehrere **Ansichten** unterteilt. Du findest diese Ansichten oben in der Menüleiste. Die wichtigsten Bereiche sind:

- **Fixture Definition**: Hier legst du deine Lichtgeräte an.
- **Functions**: Hier kannst du Lichtstimmungen, Effekte oder Szenen programmieren.
- **Virtual Console**: Hier erstellst du eine benutzerdefinierte Steueroberfläche, z. B. mit virtuellen Fadern.
- **Simple Desk**: Eine manuelle Steuerung für deine Geräte.
- **Inputs/Outputs**: Hier kannst du externe Geräte wie MIDI-Controller und den DMX-Output einrichten.


## Neue Fixtures anlegen

Ein **Fixture** ist ein Lichtgerät, das du mit QLC+ steuern möchtest. Um ein neues Fixture anzulegen, folge diesen Schritten:

1. **Fixture Manager öffnen**: Klicke unten in der Menüleiste auf „Fixtures“.
2. **Fixture hinzufügen**: Drücke auf den Button „Add Fixture...“ (grünes Plus).
3. **Hersteller und Modell auswählen**:
  - Wähle den Hersteller deines Lichtgeräts aus der Liste aus.
  - Wähle das genaue Modell aus. Falls dein Gerät nicht in der Liste ist, musst du ein neues Fixture-Template erstellen. Dafür gibt es eine spezielle Funktion namens „Fixture Editor“.
4. **DMX-Adresse eingeben**: Gib die DMX-Adresse des Geräts ein, welche du vorher am Fixture selbst eingestellt hast.
5. **Hinzufügen**: Klicke auf „OK“, um das Fixture hinzuzufügen.

Das neue Fixture erscheint nun in der Übersicht und kann in den anderen Ansichten gesteuert werden.


## Simple Desk

Die **Simple Desk**-Ansicht ist eine einfache, manuelle Steueroberfläche. Sie eignet sich, um deine Geräte direkt zu testen:

1. Öffne die **Simple Desk**-Ansicht in der Menüleiste unten.
2. Du siehst mehrere Fader (Schieberegler). Jeder Fader steuert einen DMX-Kanal.
3. Bewege die Fader nach oben oder unten, um die entsprechenden Funktionen deiner Geräte zu steuern (z. B. Helligkeit oder Farben).

Mit Simple Desk kannst du schnell überprüfen, ob deine Geräte richtig angeschlossen sind und auf Steuerbefehle reagieren.


## Funktionen (Functions)

In der **Functions**-Ansicht programmierst du Lichtstimmungen, die du später wieder abrufen kannst. Eine Lichtstimmung wird in QLC+ als „Szene“ bezeichnet. So legst du eine einfache Szene an:

1. **Functions-Ansicht öffnen**: Klicke unten auf „Functions“.
2. **Neue Szene erstellen**:
  - Drücke auf „Add Scene...“, Button in der Toolbar, welcher aus vier farbigen Quadraten besteht.
  - Gib deiner Szene einen Namen, z. B. „Blaues Licht“.
3. **Kanäle einstellen**:
  - Wähle das Fixture aus, das du steuern möchtest. Klicke hierfür auf das grüne Plus links im Szenendialog.
  - Ist das Fixture hinzugefügt, erscheint eine neue Registerkarte im Szenendialog. Klicke diese an.
  - Aktviere (mit der Checkbox oben) und bewege die Fader, um die gewünschten Werte einzustellen (z. B. Helligkeit oder Farbe).


## Virtuelle Konsole

Die **Virtual Console** ist eine benutzerdefinierte Steueroberfläche. Hier kannst du Fader, Buttons oder andere Bedienelemente erstellen, um deine Funktionen (z. B. Szenen) zu steuern.

### Einen Fader erstellen und eine Szene zuweisen

1. **Virtual Console öffnen**: Klicke unten auf „Virtual Console“.
2. **Neuen Fader hinzufügen**:
  - Klicke auf den Button, welcher ein einzelner Fader abbildet.
  - Ziehe den Fader an die gewünschte Stelle auf der Oberfläche. Du kannst ihn in seiner Größe frei skalieren.
3. **Fader konfigurieren**:
  - Rechtsklick auf den Fader → „Widget Properties“.
  - Öffne die Registerkarte „Playback“.
  - Darin klicke auf den Button mit dem grünen Hacken und wähle deine Szene aus. Bestätige deine Wahl mit „OK“.
  - Klicke auf „OK“, um die Einstellungen zu speichern.

Jetzt kannst du die Szene direkt über den Fader aktivieren.


## MIDI-Controller einrichten

Wenn du einen **MIDI-Controller** besitzt, kannst du dessen Tasten oder Regler verwenden, um deine virtuelle Konsole zu steuern. So richtest du ihn ein:

1. Verbinde dein MIDI-Controller mit deinem Computer.
2. **MIDI als Eingabe aktivieren**:
  - Öffne die Ansicht „Inputs/Outputs“.
  - Suche in der Liste nach deinem MIDI Controller und setzte bei deinem Controller die Input Checkbox.
3. **MIDI-Signal zuweisen**:
  - Gehe zurück zur **Virtual Console**.
  - Rechtsklick auf den Fader → „Widget Properties“.
  - Klicke auf „Auto Detect“ und wähle deinen MIDI-Controller aus.
  - Bewege den Regler oder drücke die Taste auf deinem Controller, die du zuweisen möchtest.
  - QLC+ erkennt das Signal und speichert die Zuordnung automatisch.

Jetzt kannst du den Fader mit deinem MIDI-Controller steuern.

