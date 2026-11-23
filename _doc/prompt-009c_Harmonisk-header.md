
---
id: prompt-009c
projekt: VizWay-web
typ: revision
reviderar: prompt-009a
status: aktuell
prioritet: P2
---

# Uppdrag 009c – Harmonisk och responsiv header

## 1. Syfte

Förfina VizWays header till en harmonisk komposition som fungerar på både dator och mobil.

Detta är en visuell revision av 009a.

Behåll den fungerande språk- och temahanteringen.
Behåll webbplatsens befintliga grafiska identitet.

### Läs först
- AGENTS.md
- README.md
- STATUS.md
- _doc/ATT-GÖRA.md

Undersök:
- SiteHeader.astro
- LanguageSwitcher och temaväljare
- BrandLogo.astro
- src/styles/global.css
- Befintliga responsiva CSS-regler

Kontrollera git status före ändringar.

Ändra inte pågående arbete från andra uppdrag.

## 2. Designprincip

Headern ska uppfattas som en sammanhållen enhet.

På dator:
- Logotyp och slogan till vänster.
- En tvådelad högeryta.
- Planeter överst i högerytan.
- Centrerad meny underst i högerytan.

På mobil:
- Centrerad logotyp och slogan.
- Centrerade planeter under logotypen.
- Centrerad meny under planeterna.
- Menyn får använda flera rader.

Inga komponenter ska hoppa mellan oförutsedda positioner.

## 3. Datorlayout

Använd en gemensam huvudstruktur med två kolumner.

### Vänster kolumn
Innehåller:
- VizWays gemensamma SVG-logotyp.
- Slogan: Visionary Intelligent Zystems.

Logotyp och slogan bildar tillsammans ett vertikalt block.

### Höger kolumn
Delas i två rader.

Övre raden:
- Temakontroll till höger.
- Språkkontroll längst till höger.

Nedre raden:
- Huvudmenyn.
- Menyn är horisontellt centrerad i högerkolumnen.
- Menyn får radbrytas om utrymmet kräver det.

### Höjder

Högerkolumnens totala höjd ska visuellt motsvara
vänsterkolumnens logotyp inklusive slogan.

Fördela utrymmet så att kontrollerna ligger i den övre delen
och menyn i den nedre delen.

Använd CSS Grid eller en motsvarande robust layoutlösning.

Undvik absoluta positioner och hårdkodade pixelkoordinater.

### Principskiss

    +----------------------------------------------------------+
    |                           |                       ☯  🇬🇧 |
    |  VizWay                   |                              |
    |  Visionary Intelligent    |  Start  System  Om  Kontakt   |
    |  Zystems                 |                              |
    +----------------------------------------------------------+

Skissen anger placering, inte exakta mått.

Använd den befintliga SVG-logotypen och slogans befintliga
utformning.

## 4. Mobillayout

När det inte längre finns tillräckligt utrymme för den
horisontella kompositionen ska headern övergå till en
centrerad vertikal layout.

Ordningen ska alltid vara:

1. Logotyp och slogan.
2. Tema- och språkkontroller.
3. Huvudmeny.
4. Sidans innehåll.

### Principskiss

                 VizWay
       Visionary Intelligent Zystems

                  ☯   🇬🇧

          Start  System  Om VizWay
                 Kontakt

    -----------------------------------
    VIZWAY / SYSTEMS

    ...

### Krav

- Logotyp och slogan är centrerade.
- Planeterna är centrerade på en gemensam rad.
- Menyn är centrerad.
- Menyn får automatiskt radbrytas.
- Alla menyrader är centrerade.
- Ingen horisontell rullning får uppstå.
- Meny och planeter får aldrig överlappa.
- Logotypen skalas proportionellt.

Använd en brytpunkt som bestäms av det faktiska utrymmet.

Behåll inte datorlayouten så länge att innehållet blir trångt.

## 5. Planetkontroller

Tema och språk ska upplevas som två diskreta,
visuellt balanserade kontroller.

### Gemensam utformning

- Likvärdig synlig storlek.
- Likvärdig klickyta.
- Samma vertikala position.
- Diskret utseende.
- Ingen permanent textetikett.
- Ingen kraftig bakgrundsplatta.

### Ringar

Ta bort de permanenta dekorativa ringarna som utgångspunkt.

Behåll:
- En diskret hover-effekt.
- Synlig tangentbordsfokus.
- Tillräckliga klickytor.

