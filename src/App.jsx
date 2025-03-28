import "./App.css";
import { EfectoCarga } from "./components/12-EfectoDeCarga";
import { Formulario } from "./components/13-Formulario";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Formulario />
          </div>
          <div className="col-6">
            <EfectoCarga />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
