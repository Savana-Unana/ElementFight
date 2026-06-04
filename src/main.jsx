import React from "react";
import { createRoot } from "react-dom/client";
import { Settings, Trophy, Users, Wifi, X, Square, Volume2, Trash2 } from "lucide-react";
import "./styles.css";
import waterLogo from "./assets/ELogos/Water-Logo.png";
import poisonLogo from "./assets/ELogos/Toxic-Logo.png";
import plantLogo from "./assets/ELogos/Plant-Logo.png";
import waterSkin from "./assets/ESkins/Water-Normal.png";
import poisonSkin from "./assets/ESkins/Toxic-Normal.png";
import plantSkin from "./assets/ESkins/Plant-Normal.png";
import waterHurtSkin from "./assets/ESkins/Water-Hurt.png";
import poisonHurtSkin from "./assets/ESkins/Toxic-Hurt.png";
import plantHurtSkin from "./assets/ESkins/Plant-Hurt.png";
import syringeAsset from "./assets/EAttack/Syringe.png";
import flytrapIdleAsset from "./assets/EAttack/Flytrap-Idle.png";
import flytrapAttack1Asset from "./assets/EAttack/Flytrap-Attack1.png";
import flytrapAttack2Asset from "./assets/EAttack/Flytrap-Attack2.png";
import flytrapAttack3Asset from "./assets/EAttack/Flytrap-Attack3.png";
import duringLiquidSfx from "./assets/ESFX/During-Liquid.mp3";
import flytrapChompSfx from "./assets/ESFX/Flytrap-Chomp.mp3";
import flytrapPlantSfx from "./assets/ESFX/Flytrap-Plant.mp3";
import hitSfx from "./assets/ESFX/Hit.mp3";
import honkSfx from "./assets/ESFX/Honk.mp3";
import syringeSfx from "./assets/ESFX/Syringe.mp3";
import toxicWinSfx from "./assets/ESFX/Toxic-Win.mp3";

const randomCode = () =>
  Array.from({ length: 6 }, () => "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random() * 32)]).join("");

const ARENA_SIZE = 620;

const fighters = [
  {
    id: "water",
    name: "Water Ball",
    short: "H2O",
    hue: "#30b7ff",
    accent: "#d8f5ff",
    logo: waterLogo,
    skin: waterSkin,
    hurtSkin: waterHurtSkin,
    hp: 100,
    weight: 1,
    damage: 1,
    stats: { Liquid: "Solid/Water", Transparency: "30%" },
    abilities: ["Liquid", "Transparency"]
  },
  {
    id: "poison",
    name: "Poison Ball",
    short: "TXN",
    hue: "#8ce646",
    accent: "#2a0d36",
    logo: poisonLogo,
    skin: poisonSkin,
    hurtSkin: poisonHurtSkin,
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: {},
    abilities: ["Toxin"]
  },
  {
    id: "plant",
    name: "Plant Ball",
    short: "VFT",
    hue: "#31b65b",
    accent: "#f8b5c7",
    logo: plantLogo,
    skin: plantSkin,
    hurtSkin: plantHurtSkin,
    hp: 100,
    weight: 1.2,
    damage: 1,
    stats: { Overgrowth: "0 plants" },
    abilities: ["Overgrowth"]
  },
  {
    id: "gravity",
    name: "Air Ball",
    short: "AIR",
    hue: "#4f8cff",
    accent: "#d9e7ff",
    hp: 100,
    weight: 1.15,
    damage: 1,
    stats: {},
    abilities: ["Blue Mode"]
  }
];

const randomFighter = {
  id: "random",
  name: "Random",
  short: "?",
  hue: "#eeeeee",
  accent: "#111111"
};

function App() {
  const [screen, setScreen] = React.useState("intro");
  const [menuLeaving, setMenuLeaving] = React.useState(false);
  const [menuReturning, setMenuReturning] = React.useState(false);
  const hasLeftIntroRef = React.useRef(false);
  const [playerCode] = React.useState(() => localStorage.getItem("ven-code") || randomCode());
  const [targetCode, setTargetCode] = React.useState("");
  const [pendingOnlineCode, setPendingOnlineCode] = React.useState("");
  const [mode, setMode] = React.useState("local");
  const [choices, setChoices] = React.useState([]);
  const [exitHoldProgress, setExitHoldProgress] = React.useState(0);
  const choicesRef = React.useRef([]);
  const screenRef = React.useRef("intro");
  const holdRef = React.useRef({ active: false, start: 0, frame: 0, destination: null });
  const [settings, setSettings] = React.useState({ volume: 65, sfx: true, blood: true });
  const [modOpen, setModOpen] = React.useState(false);
  const [modifiers, setModifiers] = React.useState({
    arena: "Classic Box",
    speed: 1,
    damage: 1,
    health: 1,
    weight: 1,
    powerMode: false,
    pillowMode: false,
    gravity: false,
    noCooldown: false
  });

  React.useEffect(() => {
    localStorage.setItem("ven-code", playerCode);
  }, [playerCode]);

  React.useEffect(() => {
    choicesRef.current = choices;
  }, [choices]);

  React.useEffect(() => {
    screenRef.current = screen;
    if (screen === "intro") {
      if (!hasLeftIntroRef.current) return undefined;
      setMenuReturning(true);
      const timer = setTimeout(() => setMenuReturning(false), 950);
      return () => clearTimeout(timer);
    }
    hasLeftIntroRef.current = true;
    setMenuReturning(false);
    return undefined;
  }, [screen]);

  React.useEffect(() => {
    if (screen !== "select" || mode !== "online" || choices.length !== 1) return undefined;
    const timer = setTimeout(() => {
      setChoices((current) => (current.length === 1 ? [...current, fighters[Math.floor(Math.random() * fighters.length)]] : current));
    }, 1200);
    return () => clearTimeout(timer);
  }, [screen, mode, choices.length]);

  const launchSelect = (nextMode) => {
    setMode(nextMode);
    setMenuLeaving(true);
    setChoices([]);
    if (nextMode === "online") setPendingOnlineCode(targetCode.trim());
    setTimeout(() => {
      setScreen(nextMode === "online" ? "online-loading" : "select");
      setMenuLeaving(false);
    }, 1250);
  };

  React.useEffect(() => {
    if (screen !== "online-loading" || !pendingOnlineCode) return undefined;
    const timer = setTimeout(() => setScreen("select"), 1600);
    return () => clearTimeout(timer);
  }, [screen, pendingOnlineCode]);

  const chooseFighter = (fighter) => {
    const chosen = fighter.id === "random" ? fighters[Math.floor(Math.random() * fighters.length)] : fighter;
    if (mode === "online" && choices.length >= 1) return;
    setChoices((current) => (current.length < 2 ? [...current, chosen] : current));
  };

  const clearExitHold = React.useCallback(() => {
    holdRef.current.active = false;
    holdRef.current.start = 0;
    holdRef.current.destination = null;
    setExitHoldProgress(0);
    if (holdRef.current.frame) cancelAnimationFrame(holdRef.current.frame);
    holdRef.current.frame = 0;
  }, []);

  const startExitHold = React.useCallback((destination) => {
    if (holdRef.current.active) return;
    holdRef.current.active = true;
    holdRef.current.start = performance.now();
    holdRef.current.destination = destination;
    setExitHoldProgress(0.01);

    const tickHold = () => {
      if (!holdRef.current.active) return;
      const progress = Math.min(1, (performance.now() - holdRef.current.start) / 2000);
      setExitHoldProgress(progress);
      if (progress >= 1) {
        const nextScreen = holdRef.current.destination;
        clearExitHold();
        setScreen(nextScreen);
        return;
      }
      holdRef.current.frame = requestAnimationFrame(tickHold);
    };
    holdRef.current.frame = requestAnimationFrame(tickHold);
  }, [clearExitHold]);

  React.useEffect(() => {
    const onKey = (event) => {
      if (["Escape", "Backspace"].includes(event.key)) {
        const currentScreen = screenRef.current;
        const currentChoices = choicesRef.current;

        if (currentScreen === "select" && currentChoices.length && !event.repeat) {
          clearExitHold();
          setChoices((current) => current.slice(0, -1));
          return;
        }

        if (event.repeat) return;

        if (currentScreen === "battle") {
          startExitHold("select");
          return;
        }
        if (currentScreen === "select" && !currentChoices.length) {
          startExitHold("intro");
          return;
        }
        if (["online-loading", "settings", "achievements"].includes(currentScreen)) {
          startExitHold("intro");
        }
      }
      if (screenRef.current === "select" && choicesRef.current.length === 2 && ["Enter", " ", "z", "Z"].includes(event.key)) {
        setScreen("battle");
      }
    };
    const onKeyUp = (event) => {
      if (["Escape", "Backspace"].includes(event.key)) clearExitHold();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKeyUp);
      clearExitHold();
    };
  }, [clearExitHold, startExitHold]);

  const clearData = () => {
    localStorage.clear();
    setTargetCode("");
  };

  return (
    <main className="page">
      <div className={`phone-stage ${menuLeaving ? "menu-leaving" : ""} ${menuReturning ? "menu-returning" : ""} ${screen !== "intro" ? "bars-gone" : ""}`}>
        <div className="side-bar left" />
        <div className="side-bar right" />
        {screen === "intro" && (
          <Intro
            code={playerCode}
            targetCode={targetCode}
            setTargetCode={setTargetCode}
            launchSelect={launchSelect}
            setScreen={setScreen}
            leaving={menuLeaving}
          />
        )}
        {screen === "settings" && (
          <SettingsPanel
            code={playerCode}
            settings={settings}
            setSettings={setSettings}
            clearData={clearData}
            back={() => setScreen("intro")}
            exitHoldProgress={exitHoldProgress}
          />
        )}
        {screen === "achievements" && <Achievements back={() => setScreen("intro")} exitHoldProgress={exitHoldProgress} />}
        {screen === "online-loading" && <OnlineLoading back={() => setScreen("intro")} hasCode={Boolean(pendingOnlineCode)} exitHoldProgress={exitHoldProgress} />}
        {screen === "select" && (
          <CharacterSelect
            mode={mode}
            choices={choices}
            chooseFighter={chooseFighter}
            setScreen={setScreen}
            modifiers={modifiers}
            setModifiers={setModifiers}
            modOpen={modOpen}
            setModOpen={setModOpen}
            exitHoldProgress={exitHoldProgress}
          />
        )}
        {screen === "battle" && (
          <Battle
            fighters={choices}
            modifiers={modifiers}
            settings={settings}
            mode={mode}
            back={() => setScreen("select")}
            exitHoldProgress={exitHoldProgress}
          />
        )}
      </div>
    </main>
  );
}

