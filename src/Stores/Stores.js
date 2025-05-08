import React from 'react';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import mapimag from "../img/iranmap.png";
import MapPage from "./map/MapPage";
import Selector from "./map/Selector";
import { PageTitle } from '../Title/PageTitle';
import "./Stores.css";
import { Typography } from '@mui/material';
import "../../node_modules/leaflet/dist/leaflet.css";
export const Stores = () => {
   
  return (
 <>
    <PageTitle title=' فروشگاه های سهیل '   description=' سهیل '/>
 <TopNav/>
 <div className='flex flex-col w-full bg-zinc-100'>
 <div className='flex flex-row mx-auto mt-1 w-[98%] rounded-b-3xl h-auto 
  bg-gradient-to-r from-[#c2e59c] via-[#64b3f4] to-[#c2e59c] '>
 <div className='flex flex-col justify-start mx-auto  w-[70%] pr-5'>
  <p className='text-blue-800 py-3 text-start font-bold text-xl md:text-2xl'>فروشگاه‌های سهیل </p>
  <p className='text-start text-[12px] md:text-md text-gray-800 font-sans my-0.5 md:my-1'>مکان‌نمای فروشگاه‌ها در سراسر ایران </p>
</div>
<div className=' w-[30%] flex justify-end pl-5'>
 <img className='w-[80px] h-[80px] md:w-[110px] md:h-[110px]'  alt=''
 src={mapimag}/>

</div>
 </div>
<div className='w-full flex flex-col md:flex-row justify-between bg-white my-1 md:my-5 mx-auto px-2 rounded-xl '>
<div className='flex flex-row justify-center w-[96%] h-[500px] z-10 p-1 rounded-xl mx-auto'>
<MapPage/>
</div>
<div className='flex flex-row justify-center w-[96%] h-auto z-10 p-1 rounded-xl mx-auto '>
<Selector/>
</div>


</div>
</div>
<Footer/>
 </>
  );
};
export default Stores