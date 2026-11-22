---
id: prompt-004b
status: aktuell
reviderar: prompt-004a
projekt: VizWay-web
---

# Uppdrag: Hero – finjustering 2

## Syfte

Finjustera den fungerande startsidan så att den bättre uttrycker VizWays visionära och mänskliga identitet.

Läs `AGENTS.md` och befintlig `STATUS.md` innan arbetet börjar.

**Detta är en begränsad designrevision, inte en ombyggnad.**

## 1. Logotyp

Referens: `_doc/logga.png`

- Öka logotypens nuvarande storlek med cirka 20 % på desktop.
- Behåll placeringen uppe till vänster.
- Behåll den stigande, kursiva VizWay-formen.
- Behåll den turkosa bågen och stjärnan.
- Skala proportionellt och förhindra överlappning.
- Anpassa storleken separat för mobil.

Logotypen ska kännas som en personlig signatur med tydlig närvaro.

## 2. Slogan

Använd exakt:

**Visionary Intelligent Zystems**

Typografi:
- Title Case, inte versaler genomgående.
- Kursiv (*italic*).
- Tunn, elegant teckenvikt.
- Ljust turkos färg.
- Diskret utökat teckenavstånd.
- En sammanhållen rad på desktop.

Placera sloganen under logotypen enligt referensen. Den ska komplettera logotypen, inte dominera den.

Undvik CSS-regler som automatiskt ändrar texten till versaler.

## 3. Huvudrubrik

Ändra texten till exakt:

**Vi ser möjligheter**

- Ändra endast stort M till litet m.
- Behåll befintlig kursiv seriftypografi.
- Behåll vit färg för "Vi ser".
- Behåll turkos färg för "möjligheter".
- Behåll den tunna, svepande understrykningen.

Uppdatera texten i `src/content/pages/start.md` och eventuella relevanta sidtitlar.

## 4. Utforska-knappen

Behåll befintlig formgivning och funktion.

På desktop:
- Flytta knappen något nedåt, ungefär 15–20 px.
- Flytta knappen något åt höger, ungefär 15–25 px.
- Behåll tydlig visuell koppling till den poetiska texten.
- Förhindra att knappen överlappar ljusspåret eller andra element.

På mobil:
- Behåll naturlig läsordning efter texten.
- Anpassa marginalerna efter skärmbredden.

Knappen ska fortfarande vara sidans enda framträdande navigationsval och länka till `/system/`.

## 5. Designprinciper

**Startsidan:**
- Mjukhet och precision.
- Vision och framtidstro.
- Elegant och personlig typografi.
- Ljus, rymd och uppåtgående rörelse.
- Poetiskt uttryck utan traditionell försäljningsretorik.

**Systemsidorna – framtida designarbete:**
- Mer teknisk och exakt formgivning.
- Tydligare informationsstruktur.
- Högre informationstäthet.
- Systemarkitektur, funktionalitet och konkreta resultat.

Detta är en designinriktning för senare uppdrag. Ändra inte systemsidorna nu.

## 6. Behåll oförändrat

- `background-s1.png`
- Bakgrundens beskärning och placering
- Den poetiska textens fyra rader
- Sidans grundläggande komponentstruktur
- Befintlig responsiv funktionalitet
- Övriga webbsidor

## 7. Verifiering

1. Granska ändrade filer.
2. Kör `npm run build`.
3. Verifiera vid 320, 390, 768 och 1440 px.
4. Kontrollera att sloganen är kursiv och inte bryts på desktop.
5. Kontrollera att rubriken visar "Vi ser möjligheter".
6. Kontrollera att knappen fortfarande öppnar `/system/`.
7. Uppdatera `STATUS.md` med genomförda och verifierade ändringar.
8. Rapportera eventuella kvarvarande avvikelser.

**Gör ingen Git-commit och publicera ingenting.**

## Acceptanskriterium

Startsidan ska vara visuellt nära föregående version men ha en större logotyp, en mjukare rubrik, en kursiv slogan i Title Case och en något luftigare placering av Utforska-knappen.

**VizWays första intryck ska vara en vision. Systemen som följer ska visa förmågan att förverkliga den.**
