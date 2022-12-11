import campo from "../assets/campo.png"

const CardImovel = ({onClick}) => {
    return (
        <div className="h-96 w-80 shadow-xl p-2 cursor-pointer" onClick={()=>{onClick('12')}}>
            <div className="bg-green-500 h-3">

            </div>

            <div className="flex justify-between p-5">
                <div>
                    <h1 className="font-bold">Imóvel</h1>
                    <p className="text-gray-500">ID: 123456</p>
                </div>

                <div className="border-2 rounded-full border-blueGov w-16 h-8 text-center mt-2 text-blueGov">
                    PR
                </div>

            </div>


            <img className="w-96 mb-5" src={campo} alt="Imagem do imovel" />

            <h1 className="font-bold mb-2">Maringá - PR</h1>
            <p className="font-sans text-gray-500">Av. Colombo, 5790 - Zona 7, Maringá - PR, 87020-900</p>
        </div>
    )
}

export default CardImovel