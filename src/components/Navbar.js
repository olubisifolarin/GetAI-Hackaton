import React, {useState} from "react";
import { Link} from 'react-router-dom';
import { RiMenu4Line } from 'react-icons/ri';
import { FiX} from 'react-icons/fi';



const Navbar = () => {
    const [open, setOpen] = useState()
    const handleClick  = () =>{
        setOpen(!open);
    }
    const closeMenu = () => {
        setOpen(false);
    }

    return(
        <div>
            <>
            <nav className="navbar">
                <Link to="/" className="nav-logo" onClick={closeMenu}>
                    <h2 className="getlinked">get<span className="linked">linked</span></h2>
                </Link>
                <div onClick={handleClick} className="nav-icon">
				    {open ? <FiX /> : <RiMenu4Line />}
			    </div>

                <ul className={open ? 'nav-links active' : 'nav-links'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={closeMenu}>
                           Timeline
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/overview" className="nav-link" onClick={closeMenu}>
                            Overview
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link" onClick={closeMenu}>
                           FAQs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link contact-link" onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-button" onClick={closeMenu}>
                            <button className='button-link'>Register</button>
                        </Link>
                    </li>
                </ul>
               
        </nav>
        <hr className="nav-line" />
    </> 
    </div>
    
    )
}

export default Navbar;