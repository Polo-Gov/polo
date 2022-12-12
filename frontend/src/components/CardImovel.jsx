import campo from "../assets/campo.png";

const CardImovel = ({ onClick, data }) => {
  // necessário fazer map do data com as infos do card
  console.log(data);
  if (data.length > 0) {
    return data.map((element) => (
      // trocar os inputs por element.NOMEDOATRIBUTO
      // colocar dentro do onclick o id do imovel
      <div
        className="h-96 w-80 shadow-xl p-2 cursor-pointer"
        key={element.id}
        onClick={() => {
          onClick("12");
        }}
      >
        {element.status == "regular" ? (
          <div className="bg-green-500 h-3"></div>
        ) : (
          <div className="bg-red-500 h-3"></div>
        )}

        <div className="flex justify-between p-5">
          <div>
            <h1 className="font-bold">Imóvel</h1>
            <p className="text-gray-500">ID: {element.id}</p>
          </div>

          <div className="border-2 rounded-full border-blueGov w-16 h-8 text-center mt-2 text-blueGov">
            {element.estado}
          </div>
        </div>

        <img className="w-96 mb-5" src={campo} alt="Imagem do imovel" />

        <h1 className="font-bold mb-2">
          {element.cidade} {element.estado}
        </h1>
        <p className="font-sans text-gray-500">
          {element.logradouro}, {element.numero} , {element.cidade}-{" "}
          {element.estado}, {element.cep}
        </p>
      </div>
    ));
  }
};

export default CardImovel;
