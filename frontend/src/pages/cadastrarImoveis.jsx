import NavBar from "../components/navBar";
import imageIcon from "../assets/imageIcon.png";
import file_download from "../assets/file_download.png";
import cityscape from "../assets/cityscape 1.png";
import estado from "../assets/Estado.png";
import bairro from "../assets/bairro.png";
import numero from "../assets/numero.png";
import { useState } from "react";

import DropdownBrazilianCities from "../components/DropdownBrazilianCities";
import DropdownBrazilianStates from "../components/DropdownBrazilianStates";

import axios from "axios";
import { useNavigate } from "react-router";

function CadastrarImóveis() {
  const [fileImg, setFileImg] = useState(null);
  const [visibleInfo, setVisibleInfo] = useState(false);

  const [formValues, setFormValues] = useState({});
  const [cidade, setCidade] = useState("");
  const [bairroI, setBairro] = useState("");
  const [numeroI, setNumero] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cep, setCep] = useState("");
  const [status, setStatus] = useState("");

  const sendFileToIPFS = async (e) => {
    e.preventDefault();
    console.log(
      fileImg,
      formValues.estado,
      cidade,
      bairroI,
      numeroI,
      logradouro,
      cep,
      status
    );

    if (
      fileImg &&
      formValues.estado &&
      cidade &&
      bairroI &&
      numeroI &&
      logradouro &&
      cep &&
      status
    ) {
      try {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `${import.meta.env.VITE_APP_PINATA_API_KEY}`,
            pinata_secret_api_key: `${
              import.meta.env.VITE_APP_PINATA_API_SECRET
            }`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;

        // , , , , , , status,
        axios
          .post("http://localhost:3001/imovel/criar", {
            estado: formValues.estado,
            cidade: cidade,
            bairro: bairroI,
            numero: numeroI,
            logradouro: logradouro,
            ipfsImage: ImgHash,
            cep: cep,
            status: status,
          })
          .then(() => {
            let navigate = useNavigate();
            navigate("/cadastrarContratos");
          });
        alert("Imóvel cadastrado com sucesso!");
        //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      } catch (error) {
        console.log({
          estado: formValues.estado,
          cidade: cidade,
          bairro: bairroI,
          numero: numeroI,
          logradouro: logradouro,
          // ipfsImage: ImgHash,
          cep: cep,
          status: status,
        });
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }
    } else {
      setVisibleInfo(true);

      window.scrollTo(0, 100);

      setTimeout(() => {
        setVisibleInfo(false);
      }, 5000);
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, estado: value });
  };

  const handleInputChangeCities = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setCidade(value);
  };

  return (
    <div className="cadastrarImóveis">
      <NavBar></NavBar>

      <div className="flex justify-center mt-10">
        <h1 className="text-3xl font-normal font-sans">Registrar Imóveis</h1>
      </div>

      <div className="text-center mt-5">
        <p>
          Preencha todos os campos obrigatórios{" "}
          <span className="text-red-500">*</span>
        </p>
      </div>

      <h1
        className={`${
          visibleInfo ? "text-center mt-5 text-red-500 font-bold" : "hidden"
        }`}
      >
        Campo obrigatório não preenchido
      </h1>

      <div className="flex justify-center gap-24 mt-8 sm:flex-col sm:items-center sm:gap-10">
        <div>
          <div className="flex items-center mb-3">
            <img src={estado} alt="" />
            <h1 className="ml-3 text-lg">
              Estado <span className="text-red-500">*</span>
            </h1>
          </div>
          <DropdownBrazilianStates
            onChange={handleInputChange}
          ></DropdownBrazilianStates>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img src={cityscape} alt="" />
            <h1 className="ml-3 text-lg">
              Cidade <span className="text-red-500">*</span>
            </h1>
          </div>
          <DropdownBrazilianCities
            state_={formValues.estado}
            onChange={handleInputChangeCities}
          ></DropdownBrazilianCities>
        </div>
      </div>

      <div className="flex justify-center gap-24 mt-8 sm:flex-col sm:items-center sm:gap-10">
        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={bairro} alt="" />
            <h1 className="ml-3 text-lg">
              Bairro <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setBairro(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="flex items-center mb-3">
            <img className="w-9" src={numero} alt="" />
            <h1 className="ml-3 text-lg">
              Numero <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="number"
            name=""
            id=""
            onChange={(e) => {
              setNumero(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center gap-24 mt-8 sm:flex-col sm:items-center sm:gap-10">
        <div>
          <div className="flex items-center mb-3 justify-center">
            <h1 className="ml-3 text-lg">
              Logradouro <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setLogradouro(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="flex items-center mb-3 justify-center">
            <h1 className="ml-3 text-lg">
              CEP <span className="text-red-500">*</span>
            </h1>
          </div>
          <input
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setCep(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center gap-24 mt-8 sm:flex-col sm:items-center sm:gap-10">
        <div>
          <div className="flex items-center mb-3 justify-center">
            <h1 className="ml-3 text-lg">
              Status do imóvel <span className="text-red-500">*</span>
            </h1>
          </div>
          <select
            className="border-2 border-gray-400 rounded-lg w-64 text-center"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">Escolha uma opção</option>
            <option value="regular">Regular</option>
            <option value="irregular">Irregular</option>
          </select>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center mt-10">
          <img src={imageIcon} alt="" />
          <p>
            Imagem do imóvel <span className="text-red-600">*</span>
          </p>
        </div>

        <form
          className="flex flex-col content-center items-center justify-center"
          onSubmit={(event) => {
            sendFileToIPFS(event);
          }}
        >
          <div className="rounded-md  h-36 border-dashed border-2 flex flex-col items-center justify-center p-5 w-96">
            <img className="h-6 w-6" src={file_download} alt="" />
            <input
              className=""
              type="file"
              onChange={(e) => setFileImg(e.target.files[0])}
              required
            />
          </div>

          <div className="mt-5 mb-5">
            <button
              className="bg-blueGov h-12 text-white rounded-md w-32"
              type="submit"
            >
              Registar Imovel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastrarImóveis;
