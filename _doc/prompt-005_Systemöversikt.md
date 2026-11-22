---
id: prompt-005
status: aktuell
projekt: VizWay-web
typ: nytt-uppdrag
---

# Uppdrag 005 – VizWays systemöversikt

## 1. Syfte

Bygg VizWays systemöversikt på adressen `/system/`.

Startsidan presenterar VizWays själ och vision. Systemöversikten ska visa **vad vi kan åstadkomma och vad vi vill åstadkomma**.

Besökaren ska känna igen VizWay men uppleva en ny miljö: mer teknisk, precis och informationsrik.

**Designprincip: Visionen möter ingenjörskonsten.**

Läs `AGENTS.md`, `README.md` och `STATUS.md` innan arbetet börjar. Undersök befintlig Astro-struktur och återanvänd fungerande komponenter.

## 2. Visuell identitet

Systemöversikten ska ha en egen karaktär, skild från startsidans poetiska landskap.

**Uttryck:**
- Djup marinblå eller mörk grafit som grund.
- Turkos och ljusblå som igenkännbara VizWay-accenter.
- Skarp och tydlig typografi.
- Diskreta tekniska linjer, rutnät och geometriska detaljer.
- Elegant, modern systemarkitekturkänsla.
- Tydlig struktur och god läsbarhet.

Undvik att kopiera startsidans soluppgång eller ljusspår till systemöversikten.

Använd inga nya bakgrundsbilder utan särskilt godkännande. Skapa tills vidare den tekniska känslan med CSS.

## 3. Sidans introduktion

Överrubrik:

**VIZWAY / SYSTEM**

Huvudrubrik:

**Visioner blir system.**

Ingress:

*Vi utvecklar intelligenta digitala system som förenklar arbete, stärker beslut och skapar nya möjligheter. Här presenterar vi både det vi bygger idag och det vi vill förverkliga i framtiden.*

Håll presentationen kort. Besökaren ska snabbt komma vidare till projekten.

## 4. Projekt som ska presenteras

### Grupp A – System och tillämpningar

**BOS**

Intelligent verksamhetsstyrning.

Presentera BOS som ett system under utveckling med ambitionen att stödja planering, struktur, styrning och uppföljning av verksamheter.

Beskriv inte funktioner som färdiga utan verifierat underlag.

Status: `utveckling`

**Bygga Välstånd**

Ekonomisk analys och långsiktigt värdeskapande.

Presentera systemets inriktning mot bättre ekonomiska beslut, analys av möjligheter och stöd för långsiktiga strategier.

Undvik löften om avkastning eller ekonomiska resultat.

Status: `utveckling`

**KvittoApp – från kvitto till bokföringsunderlag**

Detta är ett sammanhängande projekt med två delar:

**Del 1 – KvittoApp**
- Fotografera kvitton eller fakturor.
- Skapa PDF-dokument.
- Leverera dokumenten till valda mottagare via e-post.
- Enkel mobil användning.

**Del 2 – OCR → SIE**
- Tolka kvitton och fakturor med OCR.
- Identifiera relevant ekonomisk information.
- Skapa förslag till bokföringsunderlag.
- Möjliggöra export i SIE-format för fortsatt bokföring.

Del 2 är ett tidigare påbörjat men inte avslutat utvecklingsarbete.

Presentera inte OCR-tolkning, kontering eller SIE-export som färdiga funktioner. Beskriv dem som utvecklingsmål, och tydliggör att bokföringsuppgifter behöver kunna kontrolleras.

Status: `utveckling`

### Grupp B – Teknik och plattformar

**VizOS**

Reproducerbar och kontrollerbar IT-miljö baserad på NixOS.

Beskriv:
- Deklarativ systemkonfiguration.
- Återskapbara installationer och miljöer.
- Virtualisering och isolerade arbetsmiljöer.
- Stöd för programutveckling och systemadministration.

VizOS används som ett aktivt internt teknikprojekt och vidareutvecklas.

Status: `utveckling`

**Viz AI Core**

Visionen om en säker och skalbar AI-plattform.

