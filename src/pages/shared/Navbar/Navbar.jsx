/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { FaHome, FaCube, FaBook, FaPlus, FaUser} from 'react-icons/fa';
import logo from '../../../assets/logo.jpg'
import logo2 from '../../../assets/logo2.avif'
import Tippy from '@tippyjs/react';
import { AuthContext } from '../../../Authprobijder/Authprobider';
const Navbar = () => {
 const {user,logOut } = useContext(AuthContext)

  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <div className='flex gap-1 items-center'><FaHome></FaHome><li><NavLink to={'/'}>Home</NavLink></li></div>
          <div className='flex gap-1 items-center'>
         <FaCube></FaCube>
            <li tabIndex={0}>
          <NavLink to={'alltoys'}>All-toys</NavLink>
          
          </li>
          </div>
         {
          user&&(
            <>
               <div className='flex gap-1 items-center'> <FaCube></FaCube> <li><NavLink to={'/mytoys'}>My-toys</NavLink></li></div>
          <div className='flex gap-1 items-center'>
            <FaPlus></FaPlus>
          <li><NavLink to={'/addtoys'}>Add-toys</NavLink></li>
          </div>
            </>
          )
         }

          <div className='flex gap-1 items-center'>
            <FaBook></FaBook> <li><NavLink to={'/blogs'}>Blogs</NavLink></li></div> 
        </ul>
      </div>
     <div className='flex  items-center'><img className='w-20' src={logo2} alt="logo" />
     <Link to={'/'} className="btn btn-ghost normal-case text-xl">Toys-Shop</Link>
     
     </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-5">
      <div className='flex gap-1 items-center'><FaHome></FaHome><li><NavLink to={'/'}>Home</NavLink></li></div>
        <div className='flex gap-1 items-center'>
         <FaCube></FaCube>
            <li tabIndex={0}>
          <NavLink to={'alltoys'}>All-toys</NavLink>
          
          </li>
          </div>
        
        {
          user&& (
            <>
            <div className='flex gap-1 items-center'> <FaCube></FaCube> <li><NavLink to={'/mytoys'}>My-toys</NavLink></li></div>
             <div className='flex gap-1 items-center'>
            <FaPlus></FaPlus>
          <li><NavLink to={'/addtoys'}>Add-toys</NavLink></li>
          </div>
        
            </>
          )
        }
         <div className='flex gap-1 items-center'>
            <FaBook></FaBook> <li><NavLink to={'/blogs'}>Blogs</NavLink></li></div> 
            

      </ul>
    </div>
  <div className="navbar-end">
   {
    user? <div className='flex gap-1 items-center'>
<Tippy content={user.displayName}><img className='w-9 rounded-xl cursor-pointer' src={user.photoURL} alt="" /></Tippy>
<FaUser></FaUser><p className='cursor-pointer' onClick={()=>logOut()}>LogOut</p></div>: 
    <div className='flex gap-1 items-center'><FaUser></FaUser><Link to={'/login'}>Login</Link></div>
   }
  </div>
</div>
  );
};

export default Navbar;

