// Destructuring de React y solo traemos el hook 'useState'
import { useState } from "react";
export const Year = ({ actual }) => {
  const [year, setYear] = useState(actual);

  const actualizarYear = (event) => {
    const mode = event.target.getAttribute("data-mode");
    const inputYear = document.getElementById("inputYear");
    let yearInt = parseInt(inputYear.value);
    console.log(yearInt);
    if (mode === "sumar") {
      if (year <= 0) {
        setYear(year);
      } else {
        setYear(year + 1);
      }
    } else if (mode === "restar") {
      if (year <= 1) {
        setYear(year);
      } else {
        setYear(year - 1);
      }
    } else if (mode === "update") {
      if (inputYear.value === "" || inputYear.value < 1) {
        setYear(year);
      } else {
        inputYear.value = "";
        setYear(yearInt);
      }
    }
  };
  return (
    <>
      <h1>{year}</h1>
      <input type="number" min={1} id="inputYear" />
      <button
        className="btn btn-primary"
        data-mode="update"
        onClick={actualizarYear}
      >
        Cambiar año
      </button>
      <br />
      <button
        className="btn btn-success"
        data-mode="sumar"
        onClick={actualizarYear}
      >
        +1
      </button>
      <button
        className="btn btn-danger"
        data-mode="restar"
        onClick={actualizarYear}
      >
        -1
      </button>
    </>
  );
};
