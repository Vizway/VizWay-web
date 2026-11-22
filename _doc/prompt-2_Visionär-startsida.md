# Uppdrag: VizWay Webb v0.2 – Visionär startsida

Arbeta i `/workspace`. Läs och följ `AGENTS.md`.

**Mål:** Bygg om startsidans hero-sektion så att den presenterar VizWays identitet och själ snarare än säljer produkter.

## 1. Visuell design

- Behåll den valda bakgrundsbilden som **en separat, oförändrad bild**.
- Bakgrunden ska fylla hero-sektionen och fungera på olika skärmstorlekar.
- Uttryck: djupt rymdsvart, himmelsblått, turkos, soluppgång och lysande linjer som stiger mot en stjärna.
- Inga tunga informationsblock eller dekorativa kort.
- Prioritera luft, elegans, rörelse och läsbarhet.

**Viktigt:** Referensbildernas texter får inte bakas in i bakgrunden. All text, logotyp och knapp ska vara separata webbelement.

Om en ren bakgrundsbild saknas, rapportera detta. Försök inte automatiskt använda en komplett designskiss som bakgrund.

## 2. Separata komponenter

Skapa eller anpassa:

- `Hero.astro` – komposition och layout.
- `HeroLogo.astro` – logotyp med slogan.
- `HeroTitle.astro` – huvudrubrik.
- `HeroText.astro` – poetisk text.
- `HeroExplore.astro` – knappen Utforska.

Placera komponenterna under `src/components/` och använd vanlig CSS.

Varje enhet ska kunna flyttas, skalas och formges utan att övriga behöver byggas om.

## 3. Exakt innehåll

**Logotyp:** VizWay, kursiv, lätt stigande och med subtilt avtagande bokstavsstorlek från vänster till höger (vimpelkänsla).

**Slogan:** Visionary Intelligent Zystems, som ett tunt turkost stråk under logotypen.

**Rubrik:**

Vi ser Möjligheter

Ge ordet *Möjligheter* turkos färg och en elegant, tunn understrykning.

**Poetisk text – fyra separata rader:**

I hinder ser vi linjer mot framtiden
Ur vision växer riktning
Ur riktning formas system
Och allt pekar framåt

**Enda framträdande navigationsvalet:** Utforska!

Knappen ska vara turkos, mjukt rundad, med en högerriktad pil. Den ska länka till `/system/`.

## 4. Innehåll och struktur

- Behåll den befintliga Astro-arkitekturen.
- Lagra den poetiska texten och rubriken i redigerbar Markdown/YAML, inte hårdkodade komponenter.
- Logotyp, rubrik, text, knapp och bakgrund ska vara oberoende enheter.
- Behåll övriga befintliga sidor och systemfunktioner.
- Hero-upplevelsen ska ha endast ett tydligt navigationsval, `Utforska!`. Bevara tillgången till övriga sidor på ett diskret och tillgängligt sätt.
- Följ projektets kod- och dokumentationsstandard.

## 5. Responsiv layout

- Desktop: luftig komposition med text till vänster och fri sikt mot de stigande linjerna och stjärnan.
- Mobil: anpassa storlek och placering så att texten inte skymmer viktiga delar av bakgrunden.
- Undvik horisontell rullning.
- Kontrollera kontrast, tangentbordsnavigering och läsbarhet.
- Behåll befintlig temaväxling om den används. Undvik att det ljusa temat förstör bakgrundens uttryck.

## 6. Verifiering

1. Kontrollera befintliga filer och bildresurser.
2. Implementera ändringarna.
3. Kör `npm run build`.
4. Testa startsidan vid 320, 390, 768 och 1440 px.
5. Kontrollera att `Utforska!` fungerar.
6. Dokumentera filändringar och manuell redigering i `STATUS.md`.
7. Redovisa eventuella avvikelser.

**Gör ingen Git-commit och publicera inte webbplatsen.**

## Godkänt resultat

En fungerande Astro-startsida där den valda bakgrunden, VizWay-logotypen, sloganen, rubriken, den poetiska texten och Utforska-knappen är separata och lättjusterade delar.

**Designprincip: Mjukhet och precision. Vision före försäljning.**
