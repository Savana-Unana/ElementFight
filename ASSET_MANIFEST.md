# Elemental Ring Fights Asset Manifest

Future Codex: check this file before asking what assets exist or what still needs to be added.

## Provided Assets Currently In Project

### `src/assets/ELogos`
- `Water-Logo.png`
- `Toxic-Logo.png`
- `Life-Logo.png`
- `Moon-Logo.png` - used for Gravity's small moons.
- `Gravity-Logo.png`
- `Baseball-Logo.png`
- `Random-Logo.png`

### `src/assets/EAccessories`
- `Blindfold.png` - used by Water.
- `ScienceHair.png` - used by Electric.
- `Cap.png` - used by Baseball.

### `src/assets/ESkins`
- `Water-Normal.png`
- `Water-Hurt.png`
- `Toxic-Normal.png`
- `Toxic-Hurt.png`
- `Life-Normal.png`
- `Life-Hurt.png`

### `src/assets/EAttack`
- `Syringe.png`
- `Icicle.png`
- `Lightning.png`
- `Flytrap-Idle.png`
- `Flytrap-Attack1.png`
- `Flytrap-Attack2.png`
- `Flytrap-Attack3.png`
- `Basebat.png`
- `Tesla.png`

### `src/assets/ESFX`
- `Air-Slam.mp3`
- `Air-Win.mp3`
- `Airrow-Appear.mp3`
- `Baseball-Charge.mp3`
- `Baseball-Frenzy.mp3`
- `Baseball-Hit.mp3`
- `Baseball-Swing.mp3`
- `Baseball-Win.mp3`
- `Default-Win.mp3`
- `Digital-Crashout.mp3`
- `Digital-Spawn.mp3`
- `Digital-Win.mp3`
- `Electric-Win.mp3`
- `Explosion1.mp3`
- `Explosion2.mp3`
- `Explosion3.mp3`
- `Fire-Charge.mp3`
- `Fire-Launch.mp3`
- `Fire-Win.mp3`
- `Flytrap-Chomp.mp3`
- `Flytrap-Life.mp3`
- `Frost-Shatter.mp3`
- `Ghost-Win.mp3` - used by Fear Ball.
- `Gravity-Win.mp3`
- `Honk.mp3`
- `During-Liquid.mp3`
- `Hit.mp3`
- `Icicle-Throw.mp3`
- `Ice-Win.mp3`
- `Life-Win.mp3`
- `Luck-Earn.mp3`
- `Luck-Gamble.mp3`
- `Luck-Nothing.mp3`
- `Luck-Win.mp3`
- `Luck-X.mp3`
- `PowerHit.mp3`
- `RoundBegin.mp3`
- `Syringe.mp3`
- `Tesla-Place.mp3`
- `Tesla-Zap.mp3`
- `ToxicLuck-Win.mp3` - provided but intentionally not wired; superseded by `Luck-Win.mp3`.
- `Toxic-Win.mp3`
- `Water-Win.mp3`

### `src/assets/OtherStuff`
- `Modifier.png`

### Empty Or Not Yet Provided
- `src/assets/EParticles`
- `src/assets/Misc`

## Faces And Icons Still Wanted

### `src/assets/ELogos`
- Fire logo
- Ice logo
- Electric logo
- Digital logo
- Fear logo
- Luck logo

### `src/assets/ESkins`
- Fire normal/hurt skins
- Ice normal/hurt skins
- Electric normal/hurt skins
- Gravity normal/hurt skins
- Digital normal/hurt skins
- Fear normal/hurt skins
- Luck normal/hurt skins

## Current Code Asset Usage

