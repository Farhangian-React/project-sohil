import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardGas  from './CardGas'; 
import Footer from '../../Footer/Footer';
import TopNav from '../../dashbord/TopNav';
import { PageTitle } from '../../Title/PageTitle';
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import "../Dishwasher/Dishwasher.css";
import SlideOffProducts from "../../SlideOffProducts";
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default  function Gas() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
<>
<PageTitle title='همه ی محصولات مرتبط با پخت و پز' description='  پخت و پز'/>
   <TopNav/> 
 
<div className='sscrol flex justify-end  mb-2 mt-0 mx-auto bg-zinc-100 z-0  overflow-x-auto  h-[80px] py-0 ' >
<List
      role="menu"
      aria-label="Products"
      variant="outlined"
      orientation="horizontal"
      sx={{
        mt: 0,
     
       
        '--List-padding': '0.5px',
        '--ListDivider-gap': '0px',
        '--ListItemDecorator-size': '24px',
        width:'100%',
        backgroundColor:'transparent',
        alignItems:'center',
        border:"none"
        
       
      }}
    >
       
          <ListItem role="none"  sx={{mr:"0",fontSize:"18px",color:"oklch(0.681 0.162 75.834)" ,':hover':{color:"white"}}}>
        
        <ListItemButton 

id="basic-button"
aria-controls={open ? 'basic-menu' : undefined}
aria-haspopup="true"
aria-expanded={open ? 'true' : undefined}
onClick={handleClick}

      
         className='
               hover:rounded-tr-md hover:rounded-bl-md hover:rounded-tl-2xl hover:rounded-br-2xl
                my-1 mx-8 px-10 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
               hover:via-yellow-500 hover:to-gray-500 hover:text-white'
         >
                پخت و پز 
               
              
        <ArrowDropDownIcon sx={{fontSize:{xs:"2em",lg:"1.5em"},mt:"0.3em",color:"oklch(0.681 0.162 75.834)",':hover':{color:"white"} }} /></ListItemButton>
        <Menu
id="basic-menu"
anchorEl={anchorEl}
open={open}
onClose={handleClose}
MenuListProps={{
  'aria-labelledby': 'basic-button'
   }}
   sx={
    { "& .MuiMenu-paper": 
      { backgroundColor: '#fff',width:'150px' } ,direction:'rtl'
    }
  }
>
  <NavLink   to={'/shop-ranges' }
  style={{ textDecoration: "none"}}> 
  <MenuItem onClick={handleClose} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
   اجاق گاز و فر  
        </MenuItem></NavLink>
       
          <NavLink  to={'/shop-cooktop'}  style={{ textDecoration: "none"}}> 
  <MenuItem onClick={handleClose} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
   گاز صفحه ای 
   </MenuItem></NavLink>
  <NavLink   to={'/shop-hood'} style={{ textDecoration: "none"}}> 
  <MenuItem onClick={handleClose} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
  
        هود
       </MenuItem> </NavLink>
       <NavLink  to={'/shop-microwaves'} style={{ textDecoration: "none"}}> 
  <MenuItem onClick={handleClose} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
  
      مایکروویو
      </MenuItem>  </NavLink>
      </Menu>
</ListItem>
     
      <NavLink  to={'/allrefriderators'} style={{ textDecoration: "none"}}> 
      <ListItem role="none" sx={{mr:"0",width:"120px",fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
      یخچال و فریزر </ListItem>
      </NavLink>
      <NavLink  to={'/shop-washing-machine'} style={{  textDecoration: "none" }}> 
      <ListItem role="none" sx={{mr:"0",width:"150px",fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
     ماشین لباسشویی 
      </ListItem></NavLink>

      <NavLink to={'/shop-dishwasher'} style={{ textDecoration: "none"}} >
      <ListItem role="none" sx={{mr:"0",width:"150px",fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
      ماشین ظرفشویی   
      </ListItem></NavLink>  
          </List>
        </div>
        
   <CardGas itemsPerPage={8}/>
   <SlideOffProducts/>
          <Footer/>
</>
  );
}
