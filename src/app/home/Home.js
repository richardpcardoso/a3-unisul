import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import { Modal, Button } from "react-bootstrap";
import graph from "../rota/dados";
import dijkstra from "../rota/algoritmo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Home() {
  let result = null;

  const [resultado, setResultado] = useState(null|{});
  const [origem, setOrigem] = useState();
  const [destino, setDestino] = useState();
  const [veiculo, setVeiculo] = useState("car");

  
  function submitForm(event) {
    event.preventDefault();

    // Validações:
    
    if(origem == null || destino == null){
      toast.error('Preencha todas as informações para prosseguir');
    }else if(origem == destino){
      toast.error('A origem e o destino precisam ser diferentes');
    }else{
      result = null;
      result = dijkstra(graph, origem, destino, veiculo);
      setResultado({
        distance: result.distance,
        time: result.time,
        path: result.path.join(" → ")
      })
      console.log(result.path)
    }

    // console.log(
    //   `Menor distância entre ${origem} e ${destino} para ${veiculo}: ${result.distance}`
    // );
    // console.log(
    //   `Menor tempo entre ${origem} e ${destino} para ${veiculo}: ${result.time} minutos`
    // );
    // console.log(`Caminho: ${result.path.join(" -> ")}`);
    // console.log(result, resultado);
  }
  const handleClose = () => setResultado(null);

  return (
    <>
      <div className="bg-secondary bg-praia p-5" style={{backgroundImage: "url(/assets/background.png)"}}>
        <div className="container">
          <div className="text-center py-5">
            <h2 className="text-uppercase text-white h1">
              Onde sua jornada começa
            </h2>
            <h4 className="text-white">
              Descubra as melhores rotas pela{" "}
              <strong>Grande Florianópolis</strong>
            </h4>
          </div>
          <div className="bg-white mx-5 p-2 rounded">
            <form
              method="post"
              className="centro animate__animated animate__fadeIn"
              onSubmit={submitForm}
            >
              <div className="row ps-2">
                <div className="col-4">
                  <div>
                    <label htmlFor="">
                      <small className="text-secondary">Origem</small>
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setOrigem(e.target.value)}
                    >
                      <option selected disabled>
                        Selecione a origem
                      </option>
                      <option value="Águas Mornas">Águas Mornas</option>
                      <option value="Alfredo Wagner">Alfredo Wagner</option>
                      <option value="Angelina">Angelina</option>
                      <option value="Anitápolis">Anitápolis</option>
                      <option value="Antônio Carlos">Antônio Carlos</option>
                      <option value="Biguaçu">Biguaçu</option>
                      <option value="Canelinha">Canelinha</option>
                      <option value="Florianópolis">Florianópolis</option>
                      <option value="Governador Celso Ramos">Governador Celso Ramos</option>
                      <option value="Leoberto Leal">Leoberto Leal</option>
                      <option value="Major Gercino">Major Gercino</option>
                      <option value="Nova Trento">Nova Trento</option>
                      <option value="Palhoça">Palhoça</option>
                      <option value="Paulo Lopes">Paulo Lopes</option>
                      <option value="Rancho Queimado">Rancho Queimado</option>
                      <option value="Rancho Queimado">Rancho Queimado</option>
                      <option value="São Bonifácio">São Bonifácio</option>
                      <option value="São João Batista">São João Batista</option>
                      <option value="São José">São José</option>
                      <option value="São Pedro de Alcântara">São Pedro de Alcântara</option>
                      <option value="Tijucas">Tijucas</option>
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <label htmlFor="">
                    <small className="text-secondary">Destino</small>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setDestino(e.target.value)}
                  >
                    <option selected disabled>
                      Selecione o destino
                    </option>
                      <option value="Águas Mornas">Águas Mornas</option>
                      <option value="Alfredo Wagner">Alfredo Wagner</option>
                      <option value="Angelina">Angelina</option>
                      <option value="Anitápolis">Anitápolis</option>
                      <option value="Antônio Carlos">Antônio Carlos</option>
                      <option value="Biguaçu">Biguaçu</option>
                      <option value="Canelinha">Canelinha</option>
                      <option value="Florianópolis">Florianópolis</option>
                      <option value="Governador Celso Ramos">Governador Celso Ramos</option>
                      <option value="Leoberto Leal">Leoberto Leal</option>
                      <option value="Major Gercino">Major Gercino</option>
                      <option value="Nova Trento">Nova Trento</option>
                      <option value="Palhoça">Palhoça</option>
                      <option value="Paulo Lopes">Paulo Lopes</option>
                      <option value="Rancho Queimado">Rancho Queimado</option>
                      <option value="Rancho Queimado">Rancho Queimado</option>
                      <option value="São Bonifácio">São Bonifácio</option>
                      <option value="São João Batista">São João Batista</option>
                      <option value="São José">São José</option>
                      <option value="São Pedro de Alcântara">São Pedro de Alcântara</option>
                      <option value="Tijucas">Tijucas</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="">
                    <small className="text-secondary">Veiculo</small>
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setVeiculo(e.target.value)}
                  >
                    <option value="car" selected>Carro</option>
                    <option value="bus">Onibus</option>
                    <option value="bike">Bicicleta</option>
                  </select>
                </div>
                <div className="col-auto text-end">
                  <button className="btn btn-yellow text-white h-100 px-4 fw-bold">
                    Encontrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        show={resultado}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Resumo da Rota</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5 pt-4">
          {resultado != null ? <>
          <div className="row">
            <div className="col-md-3">
              <small className="mb-0 text-secondary">Origem</small>
              <h4>{origem}</h4>
              <img src={`/assets/imgs/${origem}.png`} className="w-100 rounded" alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center display-6">
            → 
            </div>
            <div className="col-md-3">
              <small className="mb-0 text-secondary">Destino</small>
              <h4>{destino}</h4>
              <img src={`/assets/imgs/${destino}.png`} className="w-100 rounded" alt="" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-5">
              <div className="border border-2 p-3 mt-3 rounded">
                <h5>Informações</h5>

                <p className="mb-0 mt-3">Indo de carro você vai levar <strong>{resultado.time} min</strong></p>
                <p className="mb-0">Distancia aproximada de  <strong>{resultado.distance} km</strong></p>
              </div>

              <div className="border border-2 p-3 mt-3 rounded">
                <h5>Valor da Viagem</h5>

                <p className="mb-0 mt-3">Combustível: <strong>R$ --,-</strong></p>
                <p className="mb-0">Pedágio: <strong className="text-secondary">Não há pedágios nesse trajeto!</strong></p>
              </div>

            </div>
            <div className="col-7 mt-3 bg-praia rounded d-flex justify-content-center align-items-center" style={{backgroundImage: "url(/assets/mapa.png)"}}>
              <div className="p-3 rounded bg-white text-center">
              <div>{resultado.path}</div>
              <small className=" text-secondary">Mapa está indisponivel! Em breve vamos estar implementado...</small>
              </div>
            </div>
          </div>
          </> : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Home;
