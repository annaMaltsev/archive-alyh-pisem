import type { Scene } from "../types/novelTypes";

// ============================================================
// CHAPTER 1 — "The First Day in the City"
// Короткие подряд-идущие куски слиты, чтобы меньше кликать.
// Продвижение — кликом в любом месте экрана (см. GamePage).
// ============================================================

// Пути к спрайтам персонажей (прозрачные PNG). Меняешь тут — меняется везде.
const LEONARD = "/images/characters/leonard-neutral.png";
const LEONARD_ANNOYED = "/images/characters/leonard-annoyed.png";
const ELIAN = "/images/characters/ellian-1.png";
const NOEL = "/images/characters/noel-1.png";
const KAI = "/images/characters/kai-neutral.png";
const KAI_WORRIED = "/images/characters/kai-worried.png";

export const chapter1Scenes: Scene[] = [
  // ---------- PROLOGUE (одним абзацем) ----------
  {
    id: "prologue_1",
    background: "prologue",
    speaker: "narrator",
    text: "Once, they took me away from here as a child. I barely remember anything — only wet stone, scarlet lanterns, and a garden behind a high fence. Now my parents are gone, and among their things there was only an old address, the name Leonard Veil, and a city they had always kept silent about. I'm not returning to Veilmore for answers. I just don't know where else to go.",
    nextSceneId: "transition_1",
  },

  // ---------- TRANSITION (placeholder — сюда позже встанет анимация «дождь по стеклу») ----------
  {
    id: "transition_1",
    background: "room",
    speaker: "narrator",
    text: "Rain traced the window. The scarlet light bled through the glass, blurred, thinned — and became morning.",
    nextSceneId: "morning_1",
  },

  // ---------- SCENE 1 — Morning at Leonard's ----------
  {
    id: "morning_1",
    background: "room",
    speaker: "narrator",
    text: "For a moment I didn't know where I was. Then I saw the uniform folded on the chair, the rain on the glass, the shelves of books I wasn't meant to touch — and I remembered. Veilmore. I had actually come. The room had been prepared for me, and somehow that only made it lonelier.",
    nextSceneId: "kitchen_intro",
  },

  // ---------- SCENE 2 — Leonard: cold care ----------
  {
    id: "kitchen_intro",
    background: "kitchen",
    speaker: "narrator",
    text: "A voice came from the next room — low, even, already awake.",
    nextSceneId: "leonard_1",
  },
  {
    id: "leonard_1",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Documents are on the table. The uniform should fit. If it doesn't, tell me after classes.",
    nextSceneId: "leonard_2",
  },
  {
    id: "leonard_2",
    background: "kitchen",
    speaker: "narrator",
    sprite: LEONARD,
    text: "Leonard Veil didn't look up from his papers. Tea, toast, a thin stack of forms — everything in its place, nothing warm about any of it.",
    nextSceneId: "hero_ask",
  },
  {
    id: "hero_ask",
    background: "kitchen",
    speaker: "hero",
    sprite: LEONARD,
    text: "You prepared all of this in advance?",
    nextSceneId: "leonard_3",
  },
  {
    id: "leonard_3",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Your parents didn't leave me the luxury of improvising.",
    choices: [
      {
        id: "c1_soft",
        text: "Thank you. I'll try not to be a burden.",
        nextSceneId: "leonard_soft",
        effect: { softScore: 1, leonardScore: 1 },
      },
      {
        id: "c1_bold",
        text: "You say that like I asked for any of this.",
        nextSceneId: "leonard_bold",
        effect: { boldScore: 1 },
      },
      {
        id: "c1_probe",
        text: "What did they tell you about me?",
        nextSceneId: "leonard_probe",
        effect: { boldScore: 1, leonardScore: 1 },
      },
    ],
  },
  {
    id: "leonard_soft",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Gratitude is cheap. But it's a start. Don't make me regret the room.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_bold",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD_ANNOYED,
    text: "No. You didn't ask. Neither did I. We're both here because someone else decided — so let's at least be efficient about it.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_probe",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "That they loved you more than they trusted this city. Ask sharper questions than that, and we might actually get along.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_after",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Eat. The academy doesn't wait, and I won't walk you there.",
    nextSceneId: "street_1",
  },

  // ---------- SCENE 3 — Road to the academy ----------
  {
    id: "street_1",
    background: "street",
    speaker: "narrator",
    text: "Veilmore after rain was quiet and gold-lit, even by day. Wet stone, scarlet lanterns still burning against the grey, and the same four crests carved above every door that mattered. I didn't know what they meant — but something in me did. Every corner felt like a word in a language I'd forgotten I could read.",
    nextSceneId: "hall_intro",
  },

  // ---------- SCENE 4 — Academy hall + the twins ----------
  {
    id: "hall_intro",
    background: "hall",
    speaker: "narrator",
    text: "The academy swallowed the noise of the morning: high windows, dark wood, students in the same uniform I'd put on an hour ago. A clerk handed me a schedule, a locker number, and a pass without meeting my eyes. \"Veilmore remembers its own,\" she said — and was gone before I could ask what she meant.",
    nextSceneId: "twins_1",
  },
  {
    id: "twins_1",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "New? Veilmore rarely takes in people who already look like they want to run.",
    nextSceneId: "twins_2",
  },
  {
    id: "twins_2",
    background: "hall",
    speaker: "narrator",
    sprite: ELIAN,
    text: "All easy charm — bright, amused, a little too quick. Behind him stood a second face, almost the same and not at all: quieter, watchful, still.",
    nextSceneId: "noel_1",
  },
  {
    id: "noel_1",
    background: "hall",
    speaker: "noel",
    sprite: NOEL,
    text: "Elian.",
    nextSceneId: "elian_1",
  },
  {
    id: "elian_1",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "What? I'm only helping him adjust.",
    choices: [
      {
        id: "c2_banter",
        text: "Is that what you call it?",
        nextSceneId: "twins_banter",
        effect: { twinsScore: 1, boldScore: 1 },
      },
      {
        id: "c2_noel",
        text: "Does he always talk for both of you?",
        nextSceneId: "twins_noel",
        effect: { twinsScore: 1, softScore: 1 },
      },
      {
        id: "c2_cold",
        text: "(Say nothing and keep walking.)",
        nextSceneId: "twins_cold",
        effect: { boldScore: 1 },
      },
    ],
  },
  {
    id: "twins_banter",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "See? He gets it. Here we call a lot of things by names they don't deserve. You'll fit right in.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_noel",
    background: "hall",
    speaker: "noel",
    sprite: NOEL,
    text: "Not always. Only when it matters that someone is listening.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_cold",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "Cold. I like it. Veilmore will either love you or bury you — usually both.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_after",
    background: "hall",
    speaker: "narrator",
    text: "Elian Vern. Noel Vern. They drifted off, and the morning felt a little less solid than before.",
    nextSceneId: "kai_1",
  },

  // ---------- SCENE 5 — Kai ----------
  {
    id: "kai_1",
    background: "hall",
    speaker: "narrator",
    sprite: KAI,
    text: "By the stairs stood someone I recognized before I could remember why.",
    nextSceneId: "kai_2",
  },
  {
    id: "kai_2",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "You came back.",
    nextSceneId: "kai_3",
  },
  {
    id: "kai_3",
    background: "hall",
    speaker: "hero",
    sprite: KAI,
    text: "Do I know you?",
    nextSceneId: "kai_4",
  },
  {
    id: "kai_4",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "You really don't remember.",
    nextSceneId: "kai_5",
  },
  {
    id: "kai_5",
    background: "hall",
    speaker: "hero",
    sprite: KAI,
    text: "I remember a garden. And a boy who kept pretending he wasn't scared.",
    nextSceneId: "kai_6",
  },
  {
    id: "kai_6",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "Then you remember enough to stay away from him.",
    choices: [
      {
        id: "c3_from",
        text: "From you?",
        nextSceneId: "kai_from",
        effect: { boldScore: 1, kaiScore: 1 },
      },
      {
        id: "c3_why",
        text: "Why do you say that?",
        nextSceneId: "kai_why",
        effect: { softScore: 1, kaiScore: 1 },
      },
      {
        id: "c3_hide",
        text: "I'm not hiding from anyone.",
        nextSceneId: "kai_hide",
        effect: { boldScore: 1 },
      },
    ],
  },
  {
    id: "kai_from",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "From all of it. From me most of all.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_why",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "Because the last time you were here, something happened. And everyone decided it was easier if you forgot it.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_hide",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "Everyone hides here. The ones who swear they don't are just the first to disappear.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_after",
    background: "hall",
    speaker: "narrator",
    sprite: KAI,
    text: "Kai Astor. The name arrived with a warmth I hadn't expected, and a cold that came right behind it. He didn't smile — he looked like a person bracing against a door he'd hoped would stay shut.",
    nextSceneId: "locker",
  },

  // ---------- SCENE 6 — The first scarlet letter ----------
  {
    id: "locker",
    background: "lockers",
    speaker: "narrator",
    text: "The corridor of lockers was almost empty. Mine opened with a dry click — no books, no belongings, nothing that should have been mine. And yet one thing waited inside: an envelope. Old paper, a scarlet wax seal, unbroken. My first day, and someone already knew my locker, my schedule, my name. I broke the seal. Inside, a single line, pressed too hard into the paper:",
    nextSceneId: "letter_2",
  },
  {
    id: "letter_2",
    background: "cgletter",
    speaker: "narrator",
    text: "“Your name was already here. Ask why it was erased.”",
    nextSceneId: "letter_3",
  },
  {
    id: "letter_3",
    background: "cgletter",
    speaker: "narrator",
    text: "The academy stopped feeling like a place I'd walked into. It felt like a place that had been waiting for me.",
    nextSceneId: "hook_1",
  },

  // ---------- SCENE 7 — Final hook ----------
  {
    id: "hook_1",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "Where did you get that?",
    nextSceneId: "hook_2",
  },
  {
    id: "hook_2",
    background: "lockers",
    speaker: "narrator",
    sprite: KAI_WORRIED,
    text: "Kai's voice, right behind me — his eyes on the seal, whatever calm he'd been holding onto gone.",
    nextSceneId: "hook_3",
  },
  {
    id: "hook_3",
    background: "lockers",
    speaker: "hero",
    sprite: KAI_WORRIED,
    text: "In my locker.",
    nextSceneId: "hook_4",
  },
  {
    id: "hook_4",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "Then you've already made your first mistake today.",
    nextSceneId: "chapter_end",
  },
  {
    id: "chapter_end",
    background: "lockers",
    speaker: "narrator",
    text: "The scarlet light in the hallway seemed to dim. Somewhere far below the academy, something old turned over in its sleep.",
  },
];
