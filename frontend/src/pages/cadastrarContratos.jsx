import NavBar from "../components/navBar";

import imovel from "../assets/imovel.png";
import prazos from "../assets/prazos.png";
import people from "../assets/people.png";
import status from "../assets/status.png";
import condicao from "../assets/condicao.png";
import cobraca from "../assets/cobranca.png";
import proximaCobraca from "../assets/proximaCobranca.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CadastrarContratos = () => {
  const [visibleInfo, setVisibleInfo] = useState(false);

  const [idMovel, setIdMovel] = useState("");
  const [prazos_, setPrazos] = useState();
  const [donos, setDonos] = useState("");
  const [status_, setStatus] = useState("");
  const [condicoes, setCondicoes] = useState("");
  const [cobranca, setCobranca] = useState("");
  const [proximaCobraca_, setProximaCobranca] = useState();
  const [recebimento, setRecebimento] = useState("");
  const [valoresRecebidos, setValoresRecebidos] = useState("");
  const [imoveis, setImoveis] = useState([]);

  const postForAplication = () => {
    if (
      idMovel &&
      prazos_ &&
      donos &&
      status_ &&
      condicoes &&
      cobranca &&
      proximaCobraca_ &&
      recebimento &&
      valoresRecebidos
    ) {
      axios
        .post("http://localhost:3001/imovel/enderecoBlock", {
          idImovel: idMovel,
          prazos: prazos_,
          donos: donos,
          status: status_,
          condicoes: condicoes,
          valorCobranca: cobranca,
          dataProximaCobranca: proximaCobraca_,
          dataRecebimento: recebimento,
          valoresRecebimento: valoresRecebidos,
        })
        .then((response) => {
          console.log(response.data);
          let navigate = useNavigate()
          navigate("/imóveis")
        });

    } else {
      setVisibleInfo(true);

      window.scrollTo(0, 100);

      setTimeout(() => {
        setVisibleInfo(false);
      }, 5000);
    }
  };
  async function getImoveis() {
    axios.post("http://localhost:3001/imovel/achar").then((response) => {
      console.log(response.data);
      setImoveis(
        response.data.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.id}
            </option>
          );
        })
      );
    });
  }

  useEffect(() => {
    getImoveis();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="flex justify-center mt-10">
        <h1 className="text-3xl font-normal font-sans">Registrar Contrato</h1>
      </div>

      <div className="text-center mt-5">
        <p>
          Preencha todos os campos obrigatórios{" "}
          <span className="text-red-500">*</span>
        </p>
      </div>

      <h1
        className={`${visibleInfo ? "text-center mt-5 text-red-500 font-bold" : "hidden"
          }`}
      >
        Campo obrigatório não preenchido
      </h1>

      <div className="flex justify-center gap-24 mt-8 sm:flex-col sm:items-center sm:gap-10">
        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={imovel} alt="" />
            <h1 className="ml-3 text-lg">
              ID Imovel <span className="text-red-500">*</span>
            </h1>
          </div>
          <select
            id="state"
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            onChange={(e) => {
              setIdMovel(e.target.value);
            }}
          >
            <option value="#">Selecione o id do Imovel</option>
            {imoveis}
          </select>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={prazos} alt="" />
            <h1 className="ml-3 text-lg">
              Prazos <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="date"
            name=""
            id=""
            onChange={(e) => {
              setPrazos(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={people} alt="" />
            <h1 className="ml-3 text-lg">
              Donos <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setDonos(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center gap-24 mt-8 sm:flex-col sm:items-center sm:gap-10">
        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={status} alt="" />
            <h1 className="ml-3 text-lg">
              Status <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={condicao} alt="" />
            <h1 className="ml-3 text-lg">
              Condiçoes <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setCondicoes(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={cobraca} alt="" />
            <h1 className="ml-3 text-lg">
              Cobrança <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setCobranca(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center gap-24 mt-8 sm:flex-col sm:items-center sm:gap-10">
        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={proximaCobraca} alt="" />
            <h1 className="ml-3 text-lg">
              Proxima cobrança <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="date"
            name=""
            id=""
            onChange={(e) => {
              setProximaCobranca(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={""} alt="" />
            <h1 className="ml-3 text-lg">
              Recebimento <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setRecebimento(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={""} alt="" />
            <h1 className="ml-3 text-lg">
              Valores recebidos<span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setValoresRecebidos(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button
          className="bg-blueGov h-12 text-white rounded-md w-32"
          onClick={postForAplication}
        >
          Registar Contrato
        </button>
      </div>
    </div>
  );
};

export default CadastrarContratos;
