import { useState } from "react";
import StartPage from "../pages/StartPage/StartPage";
import GamePage from "../pages/GamePage/GamePage";
import ComingSoonPage from "../pages/ComingSoonPage/ComingSoonPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import LanguagePage from "../pages/LanguagePage/LanguagePage";
import McCreatePage from "../pages/McCreatePage/McCreatePage";

// ⚙️ РЕЖИМ САЙТА — меняй только эту строчку:
//   true  — версия для фанатов: с главной по кнопке попадаем на заглушку «Coming Soon».
//   false — режим разработки: с главной по кнопке идём в поток регистрации и игру.
const UNDER_CONSTRUCTION = false;

// Экраны: главная → регистрация → выбор языка → создание ГГ → игра (или заглушка).
type Screen = "start" | "auth" | "language" | "mc" | "game" | "coming";

function app() {
  const [screen, setScreen] = useState<Screen>("start");
  // Вошёл ли пользователь В ЭТОТ ЗАПУСК. При перезагрузке сбрасывается —
  // поэтому при новом запуске снова просим войти (логин+пароль), а прогресс не теряется.
  const [authed, setAuthed] = useState(false);

  // Кнопка на главной.
  const handleStart = () => {
    if (UNDER_CONSTRUCTION) {
      setScreen("coming");
      return;
    }
    const hasAccount = Boolean(localStorage.getItem("asl_account"));
    // Уже вошёл в этой сессии → сразу в игру (продолжит с сохранения).
    if (hasAccount && authed) {
      setScreen("game");
      return;
    }
    // Нет аккаунта → регистрация; аккаунт есть, но не вошёл → вход.
    setScreen("auth");
  };

  // После регистрации/входа: новый игрок идёт создавать ГГ, вернувшийся — сразу в игру.
  const handleAuthDone = () => {
    setAuthed(true);
    const hasMc = Boolean(localStorage.getItem("asl_mc"));
    setScreen(hasMc ? "game" : "language");
  };

  // Выход из аккаунта: возвращаемся на главную, прогресс и аккаунт сохраняются.
  const handleLogout = () => {
    setAuthed(false);
    setScreen("start");
  };

  return (
    <>
      {screen === "start" && <StartPage onStart={handleStart} />}
      {screen === "auth" && <AuthPage onDone={handleAuthDone} />}
      {screen === "language" && <LanguagePage onDone={() => setScreen("mc")} />}
      {screen === "mc" && <McCreatePage onDone={() => setScreen("game")} />}
      {screen === "game" && <GamePage onLogout={handleLogout} />}
      {screen === "coming" && <ComingSoonPage />}
    </>
  );
}

export default app;
