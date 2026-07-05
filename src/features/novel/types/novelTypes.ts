export type CharacterId =
  | "narrator"
  | "hero"
  | "kai"
  | "leonard"
  | "elian"
  | "noel"
  | "viktor";

// Фоны главы 1. Пока картинок нет — в GamePage.css заданы тёмные плейсхолдеры.
export type BackgroundId =
  | "prologue" // фон пролога (возвращение в Вейльмор)
  | "street" // дорога к академии
  | "room" // комната героя в квартире Леонарда
  | "kitchen" // кухня/кабинет Леонарда
  | "hall" // холл академии
  | "lockers" // коридор со шкафчиками
  | "cgletter"; // CG: крупный план письма

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
  nextSceneId: string;
  effect?: ChoiceEffect;
};

export type Scene = {
  id: string;
  background: BackgroundId;
  speaker: CharacterId;
  text: string;
  sprite?: string; // путь к спрайту персонажа (прозрачный PNG); если нет — персонаж не показывается
  nextSceneId?: string;
  choices?: Choice[];
};

export type Character = {
  id: CharacterId;
  name: string;
  description: string;
};
