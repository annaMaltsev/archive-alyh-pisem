// Язык интерфейса и все подписи UI на двух языках.
// Сцены главы переводятся отдельно (см. chapter1.ts, поле textRu).

export type Lang = "en" | "ru";

export type UiStrings = {
  // Главная
  enterArchive: string;
  toastTitle: string;
  toastText: string;
  // Регистрация / вход
  authCreateTitle: string;
  authWelcomeTitle: string;
  authNote: string;
  login: string;
  password: string;
  createAccount: string;
  logIn: string;
  toggleToLogin: string;
  toggleToRegister: string;
  errLoginShort: string;
  errPassShort: string;
  errNoAccount: string;
  errWrong: string;
  // Создание ГГ
  mcTitle: string;
  mcSub: string;
  name: string;
  gender: string;
  male: string;
  female: string;
  enterVeilmore: string;
  errName: string;
  errGender: string;
  // Игра
  chapterOne: string;
  gameTitle: string;
  clickToContinue: string;
  endOfChapter: string;
  chapterSubtitle: string;
  favorite: string;
  character: string;
  path: string;
  toBeContinued: string;
  noOneYet: string;
  you: string;
  // Характер (итог главы)
  charBalanced: string;
  charDefiant: string;
  charGentle: string;
  // Фавориты
  bondTwins: string;
  bondLeonard: string;
  bondKai: string;
  bondViktor: string;
  // Панель профиля
  profEyebrow: string;
  profTitle: string;
  profCharacter: string;
  profLanguage: string;
  profChapter: string;
  replayChapter: string;
  show: string;
  hide: string;
  logOut: string;
};

const en: UiStrings = {
  enterArchive: "Enter the Archive",
  toastTitle: "Developer",
  toastText: "Don't forget to pet Kai",
  authCreateTitle: "Create your account",
  authWelcomeTitle: "Welcome back",
  authNote: "No email, no personal data — just a login and a password. Everything stays on this device.",
  login: "Login",
  password: "Password",
  createAccount: "Create account",
  logIn: "Log in",
  toggleToLogin: "Already have an account? Log in",
  toggleToRegister: "Need an account? Register",
  errLoginShort: "Login must be at least 3 characters.",
  errPassShort: "Password must be at least 4 characters.",
  errNoAccount: "No account found on this device. Please register.",
  errWrong: "Wrong login or password.",
  mcTitle: "Create your character",
  mcSub: "This is who returns to Veilmore.",
  name: "Name",
  gender: "Gender",
  male: "Male",
  female: "Female",
  enterVeilmore: "Enter Veilmore",
  errName: "Please enter a name.",
  errGender: "Please choose a gender.",
  chapterOne: "Chapter One",
  gameTitle: "Archive of Scarlet Letters",
  clickToContinue: "click to continue ▸",
  endOfChapter: "End of Chapter One",
  chapterSubtitle: "The First Day in the City",
  favorite: "Favorite",
  character: "Character",
  path: "Path",
  toBeContinued: "To be continued…",
  noOneYet: "no one — yet",
  you: "You",
  charBalanced: "Balanced",
  charDefiant: "Defiant",
  charGentle: "Gentle",
  bondTwins: "the Vern twins",
  bondLeonard: "Leonard",
  bondKai: "Kai",
  bondViktor: "Viktor",
  profEyebrow: "Your account",
  profTitle: "Profile",
  profCharacter: "Character",
  profLanguage: "Language",
  profChapter: "Chapter One",
  replayChapter: "Replay chapter",
  show: "show",
  hide: "hide",
  logOut: "Log out",
};

const ru: UiStrings = {
  enterArchive: "Войти в Архив",
  toastTitle: "Разработчик",
  toastText: "Не забудь погладить Кая",
  authCreateTitle: "Создать аккаунт",
  authWelcomeTitle: "С возвращением",
  authNote: "Без почты и личных данных — только логин и пароль. Всё хранится на этом устройстве.",
  login: "Логин",
  password: "Пароль",
  createAccount: "Создать аккаунт",
  logIn: "Войти",
  toggleToLogin: "Уже есть аккаунт? Войти",
  toggleToRegister: "Нет аккаунта? Зарегистрироваться",
  errLoginShort: "Логин должен быть не короче 3 символов.",
  errPassShort: "Пароль должен быть не короче 4 символов.",
  errNoAccount: "На этом устройстве нет аккаунта. Зарегистрируйтесь.",
  errWrong: "Неверный логин или пароль.",
  mcTitle: "Создание персонажа",
  mcSub: "Это тот, кто возвращается в Вейльмор.",
  name: "Имя",
  gender: "Пол",
  male: "Мужской",
  female: "Женский",
  enterVeilmore: "Войти в Вейльмор",
  errName: "Введите имя.",
  errGender: "Выберите пол.",
  chapterOne: "Глава первая",
  gameTitle: "Архив Алых Писем",
  clickToContinue: "кликните, чтобы продолжить ▸",
  endOfChapter: "Конец первой главы",
  chapterSubtitle: "Первый день в городе",
  favorite: "Фаворит",
  character: "Характер",
  path: "Путь",
  toBeContinued: "Продолжение следует…",
  noOneYet: "пока никого",
  you: "Ты",
  charBalanced: "Уравновешенный",
  charDefiant: "Дерзкий",
  charGentle: "Мягкий",
  bondTwins: "близнецы Верн",
  bondLeonard: "Леонард",
  bondKai: "Кай",
  bondViktor: "Виктор",
  profEyebrow: "Ваш аккаунт",
  profTitle: "Профиль",
  profCharacter: "Персонаж",
  profLanguage: "Язык",
  profChapter: "Глава первая",
  replayChapter: "Переиграть главу",
  show: "показать",
  hide: "скрыть",
  logOut: "Выйти",
};

export const strings: Record<Lang, UiStrings> = { en, ru };

// Достаём язык из localStorage (по умолчанию английский).
export function getStoredLang(): Lang {
  return localStorage.getItem("asl_language") === "ru" ? "ru" : "en";
}
