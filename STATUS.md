# Harmoniskt sidhuvud, 23 november 2026

Uppdrag 009c är genomfört och verifierat lokalt.

## Genomförda ändringar

- På dator ligger logotyp och slogan till vänster. Kontrollerna ligger upptill till höger och menyn är centrerad nedtill i högerkolumnen. På mobil ligger logotypen, kontrollerna och menyn i tre centrerade nivåer.
- Språkvalet visar brittisk flagga på svenska sidor och svensk flagga på engelska sidor. Länken öppnar motsvarande sida på målspråket. Startsidornas fristående språkval använder samma komponent.
- Kontrollerna har samma klickyta på 44 × 44 pixlar. En svag toning markerar klickytan även utan hovring. Tangentbordsfokus är synligt.

## Responsiv princip

- CSS Grid växlar till två kolumner när sidhuvudet är minst 43 rem brett. Måttet ger plats för logotypen, den bredare engelska menyn, mellanrummet och sidmarginalerna. Menyflexen centrerar varje rad.
- Undersidorna reserverar utrymme för en klassisk rullningslist för att hålla sidhuvudets position vid byte mellan språkversioner med olika sidlängd.

## Verifiering

- `npm run build` byggde 18 sidor. Testade dem i Chrome vid 320, 390, 560, 768, 1 024 och 1 440 pixlar i båda språken och temana.
- Kontrollerade brytpunkten, centreringen, att kontrollerna ryms, och att layouten saknar överlappning och horisontell rullning. Testade språkbyte åt båda hållen för samtliga sidpar samt sparat tema, tangentbordsfokus, klickbara systemkort och högerjusterad systemstatus.
- Testade även 200 % sidzoom i Chrome i fönster på 768 och 1 440 pixlar i båda språken och temana. HTTP-kontrollen bekräftade att sidtexter, metadata och befintliga länkmål matchar referensbygget.

## Ändrade filer

- `src/components/SiteHeader.astro`, `src/components/LanguageSwitcher.astro` och `src/styles/global.css`.
- `STATUS.md`.

## Visuella avvikelser

- Vid 320 pixlar använder den engelska menyn två centrerade rader. Klassiska rullningslister kan lämna ett reserverat utrymme till höger på korta undersidor.

# Tidigare status för engelsk textgranskning, 23 november 2026

Uppdrag 009b är genomfört och verifierat lokalt.

## Genomförda ändringar

- Startsidans första engelska versrad är nu *In every obstacle, we see a path forward*. Dikten behåller fyra rader och samma typografi.
- Om VizWay använder formuleringen *thoughtfully designed systems* och HTML-sidtiteln **About VizWay | VizWay**. Sidramens ändring gäller titelberäkningen. Den synliga rubriken är kvar.
- VizOS beskrivs som *a reproducible and manageable IT environment*. Bygga Välstånd behåller sitt produktnamn och får förklaringen *Building Prosperity* vid första omnämnandet i brödtexten.
- KvittoApp förklarar SIE som en svensk standard för utbyte av bokföringsdata. Texten anger fortsatt att OCR → SIE är under utveckling.
- Det engelska statusnamnet för `ide` är **Concept**. Statusvärdet och den svenska beteckningen **Framtida idé** har bevarats.

## Verifiering

- `npm run build` byggde alla 18 sidor. Jämförde engelska texter, sidtitlar och metabeskrivningar över lokal HTTP. Samtliga svenska HTML-sidor och gemensamma resurser var byte för byte identiska med referensbygget.
- Verifierade interna länkar och testade språkbytet i båda riktningarna i Chrome vid 320, 390, 768 och 1 440 pixlar i ljust och mörkt tema. Den engelska versen visades på fyra rader och ingen text kapades horisontellt vid de testade bredderna.

# Tidigare status för sidhuvud och systemstatus, 23 november 2026

Uppdrag 009a är genomfört och verifierat lokalt.

## Genomförda ändringar

