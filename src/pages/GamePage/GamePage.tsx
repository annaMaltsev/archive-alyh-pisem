import { useState } from "react";
import { chapter1Scenes } from "../../features/novel/data/chapter1";
import { characters } from "../../features/novel/data/characters";
import type { Choice, GameStats } from "../../features/novel/types/novelTypes";
import DialogueBox from "../../features/novel/components/DialogueBox/DialogueBox";
import ChoiceList from "../../features/novel/components/ChoiceList/ChoiceList";
import "./GamePage.css";

const initialStats: GameStats = {
  softScore: 0,
  boldScore: 0,
  kaiScore: 0,
  leonardScore: 0,
  twinsScore: 0,
  viktorScore: 0,
};

// Клик по персонажу → реакция (картинки прислала Khalil). Ноэль — особый случай (ниже).
const reactionSprites: Record<string, string> = {
  "/images/characters/kai-neutral.png": "/images/characters/kai-onclick.png",
  "/images/characters/kai-worried.png": "/images/characters/kai-onclick.png",
  "/images/characters/kai-annoyed.png": "/images/characters/kai-onclick.png",
  "/images/characters/leonard-neutral.png": "/images/characters/leonard-onclick.png",
  "/images/characters/leonard-annoyed.png": "/images/characters/leonard-onclick.png",
  "/images/characters/ellian-1.png": "/images/characters/ellian-2.png",
};

function GamePage() {
  const [currentSceneId, setCurrentSceneId] = useState("prologue_1");
  const [stats, setStats] = useState<GameStats>(initialStats);
  const [reaction, setReaction] = useState<string | null>(null);
  // Показываем ли Элиана-защитника (при клике по Ноэлю).
  const [protector, setProtector] = useState(false);

  const currentScene = chapter1Scenes.find((scene) => scene.id === currentSceneId);
  if (!currentScene) {
    return <div className="game-page">Scene not found: {currentSceneId}</div>;
  }

  const speaker = characters[currentScene.speaker];

  const goNext = () => {
    setReaction(null);
    setProtector(false);
    if (currentScene.nextSceneId) {
      setCurrentSceneId(currentScene.nextSceneId);
    }
  };

  const selectChoice = (choice: Choice) => {
    setReaction(null);
    setProtector(false);
    if (choice.effect) {
      setStats((previous) => {
        const next = { ...previous };
        (Object.keys(choice.effect!) as (keyof GameStats)[]).forEach((key) => {
          next[key] = next[key] + (choice.effect![key] ?? 0);
        });
        return next;
      });
    }
    setCurrentSceneId(choice.nextSceneId);
  };

  const handleCharacterClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!currentScene.sprite) return;

    // Ноэль: рядом выскакивает Элиан-защитник и прикрывает его; сам Ноэль не меняется.
    if (currentScene.sprite.includes("noel")) {
      if (protector) return;
      setProtector(true);
      setTimeout(() => setProtector(false), 1600);
      return;
    }

    // Остальные: короткая смена позы на «реакцию».
    if (reaction) return;
    const next = reactionSprites[currentScene.sprite];
    if (!next) return;
    setReaction(next);
    setTimeout(() => setReaction(null), 1200);
  };

  const shownSprite = reaction ?? currentScene.sprite;
  const isChapterEnd = currentScene.id === "chapter_end";

  // ---- Итог главы ----
  const character =
    stats.boldScore === stats.softScore
      ? "Balanced"
      : stats.boldScore > stats.softScore
        ? "Defiant"
        : "Gentle";
  // Порядок важен для ничьих: близнецы и Леонард тоже могут стать фаворитом, а не всегда Кай.
  const bonds = [
    { name: "the Vern twins", score: stats.twinsScore },
    { name: "Leonard", score: stats.leonardScore },
    { name: "Kai", score: stats.kaiScore },
    { name: "Viktor", score: stats.viktorScore },
  ];
  const topBond = bonds.reduce((best, bond) => (bond.score > best.score ? bond : best));
  const favorite = topBond.score > 0 ? topBond.name : "no one — yet";
  const path =
    `The ${character.toLowerCase()} road ` +
    (topBond.score > 0 ? `toward ${topBond.name}.` : "walked alone.");

  return (
    <main
      className={`game-page background-${currentScene.background}`}
      onClick={goNext}
    >
      <div className="game-page-overlay">
        {shownSprite && (
          <img
            className="game-character"
            src={shownSprite}
            alt=""
            key={shownSprite}
            onClick={handleCharacterClick}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        {protector && (
          <img
            className="game-protector"
            src="/images/characters/ellian-protector.png"
            alt=""
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        <header className="game-top-panel">
          <p className="game-label">Chapter One</p>
          <h1>Archive of Scarlet Letters</h1>
        </header>

        <div className="game-content">
          <DialogueBox
            speakerName={speaker.name}
            text={currentScene.text}
            showNextButton={Boolean(currentScene.nextSceneId)}
          />

          {currentScene.choices && (
            <ChoiceList
              choices={currentScene.choices}
              onSelectChoice={selectChoice}
            />
          )}

          {isChapterEnd && (
            <section className="chapter-result">
              <p className="chapter-result-label">End of Chapter One</p>
              <h2>The First Day in the City</h2>
              <div className="chapter-result-stats">
                <p>
                  Favorite — <strong>{favorite}</strong>
                </p>
                <p>
                  Character — <strong>{character}</strong>
                </p>
                <p>
                  Path — <em>{path}</em>
                </p>
              </div>
              <p className="chapter-result-note">To be continued…</p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default GamePage;
