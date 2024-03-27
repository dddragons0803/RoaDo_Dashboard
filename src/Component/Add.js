import React from 'react'
import { HiOutlineBolt } from "react-icons/hi2";
import './Add.css'
export const Add = () => {
    return (
        <div className='AddContainer'>
            <div className='AddData'>
                <h1>Unlock Premium Stats</h1>
                <h4>Get Upto 10Tb of storage for a limited time</h4>
            </div>
            <div className='AddUpgrade'>
                <h3><span><HiOutlineBolt /></span>Upgrade</h3>
            </div>
        </div>
    )
}
