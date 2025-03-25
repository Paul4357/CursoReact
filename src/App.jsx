import "./App.css";
import { RenderLista } from "./components/05-renderizarListas";
import { Calculadora } from "./components/06-Calculadora";
import { ConsumirApi } from "./components/09-consumoApis";
import { RenderCondicional3 } from "./components/09-renderCondicional3";
import { HookEffect } from "./components/10-hookEffect";
import { Reqres } from "./components/ConsumoReqres";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <RenderCondicional3 />
          </div>
          <div className="col-6">
            <Reqres />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
