import { useEffect, useState } from "react";
import { chapters } from "../../features/novel/data/chapters";
import { characters } from "../../features/novel/data/characters";
import type { Choice, GameStats } from "../../features/novel/types/novelTypes";
import type { Lang } from "../../features/i18n/strings";
import { strings } from "../../features/i18n/strings";
import DialogueBox from "../../features/novel/components/DialogueBox/DialogueBox";
import ChoiceList from "../../features/novel/components/ChoiceList/ChoiceList";
import ProfilePanel from "./ProfilePanel";
import "./GamePage.css";

type GamePageProps = {
  language: Lang;
  onChangeLanguage: (lang: Lang) => void;
  onLogout: () => void;
};

const initialStats: GameStats = {
  softScore: 0,
  boldScore: 0,
  kaiScore: 0,
  leonardScore: 0,
  twinsScore: 0,
  viktorScore: 0,
};

// Ключ сохранения прогресса (глава + сцена + очки) в браузере.
const SAVE_KEY = "asl_save";

type SaveData = { chapterIndex?: number; sceneId: string; stats: GameStats };

function loadSave(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SaveData;
    if (parsed && typeof parsed.sceneId === "string" && parsed.stats) return parsed;
  } catch {
    // битое сохранение — просто начнём заново
  }
  return null;
}

// Достаём валидное начальное состояние из сохранения (или начало первой главы).
function loadInitial() {
  const saved = loadSave();
  let chapterIndex = saved?.chapterIndex ?? 0;
  if (chapterIndex < 0 || chapterIndex >= chapters.length) chapterIndex = 0;
  const chapterScenes = chapters[chapterIndex].scenes;
  const sceneId =
    saved && chapterScenes.some((scene) => scene.id === saved.sceneId)
      ? saved.sceneId
      : chapters[chapterIndex].firstSceneId;
  const stats = saved?.stats ?? initialStats;
  return { chapterIndex, sceneId, stats };
}

// Клик по персонажу → реакция (картинки прислала Khalil). Ноэль — особый случай (ниже).
const reactionSprites: Record<string, string> = {
  "/images/characters/kai-aster/kai-neutral.png": "/images/characters/kai-aster/kai-onclick.png",
  "/images/characters/kai-aster/kai-worried.png": "/images/characters/kai-aster/kai-onclick.png",
  "/images/characters/kai-aster/kai-annoyed.png": "/images/characters/kai-aster/kai-onclick.png",
  "/images/characters/leonard/leonard-neutral.png": "/images/characters/leonard/leonard-onclick.png",
  "/images/characters/leonard/leonard-annoyed.png": "/images/characters/leonard/leonard-onclick.png",
  "/images/characters/vern-twins/ellian-1.png": "/images/characters/vern-twins/ellian-2.png",
};

