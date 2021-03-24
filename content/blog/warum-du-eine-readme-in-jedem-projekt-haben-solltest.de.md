---
title: "Warum du eine README in jedem Projekt haben solltest"
date: 2021-02-09T17:47:20+01:00
draft: false
translationKey: "warum-du-in-jedem-projekt-eine-readme-haben-solltest"
image: "images/readme.jpeg"
author: Steve Beyer
categories: 
    - software development
    - organisation
    - productivity
---

Ich kenne keinen Entwickler, der gerne Dokumentation schreibt. Dafür kenne ich Genug, die den Teufel an die Wand malen, sobald keine Vorhanden ist. Zurecht.

Wenn du exzellente Software schreiben möchtest, kommst du um eine gute Dokumentation nicht herum. Dein Code kann noch so gut durchdacht und professionell geschrieben sein, ohne Dokumentation ist das aber leider nutzlos. Was ich hier nicht behandeln möchte sind Kommentare. Das ist sowieso immer ein Diskussionsthema, ob überhaupt, wie viel und wann Kommentare benutzt werden sollten. 

README to the rescue! So schwer ist das aber gar nicht. Alles was du brauchst ist eine einfache Textdatei. Bevorzugt im Markdownformat. Und zusätzlich noch ein bisschen Struktur.

In diesem Blog Post erkläre ich dir, was genau eine README ist und wie diese aufgebaut sein kann.
## Was ist eine README?

Ganz einfach gesagt: eine README ist eine Datei, die Informationen zu einem Projekt zur Verfügung stellt. Oft schreibt man den Dateinamen in Großbuchstaben, damit die Aufmerksamkeit als erstes auf diese Datei gelenkt wird. Das animiert doch schonmal dazu diese Datei zu lesen.

Wenn du Github oder Gitlab benutzt (das solltest du auf jeden Fall), dann wird diese README gleich in der Übersichtseite des Projekts angezeigt. Sie ist also, die erste Datei, die du in einem Projekt anschaust. 

Weil sie der erste Anlaufpunkt für dein Projekt ist, solltest du alles wichtige hier reinschreiben. Fasse dich aber, wenn möglich kurz. Erkläre nur, die wichtigsten Dinge und las allgemeine Sachen weg. Eine README ist kein Roman.

Du solltest nicht erklären, wie bestimmte Teile eines Frameworks, das du benutzt, funktionieren, sondern nur erklären, welche Besonderheiten diese oder jene Funktion hat.

Nenne auch andere Ressourcen, die dein Projekt betreffen. Hast du eine große API, kann es Sinn machen eine externe Dokumentation zu verwenden. Verlinke diese einfach unter dem Punk "API Dokumentation".

Bei einer Bibliothek macht es Sinn Beispielszenarien durchzuspielen. Konkrete kleine Codeschnippsel, die Anderen Entwicklern helfen können deine Bibliothek zu verweden.

Am häufigsten wird die README als Anleitungen zur Installation oder Konfiguration eines Projektes verwendet. Du kannst, aber alles Mögliche in diese Datei schreiben. 
Hier mal ein paar Beispiele:
- Workflows: Wie genau interagieren, die verschiedenen Teile deines Projektes miteinander? Damit ersparst du Anderen, stundenlange Arbeit, denn sie müssen sich nicht durch tausende Zeilen an Quellcode wühlen, um die Funktionsweise deines Projektes zu verstehen.
- Externe Bibliotheken/Tools: Mit welches externen Tools interagiert dein Projekt? Hier kommt es vor allem darauf an, die Schnittstellen genau zu beschreiben. Was für Daten werden übermittelt? Wie oft? In welchen Formaten?
- API: Wie sieht die Schnittstelle zu deinem Projekt aus? Wie kommunizieren andere Programme mit meinem Projekt? Kostet das was? Hier spielen auch sicherheitsrelevante Aspekte mit, zum Beispiel wie authentifizieren sich andere Dienste mit deiner API? 
- FAQ: Gibt es häufige Fragen im Bezug auf dein Projekt?
- Lizenzen: Unter welchen Bedingungen dürfen andere dein Projekt nutzen? Das ist meistens nur für öffentliche Projekte von Interesse, aber du solltest dir genau überlegen, was 
- Todos: Was muss noch erledigt werden?
- Ideen: Welche Wünsche, Vorstellungen und Visionen hast du für das Projekt?
- Ziele: Was genau deckt das Projekt ab und für wen ist es geeignet?

Behalte immer im Hinterkopf, dass du eine README für Andere schreibst. Mit Andere meine ich auch dein zukünftiges Ich. Nach einem Jahr hast du schon keine Ahnung mehr, wie dein Projekt genau funktioniert. Jeder der mit deinem Projekt arbeitet, wird froh sein, wenn du die wichtigsten Aspekte deines Projektes beleuchtest.

## 4 Gründe, warum eine README in kleinen und großen Projekten Sinn macht

### 1. Du kannst Entscheidungen leicht nachvollziehen

Als Software Entwickler kümmerst du dich, um Details. Soll heißen: du nimmst ein komplexes Problem, zerlegst es in seine Einzelteile und entwickelst eine Software, die dieses Problem löst. 

Meistens kannst du dabei schon vorhandene Lösungen verwenden. Ein Framework zum Beispiel, nimmt dir viele Programmierschritte ab, da häufig verwendete Features einer Software (Logging, Datenbankmanagement, etc.) bereits umgesetzt sind. Du musst diese dann einach verwenden. Diese sind ebenfalls durch deren Maintainer dokumentiert.

