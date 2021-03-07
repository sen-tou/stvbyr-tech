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
---

## Was ist eine README?

Ganz einfach gesagt: eine README ist eine Datei, die Informationen zu einem Projekt zur Verfügung stellt. Auf deutsch bedeutet "read me", soviel wie "les mich". Das animiert schonmal dazu diese Datei zu lesen. Oft schreibt man den Dateinamen in Großbuchstaben, damit die Aufmerksamkeit als erstes auf diese Datei gelenkt wird. 

Wenn du  Github oder Gitlab benutzt (das solltest du auf jeden Fall), dann wird diese README gleich in der Übersichtseite des Projekts angezeigt. Sie ist also, die erste Datei, die du in einem Projekt anschaust. Weil sie der erste Anlaufpunkt für dein Projekt ist, solltest du alles wichtige hier reinschreiben. Fasse ich dich aber, wenn möglich, kurz. Erkläre nur, die wichtigsten Dinge und las allgemeine Sachen weg. Zum Beispiel solltest du nicht erklären, wie bestimmte Teile eines Frameworks, das du benutzt, funktionieren, sondern nur erklären, welche Besonderheiten diese oder jene Funktion hat.

Am häufigsten wird die README als Anleitungen zur Installation oder Konfiguration eines Projektes verwendet. Du kannst, aber alles Mögliche in diese Datei schreiben. 
Hier mal ein paar Beispiele:
- Workflows: Wie genau interagieren, die verschiedenen Teile deines Projektes miteinander. Damit ersparst du Anderen, stundenlange arbeit, denn sie müssen sich nicht durch tausende Zeilen an Quellcode wühlen, um die Funktionsweise deines Projektes zu verstehen.
- Externe Bibliotheken/Tools: Mit welches externen Tools interagiert dein Projekt? Hier kommt es vor allem darauf an, die Schnittstellen genau zu beschreiben. Was für Daten werden übermittelt? Wie oft? In welchen Formaten?
- API: Wie sieht die Schnittstelle zu deinem Projekt aus? Wie kommunizieren andere Programme mit meinem Projekt? Hier spielen auch sicherheitsrelevante Aspekte mit. 
- FAQ: Beantworten von häufigen Fragen im Bezug auf dein Projekt
- Lizenzen: Unter welchen Bedingungen dürfen andere dein Projekt nutzen. Das ist meistens nur für öffentliche Projekte von Interesse, aber du solltest dir genau überlegen, was 
- Todos: Alle offenen Punkte, die noch zu erledigen sind
- Ideen: Wünsche, Vorstellungen, Visionen für das Projekt
- Ziele: Was genau denkt das Projekt ab und für wen ist es geeignet

Behalte immer im Hinterkopf, dass du eine README für Andere schreibst. Mit Andere meine ich auch dein zukünftiges Ich. Nach einem Jahr hast du schon keine Ahnung mehr, wie dein Projekt genau funktioniert. Jeder der mit deinem Projekt arbeitet, wird froh sein, wenn du die wichtigsten Aspekte deines Projektes beleuchtest.

## 5 Gründe, warum eine README in kleinen und großen Projekten Sinn macht

### 1. Du kannst Entscheidungen leicht nachvollziehen
Programmieren ist keine Einbahnstraße. Als Software Entwickler kümmerst du dich, um Details. Soll heißen: du nimmst ein komplexes Problem, zerlegst es in seine Einzelteile und entwickelst eine Software, die dieses Problem löst. 

Meisten kannst du dabei schon vorhandene Lösungen verwenden. Ein Framework zum Beispiel, nimmt dir viele Programmierschritte ab, da häufig verwendete Features einer Software (Logging, Datenbankmangement, etc.) bereits umgesetzt sind. Du musst diese dann einach verwenden. 

Allerdings kann es während der Entwicklung passieren, dass du vom Standardpfad abweichen musst. Beispiel: Du möchtest eine ...
### 2. Ideen können schnell aufgeschreiben werden
Hast du eine gute Idee für ein weiteres Feature? Oder siehst du an einer Stelle in deinem Projekt Verbesserungsbedarf? Kannst du zum Beispiel ein Refactoring machen? 

Schreibe alle diese Dinge in die Readme. Du wirst sie wahrscheinlich schnell wieder vergessen, wenn du sie nicht aufschreibst.
### 3. Komplexe Workflows können erklärt werden
Nehmen wir ein einfaches Beispiel. Du hast ein Kontaktformular auf einer Website. Der Kunde füllt, das Formular aus und erwartet irgendwann eine E-Mail vom Supportteam zurück. Allerdings gibt es auch noch eine Newsletterfunktion. Und je nachdem, welche Selectbox, der Kunde auswält erscheinen verschiedene weitere Felder. All das wird irgendwo hingeschickt und verarbeitet. Und dann gibt es auch noch verschiedene Postfächer, an die so eine Anfrage geht und... Du sieht schon, ich hätte mir jetzt noch genügend weitere "Features" für so ein Kontaktformular ausdenken können. Je komplexer dein Projekt wird, desto mehr Teilnehmer, Bedingungen und Fälle gibt es zu berücksichtigen. Stellt dir vor du kommst in ein neues Team und wirst mit so einem Projekt konfrontiert. Es ist, die Hölle. Du hast nun zwei Möglichkeiten: dich wie ein Maulwurf durch den Code wühlen oder kündigen. Mit einer Readme hast du innerhalb kurzer Zeit einen Überblick über das Projekt.

### 4. Du erleichterst anderen den Einstieg in dein Projekt
Es gibt nichts schlimmeres für einen Software Entwickler, als in ein neues Team zu kommen und eine Codebase vorzufinden, die keinerlei Dokumentation besitzt. Man schaut sprichwörtlich, wie das Schwein ins Uhrwerk. 
### 5. Dein Erinnerungsvermögen ist begrenzt

## Wie sieht so eine README aus?

## Fazit