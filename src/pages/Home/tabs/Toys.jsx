/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authprobijder/Authprobider';
import Swal from 'sweetalert2'

const Toys = ({toy}) => {
   const {name,img,price,rating,_id} = toy
   const {user} = useContext(AuthContext)
   const handleViewDetailsClick= ()=>{
     if(!user){
        return Swal.fire({
            title: 'You have to Login',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
     }
   }
    return (
        <div className='w-full p-4'>
            <img className='h-[250px]' src={img} alt="" />
            <p>Toy Name: {name}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>

            <Link to={`/toy/${_id}`}>
            <button onClick={handleViewDetailsClick} className='btn btn-outline btn-primary'>View-Details</button>
            </Link>
        </div>
    );
};

export default Toys;