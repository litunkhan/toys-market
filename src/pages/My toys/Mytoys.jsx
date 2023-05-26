/* eslint-disable no-unused-vars */
import { useContext, useEffect,useState } from "react";
import { AuthContext } from "../../Authprobijder/Authprobider";
import Toyses from "./Toyses";
import useTitle from "../../Title/useTitle";
import Swal from 'sweetalert2'



const Mytoys = () => {
   useTitle(`Toys-Shop | | ${'My toys'}`)
    const {user}= useContext(AuthContext)
    const [mytoys,setmytoys] = useState([])

    useEffect(()=>{
        fetch(`https://asignment-server-11.vercel.app/mytoys?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setmytoys(data)
        })

    },[user.email])
    
    

    const handleDelete = (id)=>{
        console.log(id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://asignment-server-11.vercel.app/mytoys/${id}`,{
              method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
               console.log(data)
               if(data.deletedCount>0){
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                const remaindata = mytoys.filter(n=>n._id !== id)
                setmytoys(remaindata)
              }

            })
          }
        })


      
    }
// done
    // const fetchData = async 
    //   try {
    //     const response = await fetch(`/sorting?sort=${sortType}&email=${user.email}`);
    //     if (response.ok) {
    //       const data = await response.json();
    //       setmytoys(data);
    //     } else {
    //       console.error(`HTTP error! Status: ${response.status}`);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    const handleAscendingClick = (text) => {
     fetch(`https://asignment-server-11.vercel.app/sorting?sort=${text}&email=${user.email}`)
     .then(res=>res.json())
      .then(data=>{
        setmytoys(data)
      })
    };

    const handleDescendingClick = (text) => {
      fetch(`https://asignment-server-11.vercel.app/sorting?sort=${text}&email=${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        setmytoys(data)

      })
    };
  
    // http://localhost:5000/sorting?email=litunkhan1@gmail.com
    return (
        <div className="my-10">
          <div className="flex gap-3 my-8">
            <button onClick={()=>handleAscendingClick('asending')} className="btn btn-outline btn-secondary">desending</button>
            <button onClick={()=>handleDescendingClick('desending')} className="btn btn-outline btn-primary">asending</button>

          </div>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         Remove
        </th>
        <th>Name</th>
        <th>Quantity/Price</th>
        <th>Seller name</th>
        <th>Category</th>
        <th>Details</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      
      
      {
      mytoys.map(toys=>{
         return <><Toyses key={toys._id} toyss={toys} handleDelete={handleDelete}  ></Toyses></>
      })
      }
    </tbody>
    
   
    
  </table>
</div>
        </div>
    );
};

export default Mytoys;