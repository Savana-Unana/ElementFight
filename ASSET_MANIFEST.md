# Elemental Ring Fights Asset Manifest

Future Codex: check this file before asking what assets exist or what still needs to be added.

## Provided Assets Currently In Project

### `src/assets/ELogos`
- `Water-Logo.png`
- `Toxic-Logo.png`
- `Plant-Logo.png` - currently used for Life until Life-named art is provided.
- `Baseball-Logo.png`

### `src/assets/ESkins`
- `Water-Normal.png`
- `Water-Hurt.png`
- `Toxic-Normal.png`
- `Toxic-Hurt.png`
- `Plant-Normal.png` - currently used for Life until Life-named art is provided.
- `Plant-Hurt.png` - currently used for Life until Life-named art is provided.

### `src/assets/EAttack`
- `Syringe.png`
- `Flytrap-Idle.png`
- `Flytrap-Attack1.png`
- `Flytrap-Attack2.png`
- `Flytrap-Attack3.png`
- `Basebat.png`

### `src/assets/ESFX`
- `Honk.mp3`
- `During-Liquid.mp3`
- `Flytrap-Chomp.mp3`
- `Flytrap-Plant.mp3`
- `Frost-Shatter.mp3`
- `Hit.mp3`
- `Icicle-Throw.mp3`
- `Syringe.mp3`
- `Tesla-Place.mp3`
- `Tesla-Zap.mp3`
- `Toxic-Win.mp3`

### Empty Or Not Yet Provided
- `src/assets/EParticles`
- `src/assets/Misc`

## Assets Still Wanted

### `src/assets/ELogos`
- Random logo
- Modifier logo
- Life logo to replace legacy `Plant-Logo.png`
- Fire logo
- Ice logo
- Electric logo
- Gravity logo

### `src/assets/ESkins`
- Life normal/hurt skins to replace legacy `Plant-Normal.png` and `Plant-Hurt.png`
- Fire normal/hurt skins
- Ice normal/hurt skins
- Electric normal/hurt skins
- Gravity normal/hurt skins

### `src/assets/EAttack`
- Fire Overload charge/dash sprite or effect
- Fire flame patch sprite
- Icicle image or sprite
- Tesla coil idle sprite
- Tesla coil zapping sprite
- Lightning bolt sprite
- Gravity moon sprite
- Gravity moon slam effect

### `src/assets/EParticles`
- Water pass-through or splash effect
- Toxin hit effect
- Life grow effect
- Flytrap snap effect
- Ball explosion effect
- Fire wall explosion particles
- Ice trail/freeze particles
- Electric zap particles
- Gravity moon impact particles
- Baseball stun hit particles

### `src/assets/ESFX`
- Syringe throw
- Syringe hit/inject
- Life/Flytrap grow
- Flytrap snap
- Ball hit
- Wall hit
- Power hit
- Stun hit
- Ball explosion
- Fire Overload charge
- Fire Overload dash
- Fire flame patch burn
- Ice slow/defrost loop
- Gravity moon hit
- Gravity moon crush
- Baseball swing
- Baseball frenzy
- Button click
- Countdown tick
- Fight start

### `src/assets/Misc`
- Duck image
- Optional title logo
- Optional custom pedestal art
- Optional arena backgrounds

## Current Code Asset Usage

- Character select logos use provided `ELogos` images where available.
- Life currently reuses the legacy Plant logo and skins.
- Baseball uses `ELogos/Baseball-Logo.png` for both logo and skin.
- Fire, Ice, Electric, and Gravity currently use code-drawn fallback ball art.
- Pedestal balls and battle balls use provided `ESkins/*-Normal.png` images when present.
- Hurt skins are conditionally swapped during damage frames when available.
- Syringes use `EAttack/Syringe.png`.
- Life flytraps use `Flytrap-Idle.png` and attack frames.
- Baseball bat uses `EAttack/Basebat.png`.
- Fire Overload charge/dash, Fire flame patches, icicles, Tesla coils/lightning, and Gravity moons are currently code-drawn.
- Sharp Shoot uses `ESFX/Icicle-Throw.mp3`.
- Defrost contact shatter uses `ESFX/Frost-Shatter.mp3`.
- Electric coil placement and zaps use `ESFX/Tesla-Place.mp3` and `ESFX/Tesla-Zap.mp3`.
- Duck button uses `ESFX/Honk.mp3`; no duck image exists yet.

## Current Ability Notes For Asset Planning

- Fire now uses `Overload`: damage taken fills a `5` damage info counter, then Fire charges for 2 seconds before dashing at the opponent. Extra damage during the charge/dash increases the attack bonus. During the dash, Fire leaves small temporary flame patches that each deal 2 damage per second while overlapped until Fire hits or the dash ends.
- Ice uses `Slippery` and `Sharp Shoot`: icicles fire every 2 seconds, start slow, speed up while traveling, predict movement-focused abilities, deal 3 on hit, apply Defrost for 2 seconds, and track `Icicle's Landed` for frost-contact damage.
- Poison/Toxic uses `Anti-Virus` on the opponent info box: fresh ball overlaps add progress, Water overlaps count only once per overlap, the first cleanse requires 5 contacts, and each cleanse raises the next requirement by 5 while reducing toxic damage by 1.
- Gravity `Moon Lock` displays separate `Moon #1` and `Moon #2` states. Moons are code-drawn, orbit, launch after a full rotation, collide while orbiting, and return after launch.
- Air keeps `Blue Mode`, but its info panel no longer shows the damage range line.