- Sidhuvudet använder CSS Grid. Logotypen, temaknappen och språkvalet ligger på första raden. Huvudmenyn ligger under och radbryts vid behov.
- Temaknappen har en yin-yang-symbol, en lokaliserad etikett och en markerad status för mörkt tema. Språkvalet visar det aktiva språkets flagga och länkar till samma sida på det andra språket. Båda kontrollerna är 44 × 44 pixlar med standardinställd textstorlek.
- Tillbakalänken ligger till vänster och statusetiketten till höger på systemsidorna. Etikettens färger, texter och utvecklingsstatus har bevarats.

## Verifiering

- `npm run build` byggde 18 sidor. Testade samtliga sidor i Chrome vid 320, 390, 560, 768 och 1 440 pixlar i båda språken och temana.
- Verifierade att huvudmenyn ligger under första raden, att kontrollerna håller sin position vid språk- och temabyte och att första raden ryms utan överlappning eller horisontell rullning.
- Testade språkbyte åt båda hållen för alla nio sidpar. Verifierade temaväxling, sparat tema, synligt tangentbordsfokus och systemkortens hela klickyta.
- Jämförde alla sidors innehåll, metadata och befintliga länkmål med referensbygget. Startsidornas hero-layout och bakgrund hade samma mått.

## Ändrade filer

- `src/components/SiteHeader.astro`, `src/components/ThemeToggle.astro` och `src/components/LanguageSwitcher.astro`.
- `src/layouts/SystemLayout.astro` och `src/styles/global.css`.
- `STATUS.md`.

## Visuella avvikelser

- Vid 320 pixlar skalas sidhuvudets logotyp ned proportionellt och den engelska huvudmenyn använder två rader under kontrollerna.
- Startsidornas helskärmslayout behåller sitt fristående språkval, som nu visas med flagga.

# Tidigare status för engelsk språkversion, 23 november 2026

Uppdrag 009 är genomfört och verifierat lokalt. Punkt 004 i [ATT-GÖRA.md](_doc/ATT-GÖRA.md) inväntar manuellt godkännande.

## Genomförda ändringar

- Svenska finns kvar på de ursprungliga adresserna. Alla nio sidor har en engelsk motsvarighet under `/en/`. Språket väljs med **SV | EN**, som länkar till samma sida på det andra språket.
- Båda språkversionerna använder gemensamma Astro-komponenter och CSS. Systemens identifierare, status, kategori och ordning hämtas från de svenska posterna. Kontaktadressen används på båda språken.
- Sidramen anger sidans språk, titel, beskrivning, kanoniska adress och språkalternativ för svenska och engelska.

## Nya filer och komponenter

- `astro.config.mjs` konfigurerar Astros statiska språkstyrning. `src/lib/i18n.ts` skapar översatta länkar och hämtar etiketter. `src/components/LanguageSwitcher.astro` visar språkvalet.
- Engelska sidfiler finns under `src/pages/en/`. Delade sidkomponenter finns i `src/views/`. Svenska och engelska adresser använder samma komponenter.
- Nio engelska Markdown-filer finns i `src/content/en/`. Gränssnittstexter finns i `src/content/ui/sv.yaml` och `src/content/ui/en.yaml`. [README.md](README.md) beskriver hur språkversionerna underhålls.

## Verifiering

- `npm run build` byggde 18 statiska HTML-sidor. En lokal HTTP-server verifierade samtliga sidor, länkar och resurser, båda språkens metadata och att webbläsarens språkpreferens inte ändrar sidans språk.
- Testade samtliga nio sidpar i båda riktningarna i Chrome vid 320, 390, 768 och 1 440 pixlar i ljust och mörkt tema. Verifierade pekare, tryck och tangentbord, sparat tema, systemkortens hela klickyta och att texter rymdes utan horisontell rullning.
- Jämförde de nio svenska sidornas innehåll och befintliga länkmål med referensbygget. Startsidans komposition och bakgrund hade samma mått.

## Kända avvikelser och kvarstående arbete

