
import campo from "../assets/campo.png";
import { getPrazo } from "../ethereum/interactions"

const CardImovel = ({ onClick, data }) => {
  return (

    <div className="lg:flex">

      <div className="h-96  shadow-xl p-2 cursor-pointer" onClick={() => { onClick(12); }}>

        {"regular" == "regular" ? (
          <div className="bg-green-500 h-3"></div>
        ) : (
          <div className="bg-red-500 h-3"></div>
        )}

        <div className="flex justify-between p-5">
          <div>
            <h1 className="font-bold">Imóvel</h1>
            <p className="text-gray-500">ID: 12</p>
          </div>

          <div className="border-2 rounded-full border-blueGov w-16 h-8 text-center mt-2 text-blueGov">
            PR
          </div>
        </div>

        <img className="w-96 mb-5" src={campo} alt="Imagem do imovel" />

        <h1 className="font-bold mb-2">
          Maringá Paraná
        </h1>
        <p className="font-sans text-gray-500">
          logradouro, 501 , Maringá-{" "}
          Paraná, 00000000
        </p>

      </div>


      <div className="h-96  shadow-xl p-2 cursor-pointer" onClick={() => { onClick(13); }}>

        {"regula" == "regular" ? (
          <div className="bg-green-500 h-3"></div>
        ) : (
          <div className="bg-red-500 h-3"></div>
        )}

        <div className="flex justify-between p-5">
          <div>
            <h1 className="font-bold">Imóvel</h1>
            <p className="text-gray-500">ID: 13</p>
          </div>

          <div className="border-2 rounded-full border-blueGov w-16 h-8 text-center mt-2 text-blueGov">
            PR
          </div>
        </div>

        <img className="w-96 mb-5" src={campo} alt="Imagem do imovel" />

        <h1 className="font-bold mb-2">
          Maringá Paraná
        </h1>
        <p className="font-sans text-gray-500">
          logradouro, 501 , Maringá-{" "}
          Paraná, 00000000
        </p>

      </div>



      <div className="h-96  shadow-xl p-2 cursor-pointer" onClick={() => { onClick(14); }}>

        {"regular" == "regular" ? (
          <div className="bg-green-500 h-3"></div>
        ) : (
          <div className="bg-red-500 h-3"></div>
        )}

        <div className="flex justify-between p-5">
          <div>
            <h1 className="font-bold">Imóvel</h1>
            <p className="text-gray-500">ID: 14</p>
          </div>

          <div className="border-2 rounded-full border-blueGov w-16 h-8 text-center mt-2 text-blueGov">
            PR
          </div>
        </div>

        <img className="w-96 mb-5" src={campo} alt="Imagem do imovel" />

        <h1 className="font-bold mb-2">
          Maringá Paraná
        </h1>
        <p className="font-sans text-gray-500">
          logradouro, 501 , Maringá-{" "}
          Paraná, 00000000
        </p>

      </div>



      <div className="h-96  shadow-xl p-2 cursor-pointer" onClick={() => { onClick(15); }}>

        {"regula" == "regular" ? (
          <div className="bg-green-500 h-3"></div>
        ) : (
          <div className="bg-red-500 h-3"></div>
        )}

        <div className="flex justify-between p-5">
          <div>
            <h1 className="font-bold">Imóvel</h1>
            <p className="text-gray-500">ID: 15</p>
          </div>

          <div className="border-2 rounded-full border-blueGov w-16 h-8 text-center mt-2 text-blueGov">
            PR
          </div>
        </div>

        <img className="w-96 mb-5" src={campo} alt="Imagem do imovel" />

        <h1 className="font-bold mb-2">
          Maringá Paraná
        </h1>
        <p className="font-sans text-gray-500">
          logradouro, 501 , Maringá-{" "}
          Paraná, 00000000
        </p>

      </div>
    </div>





  )


};

export default CardImovel;
