import "./Rota.css";
import { useState } from "react";
import graph from "./dados";
import dijkstra from "./algoritmo";

function Rota() {

  let result = null

  const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();
  const [resultado, setResultado] = useState();

  function submitForm(event) {
    event.preventDefault();
    // TODO O tipo do veiculo ali
    const vehicleType = "car";
    result = dijkstra(graph, origem, destino, vehicleType);
    
    setResultado(result.distance);

    console.log(
      `Menor distância entre ${origem} e ${destino} para ${vehicleType}: ${result.distance}`
    );
    console.log(
      `Menor tempo entre ${origem} e ${destino} para ${vehicleType}: ${result.time} minutos`
    );
    console.log(`Caminho: ${result.path.join(" -> ")}`);
    console.log(result, resultado)
  }

  return (
    <div>
      <h1>Rotas</h1>
      <form
        method="post"
        className="centro animate__animated animate__fadeIn"
        onSubmit={submitForm}
      >
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setOrigem(e.target.value)}
        >
          <option selected disabled>Selecione Origem</option>
          <option value="Florianópolis">Florianópolis</option>
          <option value="São José">São José</option>
          <option value="Palhoça">Palhoça</option>
        </select>

        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setDestino(e.target.value)}
        >
          <option selected disabled>Selecione Destino</option>
          <option value="Florianópolis">Florianópolis</option>
          <option value="São José">São José</option>
          <option value="Palhoça">Palhoça</option>
        </select>

        <button className="btn btn-success align-self-end">
          Calcular rota
        </button>
      </form>

      <h1>Resultado: <pre>{resultado}</pre></h1>
    </div>
  );
}

export default Rota;