- Den engelska versen har något mindre typgrad och normal teckenspärr vid högst 22 rem för att behålla fyra rader. Svenska använder sina tidigare typografiska regler.
- Manuell granskning och godkännande av den engelska språkversionen återstår.

# Tidigare status för visuell och typografisk förfining, 23 november 2026

Uppdrag 008 är genomfört och verifierat lokalt. Punkt 006 i [ATT-GÖRA.md](_doc/ATT-GÖRA.md) inväntar manuellt godkännande.

## Genomförda ändringar

- `global.css` styr rubriker, brödtext och menyer med separata teckenvikter. Grundvikten är 400 för alla tre. Typsnittet är fortsatt systemets sans-serif där den gemensamma typografin används.
- Textavsnitten använder radavstånd 1,65 och en maximal radbredd på 65 teckenmått (`ch`). Systemingressen har fått något kortare rader. Rubrikernas storlek och mellanrum ger tydligare nivåer.
- Projektkort, menyval och temaväljare har lättare typografi. **Utforska!** och e-postadressen använder vikten 500. Fetstil i löpande text och statusetiketternas vikt har bevarats.

## Verifiering

- `npm run build` byggde nio sidor. Granskade alla nio i Chrome vid 320, 390, 768 och 1 440 pixlar i ljust och mörkt tema.
- Kontrollerade textkontrast, radbrytning, tangentbordsfokus, temaväxling, sidfotens länkar och systemkortens hela klickyta. Ingen horisontell rullning observerades.
- Startsidans layoutmått, bakgrund och logotypens typografi matchade det lokala utgångsläget. Före ändringen matchade startsidan och systemöversikten den publicerade versionen visuellt i båda temana. [VizWay](https://vizway.se/)

## Ändrade filer

- Gemensam typografi i `src/styles/global.css`.
- Komponenter i `src/components/SiteFooter.astro`, `src/components/hero/HeroExplore.astro`, `src/components/systems/SystemBanner.astro`, `src/components/systems/SystemCard.astro` och `src/components/systems/SystemSection.astro`.
- Layouter i `src/layouts/PageLayout.astro` och `src/layouts/SystemLayout.astro`. Sidstilar i `src/pages/kontakt.astro` och `src/pages/system/index.astro`.
- Dokumentation i `README.md`, `STATUS.md` och `_doc/ATT-GÖRA.md`.

## Kvarstående

- Manuell granskning och godkännande av typografin återstår. Den separata punkten om sloganens bakgrund i ljust tema ligger kvar.

# Tidigare status för gemensam identitet och sidfot, 23 november 2026

Uppdrag 007 är genomfört och verifierat i det lokala bygget.

## Jämförelse med publicerad version

- Före ändringen matchade den publicerade startsidan och systemöversikten det lokala utgångsläget pixel för pixel i Chrome vid 320, 390, 768 och 1 440 pixlar i båda temana. Huvudnavigationens hovring matchade också. [VizWay](https://vizway.se/)
- Den publicerade logotypens slogan ändrade storlek i annan takt än ordmärket. I mörkt tema syntes en separat marinblå logotypplatta. Sidfoten visade endast företagsnamnet. [Systemöversikten](https://vizway.se/system/)

## Levererat

- Ordmärket, bågen, stjärnan och den kursiva sloganen skalar nu proportionellt med ett gemensamt storleksmått. Ljust tema behåller den marinblå plattan. I mörkt tema ligger logotypen direkt mot sidhuvudets diskreta stjärnpunkter.
- Sidhuvud och sidfot använder samma grundfärger, toningar och tunna linjer. Den gemensamma sidfoten visar en HTML-sidkarta med Start, System, Om VizWay och Kontakt. Länken **VizWay** i **© VizWay** leder till Kontakt.

## Verifiering

- `npm run build` byggde nio sidor. Testade samtliga i Chrome vid 320, 390, 768 och 1 440 pixlar i båda temana utan horisontell rullning.
- Verifierade logotypens proportioner, temaväxling, tangentbordsfokus och varje sidfotslänk. Provade samtliga systemkort via kanten av kortet och med tangentbord.
- Startsidans bakgrundsfil och beskärning var identiska. Rubriken, versen och knappen hade samma horisontella placering och flyttades mindre än en pixel vertikalt när logotypen skalades.

## Visuella skillnader och kvarstående arbete

- Den proportionella skalningen ger sloganen något mindre typgrad vid smala fönster. Sidfoten visas på två rader vid 320 pixlar.
- Ändringarna finns lokalt. Övriga förbättringar ligger kvar i [ATT-GÖRA.md](_doc/ATT-GÖRA.md).

# Tidigare status för Om VizWay, Kontakt och slutjustering, 23 november 2026

Uppdrag 006 är genomfört och verifierat lokalt.

## Levererat

- `/om/` och `/kontakt/` använder de godkända texterna från `_doc/`. Kontakt visar `info@vizway.se` som enda offentlig e-postadress.
- `BrandLogo.astro` är den gemensamma källan för SVG-ordmärket, stjärnan och sloganen. Startsidan använder logotypen i hero-delen. Undersidorna använder den som länk till startsidan i det befintliga sidhuvudet.
- Varje systemkort är en enda länk. Hela kortet har samma klickyta. Kortets beskrivning, status och formgivning har bevarats.
- Huvudnavigation, sidfot och adresser har bevarats. [README.md](README.md) beskriver hur logotypen och kontaktuppgifterna redigeras.

## Verifiering

- `npm run build` byggde de nio ordinarie sidorna. Samtliga sidor, länkar och länkade resurser kontrollerades när `dist/` serverades över HTTP.
- Chrome verifierade ljust och mörkt tema vid 320, 390, 768 och 1 440 pixlars bredd. Kontrollerna omfattade en logotyp per sida, kortens klick- och tryckytor, tangentbordsfokus, navigation och e-postlänkens mål. Vid aktivering begärde Chrome `mailto:info@vizway.se`.
- Startsidans skärmbilder var pixelidentiska före och efter ändringen vid alla fyra bredder. Bakgrundsbilden och typsnittsfilen var också identiska.
- De fem projekten behöll sina statusar. Bygget innehåller varken exempelsystem, kontaktformulär eller webbplatskarta.

## Kända begränsningar

- E-postlänken använder besökarens e-postprogram. Den lokala verifieringen omfattade länkens aktivering och adress. Leverans via e-post är ännu inte verifierad.

## Inför publicering

- Gör den sista manuella granskningen av det statiska bygget, inklusive kontaktlänken i en webbläsare med ett konfigurerat e-postprogram. Publicering återstår.

# Tidigare status för systemöversikten, 23 november 2026

Uppdrag 005 är genomfört och verifierat lokalt.

## Levererat

- `/system/` visar två projektgrupper. **System och tillämpningar** innehåller BOS, Bygga Välstånd och KvittoApp. **Teknik och plattformar** innehåller VizOS och Viz AI Core.
- Projektkorten visar syfte, utvecklingsstatus och länk till respektive systemsida. Systemsidorna använder en gemensam mall med separata avsnitt för nuvarande utveckling och framtida möjligheter.
- Mörk marinblå introduktion, teknisk geometri i CSS och turkosa detaljer ger systemöversikten en egen form. Katalog och projektsidor följer den befintliga temaväxlingen.
- Projektens Markdown-filer ersätter den tidigare exempelposten. [README.md](README.md) beskriver hur en post läggs till, ändras, kategoriseras och sorteras.

## Verifiering

- `npm run build` byggde nio statiska sidor. Alla nio svarade med HTTP 200 och den tidigare exempeladressen svarade med HTTP 404.
- Testade systemöversikten och alla fem projektsidor i Chrome vid 320, 390, 768 och 1 440 pixlars bredd i båda temana. Kontrollerade länkar, synligt tangentbordsfokus, temaväxling och att sidorna rymdes utan horisontell rullning.
- Jämförde startsidans byggda HTML, CSS, typsnitt och bakgrund före och efter ändringen. Filerna var identiska. Skärmbilderna var pixelidentiska i alla fyra storlekar. Bakgrunden överensstämde också med originalet i `_doc/img/`.

## Kvarvarande begränsningar

- Fyra projekt visas som **Under utveckling** och Viz AI Core visas som **Framtida idé**. Underlaget styrker ingen färdig produkt.
- OCR → SIE är ett påbörjat utvecklingsarbete. Tolkning, förslag till bokföringsunderlag och SIE-export beskrivs som mål. Bokföringsuppgifterna ska gå att kontrollera före export.

# Tidigare status för VizWay Webb v0.2

Startsidans hero är monterad och verifierad lokalt. Den andra visuella finjusteringen slutfördes den 22 november 2026.

## Levererat

- Originalbilden ligger i `public/images/hero/background-s1.png`. Den täcker startsidan och beskärs efter fönstrets proportioner.
- Logotyp, rubrik, vers och Utforska-länk har egna Astro-komponenter i `src/components/hero/`. `Hero.astro` styr placeringen i ett CSS-rutnät.
- Huvudrubriken och webbläsarens sidtitel visar **Vi ser möjligheter**. Rubriken och versens fyra rader redigeras i `src/content/pages/start.md`.
- Logotypen är 20 % större från 1 024 pixlars bredd. De kursiva vektorkonturerna, den turkosa bågen och stjärnan skalas tillsammans uppe till vänster. Vid mindre bredder har logotypen samma storlek som tidigare.
- **Visionary Intelligent Zystems** visas på en rad under logotypen. Sloganen använder tunn, kursiv typografi i ljust turkos med något större bokstavsavstånd. Namn och slogan hämtas från `src/content/site/identitet.yaml`.
- **Utforska!** leder till `/system/`. Knappen ligger längre ned och åt höger från 1 200 pixlars bredd när fönstret har proportionerna 16:10 eller är bredare.
- [README.md](README.md) beskriver hur bilden, logotypen, texterna, placeringen och formgivningen ändras.

## Verifiering

- Jämförde logotypen med `_doc/img/logga.png`. Kontrollerade att bakgrundsbilden och de fyra övriga sidornas byggda HTML var identiska före och efter ändringen.
- `npm run build` genererade fem statiska sidor i `dist/`.
- Granskade det statiska bygget i Chrome vid 320 × 568, 390 × 844, 768 × 1 024 och 1 440 × 900 pixlar. Sloganen visades i kursiv på en rad. Rubriken hade rätt skiftläge, versen låg på fyra rader och sidan rymdes utan horisontell rullning.
- Vid 1 440 × 900 pixlar låg knappen 15 pixlar åt höger och 16 pixlar längre ned jämfört med föregående version. Granskade även knappens placering mot ljusspåret vid andra desktopformat.
- Tab gav synligt fokus på **Utforska!**. Enter öppnade systemöversikten med länkar till Start, Om VizWay och Kontakt i alla fyra storlekar. Samtliga fem sidor svarade med HTTP 200.

## Visuella avvikelser

- Logotypens vektorkonturer och stjärnglöd skiljer sig något från rasterreferensen.
- I smalare eller mer kvadratiska desktopfönster ligger Utforska nära sin tidigare position. Där kan en förskjutning åt höger och nedåt föra knappen över ljusspåret.
- Utforska-knappen är proportionellt något högre på mobil än i referensen. Länkytan är minst 44 pixlar hög.
- På mobil står rubriken på två rader. Den tajtare beskärningen visar himlen, stjärnan och ljusspåret. Vid 390 × 844 pixlar hamnar soluppgångens mitt nära vänsterkanten. En toning över bilden vid smala fönster förbättrar textkontrasten.

# Tidigare status för VizWay Webb v0.1

Grundstrukturen är klar och verifierad lokalt den 21 november 2026. Astro-projektet ligger direkt i `/workspace` och använder Astro 6.4.8, TypeScript, Markdown, YAML och vanlig CSS.

## Levererat

- Start (`/`) presenterar VizWays vision, långsiktiga ambition och sloganen **Visionary Intelligent Zystems**.
- System (`/system/`) delar in systemposter i färdiga system, pågående utveckling och framtida idéer. Varje Markdown-post får en adress och visas med en gemensam mall.
- Om VizWay (`/om/`) beskriver arbetet med egna intelligenta digitala system och konsultverksamhetens roll som komplement.
- Kontakt (`/kontakt/`) kan visa en e-postlänk när adressen läggs in i sidans YAML-metadata.
- Alla sidor har gemensam navigering och en responsiv layout i marinblått och turkos. VizWay visas med ett kursivt, lätt stigande ordmärke. Temat följer systemets färgval tills besökaren väljer ljust eller mörkt tema.

## Manuell redigering

| Ändring | Redigera |
| --- | --- |
| Startsidan | `src/content/pages/start.md` |
| Texten på systemöversikten | `src/content/pages/system.md` |
| Om VizWay | `src/content/pages/om.md` |
| Kontakttext och e-postadress | `src/content/pages/kontakt.md`. Lägg adressen i YAML-fältet `email`. |
| Företagsnamn och slogan | `src/content/site/identitet.yaml` |
| Lägg till eller uppdatera ett system | Redigera en Markdown-fil i `src/content/systems/`. Ange `title`, `description` och `status` i YAML-blocket. Beskriv funktion och praktisk användning i brödtexten. |
| Färger, teman och layout | `src/styles/global.css` |

Instruktioner för installation, utveckling och systeminnehåll finns i [README.md](README.md).

## Skapade filer

| Område | Filer |
| --- | --- |
| Projektrot | `.gitignore`, `package.json`, `package-lock.json`, `tsconfig.json`, `README.md`, `STATUS.md` |
| Sidor | `src/pages/index.astro`, `src/pages/om.astro`, `src/pages/kontakt.astro`, `src/pages/system/index.astro`, `src/pages/system/[id].astro` |
| Mallar | `src/layouts/BaseLayout.astro`, `src/layouts/PageLayout.astro`, `src/layouts/SystemLayout.astro` |
| Komponenter och design | `src/components/SiteHeader.astro`, `src/components/ThemeToggle.astro`, `src/styles/global.css` |
| Innehåll | `src/content/pages/start.md`, `src/content/pages/system.md`, `src/content/pages/om.md`, `src/content/pages/kontakt.md`, `src/content/site/identitet.yaml`, `src/content/systems/systemoversikt.md` |
| Validering och innehållshämtning | `src/content.config.ts`, `src/lib/content.ts`, `src/lib/system-status.ts` |

## Verifiering

- `npm ci` installerade beroendena från låsfilen.
- `npm run build` byggde fem statiska sidor i `dist/`.
- `npm run dev` startade på `127.0.0.1:4321`. Alla fem sidor svarade med HTTP 200.
- Chrome verifierade huvudnavigering, aktiv sidmarkering, statusgrupperna, länken till exempelsystemet och länken tillbaka till systemöversikten.
- Chrome verifierade att temaväxlingen fungerar med tangentbord och mus, att färgerna växlar och att temat sparas vid sidbyte och omladdning. Systemets mörka färgval fungerade för en besökare utan sparat tema.
- Alla fem sidor rymdes utan horisontell rullning vid 320, 390, 768 och 1440 pixlars bredd i Chrome.
- `.git` och `AGENTS.md` bevarades. Arbetet hölls inom `/workspace`. Ingen Git-commit eller extern publicering gjordes.

## Innehåll som kan kompletteras

- Underlaget innehöll ingen bekräftad kontaktadress. Kontaktsidan visar en statusrad tills adressen har lagts till.
- Underlaget namngav inga färdiga system eller pågående utvecklingsprojekt. Systemöversikten visade därför ett märkt exempel under framtida idéer.
