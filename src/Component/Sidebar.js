import React from 'react';
import './Sidebar.css';
import dropdow from '../Images/dropdown.jpeg'
import firstico from '../Images/firsticon.png'
import { MdOutlineEmail } from "react-icons/md";
import { GoPerson , GoFileDirectory } from "react-icons/go";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoHelpBuoyOutline } from "react-icons/io5";
import clonifylogo from '../Images/clonifylogo.png'
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo"><span><img src={clonifylogo} alt="clogo" className='clonifylogo' /></span>Clonify</div>
     <h4>DASHBOARD</h4>
      <ul className="navigation">
        <li className='subli'><span><img src = {firstico} alt="firsticon" className='firsticon'/></span>Dashboard  <span> &nbsp;&nbsp;&nbsp;&nbsp; <img src={dropdow} alt ="my-img" className='dropimg' /></span>
          <ul className="sub-navigation">
            <li>Analytics</li>
            <li>Finance</li>
            <li>Job Boards</li>
          </ul>
        </li>
        <li className='subli'><MdOutlineEmail />&nbsp;&nbsp;Messages  <span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <img src={dropdow} alt ="my-img" className='dropimg' /></span></li>
        <li className='subli'><GoPerson />&nbsp;&nbsp;Friends  <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={dropdow} alt ="my-img" className='dropimg' /></span></li>
        <li className='subli'><AiOutlineAppstore />&nbsp;&nbsp;App  <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={dropdow} alt ="my-img" className='dropimg' /></span></li>
      </ul>
      <h4>PAGES</h4>
      <ul className='navigation'>
        <li className='subli'><IoHelpBuoyOutline />&nbsp;&nbsp;Help Center<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={dropdow} alt ="my-img" className='dropimg' /></span></li>
        <li className='subli'><GoFileDirectory />&nbsp;&nbsp;File Manager<span> &nbsp;&nbsp;&nbsp;&nbsp; <img src={dropdow} alt ="my-img" className='dropimg' /></span></li>
      </ul>

    </div>
  );
}

export default Sidebar;