Meistens wirst du aber etwas neues entwickeln müssen, welches deinen Anforderungen oder des Kunden entspricht. Überlege dir, was wichtig ist und schreibe alles auf. Exportierst du zum Beispiel Daten in eine CSV-Dateien, könntest du kurz den Aufbau beschreiben. Also kurz aufzeigen, welche Felder es gibt, unter welchen Bedingungen Sie gefüllt werden und wo genau die Informationen herkommmen.

Allerdings kann es während der Entwicklung passieren, dass du vom Standardpfad abweichen musst. Ich musste zum Beispiel, das Formularmodul von Symfony stark umbiegen, da die Anforderungen vom Kunden mit den Standardtools nicht umsetzbar waren. Zugegeben, aus heutiger Sicht hätte ich vielleicht auf das Modul verzichten sollen und gleich eine eigene Implementierung umsetzen sollen. Das macht aber nichts, den aus diesem Projekt konnte ich viele Learnings mitnehmen. 

Um zum Thema zurückzukommen: ich habe alle Workflows aufgeschrieben, um meinen Kollegen die Arbeit so einfach, wie möglich zu machen. Am Ende sparst du dir auch wertvolle Zeit. Jede mögliche Frage, die du in deiner README beantwortest musst du nicht in einem persönlichen Gespräch oder per E-Mail beantworten.

### 2. Ideen können schnell aufgeschrieben werden
Hast du eine gute Idee für ein weiteres Feature? Oder siehst du an einer Stelle in deinem Projekt Verbesserungsbedarf? Kannst du zum Beispiel ein Refactoring machen? 

Schreibe alle diese Dinge in die Readme. Du wirst sie wahrscheinlich schnell wieder vergessen, wenn du sie nicht aufschreibst. 

Schreibst du deine Ideen auf machst du es auch Anderen einfacher mit deinem Projekt zu interagieren. Diese Ideen können sie sich nämlich nehmen und in einem separaten Branch umsetzen und einen Prototyp entwickeln. 

### 3. Komplexe Workflows können erklärt werden
Nehmen wir ein einfaches Beispiel. Du hast ein Kontaktformular auf einer Website. Der Kunde füllt, das Formular aus und erwartet irgendwann eine E-Mail vom Supportteam zurück. Allerdings gibt es auch noch eine Newsletterfunktion. Und je nachdem, welche Selectbox, der Kunde auswählt erscheinen verschiedene weitere Felder. All das wird irgendwo hingeschickt und verarbeitet. Und dann gibt es auch noch verschiedene Postfächer, an die so eine Anfrage geht und... 

Du sieht schon, ich hätte mir jetzt noch genügend weitere "Features" für so ein Kontaktformular ausdenken können. Je komplexer dein Projekt wird, desto mehr Teilnehmer, Bedingungen und Fälle gibt es zu berücksichtigen. 

Stell dir vor du kommst in ein neues Team und wirst mit so einem Projekt konfrontiert, das keinlei Dokumentation hat. 

Es ist, die Hölle. 

Mit einer Readme hast du innerhalb kurzer Zeit einen Überblick über das Projekt und kannst einfach an den aktuellen Stand anknüpfen.

### 4. Du kannst Markdown verwenden

Markdown ist eine coole und nützliche Sprache. Sie ist vor allem eines: *einfach*. Du brauchst nur deinen Texteditor. Da niemand gerne Dokumentation schreibt, sollte der Prozess so einfach, wie möglich und nicht unnötig kompliziert sein.

Die Features von Markdown umfassen zum Beispiel Listen, Tabellen, Links und vieles mehr. Eben fast alles, das HTML auch kann, nur ohne das nervige Markup. Das ist übrigens auch der Grund, warum immer mehr CMS-Systeme, wie zum Beispiel Hugo auf Markdown setzen.

Bonus: Markdown lässt sich ganz einfach in HTML und sogar PDFs umwandeln. Somit kann ich meine ganze Dokumentation ganz einfach als PDF exportieren und teilen.

## Wie sieht so eine README aus?

Wie ich schon erwähnt habe, gibt es nicht *DIE* eine README. Jedes Projekt ist unterscheidlich und hat verschiedene Anforderungen. Ich habe dennoch versucht, ein paar allgemeine Gliederungspunkte herauszusuchen, die ich auch in meinen Projekten verwendet habe.

```markdown
# Projectname

## About

Eine kurze Beschreibung des Projektes. Warum das ganze überhaupt? Welches Problem soll das Projekt lösen und wer ist beteiligt.

## API

So lange die API überschaubar ist und nur wenige Endpunkte existieren, kann es Sinn machen hier eine Schnittstellenbeschreibung einzufügen. Sobald, die API wächst sollte man aber auf eine externe API-Dokumentation zurückgreifen.

## Depenencies

Diesen Bereich sehe ich nicht so oft in Open Source Projekten. Ich erkläre in diesem Bereich gerne, welche Abhängigkeiten mein Projekt hat und warum. Hier muss man nicht kleinlich alle Packages aufzählen, die man benutzt. Nur die wichigsten. Damit behält man einen groben Überblick. Das ist auch für andere Entwickler hilfreich. Hier kann man schon abschätzen, welche Funktionen die Software besitzt.

## FAQ

Dieser Bereich kann sehr viel Zeit einsparen. Je mehr Fragen du beantwortest, desto unwahrscheinlicher ist es, das dir jemand eine Frage stellt. Klingt komisch oder? Support für dein Projekt ist dringend nötig, aber je weniger aktive Zeit du damit verbringst, desto mehr Zeit kannst du in die Programmierung stecken. Sammle deshalb immer alle Fragen und beantworte sie hier. 

```
## Fazit

Probiere es einfach aus. Du wirst die Vorteile in deinen Projekten sehen.
