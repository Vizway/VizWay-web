
---
id: prompt-009a
projekt: VizWay-web
typ: revision
reviderar: prompt-009
status: aktuell
---

# Uppdrag 009a – Header och systemstatus

## 1. Syfte
Korrigera headerns responsiva beteende och förbättra placeringen av systemstatus.

Läs AGENTS.md, README.md och STATUS.md.
Kontrollera git status innan arbetet börjar.

Detta är en begränsad revision.
Ändra inte den nyligen införda språkarkitekturen.

## 2. Header – konsekvent struktur

Headern ska alltid bestå av två huvudrader.

### Rad 1
- Gemensam VizWay-logotyp till vänster.
- Temaväljare och språkväljare till höger.
- Båda kontrollerna ska alltid ligga på samma rad som logotypen.
- Kontrollerna ska alltid vara placerade längst upp till höger.
- Logotypen får skalas proportionellt vid behov.
- Förhindra horisontell rullning även vid 320 px.

### Rad 2
- Innehåller endast huvudnavigationen.
- Menyalternativen får radbrytas till flera rader.
- Menyn ska alltid ligga under logotypen och kontrollerna.
- Ingen del av menyn får flyttas upp till första raden.

Använd CSS Grid för headerns huvudstruktur.
Använd Flexbox med flex-wrap för menyn.

Undvik absolut positionering av kontrollerna.

Använd samma komponenter på svenska och engelska.

## 3. Temaväljare – yin och yang

Ersätt den nuvarande stora textknappen med en liten rund kontroll.

Utseende:
- Symbol: yin-yang (☯).
- Diskret turkos kant eller ljusmarkering.
- Samma dimension som språkvalet.
- Behåll en subtil planetliknande form.
- Ingen synlig lång textetikett.

Funktion:
- Klick växlar mellan mörkt och ljust tema.
- Behåll nuvarande temalagring.
- Använd korrekt button-element.
- Tillgänglighetsnamn ska ange åtgärden på sidans språk.
- Visa gärna en kort tooltip vid hover.
- Tydlig tangentbordsfokus.

## 4. Språkväljare – flaggor

Skapa en liten rund språkkontroll intill temaväljaren.

Visa aktivt språk:
- Svenska: svensk flagga.
- Engelska: brittisk flagga.

Funktion:
- Klick växlar till motsvarande sida på det andra språket.
- Behåll sidberoende språkbyte.
- Använd en riktig länk med korrekt href.
- Använd tillgänglighetsnamn som anger målspråket.
- Använd gärna SVG-flaggor för konsekvent visning.
- Lägg inte till nya externa bibliotek.

Kontrollerna ska vara visuellt balanserade och upplevas som två små planeter.

Undvik att kontrollerna växer eller flyttar sig när språk eller tema ändras.

## 5. Systemstatus på systemsidor

Nuvarande problem:
Tillbakalänken och statusetiketten ligger tätt tillsammans på vänster sida.

Ändra till:
- Tillbakalänken längst till vänster.
- Statusetiketten längst till höger.
- Använd en gemensam rad med justify-content: space-between.
- Behåll statusetikettens nuvarande färger och betydelse.
- Anpassa responsivt utan överlappningar.
- På smala skärmar får status flyttas ned till en egen högerjusterad rad.

Gäller både svenska och engelska systemsidor.

Ändra inte statusklassificeringar eller projektinnehåll.

## 6. Bevara

- Gemensam SVG-logotyp.
- Befintlig typografi.
- Webbplatsens färgidentitet.
- Svenska och engelska webbadresser.
- Alla översatta texter.
- Klickbara systemkort.
- Headerns och footerns övriga funktioner.
- Startsidans visionära komposition.
- Ljust och mörkt tema.

## 7. Verifiering

1. Kör npm run build.
2. Testa vid 320, 390, 560, 768 och 1440 px.
3. Testa båda språkversionerna.
4. Testa ljust och mörkt tema.
5. Kontrollera att planeterna aldrig flyttas under menyn.
6. Kontrollera att menyn alltid ligger under första raden.
7. Kontrollera att inga element överlappar.
8. Kontrollera att språkbyte behåller aktuell sida.
9. Kontrollera att temaväxlingen fungerar.
10. Kontrollera högerjusterad systemstatus.
11. Testa tangentbord och synliga fokusmarkeringar.

## 8. Dokumentation

Uppdatera STATUS.md med:
- Ändrade filer.
- Verifierade funktioner.
- Kända avvikelser.

Gör ingen Git-commit.
Publicera ingenting.

## Acceptanskriterium
Headern är konsekvent vid alla testade bredder.

Logotyp och de två planetkontrollerna ligger alltid på första raden.

Huvudmenyn ligger alltid under och får radbrytas.

Systemstatus är visuellt separerad från tillbakalänken.

