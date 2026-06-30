import { useEffect, useState } from "react";
import "./StartPage.css";

// Пропсы — входные данные компонента. Нужна одна функция: что делать по кнопке.
type StartPageProps = {
  onStart: () => void;
};

function StartPage({ onStart }: StartPageProps) {
  // isAlt — поза Кая: false обычная, true вторая (на пару секунд по клику).
  const [isAlt, setIsAlt] = useState(false);
  // showWelcome — показывать ли уведомление-приветствие.
  const [showWelcome, setShowWelcome] = useState(false);

  // Уведомление показываем только при ПЕРВОМ визите (метка в localStorage).
  useEffect(() => {
    if (localStorage.getItem("asl_seen_welcome")) return;
    localStorage.setItem("asl_seen_welcome", "1");
    setShowWelcome(true);

    // Звук уведомления. Браузер может заблокировать звук до первого клика
    // по странице — тогда .catch() просто молча проглотит ошибку.
    const audio = new Audio("/sounds/notify.wav");
    audio.volume = 0.5;
    audio.play().catch(() => {});

    // Само скрывается через 6 секунд.
    const timer = setTimeout(() => setShowWelcome(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleCharacterClick = () => {
    if (isAlt) return; // пока показываем позу 2 — повторные клики игнорируем
    setIsAlt(true);
    setTimeout(() => setIsAlt(false), 2000); // через 2 секунды вернуть обычную позу
  };

  const characterSrc = isAlt
    ? "/images/characters/kai-cut2.png"
    : "/images/characters/kai-cut.png";

  return (
    <main className="start-page">
      {/* Персонаж: по клику ненадолго меняет позу. Фон у картинки уже вырезан. */}
      <img
        className="start-character"
        src={characterSrc}
        alt=""
        onClick={handleCharacterClick}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <button className="start-button" onClick={onStart}>
        Enter the Archive
      </button>

      {/* Уведомление-приветствие (как SMS) — только первый визит */}
      {showWelcome && (
        <div
          className="welcome-toast"
          role="status"
          onClick={() => setShowWelcome(false)}
        >
          <span className="welcome-toast-icon">✉</span>
          <div className="welcome-toast-body">
            <p className="welcome-toast-title">Veilmore</p>
            <p className="welcome-toast-text">Don't forget to pet Kai</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default StartPage;
