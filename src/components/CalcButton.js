//It provides the interactivity for the app

import "../Styles/CalcButton.css";

const getStyleName = (button) => {
  const className = {
    "=": "equal",
    x: "operator",
    "-": "operator",
    "+": "operator",
    "/": "operator",
  };

  return className[button];
};

const CalcButton = ({ input, value, setInput, setOutput }) => {
  const handleButtonClick = () => {
    if (input === "0") {
      return setInput(value);
    } else if (value === "=") {
      setOutput(eval(input));
    } else if (value === "CE") {
      setInput("");
    } else if (value === "C") {
      const RemovalContext = input.slice(0, -1);
      setInput(RemovalContext);
    } else {
      setInput(input + value);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default CalcButton;
