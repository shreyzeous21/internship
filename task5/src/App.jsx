import { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => {
    setNum1(parseFloat(e.target.value));
  };
  const handleNum2Change = (e) => {
    setNum2(parseFloat(e.target.value));
  };
  const handleAddition = () => setResult(num1 + num2);
  const handleSubtraction = () => setResult(num1 - num2);
  const handleMultiplication = () => setResult(num1 * num2);
  const handleDivision = () => setResult(num1 / num2);
  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Calculator</h1>
      <div className="mb-4">
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter first number"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          className="w-full p-2 border rounded"
          placeholder="Enter second number"
        />
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleAddition}
          className="w-full p-2 bg-blue-500 text-white rounded mr-1"
        >
          +
        </button>
        <button
          onClick={handleSubtraction}
          className="w-full p-2 bg-blue-500 text-white rounded mx-1"
        >
          -
        </button>
        <button
          onClick={handleMultiplication}
          className="w-full p-2 bg-blue-500 text-white rounded mx-1"
        >
          *
        </button>
        <button
          onClick={handleDivision}
          className="w-full p-2 bg-blue-500 text-white rounded ml-1"
        >
          /
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold">
          Result: {result !== null ? result : "N/A"}
        </h2>
      </div>
    </div>
  );
};

export default App;
