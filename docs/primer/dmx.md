# DMX

DMX (Digital Multiplex) ist ein Standardprotokoll zur Steuerung von Lichteffekten. Es wird vor allem in der Bühnentechnik, bei Konzerten, in Theatern und Clubs verwendet. Mit DMX können verschiedene Lichtgeräte wie Scheinwerfer, Farbwechsler oder bewegliche Lichter (sogenannte „Moving Heads“) gesteuert werden.

DMX-Geräte werden in einer Kette verbunden, die man auch Daisy-Chain nennt: Das Steuersignal geht vom Controller durch jedes Gerät weiter zum nächsten. Dafür werden in der Praxis meist normale 3-polige XLR-Mikrofonkabel verwendet, obwohl eigentlich spezielle 5-polige DMX-Kabel vorgesehen sind. Über ein DMX-Universum können bis zu 512 Kanäle gesteuert werden, wobei jeder Kanal einen Wert von 0 bis 255 annimmt, um Funktionen wie Helligkeit, Farbe oder Bewegung zu regeln. Es gibt also ein einfaches Grundprinzip: **Ein Kanal steuert eine Funktion.**

Die Technologie hat sich als robustes und zuverlässiges Protokoll erwiesen und ist deshalb auch heute noch der Standard bei der Steuerung von Licht im Veranstaltungsbereich.

## Hintergrund

Früher, als es nur herkömmliche Bühnenbeleuchtung gab, wurden Scheinwerfer direkt über Dimmer gesteuert. Diese Dimmer regelten die Stromzufuhr und damit die Helligkeit der Lampen. Jede Lampe musste einzeln mit einem eigenen Kabel angesteuert werden, was kompliziert und unübersichtlich war.

In den 1980er Jahren wurde DMX entwickelt, um diese Steuerung zu vereinfachen. DMX ermöglichte es, viele Geräte über ein einziges Steuerkabel zu verbinden und zentral zu steuern. Das Alter und die Einfachheit des Protokolls führt heute zu einer Reihe an Herausforderungen, auf welche weiter unten eingegangen wird.


## Verkabelung

### Verkabelungsstruktur

DMX-Geräte werden in einer sogenannten Daisy-Chain-Topologie verbunden. Das bedeutet, dass die Geräte wie eine Kette nacheinander verbunden werden. Der Controller, also das Steuergerät, sendet das Signal zunächst an das erste Lichtgerät. Von dort wird das Signal weitergeleitet zum nächsten Gerät und so weiter, bis alle Geräte miteinander verbunden sind.

Der Begriff „Daisy Chain“ stammt aus der Informatik (auf Deutsch „Gänseblümchen-Kette“) und kommt daher, dass diese Art der Verkabelung optisch an das Aneinanderreihen von Blüten in einer Kette erinnert. Es gibt keinen „Zentralpunkt“, von dem Kabel zu jedem Gerät gehen, sondern die Geräte sind linear miteinander verbunden. Das letzte Gerät in der Kette muss mit einem DMX-Terminator abgeschlossen werden, einem Stecker, der Signalstörungen verhindert.

Diese Struktur macht DMX einfach und effizient: Es wird nur ein Kabelstrang benötigt, und Geräte können schnell hinzugefügt oder entfernt werden, indem sie an der passenden Stelle in die Kette eingefügt werden.

### Kabel und Stecker

DMX wurde ursprünglich für 5-polige XLR-Kabel entwickelt. Diese Kabel sind speziell für die Übertragung von digitalen DMX-Daten ausgelegt. Sie haben:

-	Drei Leitungen für die eigentlichen Daten (genannt D+, D-, Masse)
-	Zwei zusätzliche Leitungen, die für spätere Erweiterungen vorgesehen waren (z. B. Rückkanäle, die jedoch selten genutzt werden).

5-polige Kabel sind besonders gut abgeschirmt, um Störungen zu vermeiden. Auch die Steckverbindungen (5-polige XLR-Stecker) sind speziell dafür ausgelegt, zuverlässige Verbindungen herzustellen.

### Kabel und Stecker in der Praxis

In der Praxis werden jedoch meist **normale 3-polige Mikrofonkabel mit 3-poligen XLR-Steckern** verwendet. Das liegt daran, dass diese Kabel und Stecker günstiger und weit verbreitet sind. Für viele Lichtanwendungen reicht die Übertragungsqualität von Mikrofonkabeln aus, solange die Kabel nicht zu lang sind und die Umgebung keine starken Störungen erzeugt.

