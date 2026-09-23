import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userinput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputIsValid = userinput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, 
        // + changes the string to number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput = {userinput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      {inputIsValid && <Results input = {userinput} />}
    </>
  );
}

export default App;
