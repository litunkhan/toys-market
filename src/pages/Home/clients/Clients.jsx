/* eslint-disable no-unused-vars */
import React from 'react';
import Marquee from "react-fast-marquee";
import c1 from './c1.webp'
import c2 from './c2.webp'
import c3 from './c3.webp'
import c4 from './c4.webp'
import c5 from './c66.webp'

const Clients = () => {
    return (
        <div className='my-12'>
        <h2 className='text-center text-3xl'>Our Happy clients</h2>
        <Marquee pauseOnHover={true}>
        <div className='flex gap-28'>
            <div className='text-center gap-3'>
                <img src={c1} alt="" />
                <p className='text-2xl'>Lily folk</p>
            </div>
            <div className='text-center gap-3'>
                <img src={c2} alt="" />
                <p className='text-2xl'>Jon Mark</p>
            </div>
          
           
            <div className='text-center gap-3'>
                <img src={c5} alt="" />
                <p className='text-2xl'>Rosy bella</p>
            </div>

            <div className='text-center gap-3'>
                <img src={c3} alt="" />
                <p className='text-2xl'>Wileam dephe</p>
            </div>

            <div className='text-center gap-3'>
                <img src={c4} alt="" />
                <p className='text-2xl'>Bianka Misel</p>

            </div>
        </div>

        </Marquee>
        </div>
    );
};

export default Clients;