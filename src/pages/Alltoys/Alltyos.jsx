/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useTitle from "../../Title/useTitle";
import Toystable from "./Toystable";


const Alltyos = () => {
    useTitle(`Toys-Shop | | ${'All toys'}`)
    const [alltoys,setalltoy] = useState([])
    const [serach,setsearch] = useState('')
    useEffect(()=>{
        fetch('https://asignment-server-11.vercel.app/alltoys')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.length >20){
                setalltoy(data.slice(0,20))
            }
            else{
                setalltoy(data)
            }
            console.log(serach)
        })
    },[serach])
    return (
        <div>
              <div className="relative max-w-[400px] mx-auto">
      <input
      onChange={(e)=>setsearch(e.target.value)}
        type="text"
        placeholder="Search"
        className="py-2 px-4 pr-10 block w-full appearance-none bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded-lg leading-tight focus:outline-none"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M22 22l-6-6-1.35-1.35M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
          ></path>
        </svg>
      </div>
    </div>
     <div className="mt-12">

     <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Toy Name</th>
        <th>Seller Name</th>
        <th>Subcategory</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Details</th>
      </tr>
    </thead>
        {
          alltoys.filter(val=>{
            if(serach == ''){
                return val
            }else if(val.name.toLowerCase().includes(serach.toLowerCase())){
               return val
            }
          })
          .map(datas=>{
            return <> <Toystable key={datas._id} datass={datas}></Toystable></>
          })
        }
        </table>
    </div>
        </div>
    );
};

export default Alltyos;