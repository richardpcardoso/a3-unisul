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

  const [show, setShow] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);

  function combustivel(distance, vehicle){
    let result = 0

    if(vehicle == "car"){
      result = (distance / 13)*5.49
    }

    if(vehicle == "bus"){
      result = (distance / 3)*6.49
    }

    return result.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  }
  
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
            <h2 className="text-uppercase text-white display-5">
              <strong>Onde sua jornada começa</strong>
            </h2>
            <h4 className="text-white">
              Descubra as melhores rotas pela{" "}
              <strong>Grande Florianópolis</strong>
            </h4>
          </div>
          <div className="bg-white mx-md-5 p-2 rounded">
            <form
              method="post"
              className="centro animate__animated animate__fadeIn"
              onSubmit={submitForm}
            >
              <div className="row ps-2">
                <div className="col-md-4">
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
                <div className="col-md-4 mt-4 mt-md-0">
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
                <div className="col-md mt-4 mt-md-0">
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
                <div className="col-md-auto mt-4 mt-md-0 text-end">
                  <button className="btn btn-yellow text-white h-100 px-4 fw-bold">
                    Encontrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container-xxl pt-5 py-md-2 px-5">
        <div className="row pt-md-5 pb-md-2">
          <div className="col-12 mb-2">
          <h3>Destaques</h3>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="avalicacao">★ 9,3</div>
              <img src={`/assets/imgs/Florianópolis.png`} className=" card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Florianópolis</strong></h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4 mt-md-0">
            <div className="card">
              <div className="avalicacao">★ 8,7</div>
              <img src={`/assets/imgs/Rancho Queimado.png`} className=" card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Rancho Queimado</strong></h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4 mt-md-0">
            <div className="card">
              <div className="avalicacao">★ 8,9</div>
              <img src={`/assets/imgs/Santo Amaro da Imperatriz.png`} className=" card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Santo Amaro da Imperatriz</strong></h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-4 mt-md-0">
            <div className="card">
              <div className="avalicacao">★ 8,6</div>
              <img src={`/assets/imgs/Palhoça.png`} className=" card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title"><strong>Palhoça</strong></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-2 mb-3 text-center"> 
      <a className="link-dark" onClick={handleShow1}>2023 • Saiba mais sobre esse trabalho</a>
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
        <Modal.Body className="p-md-5 pt-4">
          {resultado != null ? <>
          <div className="row">
            <div className="col-5 col-md-3">
              <small className="mb-0 text-secondary">Origem</small>
              <h4>{origem}</h4>
              <img src={`/assets/imgs/${origem}.png`} className="w-100 rounded" alt="" />
            </div>
            <div className="col-2 col-md-6 d-flex justify-content-center align-items-center display-6">
            → 
            </div>
            <div className="col-5 col-md-3">
              <small className="mb-0 text-secondary">Destino</small>
              <h4>{destino}</h4>
              <img src={`/assets/imgs/${destino}.png`} className="w-100 rounded" alt="" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-5">
              <div className="border border-2 p-3 mt-3 rounded">
                <h5>Informações</h5>

                <p className="mb-0 mt-3">Indo de carro você vai levar <strong>{resultado.time} min</strong></p>
                <p className="mb-0">Distancia aproximada de  <strong>{resultado.distance} km</strong></p>
              </div>

              <div className="border border-2 p-3 mt-3 rounded">
                <h5>Valor da Viagem</h5>

                <p className="mb-0 mt-3">Combustível: <strong>R$ {combustivel(resultado.distance, veiculo)}</strong> <small className="text-secondary">(Estimado)</small></p>
                <p className="mb-0">Pedágio: <strong className="text-secondary">Não há pedágios nesse trajeto!</strong></p>
              </div>

            </div>
            <div className="col-md-7 mt-3 bg-praia rounded d-flex justify-content-center align-items-center" style={{backgroundImage: "url(/assets/mapa.png)"}}>
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

      <Modal show={show} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="p-3 text-center">
              <div className="px-5">
                <img src={`/assets/unisul.png`} className="w-100" alt="" />
              </div>
              <p>Esse trabalho foi desenvolido para Avaliação A3 de <strong>Estruturas de dados e análise de algoritmos</strong>.</p>
              <ul className="list-group">
                <li className="list-group-item"><strong>Equipe:</strong></li>
                <li className="list-group-item">Richard Pereira Cardoso</li>
                <li className="list-group-item">Yuri Nunes Battaglin</li>
                <li className="list-group-item">Yuri Zabot Dos Santos</li>
                <li className="list-group-item">Kristten Rezende Santos</li>
                <li className="list-group-item">Henrique Silveira Avila</li>
              </ul>

            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Home;
