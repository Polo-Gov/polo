import NavBarLogin from "../components/navBarLogin";
import '../index.css'
import person from '../assets/person.png'
import GovLogo from '../assets/Gov.br.png'
import alert from "../assets/alert.png"
import { useNavigate } from "react-router";


import { useState, useEffect } from "react";
import { ethers } from "ethers";

const LoginMeta = () => {

  let navigate = useNavigate()

  const [provider, setProvider] = useState({});
  const [wallet, setWallet] = useState({
    address: "0x00000000000000000000000000000000000000",
    balance: 0,
  });

  useEffect(() => {
    if (
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
    } else {
      console.log("No web3? You should consider trying MetaMask!");
    }
  }, []);


  const connectWallet = async () => {
    try {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const wallet = provider.getSigner(account);
      setWallet({
        address: account,
        balance: ethers.utils.formatEther(await wallet.getBalance()),
      });

      console.log(wallet);
      navigate("/imóveis")

    } catch (error) {
      console.log(error);
    }
  };

  





  return (
    <div className="">
      <NavBarLogin></NavBarLogin>

      <div className="bg-orangeGov facha"></div>

      <div className="grid lg:grid-cols-2 relative sm:grid-cols-1">

        {/*Left side */}
        <div>
          <div className="lg:flex lg:justify-center lg:items-center  lg:mt-10 lg:ml-10 sm:mt-10 sm:flex-col sm:items-center ">
            <div>
              <img src={person} alt="" />
            </div>

            <div className="flex flex-col sm:items-center  ">
              <img className="w-72 " src={GovLogo} alt="" />
              <h1 className="font-sans font-normal text-lg w-80 mt-8 sm:ml-10">Garantindo a <span className="font-bold">sua identificação</span> nos serviços digitais do governo</h1>
            </div>

          </div>


        </div>

        {/*Right side */}
        <div className=" flex justify-center items-center lg:mt-40 lg:ml-10 sm:mt-10 sm:p-5">

          <div className="bg-white shadow-md shadow-black w-96 p-5 text-center forms">

            <h1 className="font-sans font-bold text-xl">Identifique-se no gov.br.com:</h1>

            <div className="flex justify-center mt-5">
              <img className="w-24" src={GovLogo} alt="" />
            </div>


            <div className="mt-20">
              <button onClick={connectWallet} className="mb-8 ">
                <div className="flex flex-row bg-[#f5841f] text-white rounded-md sm:h-20 items-center">
                  <p className="p-2">Conecte a sua metamask</p>
                </div>
              </button>
            </div>

            <hr className="mt-12  border-black" />

            <div className="flex justify-center mt-10 gap-2">
              <img src={alert} alt="" />
              <a className="text-blueGov" target="_blank" href="https://www.gov.br/governodigital/pt-br/conta-gov-br">Entenda a conta gov.br</a>
            </div>
          <p className="mt-10 text-gray-500">para fins de desenvolvimento da plataforma, você pode acessar a página principal diretamente pelo botão abaixo:</p>
          <button className={"bg-blueGov p-1 mt-2 pl-3 pr-3 rounded-lg text-white"}onClick={()=>{navigate("/imóveis")}}>entrar</button>
          </div>

        </div>



      </div>


    </div>
  )
};
export default LoginMeta;
