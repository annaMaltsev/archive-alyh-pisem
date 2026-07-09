import type { Scene } from "../types/novelTypes";

// ============================================================
// CHAPTER 1 — "The First Day in the City" / «Первый день в городе»
// text   — английский (по умолчанию)
// textRu — русский (показывается, если выбран русский язык)
// Продвижение — кликом в любом месте экрана (см. GamePage).
// ============================================================

// Пути к спрайтам персонажей (прозрачные PNG). Меняешь тут — меняется везде.
const LEONARD = "/images/characters/leonard-neutral.png";
const LEONARD_ANNOYED = "/images/characters/leonard-annoyed.png";
const ELIAN = "/images/characters/ellian-1.png";
const NOEL = "/images/characters/noel-1.png";
const KAI = "/images/characters/kai-neutral.png";
const KAI_WORRIED = "/images/characters/kai-worried.png"; // только ПОСЛЕ письма
const KAI_ANNOYED = "/images/characters/kai-annoyed.png"; // до письма вместо worried

export const chapter1Scenes: Scene[] = [
  // ---------- PROLOGUE ----------
  {
    id: "prologue_1",
    background: "prologue",
    speaker: "narrator",
    text: "Once, they took me away from here as a child. I barely remember anything — only wet stone, scarlet lanterns, and a garden behind a high fence. Now my parents are gone, and among their things there was only an old address, the name Leonard Veil, and a city they had always kept silent about. I'm not returning to Veilmore for answers. I just don't know where else to go.",
    textRu:
      "Когда-то, ещё ребёнком, меня увезли отсюда. Я почти ничего не помню — только мокрый камень, алые фонари и сад за высокой оградой. Теперь родителей больше нет, а среди их вещей нашёлся лишь старый адрес, имя — Леонард Вейл — и город, о котором они всегда молчали. Я возвращаюсь в Вейльмор не за ответами. Просто мне больше некуда идти.",
    nextSceneId: "transition_1",
  },

  // ---------- TRANSITION ----------
  {
    id: "transition_1",
    background: "room",
    speaker: "narrator",
    text: "Rain traced the window. The scarlet light bled through the glass, blurred, thinned — and became morning.",
    textRu:
      "Дождь чертил узоры по стеклу. Алый свет сочился сквозь окно, расплывался, редел — и становился утром.",
    nextSceneId: "morning_1",
  },

  // ---------- SCENE 1 — Morning at Leonard's ----------
  {
    id: "morning_1",
    background: "room",
    speaker: "narrator",
    text: "For a moment I didn't know where I was. Then I saw the uniform folded on the chair, the rain on the glass, the shelves of books I wasn't meant to touch — and I remembered. Veilmore. I had actually come. The room had been prepared for me, and somehow that only made it lonelier.",
    textRu:
      "Секунду я не понимал, где я. Потом увидел форму, сложенную на стуле, дождь на стекле, полки с книгами, которые мне не полагалось трогать, — и вспомнил. Вейльмор. Я и правда приехал. Комнату приготовили заранее, и почему-то от этого становилось только более одиноко.",
    nextSceneId: "kitchen_intro",
  },

  // ---------- SCENE 2 — Leonard: cold care ----------
  {
    id: "kitchen_intro",
    background: "kitchen",
    speaker: "narrator",
    text: "A voice came from the next room — low, even, already awake.",
    textRu: "Из соседней комнаты донёсся голос — низкий, ровный, уже бодрствующий.",
    nextSceneId: "leonard_1",
  },
  {
    id: "leonard_1",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Documents are on the table. The uniform should fit. If it doesn't, tell me after classes.",
    textRu:
      "Документы на столе. Форма должна подойти. Если нет — скажешь после занятий.",
    nextSceneId: "leonard_2",
  },
  {
    id: "leonard_2",
    background: "kitchen",
    speaker: "narrator",
    sprite: LEONARD,
    text: "Leonard Veil didn't look up from his papers. Tea, toast, a thin stack of forms — everything in its place, nothing warm about any of it.",
    textRu:
      "Леонард Вейл не отрывал глаз от бумаг. Чай, тост, тонкая стопка бланков — всё на своих местах, и ни в чём ни капли тепла.",
    nextSceneId: "hero_ask",
  },
  {
    id: "hero_ask",
    background: "kitchen",
    speaker: "hero",
    sprite: LEONARD,
    text: "You prepared all of this in advance?",
    textRu: "Вы приготовили всё это заранее?",
    nextSceneId: "leonard_3",
  },
  {
    id: "leonard_3",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Your parents didn't leave me the luxury of improvising.",
    textRu: "Твои родители не оставили мне роскоши импровизировать.",
    choices: [
      {
        id: "c1_soft",
        text: "Thank you. I'll try not to be a burden.",
        textRu: "Спасибо. Постараюсь не быть обузой.",
        nextSceneId: "leonard_soft",
        effect: { softScore: 1, leonardScore: 1 },
      },
      {
        id: "c1_bold",
        text: "You say that like I asked for any of this.",
        textRu: "Вы говорите так, будто я обо всём этом просил.",
        nextSceneId: "leonard_bold",
        effect: { boldScore: 1 },
      },
      {
        id: "c1_probe",
        text: "What did they tell you about me?",
        textRu: "Что они вам обо мне рассказали?",
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
    textRu:
      "Благодарность ничего не стоит. Но это уже начало. Не заставляй меня жалеть о комнате.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_bold",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD_ANNOYED,
    text: "No. You didn't ask. Neither did I. We're both here because someone else decided — so let's at least be efficient about it.",
    textRu:
      "Нет. Ты не просил. И я тоже. Мы оба здесь потому, что решил кто-то другой, — так давай хотя бы обойдёмся без лишней возни.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_probe",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "That they loved you more than they trusted this city. Ask sharper questions than that, and we might actually get along.",
    textRu:
      "Что они любили тебя больше, чем доверяли этому городу. Задавай вопросы поострее — и, может, мы поладим.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_after",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Eat. The academy doesn't wait, and I won't walk you there.",
    textRu: "Ешь. Академия не ждёт, а провожать тебя я не стану.",
    nextSceneId: "street_1",
  },

  // ---------- SCENE 3 — Road to the academy ----------
  {
    id: "street_1",
    background: "street",
    speaker: "narrator",
    text: "Veilmore after rain was quiet and gold-lit, even by day. Wet stone, scarlet lanterns still burning against the grey, and the same four crests carved above every door that mattered. I didn't know what they meant — but something in me did. Every corner felt like a word in a language I'd forgotten I could read.",
    textRu:
      "Вейльмор после дождя был тих и залит золотом даже днём. Мокрый камень, алые фонари, всё ещё горящие на фоне серого, и одни и те же четыре герба, высеченные над каждой значимой дверью. Я не знал, что они означают, — но что-то во мне знало. Каждый угол казался словом на языке, который я, оказывается, ещё умел читать.",
    nextSceneId: "hall_intro",
  },

  // ---------- SCENE 4 — Academy hall + the twins ----------
  {
    id: "hall_intro",
    background: "hall",
    speaker: "narrator",
    text: 'The academy swallowed the noise of the morning: high windows, dark wood, students in the same uniform I\'d put on an hour ago. A clerk handed me a schedule, a locker number, and a pass without meeting my eyes. "Veilmore remembers its own," she said — and was gone before I could ask what she meant.',
    textRu:
      "Академия поглотила утренний шум: высокие окна, тёмное дерево, ученики в той же форме, что я надел час назад. Служащая протянула мне расписание, номер шкафчика и пропуск, не поднимая на меня глаз. «Вейльмор помнит своих», — сказала она и исчезла прежде, чем я успел спросить, о чём это она.",
    nextSceneId: "twins_1",
  },
  {
    id: "twins_1",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "New? Veilmore rarely takes in people who already look like they want to run.",
    textRu:
      "Новенький? Вейльмор редко впускает тех, кто с порога выглядит так, будто уже хочет сбежать.",
    nextSceneId: "twins_2",
  },
  {
    id: "twins_2",
    background: "hall",
    speaker: "narrator",
    sprite: ELIAN,
    text: "All easy charm — bright, amused, a little too quick. Behind him stood a second face, almost the same and not at all: quieter, watchful, still.",
    textRu:
      "Сплошное лёгкое обаяние — яркий, насмешливый, чуть слишком быстрый. За ним стояло второе лицо, почти такое же и совсем другое: тише, внимательнее, неподвижное.",
    nextSceneId: "noel_1",
  },
  {
    id: "noel_1",
    background: "hall",
    speaker: "noel",
    sprite: NOEL,
    text: "Elian.",
    textRu: "Элиан.",
    nextSceneId: "elian_1",
  },
  {
    id: "elian_1",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "What? I'm only helping him adjust.",
    textRu: "Что? Я всего лишь помогаю ему освоиться.",
    choices: [
      {
        id: "c2_banter",
        text: "Is that what you call it?",
        textRu: "Это так теперь называется?",
        nextSceneId: "twins_banter",
        effect: { twinsScore: 1, boldScore: 1 },
      },
      {
        id: "c2_noel",
        text: "Does he always talk for both of you?",
        textRu: "Он всегда говорит за вас обоих?",
        nextSceneId: "twins_noel",
        effect: { twinsScore: 1, softScore: 1 },
      },
      {
        id: "c2_cold",
        text: "(Say nothing and keep walking.)",
        textRu: "(Промолчать и пройти мимо.)",
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
    textRu:
      "Видишь? Он понимает. Здесь многое зовут именами, которых оно не заслуживает. Ты отлично впишешься.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_noel",
    background: "hall",
    speaker: "noel",
    sprite: NOEL,
    text: "Not always. Only when it matters that someone is listening.",
    textRu: "Не всегда. Только когда важно, чтобы кто-то слушал.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_cold",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "Cold. I like it. Veilmore will either love you or bury you — usually both.",
    textRu:
      "Холодно. Мне нравится. Вейльмор либо полюбит тебя, либо похоронит — обычно и то, и другое.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_after",
    background: "hall",
    speaker: "narrator",
    text: "Elian Vern. Noel Vern. They drifted off, and the morning felt a little less solid than before.",
    textRu:
      "Элиан Верн. Ноэль Верн. Они растворились в толпе, и утро стало чуть менее надёжным, чем прежде.",
    nextSceneId: "kai_1",
  },

  // ---------- SCENE 5 — Kai ----------
  {
    id: "kai_1",
    background: "hall",
    speaker: "narrator",
    sprite: KAI,
    text: "By the stairs stood someone I recognized before I could remember why.",
    textRu: "У лестницы стоял тот, кого я узнал раньше, чем вспомнил почему.",
    nextSceneId: "kai_2",
  },
  {
    id: "kai_2",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "You came back.",
    textRu: "Ты вернулся.",
    nextSceneId: "kai_3",
  },
  {
    id: "kai_3",
    background: "hall",
    speaker: "hero",
    sprite: KAI,
    text: "Do I know you?",
    textRu: "Мы знакомы?",
    nextSceneId: "kai_4",
  },
  {
    id: "kai_4",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "You really don't remember.",
    textRu: "Ты правда не помнишь.",
    nextSceneId: "kai_5",
  },
  {
    id: "kai_5",
    background: "hall",
    speaker: "hero",
    sprite: KAI,
    text: "I remember a garden. And a boy who kept pretending he wasn't scared.",
    textRu:
      "Я помню сад. И мальчишку, который всё время делал вид, что ему не страшно.",
    nextSceneId: "kai_6",
  },
  {
    id: "kai_6",
    background: "hall",
    speaker: "kai",
    sprite: KAI_ANNOYED,
    text: "Then you remember enough to stay away from him.",
    textRu: "Значит, помнишь достаточно, чтобы держаться от него подальше.",
    choices: [
      {
        id: "c3_from",
        text: "From you?",
        textRu: "От тебя?",
        nextSceneId: "kai_from",
        effect: { boldScore: 1, kaiScore: 1 },
      },
      {
        id: "c3_why",
        text: "Why do you say that?",
        textRu: "Почему ты так говоришь?",
        nextSceneId: "kai_why",
        effect: { softScore: 1, kaiScore: 1 },
      },
      {
        id: "c3_hide",
        text: "I'm not hiding from anyone.",
        textRu: "Я ни от кого не прячусь.",
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
    textRu: "От всего этого. И от меня — больше всего.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_why",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "Because the last time you were here, something happened. And everyone decided it was easier if you forgot it.",
    textRu:
      "Потому что в прошлый раз, когда ты был здесь, кое-что случилось. И все решили, что проще, если ты это забудешь.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_hide",
    background: "hall",
    speaker: "kai",
    sprite: KAI_ANNOYED,
    text: "Everyone hides here. The ones who swear they don't are just the first to disappear.",
    textRu:
      "Здесь прячутся все. А те, кто клянётся, что нет, просто первыми и исчезают.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_after",
    background: "hall",
    speaker: "narrator",
    sprite: KAI,
    text: "Kai Astor. The name arrived with a warmth I hadn't expected, and a cold that came right behind it. He didn't smile — he looked like a person bracing against a door he'd hoped would stay shut.",
    textRu:
      "Кай Астор. Это имя пришло с теплом, которого я не ждал, и с холодом, что тут же последовал за ним. Он не улыбался — он был похож на человека, что подпирает собой дверь, которую надеялся оставить закрытой.",
    nextSceneId: "locker",
  },

  // ---------- SCENE 6 — The first scarlet letter ----------
  {
    id: "locker",
    background: "lockers",
    speaker: "narrator",
    text: "The corridor of lockers was almost empty. Mine opened with a dry click — no books, no belongings, nothing that should have been mine. And yet one thing waited inside: an envelope. Old paper, a scarlet wax seal, unbroken. My first day, and someone already knew my locker, my schedule, my name. I broke the seal. Inside, a single line, pressed too hard into the paper:",
    textRu:
      "Коридор со шкафчиками был почти пуст. Мой открылся с сухим щелчком — ни книг, ни вещей, ничего, что было бы моим. И всё же внутри кое-что ждало: конверт. Старая бумага, алая восковая печать, нетронутая. Мой первый день, а кто-то уже знал мой шкафчик, моё расписание, моё имя. Я сломал печать. Внутри — одна строка, вдавленная в бумагу слишком сильно:",
    nextSceneId: "letter_2",
  },
  {
    id: "letter_2",
    background: "cgletter",
    speaker: "narrator",
    text: "“Your name was already here. Ask why it was erased.”",
    textRu: "«Твоё имя уже было здесь. Спроси, почему его стёрли.»",
    nextSceneId: "letter_3",
  },
  {
    id: "letter_3",
    background: "cgletter",
    speaker: "narrator",
    text: "The academy stopped feeling like a place I'd walked into. It felt like a place that had been waiting for me.",
    textRu:
      "Академия перестала быть местом, куда я просто вошёл. Она стала местом, которое меня ждало.",
    nextSceneId: "hook_1",
  },

  // ---------- SCENE 7 — Final hook ----------
  {
    id: "hook_1",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "Where did you get that?",
    textRu: "Откуда это у тебя?",
    nextSceneId: "hook_2",
  },
  {
    id: "hook_2",
    background: "lockers",
    speaker: "narrator",
    sprite: KAI_WORRIED,
    text: "Kai's voice, right behind me — his eyes on the seal, whatever calm he'd been holding onto gone.",
    textRu:
      "Голос Кая — прямо за спиной, взгляд на печати, и от всего его спокойствия не осталось и следа.",
    nextSceneId: "hook_3",
  },
  {
    id: "hook_3",
    background: "lockers",
    speaker: "hero",
    sprite: KAI_WORRIED,
    text: "In my locker.",
    textRu: "В моём шкафчике.",
    nextSceneId: "hook_4",
  },
  {
    id: "hook_4",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "Then you've already made your first mistake today.",
    textRu: "Значит, ты уже совершил свою первую ошибку за сегодня.",
    nextSceneId: "chapter_end",
  },
  {
    id: "chapter_end",
    background: "lockers",
    speaker: "narrator",
    text: "The scarlet light in the hallway seemed to dim. Somewhere far below the academy, something old turned over in its sleep.",
    textRu:
      "Алый свет в коридоре словно померк. Где-то глубоко под академией что-то древнее повернулось во сне.",
  },
];
