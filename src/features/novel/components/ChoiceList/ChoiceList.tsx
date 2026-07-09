import type { Choice } from "../../types/novelTypes";
import type { Lang } from "../../../i18n/strings";
import "./ChoiceList.css";

type ChoiceListProps = {
  choices: Choice[];
  onSelectChoice: (choice: Choice) => void;
  language: Lang;
};

function ChoiceList({ choices, onSelectChoice, language }: ChoiceListProps) {
  return (
    <div className="choice-list">
      {choices.map((choice) => (
        <button
          key={choice.id}
          className="choice-button"
          onClick={() => onSelectChoice(choice)}
        >
          {language === "ru" ? choice.textRu ?? choice.text : choice.text}
        </button>
      ))}
    </div>
  );
}

export default ChoiceList;