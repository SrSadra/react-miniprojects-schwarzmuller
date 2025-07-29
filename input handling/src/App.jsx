import { useState } from "react";
import InputBox from "./components/InputBox"
import InputHandler from "./components/InputHandler"
import Result from "./components/Result"

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
  });

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]:  Number(+value) }));
  };

  const isInputValid = inputs.duration >= 1;


  return (
    <div>
      <InputBox inputs={inputs} onInputChange={handleInputChange} />
      {!isInputValid && <p className="center">please enter valid duration!</p>}
      {isInputValid && <Result inputs={inputs} />}
    </div>
  );
}

export default App;