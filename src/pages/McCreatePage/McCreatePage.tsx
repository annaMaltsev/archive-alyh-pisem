import { useState } from "react";
import type { Lang } from "../../features/i18n/strings";
import { strings } from "../../features/i18n/strings";
import "../authFlow.css";

// Создание персонажа игрока (ГГ): имя + пол. Сохраняем локально.
type McCreatePageProps = {
  onDone: () => void;
  language: Lang;
};

type Gender = "male" | "female";

const MC_KEY = "asl_mc";

function McCreatePage({ onDone, language }: McCreatePageProps) {
  const t = strings[language];
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [error, setError] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const cleanName = name.trim();
    if (cleanName.length < 1) {
      setError(t.errName);
      return;
    }
    if (!gender) {
      setError(t.errGender);
      return;
    }

    localStorage.setItem(MC_KEY, JSON.stringify({ name: cleanName, gender }));
    onDone();
  };

  return (
    <main className="flow-page">
      <div className="flow-card">
        <p className="flow-eyebrow">Archive of Scarlet Letters</p>
        <h1 className="flow-title">{t.mcTitle}</h1>
        <p className="flow-sub">{t.mcSub}</p>

        <form className="flow-form" onSubmit={submit}>
          <label className="flow-field">
            <span>{t.name}</span>
            <input
              className="flow-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={24}
              autoComplete="off"
            />
          </label>

          <div className="flow-field">
            <span>{t.gender}</span>
            <div className="flow-choices flow-choices--row">
              <button
                type="button"
                className={`flow-choice ${gender === "male" ? "is-selected" : ""}`}
                onClick={() => setGender("male")}
              >
                {t.male}
              </button>
              <button
                type="button"
                className={`flow-choice ${gender === "female" ? "is-selected" : ""}`}
                onClick={() => setGender("female")}
              >
                {t.female}
              </button>
            </div>
          </div>

          {error && <p className="flow-error">{error}</p>}

          <button className="flow-button" type="submit">
            {t.enterVeilmore}
          </button>
        </form>
      </div>
    </main>
  );
}

export default McCreatePage;
