import { useState } from "react";
import StartPage from "../pages/StartPage/StartPage";
import GamePage from "../pages/GamePage/GamePage";
import ComingSoonPage from "../pages/ComingSoonPage/ComingSoonPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import LanguagePage from "../pages/LanguagePage/LanguagePage";
import McCreatePage from "../pages/McCreatePage/McCreatePage";
import type { Lang } from "../features/i18n/strings";
import { getStoredLang } from "../features/i18n/strings";

// ⚙️ РЕЖИМ САЙТА — меняй только эту строчку:
//   true  — версия для фанатов: с главной по кнопке попадаем на заглушку «Coming Soon».
//   false — режим разработки: с главной по кнопке идём в поток регистрации и игру.
const UNDER_CONSTRUCTION = false;

// Экраны: главная → регистрация → выбор языка → создание ГГ → игра (или заглушка).
type Screen = "start" | "auth" | "language" | "mc" | "game" | "coming";

function app() {
  const [screen, setScreen] = useState<Screen>("start");
  // Вошёл ли пользователь В ЭТОТ ЗАПУСК. При перезагрузке сбрасывается —
  // поэтому при новом запуске снова просим войти, а прогресс не теряется.
  const [authed, setAuthed] = useState(false);
  // Язык интерфейса и сцен. Живёт здесь, чтобы смена языка обновляла все экраны.
  const [language, setLanguage] = useState<Lang>(() => getStoredLang());

  const changeLanguage = (lang: Lang) => {
    setLanguage(lang);
    localStorage.setItem("asl_language", lang);
  };

  // Кнопка на главной.
  const handleStart = () => {
    if (UNDER_CONSTRUCTION) {
      setScreen("coming");
      return;
    }
    const hasAccount = Boolean(localStorage.getItem("asl_account"));
    if (hasAccount && authed) {
      setScreen("game");
      return;
    }
    setScreen("auth");
  };

  // После регистрации/входа: новый игрок идёт выбирать язык и создавать ГГ,
  // вернувшийся — сразу в игру.
  const handleAuthDone = () => {
    setAuthed(true);
    const hasMc = Boolean(localStorage.getItem("asl_mc"));
    setScreen(hasMc ? "game" : "language");
  };

  const handleLogout = () => {
    setAuthed(false);
    setScreen("start");
  };

  return (
    <>
      {screen === "start" && <StartPage onStart={handleStart} language={language} />}
      {screen === "auth" && <AuthPage onDone={handleAuthDone} language={language} />}
      {screen === "language" && (
        <LanguagePage
          onChoose={(lang) => {
            changeLanguage(lang);
            setScreen("mc");
          }}
        />
      )}
      {screen === "mc" && <McCreatePage onDone={() => setScreen("game")} language={language} />}
      {screen === "game" && (
        <GamePage
          language={language}
          onChangeLanguage={changeLanguage}
          onLogout={handleLogout}
        />
      )}
      {screen === "coming" && <ComingSoonPage />}
    </>
  );
}

export default app;
