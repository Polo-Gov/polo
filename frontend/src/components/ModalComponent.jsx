import ContratosDown from "./ContratosDown";
import campo from "../assets/campo.png"
import X from "../assets/X.png"

const Modal = ({ idMovel,onClick }) => {
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
                <ContratosDown endereço={"1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"} duracao={"2 anos "} tipo={"Alienação"} ultimaFisca={"01/12/2022"} proximaFisca={"02/05/2023"} valor={"R$xxxxx"} ultimaCobra={"10/12/2022"} status={"Regular"}/>
            </div>
        </div>
    )
}


export default Modal;