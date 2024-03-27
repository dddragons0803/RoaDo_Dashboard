import React from 'react'
import Navbar from'./Navbar';
import { Add } from './Add';
import Card from './Card';
import './Maincontent.css'
import graph from '../Images/graph.png'
import Table from './Table';

const Maincontent = () => {
  return (
    <div className='maincontentpage'>
           <Navbar />
           <Add />
           <div className='responsive-card'>
           <Card data1="Revenue" data2='$56,945' data3='+45' data4='4.6%' />
           <Card data1="Users" data2='76.8%' data3='-1.7' data4='4.6%' />
           <Card data1="New SignUps" data2={116} data3='0.00' data4='' />
           <Card data1="Retention" data2='12.67%' data3='+0.6' data4='4.6%' />
           </div>
           <div className='graphimg'>
            <img src={graph} className='image-graph' alt="graph" />
           </div>
           <Table />
    </div>
  )
}

export default Maincontent