import { useState } from "react";
import type { Lang } from "../../features/i18n/strings";
import { strings } from "../../features/i18n/strings";
import "../authFlow.css";

// Регистрация/вход. ТОЛЬКО логин + пароль, никаких персональных данных (почты и т.п.).
// Аккаунт хранится ЛОКАЛЬНО в браузере (localStorage) — ничего не уходит на сервер.
type AuthPageProps = {
  onDone: () => void;
  language: Lang;
};

type Account = {
  login: string;
  password: string;
};

const ACCOUNT_KEY = "asl_account";

function AuthPage({ onDone, language }: AuthPageProps) {
  const t = strings[language];
  // Если аккаунт уже создан — сразу режим «вход», иначе «регистрация».
  const [mode, setMode] = useState<"register" | "login">(() =>
    localStorage.getItem(ACCOUNT_KEY) ? "login" : "register",
  );
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    const cleanLogin = login.trim();
    if (cleanLogin.length < 3) {
      setError(t.errLoginShort);
      return;
    }
    if (password.length < 4) {
      setError(t.errPassShort);
      return;
    }

    const stored = localStorage.getItem(ACCOUNT_KEY);

    if (mode === "register") {
      const account: Account = { login: cleanLogin, password };
      localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
      onDone();
      return;
    }

    if (!stored) {
      setError(t.errNoAccount);
      return;
    }
    const account = JSON.parse(stored) as Account;
    if (account.login !== cleanLogin || account.password !== password) {
      setError(t.errWrong);
      return;
    }
    onDone();
  };

  return (
    <main className="flow-page">
      <div className="flow-card">
        <p className="flow-eyebrow">Archive of Scarlet Letters</p>
        <h1 className="flow-title">
          {mode === "register" ? t.authCreateTitle : t.authWelcomeTitle}
        </h1>
        <p className="flow-sub">{t.authNote}</p>

        <form className="flow-form" onSubmit={submit}>
          <label className="flow-field">
            <span>{t.login}</span>
            <input
              className="flow-input"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              autoComplete="username"
              maxLength={24}
            />
          </label>

          <label className="flow-field">
            <span>{t.password}</span>
            <input
              className="flow-input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={mode === "register" ? "new-password" : "current-password"}
              maxLength={40}
            />
          </label>

          {error && <p className="flow-error">{error}</p>}

          <button className="flow-button" type="submit">
            {mode === "register" ? t.createAccount : t.logIn}
          </button>
        </form>

        <button
          className="flow-link"
          type="button"
          onClick={() => {
            setMode(mode === "register" ? "login" : "register");
            setError("");
          }}
        >
          {mode === "register" ? t.toggleToLogin : t.toggleToRegister}
        </button>
      </div>
    </main>
  );
}

export default AuthPage;
