import { NavLink } from 'react-router-dom'
import GovLogo from '../assets/Gov.br.png'
import sun from '../assets/Nav-right.png'
const NavBar = () => {
    return (
        <div className='shadow-lg z-10 relative bg-white'>
            <nav className='flex justify-around h-16 items-center'>
                <img className='w-16 h-6' src={GovLogo} alt="Logo Gov.br" />

                <div className='flex gap-4'>
                    <NavLink className="text-blueGov" to={"/imóveis"}>imóveis</NavLink>
                    <NavLink className="text-blueGov" to={"/cadastrarImóveis"}>Registrar imóveis</NavLink>
                    <NavLink className="text-blueGov" to={"/Contratos"}>Contratos</NavLink>
                </div>

                <div className='flex items-center gap-4'>
                    <img className='w-6 h-6' src={sun} alt="" />
                    <p className=''>Alto contraste</p>
                </div>
            </nav>
        </div>
    )
}
export default NavBar