import React, { useState,useRef } from "react";
import DataTable from "./DataTable";
const Calculator = () => {
  const [color1, setChangeColor1] = React.useState(false);
  const [color2, setChangeColor2] = React.useState(false);
  const [color3, setChangeColor3] = React.useState(false);
  const [dataTable, setDataTable] = React.useState(false);
  const [inputData, setInputData] = useState(null);
 


  function getInputData(e) {
    setInputData(e.target.value);
  }

  const getInitialState = () => {
   const value = "Weekly";
   return value;
  };
  

  const [value, setValue] = useState(getInitialState);


  const handleChange = (e) => {
    setValue(e.target.value);
  };
  function changeColor1() {
    setChangeColor1(!color1);
  }
  function changeColor2() {
    setChangeColor2(!color2);
   
  }
  function changeColor3() {
    setChangeColor3(!color3);
    setDataTable(!false);
  }
  return (
    <div class=" max-w-lg relative left-1/3 top-48 bg-gray-900">
        <h2 class=" bg-red-700 font-bold text-xl max-w-lg relative  ">Income tax calculator</h2>
      <label class="text-white" for="income">
        What is your income
        <br></br>
        $
        <input
          class="bg-gray-900"
          type="number"
          id="income"
          name="income"
          onChange={getInputData}
        />
        <select value={value} onChange={handleChange} class="bg-gray-900">
          <option value="Weekly">Weekly</option>
          <option value="Fortnightly">Fortnightly</option>
          <option value="Montly">Montly</option>
          <option value="Anually">Anually</option>
        </select>
      </label>
      <br></br>
      <label for="incometype" class="text-white">
        Please choose the income type
        <br></br>
        <button
          class="px-6 py-2 text-white 600"
          type="button"
          id={color1 ? "red" : "gray"}
          onClick={changeColor1}
        >
          Gross Income
        </button>
        <button
          class="px-6 py-2 text-white 600"
          type="button"
          id={color2 ? "red" : "gray"}
          onClick={changeColor2}
        >
          Net Income
        </button>
        <br></br>
      </label>
      <br></br>

      <button
        class="px-6 py-2 text-white 600"
        type="button"
        id={color3 ? "red" : "gray"}
        onClick={changeColor3}
      >
        Continue
      </button>
      {dataTable && <DataTable vrednost={inputData}  />}
    </div>
  );
};

export default Calculator;
