import React from "react";
import { createRoot } from "react-dom/client";
import { BarChart3, Circle, Settings, Users, Wifi, X, Volume2, Trash2 } from "lucide-react";
import "./styles.css";
import waterLogo from "./assets/ELogos/Water-Logo.png";
import poisonLogo from "./assets/ELogos/Toxic-Logo.png";
import lifeLogo from "./assets/ELogos/Life-Logo.png";
import moonLogo from "./assets/ELogos/Moon-Logo.png";
import gravityLogo from "./assets/ELogos/Gravity-Logo.png";
import baseballLogo from "./assets/ELogos/Baseball-Logo.png";
import randomLogo from "./assets/ELogos/Random-Logo.png";
import modifierIcon from "./assets/Misc/Modifier.png";
import waterSkin from "./assets/ESkins/Water-Normal.png";
import poisonSkin from "./assets/ESkins/Toxic-Normal.png";
import lifeSkin from "./assets/ESkins/Life-Normal.png";
import waterHurtSkin from "./assets/ESkins/Water-Hurt.png";
import poisonHurtSkin from "./assets/ESkins/Toxic-Hurt.png";
import lifeHurtSkin from "./assets/ESkins/Life-Hurt.png";
import syringeAsset from "./assets/EAttack/Syringe.png";
import icicleAsset from "./assets/EAttack/Icicle.png";
import lightningAsset from "./assets/EAttack/Lightning.png";
import flytrapIdleAsset from "./assets/EAttack/Flytrap-Idle.png";
import flytrapAttack1Asset from "./assets/EAttack/Flytrap-Attack1.png";
import flytrapAttack2Asset from "./assets/EAttack/Flytrap-Attack2.png";
import flytrapAttack3Asset from "./assets/EAttack/Flytrap-Attack3.png";
import baseballBatAsset from "./assets/EAttack/Basebat.png";
import teslaAsset from "./assets/EAttack/Tesla.png";
import duringLiquidSfx from "./assets/ESFX/During-Liquid.mp3";
import flytrapChompSfx from "./assets/ESFX/Flytrap-Chomp.mp3";
import flytrapLifeSfx from "./assets/ESFX/Flytrap-Life.mp3";
import frostShatterSfx from "./assets/ESFX/Frost-Shatter.mp3";
import hitSfx from "./assets/ESFX/Hit.mp3";
import honkSfx from "./assets/ESFX/Honk.mp3";
import icicleThrowSfx from "./assets/ESFX/Icicle-Throw.mp3";
import powerHitSfx from "./assets/ESFX/PowerHit.mp3";
import roundBeginSfx from "./assets/ESFX/RoundBegin.mp3";
import explosion1Sfx from "./assets/ESFX/Explosion1.mp3";
import explosion2Sfx from "./assets/ESFX/Explosion2.mp3";
import explosion3Sfx from "./assets/ESFX/Explosion3.mp3";
import syringeSfx from "./assets/ESFX/Syringe.mp3";
import teslaPlaceSfx from "./assets/ESFX/Tesla-Place.mp3";
import teslaZapSfx from "./assets/ESFX/Tesla-Zap.mp3";
import toxicWinSfx from "./assets/ESFX/Toxic-Win.mp3";
import waterWinSfx from "./assets/ESFX/Water-Win.mp3";
import defaultWinSfx from "./assets/ESFX/Default-Win.mp3";
import digitalCrashoutSfx from "./assets/ESFX/Digital-Crashout.mp3";
import digitalSpawnSfx from "./assets/ESFX/Digital-Spawn.mp3";
import digitalWinSfx from "./assets/ESFX/Digital-Win.mp3";
import fireWinSfx from "./assets/ESFX/Fire-Win.mp3";
import iceWinSfx from "./assets/ESFX/Ice-Win.mp3";
import electricWinSfx from "./assets/ESFX/Electric-Win.mp3";
import airWinSfx from "./assets/ESFX/Air-Win.mp3";
import gravityWinSfx from "./assets/ESFX/Gravity-Win.mp3";
import baseballWinSfx from "./assets/ESFX/Baseball-Win.mp3";
import ghostWinSfx from "./assets/ESFX/Ghost-Win.mp3";
import fireChargeSfx from "./assets/ESFX/Fire-Charge.mp3";
import fireLaunchSfx from "./assets/ESFX/Fire-Launch.mp3";
import lifeWinSfx from "./assets/ESFX/Life-Win.mp3";
import luckEarnSfx from "./assets/ESFX/Luck-Earn.mp3";
import luckGambleSfx from "./assets/ESFX/Luck-Gamble.mp3";
import luckNothingSfx from "./assets/ESFX/Luck-Nothing.mp3";
import luckWinSfx from "./assets/ESFX/Luck-Win.mp3";
import luckXSfx from "./assets/ESFX/Luck-X.mp3";
import baseballChargeSfx from "./assets/ESFX/Baseball-Charge.mp3";
import baseballSwingSfx from "./assets/ESFX/Baseball-Swing.mp3";
import baseballHitSfx from "./assets/ESFX/Baseball-Hit.mp3";
import baseballFrenzySfx from "./assets/ESFX/Baseball-Frenzy.mp3";
import airrowAppearSfx from "./assets/ESFX/Airrow-Appear.mp3";
import airSlamSfx from "./assets/ESFX/Air-Slam.mp3";
import blindfoldAsset from "./assets/EAccessories/Blindfold.png";
import capAsset from "./assets/EAccessories/Cap.png";
import scienceHairAsset from "./assets/EAccessories/ScienceHair.png";

const randomCode = () =>
  Array.from({ length: 6 }, () => "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random() * 32)]).join("");

const ARENA_SIZE = 620;
const GENESIS_COOLDOWN_MS = 2000;
const ROCKSLIDE_COOLDOWN_MS = 5000;
const LUCK_SPIN_INTERVAL_MS = 2000;
const LUCK_SPIN_DURATION_MS = 1000;
const LUCK_NOTHING_SFX_MS = 500;
const LUCK_SLOTS = ["glove", "bottle", "arrows", "x"];
const LUCK_SLOT_LABELS = {
  glove: "GLV",
  bottle: "BTL",
  arrows: "ARR",
  x: "X"
};

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
    id: "life",
    name: "Life Ball",
    short: "VFT",
    hue: "#31b65b",
    accent: "#f8b5c7",
    logo: lifeLogo,
    skin: lifeSkin,
    hurtSkin: lifeHurtSkin,
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: { Overgrowth: "0 growths" },
    abilities: ["Overgrowth"]
  },
  {
    id: "fire",
    name: "Fire Ball",
    short: "FIR",
    hue: "#f97316",
    accent: "#ffe08a",
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: {},
    abilities: ["Overload"]
  },
  {
    id: "ice",
    name: "Ice Ball",
    short: "ICE",
    hue: "#8de7ff",
    accent: "#eefcff",
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: {},
    abilities: ["Slippery", "Sharp Shoot"]
  },
  {
    id: "electric",
    name: "Electric Ball",
    short: "ELC",
    hue: "#facc15",
    accent: "#fff7ad",
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: {},
    abilities: ["Tesla Web"]
  },
  {
    id: "earth",
    name: "Earth Ball",
    short: "RCK",
    hue: "#8b5e34",
    accent: "#d6b27b",
    hp: 100,
    weight: 1.25,
    damage: 1,
    stats: {},
    abilities: ["Rockslide"]
  },
  {
    id: "air",
    name: "Air Ball",
    short: "AIR",
    hue: "#4f8cff",
    accent: "#d9e7ff",
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: {},
    abilities: ["Blue Mode"]
  },
  {
    id: "gravity",
    name: "Gravity Ball",
    short: "GRV",
    hue: "#56616f",
    accent: "#d6d9df",
    logo: gravityLogo,
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: {},
    abilities: ["Moon Lock"]
  },
  {
    id: "baseball",
    name: "Baseball",
    short: "BB",
    hue: "#f4f2eb",
    accent: "#d83a3a",
    logo: baseballLogo,
    skin: baseballLogo,
    hp: 100,
    weight: 1.1,
    damage: 1,
    stats: {},
    abilities: ["Swing and Miss"]
  },
  {
    id: "digital",
    name: "Digital Ball",
    short: "DGT",
    hue: "#ff1a1a",
    accent: "#ff7a7a",
    hp: 50,
    weight: 1.05,
    damage: 0,
    stats: {},
    abilities: ["Genesis", "Meltdown"]
  },
  {
    id: "fear",
    name: "Fear Ball",
    short: "BOO",
    hue: "#6d28d9",
    accent: "#e9d5ff",
    hp: 100,
    weight: 1,
    damage: 1,
    stats: {},
    abilities: ["Spooky"]
  },
  {
    id: "luck",
    name: "Luck Ball",
    short: "LCK",
    hue: "#f59e0b",
    accent: "#fff7ad",
    hp: 100,
    weight: 1,
    damage: 1,
    stats: {},
    abilities: ["Roll or Die"]
  }
];

const randomFighter = {
  id: "random",
  name: "Random",
  short: "?",
  hue: "#eeeeee",
  accent: "#111111",
  logo: randomLogo
};

const explosionSfx = [explosion1Sfx, explosion2Sfx, explosion3Sfx];

const winSfxByFighter = {
  air: airWinSfx,
  baseball: baseballWinSfx,
  digital: digitalWinSfx,
  electric: electricWinSfx,
  fear: ghostWinSfx,
  fire: fireWinSfx,
  gravity: gravityWinSfx,
  ice: iceWinSfx,
  life: lifeWinSfx,
  luck: luckWinSfx,
  poison: toxicWinSfx,
  water: waterWinSfx
};

const leaderboardKey = "element-fight-leaderboard";
const normalizeFightEntries = (entries) => Array.isArray(entries)
  ? entries
  : Array.from({ length: Number(entries) || 0 }, () => ({ opponentId: null, at: null }));
const makeEmptyLeaderboard = () =>
  Object.fromEntries(fighters.map((fighter) => [fighter.id, { wins: [], losses: [] }]));

