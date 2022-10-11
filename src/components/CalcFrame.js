//It is the frame for the children of the Button components.

import "../Styles/CalcFrame.css";
const CalcFrame = ({ children }) => {
  return <div className="calcFrame">{children}</div>;
};

export default CalcFrame;
