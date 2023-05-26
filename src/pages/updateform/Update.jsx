/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const datas = useLoaderData()
    console.log(datas)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target
        const price = parseInt(form.price.value)
        const quantity = form.quantity.value
        const details = form.description.value
       const updatedUser = {price,quantity,details}
        fetch(`https://asignment-server-11.vercel.app/singledata/${datas._id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.modifiedCount > 0){
            alert('apdated successfull')
          }
        })
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="price" className="text-lg font-medium mb-2">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={datas.price}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="quantity" className="text-lg font-medium mb-2">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={datas.quantity}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="description" className="text-lg font-medium mb-2">
            Detail Description:
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={datas.details}
            className="w-full h-32 px-4 py-2 rounded-lg border border-gray-300 resize-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
  
        <button
          type="submit"
          className="w-full px-6 py-3 mt-4 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
};

export default Update;