
---
id: prompt-008
projekt: VizWay-web
typ: nytt-uppdrag
status: aktuell
prioritet: P2
att-gora: 006
---

# Uppdrag 008 – Visuell och typografisk förfining

## 1. Syfte
Förfina webbplatsens typografi och visuella hierarki.
VizWay ska kännas elegant, lättläst, modernt och genomtänkt.

**Grundprincip:** Rubriker ska framträda genom typsnitt, storlek, färg och placering – inte genom kraftig fetstil.

Detta uppdrag ska genomföras innan vi bygger den engelskspråkiga versionen.

Läs innan arbetet:
- `AGENTS.md`
- `README.md`
- `STATUS.md`
- `_doc/ATT-GÖRA.md`

Undersök befintlig Astro- och CSS-struktur.
Kontrollera `git status` innan några filer ändras.

## 2. Typografisk grundprincip

Använd normal teckenvikt som utgångspunkt för:
- Sidrubriker (h1–h3).
- Navigeringsmenyer.
- Projektkortens rubriker.
- Sektionsrubriker.
- Länkar som fungerar som menyval.
- Knappar där fetstil inte är nödvändig.

Utgå från `font-weight: 400`.

Använd `500` eller annan lämplig vikt endast när läsbarheten eller den valda fontens egenskaper motiverar det.

**Viktigt:**
- Ta inte bort semantisk betoning i löpande text.
- Behåll avsiktligt markerade ord i fetstil.
- Bevara statusetiketternas tydlighet.
- Ändra inte VizWay-logotypens SVG eller typografi.
- Ändra inte enbart för att få samma vikt överallt.

## 3. Central typografisk styrning

Undersök var typografi och teckenvikter definieras idag.

Samla gemensamma typografiska inställningar i `src/styles/global.css` när det är lämpligt.

Använd exempelvis CSS-variabler för:
- Rubrikernas teckenvikt.
- Menyernas teckenvikt.
- Brödtextens teckenvikt.
- Typsnitt för rubriker och brödtext.

Undvik att skapa ett överkomplicerat designsystem.

Behåll befintliga typsnitt i denna revision, om inte ett konkret problem kräver något annat.

Undvik onödiga CSS-överskrivningar och duplicerade regler.

## 4. Rubriker och läsbarhet

Granska:
- Rubrikernas storlek och proportioner.
- Avstånd mellan rubriker och brödtext.
- Textbredd och radlängd.
- Radavstånd.
- Styckeavstånd.
- Balansen mellan rubrik, ingress och innehåll.

Målet är att skapa en lugn och tydlig läsrytm.

Rubriker ska vara framträdande men inte dominera i onödan.

Anpassa vid behov typografin responsivt med CSS.

## 5. Navigering och knappar

Granska header, footer och övriga menyer.

- Ta bort onödigt fet typografi.
- Behåll tydliga hover-effekter.
- Behåll synlig tangentbordsfokus.
- Behåll samma navigeringsstruktur.
- Ändra inte länkmål.
- Se till att aktiv sida fortfarande framgår tydligt.

Bedöm om temaväljaren visuellt dominerar för mycket.

Om en mindre justering ger bättre balans får den genomföras, men förändra inte dess funktion.

## 6. Systemöversikten

Granska särskilt `/system/`.

- Rubriken "Visioner blir system."
- Introduktionens textbredd och radavstånd.
- Avstånd mellan introduktion och projektgrupper.
- Projektkortens rubriker.
- Statusetiketter.
- Länkar och visuella markeringar.

Bevara den tekniska och precisa karaktären.

Behåll alla projektkort helt klickbara.

Ändra inte projektens innehåll, utvecklingsstatus eller adresser.

## 7. De fyra sidornas karaktär

### Start
Visionär, poetisk och mjuk.
Behåll den befintliga kompositionen, bakgrunden och texten.

### System
Teknisk, strukturerad och exakt.
Tydlig informationshierarki utan onödigt tunga rubriker.

### Om VizWay
Personlig, erfaren och framåtblickande.
Lugn och behaglig läsrytm med tydlig textstruktur.

### Kontakt
Enkel, välkomnande och lätt att använda.
Kontaktinformationen ska vara tydlig utan överdriven visuell tyngd.

**Gemensamt:** Samma VizWay-identitet, logotyp och grundläggande typografiska principer.

## 8. Avgränsningar

- Behåll samma centrala SVG-logotyp på alla sidor.
- Ändra inte bakgrundsbilderna.
- Ändra inte innehållstexterna.
- Ändra inte navigeringens funktion.
- Ändra inte systemsidornas innehåll eller status.
- Behåll befintlig header och footer.
- Ändra inte befintliga webbadresser.
- Inför inte engelska ännu.
- Lägg inte till nya bibliotek i onödan.

Tidigare noterat problem med sloganens bakgrund i ljust tema ingår inte i denna revision.

## 9. Verifiering

1. Kör `npm run build`.
2. Kontrollera alla sidtyper.
3. Testa vid 320, 390, 768 och 1440 px.
4. Kontrollera ljust och mörkt tema.
5. Kontrollera läsbarhet och kontrast.
6. Kontrollera rubriker, menyer och projektkort.
7. Verifiera att systemkorten fortfarande är klickbara.
8. Verifiera navigering och tangentbordsfokus.
9. Kontrollera att inga texter överlappar eller kapas.
10. Kontrollera att inga horisontella rullningslister uppstår.

Jämför gärna med den publicerade versionen på:
https://vizway.se/

Publicera inte ändringarna.

## 10. Dokumentation

Uppdatera:
- `STATUS.md` med en tydligt daterad sektion.
- `_doc/ATT-GÖRA.md`, punkt 006.
- `README.md` om den centrala typografiska konfigurationen ändras.

Markera inte punkt 006 som helt klar förrän resultatet har godkänts manuellt.

Redovisa:
- Ändrade filer.
- Centrala CSS-inställningar.
- Genomförda tester.
- Eventuella kvarstående problem.

## 11. Avslutning

Gör ingen Git-commit.
Publicera ingenting.
Ändra inte tidigare promptfiler.

## Acceptanskriterium

En elegantare och luftigare webbplats med normal teckenvikt i rubriker och menyer, konsekvent typografisk hierarki och bibehållen funktionalitet.

Den ska fortfarande upplevas som VizWay på alla sidor, men varje sida ska behålla sin egen karaktär.

**Visionen ska kännas. Ingenjörskonsten ska märkas.**

