# PROJEKT.md
Viktiga saker att inte glömma!


## Starta Container


## Starta Codex
Kör:
sudo nixos-container run ai-vizway -- \
   runuser -u ai -- bash -c 'cd /workspace && exec codex'

sudo nixos-container run ai-vizway -- \
   runuser -u ai -- bash -c \
   'cd /workspace && exec codex --sandbox workspace-write --ask-for-approval never'

sudo nixos-container run ai-vizway -- \
   runuser -u ai -- bash -c \
   'cd /workspace && exec codex --sandbox danger-full-access --ask-for-approval never'

Orsaken: Bubblewrap kunde inte montera /proc inuti NixOS-containern. När vi stängde av Codex extra sandlåda fungerade filhanteringen.


## Git commandon
**Kontrollera Git**
cd /VizWork/_Lab/AI/VizWay-web
git status --short
git diff --check
git diff --stat

**Lägg till och kontrollera filerna**
git add -A
git diff --cached --check
git diff --cached --stat

**Spara versionen**
git commit -m "VizWay Webb v1.0 - Publicerad webbplats"
git tag -a v1.0 -m "Första publicerade versionen av VizWay Webb"
git status --short
