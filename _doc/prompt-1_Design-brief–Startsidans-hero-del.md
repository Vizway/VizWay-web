## Uppdrag
Bygg om startsidans hero-del på VizWay-webbplatsen så att den följer VizWays nya visuella identitet.

Arbeta i `/workspace`.
Läs och följ `AGENTS.md` innan du börjar.

Detta uppdrag gäller i första hand **hero-sektionen på startsidan**. Arbeta varsamt och ändra inte mer än nödvändigt utanför hero-delen, förutom om mindre stödändringar krävs i layout, CSS eller komponentstruktur.

---

## Övergripande mål

Startsidan ska inte kännas som en vanlig säljsida.
Den ska vara en **presentation av VizWays själ**.

Känslan ska vara:
- visionär
- poetisk
- intelligent
- lätt
- framåtriktad
- tekniskt precis
- inspirerande utan att bli överlastad

Besökaren ska känna:
- möjligheter
- riktning
- framtid
- stillsam kraft
- att VizWay ser längre än det uppenbara

---

## Grundprincip

Bakgrunden är en egen enhet.
Övriga delar ska också vara egna enheter, så att de senare kan flyttas och justeras separat.

Hero-delen ska därför byggas upp av tydligt separerade lager/komponenter:

1. Bakgrund
2. Logotypblock
3. Huvudrubrik
4. Poetisk text
5. CTA-knapp
6. Enkel meny/länk: "Utforska!"

Gör strukturen modulär så att dessa delar kan justeras oberoende av varandra.

---

## Visuell riktning

Använd den befintliga bakgrundskänslan som grund:
- nuvarande blå ton ska behållas som utgångspunkt
- utveckla den mot ett möte mellan:
  - himmelsblått
  - turkos
  - djupt rymdsvart
- känslan ska vara som en stilla visionär gryning i rymdljus
- de svepande linjerna som går uppåt och framåt är viktiga
- den lilla stjärnan/ljuspunkten som rör sig mot framtiden ska kännas närvarande

Hero-bilden ska ge känslan:
**"Det kan bara gå uppåt."**

Undvik tung blockkänsla.
Mer luft. Mindre kompakt. Mer andning mellan elementen.

---

## Referensdelar som ska efterliknas

Använd följande visuella riktning från referensmaterialet:

### 1. Logotyp
Använd logotypstilen från referensbilden med VizWay-loggan.
Önskad riktning:
- större än nuvarande webbplatslogotyp
- elegant
- kursiv
- lätt stigande
- något mer sirlig
- bokstäverna får gärna upplevas som att de blir lättare/finskare mot slutet
- känslan ska påminna om en vimpel eller riktning framåt

Under logotypen ska texten:

**Visionary Intelligent Zystems**

ligga som ett subtilt stråk/undertitel under loggan.

Den ska fungera som en integrerad del av logotypblocket.
Inte för stor.
Den får gärna kännas som en ljus linje av identitet under namnet.

### 2. Rubrik
Använd rubrikens stil och storlek från referensen:

**Vi ser Möjligheter**

Riktlinjer:
- stor
- luftig
- poetisk
- elegant
- tydlig
- inte för tung
- mer känsla än "corporate block headline"

Rubriken ska vara en egen enhet och kunna flyttas separat från logotypen.

### 3. Knapp
Använd CTA-knappen från referensbilden:

**Utforska!**

Riktlinjer:
- behåll känslan från referensknappen
- rundad, ljus, levande, vänlig
- tydlig men inte aggressiv
- fungerar som enda direkta handlingsknapp i hero-delen
- ska länka vidare till systemöversikten eller relevant utforskningssida

### 4. Poetisk text
Använd följande text exakt:

**I hinder ser vi linjer mot framtiden**
**Ur vision växer riktning**
**Ur riktning formas system**
**Och allt pekar framåt**

Texten ska:
- vara tydlig och lättläst
- ha mindre storlek än rubriken
- vara poetisk och luftig
- ligga som ett eget textblock
- helst få bra radavstånd och visuell rytm
- inte kännas som vanlig brödtext
- inte dominera, men bära mycket av själen i sidan

