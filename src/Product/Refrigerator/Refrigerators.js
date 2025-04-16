import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import AllRefrigerators  from './AllRefrigerators';
import Footer from '../../Footer/Footer';
import TopNav from '../../dashbord/TopNav';
import { PageTitle } from '../../Title/PageTitle';
import ListItemButton from '@mui/material/ListItemButton';
import SlideOffProducts from "../../Product/SlideOffProducts";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../Dishwasher/Dishwasher.css";
export default  function Refrigerators() {
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
<PageTitle title=' همه ی یخچال و فریزرها  ' description='   یخجال و فریزر '/>
   <TopNav/> 
    <div className='flex justify-end  mb-1 mt-0 mx-auto bg-zinc-100 z-10 overflow-x-visible sm:overflow-hidden ' >
      <List
            role="menu"
            aria-label="Products"
            variant="outlined"
            orientation="horizontal"
            sx={{
              mt: 0,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '2px',
              '--ListDivider-gap': '2px',
              '--ListItemDecorator-size': '24px',
              width:'100%',
              backgroundColor:'transparent',
              alignItems:'center',
              
              
             
            }}
          >
                <ListItem role="none" sx={{mr:"0"}}>
              
              <ListItemButton 
               onClick={handleClick1}
               >
                 <NavLink  to={'/allgas'} style={{ textDecoration: "none",fontSize:"18px",color:"oklch(0.681 0.162 75.834)" }}>یخچال و فریزر </NavLink>
             
               
              <ArrowDropDownIcon sx={{fontSize:{xs:"2em",lg:"1.5em"},mt:"0.3em",color:"oklch(0.681 0.162 75.834)" }} /></ListItemButton>
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
        <MenuItem onClick={handleClose1} disableRipple>
        
        <NavLink  onClick={handleClose1}  disableRipple  to={'/shop-refrigeratorfrenchdoor' } 
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }} > 
         یخچال های دو در   </NavLink> 
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          <NavLink className='navlink' to={'/shop-refrigeratorsidbysid'}
          style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }} > 
           یخچال های ساید بای ساید </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink   to={'/shop-refrideratorbottomfreezer'} 
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }}>
        یخچال و فریزر پایین 
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink  to={'/shop-refrideratortopfreezer'}
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141" }}>
        یخچال و فریزر بالا 
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink  to={'/shop-refrideratorspecializedfreezer'}
        style={{ textDecoration: "none",fontSize:"1.2em",color:"#414141"}}>
        یخچال و فریزر تخصصی 
        </NavLink></MenuItem>
      </Menu>
            </ListItem>
            <ListItem role="none" sx={{mr:"0"}}>
            <NavLink  to={'/shop-washing-machine'} style={{  textDecoration: "none",fontSize:"18px",color:"#585858" }}>ماشین لباسشویی</NavLink>
            </ListItem>

            <ListItem role="none" sx={{mr:"0"}}>
            <NavLink  to={'/allgas'} style={{ textDecoration: "none",fontSize:"18px",color:"#585858" }}>پخت و پز  </NavLink>
            </ListItem>
            <ListItem role="none" sx={{mr:"0"}}>
               <NavLink to={'/shop-dishwasher'} style={{ textDecoration: "none",fontSize:"18px",color:"#585858" }} >ماشین ظرفشویی</NavLink>    
            </ListItem>
          </List>
        </div>
        
   <AllRefrigerators itemsPerPage={8}/>
<SlideOffProducts/>
          <Footer/>
</>
  );
}