Dieser Kompromiss hat jedoch Vor- und Nachteile:

-	Vorteil: Geringere Kosten und leichtere Verfügbarkeit.
-	Nachteil: Mikrofonkabel sind für analoge Audiosignale optimiert, nicht für digitale Datenübertragung. Bei längeren Strecken oder vielen Geräten in der Kette kann es zu Signalverlusten oder Störungen kommen.


### Für Interessierte: Unterschiede zur Audio-Verkabelung

Ein weiterer Punkt ist, dass DMX-Stecker umgekehrt verwendet werden im Vergleich zu Audiokabeln:

Das ist genau andersherum wie bei Audioanwendungen, wo der male-Stecker oft am Mikrofon oder Instrument und der female-Stecker am Mischpult ist. Dieser Unterschied sollte beachtet werden, um Fehler bei der Verkabelung zu vermeiden.

## Kanäle, Werte und Universen

DMX arbeitet mit sogenannten Kanälen. Ein Kanal ist wie ein Befehlssignal, das einem bestimmten Parameter eines Geräts zugeordnet ist. Zum Beispiel:

-	Kanal 1 könnte die Helligkeit steuern,
-	Kanal 2 die Farbe,
-	Kanal 3 die Bewegung nach links oder rechts.

**Ein DMX-Kanal kann Werte zwischen 0 und 255 annehmen.** Diese Werte steuern, wie stark eine Funktion ausgeführt wird (z. B. Helligkeit 0 = aus, 255 = maximale Helligkeit).

**Ein DMX-Universum besteht aus 512 Kanälen.** Das bedeutet, dass innerhalb eines Universums bis zu 512 Steuerbefehle gesendet werden können. Bei größeren Lichtshows, die mehr Kanäle benötigen, können mehrere Universen verwendet werden.

## DMX-Adresse am Gerät einstellen

Jedes DMX-Gerät benötigt eine Adresse, damit es weiß, welche Kanäle es verwenden soll. Diese Adresse legt fest, ab welchem Kanal das Gerät auf die Signale reagiert. Beispiel:

-	Wenn ein Gerät auf Adresse 1 eingestellt ist, nutzt es die Kanäle 1 bis 5 (je nach Anzahl der Funktionen).
-	Ein zweites Gerät, das bei Kanal 6 beginnt, muss auf Adresse 6 eingestellt werden.

Die Adresse wird meist über kleine Schalter (DIP-Schalter) oder ein digitales Display am Gerät eingestellt. Die Bedienungsanleitung des Geräts erklärt, wie viele Kanäle es benötigt und wie die Adresse programmiert wird.

## Woher kommt das DMX-Steuersignal?

Das DMX-Steuersignal wird von einem DMX-Controller (also einem Lichtmischpult) erzeugt. Dieser Controller ist das zentrale Steuergerät in einem DMX-System und sendet die Befehle an alle angeschlossenen Lichtgeräte. Es gibt verschiedene Arten von Controllern, die je nach Einsatzbereich und Anforderungen variieren:

1. **Manuelle Lichtpulte:** Diese Geräte haben physische Schieberegler (Fader) oder Tasten, mit denen die Kanäle direkt gesteuert werden. Ein einfacher Controller kann zum Beispiel jeden Kanal mit einem eigenen Regler ansteuern, um Helligkeit, Farbe oder andere Funktionen zu verändern. Solche Pulte sind besonders für kleinere Veranstaltungen oder einfache Lichtshows geeignet.
2. **Programmierbare Lichtpulte:** Für größere und komplexere Shows gibt es programmierbare Lichtpulte. Diese ermöglichen es, Szenen und Effekte im Voraus zu erstellen und zu speichern. Eine Szene ist eine bestimmte Kombination von Lichteinstellungen (z. B. Helligkeit, Farbe und Bewegung), die auf Knopfdruck abgerufen werden kann. Die Steuerung erfolgt hier oft über Touchscreens oder digitale Displays.
3. **Software-Lösungen:** Immer häufiger wird DMX mit Hilfe von Computerprogrammen gesteuert. Diese Software wird auf einem Laptop oder PC installiert und ermöglicht eine präzise Kontrolle über die Lichtgeräte. Der Computer wird mit einem speziellen Adapter (USB-DMX-Interface) an die DMX-Kabel angeschlossen. Softwarelösungen bieten oft eine benutzerfreundliche Oberfläche, auf der Lichtshows grafisch geplant und programmiert werden können.
4. **Automatische Controller und Medienserver:** In hochautomatisierten Systemen, wie in Themenparks oder großen Shows, kommt das Signal oft von spezialisierten Geräten wie Medienservern. Diese steuern DMX-Licht in Kombination mit Videos, Musik und anderen Effekten.

