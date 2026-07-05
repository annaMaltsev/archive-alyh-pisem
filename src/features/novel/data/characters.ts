import type { Character } from "../types/novelTypes";

// Имена показываются в окне реплики. У рассказчика имя пустое — подписи нет.
export const characters: Record<string, Character> = {
  narrator: {
    id: "narrator",
    name: "Narrator",
    description: "Inner voice of the story.",
  },
  hero: {
    id: "hero",
    name: "You",
    description: "The protagonist. The player will choose the name later.",
  },
  kai: {
    id: "kai",
    name: "Kai Astor",
    description:
      "Hero's childhood friend, Viktor's son. Guarded; senses the return is dangerous.",
  },
  leonard: {
    id: "leonard",
    name: "Leonard Veil",
    description:
      "Professor, friend of the hero's late foster parents. Cold, contradictory care.",
  },
  elian: {
    id: "elian",
    name: "Elian Vern",
    description: "Charming, controlling twin of the Vern family.",
  },
  noel: {
    id: "noel",
    name: "Noel Vern",
    description: "Quiet, watchful twin; analyst of the digital archive.",
  },
  viktor: {
    id: "viktor",
    name: "Viktor Astor",
    description: "Head of the Astor line. Power and control.",
  },
};