const readLeaderboard = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(leaderboardKey) || "{}");
    const empty = makeEmptyLeaderboard();
    fighters.forEach((fighter) => {
      empty[fighter.id] = {
        wins: normalizeFightEntries(stored[fighter.id]?.wins),
        losses: normalizeFightEntries(stored[fighter.id]?.losses)
      };
    });
    return empty;
  } catch {
    return makeEmptyLeaderboard();
  }
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
  const [recordGames, setRecordGames] = React.useState(false);
  const [leaderboard, setLeaderboard] = React.useState(() => readLeaderboard());
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
        if (["online-loading", "settings", "leaderboard"].includes(currentScreen)) {
          startExitHold("intro");
        }
      }
      if (screenRef.current === "select" && ["r", "R"].includes(event.key) && !event.repeat) {
        setRecordGames((current) => !current);
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
    setLeaderboard(makeEmptyLeaderboard());
    setRecordGames(false);
  };

  const recordResult = React.useCallback((winner, loser) => {
    setLeaderboard((current) => {
      const next = { ...current };
      const at = Date.now();
      const winnerRecord = next[winner.id] || { wins: [], losses: [] };
      const loserRecord = next[loser.id] || { wins: [], losses: [] };
      next[winner.id] = {
        ...winnerRecord,
        wins: [...normalizeFightEntries(winnerRecord.wins), { opponentId: loser.id, at }],
        losses: normalizeFightEntries(winnerRecord.losses)
      };
      next[loser.id] = {
        ...loserRecord,
        wins: normalizeFightEntries(loserRecord.wins),
        losses: [...normalizeFightEntries(loserRecord.losses), { opponentId: winner.id, at }]
      };
      localStorage.setItem(leaderboardKey, JSON.stringify(next));
      return next;
    });
  }, []);

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
        {screen === "leaderboard" && <Leaderboard back={() => setScreen("intro")} exitHoldProgress={exitHoldProgress} leaderboard={leaderboard} setLeaderboard={setLeaderboard} />}
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
            recordGames={recordGames}
            setRecordGames={setRecordGames}
            exitHoldProgress={exitHoldProgress}
          />
        )}
        {screen === "battle" && (
          <Battle
            fighters={choices}
            modifiers={modifiers}
            settings={settings}
            mode={mode}
            recordGames={recordGames}
            onRecordedResult={recordResult}
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
          <button className="primary action-left" onClick={() => setScreen("leaderboard")}>
            <BarChart3 size={21} /> Leaderboard
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

function CharacterSelect({ mode, choices, chooseFighter, setScreen, modifiers, setModifiers, modOpen, setModOpen, recordGames, setRecordGames, exitHoldProgress }) {
  const nextPlayer = mode === "online" ? "Player 1" : `Player ${Math.min(choices.length + 1, 2)}`;
  const ready = choices.length === 2;
  const roster = [...fighters, randomFighter];
  const scrollRoster = (event) => {
    const scrollAmounts = {
      ArrowUp: -96,
      ArrowDown: 96,
      ArrowLeft: -48,
      ArrowRight: 48
    };
    if (!Object.hasOwn(scrollAmounts, event.key)) return;
    event.preventDefault();
    event.currentTarget.scrollBy({ top: scrollAmounts[event.key], behavior: "smooth" });
  };
  return (
    <section className="select-screen">
      <CornerBack holdProgress={exitHoldProgress} onBack={() => (choices.length ? choices.length && window.dispatchEvent(new KeyboardEvent("keydown", { key: "Backspace" })) : setScreen("intro"))} />
      {mode === "local" && (
        <div className="corner-wrap corner-mod-wrap">
          <button className="corner corner-mod" onClick={() => setModOpen(true)} aria-label="modifiers">
            <img src={modifierIcon} alt="" />
          </button>
        </div>
      )}
      <div className="corner-wrap corner-record-wrap">
        <button
          className={`corner corner-record ${recordGames ? "recording" : ""}`}
          onClick={() => setRecordGames((current) => !current)}
          aria-label={recordGames ? "recorded games on" : "recorded games off"}
        >
          <Circle size={20} fill={recordGames ? "#ef3434" : "transparent"} />
        </button>
      </div>
      <h2>{ready ? "Ready?" : `Select Your Character ${nextPlayer}`}</h2>
      <div className="versus-layout">
        <FighterPedestal label="Player 1" fighter={choices[0]} side="left" />
        <div className="roster" tabIndex={0} onKeyDown={scrollRoster} aria-label="Ball selection">
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
  const accessoryByFighter = {
    water: blindfoldAsset,
    electric: scienceHairAsset,
    baseball: capAsset
  };
  return (
    <div className={`pedestal-wrap ${side}`}>
      <span className="player-label">{label}</span>
      <div className="pedestal">
        {fighter && (
          <>
            <div className={`ball-skin ${fighter.id === "digital" ? "digital" : ""}`} style={{ "--hue": fighter.hue, "--accent": fighter.accent }}>
              {fighter.skin && <img src={fighter.skin} alt="" />}
              {accessoryByFighter[fighter.id] && <img className={`preview-accessory ${fighter.id}`} src={accessoryByFighter[fighter.id]} alt="" />}
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
  const [activeTab, setActiveTab] = React.useState("arenas");
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
      <div className="tabs">
        <button className={activeTab === "arenas" ? "active" : ""} onClick={() => setActiveTab("arenas")}>Arenas</button>
        <button className={activeTab === "physics" ? "active" : ""} onClick={() => setActiveTab("physics")}>Physics</button>
      </div>
      {activeTab === "arenas" && (
        <select value={modifiers.arena} onChange={(event) => update("arena", event.target.value)}>
          <option>Classic Box</option>
          <option>Toxic Garden</option>
          <option>Flooded Ring</option>
        </select>
      )}
      {activeTab === "physics" && (
        <>
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
        </>
      )}
    </aside>
  );
}

function Battle({ fighters: selected, modifiers, settings, mode, recordGames, onRecordedResult, back, exitHoldProgress }) {
  const canvasRef = React.useRef(null);
  const resultRecordedRef = React.useRef(false);
  const activeSfxRef = React.useRef(new Set());
  const activeSfxScalesRef = React.useRef(new Map());
  const stopSfx = React.useCallback((audio) => {
    if (!audio) return;
    window.clearTimeout(audio.stopTimer);
    audio.pause();
    audio.currentTime = 0;
    activeSfxRef.current.delete(audio);
    activeSfxScalesRef.current.delete(audio);
  }, []);
  const stopAllSfx = React.useCallback(() => {
    Array.from(activeSfxRef.current).forEach((audio) => stopSfx(audio));
  }, [stopSfx]);
  const playSfx = React.useCallback((src, volumeScale = 1, options = {}) => {
    if (!settings.sfx) return null;

    const audio = new Audio(src);
    audio.volume = Math.max(0, Math.min(1, (settings.volume / 100) * volumeScale));
    audio.loop = Boolean(options.loop);
    activeSfxRef.current.add(audio);
    activeSfxScalesRef.current.set(audio, volumeScale);
    const removeAudio = () => {
      window.clearTimeout(audio.stopTimer);
      activeSfxRef.current.delete(audio);
      activeSfxScalesRef.current.delete(audio);
    };
    audio.addEventListener("ended", removeAudio, { once: true });
    if (options.onStart) audio.addEventListener("playing", options.onStart, { once: true });
    if (options.maxDurationMs) audio.stopTimer = window.setTimeout(() => stopSfx(audio), options.maxDurationMs);
    audio.play().then(() => {
      if (options.onStart) options.onStart();
    }).catch(removeAudio);
    return audio;
  }, [settings.sfx, settings.volume, stopSfx]);
  React.useEffect(() => {
    if (!settings.sfx) {
      stopAllSfx();
      return;
    }
    activeSfxRef.current.forEach((audio) => {
      const volumeScale = activeSfxScalesRef.current.get(audio) ?? 1;
      audio.volume = Math.max(0, Math.min(1, (settings.volume / 100) * volumeScale));
    });
  }, [settings.sfx, settings.volume, stopAllSfx]);
  React.useEffect(() => stopAllSfx, [stopAllSfx]);
  const maxHp = React.useMemo(() => selected.map((fighter) => Math.round(fighter.hp * modifiers.health)), [selected, modifiers.health]);
  const [state, setState] = React.useState({
    hp: maxHp,
    countdown: 3,
    countdownLabel: "3",
    effects: selected.map((fighter) => ({
      liquidState: fighter.id === "water" ? "Solid" : null,
      transparency: fighter.id === "water" ? 30 : null,
      toxinStacks: 0,
      antiVirusContacts: 0,
      antiVirusRequired: 5,
      toxinDamageOutput: fighter.id === "poison" ? 0 : null,
      nextSyringe: fighter.id === "poison" ? 3 : null,
      activeGrowths: fighter.id === "life" ? 0 : null,
      lifeChomps: fighter.id === "life" ? 0 : null,
      maxGrowths: fighter.id === "life" ? 5 : null,
      nextBlueMode: fighter.id === "air" ? 5 : null,
      nextIcicle: fighter.id === "ice" ? 2 : null,
      iciclesLanded: fighter.id === "ice" ? 0 : null,
      overloadDamage: fighter.id === "fire" ? 0 : null,
      overloadRequired: fighter.id === "fire" ? 5 : null,
      overloadState: fighter.id === "fire" ? "Building" : null,
      overloadBonus: fighter.id === "fire" ? 0 : null,
      defrostTime: 0,
      teslaCoils: fighter.id === "electric" ? 0 : null,
      lightningState: fighter.id === "electric" ? "Idle" : null,
      nextRockslide: fighter.id === "earth" ? ROCKSLIDE_COOLDOWN_MS / 1000 : null,
      activeRocks: fighter.id === "earth" ? 0 : null,
      moonMode: fighter.id === "gravity" ? "Orbiting" : null,
      moonStates: fighter.id === "gravity" ? ["Orbiting", "Orbiting"] : null,
      nextSwing: fighter.id === "baseball" ? 3 : null,
      swingState: fighter.id === "baseball" ? "Waiting" : null,
      strikes: fighter.id === "baseball" ? 0 : null,
      frenzySwings: fighter.id === "baseball" ? 0 : null,
      nextGenesis: fighter.id === "digital" ? GENESIS_COOLDOWN_MS / 1000 : null,
      genesisObjects: fighter.id === "digital" ? 0 : null,
      spookyState: fighter.id === "fear" ? "Normal" : null,
      nextSpooky: fighter.id === "fear" ? 5 : null,
      luckSlots: fighter.id === "luck" ? ["x", "x", "x"] : null,
      luckState: fighter.id === "luck" ? "Waiting" : null,
      nextLuckRoll: fighter.id === "luck" ? LUCK_SPIN_INTERVAL_MS / 1000 : null,
      luckImpactBonus: fighter.id === "luck" ? 0 : null,
      lifeSteal: fighter.id === "luck" ? false : null,
      meltdownState: "Stable",
      meltdownRole: null,
      meltdownText: ""
    })),
    floating: [],
    winner: null
  });

  React.useEffect(() => {
    let countdownAudio = null;
    let started = false;
    let cancelled = false;
    const steps = [
      { at: 1000, countdown: 2, label: "2" },
      { at: 2000, countdown: 1, label: "1" },
      { at: 3000, countdown: 0, label: "Go" },
      { at: 3600, countdown: 0, label: "" }
    ];
    const timers = [];
    const startCountdownTimers = () => {
      if (started || cancelled) return;
      started = true;
      steps.forEach((step) => {
        timers.push(window.setTimeout(() => {
          setState((current) => ({
            ...current,
            countdown: step.countdown,
            countdownLabel: step.label
          }));
        }, step.at));
      });
    };
    countdownAudio = playSfx(roundBeginSfx, 0.8, { onStart: startCountdownTimers });
    const fallbackTimer = window.setTimeout(startCountdownTimers, countdownAudio ? 350 : 0);
    if (!countdownAudio) startCountdownTimers();
    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      timers.forEach((timer) => window.clearTimeout(timer));
      stopSfx(countdownAudio);
    };
  }, [playSfx, stopSfx]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const box = { w: canvas.width, h: canvas.height };
    const now = performance.now();
    const cooldown = modifiers.noCooldown ? 650 : 4500;
    const blueModeCooldown = 5000;
    const baseballCooldown = modifiers.noCooldown ? 900 : 3000;
    const baseballHold = modifiers.noCooldown ? 650 : 2000;
    const makeImage = (src) => {
      const image = new Image();
      image.src = src;
      return image;
    };
    const skinImages = selected.map((fighter) => fighter.skin ? makeImage(fighter.skin) : null);
    const hurtSkinImages = selected.map((fighter) => fighter.hurtSkin ? makeImage(fighter.hurtSkin) : null);
    const syringeImage = makeImage(syringeAsset);
    const icicleImage = makeImage(icicleAsset);
    const lightningImage = makeImage(lightningAsset);
    const moonImage = makeImage(moonLogo);
    const baseballBatImage = makeImage(baseballBatAsset);
    const teslaImage = makeImage(teslaAsset);
    const accessoryImages = {
      water: makeImage(blindfoldAsset),
      electric: makeImage(scienceHairAsset),
      baseball: makeImage(capAsset)
    };
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
        antiVirusContacts: 0,
        antiVirusRequired: 5,
        toxinDamageOutput: fighter.id === "poison" ? 0 : null,
        nextSyringe: fighter.id === "poison" ? 3 : null,
        activeGrowths: fighter.id === "life" ? 0 : null,
        lifeChomps: fighter.id === "life" ? 0 : null,
        maxGrowths: fighter.id === "life" ? 5 : null,
        nextBlueMode: fighter.id === "air" ? 5 : null,
        nextIcicle: fighter.id === "ice" ? 2 : null,
        iciclesLanded: fighter.id === "ice" ? 0 : null,
        overloadDamage: fighter.id === "fire" ? 0 : null,
        overloadRequired: fighter.id === "fire" ? 5 : null,
        overloadState: fighter.id === "fire" ? "Building" : null,
        overloadBonus: fighter.id === "fire" ? 0 : null,
        defrostTime: 0,
        teslaCoils: fighter.id === "electric" ? 0 : null,
        lightningState: fighter.id === "electric" ? "Idle" : null,
        nextRockslide: fighter.id === "earth" ? ROCKSLIDE_COOLDOWN_MS / 1000 : null,
        activeRocks: fighter.id === "earth" ? 0 : null,
        moonMode: fighter.id === "gravity" ? "Orbiting" : null,
        moonStates: fighter.id === "gravity" ? ["Orbiting", "Orbiting"] : null,
        nextSwing: fighter.id === "baseball" ? baseballCooldown / 1000 : null,
        swingState: fighter.id === "baseball" ? "Waiting" : null,
        strikes: fighter.id === "baseball" ? 0 : null,
        frenzySwings: fighter.id === "baseball" ? 0 : null,
        nextGenesis: fighter.id === "digital" ? GENESIS_COOLDOWN_MS / 1000 : null,
        genesisObjects: fighter.id === "digital" ? 0 : null,
        spookyState: fighter.id === "fear" ? "Normal" : null,
        nextSpooky: fighter.id === "fear" ? 5 : null,
        luckSlots: fighter.id === "luck" ? ["x", "x", "x"] : null,
        luckState: fighter.id === "luck" ? "Waiting" : null,
        nextLuckRoll: fighter.id === "luck" ? LUCK_SPIN_INTERVAL_MS / 1000 : null,
        luckImpactBonus: fighter.id === "luck" ? 0 : null,
        lifeSteal: fighter.id === "luck" ? false : null,
        meltdownState: "Stable",
        meltdownRole: null,
        meltdownText: ""
      })),
      nextSyringeAt: selected.map((fighter) => (fighter.id === "poison" ? now + cooldown : Infinity)),
      nextBlueModeAt: selected.map((fighter) => (fighter.id === "air" ? now + blueModeCooldown : Infinity)),
      nextIcicleAt: selected.map((fighter) => (fighter.id === "ice" ? now + 2000 : Infinity)),
      nextBaseballSwingAt: selected.map((fighter) => (fighter.id === "baseball" ? now + baseballCooldown : Infinity)),
      nextGenesisAt: selected.map((fighter) => (fighter.id === "digital" ? now + GENESIS_COOLDOWN_MS : Infinity)),
      nextRockslideAt: selected.map((fighter) => (fighter.id === "earth" ? now + ROCKSLIDE_COOLDOWN_MS : Infinity)),
      nextSpookyAt: selected.map((fighter) => (fighter.id === "fear" ? now + 5000 : Infinity)),
      nextLuckSpinAt: selected.map((fighter) => (fighter.id === "luck" ? now + LUCK_SPIN_INTERVAL_MS : Infinity)),
      blueModeArrows: [],
      elementalExplosions: [],
      genesisObjects: [],
      luckBottleQueue: [],
      rocks: [],
      teslaCoils: [],
      lightningBolts: [],
      lightningQueue: [],
      nextLightningZapAt: Infinity,
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
      touchingLastFrame: false,
      lastToxinTickAt: now,
      nextLightningAt: Infinity,
      liquidAudio: null,
      lastHudAt: 0
    };
    const normalSpeed = 5.4 * modifiers.speed;
    const powerSpeed = 15.5 * modifiers.speed;
    const moonSpeed = normalSpeed * 1.85;
    const moonOrbitSpeedMs = 200;
    const trapSpitSpeed = powerSpeed * 0.92;
    const slamSpeed = 18 * modifiers.speed;
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
        swing: null,
        baseballChargeAudio: null,
        baseballSwingAudio: null,
        baseballFrenzyAudio: null,
        meltdown: null,
        spookyState: fighter.id === "fear" ? "normal" : null,
        lastSpookyPauseAt: 0,
        luckSpin: null,
        luckImpactBonus: 0,
        lifeSteal: false,
        overloadState: "building",
        overloadChargeAt: 0,
        overloadDashStartedAt: 0,
        overloadBonus: 0,
        overloadHit: false,
        overloadSpeed: 0,
        fireChargeAudio: null,
        lastImpactAt: now,
        defrostUntil: 0,
        defrostOwnerSide: null,
        moons: fighter.id === "gravity" ? [0, 1].map((moonIndex) => ({
          state: "orbit",
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          offset: moonIndex * Math.PI,
          orbitStartedAt: now,
          leftHome: false,
          lastHitAt: 0,
          inLiquid: false,
          defrostUntil: 0,
          lastIcicleHitAt: 0,
          batReflected: false
        })) : [],
        stunnedUntil: 0,
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
    const keepInBox = (ball) => {
      ball.x = Math.max(ball.r, Math.min(box.w - ball.r, ball.x));
      ball.y = Math.max(ball.r, Math.min(box.h - ball.r, ball.y));
    };
    const markImpact = (ball, time) => {
      ball.lastImpactAt = time;
    };
    const stopBaseballSfx = (ball) => {
      stopSfx(ball.baseballChargeAudio);
      stopSfx(ball.baseballSwingAudio);
      stopSfx(ball.baseballFrenzyAudio);
      ball.baseballChargeAudio = null;
      ball.baseballSwingAudio = null;
      ball.baseballFrenzyAudio = null;
    };
    const cancelBaseballSwing = (ball, time, nextDelay = baseballCooldown) => {
      if (ball.fighter.id !== "baseball") return;
      if (ball.swing && !ball.swing.swung && Math.hypot(ball.vx, ball.vy) < 0.001) {
        setVelocity(ball, ball.swing.resumeAngle, normalSpeed);
      }
      stopBaseballSfx(ball);
      ball.swing = null;
      game.nextBaseballSwingAt[ball.side] = time + nextDelay;
      if (game.effects[ball.side]?.swingState !== null) {
        game.effects[ball.side].swingState = "Waiting";
        game.effects[ball.side].nextSwing = Math.max(0, nextDelay / 1000);
      }
    };
    const isBaseballFrenzy = (ball) => ball.fighter.id === "baseball" && Boolean(ball.swing?.frenzy || ball.swing?.frenzyQueued);
    const isDigitalMeltdown = (ball) => ball.fighter.id === "digital" && Boolean(ball.meltdown);
    const isAnyDigitalMeltdown = () => balls.some((ball) => isDigitalMeltdown(ball));
    const isFearPlasma = (ball) => ball.fighter.id === "fear" && ball.spookyState === "plasma";
    const clearFrenzyStatuses = (ball) => {
      ball.powered = false;
      ball.poweredUntil = 0;
      ball.slam = null;
      ball.trappedBy = null;
      ball.trapPowerWindowUntil = 0;
      ball.trapSpitUntil = 0;
      ball.stunnedUntil = 0;
      ball.defrostUntil = 0;
      ball.defrostOwnerSide = null;
      if (ball.inLiquid) {
        restoreBaseVelocity(ball);
        ball.inLiquid = false;
      }
    };
    const isAbilityPaused = (ball, time = performance.now()) => !isBaseballFrenzy(ball) && (ball.powered || ball.slam || time < ball.stunnedUntil || isAnyDigitalMeltdown());
    const getIcePhysicsSpeed = (ball, time) => {
      const charge = Math.max(0, Math.min(1, (time - ball.lastImpactAt) / 6000));
      return normalSpeed * (0.68 + charge * 0.92);
    };
    const getPredictedVelocity = (ball, time) => {
      if (game.hp[ball.side] <= 0 || ball.trappedBy || time < ball.stunnedUntil) return { vx: 0, vy: 0 };

      const speed = Math.hypot(ball.vx, ball.vy);
      if (speed < 0.001) return { vx: 0, vy: 0 };
      if (ball.inLiquid || (ball.swing && !isAbilityPaused(ball, time))) return { vx: ball.vx, vy: ball.vy };

      const targetSpeed = ball.slam
        ? slamSpeed
        : ball.powered
          ? powerSpeed
          : time < ball.trapSpitUntil
            ? trapSpitSpeed
            : ball.overloadState === "dashing"
              ? ball.overloadSpeed
              : time < ball.defrostUntil
                ? normalSpeed * 0.45
                : ball.fighter.id === "ice"
                  ? getIcePhysicsSpeed(ball, time)
                  : normalSpeed;

      return {
        vx: (ball.vx / speed) * targetSpeed,
        vy: (ball.vy / speed) * targetSpeed
      };
    };
    const keepBallSpeed = (ball, time) => {
      if (game.hp[ball.side] <= 0 || ball.trappedBy || time < ball.stunnedUntil || (ball.swing && !isAbilityPaused(ball, time))) return;
      const targetSpeed = ball.slam
        ? slamSpeed
          : ball.powered
            ? powerSpeed
            : ball.overloadState === "dashing"
              ? ball.overloadSpeed
              : time < ball.defrostUntil
                ? normalSpeed * 0.45
                : ball.fighter.id === "ice"
                  ? getIcePhysicsSpeed(ball, time)
                  : normalSpeed;
      const speed = Math.hypot(ball.vx, ball.vy);
      if (speed < 0.001) {
        setVelocity(ball, Math.random() * Math.PI * 2, targetSpeed);
        return;
      }
      ball.vx = (ball.vx / speed) * targetSpeed;
      ball.vy = (ball.vy / speed) * targetSpeed;
      if (!ball.powered && !ball.slam) {
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
      if (modifiers.pillowMode || isBaseballFrenzy(ball)) return;
      const angle = Math.atan2(ball.vy, ball.vx);
      cancelBaseballSwing(ball, time);
      ball.powered = true;
      ball.poweredUntil = time + 3000;
      ball.trapSpitUntil = 0;
      setVelocity(ball, angle, powerSpeed);
    };
    const markPowerAtAngle = (ball, time, angle) => {
      if (isBaseballFrenzy(ball)) return;
      if (modifiers.pillowMode) {
        cancelBaseballSwing(ball, time);
        setVelocity(ball, angle, normalSpeed);
        return;
      }
      cancelBaseballSwing(ball, time);
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
    const trapReleaseAngle = (trap) => {
      const offset = 0.3 + Math.random() * 0.35;
      return trap.angle + (Math.random() < 0.5 ? -offset : offset);
    };
    const findTrapAnchor = (id) => (
      game.traps.find((trap) => trap.id === id)
      || game.genesisObjects.find((object) => object.id === id && object.finalType === "flytrap" && object.closed)
    );
    const releaseFlytrapVictim = (trap, victim, time) => {
      victim.trappedBy = null;
      const releaseAngle = trapReleaseAngle(trap);
      if (trap.powerRelease) {
        markPowerAtAngle(victim, time, releaseAngle);
      } else {
        victim.powered = false;
        victim.poweredUntil = 0;
        setVelocity(victim, releaseAngle, trapSpitSpeed);
        victim.trapPowerWindowUntil = time + 1000;
        victim.trapSpitUntil = time + 1000;
      }
      trap.closedAt = time;
      trap.victimSide = null;
    };
    const closeFlytrapOnVictim = (trap, enemy, time) => {
      if (isBaseballFrenzy(enemy)) return false;
      trap.closed = true;
      playSfx(flytrapChompSfx);
      if (game.effects[trap.side].lifeChomps !== null) {
        game.effects[trap.side].lifeChomps += 1;
        game.effects[trap.side].maxGrowths = getLifeMax(game.effects[trap.side].lifeChomps);
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
      return true;
    };
    const getBaseballBatAngle = (ball) => {
      const target = balls[ball.side ? 0 : 1];
      const enemyToBaseballAngle = Math.atan2(ball.y - target.y, ball.x - target.x);
      return enemyToBaseballAngle + (Math.PI * 2) / 3;
    };
    const isObjectInBatArc = (ball, object, swingAngle, swingRange) => {
      const dx = object.x - ball.x;
      const dy = object.y - ball.y;
      const alongBat = dx * Math.cos(swingAngle) + dy * Math.sin(swingAngle);
      const offBatCenter = Math.abs(dx * Math.sin(swingAngle) - dy * Math.cos(swingAngle));
      return alongBat >= 0 && alongBat <= swingRange && offBatCenter <= (object.r || 10) + ball.r * 0.18;
    };
    const getLaunchedMoons = () => balls.flatMap((owner) =>
      owner.moons.map((moon) => ({ owner, moon })).filter(({ moon }) => moon.state === "launched")
    );
    const reflectMoonTowardOwner = (moon, owner, hitter, time) => {
      const angle = Math.atan2(owner.y - moon.y, owner.x - moon.x);
      moon.vx = Math.cos(angle) * powerSpeed;
      moon.vy = Math.sin(angle) * powerSpeed;
      moon.batReflected = true;
      moon.leftHome = true;
      moon.lastHitAt = time;
      playSfx(baseballHitSfx, 0.8);
      if (!hitter.swing || hitter.swing.swung) return;
      hitter.swing.resumeAngle = Math.atan2(hitter.y - owner.y, hitter.x - owner.x);
    };
    const reflectProjectileTowardOwner = (projectile, hitter, time) => {
      const owner = balls[projectile.side];
      if (!owner) return;
      const angle = Math.atan2(owner.y - projectile.y, owner.x - projectile.x);
      const speed = powerSpeed;
      projectile.target = projectile.side;
      projectile.side = hitter.side;
      projectile.reflected = true;
      projectile.angle = angle;
      projectile.bornAt = time;
      projectile.startSpeed = speed;
      projectile.topSpeed = speed;
      projectile.rampMs = 1;
      projectile.vx = Math.cos(angle) * speed;
      projectile.vy = Math.sin(angle) * speed;
      projectile.baseVx = projectile.vx;
      projectile.baseVy = projectile.vy;
      projectile.inLiquid = false;
      playSfx(baseballHitSfx, 0.75);
    };
    const nudgeDirection = (moving) => {
      const speed = Math.hypot(moving.vx, moving.vy) || 1;
      const angle = Math.atan2(moving.vy, moving.vx) + (Math.random() - 0.5) * 1.15;
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
      return Math.max(2.5, 5 - Math.floor(extraTransparency / 5) * 0.5);
    };
    const getLifeMax = (chomps) => 5 + Math.floor(chomps / 5);
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
      return Math.max(3, Math.round(3 - 3 * ratio + 15 * ratio * ratio));
    };
    const aimAtMovingTarget = (source, target, projectileSpeed, leadMultiplier = 1, time = performance.now()) => {
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const { vx: dvx, vy: dvy } = getPredictedVelocity(target, time);
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
      return Math.atan2(target.y + dvy * t * leadMultiplier - source.y, target.x + dvx * t * leadMultiplier - source.x);
    };
    const chooseSyringeAim = (source, target, projectileSpeed, targetHpPercent, time) => {
      const missingHpPercent = 1 - Math.max(0, Math.min(1, targetHpPercent));
      const accurateChance = 0.35 + missingHpPercent * 0.4;
      const directChance = Math.max(0, 0.35 - missingHpPercent * 0.35);
      const roll = Math.random();
      if (roll < accurateChance) return aimAtMovingTarget(source, target, projectileSpeed, 1, time);
      if (roll < accurateChance + directChance) return Math.atan2(target.y - source.y, target.x - source.x);
      return aimAtMovingTarget(source, target, projectileSpeed, 1.7, time);
    };
    const addExplosion = (x, y, hue = "#f24f28", size = 1) => {
      game.explosions.push({ id: `${performance.now()}-${x}-${y}`, x, y, hue, size, bornAt: performance.now() });
      game.explosions = game.explosions.slice(-36);
      playSfx(explosionSfx[Math.floor(Math.random() * explosionSfx.length)], Math.min(1, 0.48 * size), { maxDurationMs: 1200 });
    };
    const explodeSideObjects = (side, time = performance.now()) => {
      game.projectiles
        .filter((projectile) => projectile.side === side)
        .forEach((projectile) => addExplosion(projectile.x, projectile.y, "#d9f4ff", 0.8));
      game.traps
        .filter((trap) => trap.side === side)
        .forEach((trap) => addExplosion(trap.x, trap.y, "#31b65b", 1));
      game.teslaCoils
        .filter((coil) => coil.side === side)
        .forEach((coil) => addExplosion(coil.x, coil.y, "#facc15", 1));
      game.genesisObjects
        .filter((object) => object.side === side)
        .forEach((object) => addExplosion(object.x, object.y, "#22d3ee", 0.9));
      game.rocks
        .filter((rock) => rock.side === side)
        .forEach((rock) => addExplosion(rock.x, rock.y, "#8b5e34", Math.max(0.45, rock.r / 24)));
      game.lightningBolts
        .filter((bolt) => bolt.side === side)
        .forEach((bolt) => addExplosion((bolt.a.x + bolt.b.x) / 2, (bolt.a.y + bolt.b.y) / 2, "#facc15", 1));
      game.blueModeArrows
        .filter((arrow) => arrow.side === side)
        .forEach(() => addExplosion(box.w / 2, box.h / 2, "#8e959f", 1.15));
      const ball = balls[side];
      if (ball?.moons?.length) {
        const moonPositions = getMoonPositions(ball, time);
        moonPositions.forEach((moon) => addExplosion(moon.x || ball.x, moon.y || ball.y, "#cfd5df", 0.7));
        ball.moons = [];
        if (game.effects[side].moonStates) game.effects[side].moonStates = [];
        if (game.effects[side].moonMode) game.effects[side].moonMode = "Disabled";
      }
      game.projectiles = game.projectiles.filter((projectile) => projectile.side !== side);
      game.traps = game.traps.filter((trap) => trap.side !== side);
      game.teslaCoils = game.teslaCoils.filter((coil) => coil.side !== side);
      game.genesisObjects = game.genesisObjects.filter((object) => object.side !== side);
      game.rocks = game.rocks.filter((rock) => rock.side !== side);
      game.lightningBolts = game.lightningBolts.filter((bolt) => bolt.side !== side);
      game.lightningQueue = game.lightningQueue.filter((pair) => pair.side !== side);
      game.blueModeArrows = game.blueModeArrows.filter((arrow) => arrow.side !== side);
    };
    const explodeAllFieldObjects = (time = performance.now()) => {
      balls.forEach((candidate) => explodeSideObjects(candidate.side, time));
      game.lightningQueue = [];
      game.nextLightningAt = Infinity;
      game.nextLightningZapAt = Infinity;
    };
    const deactivateTeslaWeb = () => {
      game.teslaCoils.forEach((coil) => addExplosion(coil.x, coil.y, "#facc15", 1));
      game.lightningBolts.forEach((bolt) => addExplosion((bolt.a.x + bolt.b.x) / 2, (bolt.a.y + bolt.b.y) / 2, "#facc15", 1));
      game.teslaCoils = [];
      game.lightningBolts = [];
      game.lightningQueue = [];
      game.nextLightningAt = Infinity;
      game.nextLightningZapAt = Infinity;
      game.effects.forEach((effect) => {
        if (effect.teslaCoils !== null) effect.teslaCoils = 0;
        if (effect.lightningState !== null) effect.lightningState = "Idle";
      });
    };
    const startDigitalMeltdown = (ball, time) => {
      if (ball.meltdown || game.defeatedSide !== null) return;
      const target = balls[ball.side ? 0 : 1];
      explodeAllFieldObjects(time);
      game.nextGenesisAt[ball.side] = Infinity;
      ball.powered = false;
      ball.slam = null;
      ball.trappedBy = null;
      ball.vx = 0;
      ball.vy = 0;
      ball.meltdown = {
        state: "typing",
        startedAt: time,
        targetSide: target.side,
        typedChars: 0,
        activeSlam: null,
        startX: target.x,
        startY: target.y,
        endX: target.x,
        endY: target.y
      };
      game.effects.forEach((effect, index) => {
        effect.meltdownState = "Meltdown";
        effect.meltdownRole = index === ball.side ? "controller" : "subject";
        effect.meltdownText = "";
      });
      playSfx(digitalCrashoutSfx, 0.9);
    };
    const defeatSide = (side, time) => {
      if (game.defeatedSide !== null) return;
      game.defeatedSide = side;
      game.winner = side ? 0 : 1;
      if (game.liquidAudio) {
        stopSfx(game.liquidAudio);
        game.liquidAudio = null;
      }
      balls.forEach((ball) => {
        if (!ball.fireChargeAudio) return;
        stopSfx(ball.fireChargeAudio);
        ball.fireChargeAudio = null;
      });
      balls.forEach(stopBaseballSfx);
      playSfx(winSfxByFighter[selected[game.winner].id] || defaultWinSfx);
      if (recordGames && !resultRecordedRef.current) {
        resultRecordedRef.current = true;
        onRecordedResult(selected[game.winner], selected[side]);
      }

      const defeatedBall = balls[side];
      addExplosion(defeatedBall.x, defeatedBall.y, defeatedBall.fighter.hue, 1.8);
      explodeSideObjects(side);
      deactivateTeslaWeb();
      game.nextSyringeAt[side] = Infinity;
      game.effects[side].nextSyringe = game.effects[side].nextSyringe === null ? null : 0;
    };
    const addFireOverloadDamage = (ball, lostHp, time) => {
      if (ball.fighter.id !== "fire" || lostHp <= 0 || game.hp[ball.side] <= 0) return;
      const effect = game.effects[ball.side];

      if (ball.overloadState === "building") {
        effect.overloadDamage += lostHp;
        if (effect.overloadDamage >= effect.overloadRequired) {
          const overdamage = effect.overloadDamage - effect.overloadRequired;
          effect.overloadDamage = effect.overloadRequired;
          effect.overloadBonus = overdamage;
          ball.overloadState = "charging";
          ball.overloadChargeAt = time + 2000;
          ball.overloadBonus = overdamage;
          ball.overloadHit = false;
          ball.fireChargeAudio = playSfx(fireChargeSfx, 0.85, { maxDurationMs: 2000 });
          effect.overloadState = "Charging";
        }
        return;
      }

      ball.overloadBonus += lostHp;
      effect.overloadBonus = ball.overloadBonus;
    };
    const healBall = (side, amount, x = balls[side].x, y = balls[side].y) => {
      if (amount <= 0 || game.hp[side] <= 0 || game.defeatedSide !== null) return;
      const previousHp = game.hp[side];
      game.hp[side] = Math.min(maxHp[side], game.hp[side] + amount);
      const gainedHp = game.hp[side] - previousHp;
      if (gainedHp <= 0) return;
      game.floating.push({ id: `${performance.now()}-heal-${side}`, side, x, y, text: `+${gainedHp}` });
      game.floating = game.floating.slice(-8);
    };
    const applyLifeSteal = (attackerSide, amount, x, y) => {
      if (attackerSide === null || attackerSide === undefined || amount <= 0) return;
      const attacker = balls[attackerSide];
      if (!attacker?.lifeSteal || game.hp[attackerSide] <= 0) return;
      healBall(attackerSide, amount, x, y - 18);
    };
    const pushDamage = (side, amount, x, y, options = {}) => {
      if (game.defeatedSide !== null || game.hp[side] <= 0) return;
      if (isFearPlasma(balls[side])) return;
      if (isDigitalMeltdown(balls[side])) return;
      if (isBaseballFrenzy(balls[side])) return;
      if (game.effects[side].liquidState === "Water") return;
      const previousHp = game.hp[side];
      if (balls[side].fighter.id === "digital" && previousHp > 1 && previousHp - amount <= 1) {
        game.hp[side] = 1;
        const lostHp = previousHp - 1;
        if (lostHp > 0) {
          if (options.sfx !== false) playSfx(options.sfx || hitSfx, options.volumeScale ?? 0.5);
          balls[side].hurtUntil = performance.now() + 167;
          game.floating.push({ id: `${performance.now()}-${side}`, side, x, y, text: `-${lostHp}` });
          game.floating = game.floating.slice(-8);
          addFireOverloadDamage(balls[side], lostHp, performance.now());
          if (options.direct) applyLifeSteal(options.attackerSide, lostHp, x, y);
        }
        startDigitalMeltdown(balls[side], performance.now());
        return;
      }
      game.hp[side] = Math.max(0, game.hp[side] - amount);
      const lostHp = previousHp - game.hp[side];
      if (options.sfx !== false) playSfx(options.sfx || hitSfx, options.volumeScale ?? 0.5);
      balls[side].hurtUntil = performance.now() + 167;
      game.floating.push({ id: `${performance.now()}-${side}`, side, x, y, text: `-${amount}` });
      game.floating = game.floating.slice(-8);
      addFireOverloadDamage(balls[side], lostHp, performance.now());
      if (options.direct) applyLifeSteal(options.attackerSide, lostHp, x, y);
      if (game.hp[side] <= 0) defeatSide(side, performance.now());
    };
    const distanceToSegment = (px, py, ax, ay, bx, by) => {
      const dx = bx - ax;
      const dy = by - ay;
      const lengthSq = dx * dx + dy * dy || 1;
      const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSq));
      return Math.hypot(px - (ax + dx * t), py - (ay + dy * t));
    };
    const addTeslaCoil = (ball, x, y, time, angle = 0) => {
      if (game.defeatedSide !== null || game.hp[ball.side] <= 0) return;
      if (game.teslaCoils.some((coil) => coil.side === ball.side && Math.hypot(coil.x - x, coil.y - y) < ball.r * 1.4)) return;
      game.teslaCoils.push({ id: `${time}-${ball.side}-${game.teslaCoils.length}`, side: ball.side, x, y, angle });
      playSfx(teslaPlaceSfx, 0.7);
      if (game.teslaCoils.filter((coil) => coil.side === ball.side).length === 2) {
        game.nextLightningAt = Math.min(game.nextLightningAt, time + 5000);
      }
    };
    const shootIcicle = (ball, time) => {
      const target = balls[ball.side ? 0 : 1];
      const startSpeed = 2.4;
      const topSpeed = 7.4;
      const rampMs = 2200;
      const aimSpeed = (startSpeed + topSpeed) / 2;
      const angle = aimAtMovingTarget(ball, target, aimSpeed, 1, time);
      playSfx(icicleThrowSfx, 0.75);
      game.projectiles.push({
        type: "icicle",
        side: ball.side,
        target: ball.side ? 0 : 1,
        x: ball.x,
        y: ball.y,
        vx: Math.cos(angle) * startSpeed,
        vy: Math.sin(angle) * startSpeed,
        baseVx: Math.cos(angle) * startSpeed,
        baseVy: Math.sin(angle) * startSpeed,
        angle,
        bornAt: time,
        startSpeed,
        topSpeed,
        rampMs,
        inLiquid: false
      });
      game.nextIcicleAt[ball.side] = time + 2000;
    };
    const randomLuckSlots = () => Array.from({ length: 3 }, () => LUCK_SLOTS[Math.floor(Math.random() * LUCK_SLOTS.length)]);
    const getLuckSlotCount = (slots, symbol) => slots.filter((slot) => slot === symbol).length;
    const swapBallPositions = () => {
      const first = balls[0];
      const second = balls[1];
      const firstPosition = { x: first.x, y: first.y, vx: first.vx, vy: first.vy, baseVx: first.baseVx, baseVy: first.baseVy };
      first.x = second.x;
      first.y = second.y;
      first.vx = second.vx;
      first.vy = second.vy;
      first.baseVx = second.baseVx;
      first.baseVy = second.baseVy;
      second.x = firstPosition.x;
      second.y = firstPosition.y;
      second.vx = firstPosition.vx;
      second.vy = firstPosition.vy;
      second.baseVx = firstPosition.baseVx;
      second.baseVy = firstPosition.baseVy;
      balls.forEach(keepInBox);
    };
    const swapBallHealth = () => {
      const firstHp = game.hp[0];
      game.hp[0] = Math.min(maxHp[0], game.hp[1]);
      game.hp[1] = Math.min(maxHp[1], firstHp);
    };
    const shootLuckBottle = (ball, time) => {
      if (game.defeatedSide !== null || game.hp[ball.side] <= 0) return;
      const target = balls[ball.side ? 0 : 1];
      if (game.hp[target.side] <= 0) return;
      const bottleSpeed = 8.6;
      const angle = aimAtMovingTarget(ball, target, bottleSpeed, 1, time);
      game.projectiles.push({
        type: "bottle",
        side: ball.side,
        target: target.side,
        x: ball.x,
        y: ball.y,
        vx: Math.cos(angle) * bottleSpeed,
        vy: Math.sin(angle) * bottleSpeed,
        baseVx: Math.cos(angle) * bottleSpeed,
        baseVy: Math.sin(angle) * bottleSpeed,
        inLiquid: false
      });
    };
    const queueLuckBottles = (ball, count, time) => {
      for (let index = 0; index < count; index += 1) {
        game.luckBottleQueue.push({ side: ball.side, throwAt: time + index * 280 });
      }
    };
    const resolveLuckSlots = (ball, slots, time) => {
      const effect = game.effects[ball.side];
      const gloveCount = getLuckSlotCount(slots, "glove");
      const bottleCount = getLuckSlotCount(slots, "bottle");
      const arrowsCount = getLuckSlotCount(slots, "arrows");
      const xCount = getLuckSlotCount(slots, "x");
      let earned = false;
      if (slots.every((slot) => slot !== "x")) {
        ball.lifeSteal = true;
        effect.lifeSteal = true;
        earned = true;
      }
      if (gloveCount >= 3) {
        ball.luckImpactBonus += 2;
        earned = true;
      } else if (gloveCount >= 2) {
        ball.luckImpactBonus += 1;
        earned = true;
      }
      if (bottleCount >= 2) {
        const drinks = bottleCount >= 3 ? 3 : 1;
        for (let index = 0; index < drinks; index += 1) healBall(ball.side, 3, ball.x, ball.y - 18);
        queueLuckBottles(ball, drinks, time);
        earned = true;
      }
      if (arrowsCount >= 2) {
        swapBallPositions();
        if (arrowsCount >= 3) swapBallHealth();
        earned = true;
      }
      if (xCount >= 3) {
        playSfx(luckXSfx, 0.8);
        pushDamage(ball.side, 5, ball.x, ball.y);
      } else if (xCount >= 2) {
        playSfx(luckXSfx, 0.8);
        pushDamage(ball.side, 3, ball.x, ball.y);
      } else if (earned) {
        playSfx(luckEarnSfx, 0.85);
      } else {
        playSfx(luckNothingSfx, 0.75, { maxDurationMs: LUCK_NOTHING_SFX_MS });
      }
      effect.luckImpactBonus = ball.luckImpactBonus;
    };
    const updateLuckRoll = (ball, time, paused, dt) => {
      const effect = game.effects[ball.side];
      if (paused) {
        game.nextLuckSpinAt[ball.side] += dt;
        if (ball.luckSpin) {
          ball.luckSpin.startedAt += dt;
          ball.luckSpin.resolveAt += dt;
        }
        effect.nextLuckRoll = Math.max(0, ((ball.luckSpin?.resolveAt ?? game.nextLuckSpinAt[ball.side]) - time) / 1000);
        effect.luckState = "Paused";
        return;
      }
      if (!ball.luckSpin && time >= game.nextLuckSpinAt[ball.side]) {
        ball.luckSpin = { startedAt: time, resolveAt: time + LUCK_SPIN_DURATION_MS };
        effect.luckState = "Spinning";
        playSfx(luckGambleSfx, 0.8, { maxDurationMs: LUCK_SPIN_DURATION_MS });
      }
      if (ball.luckSpin) {
        const flickerSlots = randomLuckSlots();
        effect.luckSlots = flickerSlots;
        effect.nextLuckRoll = Math.max(0, (ball.luckSpin.resolveAt - time) / 1000);
        effect.luckState = "Spinning";
        if (time >= ball.luckSpin.resolveAt) {
          const slots = randomLuckSlots();
          effect.luckSlots = slots;
          effect.luckState = "Landed";
          resolveLuckSlots(ball, slots, time);
          ball.luckSpin = null;
          game.nextLuckSpinAt[ball.side] = time + LUCK_SPIN_INTERVAL_MS;
          effect.nextLuckRoll = LUCK_SPIN_INTERVAL_MS / 1000;
        }
      } else {
        effect.nextLuckRoll = Math.max(0, (game.nextLuckSpinAt[ball.side] - time) / 1000);
        effect.luckState = "Waiting";
      }
    };
    const updateLuckBottleQueue = (time) => {
      game.luckBottleQueue = game.luckBottleQueue.filter((queuedBottle) => {
        if (time < queuedBottle.throwAt) return true;
        shootLuckBottle(balls[queuedBottle.side], time);
        return false;
      });
    };
    const shuffle = (items) => {
      const shuffled = [...items];
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
      }
      return shuffled;
    };
    const getActiveTeslaNodes = (side = null) => [
      ...game.teslaCoils,
      ...game.genesisObjects.filter((object) => object.phase === "settled" && object.finalType === "tesla")
    ].filter((node) => side === null || node.side === side);
    const getTeslaPairs = () => {
      const pairs = [];
      const nodes = getActiveTeslaNodes();
      nodes.forEach((coil, index) => {
        nodes.slice(index + 1).forEach((other) => {
          if (coil.side === other.side) pairs.push({ side: coil.side, a: coil, b: other });
        });
      });
      return pairs;
    };
    const getTeslaZapDelay = (pairCount) => Math.max(220, Math.min(650, 650 / Math.sqrt(Math.max(1, pairCount))));
    const updateLightning = (time) => {
      if (game.defeatedSide !== null) {
        deactivateTeslaWeb();
        return;
      }
      const pairs = getTeslaPairs();
      if (time >= game.nextLightningAt && pairs.length > 0 && game.lightningQueue.length === 0) {
        game.lightningQueue = shuffle(pairs);
        game.nextLightningZapAt = time;
        game.nextLightningAt = time + 5000;
      }
      if (game.lightningQueue.length > 0 && time >= game.nextLightningZapAt) {
        const pair = game.lightningQueue.shift();
        game.lightningBolts.push({ id: `${time}-${pair.a.id}-${pair.b.id}`, side: pair.side, a: pair.a, b: pair.b, bornAt: time, hitSides: [] });
        playSfx(teslaZapSfx, 0.07);
        game.nextLightningZapAt = time + getTeslaZapDelay(pairs.length);
        if (game.lightningQueue.length === 0) game.nextLightningZapAt = Infinity;
      }
      if (pairs.length === 0) {
        game.lightningQueue = [];
        game.nextLightningAt = Infinity;
        game.nextLightningZapAt = Infinity;
      }
      const boltDuration = Math.max(70, Math.min(450, getTeslaZapDelay(Math.max(1, pairs.length)) * 0.85));
      game.lightningBolts = game.lightningBolts.filter((bolt) => time - bolt.bornAt < boltDuration);
      game.lightningBolts.forEach((bolt) => {
        balls.forEach((ball) => {
          if (ball.side === bolt.side || bolt.hitSides.includes(ball.side) || game.hp[ball.side] <= 0 || isFearPlasma(ball)) return;
          if (distanceToSegment(ball.x, ball.y, bolt.a.x, bolt.a.y, bolt.b.x, bolt.b.y) <= ball.r) {
            pushDamage(ball.side, 1, ball.x, ball.y);
            if (!isBaseballFrenzy(ball)) {
              ball.stunnedUntil = Math.max(ball.stunnedUntil, time + 100);
            }
            bolt.hitSides.push(ball.side);
          }
        });
      });
    };
    const getMoonPositions = (ball, time) => {
      const orbitDuration = Math.PI * 2 * moonOrbitSpeedMs;
      const orbitDistance = ball.r * 1.75;
      return ball.moons.map((moon) => {
        if (moon.state !== "orbit") return moon;
        const angle = ((time - moon.orbitStartedAt) / moonOrbitSpeedMs) + moon.offset;
        return {
          ...moon,
          x: ball.x + Math.cos(angle) * orbitDistance,
          y: ball.y + Math.sin(angle) * orbitDistance,
          angle,
          orbitProgress: Math.min(1, (time - moon.orbitStartedAt) / orbitDuration)
        };
      });
    };
    const launchGravityMoon = (ball, moon, position) => {
      const enemy = balls[ball.side ? 0 : 1];
      const moonRadius = ball.r * 0.34;
      const angle = Math.atan2(enemy.y - position.y, enemy.x - position.x);
      moon.state = "launched";
      moon.x = position.x;
      moon.y = position.y;
      moon.vx = Math.cos(angle) * moonSpeed;
      moon.vy = Math.sin(angle) * moonSpeed;
      moon.leftHome = false;
      moon.lastHitAt = 0;
      moon.r = moonRadius;
    };
    const returnMoonToOrbit = (moon, ball, time) => {
      moon.state = "orbit";
      moon.x = ball.x;
      moon.y = ball.y;
      moon.vx = 0;
      moon.vy = 0;
      moon.leftHome = false;
      moon.orbitStartedAt = time;
    };
    const updateGravityMoons = (ball, time) => {
      const enemy = balls[ball.side ? 0 : 1];
      if (game.hp[ball.side] <= 0 || game.hp[enemy.side] <= 0) return;
      const paused = isAbilityPaused(ball, time);
      const orbitDuration = Math.PI * 2 * moonOrbitSpeedMs;
      const activeLiquidBall = balls.find((candidate) => game.effects[candidate.side].liquidState === "Water");
      const collideMoonWithEnemy = (moon, x, y, damage, movableMoon) => {
        if (Math.hypot(enemy.x - x, enemy.y - y) >= enemy.r + moonRadius) return;
        const hitAngle = Math.atan2(y - enemy.y, x - enemy.x);
        const targetDistance = enemy.r + moonRadius;
        const normalX = Math.cos(hitAngle);
        const normalY = Math.sin(hitAngle);
        if (movableMoon) {
          moon.x = enemy.x + normalX * targetDistance;
          moon.y = enemy.y + normalY * targetDistance;
          const dot = moon.vx * normalX + moon.vy * normalY;
          moon.vx -= 2 * dot * normalX;
          moon.vy -= 2 * dot * normalY;
        } else if (!enemy.trappedBy && time >= enemy.stunnedUntil) {
          const overlap = enemy.r + moonRadius - Math.hypot(enemy.x - x, enemy.y - y);
          enemy.x -= normalX * overlap;
          enemy.y -= normalY * overlap;
          keepInBox(enemy);
        }
        if (!enemy.trappedBy && time >= enemy.stunnedUntil) {
          enemy.vx -= normalX * normalSpeed * 0.35;
          enemy.vy -= normalY * normalSpeed * 0.35;
        }
        if (!paused && time - moon.lastHitAt > 450) {
          pushDamage(enemy.side, damage, enemy.x, enemy.y);
          moon.lastHitAt = time;
        }
      };
      const moonRadius = ball.r * 0.34;
      getMoonPositions(ball, time).forEach((position, index) => {
        const moon = ball.moons[index];
        const touchingLiquid = activeLiquidBall && Math.hypot(position.x - activeLiquidBall.x, position.y - activeLiquidBall.y) < activeLiquidBall.r + moonRadius;
        if (moon.state === "orbit" && touchingLiquid) {
          const angle = Math.random() * Math.PI * 2;
          moon.state = "launched";
          moon.x = position.x;
          moon.y = position.y;
          moon.vx = Math.cos(angle) * moonSpeed;
          moon.vy = Math.sin(angle) * moonSpeed;
          moon.leftHome = true;
          moon.r = moonRadius;
          moon.inLiquid = true;
          return;
        }
        if (moon.state === "orbit" && !isFearPlasma(enemy)) collideMoonWithEnemy(moon, position.x, position.y, 1, false);
        if (moon.state === "orbit" && time - moon.orbitStartedAt >= orbitDuration) launchGravityMoon(ball, moon, position);
      });
      ball.moons.forEach((moon) => {
        if (moon.state !== "launched") return;
        const moonSpeedMultiplier = time < moon.defrostUntil ? 0.45 : 1;
        moon.x += moon.vx * moonSpeedMultiplier;
        moon.y += moon.vy * moonSpeedMultiplier;
        let touchedWall = false;
        if (moon.x < moonRadius) {
          moon.x = moonRadius;
          moon.vx = Math.abs(moon.vx);
          touchedWall = true;
        }
        if (moon.x > box.w - moonRadius) {
          moon.x = box.w - moonRadius;
          moon.vx = -Math.abs(moon.vx);
          touchedWall = true;
        }
        if (moon.y < moonRadius) {
          moon.y = moonRadius;
          moon.vy = Math.abs(moon.vy);
          touchedWall = true;
        }
        if (moon.y > box.h - moonRadius) {
          moon.y = box.h - moonRadius;
          moon.vy = -Math.abs(moon.vy);
          touchedWall = true;
        }
        if (touchedWall && moon.batReflected) {
          moon.batReflected = false;
          const speed = Math.hypot(moon.vx, moon.vy) || 1;
          moon.vx = (moon.vx / speed) * moonSpeed;
          moon.vy = (moon.vy / speed) * moonSpeed;
        }

        const touchingLiquid = activeLiquidBall && Math.hypot(moon.x - activeLiquidBall.x, moon.y - activeLiquidBall.y) < activeLiquidBall.r + moonRadius;
        if (touchingLiquid) {
          moon.inLiquid = true;
          const liquidMoonSpeed = (moon.batReflected ? powerSpeed : moonSpeed) * 0.8;
          const speed = Math.hypot(moon.vx, moon.vy) || 1;
          moon.vx = (moon.vx / speed) * liquidMoonSpeed;
          moon.vy = (moon.vy / speed) * liquidMoonSpeed;
        } else if (moon.inLiquid) {
          nudgeDirection(moon);
          moon.inLiquid = false;
        }

        if (moon.batReflected && Math.hypot(moon.x - ball.x, moon.y - ball.y) < ball.r + moonRadius) {
          pushDamage(ball.side, 3, ball.x, ball.y);
          returnMoonToOrbit(moon, ball, time);
          return;
        }
        const baseballEnemy = enemy.fighter.id === "baseball" ? enemy : null;
        if (moon.batReflected && baseballEnemy && Math.hypot(moon.x - baseballEnemy.x, moon.y - baseballEnemy.y) < baseballEnemy.r + moonRadius) {
          if (!baseballEnemy.swing) startBaseballFrenzySwing(baseballEnemy, time);
          reflectMoonTowardOwner(moon, ball, baseballEnemy, time);
        }

        const distanceFromGravity = Math.hypot(moon.x - ball.x, moon.y - ball.y);
        if (distanceFromGravity > ball.r * 2.4) moon.leftHome = true;
        if (!moon.batReflected && moon.leftHome && distanceFromGravity < ball.r * 1.55) {
          returnMoonToOrbit(moon, ball, time);
          return;
        }

        const speed = Math.hypot(moon.vx, moon.vy) || 1;
        const targetMoonSpeed = moon.batReflected ? powerSpeed : moonSpeed;
        moon.vx = (moon.vx / speed) * targetMoonSpeed;
        moon.vy = (moon.vy / speed) * targetMoonSpeed;
        if (!moon.batReflected && !isFearPlasma(enemy)) collideMoonWithEnemy(moon, moon.x, moon.y, 3, true);
      });
      game.effects[ball.side].moonMode = ball.moons.some((moon) => moon.state === "launched") ? "Launched" : "Orbiting";
      game.effects[ball.side].moonStates = ball.moons.map((moon) => moon.state === "launched" ? "Launched" : "Orbiting");
    };
    const startBlueMode = (ball, time) => {
      game.blueModeArrows.push({
        id: `${time}-${ball.side}`,
        side: ball.side,
        target: ball.side ? 0 : 1,
        angle: Math.random() * Math.PI * 2,
        startedAt: time,
        slammed: false
      });
      playSfx(airrowAppearSfx, 0.85);
      game.nextBlueModeAt[ball.side] = time + blueModeCooldown;
    };
    const startBaseballSwing = (ball, time) => {
      const angle = Math.atan2(ball.vy, ball.vx);
      ball.swing = {
        startedAt: time,
        swingAt: time + baseballHold,
        resumeAngle: angle,
        frenzy: false,
        frenzyQueued: false,
        swung: false,
        swingingUntil: 0
      };
      ball.baseVx = Math.cos(angle) * normalSpeed;
      ball.baseVy = Math.sin(angle) * normalSpeed;
      ball.vx = 0;
      ball.vy = 0;
      stopBaseballSfx(ball);
      ball.baseballChargeAudio = playSfx(baseballChargeSfx, 0.85, { loop: true });
    };
    const startBaseballFrenzySwing = (ball, time) => {
      const target = balls[ball.side ? 0 : 1];
      const angle = Math.atan2(target.y - ball.y, target.x - ball.x);
      const startingFrenzy = !ball.swing?.frenzy && (game.effects[ball.side].frenzySwings ?? 0) === 0;
      clearFrenzyStatuses(ball);
      ball.swing = {
        startedAt: time,
        swingAt: time,
        resumeAngle: angle,
        frenzy: true,
        frenzyQueued: false,
        swung: false,
        swingingUntil: 0
      };
      stopBaseballSfx(ball);
      if (startingFrenzy) ball.baseballFrenzyAudio = playSfx(baseballFrenzySfx, 0.85, { loop: true });
    };
    const stunBall = (ball, time) => {
      if (isBaseballFrenzy(ball)) return;
      cancelBaseballSwing(ball, time);
      ball.powered = false;
      ball.poweredUntil = 0;
      ball.slam = null;
      ball.trappedBy = null;
      ball.trapSpitUntil = 0;
      ball.vx = 0;
      ball.vy = 0;
      ball.stunnedUntil = time + 3000;
    };
    const spawnRockslide = (ball, time) => {
      if (game.defeatedSide !== null || game.hp[ball.side] <= 0) return;
      const rockCount = 12 + Math.floor(Math.random() * 7);
      for (let index = 0; index < rockCount; index += 1) {
        const sizeRoll = Math.random();
        const r = sizeRoll < 0.18 ? ball.r * 0.36 : sizeRoll < 0.55 ? ball.r * 0.27 : ball.r * 0.19;
        game.rocks.push({
          id: `${time}-${ball.side}-${game.rocks.length}-${index}`,
          side: ball.side,
          target: ball.side ? 0 : 1,
          x: r + Math.random() * (box.w - r * 2),
          y: -r - index * 10 - Math.random() * box.h * 0.35,
          vx: (Math.random() - 0.5) * normalSpeed * 0.28,
          vy: normalSpeed * (0.54 + Math.random() * 0.36),
          r,
          mass: r * r,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.08,
          bornAt: time,
          hit: false
        });
      }
      game.nextRockslideAt[ball.side] = time + ROCKSLIDE_COOLDOWN_MS;
    };
    const applyRockHit = (rock, target, time) => {
      if (rock.hit || game.hp[target.side] <= 0 || isFearPlasma(target) || isBaseballFrenzy(target)) return;
      if (Math.hypot(rock.x - target.x, rock.y - target.y) >= rock.r + target.r) return;
      rock.hit = true;
      pushDamage(target.side, 2, target.x, target.y, { sfx: hitSfx, volumeScale: 0.45 });
    };
    const updateRockslide = (ball, time, paused, dt) => {
      const effect = game.effects[ball.side];
      if (paused) {
        game.nextRockslideAt[ball.side] += dt;
        effect.nextRockslide = Math.max(0, (game.nextRockslideAt[ball.side] - time) / 1000);
        effect.activeRocks = game.rocks.filter((rock) => rock.side === ball.side).length;
        return;
      }
      effect.nextRockslide = Math.max(0, (game.nextRockslideAt[ball.side] - time) / 1000);
      effect.activeRocks = game.rocks.filter((rock) => rock.side === ball.side).length;
      if (time >= game.nextRockslideAt[ball.side]) spawnRockslide(ball, time);
    };
    const updateRocks = (time) => {
      const gravity = 0.15 * modifiers.speed;
      game.rocks.forEach((rock) => {
        rock.vy += gravity;
        rock.x += rock.vx;
        rock.y += rock.vy;
        rock.angle += rock.spin;
        if (rock.x < rock.r || rock.x > box.w - rock.r) {
          rock.x = Math.max(rock.r, Math.min(box.w - rock.r, rock.x));
          rock.vx *= -0.74;
        }
        if (rock.y > box.h - rock.r) {
          rock.y = box.h - rock.r;
          rock.vy *= -0.52;
          rock.vx *= 0.92;
        }
        if (rock.y < -box.h * 0.35) return;
        const target = balls[rock.target];
        applyRockHit(rock, target, time);
      });
      for (let firstIndex = 0; firstIndex < game.rocks.length; firstIndex += 1) {
        const first = game.rocks[firstIndex];
        for (let secondIndex = firstIndex + 1; secondIndex < game.rocks.length; secondIndex += 1) {
          const second = game.rocks[secondIndex];
          const dx = second.x - first.x;
          const dy = second.y - first.y;
          const dist = Math.hypot(dx, dy) || 1;
          const minDist = first.r + second.r;
          if (dist >= minDist) continue;
          const nx = dx / dist;
          const ny = dy / dist;
          const overlap = minDist - dist;
          const totalMass = first.mass + second.mass;
          first.x -= nx * overlap * (second.mass / totalMass);
          first.y -= ny * overlap * (second.mass / totalMass);
          second.x += nx * overlap * (first.mass / totalMass);
          second.y += ny * overlap * (first.mass / totalMass);
          const relVx = second.vx - first.vx;
          const relVy = second.vy - first.vy;
          const impactSpeed = relVx * nx + relVy * ny;
          if (impactSpeed > 0) continue;
          const impulse = (-(1 + 0.58) * impactSpeed) / (1 / first.mass + 1 / second.mass);
          first.vx -= (impulse * nx) / first.mass;
          first.vy -= (impulse * ny) / first.mass;
          second.vx += (impulse * nx) / second.mass;
          second.vy += (impulse * ny) / second.mass;
        }
      }
      game.rocks = game.rocks.filter((rock) => !rock.hit && time - rock.bornAt < 7600 && rock.y < box.h + rock.r * 3);
      game.effects.forEach((effect, index) => {
        if (effect.activeRocks !== null) effect.activeRocks = game.rocks.filter((rock) => rock.side === index).length;
      });
    };
    const finishBaseballSwing = (ball, time) => {
      if (!ball.swing || ball.swing.swung) return;
      const target = balls[ball.side ? 0 : 1];
      const swingAngle = Math.atan2(target.y - ball.y, target.x - ball.x);
      const dx = target.x - ball.x;
      const dy = target.y - ball.y;
      const swingRange = ball.r * 4.2;
      const distance = Math.hypot(dx, dy);
      const alongBat = dx * Math.cos(swingAngle) + dy * Math.sin(swingAngle);
      const offBatCenter = Math.abs(dx * Math.sin(swingAngle) - dy * Math.cos(swingAngle));
      const hit = game.hp[target.side] > 0 && !isFearPlasma(target) && alongBat >= 0 && alongBat <= swingRange && offBatCenter <= target.r;
      let reflectedObjects = 0;

      stopSfx(ball.baseballChargeAudio);
      ball.baseballChargeAudio = null;
      getLaunchedMoons().forEach(({ owner, moon }) => {
        if (owner.side === ball.side || !isObjectInBatArc(ball, moon, swingAngle, swingRange)) return;
        reflectMoonTowardOwner(moon, owner, ball, time);
        reflectedObjects += 1;
      });
      game.projectiles.forEach((projectile) => {
        if (!["bottle", "icicle", "syringe"].includes(projectile.type)) return;
        if (projectile.side === ball.side || !isObjectInBatArc(ball, { ...projectile, r: 10 }, swingAngle, swingRange)) return;
        reflectProjectileTowardOwner(projectile, ball, time);
        reflectedObjects += 1;
      });
      if (hit) {
        stopSfx(ball.baseballSwingAudio);
        ball.baseballSwingAudio = null;
        if (ball.swing.frenzy) {
          pushDamage(target.side, 4, target.x, target.y, { sfx: baseballHitSfx, volumeScale: 0.85 });
          if (game.hp[target.side] > 0) stunBall(target, time);
        } else {
          pushDamage(target.side, 10, target.x, target.y, { sfx: baseballHitSfx, volumeScale: 0.85 });
          if (game.hp[target.side] > 0) markPowerAtAngle(target, time, swingAngle);
          game.effects[ball.side].strikes = 0;
        }
      } else if (reflectedObjects > 0) {
        stopSfx(ball.baseballSwingAudio);
        ball.baseballSwingAudio = null;
      } else if (!ball.swing.frenzy) {
        ball.baseballSwingAudio = playSfx(baseballSwingSfx, 0.75, { maxDurationMs: 160 });
        game.effects[ball.side].strikes = Math.min(3, (game.effects[ball.side].strikes ?? 0) + 1);
        ball.swing.frenzyQueued = game.effects[ball.side].strikes >= 3;
      } else {
        ball.baseballSwingAudio = playSfx(baseballSwingSfx, 0.75, { maxDurationMs: 160 });
      }

      if (ball.swing.frenzy && (game.effects[ball.side].frenzySwings ?? 0) >= 4) {
        stopSfx(ball.baseballFrenzyAudio);
        ball.baseballFrenzyAudio = null;
      }

      ball.swing.swung = true;
      ball.swing.swingStartedAt = time;
      ball.swing.swingingUntil = time + 160;
      ball.swing.batStartAngle = getBaseballBatAngle(ball);
      let moveAngle = swingAngle;
      let swingSpeed = normalSpeed * 1.45;
      if (ball.swing.frenzy && distance <= swingRange / 2) {
        moveAngle = Math.atan2(ball.y - target.y, ball.x - target.x);
        if (!Number.isFinite(moveAngle)) moveAngle = swingAngle + Math.PI;
        const spacingNudge = Math.min(ball.r * 0.45, Math.max(0, swingRange / 2 - distance));
        ball.x += Math.cos(moveAngle) * spacingNudge;
        ball.y += Math.sin(moveAngle) * spacingNudge;
        keepInBox(ball);
        swingSpeed = normalSpeed * 0.95;
      }
      ball.swing.resumeAngle = moveAngle;
      setVelocity(ball, moveAngle, swingSpeed);
    };
    const updateBaseballSwing = (ball, time) => {
      if (isBaseballFrenzy(ball)) clearFrenzyStatuses(ball);
      if (ball.swing?.swung && time >= ball.swing.swingingUntil) {
        stopSfx(ball.baseballSwingAudio);
        ball.baseballSwingAudio = null;
        setVelocity(ball, ball.swing.resumeAngle, normalSpeed);
        if (ball.swing.frenzy) {
          game.effects[ball.side].frenzySwings = (game.effects[ball.side].frenzySwings ?? 0) + 1;
          if (game.effects[ball.side].frenzySwings < 5) {
            startBaseballFrenzySwing(ball, time);
            return;
          }
          game.effects[ball.side].strikes = 0;
          game.effects[ball.side].frenzySwings = 0;
          game.nextBaseballSwingAt[ball.side] = time + baseballCooldown;
          stopSfx(ball.baseballFrenzyAudio);
          ball.baseballFrenzyAudio = null;
          ball.swing = null;
          return;
        }
        if (ball.swing.frenzyQueued) {
          game.effects[ball.side].frenzySwings = 0;
          startBaseballFrenzySwing(ball, time);
          return;
        }
        ball.swing = null;
      }
      if (!ball.swing && time >= game.nextBaseballSwingAt[ball.side]) {
        startBaseballSwing(ball, time);
        game.nextBaseballSwingAt[ball.side] = Infinity;
      }
      if (ball.swing && !ball.swing.swung && time >= ball.swing.swingAt) {
        finishBaseballSwing(ball, time);
        if (ball.swing && !ball.swing.frenzy && !ball.swing.frenzyQueued) {
          game.nextBaseballSwingAt[ball.side] = time + baseballCooldown;
        }
      }
    };
    const spawnTrap = (side, x, y, angle) => {
      if (game.defeatedSide !== null || game.hp[side] <= 0) return;
      const existing = game.traps.some((trap) => Math.hypot(trap.x - x, trap.y - y) < 68);
      if (existing) return;
      const activeSideTraps = game.traps.filter((trap) => trap.side === side);
      const maxGrowths = game.effects[side].maxGrowths ?? 5;
      if (activeSideTraps.length >= maxGrowths) return;
      game.traps.push({ id: `${performance.now()}-${side}-${game.traps.length}`, side, x, y, angle, closed: false, victimSide: null, releaseAt: 0, powerRelease: false });
      playSfx(flytrapLifeSfx);
      if (game.effects[side].activeGrowths !== null) game.effects[side].activeGrowths = activeSideTraps.length + 1;
    };
    const spawnGenesisObject = (ball, time) => {
      if (game.defeatedSide !== null || game.hp[ball.side] <= 0 || isDigitalMeltdown(ball)) return;
      const angle = Math.random() * Math.PI * 2;
      const speed = normalSpeed * (0.28 + Math.random() * 0.18);
      game.genesisObjects.push({
        id: `${time}-${ball.side}-${game.genesisObjects.length}`,
        side: ball.side,
        x: ball.x + Math.cos(angle) * ball.r * 1.05,
        y: ball.y + Math.sin(angle) * ball.r * 1.05,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: ball.r * 0.38,
        bornAt: time,
        slideUntil: time + 2000 + Math.random() * 2000,
        phase: "sliding",
        finalType: null,
        lastHitAt: 0,
        angle
      });
      playSfx(digitalSpawnSfx, 0.75);
      game.nextGenesisAt[ball.side] = time + GENESIS_COOLDOWN_MS;
    };
    const triggerFearJumpscare = (ball, time) => {
      const enemy = balls[ball.side ? 0 : 1];
      if (game.hp[ball.side] <= 0 || game.hp[enemy.side] <= 0 || game.defeatedSide !== null) return;
      if (isFearPlasma(enemy)) return;
      const scareRange = ball.r * 3.4;
      if (Math.hypot(ball.x - enemy.x, ball.y - enemy.y) > scareRange) return;
      pushDamage(enemy.side, 5, enemy.x, enemy.y, { sfx: hitSfx, volumeScale: 0.85 });
      if (game.hp[ball.side] > 0) {
        game.hp[ball.side] = Math.min(maxHp[ball.side], game.hp[ball.side] + 5);
        game.floating.push({ id: `${performance.now()}-${ball.side}-heal`, side: ball.side, x: ball.x, y: ball.y, text: "+5" });
        game.floating = game.floating.slice(-8);
      }
      if (game.hp[enemy.side] > 0) {
        game.effects[enemy.side].toxinStacks = (game.effects[enemy.side].toxinStacks || 0) + 1;
      }
      addExplosion(enemy.x, enemy.y, "#6d28d9", 1.1);
    };
    const updateFearSpooky = (ball, time, paused) => {
      const effect = game.effects[ball.side];
      if (paused) {
        game.nextSpookyAt[ball.side] += Math.min(32, time - (ball.lastSpookyPauseAt || time));
        ball.lastSpookyPauseAt = time;
        effect.nextSpooky = Math.max(0, (game.nextSpookyAt[ball.side] - time) / 1000);
        return;
      }
      ball.lastSpookyPauseAt = 0;
      effect.nextSpooky = Math.max(0, (game.nextSpookyAt[ball.side] - time) / 1000);
      effect.spookyState = ball.spookyState === "plasma" ? "Plasma" : "Normal";
      if (time < game.nextSpookyAt[ball.side]) return;
      if (ball.spookyState === "plasma") {
        ball.spookyState = "normal";
        effect.spookyState = "Normal";
        triggerFearJumpscare(ball, time);
      } else {
        ball.spookyState = "plasma";
        effect.spookyState = "Plasma";
        ball.powered = false;
        ball.slam = null;
        ball.trappedBy = null;
      }
      game.nextSpookyAt[ball.side] = time + 5000;
      effect.nextSpooky = 5;
    };
    const getGenesisWallTrapPlacement = (object) => {
      const wallGap = ballRadius * 1.25;
      const distances = [
        { wall: "left", distance: object.x, x: 8, y: object.y, angle: 0 },
        { wall: "right", distance: box.w - object.x, x: box.w - 8, y: object.y, angle: Math.PI },
        { wall: "top", distance: object.y, x: object.x, y: 8, angle: Math.PI / 2 },
        { wall: "bottom", distance: box.h - object.y, x: object.x, y: box.h - 8, angle: -Math.PI / 2 }
      ];
      const nearest = distances.reduce((best, current) => current.distance < best.distance ? current : best);
      if (nearest.distance > wallGap) return null;
      return {
        x: Math.max(8, Math.min(box.w - 8, nearest.x)),
        y: Math.max(8, Math.min(box.h - 8, nearest.y)),
        angle: nearest.angle
      };
    };
    const settleGenesisObject = (object, time) => {
      object.phase = "settled";
      object.vx = 0;
      object.vy = 0;
      object.finalType = ["flytrap", "tesla", "box"][Math.floor(Math.random() * 3)];
      if (object.finalType === "flytrap") {
        const wallPlacement = getGenesisWallTrapPlacement(object);
        if (!wallPlacement) {
          object.finalType = ["tesla", "box"][Math.floor(Math.random() * 2)];
        } else {
          object.x = wallPlacement.x;
          object.y = wallPlacement.y;
          object.angle = wallPlacement.angle;
        }
      }
      if (object.finalType === "tesla") {
        playSfx(teslaPlaceSfx, 0.65);
        if (getActiveTeslaNodes(object.side).length >= 2 && game.nextLightningAt === Infinity) game.nextLightningAt = time + 500;
      }
    };
    const collideGenesisObjectWithBall = (object, ball, time) => {
      if (object.phase === "settled" && object.finalType === "tesla") return;
      if (object.phase === "sliding") return;
      if (object.finalType === "flytrap" && object.closed) return;
      if (game.hp[ball.side] <= 0 || ball.trappedBy || isDigitalMeltdown(ball) || isFearPlasma(ball)) return;
      if (ball.side === object.side) return;
      const dx = ball.x - object.x;
      const dy = ball.y - object.y;
      const dist = Math.hypot(dx, dy) || 1;
      const hitboxRadius = object.finalType === "flytrap" ? 12 * 1.1 : object.r;
      if (dist >= ball.r + hitboxRadius) return;
      if (time - object.lastHitAt < 650) return;
      object.lastHitAt = time;
      if (object.finalType === "flytrap") {
        closeFlytrapOnVictim(object, ball, time);
      }
      if (object.finalType === "box") {
        pushDamage(ball.side, 3, ball.x, ball.y, { sfx: powerHitSfx, volumeScale: 0.65 });
        if (game.hp[ball.side] > 0) setVelocity(ball, Math.random() * Math.PI * 2, normalSpeed * (1.35 + Math.random() * 0.65));
        object.remove = true;
      }
    };
    const updateGenesisObjects = (time) => {
      game.genesisObjects.forEach((object) => {
        if (object.phase === "sliding") {
          object.x += object.vx;
          object.y += object.vy;
          object.vx *= 0.994;
          object.vy *= 0.994;
          if (object.x < object.r || object.x > box.w - object.r) {
            object.x = Math.max(object.r, Math.min(box.w - object.r, object.x));
            object.vx *= -0.72;
          }
          if (object.y < object.r || object.y > box.h - object.r) {
            object.y = Math.max(object.r, Math.min(box.h - object.r, object.y));
            object.vy *= -0.72;
          }
          if (time >= object.slideUntil) settleGenesisObject(object, time);
        } else if (object.finalType === "flytrap" && object.closed) {
          if (object.victimSide !== null) {
            const victim = balls[object.victimSide];
            victim.x = object.x;
            victim.y = object.y;
            victim.vx = 0;
            victim.vy = 0;
            if (time >= object.releaseAt) releaseFlytrapVictim(object, victim, time);
          }
        }
        balls.forEach((ball) => collideGenesisObjectWithBall(object, ball, time));
      });
      game.genesisObjects = game.genesisObjects.filter((object) => !object.remove && (!object.closedAt || time - object.closedAt < 420));
      game.effects.forEach((effect, index) => {
        if (effect.genesisObjects !== null) effect.genesisObjects = game.genesisObjects.filter((object) => object.side === index).length;
      });
    };
    const updateDigitalMeltdown = (ball, time) => {
      if (!ball.meltdown || game.defeatedSide !== null) return;
      const meltdown = ball.meltdown;
      const target = balls[meltdown.targetSide];
      const text = `Game.Win.${target.fighter.name}=true;`;
      const typed = Math.min(text.length, Math.floor((time - meltdown.startedAt) / 500));
      game.effects.forEach((effect) => {
        effect.meltdownState = "Meltdown";
        effect.meltdownText = text.slice(0, typed);
      });
      ball.vx = 0;
      ball.vy = 0;
      if (meltdown.activeSlam) {
        const progress = Math.min(1, (time - meltdown.activeSlam.startedAt) / 260);
        const eased = 1 - (1 - progress) * (1 - progress);
        target.trappedBy = null;
        target.powered = false;
        target.slam = null;
        target.x = meltdown.activeSlam.startX + (meltdown.activeSlam.endX - meltdown.activeSlam.startX) * eased;
        target.y = meltdown.activeSlam.startY + (meltdown.activeSlam.endY - meltdown.activeSlam.startY) * eased;
        target.vx = 0;
        target.vy = 0;
        if (progress >= 1) meltdown.activeSlam = null;
      }
      while (meltdown.typedChars < typed && game.defeatedSide === null) {
        meltdown.typedChars += 1;
        const wallIndex = meltdown.typedChars % 4;
        const slamTargets = [
          { x: box.w - target.r, y: Math.max(target.r, Math.min(box.h - target.r, target.y + ball.r * 0.35)) },
          { x: target.r, y: Math.max(target.r, Math.min(box.h - target.r, target.y - ball.r * 0.35)) },
          { x: Math.max(target.r, Math.min(box.w - target.r, target.x + ball.r * 0.35)), y: box.h - target.r },
          { x: Math.max(target.r, Math.min(box.w - target.r, target.x - ball.r * 0.35)), y: target.r }
        ];
        const slamTarget = slamTargets[wallIndex];
        meltdown.activeSlam = {
          startedAt: time,
          startX: target.x,
          startY: target.y,
          endX: slamTarget.x,
          endY: slamTarget.y
        };
        pushDamage(target.side, 3, target.x, target.y, { sfx: airSlamSfx, volumeScale: 0.85 });
        addExplosion(slamTarget.x, slamTarget.y, "#22d3ee", 0.85);
      }
      if (typed >= text.length && !meltdown.activeSlam && game.defeatedSide === null) {
        game.hp[ball.side] = 0;
        defeatSide(ball.side, time);
      }
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
      pushDamage(ball.side, damage, ball.x, ball.y, { sfx: airSlamSfx, volumeScale: 0.85 });
      if (damage >= 12 && game.hp[ball.side] > 0) markPowerAtAngle(ball, performance.now(), reboundAngle);
    };
    const bounceBalls = (a, b, time) => {
      markImpact(a, time);
      markImpact(b, time);
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
      if (isAbilityPaused(a, time) || isAbilityPaused(b, time)) return;
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
    const triggerDefrostContact = (time) => {
      balls.forEach((ball) => {
        if (time >= ball.defrostUntil || game.hp[ball.side] <= 0 || isBaseballFrenzy(ball)) return;
        const owner = Number.isInteger(ball.defrostOwnerSide) ? balls[ball.defrostOwnerSide] : null;
        if (owner && isAbilityPaused(owner, time)) return;
        const other = balls[ball.side ? 0 : 1];
        const angle = Math.atan2(ball.y - other.y, ball.x - other.x);
        const frostDamage = owner ? Math.max(1, game.effects[owner.side].iciclesLanded ?? 1) : 1;
        pushDamage(ball.side, frostDamage, ball.x, ball.y);
        playSfx(frostShatterSfx, 0.85);
        if (game.hp[ball.side] > 0) markPowerAtAngle(ball, time, angle);
        ball.defrostUntil = 0;
        ball.defrostOwnerSide = null;
      });
    };
    const drawClippedAccessory = (ball, image, xOffset, yOffset, widthScale, heightScale) => {
      if (!image?.complete || !image.naturalWidth) return;
      const width = ball.r * widthScale;
      const height = ball.r * heightScale;
      ctx.save();
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.clip();
      ctx.globalAlpha = 1;
      ctx.drawImage(image, ball.x + ball.r * xOffset - width / 2, ball.y + ball.r * yOffset - height / 2, width, height);
      ctx.restore();
    };
    const drawAccessory = (ball, image, xOffset, yOffset, widthScale, heightScale) => {
      if (!image?.complete || !image.naturalWidth) return;
      const width = ball.r * widthScale;
      const height = ball.r * heightScale;
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.drawImage(image, ball.x + ball.r * xOffset - width / 2, ball.y + ball.r * yOffset - height / 2, width, height);
      ctx.restore();
    };
    const drawCroppedAccessory = (ball, image, crop, xOffset, yOffset, widthScale, heightScale, clipped = false) => {
      if (!image?.complete || !image.naturalWidth) return;
      const width = ball.r * widthScale;
      const height = ball.r * heightScale;
      ctx.save();
      if (clipped) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.clip();
      }
      ctx.globalAlpha = 1;
      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.w,
        crop.h,
        ball.x + ball.r * xOffset - width / 2,
        ball.y + ball.r * yOffset - height / 2,
        width,
        height
      );
      ctx.restore();
    };
    const drawBallAccessory = (ball) => {
      if (ball.fighter.id === "water") {
        drawCroppedAccessory(ball, accessoryImages.water, { x: 6, y: 147, w: 429, h: 180 }, 0, -0.34, 2.26, 0.95, true);
      }
      if (ball.fighter.id === "electric") {
        drawAccessory(ball, accessoryImages.electric, 0, -0.72, 2.9, 1.55);
      }
      if (ball.fighter.id === "baseball") {
        drawCroppedAccessory(ball, accessoryImages.baseball, { x: 0, y: 83, w: 441, h: 274 }, 0.02, -1.08, 2.24, 1.39);
      }
    };
    const drawPoisonSyringeCue = (ball, time) => {
      if (ball.fighter.id !== "poison" || !syringeImage.complete || !syringeImage.naturalWidth) return;
      if (game.defeatedSide !== null || game.hp[ball.side] <= 0) return;
      const cueStartsAt = game.nextSyringeAt[ball.side] - cooldown + 2000;
      if (time < cueStartsAt || time >= game.nextSyringeAt[ball.side]) return;
      const height = ball.r * 0.9;
      const width = height * (syringeImage.naturalWidth / syringeImage.naturalHeight);
      ctx.save();
      ctx.translate(ball.x + ball.r * 0.62, ball.y + ball.r * 0.58);
      ctx.rotate((135 * Math.PI) / 180);
      ctx.drawImage(syringeImage, -width / 2, -height / 2, width, height);
      ctx.restore();
    };
    const drawBall = (ball) => {
      const effect = game.effects[ball.side];
      ctx.globalAlpha = isFearPlasma(ball) ? 0.38 : effect.transparency !== null ? Math.max(0.18, 1 - effect.transparency / 100) : 1;
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
        if (ball.fighter.id === "digital") {
          ctx.save();
          ctx.strokeStyle = "rgba(255, 80, 80, 0.45)";
          ctx.lineWidth = 8;
          ctx.shadowColor = "rgba(255, 60, 60, 0.7)";
          ctx.shadowBlur = 18;
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.r * 1.05, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }
      if (performance.now() < ball.defrostUntil) {
        ctx.save();
        ctx.globalAlpha = 0.28;
        ctx.fillStyle = "#82f4ff";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      if (isFearPlasma(ball)) {
        ctx.save();
        ctx.globalAlpha = 0.55;
        ctx.strokeStyle = "#e9d5ff";
        ctx.lineWidth = 5;
        ctx.setLineDash([8, 8]);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r * 1.13, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      drawBallAccessory(ball);
      drawPoisonSyringeCue(ball, performance.now());
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#111";
      ctx.font = "800 17.25px Inter, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      const hpOffset = ball.fighter.id === "baseball" ? ball.r * 2.05 : ball.r + 8;
      ctx.fillText(`HP: ${game.hp[ball.side]}`, ball.x, Math.max(18, ball.y - hpOffset));
    };
    const drawBaseballBat = (ball, time) => {
      if (!ball.swing || isAbilityPaused(ball)) return;
      const swingProgress = ball.swing.swung
        ? Math.max(0, Math.min(1, (time - ball.swing.swingStartedAt) / 160))
        : 0;
      const angle = ball.swing.swung
        ? ball.swing.batStartAngle + swingProgress * Math.PI
        : getBaseballBatAngle(ball);
      const batLength = ball.r * 3.36;
      const batWidth = ball.r * 3.44;

      ctx.save();
      ctx.translate(ball.x, ball.y);
      ctx.rotate(angle + Math.PI / 2);
      if (baseballBatImage.complete && baseballBatImage.naturalWidth) {
        ctx.drawImage(baseballBatImage, -batWidth / 2, -batLength - ball.r * 0.25, batWidth, batLength);
      } else {
        ctx.strokeStyle = "#b98242";
        ctx.lineWidth = Math.max(18, batWidth * 0.62);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(0, -ball.r * 0.25);
        ctx.lineTo(0, -batLength);
        ctx.stroke();
      }
      ctx.restore();
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
    const drawRock = (rock) => {
      ctx.save();
      ctx.translate(rock.x, rock.y);
      ctx.rotate(rock.angle);
      ctx.fillStyle = "#8b5e34";
      ctx.strokeStyle = "#2f2418";
      ctx.lineWidth = 3;
      ctx.beginPath();
      const points = 7;
      for (let index = 0; index < points; index += 1) {
        const angle = (index / points) * Math.PI * 2;
        const radius = rock.r * (0.78 + ((index * 37 + Math.floor(rock.r)) % 23) / 100);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
      ctx.beginPath();
      ctx.arc(-rock.r * 0.25, -rock.r * 0.28, rock.r * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    const drawProjectile = (projectile) => {
      ctx.save();
      ctx.translate(projectile.x, projectile.y);
      ctx.rotate(Math.atan2(projectile.vy, projectile.vx) + Math.PI / 2);
      if (projectile.type === "bottle") {
        ctx.fillStyle = "#7dd3fc";
        ctx.strokeStyle = "#0f172a";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-6, -16, 12, 25, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#38bdf8";
        ctx.fillRect(-4, -8, 8, 14);
        ctx.strokeRect(-4, -8, 8, 14);
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(-3, -20, 6, 6);
      } else if (projectile.type === "icicle") {
        ctx.rotate(Math.PI);
        if (icicleImage.complete && icicleImage.naturalWidth) {
          const height = 42;
          const width = height * (icicleImage.naturalWidth / icicleImage.naturalHeight);
          ctx.drawImage(icicleImage, -width / 2, -height / 2, width, height);
        } else {
          ctx.fillStyle = "#dff9ff";
          ctx.strokeStyle = "#69d8ff";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, -18);
          ctx.lineTo(9, 10);
          ctx.lineTo(0, 17);
          ctx.lineTo(-9, 10);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      } else if (syringeImage.complete && syringeImage.naturalWidth) {
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
    const drawGenesisObject = (object, time) => {
      const flicker = Math.floor((time - object.bornAt) / 120) % 4;
      ctx.save();
      ctx.translate(object.x, object.y);
      const settledAssetRotation = ["flytrap", "tesla"].includes(object.finalType) ? Math.PI / 2 : 0;
      ctx.rotate(object.angle + settledAssetRotation + (object.phase === "sliding" ? time / 220 : 0));
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#06141a";
      if (object.phase === "sliding") {
        ctx.globalAlpha = 0.88;
        ctx.fillStyle = ["#22d3ee", "#a7f3d0", "#f0abfc", "#fde047"][flicker];
        if (flicker === 0) {
          ctx.fillRect(-object.r, -object.r, object.r * 2, object.r * 2);
          ctx.strokeRect(-object.r, -object.r, object.r * 2, object.r * 2);
        } else if (flicker === 1) {
          ctx.beginPath();
          ctx.arc(0, 0, object.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else if (flicker === 2) {
          ctx.beginPath();
          ctx.moveTo(0, -object.r * 1.2);
          ctx.lineTo(object.r * 1.05, object.r * 0.75);
          ctx.lineTo(-object.r * 1.05, object.r * 0.75);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -object.r * 1.2);
          ctx.lineTo(object.r * 1.2, 0);
          ctx.lineTo(0, object.r * 1.2);
          ctx.lineTo(-object.r * 1.2, 0);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
        ctx.fillStyle = "#06141a";
        ctx.font = "800 10px Inter, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(["01", "{}", "<>", "[]"][flicker], 0, 1);
      } else if (object.finalType === "box") {
        ctx.fillStyle = "#d6a65a";
        ctx.fillRect(-object.r, -object.r, object.r * 2, object.r * 2);
        ctx.strokeRect(-object.r, -object.r, object.r * 2, object.r * 2);
        ctx.beginPath();
        ctx.moveTo(-object.r, -object.r * 0.22);
        ctx.lineTo(object.r, object.r * 0.22);
        ctx.moveTo(object.r * 0.22, -object.r);
        ctx.lineTo(-object.r * 0.22, object.r);
        ctx.stroke();
      } else if (object.finalType === "flytrap") {
        const size = object.r * 5.2;
        const attackIndex = object.closed ? Math.min(3, Math.max(1, Math.floor(((object.releaseAt - time) / 240) * -3) + 3)) : 0;
        const image = trapImages[attackIndex];
        if (image?.complete && image.naturalWidth) {
          ctx.drawImage(image, -size / 2, -size / 2, size, size);
        } else {
          ctx.fillStyle = object.closed ? "#247d3b" : "#31b65b";
          const snap = object.closed ? 0.55 : 1;
          ctx.beginPath();
          ctx.ellipse(-object.r * 0.8, 0, object.r * 1.5, object.r * 0.75 * snap, 0, 0, Math.PI * 2);
          ctx.ellipse(object.r * 0.8, 0, object.r * 1.5, object.r * 0.75 * snap, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      } else if (object.finalType === "tesla") {
        const size = object.r * 4.2;
        if (teslaImage.complete && teslaImage.naturalWidth) {
          ctx.drawImage(teslaImage, -size / 2, -size / 2, size, size);
        } else {
          ctx.fillStyle = "#facc15";
          ctx.beginPath();
          ctx.arc(0, 0, object.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
      ctx.restore();
    };
    const drawDigitalMeltdownArm = (ball, time) => {
      if (!ball.meltdown) return;
      const target = balls[ball.meltdown.targetSide];
      const progress = ball.meltdown.state === "typing"
        ? Math.min(1, (time - ball.meltdown.startedAt) / 760)
        : 1;
      const endX = ball.x + (target.x - ball.x) * progress;
      const endY = ball.y + (target.y - ball.y) * progress;
      ctx.save();
      ctx.globalAlpha = 0.84;
      ctx.strokeStyle = time % 180 < 90 ? "#22d3ee" : "#f0abfc";
      ctx.lineWidth = 9;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(ball.x, ball.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      ctx.strokeStyle = "#06141a";
      ctx.lineWidth = 3;
      ctx.stroke();
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
    const drawElementalEffects = (time) => {
      game.elementalExplosions = game.elementalExplosions.filter((explosion) => time - explosion.bornAt < 520);
      game.elementalExplosions.forEach((explosion) => {
        const age = Math.max(0, Math.min(1, (time - explosion.bornAt) / 520));
        ctx.save();
        ctx.globalAlpha = 0.58 * (1 - age);
        ctx.fillStyle = explosion.hue;
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, explosion.radius * age, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
      });

      game.teslaCoils.forEach((coil) => {
        const size = ballRadius * 1.5;
        ctx.save();
        ctx.translate(coil.x, coil.y);
        ctx.rotate(coil.angle + Math.PI / 2);
        if (teslaImage.complete && teslaImage.naturalWidth) {
          ctx.drawImage(teslaImage, -size / 2, -size / 2, size, size);
        } else {
          ctx.fillStyle = "#facc15";
          ctx.strokeStyle = "#111";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, 0, ballRadius * 0.32, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.strokeStyle = "#fff7ad";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, -ballRadius * 0.85);
          ctx.lineTo(0, ballRadius * 0.85);
          ctx.stroke();
        }
        ctx.restore();
      });

      game.lightningBolts.forEach((bolt) => {
        const dx = bolt.b.x - bolt.a.x;
        const dy = bolt.b.y - bolt.a.y;
        const distance = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        ctx.save();
        ctx.translate((bolt.a.x + bolt.b.x) / 2, (bolt.a.y + bolt.b.y) / 2);
        ctx.rotate(angle);
        ctx.globalAlpha = 1;
        if (lightningImage.complete && lightningImage.naturalWidth) {
          ctx.drawImage(lightningImage, -distance / 2, -ballRadius * 0.58, distance, ballRadius * 1.16);
        } else {
          ctx.strokeStyle = "#fff04a";
          ctx.lineWidth = 14;
          ctx.beginPath();
          ctx.moveTo(-distance / 2, 0);
          ctx.lineTo(distance / 2, 0);
          ctx.stroke();
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 5;
          ctx.stroke();
        }
        ctx.restore();
      });

      balls.forEach((ball) => {
        if (ball.fighter.id !== "gravity" || game.hp[ball.side] <= 0) return;
        getMoonPositions(ball, time).forEach((moon) => {
          const size = ball.r * 0.82;
          ctx.save();
          ctx.translate(moon.x, moon.y);
          if (moonImage.complete && moonImage.naturalWidth) {
            ctx.drawImage(moonImage, -size / 2, -size / 2, size, size);
          } else {
            ctx.fillStyle = "#cfd5df";
            ctx.strokeStyle = "#333840";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, ball.r * 0.34, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
          }
          if (time < moon.defrostUntil) {
            ctx.globalAlpha = 0.32;
            ctx.fillStyle = "#82f4ff";
            ctx.beginPath();
            ctx.arc(0, 0, ball.r * 0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
          ctx.restore();
        });
      });
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
      drawElementalEffects(time);

      if (!state.countdown) {
        balls.forEach((ball) => {
          if (game.hp[ball.side] <= 0) return;
          updateDigitalMeltdown(ball, time);
          if (isDigitalMeltdown(ball)) return;
          if (time < ball.stunnedUntil) {
            ball.vx = 0;
            ball.vy = 0;
            return;
          }
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
            const trap = findTrapAnchor(ball.trappedBy);
            if (trap) {
              ball.x = trap.x;
              ball.y = trap.y;
            }
            return;
          }
          if (ball.swing && !ball.swing.swung && !isAbilityPaused(ball, time)) {
            ball.vx = Math.cos(ball.swing.resumeAngle) * normalSpeed * 0.08;
            ball.vy = Math.sin(ball.swing.resumeAngle) * normalSpeed * 0.08;
            ball.x += ball.vx;
            ball.y += ball.vy;
            keepInBox(ball);
            return;
          }
          if (ball.fighter.id === "fire" && ball.overloadState === "charging") {
            game.effects[ball.side].overloadState = "Charging";
            game.effects[ball.side].overloadBonus = ball.overloadBonus;
            ball.vx *= 0.18;
            ball.vy *= 0.18;
            if (time >= ball.overloadChargeAt) {
              const target = balls[ball.side ? 0 : 1];
              const angle = Math.atan2(target.y - ball.y, target.x - ball.x);
              stopSfx(ball.fireChargeAudio);
              ball.fireChargeAudio = null;
              ball.overloadState = "dashing";
              ball.overloadDashStartedAt = time;
              ball.overloadSpeed = powerSpeed * 1.05;
              ball.overloadHit = false;
              game.effects[ball.side].overloadState = "Dashing";
              playSfx(fireLaunchSfx, 0.9);
              setVelocity(ball, angle, ball.overloadSpeed);
            }
          }
          if (ball.fighter.id === "fire" && ball.overloadState === "dashing") {
            const target = balls[ball.side ? 0 : 1];
            const angle = Math.atan2(target.y - ball.y, target.x - ball.x);
            ball.vx = Math.cos(angle) * ball.overloadSpeed;
            ball.vy = Math.sin(angle) * ball.overloadSpeed;
          }
          ball.vy += modifiers.gravity ? 0.045 : 0;
          ball.x += ball.vx;
          ball.y += ball.vy;

          if (ball.x < ball.r) {
            ball.x = ball.r;
            markImpact(ball, time);
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y, { sfx: powerHitSfx, volumeScale: 0.75 });
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("left"), powerSpeed);
            } else {
              ball.vx = Math.abs(ball.vx);
            }
            if (ball.fighter.id === "life" && !isAbilityPaused(ball, time)) spawnTrap(ball.side, 8, ball.y, 0);
            if (ball.fighter.id === "electric" && game.defeatedSide === null && game.hp[ball.side] > 0) addTeslaCoil(ball, 8, ball.y, time, 0);
          }
          if (ball.x > box.w - ball.r) {
            ball.x = box.w - ball.r;
            markImpact(ball, time);
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y, { sfx: powerHitSfx, volumeScale: 0.75 });
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("right"), powerSpeed);
            } else {
              ball.vx = -Math.abs(ball.vx);
            }
            if (ball.fighter.id === "life" && !isAbilityPaused(ball, time)) spawnTrap(ball.side, box.w - 8, ball.y, Math.PI);
            if (ball.fighter.id === "electric" && game.defeatedSide === null && game.hp[ball.side] > 0) addTeslaCoil(ball, box.w - 8, ball.y, time, Math.PI);
          }
          if (ball.y < ball.r) {
            ball.y = ball.r;
            markImpact(ball, time);
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y, { sfx: powerHitSfx, volumeScale: 0.75 });
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("top"), powerSpeed);
            } else {
              ball.vy = Math.abs(ball.vy);
            }
            if (ball.fighter.id === "life" && !isAbilityPaused(ball, time)) spawnTrap(ball.side, ball.x, 8, Math.PI / 2);
            if (ball.fighter.id === "electric" && game.defeatedSide === null && game.hp[ball.side] > 0) addTeslaCoil(ball, ball.x, 8, time, Math.PI / 2);
          }
          if (ball.y > box.h - ball.r) {
            ball.y = box.h - ball.r;
            markImpact(ball, time);
            if (ball.slam) {
              finishSlamIntoWall(ball);
            } else if (ball.powered) {
              if (time - ball.lastPoweredWallAt > 150) {
                pushDamage(ball.side, 1, ball.x, ball.y, { sfx: powerHitSfx, volumeScale: 0.75 });
                ball.lastPoweredWallAt = time;
              }
              setVelocity(ball, randomPoweredWallAngle("bottom"), powerSpeed);
            } else {
              ball.vy = -Math.abs(ball.vy);
            }
            if (ball.fighter.id === "life" && !isAbilityPaused(ball, time)) spawnTrap(ball.side, ball.x, box.h - 8, -Math.PI / 2);
            if (ball.fighter.id === "electric" && game.defeatedSide === null && game.hp[ball.side] > 0) addTeslaCoil(ball, ball.x, box.h - 8, time, -Math.PI / 2);
          }
        });

        const dx = balls[1].x - balls[0].x;
        const dy = balls[1].y - balls[0].y;
        const dist = Math.hypot(dx, dy);
        const touching = !balls.some((ball) => ball.trappedBy || isFearPlasma(ball)) && dist < balls[0].r + balls[1].r;
        game.effects.forEach((effect) => {
          if (effect.liquidState !== null) effect.liquidState = "Solid";
        });
        const freshTouch = touching && !game.touchingLastFrame;
        if (touching && game.defeatedSide === null) {
          balls.forEach((ball) => markImpact(ball, time));
          triggerDefrostContact(time);
          const waterSide = balls.find((ball) => ball.fighter.id === "water")?.side;
          const pausedContact = balls.some((ball) => isAbilityPaused(ball, time));
          if (freshTouch) {
            game.effects.forEach((effect) => {
              if (effect.toxinStacks <= 0) return;
              effect.antiVirusContacts += 1;
              if (effect.antiVirusContacts >= effect.antiVirusRequired) {
                effect.antiVirusContacts = 0;
                effect.antiVirusRequired += 5;
                effect.toxinStacks = Math.max(0, effect.toxinStacks - 1);
                const poisonEffect = game.effects.find((candidate) => candidate.toxinDamageOutput !== null);
                if (poisonEffect) poisonEffect.toxinDamageOutput = Math.max(0, poisonEffect.toxinDamageOutput - 1);
              }
            });
          }
          balls.forEach((ball) => {
            if (ball.fighter.id !== "fire" || ball.overloadState !== "dashing" || ball.overloadHit) return;
            const enemy = balls[ball.side ? 0 : 1];
            const delaySeconds = Math.max(0, (time - ball.overloadDashStartedAt) / 1000);
            const attackBonus = Math.max(0, ball.overloadBonus * 0.65 - delaySeconds * 0.9);
            const damage = Math.max(1, Math.round(4 + attackBonus));
            const angle = Math.atan2(enemy.y - ball.y, enemy.x - ball.x);
            pushDamage(enemy.side, damage, enemy.x, enemy.y);
            if (game.hp[enemy.side] > 0) {
              const shoveSpeed = Math.min(powerSpeed, normalSpeed * (1.45 + attackBonus * 0.12));
              enemy.vx = Math.cos(angle) * shoveSpeed;
              enemy.vy = Math.sin(angle) * shoveSpeed;
            }
            ball.overloadState = "building";
            ball.overloadHit = true;
            ball.overloadBonus = 0;
            ball.overloadSpeed = 0;
            stopSfx(ball.fireChargeAudio);
            ball.fireChargeAudio = null;
            game.effects[ball.side].overloadDamage = 0;
            game.effects[ball.side].overloadBonus = 0;
            game.effects[ball.side].overloadState = "Building";
          });
          if (waterSide !== undefined) {
            const otherSide = waterSide ? 0 : 1;
            const liquidStarted = !game.liquidContact;
            game.liquidContact = { waterSide, otherSide };
            game.effects[waterSide].liquidState = "Water";
            if (liquidStarted) game.liquidAudio = playSfx(duringLiquidSfx, 1, { loop: true });
            game.effects[waterSide].transparency = Math.min(92, game.effects[waterSide].transparency + 0.12);
            if (!balls[otherSide].inLiquid) {
              balls[otherSide].baseVx = balls[otherSide].vx;
              balls[otherSide].baseVy = balls[otherSide].vy;
              balls[otherSide].inLiquid = true;
            }
            balls[otherSide].vx = balls[otherSide].baseVx * 0.8;
            balls[otherSide].vy = balls[otherSide].baseVy * 0.8;
            if (!pausedContact) {
              game.liquidDamageAccumulator += 1;
              const liquidCooldown = getLiquidCooldownFrames(game.effects[waterSide].transparency);
              while (game.liquidDamageAccumulator >= liquidCooldown) {
                pushDamage(otherSide, 1, (balls[0].x + balls[1].x) / 2, (balls[0].y + balls[1].y) / 2);
                game.liquidDamageAccumulator -= liquidCooldown;
              }
            }
          } else if (time - game.lastCollisionAt > 260) {
            bounceBalls(balls[0], balls[1], time);
            if (!pausedContact) {
              const getImpactDamage = (attacker) => {
                const baseDamage = attacker.fighter.damage + (attacker.luckImpactBonus || 0);
                if (baseDamage <= 0) return 0;
                return Math.max(1, Math.round(baseDamage * modifiers.damage));
              };
              const damageToOne = getImpactDamage(balls[0]);
              const damageToZero = getImpactDamage(balls[1]);
              if (damageToZero > 0) pushDamage(0, damageToZero, balls[0].x, balls[0].y, { direct: true, attackerSide: 1 });
              if (damageToOne > 0) pushDamage(1, damageToOne, balls[1].x, balls[1].y, { direct: true, attackerSide: 0 });
            }
            game.lastCollisionAt = time;
          }
        } else if (game.liquidContact) {
          const releasedBall = balls[game.liquidContact.otherSide];
          restoreBaseVelocity(releasedBall);
          nudgeDirection(releasedBall);
          releasedBall.inLiquid = false;
          game.liquidDamageAccumulator = 0;
          game.liquidContact = null;
          stopSfx(game.liquidAudio);
          game.liquidAudio = null;
        }
        game.touchingLastFrame = touching;

        selected.forEach((fighter, index) => {
          const ball = balls[index];
          const paused = isAbilityPaused(ball, time);
          if (fighter.id === "poison" && game.hp[index] > 0 && game.defeatedSide === null) {
            if (paused) {
              game.nextSyringeAt[index] += dt;
              game.effects[index].nextSyringe = Math.max(0, (game.nextSyringeAt[index] - time) / 1000);
              return;
            }
            game.effects[index].nextSyringe = Math.max(0, (game.nextSyringeAt[index] - time) / 1000);
            if (time >= game.nextSyringeAt[index]) {
              const target = balls[index ? 0 : 1];
              const source = balls[index];
              const syringeSpeed = 12.5;
              const targetHpPercent = game.hp[target.side] / maxHp[target.side];
              const angle = chooseSyringeAim(source, target, syringeSpeed, targetHpPercent, time);
              playSfx(syringeSfx);
              game.projectiles.push({
                type: "syringe",
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
          if (fighter.id === "ice" && game.hp[index] > 0 && game.defeatedSide === null) {
            if (paused) {
              game.nextIcicleAt[index] += dt;
              game.effects[index].nextIcicle = Math.max(0, (game.nextIcicleAt[index] - time) / 1000);
              return;
            }
            game.effects[index].nextIcicle = Math.max(0, (game.nextIcicleAt[index] - time) / 1000);
            if (time >= game.nextIcicleAt[index]) shootIcicle(ball, time);
          }
          if (fighter.id === "air" && game.hp[index] > 0 && game.defeatedSide === null) {
            if (paused) {
              game.nextBlueModeAt[index] += dt;
              game.effects[index].nextBlueMode = Math.max(0, (game.nextBlueModeAt[index] - time) / 1000);
              return;
            }
            game.effects[index].nextBlueMode = Math.max(0, (game.nextBlueModeAt[index] - time) / 1000);
            if (time >= game.nextBlueModeAt[index]) startBlueMode(ball, time);
          }
          if (fighter.id === "electric" && game.hp[index] > 0) {
            const coilCount = getActiveTeslaNodes(index).length;
            game.effects[index].teslaCoils = coilCount;
            game.effects[index].lightningState = game.lightningBolts.some((bolt) => bolt.side === index) ? "Zapping" : coilCount >= 2 ? "Charging" : "Idle";
          }
          if (fighter.id === "earth" && game.hp[index] > 0 && game.defeatedSide === null) {
            updateRockslide(ball, time, paused, dt);
          }
          if (fighter.id === "digital" && game.hp[index] > 0) {
            if (ball.meltdown) {
              game.effects[index].nextGenesis = 0;
              game.effects[index].meltdownState = "Meltdown";
              return;
            }
            if (paused) {
              game.nextGenesisAt[index] += dt;
              game.effects[index].nextGenesis = Math.max(0, (game.nextGenesisAt[index] - time) / 1000);
              return;
            }
            const coilCount = getActiveTeslaNodes(index).length;
            game.effects[index].teslaCoils = coilCount;
            game.effects[index].lightningState = game.lightningBolts.some((bolt) => bolt.side === index) ? "Zapping" : coilCount >= 2 ? "Charging" : "Idle";
            game.effects[index].nextGenesis = Math.max(0, (game.nextGenesisAt[index] - time) / 1000);
            game.effects[index].meltdownState = "Stable";
            if (time >= game.nextGenesisAt[index]) spawnGenesisObject(ball, time);
          }
          if (fighter.id === "fear" && game.hp[index] > 0 && game.defeatedSide === null) {
            updateFearSpooky(ball, time, paused);
          }
          if (fighter.id === "luck" && game.hp[index] > 0 && game.defeatedSide === null) {
            updateLuckRoll(ball, time, paused, dt);
          }
          if (fighter.id === "gravity" && game.hp[index] > 0 && game.defeatedSide === null) {
            updateGravityMoons(ball, time);
          }
          if (fighter.id === "baseball" && game.hp[index] > 0 && game.defeatedSide === null) {
            if (paused) {
              game.nextBaseballSwingAt[index] += dt;
              if (ball.swing && !ball.swing.swung) {
                ball.swing.startedAt += dt;
                ball.swing.swingAt += dt;
              }
              game.effects[index].nextSwing = ball.swing && !ball.swing.swung
                ? Math.max(0, (ball.swing.swingAt - time) / 1000)
                : Math.max(0, (game.nextBaseballSwingAt[index] - time) / 1000);
              game.effects[index].swingState = ball.swing ? "Paused" : "Waiting";
              return;
            }
            updateBaseballSwing(ball, time);
            if (ball.swing?.frenzy) {
              game.effects[index].nextSwing = 0;
              game.effects[index].swingState = "Frenzy";
            } else if (ball.swing && !ball.swing.swung) {
              game.effects[index].nextSwing = Math.max(0, (ball.swing.swingAt - time) / 1000);
              game.effects[index].swingState = "Holding";
            } else if (ball.swing?.swung) {
              game.effects[index].nextSwing = 0;
              game.effects[index].swingState = "Swinging";
            } else {
              game.effects[index].nextSwing = Math.max(0, (game.nextBaseballSwingAt[index] - time) / 1000);
              game.effects[index].swingState = "Waiting";
            }
          }
        });

        balls.forEach((ball) => {
          game.effects[ball.side].defrostTime = Math.max(0, (ball.defrostUntil - time) / 1000);
          if (game.effects[ball.side].defrostTime <= 0) ball.defrostOwnerSide = null;
        });

        game.blueModeArrows.forEach((arrow) => {
          const target = balls[arrow.target];
          if (arrow.slammed || time - arrow.startedAt < 1000) return;
          if (game.hp[arrow.side] <= 0 || game.hp[arrow.target] <= 0 || game.defeatedSide !== null || isFearPlasma(target)) return;
          if (isAbilityPaused(balls[arrow.side], time)) {
            arrow.startedAt += dt;
            return;
          }

          const angle = arrow.angle + Math.PI * 2;
          if (isBaseballFrenzy(target)) {
            arrow.slammed = true;
            return;
          }
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

        updateLightning(time);
        updateGenesisObjects(time);
        updateLuckBottleQueue(time);
        updateRocks(time);

        game.projectiles = game.projectiles.filter((projectile) => {
          const owner = balls[projectile.side];
          const defrostProjectileMultiplier = time < owner.defrostUntil ? 0.45 : 1;
          if (projectile.type === "icicle") {
            const ramp = Math.max(0, Math.min(1, (time - projectile.bornAt) / projectile.rampMs));
            const speed = projectile.startSpeed + (projectile.topSpeed - projectile.startSpeed) * ramp * ramp;
            projectile.baseVx = Math.cos(projectile.angle) * speed;
            projectile.baseVy = Math.sin(projectile.angle) * speed;
          }
          if (!projectile.inLiquid) {
            projectile.vx = projectile.baseVx * defrostProjectileMultiplier;
            projectile.vy = projectile.baseVy * defrostProjectileMultiplier;
          }
          projectile.x += projectile.vx;
          projectile.y += projectile.vy;
          if (projectile.x <= 0 || projectile.x >= box.w || projectile.y <= 0 || projectile.y >= box.h) return false;
          const target = balls[projectile.target];
          if (game.defeatedSide !== null || game.hp[projectile.side] <= 0 || game.hp[projectile.target] <= 0) return false;
          if (isFearPlasma(target)) return projectile.x > -30 && projectile.x < box.w + 30 && projectile.y > -30 && projectile.y < box.h + 30;
          if (projectile.type === "icicle") {
            balls.forEach((gravityBall) => {
              if (gravityBall.fighter.id !== "gravity" || game.hp[gravityBall.side] <= 0) return;
              getMoonPositions(gravityBall, time).forEach((moonPosition, index) => {
                const moon = gravityBall.moons[index];
                const radius = moon.r || gravityBall.r * 0.34;
                if (Math.hypot(projectile.x - moonPosition.x, projectile.y - moonPosition.y) >= radius + 8) return;
                if (time - moon.lastIcicleHitAt < 350) return;
                moon.defrostUntil = time + 2000;
                moon.lastIcicleHitAt = time;
              });
            });
          }
          const projectileTouchingLiquid = game.effects[projectile.target].liquidState === "Water" && Math.hypot(projectile.x - target.x, projectile.y - target.y) < target.r + 8;
          if (projectileTouchingLiquid) {
            if (!projectile.inLiquid) {
              projectile.inLiquid = true;
            }
            projectile.vx = projectile.baseVx * 0.8 * defrostProjectileMultiplier;
            projectile.vy = projectile.baseVy * 0.8 * defrostProjectileMultiplier;
            return projectile.x > -30 && projectile.x < box.w + 30 && projectile.y > -30 && projectile.y < box.h + 30;
          }
          if (projectile.inLiquid) {
            nudgeDirection(projectile);
            projectile.baseVx = projectile.vx;
            projectile.baseVy = projectile.vy;
            if (projectile.type === "icicle") projectile.angle = Math.atan2(projectile.baseVy, projectile.baseVx);
            projectile.inLiquid = false;
          }
          if (Math.hypot(projectile.x - target.x, projectile.y - target.y) < target.r + 8) {
            if (isBaseballFrenzy(target)) return false;
            if (projectile.type === "bottle") {
              pushDamage(projectile.target, 3, target.x, target.y, { direct: true, attackerSide: projectile.side });
              if (game.hp[target.side] > 0) stunBall(target, time);
            } else if (projectile.type === "icicle") {
              pushDamage(projectile.target, 3, target.x, target.y);
              if (game.effects[projectile.side].iciclesLanded !== null) {
                game.effects[projectile.side].iciclesLanded += 1;
              }
              target.defrostUntil = time + 2000;
              target.defrostOwnerSide = projectile.side;
            } else {
              game.effects[projectile.target].toxinStacks = (game.effects[projectile.target].toxinStacks || 0) + 1;
              if (game.effects[projectile.side].toxinDamageOutput !== null) {
                game.effects[projectile.side].toxinDamageOutput += 1;
              }
            }
            return false;
          }
          return projectile.x > -30 && projectile.x < box.w + 30 && projectile.y > -30 && projectile.y < box.h + 30;
        });

        balls.forEach((ball) => {
          if (ball.fighter.id !== "fire" || ball.overloadState !== "dashing") return;
          if (time - ball.overloadDashStartedAt < 5500) return;
          ball.overloadState = "building";
          ball.overloadBonus = 0;
          ball.overloadSpeed = 0;
          game.effects[ball.side].overloadDamage = 0;
          game.effects[ball.side].overloadBonus = 0;
          game.effects[ball.side].overloadState = "Building";
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
              if (time >= trap.releaseAt) releaseFlytrapVictim(trap, victim, time);
            }
            return;
          }
          const enemy = balls[trap.side ? 0 : 1];
          const centerHitboxRadius = 12 * 1.1;
          if (game.defeatedSide === null && game.hp[trap.side] > 0 && game.hp[enemy.side] > 0 && !isFearPlasma(enemy) && Math.hypot(trap.x - enemy.x, trap.y - enemy.y) < enemy.r + centerHitboxRadius) {
            closeFlytrapOnVictim(trap, enemy, time);
          }
        });
        game.traps = game.traps.filter((trap) => !trap.closedAt || time - trap.closedAt < 420);
        game.effects.forEach((effect, index) => {
          if (effect.activeGrowths !== null) effect.activeGrowths = game.traps.filter((trap) => trap.side === index).length;
        });
        balls.forEach((ball) => keepBallSpeed(ball, time));
      }

      game.genesisObjects.forEach((object) => drawGenesisObject(object, time));
      game.rocks.forEach(drawRock);
      game.projectiles.forEach(drawProjectile);
      game.explosions = game.explosions.filter((explosion) => time - explosion.bornAt < 560);
      game.explosions.forEach((explosion) => drawExplosion(explosion, time));
      balls.forEach((ball) => drawDigitalMeltdownArm(ball, time));
      balls.filter((ball) => game.hp[ball.side] > 0).forEach(drawBall);
      balls.filter((ball) => game.hp[ball.side] > 0).forEach((ball) => drawBaseballBat(ball, time));
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
    return () => {
      cancelAnimationFrame(raf);
      stopSfx(game.liquidAudio);
      balls.forEach((ball) => stopSfx(ball.fireChargeAudio));
      balls.forEach(stopBaseballSfx);
    };
  }, [selected, modifiers, state.countdown, maxHp, playSfx, stopSfx, recordGames, onRecordedResult]);

  return (
    <section className="battle-screen">
      <CornerBack onBack={back} holdProgress={exitHoldProgress} />
      <div className="battle-box">
        <canvas ref={canvasRef} width={ARENA_SIZE} height={ARENA_SIZE} />
        {state.countdownLabel && <div className="countdown">{state.countdownLabel}</div>}
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
  const abilityLabel = fighter.abilities.length === 1 ? "Ability" : "Abilities";
  const abilityText = fighter.abilities.join(" + ");
  const getLiquidCooldownFrames = (transparency) => {
    const extraTransparency = Math.max(0, transparency - 30);
    return Math.max(2.5, 5 - Math.floor(extraTransparency / 5) * 0.5);
  };
  if (effects.meltdownState === "Meltdown") {
    const meltdownAbilityText = effects.meltdownRole === "controller" ? "I Am In Control" : "Under God";
    lines.push(`${effects.meltdownText}${effects.meltdownText?.length ? "_" : ""}`);
    lines.push("Abilities disabled");
    return (
      <div className="effect-panel">
        {mode !== "local" && <strong>{side}</strong>}
        <span>Abilities: {meltdownAbilityText}</span>
        {lines.map((line) => <small key={line}>{line}</small>)}
      </div>
    );
  }
  if (fighter.id === "water") {
    lines.push(`State: ${effects.liquidState}`);
    lines.push(`Transparency: ${Math.round(effects.transparency)}%`);
    lines.push(`DMG cooldown: ${getLiquidCooldownFrames(effects.transparency).toFixed(1)} frames`);
  }
  if (fighter.id === "fire") {
    lines.push(`Overload: ${effects.overloadDamage}/${effects.overloadRequired}`);
    lines.push(`State: ${effects.overloadState}`);
    lines.push(`Attack bonus: +${effects.overloadBonus.toFixed(1)}`);
  }
  if (fighter.id === "poison") {
    lines.push(`Next syringe: ${effects.nextSyringe.toFixed(1)} sec`);
  }
  if (effects.toxinStacks > 0) {
    lines.push(`Toxic: ${effects.toxinStacks} dmg/sec`);
  }
  if (effects.toxinStacks > 0 || effects.antiVirusContacts > 0) {
    lines.push(`Anti-Virus: ${effects.antiVirusContacts}/${effects.antiVirusRequired}`);
  }
  if (effects.defrostTime > 0) {
    lines.push(`Defrosting: ${effects.defrostTime.toFixed(1)} sec`);
  }
  if (fighter.id === "life") {
    lines.push(`Growths: ${effects.activeGrowths}/${effects.maxGrowths}`);
    lines.push(`Chomps Until Upgrade: ${effects.lifeChomps % 5}/5`);
  }
  if (fighter.id === "ice") {
    lines.push(`Next icicle: ${effects.nextIcicle.toFixed(1)} sec`);
    lines.push(`Icicle's Landed: ${effects.iciclesLanded}`);
  }
  if (fighter.id === "electric") {
    lines.push(`Tesla coils: ${effects.teslaCoils}`);
  }
  if (fighter.id === "earth") {
    lines.push(`Next Rockslide: ${effects.nextRockslide.toFixed(1)} sec`);
    lines.push(`Rocks: ${effects.activeRocks}`);
  }
  if (fighter.id === "digital") {
    lines.push(`Producing Object In: ${effects.nextGenesis.toFixed(1)} sec`);
    lines.push(`Models: ${effects.genesisObjects}`);
  }
  if (fighter.id === "fear") {
    lines.push(`State: ${effects.spookyState}`);
    lines.push(`Next Spooky: ${effects.nextSpooky.toFixed(1)} sec`);
  }
  if (fighter.id === "luck") {
    lines.push(`State: ${effects.luckState}`);
    lines.push(`Next Roll: ${effects.nextLuckRoll.toFixed(1)} sec`);
    lines.push(`Impact Bonus: +${effects.luckImpactBonus}`);
    if (effects.lifeSteal) lines.push("Life Steal");
  }
  if (fighter.id === "air") {
    lines.push(`Next Blue Mode: ${effects.nextBlueMode.toFixed(1)} sec`);
  }
  if (fighter.id === "gravity") {
    lines.push(`Moon #1: ${effects.moonStates?.[0] ?? effects.moonMode}`);
    lines.push(`Moon #2: ${effects.moonStates?.[1] ?? effects.moonMode}`);
  }
  if (fighter.id === "baseball") {
    lines.push(`Strikes: ${effects.strikes}/3`);
    if (effects.swingState === "Frenzy") lines.push(`Frenzy swings: ${effects.frenzySwings}/5`);
    lines.push(`Swing: ${effects.swingState}`);
    lines.push(`Next swing: ${effects.nextSwing.toFixed(1)} sec`);
  }
  return (
    <div className="effect-panel">
      {mode !== "local" && <strong>{side}</strong>}
      <span>{abilityLabel}: {abilityText}</span>
      {fighter.id === "luck" && (
        <div className={`slot-machine ${effects.luckState === "Spinning" ? "is-spinning" : ""}`}>
          {effects.luckSlots.map((slot, index) => (
            <b key={`${slot}-${index}`}>{LUCK_SLOT_LABELS[slot]}</b>
          ))}
        </div>
      )}
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

function Leaderboard({ back, exitHoldProgress, leaderboard, setLeaderboard }) {
  const persistLeaderboard = React.useCallback((updater) => {
    setLeaderboard((current) => {
      const next = updater(current);
      localStorage.setItem(leaderboardKey, JSON.stringify(next));
      return next;
    });
  }, [setLeaderboard]);
  const ranked = React.useMemo(() => [...fighters].sort((left, right) => {
    const leftRecord = leaderboard[left.id] || { wins: [], losses: [] };
    const rightRecord = leaderboard[right.id] || { wins: [], losses: [] };
    const leftWins = normalizeFightEntries(leftRecord.wins);
    const rightWins = normalizeFightEntries(rightRecord.wins);
    const leftPoints = leftWins.length - normalizeFightEntries(leftRecord.losses).length;
    const rightPoints = rightWins.length - normalizeFightEntries(rightRecord.losses).length;
    if (rightPoints !== leftPoints) return rightPoints - leftPoints;
    if (rightWins.length !== leftWins.length) return rightWins.length - leftWins.length;
    return left.name.localeCompare(right.name);
  }), [leaderboard]);
  const [selectedId, setSelectedId] = React.useState(ranked[0]?.id);
  const selectedFighter = fighters.find((fighter) => fighter.id === selectedId) || ranked[0];
  const selectedRecord = leaderboard[selectedFighter.id] || { wins: [], losses: [] };
  const selectedWins = normalizeFightEntries(selectedRecord.wins);
  const selectedLosses = normalizeFightEntries(selectedRecord.losses);

  React.useEffect(() => {
    const onKey = (event) => {
      if (!selectedFighter || event.repeat) return;
      if (!["u", "U", "l", "L", "r", "R"].includes(event.key)) return;
      event.preventDefault();
      persistLeaderboard((current) => {
        const next = { ...current };
        const selectedRecord = next[selectedFighter.id] || { wins: [], losses: [] };
        if (["u", "U"].includes(event.key)) {
          next[selectedFighter.id] = {
            ...selectedRecord,
            wins: [...normalizeFightEntries(selectedRecord.wins), { opponentId: null, at: Date.now(), manual: true }],
            losses: normalizeFightEntries(selectedRecord.losses)
          };
        }
        if (["l", "L"].includes(event.key)) {
          next[selectedFighter.id] = {
            ...selectedRecord,
            wins: normalizeFightEntries(selectedRecord.wins).slice(0, -1),
            losses: normalizeFightEntries(selectedRecord.losses)
          };
        }
        if (["r", "R"].includes(event.key)) {
          fighters.forEach((fighter) => {
            const record = next[fighter.id] || { wins: [], losses: [] };
            next[fighter.id] = fighter.id === selectedFighter.id
              ? { wins: [], losses: [] }
              : {
                wins: normalizeFightEntries(record.wins).filter((win) => win.opponentId !== selectedFighter.id),
                losses: normalizeFightEntries(record.losses).filter((loss) => loss.opponentId !== selectedFighter.id)
              };
          });
        }
        return next;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [persistLeaderboard, selectedFighter]);

  return (
    <section className="simple-panel">
      <CornerBack onBack={back} holdProgress={exitHoldProgress} />
      <h2>Leaderboard</h2>
      <div className="leaderboard-list">
        {ranked.map((fighter, index) => {
          const record = leaderboard[fighter.id] || { wins: [], losses: [] };
          const points = normalizeFightEntries(record.wins).length - normalizeFightEntries(record.losses).length;
          return (
            <button
              key={fighter.id}
              className={`leaderboard-row ${selectedFighter.id === fighter.id ? "active" : ""}`}
              onClick={() => setSelectedId(fighter.id)}
              style={{ "--hue": fighter.hue, "--accent": fighter.accent }}
            >
              <span className="rank">{index + 1}</span>
              <span className="mini-logo">{fighter.logo ? <img src={fighter.logo} alt="" /> : fighter.short}</span>
              <strong>{fighter.name}</strong>
              <b>{points} pts</b>
            </button>
          );
        })}
      </div>
      <div className="leaderboard-detail">
        <div className="leaderboard-summary">
          <strong>{selectedFighter.name}</strong>
          <span>Wins: {selectedWins.length}</span>
          <span>Losses: {selectedLosses.length}</span>
        </div>
        <div className="fight-lists">
          <div className="fight-list">
            <strong>Wins</strong>
            {selectedWins.length ? selectedWins.map((win, index) => {
              const opponent = fighters.find((fighter) => fighter.id === win.opponentId);
              return <span key={`${win.at || "legacy-win"}-${index}`}>Win #{index + 1}: {opponent?.name || "Unknown Opponent"}</span>;
            }) : <span>No recorded wins</span>}
          </div>
          <div className="fight-list">
            <strong>Losses</strong>
            {selectedLosses.length ? selectedLosses.map((loss, index) => {
              const opponent = fighters.find((fighter) => fighter.id === loss.opponentId);
              return <span key={`${loss.at || "legacy-loss"}-${index}`}>Loss #{index + 1}: {opponent?.name || "Unknown Opponent"}</span>;
            }) : <span>No recorded losses</span>}
          </div>
        </div>
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
