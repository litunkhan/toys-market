/* eslint-disable no-unused-vars */
import React from 'react';


const Gallery = () => {
    return (
        <div className='my-16 '>
            <h3 className='text-center text-4xl mb-5'>Play And Learn</h3>
        <div className='md:ml-2  grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4'>
            <img className='h-[250px] hover:translate-y-3 duration-700 w-full ' src='https://i.ibb.co/P1Hj5MH/two-year-old-developmental-milestones.webp' alt="" />
            <img className='h-[250px] hover:translate-y-3 duration-700 w-full' src="https://i.ibb.co/VYKhMxx/images.jpg" alt="" />
            <img className='h-[250px] hover:translate-y-3 duration-700 w-full' src="https://i.ibb.co/BtHHpKM/wall-tiles-plays.webp" alt="" />
            <img className='h-[250px] w-full hover:translate-y-3 duration-700'  src="https://i.ibb.co/LJsGmQL/7163-N-f3-Hh-L-AC-UF894-1000-QL80.jpg" alt="" />
            <img className='h-[250px] w-full hover:translate-y-3 duration-700' src="https://i.ibb.co/1f2Xkp8/math-toys-for-preschoolers-0.jpg" alt="" />
            <img className='h-[250px] w-full hover:translate-y-3 duration-700'  src="https://i.ibb.co/PWksgm4/images-1-cc.jpg" alt="" />
            <img className='h-[250px] w-full hover:translate-y-3 duration-700' src="https://i.ibb.co/cbhxcWh/91ee-Wi-E8u-FL-AC-SR263-263-QL70.jpg" alt="" />

            <img className='h-[250px] w-full hover:translate-y-3 duration-700'  src="https://i.ibb.co/hdR1VPN/71c6-QPKd-CLS.jpg" alt="" />
            
        </div>
        </div>
    );
};

export default Gallery;