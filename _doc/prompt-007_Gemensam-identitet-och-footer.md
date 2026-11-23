---
id: prompt-007
status: aktuell
projekt: VizWay-web
typ: nytt-uppdrag
prioritet: P1
---

# Uppdrag 007 – Gemensam identitet och footer

## 1. Syfte

Förbättra VizWays gemensamma visuella identitet med fokus på logotyp, header och footer.

Webbplatsen är publicerad på:

https://vizway.se/

**Viktigt:** Webbplatsen fungerar redan bra, även på mobil. Detta är en avgränsad förbättring, inte en ombyggnad.

Läs innan arbetet påbörjas:
- `AGENTS.md`
- `README.md`
- `STATUS.md`
- `_doc/ATT-GÖRA.md`

Kontrollera även `git status`.

## 2. Granska den publicerade webbplatsen

Öppna https://vizway.se/ i webbläsare och jämför med den lokala utvecklingsversionen.

Granska särskilt:
- Logotypen i mörkt respektive ljust tema.
- Logotypens proportioner vid olika fönsterbredder.
- Headerns bakgrund och avgränsning mot innehållet.
- Sidfotens utseende och placering.
- Navigering och befintliga hover-effekter.

Använd den publicerade webbplatsen som referens för hur den nuvarande versionen faktiskt upplevs.

Om extern webbåtkomst inte fungerar, rapportera begränsningen och använd lokala webbläsartester. Gissa inte om den publicerade sidans utseende.

## 3. Logotyp – proportioner och skalning

VizWay har en central SVG-logotyp som används på alla sidor.

**Problem:** Ordmärket "VizWay" och sloganen "Visionary Intelligent Zystems" förändrar inte alltid storleken proportionellt vid olika fönsterbredder.

Åtgärder:
- Bevara en enda gemensam SVG-logotypkomponent.
- Skala ordmärke, ljusbåge, stjärna och slogan som en sammanhängande grafisk enhet.
- Säkerställ att sloganens storlek och placering alltid står i rätt proportion till ordmärket.
- Behåll sloganen i Title Case och kursiv stil.
- Bibehåll korrekta proportioner utan att förvränga SVG-geometrin.
- Justera logotypens tillgängliga utrymme och storleksregler vid behov.
- Behåll samma logotyp på samtliga sidor.

Undersök särskilt SVG `viewBox`, CSS-storlekar och eventuella separata skalningsregler.

Undvik att skapa flera kopior av samma logotyp för olika skärmstorlekar.

## 4. Logotypens bakgrund

### Mörkt tema

Logotypens bakgrund ska visuellt smälta samman med headern.

- Ingen synlig rektangel runt logotypen.
- Använd samma grundton som headern.
- Undersök möjligheten att använda en mycket diskret stjärnhimmel som dekoration i headerområdet.
- Stjärnorna får inte störa logotypens läsbarhet.
- Undvik kraftiga ljuseffekter.

Målet är en djup, mörk och elegant bakgrund.

### Ljust tema

Behåll i huvudsak nuvarande utseende.

Anpassa endast sådant som behövs för en harmonisk layout och god kontrast.

## 5. Header och footer

Skapa en gemensam visuell princip för webbplatsens övre och nedre band.

- Samma grundläggande färgidentitet.
- Elegantare övergångar mot sidinnehållet.
- Minska känslan av hårda, separata block.
- Använd vid behov diskreta gradienter, toningar eller tunna ljuslinjer.
- Undvik dekorativa effekter som konkurrerar med innehållet.

Header och footer ska rama in webbplatsen men inte dominera den.

Behåll den befintliga navigeringens funktioner.

Startsidan ska fortsätta vara en självständig visionär helskärmsupplevelse. Ändra inte dess komposition eller lägg till en framträdande sidfot som stör den.

## 6. Sitekarta i sidfoten

Utöka den gemensamma sidfoten med en liten, tydlig sitekarta.

Länkar:
- Start
- System
- Om VizWay
- Kontakt

Lägg även till:

**© VizWay**

Krav:
- Texten `VizWay` ska länka till `/kontakt/`.
- Sitekartan ska fungera med mus och tangentbord.
- Använd semantisk HTML.
- God kontrast i ljust och mörkt tema.
- Mobilanpassad layout.
- Ingen onödig JavaScript-kod.

Återanvänd en gemensam footer-komponent.

Detta är en navigerbar sidöversikt i HTML, inte ett uppdrag att skapa en XML-sitemap för sökmotorer.

## 7. Bevara fungerande funktionalitet

Ändra inte:
- Startsidans bakgrund och poetiska text.
- Systemens innehåll eller status.
- Systemkortens klickbara funktion.
- Om VizWays text.
- Kontaktuppgifter eller e-postadress.
- Befintliga sidors adresser.
- Fungerande språk- och temainställningar.

Lägg inte till nya bibliotek om befintlig Astro/CSS räcker.

## 8. Verifiering

1. Kör `npm run build`.
2. Kontrollera samtliga sidor.
3. Testa vid 320, 390, 768 och 1440 px.
4. Kontrollera båda färgtemana.
5. Kontrollera att SVG-logotypens delar skalas proportionellt.
6. Kontrollera att header och footer har harmonisk formgivning.
7. Kontrollera samtliga länkar i footern.
8. Kontrollera att `© VizWay` leder till Kontakt.
9. Kontrollera att systemkorten fortfarande är helt klickbara.
10. Kontrollera att inga horisontella rullningslister uppstår.

Redovisa eventuella visuella avvikelser.

## 9. Dokumentation

Uppdatera:
- `STATUS.md` med tydligt daterad sektion överst.
- `_doc/ATT-GÖRA.md` med uppdaterad status för berörda punkter.
- `README.md` om inställningar eller komponentstruktur förändras.

Ändra inte tidigare promptfiler.

## 10. Avslutning

- Gör ingen Git-commit.
- Publicera ingenting.
- Ändra inte webbhotellets filer.
- Redovisa alla ändrade filer.
- Skilj verifierade resultat från återstående förbättringsförslag.

## Acceptanskriterium

VizWay har en gemensam, proportionerligt skalbar logotyp och ett harmoniskt sammanhållet utseende för header och footer.

Sidfoten innehåller en fungerande sitekarta och en copyright-rad med länk till Kontakt.

Den befintliga mobilupplevelsen är bevarad.

**VizWay ska vara lika lätt att känna igen på varje sida, oavsett hur sidans innehåll och karaktär skiljer sig.**
