import NavBar from "../components/navBar"
import { useState } from "react";


import DropdownBrazilianStates from "../components/DropdownBrazilianStates";
import DropdownBrazilianCities from "../components/DropdownBrazilianCities";
import ModalComponent from "../components/ModalComponent"
import CardImovel from "../components/CardImovel";

import Modal from "react-modal"

Modal.setAppElement("#root")



const buscarImoveis = () => {

    const [formValues, setFormValues] = useState({})
    const [cidade, setCidade] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false)

    const [idMovel, setIdMovel] = useState('')



    const handleInputChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target
        setFormValues({ ...formValues, estado: value })
    }

    const handleInputChangeCities = (e) => {
        e.preventDefault();
        const { value, name } = e.target

        setCidade(value)
    }

    const openModal = (id) => {
        setIsOpen(true)
        setIdMovel(id)


    }

    const closeModal = () => {
        setIsOpen(false)
    }


    // console.log(idMovel)
    // console.log("Estado:" + formValues.estado)
    // console.log("Cidade:" + cidade)

    return (
        <div className={`${modalIsOpen ? "blur-sm" : "blur-none"}`}>

            <NavBar></NavBar>

            <div className="flex justify-center mt-10">
                <h1 className="text-3xl font-normal font-sans">Busca de imóvel</h1>
            </div>

            <div className="flex justify-center gap-5 mt-10 mb-10 sm:flex-col items-center">
                <DropdownBrazilianStates onChange={handleInputChange}></DropdownBrazilianStates>

                <DropdownBrazilianCities state_={formValues.estado} onChange={handleInputChangeCities}></DropdownBrazilianCities>
                
                <select className="border-2 border-gray-400 rounded-lg w-52 text-center" name="Status">
                    <option value="">Status</option>
                </select>

                <div>
                    <button className="bg-blueGov text-white w-40 rounded-md" onClick={()=>{"Função de filtrar"}}>Aplicar</button>
                </div>
            </div>



            <div className="flex justify-center">
                <CardImovel onClick={openModal}></CardImovel>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example modal"
                overlayClassName="modal-overlay"
                className="absolute inset-24 border-2 border-gray-500 overflow-auto rounded-lg outline-none p-5 bg-white sm:w-80 sm:left-14"
            >
                <ModalComponent onClick={closeModal} />
            </Modal>


        </div>

    )
}

export default buscarImoveis