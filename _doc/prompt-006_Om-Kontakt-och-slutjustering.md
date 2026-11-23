---
id: prompt-006
status: aktuell
projekt: VizWay-web
typ: nytt-uppdrag
---

# Uppdrag 006 – Om VizWay, Kontakt och slutjusteringar

## 1. Syfte

Färdigställ VizWays första publicerbara webbplats.

Arbeta i `/workspace`. Läs `AGENTS.md`, `README.md` och `STATUS.md`.

Använd följande godkända textunderlag:

- `_doc/Om-VizWay.md`
- `_doc/Kontakt.md`

Läs filerna innan implementationen. Bevara deras budskap och formuleringar. Ändra inte originalfilerna.

**Designprincip:** Besökaren ska alltid känna igen VizWay, men varje del av webbplatsen får ha sin egen karaktär.

## 2. En gemensam VizWay-logotyp

Inför **en enda central logotypkomponent** som används på samtliga sidor.

Utgå från den befintliga SVG-logotypen i `HeroLogo.astro`.

Föreslagen placering:

`src/components/BrandLogo.astro`

Krav:
- Samma SVG-geometri, färger, stjärna och slogan överallt.
- Slogan: *Visionary Intelligent Zystems*.
- Kursiv slogan i Title Case.
- Inga separata kopior av logotypens SVG-kod.
- Storlek och placering får anpassas med CSS.
- Proportionerna ska bevaras.
- Undvik att logotypen blir oproportionerligt liten vid smalare fönster.
- Behåll god kontrast på alla sidor.

Anpassa `HeroLogo.astro` och `SiteHeader.astro` så att de återanvänder den centrala komponenten.

Undvik att visa logotypen dubbelt på samma sida.

## 3. Sidan Om VizWay

Adress: `/om/`

Använd innehållet i `_doc/Om-VizWay.md`.

Presentation:
- Personlig, förtroendeingivande och framåtblickande.
- Varmare uttryck än systemsidorna.
- Tydliga rubriker och luftiga textavsnitt.
- Diskreta VizWay-accenter i turkos.
- Ingen traditionell CV-layout.
- Ingen omfattande uppräkning av tidigare arbetsgivare.

Sidan ska förmedla erfarenhet, nyfikenhet och förmågan att omsätta idéer till fungerande system.

Använd befintlig Astro-struktur och lagra innehållet i `src/content/pages/om.md`.

## 4. Sidan Kontakt

Adress: `/kontakt/`

Använd innehållet i `_doc/Kontakt.md`.

Presentation:
- Enkel, luftig och välkomnande.
- Samma VizWay-logotyp.
- Tydligt kontaktalternativ.
- Klickbar e-postadress med `mailto:`.
- God läsbarhet på mobil.

Använd endast bekräftade kontaktuppgifter från underlaget.

Skapa inget kontaktformulär i detta skede. En sådan funktion kräver separat hantering av leverans, spam och personuppgifter.

Lagra innehållet i `src/content/pages/kontakt.md`.

## 5. Systemöversikten – klickbara kort

På `/system/` ska hela ytan på varje systemkort vara klickbar.

Krav:
- Klick var som helst på kortet öppnar motsvarande systemsida.
- Hover-effekten ska tydligt motsvara klickytan.
- Tangentbordsnavigering ska fungera.
- Synlig fokusmarkering.
- Texten "Läs mer" får finnas kvar som visuell hänvisning.
- Undvik nästlade länkar och dubbelklickbara element.
- Behåll kortens befintliga utseende.

Ändra inte projektbeskrivningar eller statusklassificeringar utan anledning.

## 6. Gemensam navigering

Alla sidor ska ha ett konsekvent navigationskoncept.

- Startsidan behåller sin visionära helskärmsdesign.
- Utforska! leder till systemöversikten.
- Från systemöversikten ska man kunna nå Om VizWay och Kontakt.
- Logotypen på undersidor kan fungera som länk till startsidan.
- Navigeringen ska vara tillgänglig även på mobil.

Undvik onödiga menyer och navigationsalternativ.

## 7. Visuella riktlinjer

**Startsidan:** Mjuk, poetisk, visionär.

**Systemöversikten och systemsidorna:** Teknisk, exakt, strukturerad.

**Om VizWay:** Personlig, erfaren, nyfiken och framåtblickande.

**Kontakt:** Enkel, tydlig och välkomnande.

Gemensamt:
- Samma logotyp och slogan.
- Samma grundläggande färgidentitet.
- Samma kvalitetskrav på typografi och responsivitet.
- Konsekventa interaktioner.

Skapa inga nya bakgrundsbilder. Använd CSS för eventuella nya grafiska detaljer.

## 8. Teknisk implementation

- Återanvänd befintliga Astro-komponenter och layouter.
- Minimera kodduplicering.
- Behåll innehåll i Markdown/YAML.
- Behåll befintligt ljust och mörkt tema.
- Lägg inte till onödiga beroenden.
- Bevara befintliga adresser.
- Ändra inte startsidans bakgrund eller poetiska text.

## 9. Kontroll inför publicering

Verifiera följande:

1. `npm run build` lyckas.
2. Alla befintliga sidor genereras.
3. Samtliga interna länkar fungerar.
4. Alla systemkort är klickbara.
5. Logotypen visas korrekt på alla sidor.
6. Inga saknade bilder eller typsnitt.
7. Responsiv design vid 320, 390, 768 och 1440 px.
8. Tangentbord och fokusmarkering fungerar.
9. Båda färgtemana fungerar.
10. Kontaktadressen är klickbar.
11. Inga kvarvarande testtexter eller exempelprojekt presenteras som verkliga produkter.
12. Kontrollera att statiska resurser och länkar fungerar när `dist/` serveras över HTTP.

Uppdatera `README.md` och `STATUS.md`.

Lägg en tydligt daterad sektion överst i `STATUS.md` med:
- Genomförda ändringar.
- Verifierade funktioner.
- Kända begränsningar.
- Kvarstående arbete inför publicering.

## 10. Avgränsning

- Gör ingen Git-commit.
- Publicera ingenting.
- Ändra inte `_doc/` eller tidigare promptfiler.
- Lägg inte till nya system eller påhittade företagsuppgifter.
- Gör inga större omarbetningar av redan godkänd design.

## Acceptanskriterium

VizWay har en sammanhängande, responsiv och tekniskt fungerande webbplats med:

- Visionär startsida.
- Systemöversikt och systemsidor.
- Om VizWay.
- Kontakt.
- En gemensam SVG-logotyp.
- Genomtänkt navigering.

Webbplatsen ska vara redo för en sista manuell granskning före publicering.
