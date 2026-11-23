
---
id: prompt-009
projekt: VizWay-web
typ: nytt-uppdrag
status: aktuell
prioritet: P2
att-gora: 004
---

# Uppdrag 009 – Internationell webbplats med engelska

## 1. Syfte
Utöka VizWays webbplats med en fullständig engelsk språkversion.

Svenska ska fortsätta vara standardspråk.
Engelska ska vara tillgängligt under `/en/`.

Båda språkversionerna ska:
- Ha samma funktioner.
- Använda samma komponenter.
- Ha samma visuella identitet.
- Ha separata, redigerbara texter.
- Kunna underhållas utan duplicerad programlogik.

**Designprincip:** One identity. Two languages.

Läs innan arbetet:
- `AGENTS.md`
- `README.md`
- `STATUS.md`
- `_doc/ATT-GÖRA.md`

Undersök även befintlig Astro-konfiguration, innehållsscheman och sidstruktur.

Kontrollera `git status` före ändringar.

## 2. Språk och webbadresser

Använd:
- Svenska: `sv`
- Engelska: `en`

Svenska är standardspråk och ska inte ha något språkprefix.

Exempel:

| Svenska | Engelska |
| --- | --- |
| `/` | `/en/` |
| `/system/` | `/en/system/` |
| `/om/` | `/en/om/` |
| `/kontakt/` | `/en/kontakt/` |

Alla befintliga systemsidor ska få en motsvarande engelsk sida.

Behåll befintliga systemidentifierare och URL-slugs om möjligt.

Viktigt:
- Ändra inte befintliga svenska adresser.
- Skapa inga automatiska språkredirects utifrån webbläsarens språk.
- Låt besökaren själv välja språk.
- Alla sidor ska kunna byggas statiskt och publiceras på nuvarande webbhotell.

## 3. Astro och arkitektur

Undersök Astros befintliga internationaliseringsstöd.

Föredra Astros inbyggda i18n-funktioner om de passar nuvarande version och projektarkitektur.

Önskad princip:

- `defaultLocale: sv`
- `locales: sv, en`
- `prefixDefaultLocale: false`

Anpassa den faktiska konfigurationen efter Astros dokumenterade API.

Skapa en gemensam språkhantering för:
- Sidornas länkar.
- Menytexter.
- Rubriker i gemensamma komponenter.
- Statusbeteckningar.
- Kategorier.
- Språkväljare.
- SEO-metadata.

Undvik duplicerade Astro-komponenter när samma komponent kan ta ett språk som parameter.

Befintlig fungerande arkitektur har företräde framför en omfattande omstrukturering.

## 4. Innehåll och översättning

Alla nio befintliga sidor ska få engelska motsvarigheter:
- Startsidan.
- Systemöversikten.
- Fem systemsidor.
- Om VizWay.
- Kontakt.

Använd nuvarande svenska Markdown/YAML-filer som källa.

Skapa separata engelska innehållsfiler.

Varje språkversion ska kunna redigeras oberoende utan att kod behöver ändras.

Behåll tydlig koppling mellan motsvarande svenska och engelska systemposter.

### Översättningsprinciper

Översätt naturligt och professionellt.

- Bevara betydelse och ton.
- Undvik stel ordagrann översättning.
- Lägg inte till nya fakta eller produktfunktioner.
- Skilj befintliga funktioner från framtida utvecklingsmål.
- Översätt inte produktnamn.
- Behåll VizWays identitet och personlighet.

Lämna inte svenska ord eller meningar i engelska gränssnitt, förutom egennamn och varumärken.

## 5. Startsidan

Den engelska startsidan ska ha exakt samma visuella komposition som den svenska.

Behåll:
- Bakgrundsbilden.
- Den centrala SVG-logotypen.
- Ljusspåret och stjärnan.
- Typografin.
- Komponenternas placering.
- Utforska-knappens utseende.

Slogan ska vara oförändrad:

*Visionary Intelligent Zystems*

### Engelsk huvudrubrik

**We see possibilities**

"possibilities" ska ha samma turkosa formgivning som svenska "möjligheter".

### Poetisk text

Använd följande engelska grundversion:

In obstacles, we see paths to the future

From vision, direction emerges

From direction, systems take shape

And everything points forward

Behåll fyra poetiska rader.

Anpassa vid behov radbrytning, teckenstorlek och avstånd responsivt utan att ändra svenska versionen.

### Knapp

Svenska: Utforska!
Engelska: Explore!

Engelsk knapp ska länka till `/en/system/`.

## 6. Systemöversikten

Översätt:
- Sidrubrik och introduktion.
- Kategorier.
- Systembeskrivningar.
- Statusbeteckningar.
- Knappar och länkar.
- Övrig synlig gränssnittstext.

Föreslagen huvudrubrik:

**Visions become systems.**

Behåll systemnamnen:
- BOS
- Bygga Välstånd
- KvittoApp
- VizOS
- Viz AI Core

Översätt systemens beskrivande texter, men inte deras namn.

Behåll statusens sakliga betydelse.

KvittoApps OCR → SIE-del är ännu inte färdig och ska inte presenteras som en färdig produkt.

Alla systemkort ska fortsätta vara klickbara över hela sin yta.

