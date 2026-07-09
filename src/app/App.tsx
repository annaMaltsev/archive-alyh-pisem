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

  // Кнопка на главной. Если пользователь уже прошёл регистрацию и создал ГГ —
  // сразу пускаем в игру. Иначе ведём через регистрацию.
  const handleStart = () => {
    if (UNDER_CONSTRUCTION) {
      setScreen("coming");
      return;
    }
    const hasAccount = Boolean(localStorage.getItem("asl_account"));
    const hasMc = Boolean(localStorage.getItem("asl_mc"));
    setScreen(hasAccount && hasMc ? "game" : "auth");
  };

  return (
    <>
      {screen === "start" && <StartPage onStart={handleStart} />}
      {screen === "auth" && <AuthPage onDone={() => setScreen("language")} />}
      {screen === "language" && <LanguagePage onDone={() => setScreen("mc")} />}
      {screen === "mc" && <McCreatePage onDone={() => setScreen("game")} />}
      {screen === "game" && <GamePage />}
      {screen === "coming" && <ComingSoonPage />}
    </>
  );
}

export default app;
