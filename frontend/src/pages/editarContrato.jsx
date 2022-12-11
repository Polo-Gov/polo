import { useParams } from "react-router";
import { useNavigate } from "react-router";
import NavBar from "../components/navBar";
import arrowLeft from "../assets/arrow-left.svg";
import { useState } from "react";

const EditarContrato = () => {
  const param = useParams();
  const endereço = param.id;
  let oi = false
  const navigate = useNavigate()

  let infosContrato = {
    duracao: 12,
    tipo: "aluguel",
    ultimaFisca: 12 / 12 / 2021,
    proximaFisca: 12 / 12 / 2021,
    valor: 1000,
    ultimaCobra: 12 / 12 / 2021,
    status: "ativo",
  };


  return (
    <div className="text-center content-center">
      <NavBar></NavBar>
      <div className="p-5 absolute">
        <img
          src={arrowLeft}
          alt=""
          onClick={()=>{navigate("/imóveis")}}
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
          <h1 className="font-sans font-semibold ">{infosContrato.duracao}</h1>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Tipo</p>
          <h1 className="font-sans font-semibold ">{infosContrato.tipo}</h1>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Última fiscalização</p>
          <h1 className="font-sans font-semibold ">
            {infosContrato.ultimaFisca}
          </h1>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Próxima fiscalização</p>
          <h1 className="font-sans font-semibold ">
            {infosContrato.proximaFisca}
          </h1>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Valor</p>
          <h1 className="font-sans font-semibold ">{infosContrato.valor}</h1>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Última cobrança</p>
          <h1 className="font-sans font-semibold ">
            {infosContrato.ultimaCobra}
          </h1>
        </div>
        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Status</p>
          <h1 className="font-sans font-semibold ">{infosContrato.status}</h1>
        </div>
      </div>
    </div>
  );
};
export default EditarContrato;
