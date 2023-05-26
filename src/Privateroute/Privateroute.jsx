/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../Authprobijder/Authprobider';
import { useLocation,Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loaders} = useContext(AuthContext)
    const location = useLocation()
    
    if(user){
        return children
    }
    else if(loaders){
        return <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-red-500"></div>
      </div>
      
    }
     
   else{
   return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
} 
};

export default Privateroute;