Använd inte hover som enda indikation på att kontrollerna
är interaktiva.

Om helt ringlösa kontroller blir otydliga får en mycket
diskret alternativ utformning användas.

Redovisa då kort varför.

### Temakontroll

- Behåll yin-yang-symbolen ☯.
- Klick växlar mellan ljust och mörkt tema.
- Behåll befintlig lagring av temaval.
- Behåll tillgängligt namn som beskriver åtgärden.
- Temakontrollen ska inte ändra storlek vid växling.

## 6. Språkkontroll – visa målspråket

Ändra nuvarande beteende så att flaggan visar det språk
besökaren kan växla TILL.

### Svenska sidor

Visa brittisk flagga 🇬🇧.

Klick öppnar motsvarande engelska sida.

Tillgängligt namn:
"Switch to English"

### Engelska sidor

Visa svensk flagga 🇸🇪.

Klick öppnar motsvarande svenska sida.

Tillgängligt namn:
"Byt till svenska"

### Krav

- Endast en flagga är synlig.
- Flaggan är en riktig länk.
- Behåll sidberoende språkbyte.
- Behåll befintliga svenska och engelska URL:er.
- Återanvänd befintliga SVG-flaggor om sådana finns.
- Installera inga externa ikonbibliotek.

Exempel:

/system/vizos/ → /en/system/vizos/

/en/system/bos/ → /system/bos/

Språkväljaren får inte skicka besökaren till startsidan
när motsvarande sida finns.

## 7. Startsidan

Den visionära startsidan saknar den vanliga huvudmenyn.

Behåll detta.

Anpassa vid behov dess separata språkkontroll så att den
följer samma princip:

- Flaggan visar målspråket.
- Kontrollen är diskret.
- Den stör inte logotyp eller huvudrubrik.
- Den fungerar på mobil och dator.

Inför inte den vanliga headern på startsidan.

Lägg inte till en temakontroll på startsidan utan särskilt
designbeslut.

## 8. Bevara

Ändra inte:
- Svenska eller engelska brödtexter.
- Projektens statusklassificeringar.
- Systemkortens funktioner.
- Systemsidorna utanför headern.
- Footer.
- Webbadresser.
- HTML-språk och SEO-metadata.
- Typografiska principer.
- Startsidesbakgrunden.
- VizWays logotypgeometri.

Behåll förbättringarna från 009a och 009b.

Tidigare godkänd högerjustering av systemstatus ska finnas kvar.

## 9. Verifiering

Kör npm run build.

Verifiera följande skärmstorlekar:
- 320 px
- 390 px
- 560 px
- 768 px
- 1024 px
- 1440 px

Testa båda språkversionerna och båda temana.

Kontrollera särskilt:

1. Datorns logotyp till vänster och tvådelade högeryta.
2. Planeternas placering längst upp till höger.
3. Menyns centrering i högerytan.
4. Brytpunkten mellan dator och mobil.
5. Mobilens centrerade logotyp.
6. Mobilens centrerade planeter.
7. Mobilens centrerade flerradiga meny.
8. Att inga element överlappar.
9. Att ingen horisontell rullning uppstår.
10. Att flaggan visar målspråket.
11. Att språkbyte behåller aktuell sida.
12. Att temavalet fungerar och sparas.
13. Att tangentbordsnavigation fungerar.
14. Att systemstatus fortfarande är högerjusterad.

Om möjligt, verifiera även förstoring till 200 %.

Rapportera tester som inte har kunnat genomföras.

## 10. Dokumentation

Uppdatera STATUS.md med:
- Genomförda ändringar.
- Ändrade filer.
- Vald responsiv princip.
- Testresultat.
- Kända avvikelser.

Uppdatera README.md endast om den tekniska beskrivningen
av headern behöver ändras.

Ändra inte tidigare promptfiler.

## 11. Leverans

Gör ingen Git-commit.

Publicera ingenting.

Rapportera kort:
- Vad som ändrats.
- Hur brytpunkten valdes.
- Hur flaggväxlingen fungerar.
- Eventuella kvarvarande designfrågor.

## Acceptanskriterium

Headern är visuellt harmonisk och konsekvent.

På dator bildar logotypen och den tvådelade högerytan
en sammanhållen komposition.

På mobil är logotyp, planeter och meny centrerade i
tre tydliga nivåer.

Tema- och språkkontrollerna är diskreta och fungerar
oberoende av språk och fönsterstorlek.

Språkflaggan visar alltid målspråket.

