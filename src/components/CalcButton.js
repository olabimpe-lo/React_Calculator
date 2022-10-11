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

const CalcButton = ({ value }) => {
  const handleButtonClick = () => {
    console.log(value);
  };
  return (
    <button
      onClick={handleButtonClick}
      className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};

export default CalcButton;
