import NavBarLogin from "../components/navBarLogin";
import '../index.css'
import person from '../assets/person.png'
import GovLogo from '../assets/Gov.br.png'
import mail from "../assets/mail_outline.png"
import key from "../assets/key 1.png"
import alert from "../assets/alert.png"
import { Navigate, redirect, useNavigate } from "react-router";

const Login = () => {


  let navigate = useNavigate()

  



  return (
    <div className="">
      <NavBarLogin></NavBarLogin>

      <div className="bg-orangeGov facha"></div>

      <div className="grid grid-cols-2 relative">

        {/*Left side */}
        <div>
          <div className="flex justify-center items-center mt-40 ml-10">
            <div>
              <img src={person} alt="" />
            </div>

            <div className="flex flex-col">
              <img className="w-72 " src={GovLogo} alt="" />
              <h1 className="font-sans font-normal text-lg w-80 mt-8">Garantindo a <span className="font-bold">sua identificação</span> nos serviços digitais do governo</h1>
            </div>

          </div>


        </div>

        {/*Right side */}
        <div className=" flex justify-center items-center mt-40 ml-10">

          <div className="bg-white shadow-md shadow-black w-96 p-5 text-center forms">

            <h1 className="font-sans font-bold text-xl">Identifique-se no gov.br.com:</h1>

            <div className="flex justify-center mt-5">
              <img className="w-24" src={GovLogo} alt="" />
            </div>

            <div>
              <div className="mt-14">
                <div className="flex justify-start mb-3">
                  <img src={mail} alt="" />
                  <p>E-mail</p>
                </div>

                <div className="border-2 border-black rounded-md h-10 flex items-center ">
                  <input className="focus:border-none shadow-none outline-none w-60 ml-5" type="email" placeholder="Digite seu E-mail" />
                </div>

              </div>
            </div>

            <div>
              <div className="mt-5">
                <div className="flex justify-start mb-3 gap-1">
                  <img src={key} alt="" />
                  <p>Senha</p>
                </div>

                <div className="border-2 border-black rounded-md h-10 flex items-center ">
                  <input className="focus:border-none shadow-none outline-none w-60 ml-5" type="password" placeholder="Digite a sua senha" />
                </div>

              </div>
            </div>

            <div className="mt-10">
              <button className="text-white rounded-lg bg-blueGov w-32 h-10" onClick={()=>{navigate("/imóveis")}}>Continuar</button>
            </div>

            <hr className="mt-12  border-black" />

            <div className="flex justify-center mt-10 gap-2">
              <img src={alert} alt="" />
              <a className="text-blueGov" target="_blank" href="https://www.gov.br/governodigital/pt-br/conta-gov-br">Entenda a conta gov.br</a>
            </div>

          </div>

        </div>



      </div>


    </div>
  )
};
export default Login;
