import ContratosDown from "./ContratosDown";
import campo from "../assets/campo.png"
import X from "../assets/X.png"
import axios from "axios";
import { useEffect, useState } from "react";

const Modal = ({ idMovel, onClick }) => {


    const [contract, setContract] = useState([])



    const requestContracts = () => {
        if (idMovel) {
            axios.get("http://localhost:3001/contrato/achar", {
                id: idMovel
            }).then((result) => {
                setContract(result.data)
                console.log(result.data)
            })
        }
    }

    useEffect(() => {
        requestContracts()
    }, [])


    if (contract.length == 0) {

        return (
            <div className="relative">


                <div className="flex justify-end mt-5 mr-5">
                    <button onClick={onClick}><img src={X} alt="" /></button>
                </div>

                <div className="flex justify-center">
                    <img className="w-80 mb-5" src={campo} alt="" />
                </div>

                <div className="text-center">
                    <h1 className="font-bold mb-2 text-lg">Maringá - PR</h1>
                    <p className="font-sans text-gray-500 mb-4">Av. Colombo, 5790 - Zona 7, Maringá - PR, 87020-900</p>
                </div>

                <div>

                    <ContratosDown numero={1} endereço={"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"} acoesCount={12} valorCobranca={"R$1200"} dataProximaCobranca={"12/08/2023"} getAllDonos={"0x9A7FaBAf77204A927B00C8c9729d6c74b4a69366"} historicoRegistrado={""} owner={"0xa61d347F25D076BAF69Eb632Ce55167B60A2C7eA"} prazo={"23/09/2023"} status={"Regular"} />
                    <ContratosDown numero={2} endereço={"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"} acoesCount={12} valorCobranca={"R$1200"} dataProximaCobranca={"12/08/2023"} getAllDonos={"0x9A7FaBAf77204A927B00C8c9729d6c74b4a69366"} historicoRegistrado={""} owner={"0xa61d347F25D076BAF69Eb632Ce55167B60A2C7eA"} prazo={"23/09/2023"} status={"Regular"} />
                    <ContratosDown numero={3} endereço={"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"} acoesCount={12} valorCobranca={"R$1200"} dataProximaCobranca={"12/08/2023"} getAllDonos={"0x9A7FaBAf77204A927B00C8c9729d6c74b4a69366"} historicoRegistrado={""} owner={"0xa61d347F25D076BAF69Eb632Ce55167B60A2C7eA"} prazo={"23/09/2023"} status={"Regular"} />

                </div>
            </div>
        )
    } else {
        return (

            <div className="relative">
                <div className="flex justify-end mt-5 mr-5">
                    <button onClick={onClick}><img src={X} alt="" /></button>
                </div>


                <div className="text-center">
                    <h1 className="font-bold mb-2 text-lg">Nenhum contrato registrado nesse imóvel no momento</h1>
                </div>

            </div>

        )
    }
}


export default Modal;