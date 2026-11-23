---
projekt: VizWay-web
dokument: ATT-GÖRA
uppdaterad: 2026-11-23
status: aktiv
---

# VizWay Webb – ATT-GÖRA

## Syfte

Samla fel, förbättringar och framtida idéer för VizWays webbplats.

Webbplatsen är publicerad på https://vizway.se/.

Vi utvecklar den stegvis och bevarar fungerande versioner i Git.

### Prioritering

- **P1 – Viktigt:** Bör åtgärdas i nästa utvecklingsomgång.
- **P2 – Förbättring:** Planeras när grundläggande funktioner är klara.
- **P3 – Framtid:** Idéer för senare utvärdering.

Status: `Öppen`, `Planerad`, `Pågår`, `Klar`, `Parkerad`.

## P1 – Nästa utvecklingsomgång

Punkterna 001–003 är verifierade i det lokala bygget för uppdrag 007.

### 001 – Logotyp och responsivitet

**Status:** Klar

- [x] Logotypens ordmärke och slogan ska skalas proportionellt som en sammanhängande enhet.
- [x] Förhindra att sloganen blir oproportionerligt stor i smalare fönster.
- [x] Behåll samma SVG-logotyp på samtliga sidor.
- [x] Anpassa logotypens bakgrund till headerns bakgrund i mörkt tema.
- [x] Behåll nuvarande ljusa utförande som utgångspunkt för ljust tema.
- [x] Undersök diskret stjärnhimmel bakom logotypen, utan synlig rektangulär avgränsning.
- [x] Verifiera på mobil, surfplatta och desktop.

**Mål:** Logotypen ska kännas naturligt integrerad i webbplatsen oavsett skärmstorlek.

### 002 – Header och footer

**Status:** Klar

- [x] Ge header och footer en sammanhängande grafisk identitet.
- [x] Använd samma grundläggande bakgrund och färgprinciper i båda banden.
- [x] Skapa elegantare övergångar mellan banden och sidinnehållet.
- [x] Undvik hårda, onödiga avgränsningslinjer.
- [x] Säkerställ att övergångarna fungerar i både ljust och mörkt tema.

**Mål:** Headern och footern ska rama in webbplatsen utan att kännas som separata block.

### 003 – Sitekarta i footer

**Status:** Klar

- [x] Lägg till länkar till Start, System, Om VizWay och Kontakt.
- [x] Lägg till `© VizWay`.
- [x] Gör texten `VizWay` i copyright-raden klickbar med länk till `/kontakt/`.
- [x] Anpassa länkarna för mobil och tangentbordsnavigering.
- [x] Samordna utseendet med headern.

**Mål:** Besökaren ska enkelt hitta vidare oavsett vilken sida som visas.

## P2 – Planerade förbättringar

### 004 – Engelskspråkig webbplats
**Status:** Pågår
- [ ] **Logotypens bakgrund:** Säkerställ att hela sloganen ryms inom logotypens bakgrund vid samtliga fönsterstorlekar. Kontrollera särskilt ljust tema. Behåll nuvarande proportioner och design.
- [x] Inför svenska och engelska som språkval.
- [x] Behåll svenska som standardspråk.
- [x] Skapa engelska versioner av Start, System, Om VizWay och Kontakt.
- [x] Översätt systembeskrivningar och statusbeteckningar.
- [x] Behåll produktnamn och VizWays slogan oförändrade.
- [x] Använd separata, redigerbara innehållsfiler för varje språk.
- [x] Lägg till ett diskret språkval i det gemensamma gränssnittet.
- [x] Använd konsekventa webbadresser, exempelvis `/en/` för engelska.
- [x] Ange korrekt HTML-språk och språkalternativ för sökmotorer.
- [x] Behåll aktuell sida vid språkbyte när motsvarande översättning finns.
- [ ] Godkänn den engelska språkversionen efter manuell granskning.

**Mål:** En internationellt användbar webbplats utan duplicerad programlogik.

