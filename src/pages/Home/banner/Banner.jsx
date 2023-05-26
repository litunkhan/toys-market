/* eslint-disable no-unused-vars */

import React from 'react';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import Lottie from "lottie-react";
import animations from '../../../assets/74111-children.json'
const Banner = () => {
    return (
        <div>
             <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
        <Lottie   animationData={animations} loop={true} />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">Discover Amazing Children Toys</h1>
          <p className="text-lg text-gray-600 mt-4">Welcome to our online toy-selling website! We take pride in being a premier destination for all your toy needs. Our mission is to provide a wide range of high-quality toys that inspire imagination, promote learning, and bring joy to children of all ages.At our toy-selling site, youll find an extensive collection of toys carefully selected from reputable manufacturers known for their commitment to safety and durability.</p>
          <div className="mt-8 flex gap-1">
            <button className="flex items-center bg-blue-500 text-white rounded-md py-2 px-4 mr-4">
              <FaPlay className="mr-2" />
              See More
            </button>
            <button className="flex items-center bg-gray-200 text-gray-800 rounded-md py-2 px-4">
              <FaInfoCircle className="mr-2" />
              About
            </button>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;