/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaEdit, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Toyses = ({toyss,handleDelete}) => {
    console.log(toyss)
    return (
        <>
           <tr>
        <th>
          <button onClick={()=>handleDelete(toyss._id)} className='btn btn-circle'>Delete</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={toyss.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Toys Name: {toyss.name}</div>
              <div className="text-1xl flex items-center">Ratings: <FaStar></FaStar>{toyss.rating}</div>
            </div>
          </div>
        </td>
        <td>
        Quantity: {toyss.quantity}
          <br/>
          <span className="badge badge-ghost badge-outline text-1xl">Price: ${toyss.price}</span>
        </td>
        <td>{toyss.sellername}</td>
        <td>{toyss.Subcategory}</td>
        <td>{toyss.details}</td>
        <th>
         <Link to={`/update/${toyss._id}`}> <button className="btn btn-ghost btn-xs"><FaEdit className='text-2xl'></FaEdit></button></Link>
        </th>
      </tr> 
        </>
    );
};

export default Toyses;