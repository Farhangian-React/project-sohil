
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
    
    <div className='flex flex-row justify-start w-[150px] '
>
   <div className='mr-2 ' >
 <IconButton
title="Title" 
onClick={handleDrawerOpen}
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
 


   <Drawer
        sx={{
          flexShrink: 0,
      
          '& .MuiDrawer-paper': {
            width: "300px",
            boxSizing: 'border-box',
            height:"98vh",
            display:"flex",
            flexDirection:"column",
            justifyContent:"start",
            direction:"rtl",
          
     
           
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
       className='z-20'
      >
        <DrawerHeader sx={{display:"flex",justifyContent:"space-around",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>
            <Grid sx={{width:"100%"}}>
           <Typography
    
     noWrap
     component="a"
     href="/"
     sx={{
       mr:0 ,
       mt:1,
       display: 'flex',
       flexGrow: 0,
       fontFamily: 'monospace',
       fontWeight: 300,
       fontStyle:'italic',
       letterSpacing: '.1rem',
       color: 'white',
       textDecoration: 'none',
       direction:"rtl",
       fontSize:"2.5em"
     }}
   >
     SOHIL
   </Typography>
           </Grid>
         

            <IconButton 
             title='Title'
            onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{fontSize:"34px"}} /> : <ChevronRightIcon sx={{fontSize:"34px"}}/>}
          </IconButton>
            
        </DrawerHeader>
      
        <List 
       
        >
            <ListItem disablePadding sx={{width:"300px",display:"flex",justifyContent:"space-between",my:2,pl:1}}>
             <ListItemButton  className='text-[18px] text-gray-700 font-bold '
               onClick={handleClick1}
               >
               محصولات
              </ListItemButton>
             
              <KeyboardArrowDownIcon  onClick={handleClick1} sx={{fontSize:"28px",color:"#414141"}}/>
              <Menu
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: '#fff',width:'22em' } ,direction:'rtl'
            }
          }
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
       
        }}
        anchorEl={anchorEl1}
        open={opens1}
        onClose={handleClose1}
  
      >
        <MenuItem onClick={handleClose1} disableRipple>
        
        <NavLink  onClick={handleClose1} className='navlink' to={'/allrefriderators' } >یخچال و فریزر</NavLink> 
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple ><NavLink className='navlink' to={'/shop-washing-machine' }  >
          ماشین لباسشویی
       </NavLink> </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink className='navlink'  to={'/shop-dishwasher'}>
          ماشین ظرفشویی
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink className='navlink' to={'/allgas'}>
           پخت و پز
        </NavLink></MenuItem>
      
      </Menu>
            </ListItem>
            <ListItem disablePadding sx={{width:"300px",display:"flex",justifyContent:"space-between",my:2,pl:1}}>
             <ListItemButton  className='text-[18px] text-gray-700 font-bold '
               onClick={handleClick2}
               >
               جشنواره ها
              </ListItemButton>
            
              <KeyboardArrowDownIcon  onClick={handleClick2} sx={{fontSize:"28px",color:"#414141"}}/>
              <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl2}
        open={opens2}
        onClose={handleClose2}
        sx={
          { mt: "1px", "& .MuiMenu-paper": 
            { backgroundColor: '#fff',width:'22em' } ,direction:'rtl'
          }
        }
      >
        <MenuItem onClick={handleClose2} disableRipple><NavLink className='navlink' to={'/jashnehtabestane'}>
       
           جشنواره های زمستانه 1402
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose2} disableRipple><NavLink className='navlink' to={'/karttakhfif'}>
       
           فعال سازی کارت تخفیف
        </NavLink></MenuItem>
      </Menu>
            </ListItem>
            <ListItem disablePadding sx={{width:"300px",display:"flex",justifyContent:"space-between",my:2,pl:1}}>
            <ListItemButton  className='text-[18px] text-gray-700 font-bold '
               onClick={handleClick3}
               >
               خدمات
              </ListItemButton>
          
              <KeyboardArrowDownIcon  onClick={handleClick3} sx={{fontSize:"28px",color:"#414141"}}/>
              <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl3}
        open={opens3}
        onClose={handleClose3}
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: '#fff',width:'22em' } ,direction:'rtl'
            }
          }
      >
        <MenuItem onClick={handleClose3} disableRipple><NavLink className='navlink'  to={'/AfterSalesService'}>
             خدمات پس از فروش
       </NavLink> </MenuItem>
        <MenuItem onClick={handleClose3} disableRipple><NavLink className='navlink' to={'/ContactUsForm'} >
             فرم تماس با ما 
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose3} disableRipple><NavLink className='navlink' to={'/PopularQuestions'}>
          سوالات متداول 
  </NavLink></MenuItem>
      </Menu>
            </ListItem>
            <ListItem disablePadding sx={{width:"300px",display:"flex",justifyContent:"space-between",my:2}}>
            <NavLink className='navlinkcoll'  to={"/Stores"}>  
            <ListItemButton className='text-[18px] text-gray-900 font-bold ' >
            
              فروشگاه ها
            </ListItemButton></NavLink>
           </ListItem>
           <ListItem disablePadding sx={{width:"300px",display:"flex",justifyContent:"space-between",my:2}}>
            <NavLink className='navlinkcoll' to={"/about-snova"}>
            <ListItemButton className='text-[18px] text-gray-900 font-bold ' >
             
               چرا سهیل
        
            </ListItemButton>
            </NavLink>
           </ListItem>
           <ListItem disablePadding sx={{width:"300px",display:"flex",justifyContent:"space-between",my:2}}>
            <NavLink className='navlinkcoll' to={"/about-snova"}>
            <ListItemButton className='text-[18px] text-gray-900 font-bold' >
           سبک زندگی
            </ListItemButton>
            </NavLink>
           </ListItem>
            
           <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}>
            
           </ListItem>
           <ListItem disablePadding sx={{width:"210px",display:"flex",justifyContent:"space-around",m:2}}> 
            </ListItem>
        </List>
        <NavLink className="signup"  to={"/signin"}>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",mx:1,px:2,backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",pb:1,borderRadius:1}}>
           <Typography  sx={{mt:2,color:"#eeeeee",fontSize:"18px"}}>ورود یا عضویت </Typography>
           <PermIdentityOutlinedIcon  sx={{mt:1.5,mr:2,fontSize:'28px',color:'white'}} />
       </Box>
       </NavLink>
      </Drawer>
   </div>
    
    </>
  );
}
