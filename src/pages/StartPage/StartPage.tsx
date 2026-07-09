import { useEffect, useState } from "react";
import type { Lang } from "../../features/i18n/strings";
import { strings } from "../../features/i18n/strings";
import "./StartPage.css";

// Пропсы — входные данные компонента.
type StartPageProps = {
  onStart: () => void;
  language: Lang;
};

function StartPage({ onStart, language }: StartPageProps) {
  const t = strings[language];
  // isAlt — поза Кая: false обычная, true вторая (на пару секунд по клику).
  const [isAlt, setIsAlt] = useState(false);
  // showWelcome — показывать ли уведомление-приветствие.
  const [showWelcome, setShowWelcome] = useState(false);

  // Уведомление показываем при КАЖДОМ заходе на главную (без запоминания).
  useEffect(() => {
    setShowWelcome(true);

    // Звук уведомления. Браузер может заблокировать автозвук до первого клика по странице.
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

      {/* Ряд кнопок: Start и Continue */}
      <div className="start-buttons">
        <button className="start-button" onClick={onStart}>
          {t.enterArchive}
        </button>
      </div>

      {/* Уведомление-приветствие (как SMS) — при каждом визите */}
      {showWelcome && (
        <div
          className="welcome-toast"
          role="status"
          onClick={() => setShowWelcome(false)}
        >
          <span className="welcome-toast-icon">✉</span>
          <div className="welcome-toast-body">
            <p className="welcome-toast-title">{t.toastTitle}</p>
            <p className="welcome-toast-text">{t.toastText}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default StartPage;
