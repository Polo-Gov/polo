import { NavLink } from 'react-router-dom'
import GovLogo from '../assets/Gov.br.png'
import sun from '../assets/Nav-right.png'

const NavBar = () => {
    return (
        <div className='shadow-lg  bg-white  lg:relative lg:w-auto sm:w-auto'>
            <nav className='flex justify-around h-16 items-center'>
                <img className='w-16 h-6' src={GovLogo} alt="Logo Gov.br" />

                <div className='flex gap-4 sm:gap-5 sm:mr-6'>
                    <NavLink className="text-blueGov" to={"/imóveis"}>imóveis</NavLink>
                    <NavLink className="text-blueGov" to={"/cadastrarImóveis"}>Registrar imóveis</NavLink>
                    <NavLink className="text-blueGov" to={"/cadastrarContratos"}>Contratos</NavLink>
                </div>

                {/* <div className='flex items-center gap-4'>
                    <img className='w-6 h-6' src={sun} alt="" />
                    <p className=''>Alto contraste</p>
                </div> */}
            </nav>
        </div>
    )
}
export default NavBar