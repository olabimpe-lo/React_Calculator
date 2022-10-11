//It is the frame holding the children components
import "../Styles/CalcWrapper.css";

const CalcWrapper = ({ children }) => {
  return <div className="calcWrapper">{children}</div>;
};

export default CalcWrapper;
