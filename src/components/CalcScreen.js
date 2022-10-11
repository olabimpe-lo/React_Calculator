//It is the component that displays the numbers inputed and calculated values

import "../Styles/CalcScreen.css";
//import { CalcContext } from "./CalcProvider";

const CalcScreen = ({ value }) => {
  //const { calc } = useContext(CalcContext);

  return (
    <div className="calcScreen" mode="single">
      {value}
    </div>
  );
};

export default CalcScreen;
