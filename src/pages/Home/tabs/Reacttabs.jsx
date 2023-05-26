/* eslint-disable no-unused-vars */




import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toys from './Toys';

const ReactTabs = () => {
  const [toys, setToys] = useState([]);

  const [category, setCategory] = useState('science kits');

  useEffect(() => {
    fetch(`https://asignment-server-11.vercel.app/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setToys(data);
        
      });
  }, [category]);

  

  return (
    <div className="my-14">
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory('science kits')}>Science Kits</Tab>
          <Tab onClick={() => setCategory('engineering kits')}>Engineering Kits</Tab>
          <Tab onClick={() => setCategory('math learning toys')}>Math Learning Toys</Tab>
        </TabList>
        <div className='grid md:grid-cols-3 lg:grid-cols-4'>
       {
        toys.slice(0,2).map(toy=>{
           return <> <Toys toy={toy} key={toy._id}></Toys></>
        })
       }
       </div>
      </Tabs>
    </div>
  );
};

export default ReactTabs;






