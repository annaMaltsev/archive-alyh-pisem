import type { Scene } from "../types/novelTypes";

// ============================================================
// CHAPTER 1 — "The First Day in the City" / «Первый день в городе»
// text   — английский (по умолчанию)
// textRu — русский (показывается, если выбран русский язык)
// Продвижение — кликом в любом месте экрана (см. GamePage).
// ============================================================

// Пути к спрайтам персонажей (прозрачные PNG). Меняешь тут — меняется везде.
const LEONARD = "/images/characters/leonard/leonard-neutral.png";
const LEONARD_ANNOYED = "/images/characters/leonard/leonard-annoyed.png";
const ELIAN = "/images/characters/vern-twins/ellian-1.png";
const NOEL = "/images/characters/vern-twins/noel-1.png";
const KAI = "/images/characters/kai-aster/kai-neutral.png";
const KAI_WORRIED = "/images/characters/kai-aster/kai-worried.png"; // только ПОСЛЕ письма
const KAI_ANNOYED = "/images/characters/kai-aster/kai-annoyed.png"; // до письма вместо worried

export const chapter1Scenes: Scene[] = [
  // ---------- PROLOGUE ----------
  {
    id: "prologue_1",
    background: "prologue",
    speaker: "narrator",
    text: "They took me away from this city when I was a child. I remember almost none of it now — only black earth, a heavy chain on the gates, a wet flagstone path, lanterns strung along the road, and a garden behind a high fence. Now my parents are gone, and among the things they left behind I found only a single name — Leonard Veil — and a trail leading back to a city they had never once spoken of. I didn't come to Veilmore for answers. I simply had nowhere else to go.",
    textRu:
      "Меня увезли из этого города ещё ребёнком. Теперь я почти ничего не помню — только чёрную землю, тяжёлую цепь на воротах, мокрую, мощённую плитами дорожку, фонари вдоль дороги и сад за высокой оградой. Родителей больше нет, и среди оставшихся после них вещей я нашёл лишь одно имя — Леонард Вейл — да след, ведущий обратно в этот город, о котором они при жизни не обмолвились ни словом. Я приехал в Вейльмор не за ответами. Мне просто больше некуда было идти.",
    nextSceneId: "transition_1",
  },

  // ---------- TRANSITION ----------
  {
    id: "transition_1",
    background: "room",
    speaker: "narrator",
    text: "Raindrops slid down the tall windows, and through them the room filled with the red light of dawn.",
    textRu:
      "Капли дождя стекали по высоким окнам, и сквозь них комната наполнялась красным светом рассвета.",
    nextSceneId: "morning_1",
  },

  // ---------- SCENE 1 — Morning at Leonard's ----------
  {
    id: "morning_1",
    background: "room",
    speaker: "narrator",
    text: "For the first minute after waking, I didn't know where I was. Then I saw the school uniform folded neatly over the back of the chair, the shelves of someone else's books — and it came back to me. This room had been made ready long before I ever arrived, and there was something bleak in that thought. I was in Veilmore. It was real.",
    textRu:
      "Первую минуту после пробуждения я не понимал, где нахожусь. Потом увидел аккуратно сложенную на спинке стула школьную форму, полки с чужими книгами — и вспомнил. Эту комнату приготовили задолго до того, как я здесь появился, и от этой мысли делалось тоскливо. Я в Вейльморе. И это правда.",
    nextSceneId: "kitchen_intro",
  },

  // ---------- SCENE 2 — Leonard: cold care ----------
  {
    id: "kitchen_intro",
    background: "kitchen",
    speaker: "narrator",
    text: "From the next room came a low, even voice — the voice of a man long since awake.",
    textRu:
      "Из соседней комнаты донёсся низкий, ровный голос — голос человека, что давно уже не спал.",
    nextSceneId: "leonard_1",
  },
  {
    id: "leonard_1",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Your documents are on the table. The uniform should fit. If it doesn't, tell me after classes.",
    textRu:
      "Документы на столе. Форма должна подойти. Если не подойдёт — скажешь после занятий.",
    nextSceneId: "leonard_2",
  },
  {
    id: "leonard_2",
    background: "kitchen",
    speaker: "narrator",
    text: "I sat down at the table, where tea and toast were already waiting. Only the warmth that mornings used to hold was nowhere to be found in this house.",
    textRu:
      "Я сел за стол, где уже ждали чай и тосты. Вот только того тепла, каким прежде бывали утра, в этом доме не было.",
    nextSceneId: "hero_ask",
  },
  {
    id: "hero_ask",
    background: "kitchen",
    speaker: "hero",
    sprite: LEONARD,
    text: "How long ago was this room prepared?",
    textRu: "Как давно приготовили эту комнату?",
    nextSceneId: "leonard_3",
  },
  {
    id: "leonard_3",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Long before you arrived. Your parents saw to every detail in advance — I only carried it out.",
    textRu:
      "Задолго до твоего приезда. Твои родители обо всём распорядились заранее — я лишь исполнил.",
    choices: [
      {
        id: "c1_soft",
        text: "All right. Thank you. I'll try not to get in the way.",
        textRu: "Хорошо. Спасибо. Постараюсь не мешать.",
        nextSceneId: "leonard_soft",
        effect: { softScore: 1, leonardScore: 1 },
      },
      {
        id: "c1_bold",
        text: "You say that as if I wanted any of this.",
        textRu: "Вы говорите так, будто я сам этого хотел.",
        nextSceneId: "leonard_bold",
        effect: { boldScore: 1 },
      },
      {
        id: "c1_probe",
        text: "And what do you know about me?",
        textRu: "А что вам обо мне известно?",
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
    text: "No, you didn't. Neither did I. We're both here because someone else decided for us — so let's at least be efficient about it.",
    textRu:
      "Нет, не хотел. И я не хотел. Мы оба здесь потому, что за нас решил кто-то другой, — так давай хотя бы обойдёмся без лишней возни.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_probe",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "That they loved you more than they trusted this city. Learn to ask sharper questions than that, and we might even get along.",
    textRu:
      "Что любили тебя больше, чем доверяли этому городу. Научись задавать вопросы поострее — и тогда, быть может, поладим.",
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
    text: "Even by day, after the rain, Veilmore looked quiet, sombre, almost gilded. Flagstone walkways, lanterns still burning, and the same four crests above every door that mattered. I didn't know what they meant — and yet something in me did. Every turn felt like a word in a language I had somehow never unlearned to read.",
    textRu:
      "Даже днём, после дождя, Вейльмор казался тихим, сумрачным и словно позолоченным. Мощённые плитами дорожки, всё ещё горящие фонари и одни и те же четыре герба над каждой дверью, что хоть что-то значила. Я не знал, что они означают, — и всё же что-то во мне знало. Каждый поворот был словом на языке, который я, оказывается, так и не разучился читать.",
    nextSceneId: "hall_intro",
  },

  // ---------- SCENE 4 — Academy hall + the twins ----------
  {
    id: "hall_intro",
    background: "hall",
    speaker: "narrator",
    text: 'The academy was quieter still — tall windows framed in dark wood, students in the same uniform I had pulled on an hour before. A clerk handed me my schedule, a key with a locker number, and a pass, never once meeting my eyes. "Veilmore remembers its own," she said — and was gone before I finished reading the schedule. I never got the chance to ask what she meant.',
    textRu:
      "В Академии было ещё тише: высокие окна в тёмном дереве, ученики в той же форме, что я надел час назад. Служащая протянула мне расписание, ключ с номером шкафчика и пропуск, так и не взглянув мне в глаза. «Вейльмор помнит своих», — сказала она и исчезла прежде, чем я дочитал расписание. Спросить, что это значит, я не успел.",
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
    text: "He was all easy charm — bright, teasing, a little too quick. And behind him stood another boy with the very same face and an entirely different air: quiet, watchful, still.",
    textRu:
      "В нём было одно сплошное обаяние: яркий, насмешливый, чуть слишком быстрый. А за его спиной стоял второй — с точно таким же лицом и совсем другим взглядом: тихий, внимательный, неподвижный.",
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
    text: "See? He gets it. Around here, plenty of things go by names they don't deserve. You'll fit right in.",
    textRu:
      "Видишь? Он понимает. Здесь многое зовут именами, которых оно не заслуживает. Ты отлично впишешься.",
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
    text: "Elian and Noel Vern. They slipped away without a sound, and the encounter left an unease behind — the morning felt heavier than before.",
    textRu:
      "Элиан и Ноэль Верн. Они бесшумно ушли, и от встречи осталась смутная тревога — утро сделалось ещё тяжелее.",
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
        text: "You mean yourself?",
        textRu: "Ты про себя?",
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
        text: "I'm not going to take your advice.",
        textRu: "Я не собираюсь слушать твой совет.",
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
      "Потому что в прошлый раз, когда ты был здесь, кое-что случилось. И все решили, что будет проще, если ты просто забудешь.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_hide",
    background: "hall",
    speaker: "kai",
    sprite: KAI_ANNOYED,
    text: "Suit yourself. Everyone here says that at first — and they're the first to disappear.",
    textRu:
      "Твоё право. Здесь все так говорят поначалу — и первыми же исчезают.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_after",
    background: "hall",
    speaker: "narrator",
    sprite: KAI,
    text: "Kai Astor. The name carried a brief, unexpected warmth — and then drowned it in grave-cold. He wasn't smiling. He stood frozen, like someone holding a door shut with his back, straining with all his strength, desperate for it never to open again.",
    textRu:
      "Кай Астор. Это имя принесло с собой мимолётное, нежданное тепло — и тут же обдало могильным холодом. Он не улыбался. Кай застыл, словно человек, что удерживает спиной дверь, напрягаясь изо всех сил и отчаянно надеясь, что она уже никогда не откроется.",
    nextSceneId: "locker",
  },

  // ---------- SCENE 6 — The first scarlet letter ----------
  {
    id: "locker",
    background: "lockers",
    speaker: "narrator",
    text: "The locker corridor was almost empty. My lock gave way with a dry, muffled click — inside it was bare and clean, just as it should be on the first day of classes. And yet on the bottom shelf something was waiting for me: a thick envelope. Paper yellowed with age, and a crimson wax seal without a single crack. It was my very first day within these walls, and still someone had known, without a moment's doubt, which locker would be mine. I broke the dry wax and drew out a single sheet. On it, a few words, pressed into the paper with frightening force:",
    textRu:
      "В коридоре со шкафчиками почти никого не было. Мой замок поддался с сухим, глухим щелчком — внутри было пусто и чисто, как и полагается в первый день занятий. И всё же на нижней полке меня кое-что ждало: плотный конверт. Пожелтевшая от времени бумага и целая багровая восковая печать — без единой трещины. Шёл мой самый первый день в этих стенах, а кто-то уже без тени сомнения знал, какой из шкафчиков станет моим. Я сломал сухой воск и вытащил листок. На нём — несколько слов, вдавленных в бумагу с пугающей силой:",
    nextSceneId: "letter_2",
  },
  {
    id: "letter_2",
    background: "cgletter",
    speaker: "narrator",
    text: "“The garden remembers your name. You do not. Trust no one who wears a crest on their chest.”",
    textRu: "«Сад помнит твоё имя. А ты — нет. Не верь тем, кто носит гербы на груди».",
    nextSceneId: "letter_3",
  },
  {
    id: "letter_3",
    background: "cgletter",
    speaker: "narrator",
    text: "The academy stopped feeling like a place I had walked into. It felt like a place that had been waiting for me.",
    textRu:
      "Академия перестала быть местом, куда я просто вошёл. Теперь это было место, которое меня ждало.",
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
    text: "Kai's voice, right at my back — his eyes not on me but on the seal. Whatever calm he'd been holding on to was gone.",
    textRu:
      "Голос Кая — прямо за моей спиной. Взгляд не на меня — на печать. И от всего его спокойствия не осталось и следа.",
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
    textRu: "Значит, свою первую ошибку сегодня ты уже совершил.",
    nextSceneId: "chapter_end",
  },
  {
    id: "chapter_end",
    background: "lockers",
    speaker: "narrator",
    text: "It seemed to me the scarlet light in the corridor had grown dimmer. Somewhere deep beneath the city, something ancient turned over in its sleep.",
    textRu:
      "Мне показалось, что алый свет в коридоре стал тусклее. Где-то глубоко под городом что-то древнее повернулось во сне.",
  },
];
