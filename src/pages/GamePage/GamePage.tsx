import { useState } from "react";
import { chapter1Scenes } from "../../features/novel/data/chapter1";
import { characters } from "../../features/novel/data/characters";
import type { Choice, GameStats } from "../../features/novel/types/novelTypes";
import DialogueBox from "../../features/novel/components/DialogueBox/DialogueBox";
import ChoiceList from "../../features/novel/components/ChoiceList/ChoiceList";
import "./GamePage.css";

// Стартовые очки — все по нулям.
const initialStats: GameStats = {
  softScore: 0,
  boldScore: 0,
  kaiScore: 0,
  leonardScore: 0,
  twinsScore: 0,
  viktorScore: 0,
};

function GamePage() {
  // Текущая сцена (по id) и накопленные очки.
  const [currentSceneId, setCurrentSceneId] = useState("prologue_1");
  const [stats, setStats] = useState<GameStats>(initialStats);

  const currentScene = chapter1Scenes.find((scene) => scene.id === currentSceneId);

  if (!currentScene) {
    return <div className="game-page">Scene not found: {currentSceneId}</div>;
  }

  const speaker = characters[currentScene.speaker];

  const goNext = () => {
    if (currentScene.nextSceneId) {
      setCurrentSceneId(currentScene.nextSceneId);
    }
  };

  const selectChoice = (choice: Choice) => {
    // Прибавляем к очкам все поля, что есть в effect (универсально, без перечисления).
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

  const isChapterEnd = currentScene.id === "chapter_end";

  // ---- Итог главы: характер, фаворит и путь по накопленным очкам ----
  const character =
    stats.boldScore === stats.softScore
      ? "Balanced"
      : stats.boldScore > stats.softScore
        ? "Defiant"
        : "Gentle";

  const bonds = [
    { name: "Kai", score: stats.kaiScore },
    { name: "Leonard", score: stats.leonardScore },
    { name: "the Vern twins", score: stats.twinsScore },
    { name: "Viktor", score: stats.viktorScore },
  ];
  const topBond = bonds.reduce((best, bond) =>
    bond.score > best.score ? bond : best
  );
  const favorite = topBond.score > 0 ? topBond.name : "no one — yet";
  const path =
    `The ${character.toLowerCase()} road ` +
    (topBond.score > 0 ? `toward ${topBond.name}.` : "walked alone.");

  return (
    // Клик по любому месту экрана продвигает историю вперёд.
    <main
      className={`game-page background-${currentScene.background}`}
      onClick={goNext}
    >
      <div className="game-page-overlay">
        {/* Спрайт персонажа (если задан у сцены). key — чтобы при смене плавно появлялся. */}
        {currentScene.sprite && (
          <img
            className="game-character"
            src={currentScene.sprite}
            alt=""
            key={currentScene.sprite}
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
