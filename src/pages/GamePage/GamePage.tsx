import { useState } from "react";
import { chapter1Scenes } from "../../features/novel/data/chapter1";
import { characters } from "../../features/novel/data/characters";
import type { Choice, GameStats } from "../../features/novel/types/novelTypes";
import DialogueBox from "../../features/novel/components/DialogueBox/DialogueBox";
import ChoiceList from "../../features/novel/components/ChoiceList/ChoiceList";
import {
  getPersonalityResult,
  getRouteResult,
} from "../../features/novel/utils/getEndingResult";
import "./GamePage.css";

const initialStats: GameStats = {
  softScore: 0,
  boldScore: 0,
  kaiScore: 0,
  viktorScore: 0,
};

function GamePage() {
  const [currentSceneId, setCurrentSceneId] = useState("return_1");
  const [stats, setStats] = useState<GameStats>(initialStats);

  const currentScene = chapter1Scenes.find(
    (scene) => scene.id === currentSceneId
  );

  if (!currentScene) {
    return <div>Сцена не найдена</div>;
  }

  const speaker = characters[currentScene.speaker];

  const goNext = () => {
    if (currentScene.nextSceneId) {
      setCurrentSceneId(currentScene.nextSceneId);
    }
  };

  const selectChoice = (choice: Choice) => {
    if (choice.effect) {
      setStats((previousStats) => ({
        ...previousStats,
        softScore: previousStats.softScore + (choice.effect?.softScore ?? 0),
        boldScore: previousStats.boldScore + (choice.effect?.boldScore ?? 0),
        kaiScore: previousStats.kaiScore + (choice.effect?.kaiScore ?? 0),
        viktorScore: previousStats.viktorScore + (choice.effect?.viktorScore ?? 0),
      }));
    }

    setCurrentSceneId(choice.nextSceneId);
  };

  const isChapterEnd = currentScene.id === "chapter_end";
  const personalityResult = getPersonalityResult(stats);
  const routeResult = getRouteResult(stats);

  return (
    <main className={`game-page background-${currentScene.background}`}>
      <div className="game-page-overlay">
        <header className="game-top-panel">
          <p className="game-label">Глава 1</p>
          <h1>Архив алых писем</h1>
        </header>

        <div className="game-content">
          <DialogueBox
            speakerName={speaker.name}
            text={currentScene.text}
            onNext={goNext}
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
              <h2>Итог главы</h2>

              <p>
                Характер героя:{" "}
                <strong>
                  {personalityResult === "bold"
                    ? "дерзкий / уверенный"
                    : "мягкий / осторожный"}
                </strong>
              </p>

              <p>
                Основная линия:{" "}
                <strong>
                  {routeResult === "viktor"
                    ? "Виктор Астор"
                    : "Кай Астор"}
                </strong>
              </p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default GamePage;