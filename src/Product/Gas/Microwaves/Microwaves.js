import React,{useState} from "react";
import {NavLink} from 'react-router-dom';
import CardMicrowaves  from '../Microwaves/CardMicrowaves'; 
import Footer from '../../../Footer/Footer';
import TopNav from '../../../dashbord/TopNav';
import { PageTitle } from '../../../Title/PageTitle';
import "../../Dishwasher/Dishwasher.css";
import SlideOffProducts from "../../../SlideOffProducts";
import {
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa6";
export default  function Microwaves() {
  const [isMenuOpen1, setIsMenuOpen1] =useState(false);
  const [isMobileMenuOpen1, setIsMobileMenuOpen1] =useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  return (
<>
<PageTitle title= "پخت و پز /  مایکروویو   " description= "پخت و پز /  مایکروویو   " />
   <TopNav/> 
   <div className="sscrol  overflow-x-auto py-0 bg-zinc-100 mb-2">
    <ul className=" flex uppercase font-bold mr-8">
      <Menu
      open={isMenuOpen1}
      handler={setIsMenuOpen1}
      offset={{ mainAxis: 20 }}
      placement="bottom"
      allowHover={true}
>
<MenuHandler>
<p className="font-medium">
  <ListItem
    className=" w-[120px] flex items-center py-2  font-medium rounded-none
     text-gray-900
     transition delay-150 duration-300 ease-in-out
     hover:border-none hover:text-yellow-500"
    selected={isMenuOpen1 || isMobileMenuOpen1}
    onClick={() => setIsMobileMenuOpen1((cur) => !cur)}
  >
    پخت و پز 
    <FaChevronDown
      strokeWidth={2.5}
      className={` h-3 w-3 mt-1 mr-2  transition-transform block ${
        isMenuOpen1 ? "rotate-180" : ""
      }`}
    />
    <FaChevronDown
      strokeWidth={2.5}
      className={` h-3 w-3 mt-1 mr-2  transition-transform hidden ${
        isMobileMenuOpen1 ? "rotate-180" : ""
      }`}
    />
  </ListItem>
</p>
</MenuHandler>
<MenuList dir="ltr" className="  rounded-xl block w-[150px] mx-auto h-auto p-3 -mt-5">
<ul className=" flex flex-col items-end outline-none outline-0">
<NavLink to={'/shop-ranges' }>
<MenuItem className="flex items-center pb-2 rounded-lg">
<p className="flex text-gray-700 items-center text-sm font-bold hover:text-yellow-500" >
 اجاق گاز و فر 
  </p>
</MenuItem>
</NavLink>
<NavLink to={'/shop-cooktop'} >
<MenuItem className="flex items-center py-2 rounded-lg">
<p className="flex text-gray-700 items-center text-sm font-bold hover:text-yellow-500" >
   گاز صفحه ای 
  </p>
</MenuItem>
</NavLink>
<NavLink to={'/shop-hood'}>
<MenuItem className="flex items-center py-2 rounded-lg">
<p className="flex text-gray-700 items-center text-sm font-bold hover:text-yellow-500" >
 هود
  </p>
</MenuItem>
</NavLink>
<NavLink to={'/shop-microwaves'} >
<MenuItem className="flex items-center py-2 rounded-lg">
  <p className="flex text-gray-700 items-center text-sm font-bold hover:text-yellow-500" >
مایکروویو
  </p>
</MenuItem>
</NavLink>
</ul>
</MenuList>
</Menu>

 
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
    to={'/shop-washing-machine'}
    style={({ isActive }) => ({
      color: isActive ? "rgb(107, 33, 168)" : "#000",
      textDecoration: "none",
    })}
  >
    <li className=" w-[120px] flex text-sm items-center py-2 font-medium
     text-gray-700
     transition delay-150 duration-300 ease-in-out
     hover:border-2 hover:border-transparent hover:border-b-yellow-500">
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
</ul>
</div>
        
   <CardMicrowaves itemsPerPage={6}/>
   <SlideOffProducts/>
          <Footer/>
</>
  );
}


