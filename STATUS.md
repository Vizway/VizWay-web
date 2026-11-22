# Status för VizWay Webb v0.2

Startsidans hero är monterad och verifierad lokalt den 22 november 2026.

## Levererat

- Originalbilden ligger i `public/images/hero/background-s1.png`. Den täcker startsidan och beskärs efter fönstrets proportioner.
- Logotyp, rubrik, vers och Utforska-länk har egna Astro-komponenter i `src/components/hero/`. `Hero.astro` styr placeringen i ett CSS-rutnät.
- Rubriken **Vi ser Möjligheter** och versens fyra rader redigeras i `src/content/pages/start.md`. Namnet och sloganen **Visionary Intelligent Zystems** hämtas från `src/content/site/identitet.yaml`.
- **Utforska!** leder till `/system/`, där huvudnavigationen ger tillgång till övriga sidor.
- [README.md](README.md) beskriver hur bilden, logotypen, texterna, placeringen och formgivningen ändras.

## Verifiering

- Jämförde bakgrundsfilen byte för byte med originalet i `_doc/`. Läste designskissen och referensbilderna för logotyp, rubrik och knapp.
- `npm run build` genererade fem statiska sidor i `dist/`.
- Granskade skärmbilder i Chrome mot den befintliga utvecklingsservern på `127.0.0.1:4321` vid 320 × 568, 390 × 844, 768 × 1024 och 1440 × 900 pixlar. I varje storlek kontrollerades bild och typsnitt, fyra versrader, komponenternas placering och att sidan ryms i bredd.
- Tab gav synligt fokus på **Utforska!**. Enter öppnade systemöversikten med länkar till Start, Om VizWay och Kontakt i alla fyra storlekar. Samtliga fem sidor svarade med HTTP 200.

## Visuella avvikelser

- Logotypen återskapas med lokal kursiv Liberation Serif och SVG-former eftersom referensbilden har en ogenomskinlig bakgrund. Bokstavsformer, linje och stjärnglöd skiljer sig något från referensen.
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
- Underlaget namngav inga färdiga system eller pågående utvecklingsprojekt. Systemöversikten visar därför ett tydligt märkt exempel under framtida idéer.
