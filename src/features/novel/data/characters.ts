import type { Character } from "../types/novelTypes";

export const characters: Record<string, Character> = {
  narrator: {
    id: "narrator",
    name: "Рассказчик",
    description: "Внутренний голос истории",
  },
  hero: {
    id: "hero",
    name: "Герой",
    description: "Главный герой, имя выбирает игрок",
  },
  kai: {
    id: "kai",
    name: "Кай Астор",
    description: "Лучший друг героя, который скрывает правду",
  },
  leonard: {
    id: "leonard",
    name: "Леонард Вейл",
    description: "Куратор академии и опасный антагонист",
  },
  elian: {
    id: "elian",
    name: "Элиан Верн",
    description: "Весёлый близнец, который скрывает властность и жестокость",
  },
  noel: {
    id: "noel",
    name: "Ноэль Верн",
    description: "Спокойный близнец, находящийся под влиянием Элиана",
  },
  viktor: {
    id: "viktor",
    name: "Виктор Астор",
    description: "Отец Кая, человек с властью над академией",
  },
};