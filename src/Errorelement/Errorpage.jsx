/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import errorpage from '../assets/114140-404-animation.json'
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className='max-w-[800px] mt-10 mx-auto'>
             <div className='text-center  h-[200px]'>
      <h1>404 - Page Not Found</h1>
      <Lottie className='h-[410px]'  animationData={errorpage} loop={true} />
      <p>The page you are looking for does not exist.</p>
     <button className='btn btn-outline mt-3'>
     <Link to="/">Back to Home</Link>
     </button>
    </div>
        </div>
    );
};

export default Errorpage;