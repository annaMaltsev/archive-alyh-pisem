import { useState } from "react";
import StartPage from "../pages/StartPage/StartPage";
import ComingSoonPage from "../pages/ComingSoonPage/ComingSoonPage";

function app() {
  // Какой экран показываем: главный ("start") или заглушку ("coming").
  // Пока игра не готова: с главной по кнопке попадаем на заглушку «Coming Soon».
  const [screen, setScreen] = useState<"start" | "coming">("start");

  return (
    <>
      {screen === "start" && <StartPage onStart={() => setScreen("coming")} />}
      {screen === "coming" && <ComingSoonPage />}
    </>
  );
}

export default app;
