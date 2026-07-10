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
    text: "They took me away from this city when I was a child. I remember almost nothing of it — wet stone, scarlet lanterns, a garden behind a high fence. Now my parents are dead, and all they left me was an old address, a single name — Leonard Veil — and a city they never once spoke of. I'm not returning to Veilmore for answers. I simply have nowhere else to go.",
    textRu:
      "Меня увезли из этого города ещё ребёнком. Я почти ничего о нём не помню — мокрый камень, алые фонари, сад за высокой оградой. Теперь родителей больше нет, и всё, что они мне оставили, — старый адрес, одно-единственное имя — Леонард Вейл — и город, о котором они не обмолвились ни словом. Я возвращаюсь в Вейльмор не за ответами. Мне просто больше некуда идти.",
    nextSceneId: "transition_1",
  },

  // ---------- TRANSITION ----------
  {
    id: "transition_1",
    background: "room",
    speaker: "narrator",
    text: "Rain crept down the window. Scarlet light bled through it, blurred, thinned — and slowly turned into morning.",
    textRu:
      "Дождь сползал по стеклу. Алый свет сочился сквозь него, расплывался, редел — и медленно превращался в утро.",
    nextSceneId: "morning_1",
  },

  // ---------- SCENE 1 — Morning at Leonard's ----------
  {
    id: "morning_1",
    background: "room",
    speaker: "narrator",
    text: "For a moment I didn't know where I was. Then I saw the uniform folded over the chair, the rain on the glass, the shelves of books that weren't mine to touch — and it all came back. Veilmore. I had really come. The room had been prepared for me long before I arrived, and somehow that only made it lonelier.",
    textRu:
      "Первое мгновение я не понимал, где нахожусь. Потом увидел форму, аккуратно сложенную на спинке стула, дождь на стекле, полки чужих книг, к которым не смел прикоснуться, — и всё вернулось. Вейльмор. Я действительно приехал. Комнату приготовили задолго до моего появления — и почему-то от этого становилось только тоскливее.",
    nextSceneId: "kitchen_intro",
  },

  // ---------- SCENE 2 — Leonard: cold care ----------
  {
    id: "kitchen_intro",
    background: "kitchen",
    speaker: "narrator",
    text: "From the next room came a voice — low, even, the voice of a man long since awake.",
    textRu: "Из соседней комнаты донёсся голос — низкий, ровный. Голос человека, который давно не спит.",
    nextSceneId: "leonard_1",
  },
  {
    id: "leonard_1",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Your documents are on the table. The uniform should fit. If it doesn't, tell me after classes.",
    textRu:
      "Документы на столе. Форма должна подойти. Если нет — скажешь после занятий.",
    nextSceneId: "leonard_2",
  },
  {
    id: "leonard_2",
    background: "kitchen",
    speaker: "narrator",
    sprite: LEONARD,
    text: "Leonard Veil didn't look up from his papers. Tea, toast, a thin stack of forms — everything in its place, and nothing warm in any of it.",
    textRu:
      "Леонард Вейл не поднял глаз от бумаг. Чай, тост, тонкая стопка бланков — всё на своих местах, и ни в чём ни капли тепла.",
    nextSceneId: "hero_ask",
  },
  {
    id: "hero_ask",
    background: "kitchen",
    speaker: "hero",
    sprite: LEONARD,
    text: "You arranged all of this in advance?",
    textRu: "Вы всё это приготовили заранее?",
    nextSceneId: "leonard_3",
  },
  {
    id: "leonard_3",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Your parents didn't leave me the luxury of improvising.",
    textRu: "Твои родители не оставили мне права на импровизацию.",
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
        text: "You say that as if I asked for any of this.",
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
    text: "Gratitude is cheap. But it's a start. Just don't make me regret the room.",
    textRu:
      "Благодарность ничего не стоит. Но это уже начало. Только не заставь меня пожалеть о комнате.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_bold",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD_ANNOYED,
    text: "No. You didn't ask. Neither did I. We're both here because someone else decided for us — so let's at least be efficient about it.",
    textRu:
      "Нет. Ты не просил. И я тоже. Мы оба здесь потому, что за нас решил кто-то другой, — так давай хотя бы обойдёмся без лишней возни.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_probe",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "That they loved you more than they trusted this city. Learn to ask sharper questions than that, and we might even get along.",
    textRu:
      "Что они любили тебя больше, чем доверяли этому городу. Научись задавать вопросы поострее — и, может, мы даже поладим.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_after",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Eat. The academy won't wait, and I won't be walking you there.",
    textRu: "Ешь. Академия ждать не станет, а провожать тебя я не пойду.",
    nextSceneId: "street_1",
  },

  // ---------- SCENE 3 — Road to the academy ----------
  {
    id: "street_1",
    background: "street",
    speaker: "narrator",
    text: "Even by daylight, Veilmore after the rain felt hushed and gilded. Wet stone, scarlet lanterns still burning against the grey, and the same four crests carved above every door that mattered. I didn't know what they meant — and yet something in me did. Every corner felt like a word in a language I'd forgotten I could read.",
    textRu:
      "Даже днём Вейльмор после дождя казался приглушённым и словно позолоченным. Мокрый камень, алые фонари, всё ещё горящие на фоне серого неба, и одни и те же четыре герба, высеченные над каждой дверью, которая хоть что-то значила. Я не знал, что они означают, — и всё же что-то во мне знало. Каждый поворот был словом на языке, который я, оказывается, так и не разучился читать.",
    nextSceneId: "hall_intro",
  },

  // ---------- SCENE 4 — Academy hall + the twins ----------
  {
    id: "hall_intro",
    background: "hall",
    speaker: "narrator",
    text: 'The academy swallowed the noise of the morning: tall windows, dark wood, students in the same uniform I\'d pulled on an hour before. A clerk handed me a schedule, a locker number, and a pass without once meeting my eyes. "Veilmore remembers its own," she said — and was gone before I could ask what she meant.',
    textRu:
      "Академия поглотила утренний шум: высокие окна, тёмное дерево, ученики в той же форме, что я надел час назад. Служащая протянула мне расписание, номер шкафчика и пропуск, ни разу не взглянув мне в глаза. «Вейльмор помнит своих», — сказала она и исчезла прежде, чем я успел спросить, о чём это она.",
    nextSceneId: "twins_1",
  },
  {
    id: "twins_1",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "New here? Veilmore rarely lets in someone who already looks ready to run.",
    textRu:
      "Новенький? Вейльмор редко впускает того, кто с порога выглядит так, будто уже готов сбежать.",
    nextSceneId: "twins_2",
  },
  {
    id: "twins_2",
    background: "hall",
    speaker: "narrator",
    sprite: ELIAN,
    text: "It was all easy charm — bright, amused, a little too quick. And behind him, a second face: almost the same, and nothing alike. Quieter. Watchful. Still.",
    textRu:
      "Сплошное лёгкое обаяние — яркое, насмешливое, чуть слишком быстрое. А за его плечом — второе лицо: почти то же самое и совершенно другое. Тише. Внимательнее. Неподвижнее.",
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
    text: "What? I'm only helping him settle in.",
    textRu: "Что? Я всего лишь помогаю ему освоиться.",
    choices: [
      {
        id: "c2_banter",
        text: "Is that what you're calling it?",
        textRu: "Это теперь так называется?",
        nextSceneId: "twins_banter",
        effect: { twinsScore: 1, boldScore: 1 },
      },
      {
        id: "c2_noel",
        text: "Does he always speak for both of you?",
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
    text: "See? He gets it. Around here we call a lot of things by names they don't deserve. You'll fit right in.",
    textRu:
      "Видишь? Он понимает. Здесь многим вещам дают имена, которых они не заслуживают. Ты отлично впишешься.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_noel",
    background: "hall",
    speaker: "noel",
    sprite: NOEL,
    text: "Not always. Only when it matters that someone is actually listening.",
    textRu: "Не всегда. Только когда важно, чтобы кто-то и вправду слушал.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_cold",
    background: "hall",
    speaker: "elian",
    sprite: ELIAN,
    text: "Cold. I like that. Veilmore will either love you or bury you — usually both.",
    textRu:
      "Холодно. Мне нравится. Вейльмор либо полюбит тебя, либо похоронит — обычно и то, и другое.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_after",
    background: "hall",
    speaker: "narrator",
    text: "Elian Vern. Noel Vern. They drifted back into the crowd, and the morning felt a little less solid than before.",
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
    text: "So you really don't remember.",
    textRu: "Значит, ты и правда не помнишь.",
    nextSceneId: "kai_5",
  },
  {
    id: "kai_5",
    background: "hall",
    speaker: "hero",
    sprite: KAI,
    text: "I remember a garden. And a boy who kept pretending he wasn't afraid.",
    textRu:
      "Я помню сад. И мальчишку, который всё время делал вид, что ему не страшно.",
    nextSceneId: "kai_6",
  },
  {
    id: "kai_6",
    background: "hall",
    speaker: "kai",
    sprite: KAI_ANNOYED,
    text: "Then you remember enough to keep your distance from him.",
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
        text: "Why would you say that?",
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
    text: "Because the last time you were here, something happened. And everyone decided it would be easier if you simply forgot it.",
    textRu:
      "Потому что в прошлый раз, когда ты был здесь, кое-что случилось. И все решили, что будет проще, если ты просто это забудешь.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_hide",
    background: "hall",
    speaker: "kai",
    sprite: KAI_ANNOYED,
    text: "Everyone hides here. The ones who swear they don't are the first to disappear.",
    textRu:
      "Здесь прячутся все. А те, кто клянётся, что не прячется, исчезают первыми.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_after",
    background: "hall",
    speaker: "narrator",
    sprite: KAI,
    text: "Kai Astor. The name arrived with a warmth I hadn't expected — and a cold that followed close behind it. He didn't smile. He looked like someone bracing a door he had hoped would stay shut.",
    textRu:
      "Кай Астор. Это имя пришло с теплом, которого я не ждал, — и с холодом, что тут же последовал за ним. Он не улыбался. Он был похож на того, кто держит спиной дверь, которую надеялся оставить закрытой.",
    nextSceneId: "locker",
  },

  // ---------- SCENE 6 — The first scarlet letter ----------
  {
    id: "locker",
    background: "lockers",
    speaker: "narrator",
    text: "The locker corridor was almost empty. Mine opened with a dry click — bare, the way a first-day locker should be. And yet something was waiting inside: an envelope. Old paper, a scarlet wax seal, still unbroken. My first day — and someone already knew my locker, my schedule, my name. I broke the seal. Inside, a single line, pressed too hard into the paper:",
    textRu:
      "Коридор со шкафчиками был почти пуст. Мой открылся с сухим щелчком — пустой, каким и положено быть шкафчику в первый день. И всё же внутри что-то ждало: конверт. Старая бумага, алая восковая печать — ещё целая. Мой первый день — а кто-то уже знал мой шкафчик, моё расписание, моё имя. Я сломал печать. Внутри — единственная строка, вдавленная в бумагу слишком сильно:",
    nextSceneId: "letter_2",
  },
  {
    id: "letter_2",
    background: "cgletter",
    speaker: "narrator",
    text: "“Your name was already here. Ask why it was erased.”",
    textRu: "«Твоё имя уже было здесь. Спроси, почему его стёрли».",
    nextSceneId: "letter_3",
  },
  {
    id: "letter_3",
    background: "cgletter",
    speaker: "narrator",
    text: "The academy stopped feeling like a place I had walked into. It felt like a place that had been waiting for me.",
    textRu:
      "Академия перестала быть местом, в которое я просто вошёл. Она стала местом, которое меня ждало.",
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
    text: "Kai's voice, right at my back — his eyes fixed on the seal, whatever calm he'd been holding on to gone.",
    textRu:
      "Голос Кая — прямо за спиной, взгляд прикован к печати, и от всего его спокойствия не осталось и следа.",
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
    textRu: "Значит, свою первую ошибку ты сегодня уже совершил.",
    nextSceneId: "chapter_end",
  },
  {
    id: "chapter_end",
    background: "lockers",
    speaker: "narrator",
    text: "The scarlet light in the corridor seemed to dim. Somewhere far below the city, something old turned over in its sleep.",
    textRu:
      "Алый свет в коридоре словно померк. Где-то глубоко под городом что-то древнее повернулось во сне.",
  },
];
