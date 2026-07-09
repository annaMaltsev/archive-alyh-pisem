import { useState } from "react";
import "../authFlow.css";

// Создание персонажа игрока (ГГ): имя + пол. Сохраняем локально.
type McCreatePageProps = {
  onDone: () => void;
};

type Gender = "male" | "female";

const MC_KEY = "asl_mc";

function McCreatePage({ onDone }: McCreatePageProps) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [error, setError] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const cleanName = name.trim();
    if (cleanName.length < 1) {
      setError("Please enter a name.");
      return;
    }
    if (!gender) {
      setError("Please choose a gender.");
      return;
    }

    localStorage.setItem(MC_KEY, JSON.stringify({ name: cleanName, gender }));
    onDone();
  };

  return (
    <main className="flow-page">
      <div className="flow-card">
        <p className="flow-eyebrow">Archive of Scarlet Letters</p>
        <h1 className="flow-title">Create your character</h1>
        <p className="flow-sub">This is who returns to Veilmore.</p>

        <form className="flow-form" onSubmit={submit}>
          <label className="flow-field">
            <span>Name</span>
            <input
              className="flow-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={24}
              autoComplete="off"
            />
          </label>

          <div className="flow-field">
            <span>Gender</span>
            <div className="flow-choices flow-choices--row">
              <button
                type="button"
                className={`flow-choice ${gender === "male" ? "is-selected" : ""}`}
                onClick={() => setGender("male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`flow-choice ${gender === "female" ? "is-selected" : ""}`}
                onClick={() => setGender("female")}
              >
                Female
              </button>
            </div>
          </div>

          {error && <p className="flow-error">{error}</p>}

          <button className="flow-button" type="submit">
            Enter Veilmore
          </button>
        </form>
      </div>
    </main>
  );
}

export default McCreatePage;
