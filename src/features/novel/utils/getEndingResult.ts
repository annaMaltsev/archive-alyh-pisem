import type { GameStats } from "../types/novelTypes";

export function getPersonalityResult(stats: GameStats) {
  if (stats.boldScore > stats.softScore) {
    return "bold";
  }

  return "soft";
}

export function getRouteResult(stats: GameStats) {
  if (stats.viktorScore > stats.kaiScore) {
    return "viktor";
  }

  return "kai";
}