### 005 – Projektens utvecklingsstatus
**Status:** Öppen

- [ ] Undersök hur olika mognadsgrader bäst ska presenteras.
- [ ] Skilj mellan koncept, utveckling, verifierade funktioner och aktiv intern användning.
- [ ] Presentera färdiga delsystem utan att kalla hela projektet färdigt.
- [ ] Behåll tydlig åtskillnad mellan nuvarande funktioner och framtida mål.

**Mål:** Ge en rättvisande bild av vad VizWay har åstadkommit och vad vi vill åstadkomma.


### 006 – Visuell och typografisk förfining
**Prioritet:** P2
**Status:** Pågår
**Planeras före:** 004 – Engelskspråkig webbplats

- [x] Använd normal teckenvikt i rubriker och menyer. Utgå från `font-weight: 400`.
- [x] Skapa typografisk hierarki med typsnitt, storlek, färg och avstånd.
- [x] Behåll fetstil för medvetna framhävningar i löpande text.
- [x] Granska rubriker, textbredder och radavstånd.
- [x] Finjustera systemöversiktens introduktion.
- [x] Kontrollera projektkort, statusetiketter och navigering.
- [x] Bedöm om temaväljaren ska vara mindre framträdande.
- [x] Säkerställ att sidtyperna har olika karaktär men gemensam VizWay-identitet.
- [x] Behåll logotypens typografi oförändrad.
- [x] Verifiera båda teman och mobilanpassning.
- [x] Godkänn typografin efter manuell granskning.

**Designprinciper:**
- Start – visionär och poetisk.
- System – teknisk och exakt.
- Om VizWay – personlig och framåtblickande.
- Kontakt – enkel och välkomnande.

**Mål:** Elegant, luftig och konsekvent typografi där rubriker framträder genom sin form och placering snarare än kraftig fetstil.

## P3 – Framtida förbättringar

### 007 – Gemensam stjärnheader och footer

- **Prioritet:** P3
- **Status:** Planerad
- **Område:** Visuell identitet och navigation

**Syfte:** Skapa en sammanhängande visuell upplevelse mellan startsidan och webbplatsens undersidor.

**Åtgärder:**

- [ ] Återanvänd den övre delen av startsidans stjärnhimmel i samtliga sidhuvuden.
- [ ] Harmoniera logotypens storlek och position så att den inte upplevs hoppa när besökaren byter sida.
- [ ] Behåll undersidornas navigation och tema-/språkkontroller.
- [ ] Utforma footern med samma stjärntema, men i en mörkare och mer diskret variant.
- [ ] Skapa gemensamma designprinciper och återanvändbara komponenter.
- [ ] Kontrollera läsbarhet, kontrast, mobilanpassning och laddningstid.
- [ ] Verifiera både svenska och engelska samt ljust och mörkt tema.

**Designprincip:**
Startsidan, undersidorna och footern ska uppfattas som delar av samma visuella värld.

**Avgränsning:**
Separat framtida uppdrag. Ingen förändring av nuvarande godkända layout.

## Klart

### Fungerande grundfunktioner

- [x] Visionär startsida med separat bakgrund.
- [x] Gemensam SVG-logotyp införd.
- [x] Systemöversikt med projektpresentationer.
- [x] Hela systemkortets yta är klickbar.
- [x] Sidorna Om VizWay och Kontakt.
- [x] Offentlig kontaktadress: info@vizway.se.
- [x] Webbplatsen publicerad på vizway.se.

## Arbetsmodell

1. Samla och prioritera förbättringar här.
2. Välj ett avgränsat utvecklingsuppdrag.
3. Kontrollera att Git har en fungerande återställningspunkt.
4. Skapa en numrerad Codex-prompt.
5. Genomför, bygg och verifiera.
6. Granska resultatet manuellt.
7. Uppdatera `STATUS.md` och denna lista.
8. Skapa Git-commit för godkänd version.

Skilj alltid mellan verifierade fel, beslutade ändringar och framtida förslag.