function Intro({ code, targetCode, setTargetCode, launchSelect, setScreen, leaving }) {
  return (
    <section className="intro-screen">
      <div className="intro-content">
        <h1 className={`title-logo ${leaving ? "fly-up" : ""}`}>Elemental Ring Fights</h1>
        <div className="code-entry action-right">
          <input
            value={targetCode}
            onChange={(event) => setTargetCode(event.target.value.toUpperCase().slice(0, 6))}
            placeholder="MATCH CODE"
            aria-label="match code"
          />
        </div>
        <div className="main-buttons">
          <button className="primary action-left" onClick={() => launchSelect("local")}>
            <Users size={21} /> Local Game
          </button>
          <button className="primary action-right" onClick={() => launchSelect("online")}>
            <Wifi size={21} /> Online Game
          </button>
          <button className="primary action-left" onClick={() => setScreen("achievements")}>
            <Trophy size={21} /> Achievements
          </button>
          <button className="primary action-right" onClick={() => setScreen("settings")}>
            <Settings size={21} /> Settings
          </button>
        </div>
      </div>
      <p className={`player-code ${leaving ? "fade-code" : ""}`}>VENPlayer-Code: {code}</p>
    </section>
  );
}

function CornerBack({ onBack, holdProgress = 0 }) {
  return (
    <div className="corner-wrap corner-back-wrap">
      <button className="corner corner-back" onClick={onBack} aria-label="back">
        <X size={28} strokeWidth={4} />
      </button>
      <span className="hold-bar" style={{ width: `${Math.round(54 * holdProgress)}px`, opacity: holdProgress > 0 ? 1 : 0 }} />
    </div>
  );
}

