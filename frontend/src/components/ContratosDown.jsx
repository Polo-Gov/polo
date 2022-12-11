import { useState } from "react"

import arroDown from "../assets/arrow_down.png"

import "../index.css"

const ContratosDown = ({ endereço, duracao, tipo, ultimaFisca, proximaFisca, valor, ultimaCobra, status }) => {

    const [openDown, setOpenDown] = useState(false)


    return (
        <div>

            <div className="bg-blueGov rounded-lg h-14 flex items-center justify-between cursor-pointer" onClick={() => { setOpenDown(!openDown) }}>
                <h1 className="font-bold ml-2 text-white">Contrato - 1</h1>
                <img className="mr-2" src={arroDown} alt="" />
            </div>

            <div className={`${openDown ? 'p-5' : 'hidden'}`}>

                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Endereço</p>
                    <h1  className="font-sans font-semibold ">{endereço}</h1>
                </div>

                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Duração</p>
                    <h1 className="font-sans font-semibold ">{duracao}</h1>
                </div>


                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Tipo</p>
                    <h1 className="font-sans font-semibold ">{tipo}</h1>
                </div>


                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Ultima fiscalização</p>
                    <h1 className="font-sans font-semibold ">{ultimaFisca}</h1>
                </div>


                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Próxima fiscalização</p>
                    <h1 className="font-sans font-semibold ">{proximaFisca}</h1>
                </div>


                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Valor</p>
                    <h1 className="font-sans font-semibold ">{valor}</h1>
                </div>

                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Última cobrança</p>
                    <h1 className="font-sans font-semibold ">{ultimaCobra}</h1>
                </div>

                <div className="flex justify-between border-b-2 border-black items-center mb-3">
                    <p className="font-sans font-light text-xl">Status</p>
                    <h1 className="font-sans font-semibold ">{status}</h1>
                </div>


            </div>
        </div>
    )

}

export default ContratosDown