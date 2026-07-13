export type CharacterId =
  | "narrator"
  | "hero"
  | "kai"
  | "leonard"
  | "elian"
  | "noel"
  | "viktor";

// Фоны сцен. У части пока нет своих картинок — в GamePage.css стоят заглушки.
export type BackgroundId =
  | "prologue" // фон пролога (возвращение в Вейльмор)
  | "street" // дорога к академии
  | "room" // комната героя в квартире Леонарда
  | "kitchen" // кухня/кабинет Леонарда
  | "hall" // холл академии
  | "lockers" // коридор со шкафчиками
  | "cgletter" // CG: крупный план письма
  | "corridor" // коридор-галерея академии (гл.2)
  | "archive" // архив академии — сцена с камерой (гл.2)
  | "map" // крупный план старой карты (гл.2, финал)
  | "garden" // ворота закрытого сада ночью (гл.2)
  | "apartment"; // вечерний кабинет Леонарда (гл.2)

export type GameScreen = "start" | "name" | "game";

// Скрытые очки: тон героя (soft/bold) и отношения с персонажами.
export type GameStats = {
  softScore: number;
  boldScore: number;
  kaiScore: number;
  leonardScore: number;
  twinsScore: number;
  viktorScore: number;
};

export type ChoiceEffect = Partial<GameStats>;

export type Choice = {
  id: string;
  text: string;
  textRu?: string; // русский перевод варианта ответа
  nextSceneId: string;
  effect?: ChoiceEffect;
};

export type Scene = {
  id: string;
  background: BackgroundId;
  speaker: CharacterId;
  text: string;
  textRu?: string; // русский перевод реплики/абзаца
  sprite?: string; // путь к спрайту персонажа (прозрачный PNG); если нет — персонаж не показывается
  fact?: boolean; // true → сцена-«Факт архива» (обучающая вставка, особый стиль)
  nextSceneId?: string;
  choices?: Choice[];
};

export type Character = {
  id: CharacterId;
  name: string;
  nameRu?: string; // имя на русском (для русской версии)
  description: string;
};
