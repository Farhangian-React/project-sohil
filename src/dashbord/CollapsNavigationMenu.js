
import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../Shared/Cart-Context';
import {CardData} from '../Shared/Cart-Context';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { RiRoadMapLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import "./E.css";
const drawerWidth = 300;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



export default function CollapsNavigationMenu() {
  const [cartItems,setCartItems]=useContext(CartContext);
  const [data,setData]=useContext(CardData);
  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const getData=()=>{
  fetch('https://serverjson-project.onrender.com/Allproducts')
  .then(res => res.json())
  .then((result)=> {
    setData(result);
    console.log(cartItems);
  },
  (error) => {
    alert('error');
  }
  )
  }
  useEffect( ()=>{
    getData();
  },[])
  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
    const filteredItems = data.filter((user) =>
    user.title1.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  }


  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const opens1 = Boolean(anchorEl1);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const opens2 = Boolean(anchorEl2);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const opens3 = Boolean(anchorEl3);


  
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
 
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleDrawerOpen1 = () => {
    setOpen1(true);
  };

  const handleDrawerClose1 = () => {
    setOpen1(false);
  };

  return (
    <>
    
    <div className='flex flex-row justify-start w-[150px]'
>
   <div className='mr-2 ' >
 <IconButton
title="Title" 
     
      sx={{ color:' #fef08a',mt:"3", ml: 0, ...(open && { display: '' }) }}
    >
      <MenuIcon sx={{ fontSize:"32px", mt:0.7}} />
    </IconButton>
 </div>
 <div className='mt-4'   >
<NavLink className="signup"  to={'/signup'}>
             
             
       <RiRoadMapLine className='w-6 h-6 text-yellow-600'   />
      
 
   </NavLink>
   
   </div>
   <div    className='mt-3 ' >
   <p className='text-yellow-200 px-2 text-2xl '>/</p>
  </div>
  <div  className='mt-4' >
<NavLink className="signup"  to={'/signup'}>
             
             
       <RiShoppingCartLine className='w-6 h-6 text-yellow-600'   />
      
 
   </NavLink>
   
   </div>
 



   </div>
    </>
  );
}