function CharacterSelect({ mode, choices, chooseFighter, setScreen, modifiers, setModifiers, modOpen, setModOpen, exitHoldProgress }) {
  const nextPlayer = mode === "online" ? "Player 1" : `Player ${Math.min(choices.length + 1, 2)}`;
  const ready = choices.length === 2;
  const roster = [...fighters, randomFighter];
  return (
    <section className="select-screen">
      <CornerBack holdProgress={exitHoldProgress} onBack={() => (choices.length ? choices.length && window.dispatchEvent(new KeyboardEvent("keydown", { key: "Backspace" })) : setScreen("intro"))} />
      {mode === "local" && (
        <div className="corner-wrap corner-mod-wrap">
          <button className="corner corner-mod" onClick={() => setModOpen(true)} aria-label="modifiers">
            <Square size={22} fill="#6b2fd9" />
          </button>
        </div>
      )}
      <h2>{ready ? "Ready?" : `Select Your Character ${nextPlayer}`}</h2>
      <div className="versus-layout">
        <FighterPedestal label="Player 1" fighter={choices[0]} side="left" />
        <div className="roster">
          {roster.map((fighter) => (
            <button
              key={fighter.id}
              className="logo-token"
              style={{ "--hue": fighter.hue, "--accent": fighter.accent }}
              onClick={() => chooseFighter(fighter)}
              disabled={ready}
              aria-label={fighter.name}
            >
              {fighter.logo ? <img src={fighter.logo} alt="" /> : fighter.short}
            </button>
          ))}
        </div>
        <FighterPedestal label="Player 2" fighter={choices[1]} side="right" />
      </div>
      {ready && <button className="ready-button" onClick={() => setScreen("battle")}>Start Fight</button>}
      <ModifierDrawer open={modOpen} close={() => setModOpen(false)} modifiers={modifiers} setModifiers={setModifiers} />
    </section>
  );
}

function FighterPedestal({ label, fighter, side }) {
  return (
    <div className={`pedestal-wrap ${side}`}>
      <span className="player-label">{label}</span>
      <div className="pedestal">
        {fighter && (
          <>
            <div className="ball-skin" style={{ "--hue": fighter.hue, "--accent": fighter.accent }}>
              {fighter.skin && <img src={fighter.skin} alt="" />}
            </div>
            <strong>{fighter.name}</strong>
            <dl>
              <div><dt>HP</dt><dd>{fighter.hp}</dd></div>
              <div><dt>Weight</dt><dd>{fighter.weight}</dd></div>
              <div><dt>Hit</dt><dd>{fighter.damage}</dd></div>
            </dl>
          </>
        )}
      </div>
    </div>
  );
}

function ModifierDrawer({ open, close, modifiers, setModifiers }) {
  const update = (key, value) => {
    setModifiers((current) => {
      const next = { ...current, [key]: value };
      if (key === "powerMode" && value) next.pillowMode = false;
      if (key === "pillowMode" && value) next.powerMode = false;
      return next;
    });
  };
  return (
    <aside className={`modifier-drawer ${open ? "open" : ""}`}>
      <button className="drawer-close" onClick={close}><X size={20} /></button>
      <div className="tabs"><button>Arenas</button><button>Physics</button></div>
      <select value={modifiers.arena} onChange={(event) => update("arena", event.target.value)}>
        <option>Classic Box</option>
        <option>Toxic Garden</option>
        <option>Flooded Ring</option>
      </select>
      {["speed", "damage", "health", "weight"].map((key) => (
        <label className="slider-row" key={key}>
          <span>{key[0].toUpperCase() + key.slice(1)} Multiplier</span>
          <input type="range" min="0.5" max="2" step="0.1" value={modifiers[key]} onChange={(event) => update(key, Number(event.target.value))} />
          <b>{modifiers[key].toFixed(1)}x</b>
        </label>
      ))}
      {[
        ["powerMode", "Power Mode"],
        ["pillowMode", "Pillow Mode"],
        ["gravity", "Gravity Mode"],
        ["noCooldown", "No Cooldown"]
      ].map(([key, label]) => (
        <label className="toggle-row" key={key}>
          <input type="checkbox" checked={modifiers[key]} onChange={(event) => update(key, event.target.checked)} />
          <span>{label}</span>
        </label>
      ))}
    </aside>
  );
}

