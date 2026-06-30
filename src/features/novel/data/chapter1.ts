import type { Scene } from "../types/novelTypes";

export const chapter1Scenes: Scene[] = [
  {
    id: "return_1",
    background: "station",
    speaker: "narrator",
    text: "Родителей больше нет. От них остался только старый адрес в Вейльморе — городе, из которого меня увезли ребёнком, — и имя дальнего родственника, к которому я теперь возвращаюсь.",
    nextSceneId: "return_2",
  },
  {
    id: "return_2",
    background: "station",
    speaker: "narrator",
    text: "Алые фонари дрожали на ветру, отражаясь в мокрой брусчатке. Где-то впереди возвышалась Академия Вейльмора.",
    choices: [
      {
        id: "soft_1",
        text: "Я не уверен, что готов вернуться.",
        nextSceneId: "academy_1",
        effect: {
          softScore: 1,
        },
      },
      {
        id: "bold_1",
        text: "Ну что ж, Вейльмор. Посмотрим, кто кого.",
        nextSceneId: "academy_1",
        effect: {
          boldScore: 1,
        },
      },
    ],
  },
  {
    id: "academy_1",
    background: "academy",
    speaker: "narrator",
    text: "Академия встретила меня высокими окнами, тёмным деревом и портретами людей, которые будто следили за каждым шагом.",
    nextSceneId: "kai_1",
  },
  {
    id: "kai_1",
    background: "square",
    speaker: "kai",
    text: "Ты всё-таки вернулся.",
    choices: [
      {
        id: "kai_soft",
        text: "Кай... я скучал.",
        nextSceneId: "kai_soft_answer",
        effect: {
          softScore: 1,
          kaiScore: 1,
        },
      },
      {
        id: "kai_bold",
        text: "Ты мог хотя бы написать.",
        nextSceneId: "kai_bold_answer",
        effect: {
          boldScore: 1,
          kaiScore: 1,
        },
      },
      {
        id: "kai_cold",
        text: "Мы знакомы?",
        nextSceneId: "viktor_hint",
        effect: {
          boldScore: 1,
          viktorScore: 1,
        },
      },
    ],
  },
  {
    id: "kai_soft_answer",
    background: "square",
    speaker: "kai",
    text: "На секунду Кай выглядел так, будто эти слова ударили его сильнее, чем он хотел показать.",
    nextSceneId: "viktor_hint",
  },
  {
    id: "kai_bold_answer",
    background: "square",
    speaker: "kai",
    text: "Кай усмехнулся, но в его взгляде не было веселья. Только усталость и что-то похожее на страх.",
    nextSceneId: "viktor_hint",
  },
  {
    id: "viktor_hint",
    background: "academy",
    speaker: "viktor",
    text: "Вейльмор всегда возвращает тех, кто ему принадлежит.",
    choices: [
      {
        id: "viktor_respect",
        text: "Вы говорите так, будто знаете обо мне больше, чем должны.",
        nextSceneId: "chapter_end",
        effect: {
          boldScore: 1,
          viktorScore: 1,
        },
      },
      {
        id: "viktor_silent",
        text: "Промолчать.",
        nextSceneId: "chapter_end",
        effect: {
          softScore: 1,
        },
      },
    ],
  },
  {
    id: "chapter_end",
    background: "dorm",
    speaker: "narrator",
    text: "Вечером я нашёл на столе письмо с алой печатью. Внутри была только одна фраза: «Ты вспомнишь нас, когда архив откроется».",
  },
];