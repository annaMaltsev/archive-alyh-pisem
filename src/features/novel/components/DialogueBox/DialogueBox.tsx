import "./DialogueBox.css";

type DialogueBoxProps = {
  speakerName: string;
  text: string;
  showNextButton: boolean; // показывать ли подсказку «клик, чтобы продолжить»
};

function DialogueBox({ speakerName, text, showNextButton }: DialogueBoxProps) {
  return (
    <section className="dialogue-box">
      {/* Имя показываем только если оно есть (у рассказчика — пустое) */}
      {speakerName && <p className="speaker-name">{speakerName}</p>}
      <p className="dialogue-text">{text}</p>

      {/* Продвижение теперь по клику в любом месте экрана (см. GamePage) — это лишь подсказка */}
      {showNextButton && <span className="next-hint">click to continue ▸</span>}
    </section>
  );
}

export default DialogueBox;
