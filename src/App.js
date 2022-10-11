import React, { useState } from "react";
import CalcWrapper from "./components/CalcWrapper";
import CalcScreen from "./components/CalcScreen";
import CalcButton from "./components/CalcButton";
import CalcFrame from "./components/CalcFrame";
import CalcProvider from "./components/CalcProvider";

const btnValues = [
  ["%", ".", "CE", "C"],
  ["1", "2", "3", "*"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "/"],
  ["=", "0", "+"],
];

const App = () => {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("0");

  return (
    <div>
      <CalcProvider>
        <CalcWrapper>
          <CalcScreen value={input} result={output} />
          <CalcFrame>
            {btnValues.flat().map((btn, i) => (
              <CalcButton
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn}  Button clicked`);
                }}
                input={input}
                setInput={setInput}
                setOutput={setOutput}
              />
            ))}
          </CalcFrame>
        </CalcWrapper>
      </CalcProvider>
    </div>
  );
};
export default App;
