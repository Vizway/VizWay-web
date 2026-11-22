# Uppdrag: VizWay Webb v0.2 – Montera startsidans hero

## Syfte

Bygg VizWays nya startsida med en fast bakgrund och fyra oberoende innehållsenheter.

Arbeta i `/workspace`. Läs `AGENTS.md` innan arbetet börjar.

**Viktigt:** Vi har redan fastställt den visuella designen. Uppgiften är att implementera den, inte att skapa ett nytt designförslag.

## 1. Bakgrund

Använd bilden:

`_doc/bakgrund-först-sidan_Kosmisk gryning över dimhöljda berg.png`

Om filen finns, kopiera den till:

`public/images/hero/background-s1.png`

Om samma bild redan finns som `background.png`, byt namn till `background-s1.png` och uppdatera referenserna.

Kontrollera filerna före kopiering. Skriv inte över en befintlig bild med annat innehåll.

Bakgrunden ska:
- Vara oförändrad.
- Täcka startsidans hero.
- Behålla soluppgången, landskapet, ljusspåret och stjärnan.
- Anpassas responsivt med CSS.
- Inte innehålla någon inbakad text eller logotyp.

## 2. Separata komponenter

Skapa följande struktur om motsvarande komponenter inte redan finns:

```text
src/components/hero/
   Hero.astro
   HeroBackground.astro
   HeroLogo.astro
   HeroTitle.astro
   HeroText.astro
   HeroExplore.astro
```

Varje komponent ska kunna flyttas och formges oberoende av de andra.

Använd en gemensam layout med CSS Grid eller Flexbox. Separera komponenternas placering från deras egen formgivning.

## 3. Logotyp

Använd `_doc/logga.png` som visuell referens.

Logotypen ska:
- Visa VizWay i stor, kursiv och stigande typografi.
- Behålla den eleganta vimpelkänslan.
- Ha den turkosa linjen och stjärnan ovanför namnet.
- Visa **Visionary Intelligent Zystems** som ett stråk nedanför.

Om referensbilden har en ogenomskinlig bakgrund ska den inte placeras direkt ovanpå hero-bilden så att en synlig rektangel uppstår.

Använd i så fall en transparent logotypresurs eller återskapa typografin med separata HTML/SVG-element. Redovisa eventuella visuella avvikelser.

## 4. Rubrik

Använd `_doc/rubrik-stil.png` som stilreferens.

Visa exakt:

**Vi ser Möjligheter**

- Vit, elegant och kursiv text för "Vi ser".
- Ljust turkos text för "Möjligheter".
- Tunn, böjd turkos linje under det sista ordet.
- Storlek och proportioner enligt referensbilden.
- Riktig HTML-text, inte en bild.

## 5. Poetisk text

Visa exakt dessa fyra rader:

I hinder ser vi linjer mot framtiden
Ur vision växer riktning
Ur riktning formas system
Och allt pekar framåt

Texten ska ha:
- Mindre storlek än rubriken.
- Elegant, lätt kursiv typografi.
- God kontrast mot bakgrunden.
- Luftigt men sammanhållet radavstånd.
- Samma visuella rytm som i den godkända designskissen.

Lägg texten i redigerbart innehåll under `src/content/`, inte hårdkodad i komponenten.

## 6. Utforska!

Använd `_doc/meny-stil.png` som referens.

Skapa en riktig HTML-länk till `/system/`.

- Text: **Utforska!**
- Turkos bakgrund.
- Mjukt rundad form.
- Mörk text och pil åt höger.
- Diskret hover-effekt.
- Tillgänglig med tangentbord.

Detta är startsidans enda framträdande navigationsval.

Undvik att lägga till en traditionell menyrad ovanpå bakgrundsbilden. Bevara åtkomsten till övriga sidor genom sidan som öppnas via Utforska.

## 7. Placering

Desktop:
1. Logotyp högt upp till vänster.
2. Rubrik nedanför logotypen.
3. Poetisk text nedanför rubriken.
4. Utforska-knappen nedanför texten.
5. Håll höger sida öppen så att ljusspåret och stjärnan syns.

Använd inga kort eller ogenomskinliga paneler bakom innehållet.

Mobil:
- Anpassa typografi och avstånd.
- Undvik överlappningar.
- Prioritera läsbarhet framför att visa hela bakgrundsbilden.
- Bevara tillräckligt av himlen, ljusspåret och framtidskänslan.

## 8. Manuell redigering

Se till att det är enkelt att:
- Byta bakgrundsbild.
- Ändra logotyp.
- Ändra rubrik och poetisk text.
- Flytta komponenter.
- Ändra textstorlek, färger och avstånd.

Dokumentera var respektive ändring görs i `README.md`.

Ändra inte andra sidor mer än vad som behövs.

## 9. Verifiering

1. Kontrollera alla bildresurser.
2. Implementera komponenterna.
3. Kör `npm run build`.
4. Kontrollera sidan vid 320, 390, 768 och 1440 px.
5. Verifiera länken Utforska.
6. Testa i befintlig utvecklingsserver.
7. Uppdatera `STATUS.md` med ändringar, verifieringar och eventuella avvikelser.

**Ingen Git-commit och ingen extern publicering.**

## Acceptanskriterium

Startsidan ska likna den tidigare godkända kompositionen, men alla innehållselement ska vara oberoende och redigerbara.

Bakgrunden ska behålla sitt djup och sin uppåtgående rörelse.

**VizWays själ ska vara det första besökaren möter.**