function Battle({ fighters: selected, modifiers, settings, mode, back, exitHoldProgress }) {
  const canvasRef = React.useRef(null);
  const playSfx = React.useCallback((src, volumeScale = 1) => {
    if (!settings.sfx) return;

    const audio = new Audio(src);
    audio.volume = Math.max(0, Math.min(1, (settings.volume / 100) * volumeScale));
    audio.play().catch(() => {});
  }, [settings.sfx, settings.volume]);
  const maxHp = React.useMemo(() => selected.map((fighter) => Math.round(fighter.hp * modifiers.health)), [selected, modifiers.health]);
  const [state, setState] = React.useState({
    hp: maxHp,
    countdown: 3,
    effects: selected.map((fighter) => ({
      liquidState: fighter.id === "water" ? "Solid" : null,
      transparency: fighter.id === "water" ? 30 : null,
      toxinStacks: 0,
      toxinDamageOutput: fighter.id === "poison" ? 0 : null,
      nextSyringe: fighter.id === "poison" ? 3 : null,
      activePlants: fighter.id === "plant" ? 0 : null,
      plantChomps: fighter.id === "plant" ? 0 : null,
      maxPlants: fighter.id === "plant" ? 5 : null,
      nextBlueMode: fighter.id === "gravity" ? 5 : null
    })),
    floating: [],
    winner: null
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setState((current) => ({ ...current, countdown: Math.max(0, current.countdown - 1) }));
    }, 900);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const box = { w: canvas.width, h: canvas.height };
    const now = performance.now();
    const cooldown = modifiers.noCooldown ? 650 : 4500;
    const blueModeCooldown = modifiers.noCooldown ? 900 : 5000;
    const makeImage = (src) => {
      const image = new Image();
      image.src = src;
      return image;
    };
    const skinImages = selected.map((fighter) => fighter.skin ? makeImage(fighter.skin) : null);
    const hurtSkinImages = selected.map((fighter) => fighter.hurtSkin ? makeImage(fighter.hurtSkin) : null);
    const syringeImage = makeImage(syringeAsset);
    const trapImages = [
      makeImage(flytrapIdleAsset),
      makeImage(flytrapAttack1Asset),
      makeImage(flytrapAttack2Asset),
      makeImage(flytrapAttack3Asset)
    ];
    const game = {
      hp: [...maxHp],
      effects: selected.map((fighter) => ({
        liquidState: fighter.id === "water" ? "Solid" : null,
        transparency: fighter.id === "water" ? 30 : null,
        toxinStacks: 0,
        toxinDamageOutput: fighter.id === "poison" ? 0 : null,
        nextSyringe: fighter.id === "poison" ? 3 : null,
        activePlants: fighter.id === "plant" ? 0 : null,
        plantChomps: fighter.id === "plant" ? 0 : null,
        maxPlants: fighter.id === "plant" ? 5 : null,
        nextBlueMode: fighter.id === "gravity" ? 5 : null
      })),
      nextSyringeAt: selected.map((fighter) => (fighter.id === "poison" ? now + cooldown : Infinity)),
      nextBlueModeAt: selected.map((fighter) => (fighter.id === "gravity" ? now + blueModeCooldown : Infinity)),
      blueModeArrows: [],
      projectiles: [],
      traps: [],
      explosions: [],
      defeatedSide: null,
      winner: null,
      floating: [],
      frame: 0,
      lastCollisionAt: 0,
      liquidDamageAccumulator: 0,
      liquidContact: null,
      lastToxinTickAt: now,
      lastHudAt: 0
    };
    const normalSpeed = 5.4 * modifiers.speed;
    const powerSpeed = 15.5 * modifiers.speed;
    const trapSpitSpeed = powerSpeed * 0.92;
    const ballRadius = Math.round(box.w * 0.075);
    const startX = box.w * 0.22;
    const startY = box.h * 0.32;
    const launchDx = box.w * 0.56;
    const launchDy = box.h * 0.36;
    const launchUnitX = launchDx / Math.hypot(launchDx, launchDy);
    const launchUnitY = launchDy / Math.hypot(launchDx, launchDy);
    const balls = selected.map((fighter, index) => {
      const direction = index ? -1 : 1;
      const vx = direction * launchUnitX * normalSpeed;
      const vy = direction * launchUnitY * normalSpeed;

      return {
        fighter,
        side: index,
        x: index ? box.w - startX : startX,
        y: index ? box.h - startY : startY,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        r: ballRadius,
        powered: false,
        poweredUntil: 0,
        lastPoweredWallAt: 0,
        trapPowerWindowUntil: 0,
        trapSpitUntil: 0,
        trappedBy: null,
        slam: null,
        hurtUntil: 0
      };
    });
    const setVelocity = (ball, angle, speed) => {
      ball.vx = Math.cos(angle) * speed;
      ball.vy = Math.sin(angle) * speed;
      if ("baseVx" in ball) {
        ball.baseVx = ball.vx;
        ball.baseVy = ball.vy;
      }
    };
    const endPower = (ball) => {
      if (!ball.powered) return;
      const speed = Math.hypot(ball.vx, ball.vy) || 1;
      ball.vx = (ball.vx / speed) * normalSpeed;
      ball.vy = (ball.vy / speed) * normalSpeed;
      ball.powered = false;
      ball.poweredUntil = 0;
    };
    const markPower = (ball, time) => {
      if (modifiers.pillowMode) return;
      const angle = Math.atan2(ball.vy, ball.vx);
      ball.powered = true;
      ball.poweredUntil = time + 3000;
      ball.trapSpitUntil = 0;
      setVelocity(ball, angle, powerSpeed);
    };
    const markPowerAtAngle = (ball, time, angle) => {
      if (modifiers.pillowMode) {
        setVelocity(ball, angle, normalSpeed);
        return;
      }
      ball.powered = true;
      ball.poweredUntil = time + 3000;
      ball.trapSpitUntil = 0;
      setVelocity(ball, angle, powerSpeed);
    };
    const randomPoweredWallAngle = (wall) => {
      const spread = (Math.random() - 0.5) * Math.PI * 0.7;
      if (wall === "left") return spread;
      if (wall === "right") return Math.PI + spread;
      if (wall === "top") return Math.PI / 2 + spread;
      return -Math.PI / 2 + spread;
    };
    const nudgeDirection = (moving) => {
      const speed = Math.hypot(moving.vx, moving.vy) || 1;
      const angle = Math.atan2(moving.vy, moving.vx) + (Math.random() - 0.5) * 0.55;
      moving.vx = Math.cos(angle) * speed;
      moving.vy = Math.sin(angle) * speed;
      if ("baseVx" in moving) {
        moving.baseVx = moving.vx;
        moving.baseVy = moving.vy;
      }
    };
    const restoreBaseVelocity = (moving) => {
      if ("baseVx" in moving && !moving.powered) {
        moving.vx = moving.baseVx;
        moving.vy = moving.baseVy;
      }
    };
    const getLiquidCooldownFrames = (transparency) => {
      const extraTransparency = Math.max(0, transparency - 30);
      return Math.max(0.1, 3 - Math.floor(extraTransparency / 5) * 0.5);
    };
    const getPlantMax = (chomps) => 5 + Math.floor(chomps / 5);
    const getWallDistance = (ball, angle) => {
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);
      const distances = [];

      if (dx > 0) distances.push((box.w - ball.r - ball.x) / dx);
      if (dx < 0) distances.push((ball.r - ball.x) / dx);
      if (dy > 0) distances.push((box.h - ball.r - ball.y) / dy);
      if (dy < 0) distances.push((ball.r - ball.y) / dy);

      return Math.max(0, Math.min(...distances.filter((distance) => distance >= 0)));
    };
    const getBlueModeTravelSpan = (ball, angle) => {
      const dx = Math.abs(Math.cos(angle));
      const dy = Math.abs(Math.sin(angle));
      const distances = [];

      if (dx > 0.001) distances.push((box.w - ball.r * 2) / dx);
      if (dy > 0.001) distances.push((box.h - ball.r * 2) / dy);

      return Math.max(1, Math.min(...distances));
    };
    const getBlueModeDamage = (travelDistance, travelSpan) => {
      const ratio = Math.max(0, Math.min(1, travelDistance / travelSpan));
      return Math.max(5, Math.round(5 - 5 * ratio + 30 * ratio * ratio));
    };
    const aimAtMovingTarget = (source, target, projectileSpeed, leadMultiplier = 1) => {
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dvx = target.vx;
      const dvy = target.vy;
      const a = dvx * dvx + dvy * dvy - projectileSpeed * projectileSpeed;
      const b = 2 * (dx * dvx + dy * dvy);
      const c = dx * dx + dy * dy;
      const discriminant = b * b - 4 * a * c;
      let t = Math.hypot(dx, dy) / projectileSpeed;
      if (discriminant >= 0 && Math.abs(a) > 0.001) {
        const rootA = (-b - Math.sqrt(discriminant)) / (2 * a);
        const rootB = (-b + Math.sqrt(discriminant)) / (2 * a);
        t = [rootA, rootB].filter((value) => value > 0).sort((left, right) => left - right)[0] || t;
      }
      return Math.atan2(target.y + target.vy * t * leadMultiplier - source.y, target.x + target.vx * t * leadMultiplier - source.x);
    };
    const chooseSyringeAim = (source, target, projectileSpeed, targetHpPercent) => {
      const missingHpPercent = 1 - Math.max(0, Math.min(1, targetHpPercent));
      const accurateChance = 0.4 + missingHpPercent * 0.4;
      const directChance = 0.4 - missingHpPercent * 0.4;
      const roll = Math.random();
      if (roll < accurateChance) return aimAtMovingTarget(source, target, projectileSpeed);
      if (roll < accurateChance + directChance) return Math.atan2(target.y - source.y, target.x - source.x);
      return aimAtMovingTarget(source, target, projectileSpeed, 1.7);
    };
    const addExplosion = (x, y, hue = "#f24f28", size = 1) => {
      game.explosions.push({ id: `${performance.now()}-${x}-${y}`, x, y, hue, size, bornAt: performance.now() });
      game.explosions = game.explosions.slice(-12);
    };
    const defeatSide = (side, time) => {
      if (game.defeatedSide !== null) return;
      game.defeatedSide = side;
      game.winner = side ? 0 : 1;
      if (selected[game.winner].id === "poison") playSfx(toxicWinSfx);

      const defeatedBall = balls[side];
      addExplosion(defeatedBall.x, defeatedBall.y, defeatedBall.fighter.hue, 1.8);
      game.projectiles
        .filter((projectile) => projectile.side === side)
        .forEach((projectile) => addExplosion(projectile.x, projectile.y, "#d9f4ff", 0.8));
      game.traps
        .filter((trap) => trap.side === side)
        .forEach((trap) => addExplosion(trap.x, trap.y, "#31b65b", 1));
      game.projectiles = game.projectiles.filter((projectile) => projectile.side !== side);
      game.traps = game.traps.filter((trap) => trap.side !== side);
      game.nextSyringeAt[side] = Infinity;
      game.effects[side].nextSyringe = game.effects[side].nextSyringe === null ? null : 0;
    };
    const pushDamage = (side, amount, x, y) => {
      if (game.defeatedSide !== null || game.hp[side] <= 0) return;
      if (game.effects[side].liquidState === "Water") return;
      game.hp[side] = Math.max(0, game.hp[side] - amount);
      playSfx(hitSfx, 0.5);
      balls[side].hurtUntil = performance.now() + 167;
      game.floating.push({ id: `${performance.now()}-${side}`, side, x, y, text: `-${amount}` });
      game.floating = game.floating.slice(-8);
      if (game.hp[side] <= 0) defeatSide(side, performance.now());
    };
    const spawnTrap = (side, x, y, angle) => {
      if (game.defeatedSide !== null || game.hp[side] <= 0) return;
      const existing = game.traps.some((trap) => Math.hypot(trap.x - x, trap.y - y) < 68);
      if (existing) return;
      const activeSideTraps = game.traps.filter((trap) => trap.side === side);
      const maxPlants = game.effects[side].maxPlants ?? 5;
      if (activeSideTraps.length >= maxPlants) return;
      game.traps.push({ id: `${performance.now()}-${side}-${game.traps.length}`, side, x, y, angle, closed: false, victimSide: null, releaseAt: 0, powerRelease: false });
      playSfx(flytrapPlantSfx);
      if (game.effects[side].activePlants !== null) game.effects[side].activePlants = activeSideTraps.length + 1;
    };
    const harshKnock = (ball, angle) => {
      setVelocity(ball, angle, trapSpitSpeed);
    };
    const finishSlamIntoWall = (ball) => {
      if (!ball.slam) return;

      const travelDistance = Math.hypot(ball.x - ball.slam.startX, ball.y - ball.slam.startY);
      const damage = getBlueModeDamage(travelDistance, ball.slam.travelSpan);
      const reboundAngle = Math.atan2(-ball.vy, -ball.vx);
      ball.slam = null;
      restoreBaseVelocity(ball);
      pushDamage(ball.side, damage, ball.x, ball.y);
      if (damage > 10 && game.hp[ball.side] > 0) markPowerAtAngle(ball, performance.now(), reboundAngle);
    };
    const bounceBalls = (a, b, time) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.hypot(dx, dy) || 1;
      const nx = dx / dist;
      const ny = dy / dist;
      const overlap = a.r + b.r - dist;
      a.x -= nx * overlap * 0.5;
      a.y -= ny * overlap * 0.5;
      b.x += nx * overlap * 0.5;
      b.y += ny * overlap * 0.5;
      if (a.powered || b.powered) {
        if (a.powered) {
          harshKnock(b, Math.atan2(ny, nx));
          setVelocity(a, Math.atan2(-ny, -nx) + 0.18, powerSpeed);
        }
        if (b.powered) {
          harshKnock(a, Math.atan2(-ny, -nx));
          setVelocity(b, Math.atan2(ny, nx) - 0.18, powerSpeed);
        }
        return;
      }
      const avn = a.vx * nx + a.vy * ny;
      const bvn = b.vx * nx + b.vy * ny;
      const impulse = bvn - avn;
      a.vx += impulse * nx;
      a.vy += impulse * ny;
      b.vx -= impulse * nx;
      b.vy -= impulse * ny;
      if (!modifiers.pillowMode && modifiers.powerMode) {
        markPower(a, time);
        markPower(b, time);
      }
    };
    const drawBall = (ball) => {
      const effect = game.effects[ball.side];
      ctx.globalAlpha = effect.transparency !== null ? Math.max(0.18, 1 - effect.transparency / 100) : 1;
      const skin = performance.now() < ball.hurtUntil ? hurtSkinImages[ball.side] || skinImages[ball.side] : skinImages[ball.side];
      if (skin?.complete && skin.naturalWidth) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(skin, ball.x - ball.r, ball.y - ball.r, ball.r * 2, ball.r * 2);
        ctx.restore();
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        const grad = ctx.createRadialGradient(ball.x - 12, ball.y - 14, 6, ball.x, ball.y, ball.r);
        grad.addColorStop(0, ball.fighter.accent);
        grad.addColorStop(1, ball.fighter.hue);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#111";
      ctx.font = "800 15px Inter, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(`HP: ${game.hp[ball.side]}`, ball.x, ball.y - ball.r - 8);
    };
    const drawTrap = (trap) => {
      ctx.save();
      ctx.translate(trap.x, trap.y);
      ctx.rotate(trap.angle + Math.PI / 2);
      const attackIndex = trap.closed ? Math.min(3, Math.max(1, Math.floor(((trap.releaseAt - performance.now()) / 240) * -3) + 3)) : 0;
      const image = trapImages[attackIndex];
      if (image?.complete && image.naturalWidth) {
        ctx.drawImage(image, -47, -47, 94, 94);
      } else {
        ctx.fillStyle = trap.closed ? "#247d3b" : "#31b65b";
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 3;
        ctx.beginPath();
        const snap = trap.closed ? 0.55 : 1;
        ctx.ellipse(-16, 0, 30, 15 * snap, 0, 0, Math.PI * 2);
        ctx.ellipse(16, 0, 30, 15 * snap, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#f8b5c7";
        ctx.fillRect(-6, -4, 12, 8);
      }
      ctx.restore();
    };
    const drawExplosion = (explosion, time) => {
      const age = Math.min(1, (time - explosion.bornAt) / 520);
      ctx.save();
      ctx.globalAlpha = 1 - age;
      ctx.fillStyle = explosion.hue;
      ctx.beginPath();
      ctx.arc(explosion.x, explosion.y, (18 + age * 42) * explosion.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#111";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    };
    const drawProjectile = (projectile) => {
      ctx.save();
      ctx.translate(projectile.x, projectile.y);
      ctx.rotate(Math.atan2(projectile.vy, projectile.vx) + Math.PI / 2);
      if (syringeImage.complete && syringeImage.naturalWidth) {
        const height = 34;
        const width = height * (syringeImage.naturalWidth / syringeImage.naturalHeight);
        ctx.drawImage(syringeImage, -width / 2, -height / 2, width, height);
      } else {
        ctx.fillStyle = "#d9f4ff";
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 2;
        ctx.fillRect(-13, -4, 24, 8);
        ctx.strokeRect(-13, -4, 24, 8);
        ctx.beginPath();
        ctx.moveTo(13, 0);
        ctx.lineTo(21, -5);
        ctx.lineTo(21, 5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();
    };
    const drawBlueModeArrow = (arrow, time) => {
      const spinProgress = Math.max(0, Math.min(1, (time - arrow.startedAt) / 1000));
      const angle = arrow.angle + spinProgress * Math.PI * 2;
      const size = Math.min(box.w, box.h) * 0.7;
      const shaftWidth = size * 0.22;

      ctx.save();
      ctx.translate(box.w / 2, box.h / 2);
      ctx.rotate(angle);
      ctx.globalAlpha = 0.42;
      ctx.fillStyle = "#8e959f";
      ctx.strokeStyle = "#333840";
      ctx.lineWidth = Math.max(5, size * 0.035);
      ctx.beginPath();
      ctx.moveTo(size / 2, 0);
      ctx.lineTo(size * 0.14, -size * 0.3);
      ctx.lineTo(size * 0.14, -shaftWidth / 2);
      ctx.lineTo(-size / 2, -shaftWidth / 2);
      ctx.lineTo(-size / 2, shaftWidth / 2);
      ctx.lineTo(size * 0.14, shaftWidth / 2);
      ctx.lineTo(size * 0.14, size * 0.3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.restore();
    };
    let lastTime = now;
    let raf;
    const draw = (time) => {
      game.frame += 1;
      const dt = Math.min(32, time - lastTime);
      lastTime = time;
      ctx.clearRect(0, 0, box.w, box.h);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, box.w, box.h);
      ctx.strokeStyle = "#111";
      ctx.lineWidth = 5;
      ctx.strokeRect(2, 2, box.w - 4, box.h - 4);
      game.blueModeArrows.forEach((arrow) => drawBlueModeArrow(arrow, time));

      if (!state.countdown) {
        balls.forEach((ball) => {
          if (game.hp[ball.side] <= 0) return;
          if (ball.powered && time >= ball.poweredUntil) endPower(ball);
          if (!ball.powered && ball.trapSpitUntil && time >= ball.trapSpitUntil) {
            setVelocity(ball, Math.atan2(ball.vy, ball.vx), normalSpeed);
            ball.trapSpitUntil = 0;
          }
          if (ball.inLiquid && game.effects[ball.side].liquidState !== "Water") {
            restoreBaseVelocity(ball);
            ball.inLiquid = false;
          }
          if (ball.trappedBy) {
            const trap = game.traps.find((candidate) => candidate.id === ball.trappedBy);
            if (trap) {
              ball.x = trap.x;
              ball.y = trap.y;
            }
            return;
          }
          ball.vy += modifiers.gravity ? 0.045 : 0;
          ball.x += ball.vx;
          ball.y += ball.vy;

          if (ball.x < ball.r) {
            ball.x = ball.r;
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y);
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("left"), powerSpeed);
            } else {
              ball.vx = Math.abs(ball.vx);
            }
            if (ball.fighter.id === "plant") spawnTrap(ball.side, 8, ball.y, 0);
          }
          if (ball.x > box.w - ball.r) {
            ball.x = box.w - ball.r;
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y);
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("right"), powerSpeed);
            } else {
              ball.vx = -Math.abs(ball.vx);
            }
            if (ball.fighter.id === "plant") spawnTrap(ball.side, box.w - 8, ball.y, Math.PI);
          }
          if (ball.y < ball.r) {
            ball.y = ball.r;
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y);
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("top"), powerSpeed);
            } else {
              ball.vy = Math.abs(ball.vy);
            }
            if (ball.fighter.id === "plant") spawnTrap(ball.side, ball.x, 8, Math.PI / 2);
          }
          if (ball.y > box.h - ball.r) {
            ball.y = box.h - ball.r;
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y);
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("bottom"), powerSpeed);
            } else {
              ball.vy = -Math.abs(ball.vy);
            }
            if (ball.fighter.id === "plant") spawnTrap(ball.side, ball.x, box.h - 8, -Math.PI / 2);
          }
        });

        const dx = balls[1].x - balls[0].x;
        const dy = balls[1].y - balls[0].y;
        const dist = Math.hypot(dx, dy);
        const touching = !balls.some((ball) => ball.trappedBy) && dist < balls[0].r + balls[1].r;
        game.effects.forEach((effect) => {
          if (effect.liquidState !== null) effect.liquidState = "Solid";
        });
        if (touching && game.defeatedSide === null) {
          const waterSide = balls.find((ball) => ball.fighter.id === "water")?.side;
          if (waterSide !== undefined) {
            const otherSide = waterSide ? 0 : 1;
            const liquidStarted = !game.liquidContact;
            game.liquidContact = { waterSide, otherSide };
            game.effects[waterSide].liquidState = "Water";
            if (liquidStarted) playSfx(duringLiquidSfx);
            game.effects[waterSide].transparency = Math.min(92, game.effects[waterSide].transparency + 0.12);
            if (!balls[otherSide].inLiquid) {
              balls[otherSide].baseVx = balls[otherSide].vx;
              balls[otherSide].baseVy = balls[otherSide].vy;
              balls[otherSide].inLiquid = true;
            }
            balls[otherSide].vx = balls[otherSide].baseVx * 0.8;
            balls[otherSide].vy = balls[otherSide].baseVy * 0.8;
            game.liquidDamageAccumulator += 1;
            const liquidCooldown = getLiquidCooldownFrames(game.effects[waterSide].transparency);
            while (game.liquidDamageAccumulator >= liquidCooldown) {
              pushDamage(otherSide, 1, (balls[0].x + balls[1].x) / 2, (balls[0].y + balls[1].y) / 2);
              game.liquidDamageAccumulator -= liquidCooldown;
            }
          } else if (time - game.lastCollisionAt > 260) {
            bounceBalls(balls[0], balls[1], time);
            const hitDamage = Math.max(1, Math.round(modifiers.damage));
            pushDamage(0, hitDamage, balls[0].x, balls[0].y);
            pushDamage(1, hitDamage, balls[1].x, balls[1].y);
            game.lastCollisionAt = time;
          }
        } else if (game.liquidContact) {
          const releasedBall = balls[game.liquidContact.otherSide];
          restoreBaseVelocity(releasedBall);
          nudgeDirection(releasedBall);
          releasedBall.inLiquid = false;
          game.liquidDamageAccumulator = 0;
          game.liquidContact = null;
        }

        selected.forEach((fighter, index) => {
          if (fighter.id === "poison" && game.hp[index] > 0 && game.defeatedSide === null) {
            game.effects[index].nextSyringe = Math.max(0, (game.nextSyringeAt[index] - time) / 1000);
            if (time >= game.nextSyringeAt[index]) {
              const target = balls[index ? 0 : 1];
              const source = balls[index];
              const syringeSpeed = 12.5;
              const targetHpPercent = game.hp[target.side] / maxHp[target.side];
              const angle = chooseSyringeAim(source, target, syringeSpeed, targetHpPercent);
              playSfx(syringeSfx);
              game.projectiles.push({
                side: index,
                target: index ? 0 : 1,
                x: source.x,
                y: source.y,
                vx: Math.cos(angle) * syringeSpeed,
                vy: Math.sin(angle) * syringeSpeed,
                baseVx: Math.cos(angle) * syringeSpeed,
                baseVy: Math.sin(angle) * syringeSpeed,
                inLiquid: false
              });
              game.nextSyringeAt[index] = time + cooldown;
            }
          }
          if (fighter.id === "gravity" && game.hp[index] > 0 && game.defeatedSide === null) {
            game.effects[index].nextBlueMode = Math.max(0, (game.nextBlueModeAt[index] - time) / 1000);
            if (time >= game.nextBlueModeAt[index]) {
              game.blueModeArrows.push({
                id: `${time}-${index}`,
                side: index,
                target: index ? 0 : 1,
                angle: Math.random() * Math.PI * 2,
                startedAt: time,
                slammed: false
              });
              game.nextBlueModeAt[index] = time + blueModeCooldown;
            }
          }
        });

        game.blueModeArrows.forEach((arrow) => {
          const target = balls[arrow.target];
          if (arrow.slammed || time - arrow.startedAt < 1000) return;
          if (game.hp[arrow.side] <= 0 || game.hp[arrow.target] <= 0 || game.defeatedSide !== null) return;

          const angle = arrow.angle + Math.PI * 2;
          const slamSpeed = 18 * modifiers.speed;
          target.trappedBy = null;
          target.powered = false;
          target.slam = {
            startX: target.x,
            startY: target.y,
            travelSpan: getBlueModeTravelSpan(target, angle)
          };
          target.vx = Math.cos(angle) * slamSpeed;
          target.vy = Math.sin(angle) * slamSpeed;
          arrow.slammed = true;
        });
        game.blueModeArrows = game.blueModeArrows.filter((arrow) => time - arrow.startedAt < 1200);

        game.projectiles = game.projectiles.filter((projectile) => {
          projectile.x += projectile.vx;
          projectile.y += projectile.vy;
          const target = balls[projectile.target];
          if (game.defeatedSide !== null || game.hp[projectile.side] <= 0 || game.hp[projectile.target] <= 0) return false;
          const projectileTouchingLiquid = game.effects[projectile.target].liquidState === "Water" && Math.hypot(projectile.x - target.x, projectile.y - target.y) < target.r + 8;
          if (projectileTouchingLiquid) {
            if (!projectile.inLiquid) {
              projectile.inLiquid = true;
            }
            projectile.vx = projectile.baseVx * 0.8;
            projectile.vy = projectile.baseVy * 0.8;
            return projectile.x > -30 && projectile.x < box.w + 30 && projectile.y > -30 && projectile.y < box.h + 30;
          }
          if (projectile.inLiquid) {
            nudgeDirection(projectile);
            projectile.baseVx = projectile.vx;
            projectile.baseVy = projectile.vy;
            projectile.inLiquid = false;
          }
          if (Math.hypot(projectile.x - target.x, projectile.y - target.y) < target.r + 8) {
            game.effects[projectile.target].toxinStacks = (game.effects[projectile.target].toxinStacks || 0) + 1;
            if (game.effects[projectile.side].toxinDamageOutput !== null) {
              game.effects[projectile.side].toxinDamageOutput += 1;
            }
            return false;
          }
          return projectile.x > -30 && projectile.x < box.w + 30 && projectile.y > -30 && projectile.y < box.h + 30;
        });

        if (game.defeatedSide === null && time - game.lastToxinTickAt >= 1000) {
          game.effects.forEach((effect, index) => {
            if (effect.toxinStacks > 0) pushDamage(index, effect.toxinStacks, balls[index].x, balls[index].y - 28);
          });
          game.lastToxinTickAt = time;
        }

        game.traps.forEach((trap) => {
          if (trap.closed) {
            if (trap.victimSide !== null) {
              const victim = balls[trap.victimSide];
              victim.x = trap.x;
              victim.y = trap.y;
              victim.vx = 0;
              victim.vy = 0;
              if (time >= trap.releaseAt) {
                victim.trappedBy = null;
                if (trap.powerRelease) {
                  markPowerAtAngle(victim, time, trap.angle);
                } else {
                  victim.powered = false;
                  victim.poweredUntil = 0;
                  setVelocity(victim, trap.angle, trapSpitSpeed);
                  victim.trapPowerWindowUntil = time + 1000;
                  victim.trapSpitUntil = time + 1000;
                }
                trap.closedAt = time;
                trap.victimSide = null;
              }
            }
            return;
          }
          const enemy = balls[trap.side ? 0 : 1];
          const centerHitboxRadius = 12 * 1.1;
          if (game.defeatedSide === null && game.hp[trap.side] > 0 && game.hp[enemy.side] > 0 && Math.hypot(trap.x - enemy.x, trap.y - enemy.y) < enemy.r + centerHitboxRadius) {
            trap.closed = true;
            playSfx(flytrapChompSfx);
            if (game.effects[trap.side].plantChomps !== null) {
              game.effects[trap.side].plantChomps += 1;
              game.effects[trap.side].maxPlants = getPlantMax(game.effects[trap.side].plantChomps);
            }
            trap.victimSide = enemy.side;
            trap.powerRelease = enemy.trapPowerWindowUntil >= time;
            trap.releaseAt = time + 240;
            enemy.trappedBy = trap.id;
            enemy.trapPowerWindowUntil = 0;
            enemy.trapSpitUntil = 0;
            enemy.x = trap.x;
            enemy.y = trap.y;
            enemy.vx = 0;
            enemy.vy = 0;
            pushDamage(enemy.side, 5, enemy.x, enemy.y);
          }
        });
        game.traps = game.traps.filter((trap) => !trap.closedAt || time - trap.closedAt < 420);
        game.effects.forEach((effect, index) => {
          if (effect.activePlants !== null) effect.activePlants = game.traps.filter((trap) => trap.side === index).length;
        });
      }

      game.projectiles.forEach(drawProjectile);
      game.explosions = game.explosions.filter((explosion) => time - explosion.bornAt < 560);
      game.explosions.forEach((explosion) => drawExplosion(explosion, time));
      balls.filter((ball) => game.hp[ball.side] > 0).forEach(drawBall);
      game.traps.forEach(drawTrap);

      if (time - game.lastHudAt > 80) {
        setState((current) => ({
          ...current,
          hp: [...game.hp],
          effects: game.effects.map((effect) => ({ ...effect })),
          floating: [...game.floating],
          defeatedSide: game.defeatedSide,
          winner: game.winner
        }));
        game.lastHudAt = time;
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [selected, modifiers, state.countdown, maxHp, playSfx]);

  return (
    <section className="battle-screen">
      <CornerBack onBack={back} holdProgress={exitHoldProgress} />
      <div className="battle-box">
        <canvas ref={canvasRef} width={ARENA_SIZE} height={ARENA_SIZE} />
        {state.countdown > 0 && <div className="countdown">{state.countdown}</div>}
        {state.floating.map((hit) => (
          <span key={hit.id} className="damage-pop" style={{ left: `${(hit.x / ARENA_SIZE) * 100}%`, top: `${(hit.y / ARENA_SIZE) * 100}%` }}>{hit.text}</span>
        ))}
        {Number.isInteger(state.winner) && <div className="win-banner">{selected[state.winner].name} Wins!</div>}
      </div>
      <div className="battle-hud">
        <div className="ability-info">
          <EffectPanel fighter={selected[0]} effects={state.effects[0]} side="Player 1" mode={mode} />
          <EffectPanel fighter={selected[1]} effects={state.effects[1]} side="Player 2" mode={mode} />
        </div>
      </div>
    </section>
  );
}

