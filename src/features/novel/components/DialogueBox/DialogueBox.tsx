import "./DialogueBox.css";

type DialogueBoxProps = {
  speakerName: string;
  text: string;
  onNext?: () => void;
  showNextButton: boolean;
};

function DialogueBox({
  speakerName,
  text,
  onNext,
  showNextButton,
}: DialogueBoxProps) {
  return (
    <section className="dialogue-box">
      <p className="speaker-name">{speakerName}</p>
      <p className="dialogue-text">{text}</p>

      {showNextButton && (
        <button className="next-button" onClick={onNext}>
          Далее
        </button>
      )}
    </section>
  );
}

export default DialogueBox;