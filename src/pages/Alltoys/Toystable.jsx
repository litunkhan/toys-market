/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom'

const Toystable = ({datass}) => {
    const {img,rating,quantity,name,_id,sellername,Subcategory,price} = datass
    // <img src={datas.img} alt="" />
    return (
        <>
            <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {sellername}
      
        </td>
        <td>{Subcategory}</td>
        <td>${price}</td>
        <td className='text-center'>{quantity}</td>
        <th>
        <Link to={`/toy/${_id}`}>  <button className="btn btn-ghost btn-xs">view details</button></Link>
        </th>
      </tr>
      </tbody>
        </>
    );
};

export default Toystable;