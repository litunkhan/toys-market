/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../assets/143135-login-page-animation.json'
import { AuthContext } from '../../Authprobijder/Authprobider';
import useTitle from '../../Title/useTitle';

const Login = () => {
  useTitle(`Toys-Shop | | Login`)
  const {singIn,googleLogin } = useContext(AuthContext)
  const [err,seterr] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
    const handleLogin = (e)=>{
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value
       
      singIn(email,password)
      .then(res=>{
         console.log(res.user)
         form.reset()
         navigate(from,{replace:true})
  
      })
      .catch(err=>{
        seterr(err.message)
        setTimeout(() => {
          seterr('')
        }, 3000);
      })
     }
  
     const googlelogins =()=>{
        googleLogin()
        .then((res) => {
          console.log(res.user)
          navigate(from,{replace:true})
        }).catch((error) => {
         console.log(error.message)
        })
     }

    

    return (
     <div className="flex flex-col relative  items-center justify-center min-h-screen bg-gray-100">
     <div className='absolute'> <Lottie   animationData={animation} loop={true} /></div>
        <div  className="bg-white absolute shadow-lg rounded-lg px-8 py-10 w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Email"
                name='email'
                className="w-full bg-transparent outline-none"
              />
            </div>
            <div className="flex items-center border rounded-md px-3 py-2">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Password"
                name='password'
                className="w-full bg-transparent outline-none"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 w-full">
              Login
            </button>
            {
            err&&(
              <div><p className='text-red-500'>{err}</p></div>
            )
          }
          </form>
          <div className="flex items-center mt-6">
            <div className="flex-grow border-t-2 border-gray-300"></div>
            <p className="mx-4 text-gray-500">Or</p>
            <div className="flex-grow border-t-2 border-gray-300"></div>
          </div>
          <button onClick={googlelogins} className="flex items-center bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mt-6 w-full">
            <FaGoogle className="text-white mr-2" />
            Sign in with Google
          </button>
          <p className="text-center mt-4">
            Dont have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      
    );
};

export default Login;