- Character select logos use provided `ELogos` images where available.
- Random select uses `ELogos/Random-Logo.png`.
- Baseball uses `ELogos/Baseball-Logo.png` for both logo and skin.
- Fire, Ice, Electric, Digital, Fear, and Luck currently use code-drawn fallback ball art. Gravity uses `Gravity-Logo.png` for select but code-drawn fallback ball art in battle.
- Pedestal balls and battle balls use provided `ESkins/*-Normal.png` images when present.
- Hurt skins are conditionally swapped during damage frames when available.
- Water, Electric, and Baseball draw visual-only accessories from `EAccessories`; these do not affect hitboxes.
- Syringes use `EAttack/Syringe.png`.
- Life flytraps use `Flytrap-Idle.png` and attack frames.
- Baseball bat uses `EAttack/Basebat.png`.
- Tesla coils use `EAttack/Tesla.png`, rotated to match wall placement.
- Digital Genesis objects are code-drawn glitch shapes. Settled box results are code-drawn; flytrap and tesla results reuse the existing Life flytrap and Electric tesla assets.
- Earth Rockslide rocks are code-drawn and currently have no dedicated logo, skin, attack sprite, or SFX.
- Gravity moons use `ELogos/Moon-Logo.png`.
- Fire Overload charge/dash is currently code-drawn.
- Icicles use `EAttack/Icicle.png`.
- Lightning zaps use `EAttack/Lightning.png`.
- The modifier corner button uses `OtherStuff/Modifier.png`.
- Winner sounds use fighter-specific `*-Win.mp3` files when available, with `Default-Win.mp3` as fallback.
- Luck Ball uses the `Luck-*.mp3` sound set.
- Sharp Shoot uses `ESFX/Icicle-Throw.mp3`.
- Defrost contact shatter uses `ESFX/Frost-Shatter.mp3`.
- Electric coil placement and zaps use `ESFX/Tesla-Place.mp3` and `ESFX/Tesla-Zap.mp3`.
- Digital Genesis plays `ESFX/Digital-Spawn.mp3` when each new object spawns, then reuses `ESFX/Flytrap-Life.mp3`, `ESFX/Tesla-Place.mp3`, and `ESFX/PowerHit.mp3` when generated objects become flytraps, teslas, or boxes. Digital Meltdown starts with `ESFX/Digital-Crashout.mp3`, uses `ESFX/Air-Slam.mp3` for wall slams, and Digital wins with `ESFX/Digital-Win.mp3`.
- Fire Overload uses `ESFX/Fire-Charge.mp3` during the exact charge window and `ESFX/Fire-Launch.mp3` when dashing.
- Water liquid contact uses `ESFX/During-Liquid.mp3` only while contact is active.
- Air Blue Mode uses `ESFX/Airrow-Appear.mp3`; wall slam damage uses `ESFX/Air-Slam.mp3`.
- Powered wall damage uses `ESFX/PowerHit.mp3`.
- Baseball uses `ESFX/Baseball-Charge.mp3`, `ESFX/Baseball-Swing.mp3`, `ESFX/Baseball-Hit.mp3`, and `ESFX/Baseball-Frenzy.mp3`.
- Luck uses `ESFX/Luck-Gamble.mp3` when the slot reels start spinning, capped to the 1 second reel spin. `ESFX/Luck-Nothing.mp3` is capped to about 0.5 seconds for quick no-result feedback; `ESFX/Luck-Earn.mp3` and `ESFX/Luck-X.mp3` play at their source lengths, and `ESFX/Luck-Win.mp3` is used for wins. Luck bottles and slot reels are currently code-drawn.
- Fight start uses `ESFX/RoundBegin.mp3` when the countdown ends.
- Ball explosions use `ESFX/Explosion1.mp3`, `ESFX/Explosion2.mp3`, and `ESFX/Explosion3.mp3`.
- Duck button uses `ESFX/Honk.mp3`.

## Current Ability Notes For Asset Planning

- Fire now uses `Overload`: damage taken fills a `5` damage info counter, then Fire charges for 2 seconds before dashing at the opponent. Extra damage during the charge/dash increases the attack bonus.
- Ice uses `Slippery` and `Sharp Shoot`: icicles fire every 2 seconds, start slow, speed up while traveling, predict movement-focused abilities, deal 3 on hit, apply Defrost for 2 seconds, and track `Icicle's Landed` for frost-contact damage.
- Poison/Toxic uses `Anti-Virus` on the opponent info box: fresh ball overlaps add progress, Water overlaps count only once per overlap, the first cleanse requires 5 contacts, and each cleanse raises the next requirement by 5 while reducing toxic damage by 1.
- Gravity `Moon Lock` displays separate `Moon #1` and `Moon #2` states. Moons use `Moon-Logo.png`, orbit, launch after a full rotation, collide while orbiting, and return after launch. Moons are affected by liquid, icicle chill, and Baseball bat reflection, but not by syringes.
- Air keeps `Blue Mode`, but its info panel no longer shows the damage range line.
- Earth uses `Rockslide`: every 5 seconds, code-drawn rocks of mixed sizes fall from above the arena. Rocks collide only with other rocks and arena bounds, but each rock that overlaps the enemy deals 2 damage with no stun or power shot effect.
- Digital uses `Genesis` and `Meltdown`: Genesis emits a code-drawn glitch shape every 2 seconds, slides it for 2-4 seconds without ball collision, then resolves it into a wall-valid flytrap, permanent no-collision tesla, or one-use box that deals 3 damage and launches the enemy in a random boosted direction. Genesis flytraps use the same latch, bite, animation, and spit-release behavior as Life flytraps. Genesis objects do not expire by time or count; Digital does not collide with its own settled objects, boxes and flytraps disappear only when the enemy touches them, and settled Genesis teslas join the Tesla zap web while staying on field. Meltdown triggers when Digital would fall to 1 HP, explodes every ball's active field objects as if their users died, shows `Winner:<Ball Name>` in both info boxes at 0.5 seconds per character, disables both balls' abilities, and hand-slams the opponent for 3 damage per typed character until the text finishes, then Digital dies.
- Fear uses `Spooky`: every 5 seconds it toggles between Normal and Plasma. In Plasma, Fear has no interaction with balls, projectiles, constructs, or objects. On returning to Normal, it jumpscares if the enemy is close enough, dealing 5 damage, healing Fear by 5 HP, and adding 1 toxic stack.
- Luck uses `Roll or Die`: its info box shows three code-drawn slot reels. Every 2 seconds it spins for 1 second, then resolves Glove, Bottle, Arrows, and X results. Glove adds persistent impact damage, Bottle heals and throws direct-damage stun bottles, Arrows swaps positions and optionally HP, X self-damages, and any all-non-X roll grants Life Steal. Life Steal only heals from direct contact and Luck bottle damage, not toxin, tesla, flytrap, or Genesis box damage.
- Tesla webs deactivate when the round ends, clearing coils, bolts, and queued zaps after the win condition is reached.
- Leaderboard data is localStorage-backed and only records fights when the select-screen record toggle is enabled.