Beskriv ambitionen:
- En specialiserad AI-kärna.
- Samordning av flera AI-agenter.
- Kontrollerad tillgång till verktyg och externa system.
- Möjlighet att bygga lösningar för olika organisationer.

Skilj koncept och framtidsmål från verifierad funktion.

Status: `ide`

## 5. Projektkort

Varje system ska visas i ett eget kort med:

1. Systemnamn.
2. Kort beskrivning.
3. Tydlig utvecklingsstatus.
4. En diskret teknisk symbol eller grafisk detalj.
5. Länk till systemets egen informationssida.

Korten ska ha konsekvent formgivning, men inte nödvändigtvis samma storlek.

BOS och Bygga Välstånd får gärna ha något större visuell tyngd.

KvittoApp ska tydligt visa sambandet mellan mobilappen och OCR → SIE.

Visa utvecklingsstatus på svenska:
- Färdigt
- Under utveckling
- Framtida idé

Status ska motsvara verkligheten.

## 6. Systemsidor

Skapa en informationssida per projekt med återanvändbar mall.

Varje sida ska innehålla:
- Namn och kort introduktion.
- Syfte och tänkt användning.
- Vad som finns eller utvecklas idag.
- Framtida mål och möjligheter.
- Utvecklingsstatus.
- Navigering tillbaka till systemöversikten.

**Viktigt:** Skilj tydligt mellan *Nuvarande utveckling* och *Framtida möjligheter*.

Hitta inte på funktioner, kundreferenser, demonstrationer eller produktmognad för att fylla ut sidorna.

Om detaljer saknas ska presentationen vara kort men korrekt.

## 7. Teknisk implementation

Använd den befintliga Astro-arkitekturen.

- Behåll `src/pages/system/index.astro` och `src/pages/system/[id].astro`.
- Skapa projektens innehåll som separata Markdown-filer under `src/content/systems/`.
- Återanvänd befintlig statusmodell `fardig`, `utveckling` och `ide`.
- Utöka innehållsschemat vid behov med exempelvis `category` och `order`.
- Skapa återanvändbara komponenter för projektkort och sektionsrubriker.
- Använd CSS för formgivningen.
- Behåll fungerande ljust/mörkt tema.
- Undvik onödiga beroenden och JavaScript.

Undersök det befintliga exempelsystemet och ersätt eller avpublicera dess exempelpresentation när de verkliga projektposterna fungerar.

Se till att alla fem projekt får fungerande adresser.

## 8. Navigering

Besökaren kommer från startsidans **Utforska!**.

Systemöversikten ska vara enkel att orientera sig i.

- Visa tydligt att besökaren befinner sig i VizWays systemvärld.
- Länka till respektive system.
- Ha en diskret väg tillbaka till startsidan.
- Behåll tillgång till Om VizWay och Kontakt.
- Ingen överflödig navigering.

## 9. Dokumentation

Uppdatera:
- `README.md` med instruktioner för att lägga till, ändra och kategorisera system.
- `STATUS.md` med genomförda ändringar, verifieringar och kvarvarande begränsningar. Tydlig markering av nya uppdateringar.

För dokumentationen ska gällande VizWay-standard användas: tydligt språk, Markdown, YAML och tydlig åtskillnad mellan fungerande funktioner och framtidsidéer.

## 10. Verifiering

1. Kör `npm run build`.
2. Kontrollera att alla projekt får fungerande länkar.
3. Testa vid 320, 390, 768 och 1440 px.
4. Kontrollera både ljust och mörkt tema.
5. Verifiera att KvittoApps OCR → SIE-del inte presenteras som färdig.
6. Kontrollera navigering och tangentbordsåtkomst.
7. Rapportera genomförda ändringar och avvikelser.

Ändra inte startsidans design.

**Gör ingen Git-commit och publicera ingenting.**

## Acceptanskriterium

En tydlig, responsiv och tekniskt orienterad systemöversikt med fem verkliga VizWay-projekt och återanvändbara systemsidor.

Besökaren ska förstå skillnaden mellan vad VizWay utvecklar idag och vad VizWay vill förverkliga i framtiden.

**VizWay – Visionary Intelligent Zystems.**
