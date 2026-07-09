import { useState } from "react";
import type { Lang } from "../../features/i18n/strings";
import { strings } from "../../features/i18n/strings";

// Панель профиля: данные ГГ, логин/пароль, смена языка, выход.
// Всё читается из localStorage (ничего не уходит на сервер).
type ProfilePanelProps = {
  language: Lang;
  onChangeLanguage: (lang: Lang) => void;
  onClose: () => void;
  onLogout: () => void;
};

function readJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function ProfilePanel({ language, onChangeLanguage, onClose, onLogout }: ProfilePanelProps) {
  const t = strings[language];
  const mc = readJson<{ name: string; gender: string }>("asl_mc");
  const account = readJson<{ login: string; password: string }>("asl_account");
  const [showPassword, setShowPassword] = useState(false);

  const genderLabel =
    mc?.gender === "female" ? t.female : mc?.gender === "male" ? t.male : "—";

  return (
    // Затемнение на весь экран. stopPropagation — чтобы клик не листал историю.
    <div
      className="profile-overlay"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <aside className="profile-panel" onClick={(event) => event.stopPropagation()}>
        <button className="profile-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <p className="profile-eyebrow">{t.profEyebrow}</p>
        <h2 className="profile-title">{t.profTitle}</h2>

        <section className="profile-section">
          <p className="profile-label">{t.profCharacter}</p>
          <p className="profile-value">{mc?.name ?? "—"}</p>
          <p className="profile-sub">{genderLabel}</p>
        </section>

        <section className="profile-section">
          <p className="profile-label">{t.login}</p>
          <p className="profile-value">{account?.login ?? "—"}</p>

          <p className="profile-label">{t.password}</p>
          <p className="profile-value">
            <span className="profile-password">
              {account
                ? showPassword
                  ? account.password
                  : "•".repeat(account.password.length)
                : "—"}
            </span>
            {account && (
              <button
                className="profile-toggle"
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? t.hide : t.show}
              </button>
            )}
          </p>
        </section>

        <section className="profile-section">
          <p className="profile-label">{t.profLanguage}</p>
          <div className="profile-lang">
            <button
              className={`profile-lang-btn ${language === "en" ? "is-selected" : ""}`}
              onClick={() => onChangeLanguage("en")}
            >
              English
            </button>
            <button
              className={`profile-lang-btn ${language === "ru" ? "is-selected" : ""}`}
              onClick={() => onChangeLanguage("ru")}
            >
              Русский
            </button>
          </div>
        </section>

        <button className="profile-logout" onClick={onLogout}>
          {t.logOut}
        </button>
      </aside>
    </div>
  );
}

export default ProfilePanel;