function GamePage({ language, onChangeLanguage, onLogout }: GamePageProps) {
  const t = strings[language];
  // Имя ГГ (введённое при создании) — подставляем в реплики героя.
  let mcName = "";
  try {
    const rawMc = localStorage.getItem("asl_mc");
    if (rawMc) mcName = (JSON.parse(rawMc) as { name?: string }).name ?? "";
  } catch {
    mcName = "";
  }

  const [chapterIndex, setChapterIndex] = useState(() => loadInitial().chapterIndex);
  const [currentSceneId, setCurrentSceneId] = useState(() => loadInitial().sceneId);
  const [stats, setStats] = useState<GameStats>(() => loadInitial().stats);
  const [reaction, setReaction] = useState<string | null>(null);
  // Показываем ли Элиана-защитника (при клике по Ноэлю).
  const [protector, setProtector] = useState(false);
  // Открыта ли панель профиля.
  const [showProfile, setShowProfile] = useState(false);

  // Сохраняем прогресс при каждом изменении главы, сцены или очков.
  useEffect(() => {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({ chapterIndex, sceneId: currentSceneId, stats }),
    );
  }, [chapterIndex, currentSceneId, stats]);

  const chapter = chapters[chapterIndex];
  const currentScene = chapter.scenes.find((scene) => scene.id === currentSceneId);
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

  // Переиграть ТЕКУЩУЮ главу заново: на её начало, очки обнуляем.
  const handleReplayChapter = () => {
    setReaction(null);
    setProtector(false);
    setShowProfile(false);
    setStats(initialStats);
    setCurrentSceneId(chapter.firstSceneId);
  };

  // Перейти к следующей главе (кнопка на экране конца главы).
  const handleContinueChapter = () => {
    setReaction(null);
    setProtector(false);
    if (chapterIndex < chapters.length - 1) {
      const next = chapterIndex + 1;
      setChapterIndex(next);
      setStats(initialStats);
      setCurrentSceneId(chapters[next].firstSceneId);
    }
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
  // Конец главы — сцена без продолжения и без выборов.
  const isChapterEnd = !currentScene.nextSceneId && !currentScene.choices;
  const hasNextChapter = chapterIndex < chapters.length - 1;

  // Локализованные текст сцены и имя говорящего (у героя — имя ГГ).
  const sceneText =
    language === "ru" ? currentScene.textRu ?? currentScene.text : currentScene.text;
  const speakerName =
    currentScene.speaker === "hero"
      ? mcName || t.you
      : language === "ru"
        ? speaker.nameRu ?? speaker.name
        : speaker.name;

  // ---- Итог главы ----
  const characterLabel =
    stats.boldScore === stats.softScore
      ? t.charBalanced
      : stats.boldScore > stats.softScore
        ? t.charDefiant
        : t.charGentle;
  // Порядок важен для ничьих: близнецы и Леонард тоже могут стать фаворитом, а не всегда Кай.
  const bonds = [
    { name: t.bondTwins, score: stats.twinsScore },
    { name: t.bondLeonard, score: stats.leonardScore },
    { name: t.bondKai, score: stats.kaiScore },
    { name: t.bondViktor, score: stats.viktorScore },
  ];
  const topBond = bonds.reduce((best, bond) => (bond.score > best.score ? bond : best));
  const favorite = topBond.score > 0 ? topBond.name : t.noOneYet;
  const path =
    language === "ru"
      ? topBond.score > 0
        ? `${characterLabel} путь. Рядом — ${topBond.name}.`
        : `${characterLabel} путь, пройденный в одиночестве.`
      : `The ${characterLabel.toLowerCase()} road ` +
        (topBond.score > 0 ? `toward ${topBond.name}.` : "walked alone.");

  return (
    <main
      className={`game-page background-${currentScene.background}`}
      onClick={goNext}
    >
      <div className="game-page-overlay">
        {/* Иконка профиля (справа сверху) — открывает панель аккаунта */}
        <button
          className="profile-trigger"
          aria-label="Profile"
          onClick={(event) => {
            event.stopPropagation();
            setShowProfile(true);
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.31 0-8 1.66-8 5v1h16v-1c0-3.34-4.69-5-8-5Z" />
          </svg>
        </button>

        {showProfile && (
          <ProfilePanel
            language={language}
            chapterLabel={chapter.label[language]}
            onChangeLanguage={onChangeLanguage}
            onReplayChapter={handleReplayChapter}
            onClose={() => setShowProfile(false)}
            onLogout={() => {
              setShowProfile(false);
              onLogout();
            }}
          />
        )}

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
            src="/images/characters/vern-twins/ellian-protector.png"
            alt=""
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        <header className="game-top-panel">
          <p className="game-label">{chapter.label[language]}</p>
          <h1>{t.gameTitle}</h1>
        </header>

        <div className="game-content">
          <DialogueBox
            speakerName={speakerName}
            text={sceneText}
            showNextButton={Boolean(currentScene.nextSceneId)}
            nextHintText={t.clickToContinue}
            eyebrow={currentScene.fact ? t.archiveFact : undefined}
          />

          {currentScene.choices && (
            <ChoiceList
              choices={currentScene.choices}
              onSelectChoice={selectChoice}
              language={language}
            />
          )}

          {isChapterEnd && (
            <section className="chapter-result">
              <p className="chapter-result-label">{t.endOfChapter}</p>
              <h2>{chapter.subtitle[language]}</h2>
              <div className="chapter-result-stats">
                <p>
                  {t.favorite} — <strong>{favorite}</strong>
                </p>
                <p>
                  {t.character} — <strong>{characterLabel}</strong>
                </p>
                <p>
                  {t.path} — <em>{path}</em>
                </p>
              </div>

              {hasNextChapter ? (
                <button
                  className="chapter-continue"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleContinueChapter();
                  }}
                >
                  {t.continueLabel} — {chapters[chapterIndex + 1].label[language]}
                </button>
              ) : (
                <p className="chapter-result-note">{t.toBeContinued}</p>
              )}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default GamePage;
