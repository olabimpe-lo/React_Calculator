import React, { useState } from "react";
import CalcWrapper from "./components/CalcWrapper";
import CalcScreen from "./components/CalcScreen";
import CalcButton from "./components/CalcButton";
import CalcFrame from "./components/CalcFrame";
import CalcProvider from "./components/CalcProvider";

const btnValues = [
  ["%", ".", "CE", "C"],
  [1, 2, 3, "x"],
  [4, 5, 6, "-"],
  [7, 8, 9, "/"],
  ["=", 0, "+"],
];

const App = () => {
  const [input, setInput] = React.useState("0");
  const [output, setOutput] = React.useState("");

  return (
    <div>
      <CalcProvider>
        <CalcWrapper>
          <CalcScreen value={9990008} />
          <CalcFrame>
            {btnValues.flat().map((btn, i) => (
              <CalcButton
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={({}) => {
                  console.log(`${btn}  Button clicked`);
                }}
              />
            ))}
          </CalcFrame>
        </CalcWrapper>
      </CalcProvider>
    </div>
  );
};
export default App;