Engelska systemkort ska öppna engelska systemsidor.

## 7. Om VizWay

Översätt befintligt innehåll från den svenska sidan.

Engelsk titel:

**About VizWay**

Ton:
- Personlig.
- Erfaren.
- Nyfiken.
- Framåtblickande.
- Professionell utan överdriven marknadsföring.

Bevara företagets historik och de verifierade uppgifterna.

Lägg inte till nya biografiska detaljer.

## 8. Kontakt

Engelsk titel:

**Contact**

Översätt den svenska kontakttexten naturligt.

Använd samma offentliga e-postadress:

`info@vizway.se`

Behåll en fungerande `mailto:`-länk.

Skapa inget kontaktformulär.

## 9. Språkväljare

Inför ett diskret språkval:

**SV | EN**

Krav:
- Synligt och lätt att använda.
- Samma funktion på samtliga sidor.
- Den valda språknivån ska framgå tydligt.
- Tangentbordsnavigering ska fungera.
- Använd riktiga länkar, inte onödig JavaScript.
- Följ befintlig responsiv design.

### Sidberoende språkbyte

Om besökaren befinner sig på:

`/system/vizos/`

ska EN öppna:

`/en/system/vizos/`

Om besökaren befinner sig på:

`/en/om/`

ska SV öppna:

`/om/`

Språkbyte ska inte automatiskt skicka besökaren till startsidan.

Samtliga fem systemsidor måste ha motsvarigheter på båda språken.

### Placering

På undersidorna placeras språkvalet diskret i headern.

På startsidan, som saknar traditionell huvudnavigation, placeras det diskret utan att konkurrera med Utforska-knappen.

Behåll startsidans visuella uttryck.

## 10. HTML och SEO

Säkerställ:
- `lang="sv"` på svenska sidor.
- `lang="en"` på engelska sidor.
- Översatta sidtitlar.
- Översatta metabeskrivningar.
- Korrekta canonical-URL:er.
- `hreflang` för svenska och engelska motsvarigheter.
- Inga dubbla eller felaktiga URL:er.
- Inga interna länkar som av misstag byter språk.

Utgå från den publika domänen:

`https://vizway.se/`

Undvik att indexera duplicerade språkvarianter under alternativa adresser.

Behåll webbplatsen helt statisk.

## 11. Design och typografi

Båda språkversionerna ska använda samma:
- Logotyp.
- Färgteman.
- CSS-variabler.
- Header och footer.
- Komponenter.
- Typografiska principer.
- Responsiva brytpunkter.

Den svenska versionens nyligen godkända typografi ska vara utgångspunkten.

Behåll normal teckenvikt i rubriker och menyer.

Ingen ny grafisk profil ska skapas.

Om engelsk text kräver andra radbrytningar, gör små språkberoende justeringar utan att påverka svenska sidor.

## 12. Dokumentation

Uppdatera:

### README.md
Dokumentera:
- Hur språkhanteringen fungerar.
- Hur nya översättningar läggs till.
- Hur nya system får svenska och engelska innehållsfiler.
- Hur språkvalets länkar skapas.
- Hur översättningar verifieras.

### STATUS.md
Lägg en ny daterad sektion överst med:
- Genomförda ändringar.
- Nya filer och komponenter.
- Verifierade funktioner.
- Kända avvikelser.
- Kvarstående arbete.

### _doc/ATT-GÖRA.md
Uppdatera punkt:

`004 – Engelskspråkig webbplats`

Sätt status till Pågår.

Markera inte punkten som Klar förrän resultatet är manuellt godkänt.

## 13. Verifiering

1. Kör `npm run build`.
2. Verifiera samtliga svenska och engelska sidor.
3. Förväntat antal är minst 18 färdigbyggda HTML-sidor.
4. Kontrollera motsvarande URL:er för båda språken.
5. Kontrollera språkvalet på samtliga sidtyper.
6. Kontrollera systemkortens länkar.
7. Kontrollera header, footer och logotyp.
8. Verifiera mörkt och ljust tema.
9. Testa 320, 390, 768 och 1440 px.
10. Kontrollera att engelska texter inte överlappar eller kapas.
11. Kontrollera att inga horisontella rullningslister uppstår.
12. Verifiera HTML-språk, metadata och hreflang.
13. Kontrollera alla interna länkar med lokal HTTP-server.
14. Verifiera att svenska sidors innehåll och funktioner är oförändrade.

Rapportera om något av testen inte kunnat genomföras.

## 14. Avgränsningar

- Ändra inte ursprungliga svenska texter i onödan.
- Ändra inte tidigare promptfiler.
- Skapa inga nya bakgrundsbilder.
- Ändra inte systemens status eller faktauppgifter.
- Introducera inte nya produktfunktioner.
- Gör ingen Git-commit.
- Publicera ingenting.

## Acceptanskriterium

VizWay har två kompletta språkversioner som använder samma Astro-arkitektur och visuella identitet.

Besökaren kan växla språk på varje sida utan att förlora sitt sammanhang.

Svenska adresser och den befintliga webbplatsen fortsätter fungera precis som tidigare.

**VizWay – Visionary Intelligent Zystems.**

