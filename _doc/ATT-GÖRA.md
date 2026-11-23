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

Status: `Öppen`, `Pågår`, `Klar`, `Parkerad`.

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

**Status:** Öppen

- [ ] **Logotypens bakgrund:** Säkerställ att hela sloganen ryms inom logotypens bakgrund vid samtliga fönsterstorlekar. Kontrollera särskilt ljust tema. Behåll nuvarande proportioner och design.
- [ ] Inför svenska och engelska som språkval.
- [ ] Behåll svenska som standardspråk.
- [ ] Skapa engelska versioner av Start, System, Om VizWay och Kontakt.
- [ ] Översätt systembeskrivningar och statusbeteckningar.
- [ ] Behåll produktnamn och VizWays slogan oförändrade.
- [ ] Använd separata, redigerbara innehållsfiler för varje språk.
- [ ] Lägg till ett diskret språkval i det gemensamma gränssnittet.
- [ ] Använd konsekventa webbadresser, exempelvis `/en/` för engelska.
- [ ] Ange korrekt HTML-språk och språkalternativ för sökmotorer.
- [ ] Behåll aktuell sida vid språkbyte när motsvarande översättning finns.

**Mål:** En internationellt användbar webbplats utan duplicerad programlogik.

### 005 – Projektens utvecklingsstatus

**Status:** Öppen

- [ ] Undersök hur olika mognadsgrader bäst ska presenteras.
- [ ] Skilj mellan koncept, utveckling, verifierade funktioner och aktiv intern användning.
- [ ] Presentera färdiga delsystem utan att kalla hela projektet färdigt.
- [ ] Behåll tydlig åtskillnad mellan nuvarande funktioner och framtida mål.

**Mål:** Ge en rättvisande bild av vad VizWay har åstadkommit och vad vi vill åstadkomma.

### 006 – Finjustering av sidornas utseende

**Status:** Öppen

- [ ] Granska rubriker, textbredder och radavstånd.
- [ ] Finjustera systemöversiktens introduktion.
- [ ] Bedöm om temaväljaren ska vara mindre framträdande.
- [ ] Säkerställ att de olika sidtyperna har en egen känsla men gemensam VizWay-identitet.

**Designprinciper:**

- Start – visionär och poetisk.
- System – teknisk och exakt.
- Om VizWay – personlig och framåtblickande.
- Kontakt – enkel och välkomnande.

## P3 – Framtida idéer

### 007 – Utvecklad projektpresentation

**Status:** Parkerad

- [ ] Illustrationer eller tekniska diagram för utvalda projekt.
- [ ] Demonstrationer av fungerande system.
- [ ] Fördjupad teknisk dokumentation.
- [ ] Kategorifilter när antalet projekt motiverar det.

### 008 – Fortsatt webbplatsutveckling

**Status:** Parkerad

- [ ] Utvärdera en kompakt logotypvariant för mycket små skärmar.
- [ ] Utvärdera fler språk.
- [ ] Utvärdera nyhets- eller utvecklingslogg.
- [ ] Utvärdera särskilda presentationssidor för färdiga produkter.

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
