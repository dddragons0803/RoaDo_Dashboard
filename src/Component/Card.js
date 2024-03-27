import React from 'react';
import './Card.css';

const Card = ({ data1, data2, data3 , data4 }) => {
  return (
    <div className="card">
        <div className='top-data'>
        <h3>{data1}</h3>
      <p className='big-need-data'>{data2}</p>
        </div>
        <div className='bottom-data'>
           {data3 >= 0 ?<span><p className='colored-data green'>{data3}%&nbsp;</p> </span> :<span><p className='colored-data red'>{data3}%&nbsp;</p> </span>} 
            { data4 &&
                <span><p>From {data4}</p></span>
            }
        </div>
      
    </div>
  );
};

export default Card;