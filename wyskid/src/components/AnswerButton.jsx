import { useState } from "react";

export default function AnswerButton({ text, ans, choice, setChoice, value }) {
  var color = "#395E59";
  if (value === choice.selectedOption && ans !== text) {
    color = "#d60202";
  }
  if (ans === text && choice.selectedOption !== "-1") color = "#95AB3C";

  function onSelect() {
    setChoice((prevChoice) => {
      return {
        ...prevChoice,
        selectedOption: value,
        selectedOptionText: text,
      };
    });
  }

  return (
    <button
      style={{ backgroundColor: `${color}` }}
      onClick={onSelect}
      className={`w-2/5 h-3/4 rounded-lg bg-[#395E59]`}
    >
      {text}
    </button>
  );
}
