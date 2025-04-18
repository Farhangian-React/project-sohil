import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardRefrideratorSpecializedFreezer  from './CardRefrideratorSpecializedFreezer';
import Footer from '../../../Footer/Footer';
import TopNav from '../../../dashbord/TopNav';
import { PageTitle } from '../../../Title/PageTitle';
import SlideOffProducts from "../../../SlideOffProducts";
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "../../Dishwasher/Dishwasher.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default  function RefrideratorSpecializedFreezer() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const opens1 = Boolean(anchorEl1);
  const handleClose1 = () => {
    setAnchorEl1(null);
  }
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  }
  return (
<>
<PageTitle title='یخچال و فریزر / فریزر تخصصی  ' description='   یخجال و فریزر '/>
   <TopNav/> 
   <div className='sscrol flex justify-end  mb-2 mt-0 mx-auto bg-zinc-100 z-10  overflow-x-auto  h-[80px] py-0 ' >
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
               onClick={handleClick1}
               className='
                     hover:rounded-tr-md hover:rounded-bl-md hover:rounded-tl-2xl hover:rounded-br-2xl
                      my-1 mx-8 px-10 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
                     hover:via-yellow-500 hover:to-gray-500 hover:text-white'
               >
               یخچال و فریزر 
             
               
              <ArrowDropDownIcon sx={{fontSize:{xs:"2em",lg:"1.5em"},mt:"0.3em",color:"oklch(0.681 0.162 75.834)",':hover':{color:"white"} }} /></ListItemButton>
              <Menu
          sx={
            { mt: "1px", "& .MuiMenu-paper": 
              { backgroundColor: '#fff',width:'250px' } ,direction:'rtl'
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
        <NavLink  to={'/shop-refrigeratorfrenchdoor' } 
        style={{ textDecoration: "none"}}> 
        <MenuItem onClick={handleClose1} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
        یخچال های دو در 
       </MenuItem> </NavLink>
        <NavLink to={'/shop-refrigeratorsidbysid'}
        style={{ textDecoration: "none"}}> 
        <MenuItem onClick={handleClose1} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
        یخچال های ساید بای ساید 
       </MenuItem> </NavLink>
        <NavLink to={'/shop-refrideratorbottomfreezer'} 
        style={{ textDecoration: "none"}}> 
        <MenuItem onClick={handleClose1} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
        یخچال و فریزر پایین 
       </MenuItem> </NavLink>
        <NavLink  to={'/shop-refrideratortopfreezer'}
        style={{ textDecoration: "none"}}> 
        <MenuItem onClick={handleClose1} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
        یخچال و فریزر بالا 
       </MenuItem> </NavLink>
       <NavLink  to={'/shop-refrideratorspecializedfreezer'}
        style={{ textDecoration: "none"}}> 
        <MenuItem onClick={handleClose1} disableRipple sx={{fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
        یخچال و فریزر تخصصی 
       </MenuItem> </NavLink>
      </Menu>
            </ListItem>
       
            <NavLink  to={'/shop-washing-machine'} style={{  textDecoration: "none" }}> 
            <ListItem role="none" sx={{mr:"0",fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
           ماشین لباسشویی 
            </ListItem></NavLink>

           
            <NavLink  to={'/allgas'} style={{ textDecoration: "none"}}> 
            <ListItem role="none" sx={{mr:"0",fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
            پخت و پز  </ListItem>
            </NavLink>
            <NavLink to={'/shop-dishwasher'} style={{ textDecoration: "none"}} >
            <ListItem role="none" sx={{mr:"0",fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
            ماشین ظرفشویی   
            </ListItem></NavLink>  
          </List>
        </div>
        
        
   <CardRefrideratorSpecializedFreezer itemsPerPage={6}/>
   <SlideOffProducts/>
          <Footer/>
</>
  );
}