function EffectPanel({ fighter, effects, side, mode }) {
  const lines = [];
  const getLiquidCooldownFrames = (transparency) => {
    const extraTransparency = Math.max(0, transparency - 30);
    return Math.max(0.1, 3 - Math.floor(extraTransparency / 5) * 0.5);
  };
  if (fighter.id === "water") {
    lines.push(`State: ${effects.liquidState}`);
    lines.push(`Transparency: ${Math.round(effects.transparency)}%`);
    lines.push(`DMG cooldown: ${getLiquidCooldownFrames(effects.transparency).toFixed(1)} frames`);
  }
  if (fighter.id === "poison") {
    lines.push(`Next syringe: ${effects.nextSyringe.toFixed(1)} sec`);
    lines.push(`DMG per sec: ${effects.toxinDamageOutput}`);
  }
  if (fighter.id === "plant") {
    lines.push(`Plants: ${effects.activePlants}/${effects.maxPlants}`);
    lines.push(`Chomps Until Upgrade: ${effects.plantChomps % 5}/5`);
  }
  if (fighter.id === "gravity") {
    lines.push(`Next blue mode: ${effects.nextBlueMode.toFixed(1)} sec`);
  }
  return (
    <div className="effect-panel">
      {mode !== "local" && <strong>{side}</strong>}
      <span>Abilities: {fighter.abilities.join(" + ")}</span>
      {lines.map((line) => <small key={line}>{line}</small>)}
    </div>
  );
}

