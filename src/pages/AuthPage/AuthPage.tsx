import { useState } from "react";
import "../authFlow.css";

// Регистрация/вход. ТОЛЬКО логин + пароль, никаких персональных данных (почты и т.п.).
// Аккаунт хранится ЛОКАЛЬНО в браузере (localStorage) — ничего не уходит на сервер.
type AuthPageProps = {
  onDone: () => void;
};

type Account = {
  login: string;
  password: string;
};

const ACCOUNT_KEY = "asl_account";

function AuthPage({ onDone }: AuthPageProps) {
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
      setError("Login must be at least 3 characters.");
      return;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    const stored = localStorage.getItem(ACCOUNT_KEY);

    if (mode === "register") {
      const account: Account = { login: cleanLogin, password };
      localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
      onDone();
      return;
    }

    // Вход: сверяем с сохранённым аккаунтом.
    if (!stored) {
      setError("No account found on this device. Please register.");
      return;
    }
    const account = JSON.parse(stored) as Account;
    if (account.login !== cleanLogin || account.password !== password) {
      setError("Wrong login or password.");
      return;
    }
    onDone();
  };

  return (
    <main className="flow-page">
      <div className="flow-card">
        <p className="flow-eyebrow">Archive of Scarlet Letters</p>
        <h1 className="flow-title">
          {mode === "register" ? "Create your account" : "Welcome back"}
        </h1>

        <form className="flow-form" onSubmit={submit}>
          <label className="flow-field">
            <span>Login</span>
            <input
              className="flow-input"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
              autoComplete="username"
              maxLength={24}
            />
          </label>

          <label className="flow-field">
            <span>Password</span>
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
            {mode === "register" ? "Create account" : "Log in"}
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
          {mode === "register"
            ? "Already have an account? Log in"
            : "Need an account? Register"}
        </button>
      </div>
    </main>
  );
}

export default AuthPage;
