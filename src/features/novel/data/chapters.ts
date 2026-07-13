import type { Scene } from "../types/novelTypes";
import type { Lang } from "../../i18n/strings";
import { chapter1Scenes } from "./chapter1";
import { chapter2Scenes } from "./chapter2";

// Реестр глав. Добавляешь новую главу — импортируешь её сцены и дописываешь сюда объект.
export type Chapter = {
  number: number;
  firstSceneId: string; // с какой сцены начинается глава
  label: Record<Lang, string>; // «Глава первая» — для шапки и панели профиля
  subtitle: Record<Lang, string>; // подзаголовок — для экрана конца главы
  scenes: Scene[];
};

export const chapters: Chapter[] = [
  {
    number: 1,
    firstSceneId: "prologue_1",
    label: { en: "Chapter One", ru: "Глава первая" },
    subtitle: { en: "The First Day in the City", ru: "Первый день в городе" },
    scenes: chapter1Scenes,
  },
  {
    number: 2,
    firstSceneId: "ch2_open",
    label: { en: "Chapter Two", ru: "Глава вторая" },
    subtitle: { en: "The Garden Beyond the Fence", ru: "Сад за оградой" },
    scenes: chapter2Scenes,
  },
];
