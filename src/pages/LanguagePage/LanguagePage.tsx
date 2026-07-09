import "../authFlow.css";

// Выбор языка (английский / русский). Сохраняем локально.
type LanguagePageProps = {
  onDone: () => void;
};

const LANGUAGE_KEY = "asl_language";

function LanguagePage({ onDone }: LanguagePageProps) {
  const choose = (lang: "en" | "ru") => {
    localStorage.setItem(LANGUAGE_KEY, lang);
    onDone();
  };

  return (
    <main className="flow-page">
      <div className="flow-card">
        <p className="flow-eyebrow">Archive of Scarlet Letters</p>
        <h1 className="flow-title">Choose language</h1>
        <p className="flow-sub">Выберите язык</p>

        <div className="flow-choices">
          <button className="flow-choice" type="button" onClick={() => choose("en")}>
            English
          </button>
          <button className="flow-choice" type="button" onClick={() => choose("ru")}>
            Русский
          </button>
        </div>
      </div>
    </main>
  );
}

export default LanguagePage;
