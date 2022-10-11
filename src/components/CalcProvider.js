import { createContext, useState } from "react";

export const CalcContext = createContext();
const CalcProvider = ({ children }) => {
  const [calculations, setCalculations] = useState({
    sign: "",
    number: 0,
    result: 0,
  });

  const providerValue = {
    calculations,
    setCalculations,
  };

  return <CalcContext.Provider>{children}</CalcContext.Provider>;
};
export default CalcProvider;
