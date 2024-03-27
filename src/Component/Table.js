import React from 'react'
import './Table.css'
import angular from '../Images/angular.png'
import vue from '../Images/vue.png'
import meta from'../Images/meta.png'
import figma from '../Images/figma.png'
import zepplin from '../Images/zepplin.png'
const Table = () => {
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Installed apps</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Source</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>User ID</th>
                        <th>Joined</th>
                        <th>Group</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={zepplin} alt="Zepplin" className='tableimg'/> Zepplin</td>
                        <td>686.0</td>
                        <td><span class="status active">Active</span></td>
                        <td>114423</td>
                        <td>October</td>
                        <td>Design</td>
                    </tr>
                    <tr>
                        <td><img src={figma} alt="Figma" className='tableimg'/> Figma</td>
                        <td>864.0</td>
                        <td><span class="status pending">Pending</span></td>
                        <td>76223</td>
                        <td>June</td>
                        <td>Finance</td>
                    </tr>
                    <tr>
                        <td><img src={meta} alt="Meta" className='tableimg'/> Meta</td>
                        <td>176.0</td>
                        <td><span class="status cancelled">Cancelled</span></td>
                        <td>89453</td>
                        <td>March</td>
                        <td>Coding</td>
                    </tr>
                    <tr>
                        <td><img src={angular} alt="Angular" className='tableimg'/> Angular</td>
                        <td>49.0</td>
                        <td><span class="status active">Active</span></td>
                        <td>11467</td>
                        <td>February</td>
                        <td>Marketing</td>
                    </tr>
                    <tr>
                        <td><img src={vue} alt="Vue" className='tableimg'/> Vue</td>
                        <td>999.0</td>
                        <td><span class="status active">Active</span></td>
                        <td>67385</td>
                        <td>October</td>
                        <td>Finance</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table