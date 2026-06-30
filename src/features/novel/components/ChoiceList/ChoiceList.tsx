import type { Choice } from "../../types/novelTypes";
import "./ChoiceList.css";

type ChoiceListProps = {
  choices: Choice[];
  onSelectChoice: (choice: Choice) => void;
};

function ChoiceList({ choices, onSelectChoice }: ChoiceListProps) {
  return (
    <div className="choice-list">
      {choices.map((choice) => (
        <button
          key={choice.id}
          className="choice-button"
          onClick={() => onSelectChoice(choice)}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default ChoiceList;