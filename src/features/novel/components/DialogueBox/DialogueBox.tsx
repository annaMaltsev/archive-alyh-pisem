import "./DialogueBox.css";

type DialogueBoxProps = {
  speakerName: string;
  text: string;
  showNextButton: boolean; // показывать ли подсказку «клик, чтобы продолжить»
  nextHintText: string; // текст подсказки (локализованный)
  eyebrow?: string; // маленькая надпись над текстом (напр. «Факт архива»)
};

function DialogueBox({ speakerName, text, showNextButton, nextHintText, eyebrow }: DialogueBoxProps) {
  return (
    <section className={`dialogue-box${eyebrow ? " dialogue-box--fact" : ""}`}>
      {/* Маленькая золотая надпись сверху (обучающая вставка «Факт архива») */}
      {eyebrow && <p className="dialogue-eyebrow">{eyebrow}</p>}
      {/* Имя показываем только если оно есть (у рассказчика — пустое) */}
      {speakerName && <p className="speaker-name">{speakerName}</p>}
      <p className="dialogue-text">{text}</p>

      {/* Продвижение теперь по клику в любом месте экрана (см. GamePage) — это лишь подсказка */}
      {showNextButton && <span className="next-hint">{nextHintText}</span>}
    </section>
  );
}

export default DialogueBox;
