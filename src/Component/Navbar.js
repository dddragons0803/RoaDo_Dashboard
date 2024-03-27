import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } 
from '@fortawesome/free-solid-svg-icons';
import { GoBell } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import './Navbar.css'
import clonifylogo from '../Images/clonifylogo.png'
const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
            <div className='hidden-navbar'>
            <div className="hidden-logo"><span><img src={clonifylogo} alt="clogo" className='hidden-clonifylogo' /></span><span className="logo-text">Clonify</span></div>
            <div className='hidden-fauser'><FontAwesomeIcon icon={faUser} /></div>   
            </div>
        
         <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <div className="icons">
                <div><GoBell /></div>
                <div><CiCalendar /></div>
                <div><AiOutlineAppstore /></div>
                <div className='fauser'><FontAwesomeIcon icon={faUser} /></div>                
            </div>
        </nav>
    </div>
  )
}

export default Navbar