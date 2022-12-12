import NavBar from "../components/navBar";
import { useEffect, useState } from "react";

import DropdownBrazilianStates from "../components/DropdownBrazilianStates";
import DropdownBrazilianCities from "../components/DropdownBrazilianCities";
import ModalComponent from "../components/ModalComponent";
import CardImovel from "../components/CardImovel";

import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

const buscarImoveis = () => {
  const [formValues, setFormValues] = useState({});
  const [cidade, setCidade] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const [idMovel, setIdMovel] = useState(0);

  const [imovel, setImovel] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, estado: value });
  };

  const handleInputChangeCities = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setStatus(value);
  };

  const handleInputChangeStatus = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setStatus(value);
  };
  const openModal = (id) => {
    setIsOpen(true);
    setIdMovel(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const filter = () => {
    console.log(formValues.estado, cidade, status);
    if (formValues.estado || cidade || status) {
      axios
        .post("http://localhost:3001/imovel/achar", {
          cidade: cidade,
          estado: formValues.estado,
          status: status,
        })
        .then((res) => {
          // colocar dentro de um estado , retorna um array
          console.log(res.data);
          setImovel(res.data);
        });
    }
  };

  const getAllImovel = () => {
      axios.post("http://localhost:3001/imovel/achar",{})
      .then((result)=>{
        setImovel(result)
      })
  }

  useEffect(()=>{
    getAllImovel()
  },[])

  return (
    <div className={`${modalIsOpen ? "blur-sm" : "blur-none"}`}>
      <NavBar></NavBar>

      <div className="flex justify-center mt-10">
        <h1 className="text-3xl font-normal font-sans">Busca de imóvel</h1>
      </div>

      <div className="flex justify-center gap-5 mt-10 mb-10 sm:flex-col items-center">
        <DropdownBrazilianStates
          onChange={handleInputChange}
        ></DropdownBrazilianStates>

        <DropdownBrazilianCities
          state_={formValues.estado}
          onChange={handleInputChangeCities}
        ></DropdownBrazilianCities>

        <select
          className="border-2 border-gray-400 rounded-lg w-52 text-center"
          name="Status"
          onChange={handleInputChangeStatus}
        >
          <option value="">Status</option>
          <option value="">Regular</option>
          <option value="irregular">Irregular</option>
        </select>

        <div>
          <button
            className="bg-blueGov text-white w-40 rounded-md"
            onClick={filter}
          >
            Aplicar
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <CardImovel onClick={openModal} data={imovel}></CardImovel>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example modal"
        overlayClassName="modal-overlay"
        className="absolute inset-24 border-2 border-gray-500 overflow-auto rounded-lg outline-none p-5 bg-white sm:w-80 sm:left-14"
      >
        <ModalComponent onClick={closeModal} idMovel={idMovel} />
      </Modal>
    </div>
  );
};

export default buscarImoveis;
