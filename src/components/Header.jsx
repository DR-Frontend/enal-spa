import Logo from '../assets/imgs/Logo_enal.svg'

const Header = () => (
   <header id="header" className='header'>
      <img src={Logo} alt="Enal" />
         <ul className="header__list">
            <li><a href="#" className='btn'>Nostros</a></li>
            <li><a href="#" className='btn'>Su negocio</a></li>
            <li><a href="#" className='btn'>Dirección</a></li>
            <li><a href="#" className='btn'>Facebook</a></li>
            <li><a href="#" className='btn'>Cotizaciones</a></li>
         </ul>
   </header>
)

export default Header