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

