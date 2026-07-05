import { useState } from "react";
import StartPage from "../pages/StartPage/StartPage";
import GamePage from "../pages/GamePage/GamePage";
import ComingSoonPage from "../pages/ComingSoonPage/ComingSoonPage";

// ⚙️ РЕЖИМ САЙТА — меняй только эту строчку:
//   true  — версия для фанатов: с главной по кнопке попадаем на заглушку «Coming Soon».
//   false — режим разработки: с главной по кнопке попадаем в саму игру (первая глава).
const UNDER_CONSTRUCTION = false;

function app() {
  // Какой экран показываем: главный / заглушка / игра.
  const [screen, setScreen] = useState<"start" | "coming" | "game">("start");

  // Куда ведёт кнопка Start — зависит от режима выше.
  const handleStart = () => {
    setScreen(UNDER_CONSTRUCTION ? "coming" : "game");
  };

  return (
    <>
      {screen === "start" && <StartPage onStart={handleStart} />}
      {screen === "coming" && <ComingSoonPage />}
      {screen === "game" && <GamePage />}
    </>
  );
}

export default app;
