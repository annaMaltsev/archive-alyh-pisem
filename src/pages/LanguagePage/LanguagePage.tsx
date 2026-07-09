import type { Lang } from "../../features/i18n/strings";
import "../authFlow.css";

// Выбор языка (английский / русский). Экран двуязычный — намеренно.
type LanguagePageProps = {
  onChoose: (lang: Lang) => void;
};

function LanguagePage({ onChoose }: LanguagePageProps) {
  return (
    <main className="flow-page">
      <div className="flow-card">
        <p className="flow-eyebrow">Archive of Scarlet Letters</p>
        <h1 className="flow-title">Choose language</h1>
        <p className="flow-sub">Выберите язык</p>

        <div className="flow-choices">
          <button className="flow-choice" type="button" onClick={() => onChoose("en")}>
            English
          </button>
          <button className="flow-choice" type="button" onClick={() => onChoose("ru")}>
            Русский
          </button>
        </div>
      </div>
    </main>
  );
}

export default LanguagePage;
