import React,{useState} from "react";
import {NavLink} from 'react-router-dom';
import CardWashingMachine  from './CardWashingMachine'; 
import Footer from '../../Footer/Footer';
import TopNav from '../../dashbord/TopNav';
import { PageTitle } from '../../Title/PageTitle';
import "../Dishwasher/Dishwasher.css";
import SlideOffProducts from "../../SlideOffProducts";
export default  function WashingMachine() {
  return (
<>

<PageTitle title='ماشین لباسشویی ' description='   ماشین لباسشویی'/>
   <TopNav/> 
   <div className="overflow-x-auto  [&::-webkit-scrollbar]:w-0 py-1 bg-zinc-100 mb-2">
    <ul className=" flex uppercase font-bold mr-8">
    <NavLink
    to={'/shop-washing-machine'}
    style={({ isActive }) => ({
      color: isActive ? "rgb(107, 33, 168)" : "#000",
      textDecoration: "none",
    })}
  >
    <li className=" w-[120px] flex text-sm items-center py-2 font-medium
     text-yellow-500 hover:text-gray-900
     transition delay-150 duration-300 ease-in-out
     hover:border-2 hover:border-transparent">
     ماشین لباسشویی
    </li>
  </NavLink>
  
  <NavLink to={'/shop-dishwasher'} 
    style={({ isActive }) => ({
      color: isActive ? "rgb(107, 33, 168)" : "#000",
      textDecoration: "none",
    })}
  >
    <li className=" w-[120px] flex  text-sm items-center py-2  font-medium
     text-gray-700
     transition delay-150 duration-300 ease-in-out
     hover:border-2 hover:border-transparent hover:border-b-yellow-500">
     ماشین ظرفشویی
    </li>
  </NavLink>
   
  <NavLink
 to={'/allrefriderators'}
    style={({ isActive }) => ({
      color: isActive ? "rgb(107, 33, 168)" : "#000",
      textDecoration: "none",
    })}
  >
   <li className=" w-[120px] flex text-sm items-center py-2 font-medium
     text-gray-700
     transition delay-150 duration-300 ease-in-out
     hover:border-2 hover:border-transparent hover:border-b-yellow-500">
     یخچال و فریزر
    </li>
  </NavLink>
  <NavLink
 to={'/allgas'}
    style={({ isActive }) => ({
      color: isActive ? "rgb(107, 33, 168)" : "#000",
      textDecoration: "none",
    })}
  >
   <li className=" w-[120px] flex text-sm items-center py-2 font-medium
     text-gray-700
     transition delay-150 duration-300 ease-in-out
     hover:border-2 hover:border-transparent hover:border-b-yellow-500">
    پخت و پز
    </li>
  </NavLink>
 
</ul>
</div>


   <CardWashingMachine itemsPerPage={8}/>
<SlideOffProducts/>
<Footer/>
</>
  );
}