---

## Meny

Hero-delen ska ha mycket enkel navigationskänsla.

Önskemål:
- betona endast **"Utforska!"** som tydligt meny-/handlingsval i hero-upplevelsen
- övrig navigering på sidan får finnas kvar om den behövs tekniskt, men den ska tonas ned visuellt i hero-fokus
- det viktiga är att första intrycket inte blir "traditionell menyrad", utan en upplevelse

Om det är lämpligt får den ordinarie toppnavigeringen finnas kvar, men hero-sektionen ska visuellt upplevas som mer poetisk än navigationsstyrd.

---

## Layout

Bygg hero-sektionen med tydlig komposition.

### Desktop
Målet är en luftig, balanserad komposition med flera separata enheter.

Önskad ordning:
- logotypblock högt upp
- rubrik tydligt placerad under eller i närheten av logotypen
- poetisk text under rubriken
- CTA-knappen "Utforska!" placerad naturligt i anslutning till texten
- bakgrunden och dess linjer/stjärna får breda ut sig fritt

Layouten får gärna kännas som:
- en horisont
- ett blickfång mot framtiden
- öppet landskap snarare än boxar

Undvik:
- tunga kort
- hårda block
- informationstät hero
- för mycket "UI-känsla"

### Mobile
På mindre skärmar:
- behåll känslan
- stapla enheterna tydligt
- bevara luft
- rubrik och poetisk text måste vara lättlästa
- knappen ska vara lätt att trycka på
- inga element får krocka eller kännas ihoptryckta

---

## Tekniska krav

1. Hero-delens bakgrund, logotypblock, rubrik, poetisk text och CTA ska byggas som separata enheter/komponenter eller tydligt separerade layoutblock.
2. Lösningen ska vara enkel att justera manuellt senare.
3. Bevara projektets struktur och följ `AGENTS.md`.
4. Använd Astro + CSS enligt projektets nuvarande upplägg.
5. Undvik onödiga beroenden.
6. Om bilderna finns som lokala tillgångar, använd dem på ett tydligt och underhållbart sätt.
7. Om referenserna behöver återskapas i kod/CSS snarare än användas som färdiga bilder, gör det så rent och strukturerat som möjligt.
8. Behåll god läsbarhet i både ljust och mörkt tema, men utgå främst från den visionära hero-känslan.
9. Om två teman redan finns, anpassa båda så att hero-delen fungerar i båda. Det mörka temat får gärna vara det starkaste visuella uttrycket.

---

## Innehålls- och tonalitetskrav

Viktigt:
- sidan ska inte angripa eller jämföra sig negativt med andra
- inga formuleringar som klagar på andra aktörer
- tonen ska vara stillsam, självsäker och visionär
- VizWay ska framstå som ett företag som ser möjligheter och formar riktning

Det här är inte en klassisk säljsida.
Det är en identitetsbärande introduktion.

---

## Leverans

När du är klar ska du:

1. Beskriva vilka filer du ändrade.
2. Förklara hur hero-delen är uppbyggd.
3. Beskriva hur logotyp, rubrik, text och knapp hålls som separata enheter.
4. Bekräfta att designen fungerar responsivt.
5. Köra relevant verifiering:
   - `npm run build`
   - start av utvecklingsserver om relevant
6. Inte göra någon Git-commit.
7. Inte publicera något externt.

---

## Acceptanskriterier

Hero-delen är godkänd när:
- bakgrundskänslan behålls och utvecklas i riktning mot himmelsblått + rymdsvart
- loggan är större och mer visionär
- "Visionary Intelligent Zystems" ligger som ett stråk under loggan
- rubriken "Vi ser Möjligheter" har rätt visuell tyngd och elegans
- textblocket använder exakt denna text:

  I hinder ser vi linjer mot framtiden
  Ur vision växer riktning
  Ur riktning formas system
  Och allt pekar framåt

- knappen "Utforska!" känns levande och naturlig
- hero-sektionen känns mer som VizWays själ än som en traditionell säljsida
- elementen är separata och möjliga att flytta/justera senare
- sidan bygger korrekt och fungerar lokalt
