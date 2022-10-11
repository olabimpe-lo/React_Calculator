//It is the component that displays the numbers inputed and calculated values

import "../Styles/CalcScreen.css";
//import { CalcContext } from "./CalcProvider";

const CalcScreen = ({ value, result }) => {
  //const { calc } = useContext(CalcContext);

  return (
    <div className="calcScreen" mode="single">
      <h3> {value}</h3>

      <h1>{result}</h1>
    </div>
  );
};

export default CalcScreen;
