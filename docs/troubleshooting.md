# Troubleshooting

Um sich bei Problemen auf die richtigen Ansätze zu konzentrieren, sollte man sich erst einmal ein Grundverständnis von dem vorhandenen System zulegen. Man sollte so viele Informationen über die Quelle, den Signalweg sowie den Endgeräten wie möglich sammeln, wodurch man die potentiellen Fehler deutlich besser abschätzen kann.

Wenn bei einer Veranstaltung die Technik streikt, kann das schnell für Frust sorgen. Doch mit der richtigen Herangehensweise lassen sich viele Probleme schnell und effektiv beheben.

Fehlersuche in der Veranstaltungstechnik erfordert Geduld, eine systematische Herangehensweise und das richtige Werkzeug. Vor allem die Lichttechnik ist anfällig für Probleme, die durch falsche Adressen, Modi oder defekte Kabel verursacht werden.

Tipp: Teste immer das gesamte System am Boden, bevor es in die Traverse geht. Einmal korrekt adressiert und geprüft, lassen sich viele Probleme von vornherein vermeiden.
Wenn ein Problem nicht direkt gelöst werden kann, lässt sich die fehlerhafte Komponente einfach aus dem System entfernen, um größere Schäden oder Ausfälle während der Show zu verhindern.


## Fehlersuche in der Lichttechnik

Probleme in der Lichttechnik lassen sich in zwei Kategorien einteilen:

1. **Nichts funktioniert**: Du schaltest das System ein, aber es tut sich nichts.
2. **Fehlerhafte Funktion**: Licht flackert, Farben stimmen nicht, oder Bewegungslichter machen sich selbstständig.

### Komponenten des Lichtsystems

Jedes Lichtsystem besteht aus drei Hauptkomponenten:

- **Signalquelle**: Zum Beispiel ein Lichtpult, Laptop mit Software oder ein Interface.
- **Kabel**: Die Verbindungselemente zwischen den Komponenten.
- **Lampen**: Scheinwerfer, LED-Leuchten oder Moving Lights.

Probleme können an jeder dieser Stellen auftreten. Eine strukturierte Fehlersuche hilft, die Ursache schnell zu finden.


### Signalquelle überprüfen

#### Häufige Fehlerquellen

- **Softwareprobleme**: Ist die Software richtig eingerichtet? Sind die Treiber installiert?
- **Einstellungen am Pult**: Prüfe, ob Master-Fader oben ist, der Blackout-Modus deaktiviert ist und die Fadezeit korrekt eingestellt ist.
- **Signalweiterleitung**: Teste, ob die Signalquelle überhaupt Daten sendet (z. B. mit einem DMX-Tester).

#### Vorgehen

1. Schließe eine einfache Lampe oder einen Dimmer direkt an die Signalquelle an, um die Funktion zu überprüfen.
2. Nutze einen DMX-Tester, um sicherzustellen, dass die Daten korrekt gesendet werden.
3. Überprüfe die Verbindung zwischen Signalquelle und nachfolgender Komponente.


### Verkabelung und DMX-Kette

#### Häufige Fehlerquellen

- **Defekte Kabel**: Wackelkontakte oder defekte DMX-Kabel können Signale in der Kette stören.
- **Fehlerhafte Verkabelung**: Ein falsches oder nicht angeschlossenes Kabel kann die gesamte DMX-Kette beeinflussen.

#### Vorgehen

1. **Systematisch eingrenzen**: Teile die DMX-Kette in Abschnitte und überprüfe jeden Teil einzeln.
2. **Testleitungen einsetzen**: Schließe ein Ersatzkabel an, um ein defektes Kabel auszuschließen.
3. **Kabeltester verwenden**: Teste jedes Kabel auf Durchgang und Signalqualität.


### Lampen und Mode-Fehler

#### Probleme an einzelnen Lampen

- **Falsche DMX-Adresse**: Ist die Lampe korrekt adressiert?
- **Modusfehler**: Ist der richtige DMX-Modus gewählt?
- **Autoprogramme oder Master-Modus**: Einzelne Lampen im Master- oder Autoprogramm können ungewollte Signale an die gesamte DMX-Kette senden.

#### Vorgehen

1. **Einzelne Lampe testen**: Entferne die Lampe aus der Kette und prüfe, ob der Fehler weiterhin auftritt.
2. **Master-Slave-Probleme beheben**: Wenn eine Lampe im Master-Modus ist, kann sie das Verhalten aller anderen Lampen beeinflussen. Stelle sicher, dass alle Lampen im Slave- oder DMX-Modus arbeiten.
3. **Adressen prüfen**: Wenn beispielsweise eine Lampe bei grün rot zeigt, könnte die Startadresse falsch eingestellt sein. Stelle sicher, dass alle Lampen den korrekten Bereich abdecken.
4. **Modusprobleme erkennen**: Eine Lampe im falschen Modus (z. B. 6-Kanal statt 3-Kanal) kann bei identischen Einstellungen anders reagieren.

### Vorgehen bei chaotischen Fehlern

#### Ursachen

- **Defekte Lampen oder Kabel**: Flackern oder chaotisches Verhalten deutet oft auf Hardware-Probleme hin.
- **Falsche Einstellungen**: Ein inkorrekter Modus oder Master-Einstellungen können Störungen im gesamten System verursachen.

#### Vorgehen

1. **DMX-Verbindungen trennen**: Trenne abschnittsweise Lampen von der Kette, um die Fehlerquelle einzugrenzen.
2. **Defekte Lampen identifizieren**: Hängen mehrere Lampen eines Typs zusammen, überprüfe, ob eine davon Signale ins System einspielt.
3. **Vor dem Aufbau testen**: Lampen sollten immer am Boden adressiert und getestet werden, bevor sie in die Traverse gehängt werden.


## Fehlersuche in der Tontechnik

Auch im Bereich Ton kann es zu Problemen kommen, sei es ein komplettes Ausbleiben des Tons oder fehlerhafte Klänge. Die Herangehensweise ist ähnlich wie bei der Lichttechnik.

### Komponenten prüfen

- **Signalquelle**: Funktioniert das Mischpult oder der Player korrekt?
- **Kabel**: Sind alle Verbindungen in Ordnung?
- **Lautsprecher**: Sind sie richtig angeschlossen und betriebsbereit?

#### Vorgehen

1. **Signalquelle testen**: Schließe ein anderes Wiedergabegerät an, um die Fehlerquelle einzugrenzen.
2. **Kabel prüfen**: Teste jedes Kabel einzeln und ersetze es bei Bedarf.
3. **Lautsprecher checken**: Kontrolliere, ob die Lautsprecher funktionieren, indem du sie an eine andere Quelle anschließt.


## Stromprobleme beheben

Stromprobleme treten oft in Form von ausgelösten Sicherungen oder einer fehlenden Stromversorgung auf.

#### Typische Ursachen

- Überlastung der Stromkreise.
- Defekte Kabel oder Stecker.
- Nicht eingesteckte Geräte.

#### Vorgehen

1. **Stromversorgung prüfen**: Sind alle Stecker eingesteckt? Gibt es Spannung an den Steckdosen?
2. **Sicherungen kontrollieren**: Welche Sicherung ist ausgelöst, und warum? Verteile die Last auf mehrere Kreise.
3. **Geräte einzeln testen**: Schließe Geräte nacheinander an, um den Fehler zu finden.

