import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HookEstado } from "./components/03-hookEstado";
import { AumentarSaldo } from "./components/04-aumentarSaldo";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <HookEstado inicial={100} />
          </div>
          <div className="col">
            <AumentarSaldo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
