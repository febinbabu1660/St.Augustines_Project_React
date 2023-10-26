import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import '../style/Navbar.css';
import { MenuItems } from './MenuItems';
import LogoImg from '../assests/Images/Logo-frame-color.svg'

function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='Navbar'>
           <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
            <img src={LogoImg} alt="Logo" className="navbar-brand"></img>    
            </Link>    
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click?'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>
                   {  
                    return(
                        <li key={index} className='nav-item'>
                        <Link className={item.cName} onClick={closeMobileMenu} to={item.url}>
                            {item.title}
                        </Link>
                    </li>
                    );}


                    )}
                   
                    {/* <button>
                        <i className="fas fa-bars toggle-icon"></i>
                    </button> */}
                </ul>
           </div>
        </nav>
    
    </>
  )
}

export default Navbar