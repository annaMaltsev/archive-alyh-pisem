export type CharacterId =
  | "narrator"
  | "hero"
  | "kai"
  | "leonard"
  | "elian"
  | "noel"
  | "viktor";

export type BackgroundId =
  | "station"
  | "academy"
  | "square"
  | "archive"
  | "corridor"
  | "dorm";

export type GameScreen = "start" | "name" | "game";

export type GameStats = {
  softScore: number;
  boldScore: number;
  kaiScore: number;
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
  nextSceneId?: string;
  choices?: Choice[];
};

export type Character = {
  id: CharacterId;
  name: string;
  description: string;
};