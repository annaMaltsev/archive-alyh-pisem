import { useState } from "react";

// Панель профиля: данные ГГ, логин/пароль, смена языка, выход.
// Всё читается из localStorage (ничего не уходит на сервер).
type ProfilePanelProps = {
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

function ProfilePanel({ onClose, onLogout }: ProfilePanelProps) {
  const mc = readJson<{ name: string; gender: string }>("asl_mc");
  const account = readJson<{ login: string; password: string }>("asl_account");
  const [language, setLanguage] = useState<string>(
    () => localStorage.getItem("asl_language") ?? "en",
  );
  const [showPassword, setShowPassword] = useState(false);

  const chooseLang = (lang: "en" | "ru") => {
    localStorage.setItem("asl_language", lang);
    setLanguage(lang);
  };

  const genderLabel =
    mc?.gender === "female" ? "Female" : mc?.gender === "male" ? "Male" : "—";

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

        <p className="profile-eyebrow">Your account</p>
        <h2 className="profile-title">Profile</h2>

        <section className="profile-section">
          <p className="profile-label">Character</p>
          <p className="profile-value">{mc?.name ?? "—"}</p>
          <p className="profile-sub">{genderLabel}</p>
        </section>

        <section className="profile-section">
          <p className="profile-label">Login</p>
          <p className="profile-value">{account?.login ?? "—"}</p>

          <p className="profile-label">Password</p>
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
                {showPassword ? "hide" : "show"}
              </button>
            )}
          </p>
        </section>

        <section className="profile-section">
          <p className="profile-label">Language</p>
          <div className="profile-lang">
            <button
              className={`profile-lang-btn ${language === "en" ? "is-selected" : ""}`}
              onClick={() => chooseLang("en")}
            >
              English
            </button>
            <button
              className={`profile-lang-btn ${language === "ru" ? "is-selected" : ""}`}
              onClick={() => chooseLang("ru")}
            >
              Русский
            </button>
          </div>
        </section>

        <button className="profile-logout" onClick={onLogout}>
          Log out
        </button>
      </aside>
    </div>
  );
}

export default ProfilePanel;
