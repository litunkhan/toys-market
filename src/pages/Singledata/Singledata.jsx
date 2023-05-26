/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import useTitle from '../../Title/useTitle';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Singledata = () => {
    useTitle(`Toys-Shop || ${'single toy '}`)
    const data = useLoaderData()
    useEffect(()=>{
       console.log(data)
    },[data])
    return (
        <div className='max-w-[700px] mx-auto my-14 flex flex-col justify-center items-center'>
            <img className='h-[300px]' src={data.img} alt="toy image" />
            <div className='flex gap-3 mt-2 text-1xl'>
                <p>Price: ${data.price}</p>
                <p className='flex items-center'> Ratings: <FaStar></FaStar> {data.rating}</p>
                <p>Quantity: {data.quantity}</p>
            </div>
            <p className='text-1xl'>Toy Name : {data.name}</p>
             <p className='mt-2 text-1xl'>sellername: {data.sellername}</p>
             <p className='mt-2 text-1xl'>Seller email: {data.email}</p>
            
            <p className='mt-2 text-2xl'>Discription: {data.details}</p>
        </div>
    );
};

export default Singledata;