Der Controller sendet die Daten in einem festgelegten Takt über das DMX-Kabel. Jeder angeschlossene Kanal erhält dabei nacheinander seinen Wert (z. B. Kanal 1 = Helligkeit 150, Kanal 2 = Farbe 100). Alle Geräte in der DMX-Kette empfangen dasselbe Signal, reagieren aber nur auf die Kanäle, die ihrer Adresse zugeordnet sind.

Für kleine Veranstaltungsorte mit wechselndem Bedienpersonal haben sich in unserer Erfahrung einfache manuelle Lichtpulte bewährt. Diese bieten heutzutage oft auch eine rudimentäre Programmierbarkeit. Die Softwarelösungen, wie das in diesem Projekt verwendete Lightkey bieten sich aufgrund ihrer geringen Kosten für komplexere Projekte an.


## Auswirkungen des geschichtlichen Hintergrunds auf die heutige Anwendung von DMX

DMX wurde ursprünglich entwickelt, um die Helligkeit von konventionellen Scheinwerfern, wie Halogenlampen oder PAR-Scheinwerfern, zu steuern. Damals war die Hauptaufgabe einfach: Die Lampen sollten heller oder dunkler leuchten, und das geschah über Dimmerkanäle. DMX war dafür ideal, weil es nur eine geringe Datenmenge benötigt, um diese Funktion zu erfüllen – ein Kanal pro Lampe und ein Wert zwischen 0 und 255 für die Helligkeit.

Mit der Zeit wurde die Bühnentechnik immer komplexer. Moderne Geräte wie Moving Heads, LED-Scheinwerfer und andere intelligente Lichteffekte kamen hinzu. Diese Geräte können deutlich mehr als nur Helligkeit regeln. Sie können:

- Farben wechseln,
- Muster (sogenannte Gobos) projizieren,
-	Bewegungen ausführen (schwenken, kippen),
- und viele andere Effekte erzeugen.

All diese Funktionen erfordern viele Steuerbefehle. Ein Moving Head kann zum Beispiel 10 oder mehr Kanäle benötigen:

-	1 Kanal für die Helligkeit,
-	2 Kanäle für die Bewegung (links/rechts und hoch/runter),
-	1 Kanal für die Farbe,
-	1 Kanal für das Gobo,
-	1 Kanal für die Geschwindigkeit der Bewegungen,
-	und weitere Kanäle für Spezialeffekte.

DMX, das ursprünglich nur für einfache Helligkeitssteuerungen gedacht war, also für viel mehr benutzt. Es ist ein Kompromiss, weil es immer noch auf demselben Grundprinzip basiert: Ein Kanal steuert eine Funktion.

Warum ist das ein Kompromiss?
	1.	Begrenzte Kanalanzahl: Ein DMX-Universum hat nur 512 Kanäle. Das reicht bei modernen Lichtshows oft nicht aus, wenn viele komplexe Geräte verwendet werden. Deshalb müssen mehrere Universen eingesetzt werden, was die Steuerung komplizierter macht.
	2.	Keine bidirektionale Kommunikation: DMX wurde nur für das Senden von Steuerbefehlen entwickelt. Moderne Geräte könnten Daten zurücksenden, wie z. B. Statusmeldungen oder Fehlermeldungen. Das geht mit DMX nicht, weil es nur in eine Richtung arbeitet (vom Steuerpult zum Gerät).
	3.	Hoher Kanalverbrauch: Geräte mit vielen Funktionen beanspruchen viele Kanäle, was zu Konflikten führen kann, wenn die Adressen nicht sorgfältig geplant werden. Bei großen Shows wird das schnell unübersichtlich.
	4.	Datenrate: DMX arbeitet mit einer relativ niedrigen Datenrate, da es für die einfache Steuerung von Helligkeit ausgelegt wurde. Wenn viele Geräte angeschlossen sind, kann es zu Verzögerungen kommen, weil die Steuerdaten nacheinander gesendet werden.
