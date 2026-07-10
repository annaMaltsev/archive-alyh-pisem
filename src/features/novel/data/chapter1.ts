import type { Scene } from "../types/novelTypes";

// ============================================================
// CHAPTER 1 - "The First Day in the City" / «Первый день в городе»
// text   - английский (по умолчанию)
// textRu - русский (показывается, если выбран русский язык)
// Продвижение - кликом в любом месте экрана (см. GamePage).
// ============================================================

// Пути к спрайтам персонажей (прозрачные PNG). Меняешь тут - меняется везде.
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
    text: "They took me away from this city when I was a child. I remember the black earth, the huge chain on the gates, the wet flagstone path, the lanterns along the road, and the garden behind a high fence. Now I stand here alone, my parents gone. And all they left me is a name - Leonard Veil - and this city they never spoke of. I'm here in Veilmore not for answers. I simply have nowhere else to be.",
    textRu:
      "Меня увезли из этого города ещё ребёнком. Я запомнил чёрную землю, огромную цепь на воротах, мокрую, мощённую плитами дорожку, фонари вдоль дороги и сад за высокой оградой. Теперь я стою здесь один, уже без родителей. И всё, что они мне оставили, - это имя, Леонард Вейл, и этот город, о котором никогда не говорили. Я здесь, в Вейльморе, не за ответами. Мне просто больше негде быть.",
    nextSceneId: "transition_1",
  },

  // ---------- TRANSITION ----------
  {
    id: "transition_1",
    background: "room",
    speaker: "narrator",
    text: "Raindrops slide down the tall windows, and through them the room fills with the red light of dawn.",
    textRu:
      "Капли дождя стекают по высоким окнам, и сквозь них комната наполняется красным светом рассвета.",
    nextSceneId: "morning_1",
  },

  // ---------- SCENE 1 - Morning at Leonard's ----------
  {
    id: "morning_1",
    background: "room",
    speaker: "narrator",
    text: "For the first minute after waking, I don't know where I am. Then I notice the school uniform folded neatly over the back of the chair, the shelves of someone else's books - and I remember. This room was prepared long before I ever appeared, and that thought is a bleak one. I'm in Veilmore. It's true.",
    textRu:
      "Первую минуту пробуждения я не понимаю, где нахожусь. Затем замечаю на спинке стула аккуратно сложенную школьную форму, чужие полки с книгами - и вспоминаю. Комнату подготовили задолго до моего появления, и от этого становится тоскливо. Я в Вейльморе. Это правда.",
    nextSceneId: "kitchen_intro",
  },

  // ---------- SCENE 2 - Leonard: cold care ----------
  {
    id: "kitchen_intro",
    background: "kitchen",
    speaker: "narrator",
    text: "From the next room comes a low, even voice - the voice of a man who has long been awake.",
    textRu: "Из соседней комнаты доносится низкий и ровный голос - голос человека, который давно не спит.",
    nextSceneId: "leonard_1",
  },
  {
    id: "leonard_1",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Your documents are on the table. The uniform should fit. If it doesn't, tell me after classes.",
    textRu:
      "Документы на столе. Форма должна подойти. Если нет - скажешь после занятий.",
    nextSceneId: "leonard_2",
  },
  {
    id: "leonard_2",
    background: "kitchen",
    speaker: "narrator",
    text: "I sat down at the desk, where tea and toast stood waiting. I miss the warmth mornings used to have.",
    textRu:
      "Я сел за письменный стол, где стоят чай и тосты. Мне не хватает привычного тепла по утрам.",
    nextSceneId: "hero_ask",
  },
  {
    id: "hero_ask",
    background: "kitchen",
    speaker: "hero",
    sprite: LEONARD,
    text: "How long ago was this room prepared?",
    textRu: "Как давно подготовлена эта комната?",
    nextSceneId: "leonard_3",
  },
  {
    id: "leonard_3",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Your parents left very precise instructions.",
    textRu: "Твои родители оставили очень точные указания.",
    choices: [
      {
        id: "c1_soft",
        text: "All right, thank you. I'll try not to get in the way.",
        textRu: "Хорошо, спасибо. Постараюсь не мешать.",
        nextSceneId: "leonard_soft",
        effect: { softScore: 1, leonardScore: 1 },
      },
      {
        id: "c1_bold",
        text: "You say that as if I wanted this.",
        textRu: "Вы говорите так, будто я хотел этого.",
        nextSceneId: "leonard_bold",
        effect: { boldScore: 1 },
      },
      {
        id: "c1_probe",
        text: "What do you know about me?",
        textRu: "Что вам обо мне известно?",
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
    text: "No. You didn't want it. Neither did I. We're both here because someone else decided for us - so let's at least be efficient about it.",
    textRu:
      "Нет. Ты не хотел. И я не хотел. Мы оба здесь потому, что за нас решил кто-то другой, - так давай хотя бы обойдёмся без лишней возни.",
    nextSceneId: "leonard_after",
  },
  {
    id: "leonard_probe",
    background: "kitchen",
    speaker: "leonard",
    sprite: LEONARD,
    text: "That they loved you more than anything in this world. We both know your parents had all but lost their trust in this city. But learn to ask questions - and then, perhaps, we'll get along.",
    textRu:
      "Что тебя любили больше всего на свете. Мы оба знаем, что твои родители почти потеряли доверие к этому городу. Но научись задавать вопросы - и тогда мы, возможно, поладим.",
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

  // ---------- SCENE 3 - Road to the academy ----------
  {
    id: "street_1",
    background: "street",
    speaker: "narrator",
    text: "Even by day, after the rain, Veilmore seems quiet, sombre, and almost gilded. Flagstone walkways, lanterns still burning, and four crests above every door. I don't know what these crests mean - but something in me does. Every turn is a word in a language I somehow never unlearned to read.",
    textRu:
      "Даже днём после дождя Вейльмор кажется тихим, мрачным и словно позолоченным. Мощённые плиткой дорожки, всё ещё горящие фонари и четыре герба над каждой дверью. Я не знаю, что означают эти гербы, - но что-то во мне знает. Каждый поворот - слово на языке, который я, оказывается, так и не разучился читать.",
    nextSceneId: "hall_intro",
  },

  // ---------- SCENE 4 - Academy hall + the twins ----------
  {
    id: "hall_intro",
    background: "hall",
    speaker: "narrator",
    text: 'The academy is quieter still. Tall windows framed in dark wood, students in the same uniform I put on an hour ago. A clerk handed me my schedule, a key with my locker number, and a pass, never meeting my eyes. "Veilmore remembers its own," she said - and vanished while I was still studying the schedule. I never got to ask her what it meant.',
    textRu:
      "В Академии ещё тише. Высокие окна из тёмного дерева, ученики в той же форме, что я надел час назад. Служащая дала мне в руки расписание, ключ с номером шкафчика и пропуск, не взглянув мне в глаза. «Вейльмор помнит своих», - сказала она и исчезла, пока я изучал расписание. Я не успел её спросить, что это значит.",
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
    text: "He's all easy charm - bright, teasing, a little too quick. And behind him stands another boy with exactly the same face and an entirely different air: quiet, watchful, motionless.",
    textRu:
      "В нём - одно сплошное обаяние: яркий, насмешливый, чуть слишком быстрый. А за его спиной стоит второй - с точно таким же лицом и совершенно другим взглядом: тихий, внимательный, неподвижный.",
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
    text: "Cold. I like that. Veilmore will either love you or bury you - usually both.",
    textRu:
      "Холодно. Мне нравится. Вейльмор либо полюбит тебя, либо похоронит - обычно и то, и другое.",
    nextSceneId: "twins_after",
  },
  {
    id: "twins_after",
    background: "hall",
    speaker: "narrator",
    text: "Elian and Noel Vern. They left without a sound, and the meeting left an uneasy trace behind. The morning grew heavier still.",
    textRu:
      "Элиан и Ноэль Верн. Они бесшумно ушли, оставив осадок от встречи. Утро стало ещё тяжелее.",
    nextSceneId: "kai_1",
  },

  // ---------- SCENE 5 - Kai ----------
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
        text: "I'm not going to follow your advice.",
        textRu: "Я не собираюсь следовать твоему совету.",
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
    textRu: "От всего этого. И от меня - больше всего.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_why",
    background: "hall",
    speaker: "kai",
    sprite: KAI,
    text: "Because the last time you were here, something happened. And everyone decided it would be easier if you simply forgot it.",
    textRu:
      "Потому что в прошлый раз, когда ты был здесь, кое-что случилось. И все решили, что будет проще, если ты забудешь.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_hide",
    background: "hall",
    speaker: "kai",
    sprite: KAI_ANNOYED,
    text: "Suit yourself. Everyone here says that at first. They're also the first to disappear.",
    textRu:
      "Твоё право. Здесь все так говорят поначалу. И исчезают - первыми.",
    nextSceneId: "kai_after",
  },
  {
    id: "kai_after",
    background: "hall",
    speaker: "narrator",
    sprite: KAI,
    text: "Kai Astor. The name carried a fleeting, unexpected warmth - and drowned it at once in grave-cold. He wasn't smiling. Kai stood frozen, like a man holding a door shut with his back with all his strength, desperately hoping it would never open again.",
    textRu:
      "Кай Астор. Это имя принесло с собой мимолётное, нежданное тепло - и тут же обдало могильным холодом. Он не улыбался. Кай застыл, напоминая человека, который изо всех сил удерживает спиной дверь, отчаянно надеясь, что она никогда больше не откроется.",
    nextSceneId: "locker",
  },

  // ---------- SCENE 6 - The first scarlet letter ----------
  {
    id: "locker",
    background: "lockers",
    speaker: "narrator",
    text: "The locker corridor was nearly empty. My lock gave way with a dry, muffled click - inside, bare and clean, just as it should be on the first day of classes. And yet on the bottom shelf something was waiting for me: a thick envelope. Paper yellowed with age, and an intact crimson wax seal without a single crack. It was my very first day within these walls, yet someone had already known, unerringly, which locker would be mine. Breaking the dry wax, I drew out a sheet. On it, just one line, pressed into the paper with frightening force:",
    textRu:
      "В коридоре со шкафчиками почти нет людей. Мой замок поддался с сухим, глухим щелчком - внутри было пусто и чисто, как и полагается в первый день занятий. И всё же на нижней полке меня кое-что ждало: плотный конверт. Пожелтевшая от времени бумага и целая багровая восковая печать - без единой трещины. Шёл мой самый первый день в этих стенах, но кто-то уже безошибочно знал, какой из шкафчиков будет моим. Ломая сухой воск, я вытащил листок. Внутри оказалась всего одна строка, вдавленная в бумагу с пугающей силой:",
    nextSceneId: "letter_2",
  },
  {
    id: "letter_2",
    background: "cgletter",
    speaker: "narrator",
    text: "“Your name was already written here, long before you arrived. Ask why it was erased.”",
    textRu: "«Твоё имя уже значилось здесь - задолго до твоего приезда. Спроси, почему его стёрли».",
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

  // ---------- SCENE 7 - Final hook ----------
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
    text: "Kai's voice, right at my back - his eyes fixed on the seal, whatever calm he'd been holding on to gone.",
    textRu:
      "Голос Кая - прямо за моей спиной. Взгляд - не на меня, на печать. И от его спокойствия не осталось и следа.",
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
    text: "It seemed to me the light in the corridor had grown dimmer. Somewhere deep beneath the city, something ancient turned over in its sleep.",
    textRu:
      "Мне показалось, что свет в коридоре стал тусклее. Где-то глубоко под городом что-то древнее повернулось во сне.",
  },
];