function OnlineLoading({ back, hasCode, exitHoldProgress }) {
  return (
    <section className="loading-screen">
      <CornerBack onBack={back} holdProgress={exitHoldProgress} />
      <Wifi size={52} />
      <h2>{hasCode ? "Finding Match" : "Finding Match"}</h2>
      <div className="loader" />
    </section>
  );
}

function Achievements({ back, exitHoldProgress }) {
  return (
    <section className="simple-panel">
      <CornerBack onBack={back} holdProgress={exitHoldProgress} />
      <Trophy size={48} />
      <h2>Achievements</h2>
      <div className="achievement-list">
        <span>First Splash</span>
        <span>Toxin Trouble</span>
        <span>Garden Wall</span>
      </div>
    </section>
  );
}

function SettingsPanel({ code, settings, setSettings, clearData, back, exitHoldProgress }) {
  const honk = () => {
    if (!settings.sfx) return;
    const audio = new Audio(honkSfx);
    audio.volume = settings.volume / 100;
    audio.play().catch(() => {});
  };
  return (
    <section className="settings-screen">
      <CornerBack onBack={back} holdProgress={exitHoldProgress} />
      <h2>Settings</h2>
      <label className="slider-row">
        <Volume2 size={20} />
        <input type="range" min="0" max="100" value={settings.volume} onChange={(event) => setSettings({ ...settings, volume: Number(event.target.value) })} />
        <b>{settings.volume}%</b>
      </label>
      <label className="toggle-row">
        <input type="checkbox" checked={settings.sfx} onChange={(event) => setSettings({ ...settings, sfx: event.target.checked })} />
        <span>SFX</span>
      </label>
      <label className="toggle-row">
        <input type="checkbox" checked={settings.blood} onChange={(event) => setSettings({ ...settings, blood: event.target.checked })} />
        <span>Blood Filter</span>
      </label>
      <button className="duck-button" onClick={honk}>Duck</button>
      <button className="danger-button" onClick={clearData}><Trash2 size={18} /> Clear Data</button>
      <p className="player-code">VENPlayer-Code: {code}</p>
    </section>
  );
}

export default App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
