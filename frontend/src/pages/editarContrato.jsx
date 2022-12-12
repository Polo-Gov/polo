import { useParams } from "react-router";
import { useNavigate } from "react-router";
import NavBar from "../components/navBar";
import arrowLeft from "../assets/arrow-left.svg";
import { useEffect, useState } from "react";

const EditarContrato = () => {
  const param = useParams();
  const endereço = param.id;
  const navigate = useNavigate();

  const [duracao, setDuracao] = useState(12);
  const [tipo, setTipo] = useState("aluguel");
  const [ultimaFisca, setUltimaFisca] = useState("2012-04-13");
  const [proximaFisca, setProximaFisca] = useState("2024-11-12");
  const [valor, setValor] = useState(1000);
  const [ultimaCobra, setUltimaCobra] = useState("2022-11-27");
  const [status, setStatus] = useState("ativo");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    
    // COLOCAR AS REQUESTS AQUI
    // O ENDEREÇO DO CONTRATO EM QUESTÃO ESTÁ NA VARIAVEL "endereço"
    
    // AS INFORMAÇÕES DO CONTRATO DEVEM ENTRAR NOS useState DA LINHA 12 a 18
    
    // useState que tira da tela o "Carregando..." e mostra o conteúdo da página
    setIsLoading(false)
  },[])

  const sendEditedContract = () => {
    // COLOCAR O POST DO ENVIO DA EDIÇÃO DO CONTRATO AQUI

    // volta para a página de imóveis
    navigate("/imóveis")
  }

    if (isLoading) {
      return <div className="text-center mt-16 text-blueGov font-bold text-3xl">Carregando...</div>;
    }
  return (
    <div className="text-center content-center">
      <NavBar></NavBar>
      <div className="p-5 absolute">
        <img
          src={arrowLeft}
          alt=""
          onClick={() => {
            navigate("/imóveis");
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center ">
        <div className="bg-blueGov rounded-md w-2/5 p-3 m-5">
          <h1 className="font-regular text-white">
            Você está editando o contrato:
          </h1>
          <h1 className="font-bold text-l text-white p-2">{endereço}</h1>
        </div>
      </div>
      <div className="w-3/5 m-auto">
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Duração</p>
          <input
            type={"number"}
            value={duracao}
            onChange={(e) => setDuracao(e.target.value)}
            className=" rounded-lg border-slate-500 pl-2 pr-2 border-2"
          ></input>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Tipo</p>
          <input
            type={"text"}
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className=" rounded-lg border-slate-500 pl-2 pr-2 border-2"
          ></input>
        </div>{" "}
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Última fiscalização</p>
          <input
            type={"date"}
            value={ultimaFisca}
            onChange={(e) => setUltimaFisca(e.target.value)}
            className=" rounded-lg border-slate-500 pl-2 pr-2 border-2"
          ></input>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Próxima fiscalização</p>
          <input
            type={"date"}
            value={proximaFisca}
            onChange={(e) => setProximaFisca(e.target.value)}
            className=" rounded-lg border-slate-500 pl-2 pr-2 border-2"
          ></input>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Valor (R$)</p>
          <input
            type={"number"}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className=" rounded-lg border-slate-500 pl-2 pr-2 border-2"
          ></input>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Última cobrança</p>
          <input
            type={"data"}
            value={ultimaCobra}
            onChange={(e) => setUltimaCobra(e.target.value)}
            className=" rounded-lg border-slate-500 pl-2 pr-2 border-2"
          ></input>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Status</p>
          <input
            type={"text"}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className=" rounded-lg border-slate-500 pl-2 pr-2 border-2"
          ></input>
        </div>
          <h1 className="text-gray-700 text-xs mb-3">
            A edição de um contrato notificará, caso aplicável, todas as partes
            envolvidas. A alteração imprópria do contrato pode acarretar em
            implicações jurídicas.
          </h1>
    
        <button
          onClick={sendEditedContract}
          className="p-2 text-blue-800 border-blueGov border-2  rounded-lg mb-10 font-medium"
        >
          Voltar a página de imóveis
        </button>
        <button
          onClick={() => {
            navigate("/imóveis");
          }}
          className="p-3 ml-4 bg-blueGov text-white rounded-lg mb-10 font-bold"
        >
          Salvar alterações
        </button>
      </div>
    </div>
  );
};
export default EditarContrato;
