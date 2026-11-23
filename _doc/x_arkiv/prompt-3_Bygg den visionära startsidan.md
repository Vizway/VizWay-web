# Uppdrag: VizWay Webb v0.2 – Bygg den visionära startsidan

## Förberedelser

Arbeta i `/workspace`.

1. Läs `AGENTS.md`.
2. Undersök befintlig Astro-struktur.
3. Kontrollera vilka bilder som finns i projektet.
4. Behåll fungerande kod och tidigare innehåll.
5. Gör ingen Git-commit utan godkännande.

## 1. Bildresurser

Använd följande struktur:

```text
public/
   images/
      hero/
         background.png
         logo.png
         title-reference.png
         explore-reference.png
```

Bilderna tillförs separat. Rapportera saknade filer och använd inga godtyckliga ersättningsbilder.

`background.png` är en ren bakgrundsbild med landskap, soluppgång, stjärnhimmel och stigande ljusspår.

De övriga bilderna används som visuella referenser. Logotypen kan användas som bild om dess kvalitet och transparens är tillräckliga.

## 2. Komponentstruktur

Skapa följande komponenter:

```text
src/components/hero/
   Hero.astro
   HeroBackground.astro
   HeroLogo.astro
   HeroTitle.astro
   HeroText.astro
   HeroExplore.astro
```

Varje komponent ska kunna positioneras och skalas separat.

Undvik hårdkodade koordinater för varje skärmstorlek. Använd responsiv CSS och tydliga variabler för placering och dimensioner.

## 3. Visuellt innehåll

### Logotyp

Använd den valda logotypbilden som referens.

- Stor och elegant.
- Kursiv och lätt stigande.
- Vimpelkänsla.
- Ett ljust turkost stråk.
- Slogan under logotypen: **Visionary Intelligent Zystems**.

### Rubrik

**Vi ser Möjligheter**

- Stor, sirlig och luftig.
- Vit text för ”Vi ser”.
- Ljust turkos text för ”Möjligheter”.
- Tunn, svepande turkos understrykning.

Rubriken ska vara riktig HTML-text.

### Poetisk text

Visa följande fyra rader exakt:

I hinder ser vi linjer mot framtiden
Ur vision växer riktning
Ur riktning formas system
Och allt pekar framåt

Använd en elegant, lätt kursiv textstil.

Spara texten i en separat innehållsfil så att den kan ändras manuellt.

### Utforska!

- Enda framträdande navigationsvalet.
- Turkos, mjukt rundad knapp med pil åt höger.
- Använd riktig HTML-länk till `/system/`.
- Utgå från den bifogade knappbildens utseende.

## 4. Layout

Hero-sektionen ska fylla den första skärmbilden på desktop.

- Logotypen uppe till vänster.
- Rubriken nedanför.
- Poetisk text under rubriken.
- Utforska-knappen under texten.
- Stjärnan och den uppåtgående rörelsen ska vara synliga till höger.

Skapa god läsbarhet utan stora, ogenomskinliga textblock.

Använd vid behov en diskret gradient bakom textområdet.

På mobil ska komponenterna kunna skalas och placeras om utan överlappning. Se till att viktig text inte kapas.

Bevara övriga sidor och befintlig temaväxling.

## 5. Teknisk kvalitet

- Använd Astro och CSS.
- Lägg innehåll i Markdown/YAML när det är lämpligt.
- Använd semantisk HTML.
- Bildresurser ska ha lämpliga tillgänglighetstexter. Dekorativ bakgrund behöver ingen uppläst beskrivning.
- Undvik onödiga beroenden och JavaScript.
- Följ kodstandarden i `AGENTS.md`.

## 6. Verifiering

1. Kör `npm run build`.
2. Testa layout vid 320, 390, 768 och 1440 px.
3. Kontrollera att logotyp, text och knapp förblir separata.
4. Kontrollera att `Utforska!` leder till `/system/`.
5. Dokumentera nya och ändrade filer i `STATUS.md`.
6. Förklara vilka CSS-inställningar som styr komponenternas placering.

Publicera ingenting och gör ingen Git-commit.

**Designprincip: VizWay presenterar sin själ. Känslan ska vara vision, intelligens, riktning och framtid.**
