import NavBar from "../components/navBar";
function CadastrarImóveis() {
  return (
    <div className="cadastrarImóveis">
      <NavBar></NavBar>
      <h1 className="text-center font-semibold mt-10 text-2xl">
        Registar Imóveis
      </h1>
      <div className="justify-center">
        <div className="grid grid-cols-2 gap-1 p-24">
          <div className="text-center block">
            <p>estado</p>
            <select className="text-center border border-slate-800 rounded-md w-56 h-8 ">
              <option>escolha um estado</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
            </select>
            <input
              type="text"
              className="text-center border border-slate-800 rounded-md w-56 h-8"
            />
          </div>
          <div className="text-center">
            <p>Cidade</p>
            <select className="text-center border border-slate-800 rounded-md w-56 h-8 ">
              <option>escolha uma cidade</option>
              <option>Monge das Cruzes</option>
              <option>petrópolis</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrarImóveis;
