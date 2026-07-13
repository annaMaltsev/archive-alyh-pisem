import type { Scene } from "../types/novelTypes";

// ============================================================
// CHAPTER 2 — "The Garden Beyond the Fence" / «Сад за оградой»
// Идёт сразу после гл.1. text — англ., textRu — рус.
// НЕ раскрываем: что ГГ — Вейльмор, вину Виктора, Лазарей, вину близнецов.
// ============================================================

const KAI = "/images/characters/kai-aster/kai-neutral.png";
const KAI_WORRIED = "/images/characters/kai-aster/kai-worried.png";
const KAI_ANNOYED = "/images/characters/kai-aster/kai-annoyed.png";
const LEONARD = "/images/characters/leonard/leonard-neutral.png";
const LEONARD_ANNOYED = "/images/characters/leonard/leonard-annoyed.png";
const ELIAN = "/images/characters/vern-twins/ellian-1.png";
const ELIAN_2 = "/images/characters/vern-twins/ellian-2.png";
const NOEL = "/images/characters/vern-twins/noel-1.png";
const NOEL_2 = "/images/characters/vern-twins/noel-2.png";

export const chapter2Scenes: Scene[] = [
  // ---------- BLOCK 1 — The letter again ----------
  {
    id: "ch2_open",
    background: "lockers",
    speaker: "narrator",
    text: "I hadn't slept. The words had followed me out of the corridor and into the night, and by morning I was back at the lockers before the first bell. I took the envelope out again — and this time I turned it over. On the back, so faint I almost missed it, someone had drawn a garden: a high fence, a gate, a single tree. I knew that shape. I had been remembering it my whole life.",
    textRu:
      "Я не спал. Слова из письма вышли за мной из коридора в ночь, и к утру я снова стоял у шкафчиков ещё до первого звонка. Я опять достал конверт — и в этот раз перевернул его. На обороте, так слабо, что я едва не проглядел, кто-то нарисовал сад: высокая ограда, ворота, одинокое дерево. Я знал эти очертания. Я вспоминал их всю свою жизнь.",
    nextSceneId: "ch2_reread",
  },
  {
    id: "ch2_reread",
    background: "cgletter",
    speaker: "narrator",
    text: "“The garden remembers your name. You do not. Trust no one who wears a crest on their chest.”",
    textRu: "«Сад помнит твоё имя. А ты — нет. Не верь тем, кто носит гербы на груди».",
    nextSceneId: "ch2_kai_appears",
  },
  {
    id: "ch2_kai_appears",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "You're still carrying it.",
    textRu: "Ты всё ещё носишь это с собой.",
    nextSceneId: "ch2_kai_2",
  },
  {
    id: "ch2_kai_2",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "Put it away. Not here — not where everyone can see.",
    textRu: "Убери. Не здесь — не там, где все видят.",
    nextSceneId: "ch2_fork",
  },

  // ---------- BLOCK 2 — First fork ----------
  {
    id: "ch2_fork",
    background: "lockers",
    speaker: "narrator",
    sprite: KAI_WORRIED,
    text: "He kept glancing past my shoulder, the way you watch a door you expect to open.",
    textRu:
      "Он то и дело косился мне за плечо — так смотрят на дверь, которая вот-вот откроется.",
    choices: [
      {
        id: "ch2_c1_kai",
        text: "Then tell me what it means.",
        textRu: "Тогда объясни, что это значит.",
        nextSceneId: "ch2_kai_show",
        effect: { kaiScore: 1, softScore: 1 },
      },
      {
        id: "ch2_c1_twins",
        text: "Noel reads old seals. I'll take it to the twins.",
        textRu: "Ноэль разбирается в старых печатях. Отнесу близнецам.",
        nextSceneId: "ch2_twins_intro",
        effect: { twinsScore: 1, boldScore: 1 },
      },
      {
        id: "ch2_c1_alone",
        text: "(Say nothing. I'll find out on my own.)",
        textRu: "(Промолчать. Разберусь сам.)",
        nextSceneId: "ch2_alone",
        effect: { boldScore: 1 },
      },
    ],
  },
  {
    id: "ch2_kai_show",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "I can't. I won't. Just — stay away from anyone who sends letters like this. Please.",
    textRu:
      "Не могу. И не стану. Только… держись подальше от тех, кто шлёт такие письма. Прошу.",
    nextSceneId: "ch2_twins_intro",
  },
  {
    id: "ch2_alone",
    background: "lockers",
    speaker: "narrator",
    text: "I slid the letter into my pocket. I would find the sender myself — no favours, no debts. I made it three steps before a bright voice caught me from the side, far too pleased to see me.",
    textRu:
      "Я сунул письмо в карман. Отправителя найду сам — без одолжений, без долгов. Я успел сделать три шага, прежде чем сбоку меня поймал звонкий голос, слишком уж довольный встречей.",
    nextSceneId: "ch2_twins_intro",
  },

  // ---------- BLOCK 3–4 — The twins ----------
  {
    id: "ch2_twins_intro",
    background: "lockers",
    speaker: "elian",
    sprite: ELIAN,
    text: "Astor, you look like someone died. Family tradition again?",
    textRu: "Астор, у тебя такой вид, будто кто-то умер. Опять семейная традиция?",
    nextSceneId: "ch2_kai_snap",
  },
  {
    id: "ch2_kai_snap",
    background: "lockers",
    speaker: "kai",
    sprite: KAI_ANNOYED,
    text: "Back off, Vern.",
    textRu: "Отойди, Верн.",
    nextSceneId: "ch2_elian_2",
  },
  {
    id: "ch2_elian_2",
    background: "lockers",
    speaker: "elian",
    sprite: ELIAN_2,
    text: "So rude. I only came to meet the season's new school drama.",
    textRu: "Как грубо. Я всего лишь хотел познакомиться с новой школьной драмой сезона.",
    nextSceneId: "ch2_noel_intro",
  },
  {
    id: "ch2_noel_intro",
    background: "lockers",
    speaker: "narrator",
    sprite: NOEL,
    text: "The other twin had said nothing yet. He stood half a step behind his brother, eyes fixed on the letter, reading it like a page.",
    textRu:
      "Второй близнец пока молчал. Он стоял на полшага позади брата, не отрывая глаз от письма, — читал его, как страницу.",
    nextSceneId: "ch2_noel_seal",
  },
  {
    id: "ch2_noel_seal",
    background: "lockers",
    speaker: "noel",
    sprite: NOEL,
    text: "The seal is old.",
    textRu: "Печать старая.",
    nextSceneId: "ch2_noel_q",
  },
  {
    id: "ch2_noel_q",
    background: "lockers",
    speaker: "hero",
    sprite: NOEL,
    text: "You know seals?",
    textRu: "Ты разбираешься в печатях?",
    nextSceneId: "ch2_noel_a",
  },
  {
    id: "ch2_noel_a",
    background: "lockers",
    speaker: "noel",
    sprite: NOEL,
    text: "Forgeries.",
    textRu: "В подделках.",
    nextSceneId: "ch2_twins_choice",
  },
  {
    id: "ch2_twins_choice",
    background: "lockers",
    speaker: "narrator",
    sprite: ELIAN,
    text: "Elian grinned. Noel waited. The letter sat between us like a small, patient animal.",
    textRu:
      "Элиан ухмыльнулся. Ноэль ждал. Письмо лежало между нами, точно маленький терпеливый зверёк.",
    choices: [
      {
        id: "ch2_c2_noel",
        text: "Old how? What can you read from it?",
        textRu: "Старая — это как? Что по ней видно?",
        nextSceneId: "ch2_noel_explain",
        effect: { twinsScore: 1, softScore: 1 },
      },
      {
        id: "ch2_c2_elian",
        text: "And what would a Vern know about forgery?",
        textRu: "А что Верн понимает в подделках?",
        nextSceneId: "ch2_elian_banter",
        effect: { twinsScore: 1, boldScore: 1 },
      },
      {
        id: "ch2_c2_guard",
        text: "(Keep the letter close and say nothing.)",
        textRu: "(Держать письмо при себе и промолчать.)",
        nextSceneId: "ch2_guarded",
        effect: { boldScore: 1 },
      },
    ],
  },
  {
    id: "ch2_noel_explain",
    background: "lockers",
    speaker: "noel",
    sprite: NOEL_2,
    text: "This wax stopped being made decades ago. Someone wanted the letter to look older than the school itself. Forgers always overreach — they fake the age, not just the name.",
    textRu:
      "Такой воск перестали делать десятки лет назад. Кто-то хотел, чтобы письмо выглядело старше самой академии. Подделыватели всегда перебарщивают — подделывают возраст, а не только имя.",
    nextSceneId: "ch2_cam_intro",
  },
  {
    id: "ch2_elian_banter",
    background: "lockers",
    speaker: "elian",
    sprite: ELIAN_2,
    text: "Everything, darling. Forgery runs in Vern blood the way brooding runs in Astor's. We keep the archive — so we know exactly how to lie to it.",
    textRu:
      "Всё что угодно, дорогой. Подделка у Вернов в крови — как у Асторов их вечная мрачность. Мы храним архив — значит, точно знаем, как ему солгать.",
    nextSceneId: "ch2_cam_intro",
  },
  {
    id: "ch2_guarded",
    background: "lockers",
    speaker: "narrator",
    sprite: NOEL,
    text: "I closed my hand around the letter. But Noel was already thinking out loud, and there was no un-hearing him.",
    textRu:
      "Я сжал письмо в кулаке. Но Ноэль уже думал вслух, и не услышать его было нельзя.",
    nextSceneId: "ch2_cam_intro",
  },

  // ---------- BLOCK 5 — The missing seven minutes ----------
  {
    id: "ch2_cam_intro",
    background: "archive",
    speaker: "noel",
    sprite: NOEL,
    text: "If someone put that in your locker, the corridor camera watched them do it. Come on.",
    textRu:
      "Если кто-то подложил это в твой шкафчик, коридорная камера всё видела. Идём.",
    nextSceneId: "ch2_cam_2",
  },
  {
    id: "ch2_cam_2",
    background: "archive",
    speaker: "narrator",
    sprite: NOEL,
    text: "Noel pulled the feed up on a battered terminal by the archive door. The footage wasn't missing. It had been cut — a clean slice taken out of the day. Between 12:14 and 12:21, there was simply nothing at all.",
    textRu:
      "Ноэль вывел запись на потрёпанном терминале у двери архива. Запись не пропала. Её вырезали — чистый ломоть, выхваченный из дня. Между 12:14 и 12:21 не было попросту ничего.",
    nextSceneId: "ch2_cam_d1",
  },
  {
    id: "ch2_cam_d1",
    background: "archive",
    speaker: "noel",
    sprite: NOEL_2,
    text: "Someone didn't hide from the camera.",
    textRu: "Кто-то не прятался от камеры.",
    nextSceneId: "ch2_cam_hero",
  },
  {
    id: "ch2_cam_hero",
    background: "archive",
    speaker: "hero",
    sprite: NOEL_2,
    text: "Then what did they do?",
    textRu: "Тогда что он сделал?",
    nextSceneId: "ch2_cam_noel2",
  },
  {
    id: "ch2_cam_noel2",
    background: "archive",
    speaker: "noel",
    sprite: NOEL_2,
    text: "They deleted a piece of time.",
    textRu: "Он удалил кусок времени.",
    nextSceneId: "ch2_cam_elian",
  },
  {
    id: "ch2_cam_elian",
    background: "archive",
    speaker: "elian",
    sprite: ELIAN,
    text: "Romantic, isn't it? Even the past here knows how to disappear on schedule.",
    textRu: "Романтично, правда? Даже прошлое здесь умеет исчезать по расписанию.",
    nextSceneId: "ch2_fact",
  },
  {
    id: "ch2_fact",
    background: "archive",
    speaker: "narrator",
    fact: true,
    text: "A deleted file is not a vanished one. Systems remember more than people do — the time of access, the device's ID, the user's name, a line in the event log. You can cut a piece of time out of the footage. You cannot cut out the record that someone did.",
    textRu:
      "Удалённый файл — не значит исчезнувший. Система помнит больше, чем люди: время доступа, ID устройства, имя пользователя, строку в журнале событий. Можно вырезать кусок времени из записи. Нельзя вырезать саму запись о том, что это сделали.",
    nextSceneId: "ch2_garden_intro",
  },

  // ---------- BLOCK 6 — Kai and the old garden ----------
  {
    id: "ch2_garden_intro",
    background: "corridor",
    speaker: "narrator",
    sprite: KAI,
    text: "Kai was waiting where the corridor bent toward the stairs, as if he had known I'd come looking. He always seemed to know.",
    textRu:
      "Кай ждал там, где коридор сворачивал к лестнице, — будто знал, что я приду его искать. Он всегда как будто знал.",
    nextSceneId: "ch2_garden_1",
  },
  {
    id: "ch2_garden_1",
    background: "corridor",
    speaker: "hero",
    sprite: KAI,
    text: "Why did you flinch at the word 'garden'?",
    textRu: "Почему ты вздрогнул от слова «сад»?",
    nextSceneId: "ch2_garden_2",
  },
  {
    id: "ch2_garden_2",
    background: "corridor",
    speaker: "kai",
    sprite: KAI,
    text: "We were children.",
    textRu: "Мы были детьми.",
    nextSceneId: "ch2_garden_3",
  },
  {
    id: "ch2_garden_3",
    background: "corridor",
    speaker: "hero",
    sprite: KAI,
    text: "That isn't an answer.",
    textRu: "Это не ответ.",
    nextSceneId: "ch2_garden_4",
  },
  {
    id: "ch2_garden_4",
    background: "corridor",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "It's the only answer you need right now.",
    textRu: "Это единственный ответ, который тебе сейчас нужен.",
    nextSceneId: "ch2_garden_5",
  },
  {
    id: "ch2_garden_5",
    background: "corridor",
    speaker: "hero",
    sprite: KAI_WORRIED,
    text: "Why?",
    textRu: "Почему?",
    nextSceneId: "ch2_garden_6",
  },
  {
    id: "ch2_garden_6",
    background: "corridor",
    speaker: "kai",
    sprite: KAI_WORRIED,
    text: "Because I remember how our games ended.",
    textRu: "Потому что я помню, чем закончились наши игры.",
    nextSceneId: "ch2_flashback",
  },
  {
    id: "ch2_flashback",
    background: "garden",
    speaker: "narrator",
    text: "For a heartbeat it came back on its own: children's laughter behind a high fence, wet grass, the smell of rain and iron — and a dark-haired boy who stood at the gate and would not come one step closer.",
    textRu:
      "На один удар сердца всё вернулось само: детский смех за высокой оградой, мокрая трава, запах дождя и железа — и темноволосый мальчишка, что стоял у ворот и не делал ни шагу ближе.",
    nextSceneId: "ch2_leo_1",
  },

  // ---------- BLOCK 7 — Leonard sees the seal ----------
  {
    id: "ch2_leo_1",
    background: "apartment",
    speaker: "narrator",
    sprite: LEONARD,
    text: "By evening the rain had returned. I came back to Leonard's, into the smell of cold tea and old paper. He looked up from his desk — and stopped.",
    textRu:
      "К вечеру снова зарядил дождь. Я вернулся к Леонарду — в запах остывшего чая и старой бумаги. Он поднял глаза от стола — и замер.",
    nextSceneId: "ch2_leo_2",
  },
  {
    id: "ch2_leo_2",
    background: "apartment",
    speaker: "leonard",
    sprite: LEONARD,
    text: "There's red wax on your fingers.",
    textRu: "У тебя красный воск на пальцах.",
    nextSceneId: "ch2_leo_3",
  },
  {
    id: "ch2_leo_3",
    background: "apartment",
    speaker: "hero",
    sprite: LEONARD,
    text: "Everyone's found a reason to ask me about that today.",
    textRu: "Сегодня все находят повод спросить меня об этом.",
    nextSceneId: "ch2_leo_4",
  },
  {
    id: "ch2_leo_4",
    background: "apartment",
    speaker: "leonard",
    sprite: LEONARD_ANNOYED,
    text: "Because what you're holding isn't a letter. It's an invitation — to a place people don't come back from unchanged.",
    textRu:
      "Потому что то, что у тебя в руках, — не письмо. Это приглашение. Туда, откуда не возвращаются прежними.",
    nextSceneId: "ch2_leo_choice",
  },
  {
    id: "ch2_leo_choice",
    background: "apartment",
    speaker: "narrator",
    sprite: LEONARD_ANNOYED,
    text: "He held out his hand, palm up. It wasn't a request.",
    textRu: "Он протянул руку ладонью вверх. Это была не просьба.",
    choices: [
      {
        id: "ch2_c3_give",
        text: "Then take it.",
        textRu: "Тогда возьмите.",
        nextSceneId: "ch2_leo_give",
        effect: { leonardScore: 1, softScore: 1 },
      },
      {
        id: "ch2_c3_keep",
        text: "It's mine. I'm keeping it.",
        textRu: "Оно моё. Оставлю себе.",
        nextSceneId: "ch2_leo_keep",
        effect: { boldScore: 1 },
      },
      {
        id: "ch2_c3_lie",
        text: "I already threw it away.",
        textRu: "Я его уже выбросил.",
        nextSceneId: "ch2_leo_lie",
        effect: { softScore: 1 },
      },
    ],
  },
  {
    id: "ch2_leo_give",
    background: "apartment",
    speaker: "leonard",
    sprite: LEONARD,
    text: "Good. Now forget the garden. Some doors were shut for a reason — and kinder people than me shut this one.",
    textRu:
      "Хорошо. А теперь забудь о саде. Некоторые двери закрыли не просто так — и закрывали их люди добрее меня.",
    nextSceneId: "ch2_map_intro",
  },
  {
    id: "ch2_leo_keep",
    background: "apartment",
    speaker: "leonard",
    sprite: LEONARD_ANNOYED,
    text: "Then at least be afraid of it. You owe the people who raised you that much.",
    textRu: "Тогда хотя бы бойся его. Этим ты обязан тем, кто тебя вырастил.",
    nextSceneId: "ch2_map_intro",
  },
  {
    id: "ch2_leo_lie",
    background: "apartment",
    speaker: "narrator",
    sprite: LEONARD,
    text: "His eyes dropped to the red still drying on my fingers. He said nothing. He didn't believe me — and he let the lie stand, which was worse.",
    textRu:
      "Его взгляд упал на красный воск, ещё не высохший у меня на пальцах. Он промолчал. Он мне не поверил — и не стал разбивать ложь, и это было хуже всего.",
    nextSceneId: "ch2_map_intro",
  },

  // ---------- BLOCK 8 — The map & final hook ----------
  {
    id: "ch2_map_intro",
    background: "apartment",
    speaker: "narrator",
    text: "I couldn't sleep. Long after the apartment went dark I searched — a shelf of school histories, a drawer of Leonard's papers I had no right to open — until my fingers found something stiff and yellow, folded flat: an old map of the academy grounds.",
    textRu:
      "Я не мог уснуть. Уже давно в квартире погас свет, а я всё искал — полку со школьными хрониками, ящик с бумагами Леонарда, который не имел права открывать, — пока пальцы не наткнулись на что-то жёсткое и жёлтое, сложенное вчетверо: старую карту академии.",
    nextSceneId: "ch2_map_2",
  },
  {
    id: "ch2_map_2",
    background: "map",
    speaker: "narrator",
    text: "It didn't match the campus I had walked that morning. There were wings that no longer stood — and, past the far wall, a garden the modern plans didn't show at all.",
    textRu:
      "Она не совпадала с тем кампусом, по которому я ходил утром. На ней были крылья, которых больше нет, — а за дальней стеной сад, которого на нынешних планах не было вовсе.",
    nextSceneId: "ch2_map_3",
  },
  {
    id: "ch2_map_3",
    background: "map",
    speaker: "narrator",
    text: "It hadn't simply been closed off. Someone had taken it out of the everyday map of the school on purpose — the way you cut seven minutes out of an afternoon.",
    textRu:
      "Его не просто закрыли. Кто-то нарочно вынул его из повседневной карты академии — так же, как вырезают семь минут из полудня.",
    nextSceneId: "ch2_end",
  },
  {
    id: "ch2_end",
    background: "map",
    speaker: "narrator",
    text: "On the old map the garden had no name. Beside it, pressed hard into the paper in a clerk's blunt hand, stood only two words: DO NOT ADMIT.",
    textRu:
      "На старой карте у сада не было названия. Рядом, грубо вдавленные в бумагу канцелярской рукой, стояли лишь два слова: НЕ ВПУСКАТЬ.",
  },
];
