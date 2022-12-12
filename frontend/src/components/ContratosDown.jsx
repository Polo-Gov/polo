import { useState } from "react"

import arrowDown from "../assets/arrow_down.png"
import editSVG from "../assets/edit-3.svg"
import { useNavigate } from "react-router"

import "../index.css"

const ContratosDown = ({ numero,endereço, acoesCount, valorCobranca, dataProximaCobranca, getAllDonos, historicoRegistrado, owner, prazo, status, }) => {

  const [openDown, setOpenDown] = useState(false)
  const navigate = useNavigate()

  const editarContrato = () => {
    if (openDown) navigate(`/editarContrato/${endereço}`)
  }


  return (
    <div className="mb-5">
      <div
        className="bg-blueGov rounded-lg h-14 flex items-center justify-between cursor-pointer"
        onClick={() => {
          setOpenDown(!openDown);
        }}
      >
        <h1 className="font-bold ml-2 text-white">Contrato - {numero} </h1>
        <img className="mr-2" src={arrowDown} alt="" />
        <div></div>
      </div>

      <div className={`${openDown ? "p-5" : "hidden"}`}>

        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Endereço</p>
          <h1 className="font-sans font-semibold ">{endereço}</h1>
        </div>

        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Quantidade de ações </p>
          <h1 className="font-sans font-semibold ">{acoesCount}</h1>
        </div>

        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Cobrança </p>
          <h1 className="font-sans font-semibold ">{valorCobranca}</h1>
        </div>


        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Proxima cobrança </p>
          <h1 className="font-sans font-semibold ">{dataProximaCobranca}</h1>
        </div>


        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Todos os propriétarios</p>
          <h1 className="font-sans font-semibold ">{getAllDonos}</h1>
        </div>

        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Historico</p>
          <h1 className="font-sans font-semibold ">{historicoRegistrado}</h1>
        </div>

        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Proprietário</p>
          <h1 className="font-sans font-semibold ">{owner}</h1>
        </div>

        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Prazo</p>
          <h1 className="font-sans font-semibold ">{prazo}</h1>
        </div>

        <div className="flex justify-between border-b-2 border-black items-center mb-3">
          <p className="font-sans font-light text-xl">Status</p>
          <h1 className="font-sans font-semibold ">{status}</h1>
        </div>

        <button
          className="bg-blueGov text-white w-40 rounded-md"
          onClick={() => {
            editarContrato()
          }}
        >
          <img className="mr-2" src={editSVG} alt="" />
          Editar este contrato
        </button>
      </div>
    </div>
  );

}

export default ContratosDown