import type { Character } from "../types/novelTypes";

// Имена показываются в окне реплики. У рассказчика имя пустое — подписи нет.
export const characters: Record<string, Character> = {
  narrator: {
    id: "narrator",
    name: "Narrator",
    nameRu: "Рассказчик",
    description: "Inner voice of the story.",
  },
  hero: {
    id: "hero",
    name: "You",
    nameRu: "Ты",
    description: "The protagonist. The player will choose the name later.",
  },
  kai: {
    id: "kai",
    name: "Kai Astor",
    nameRu: "Кай Астор",
    description:
      "Hero's childhood friend, Viktor's son. Guarded; senses the return is dangerous.",
  },
  leonard: {
    id: "leonard",
    name: "Leonard Veil",
    nameRu: "Леонард Вейл",
    description:
      "Professor, friend of the hero's late foster parents. Cold, contradictory care.",
  },
  elian: {
    id: "elian",
    name: "Elian Vern",
    nameRu: "Элиан Верн",
    description: "Charming, controlling twin of the Vern family.",
  },
  noel: {
    id: "noel",
    name: "Noel Vern",
    nameRu: "Ноэль Верн",
    description: "Quiet, watchful twin; analyst of the digital archive.",
  },
  viktor: {
    id: "viktor",
    name: "Viktor Astor",
    nameRu: "Виктор Астор",
    description: "Head of the Astor line. Power and control.",
  },
};
