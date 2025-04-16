import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardCookTop  from './CardCookTop';
import Footer from '../../../Footer/Footer';
import TopNav from '../../../dashbord/TopNav';
import { PageTitle } from '../../../Title/PageTitle';
import SlideOffProducts from "../../../Product/SlideOffProducts";
import ListItemButton from '@mui/material/ListItemButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../../Dishwasher/Dishwasher.css";
export default  function CookTops() {
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
<PageTitle title="پخت و پز / اجاق گاز صفحه ای" description= "پخت و پز / اجاق گاز صفحه ای" />
   <TopNav/> 
   <Box sx={{display:"flex",justifyContent:"end",mb:{xs:1,md:1} ,mt:{xs:10,lg:0.7} ,mx:0.5 }} >
      <List
            role="menu"
            aria-label="Products"
            variant="outlined"
            orientation="horizontal"
            sx={{
              mt: 1,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '2px',
              '--ListDivider-gap': '2px',
              '--ListItemDecorator-size': '24px',
              width:'100%',
              backgroundColor:'#E0E1E3',
              alignItems:'center',
              
             
            }}
          >
             <ListItem role="none">
              
              <ListItemButton 
               onClick={handleClick1}
               sx={{color:"#E0AA3E",fontSize:"24px",mx:0,px:0}}
               >
                پخت و پز 
               
              <KeyboardArrowDownIcon /></ListItemButton>
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
        
        <NavLink  onClick={handleClose1}  disableRipple className='navlink' to={'/shop-ranges' }  > اجاق گاز و فر </NavLink> 
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple>
          <NavLink className='navlink' to={'/shop-cooktop'} > گاز رومیزی </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink className='navlink'  to={'/shop-hood'}>
        هود
        </NavLink></MenuItem>
        <MenuItem onClick={handleClose1} disableRipple><NavLink className='navlink' to={'/shop-microwaves'}>
      مایکروویو
        </NavLink></MenuItem>
      </Menu>
            </ListItem>
                <ListItem role="none">
            <NavLink className='navlinkin' to={'/allrefriderators'}> یخچال و فریزر</NavLink>
            </ListItem>
            <ListItem role="none">
            <NavLink className='navlinkin' to={'/shop-washing-machine'}>ماشین لباسشویی</NavLink>
            </ListItem>
           
            <ListItem role="none">
               <NavLink className='navlinkin '  to={'/shop-dishwasher'} >ماشین ظرفشویی</NavLink>    
            </ListItem>
          </List>
        </Box>
        
        
   <CardCookTop itemsPerPage={6}/>
   <SlideOffProducts/>
          <Footer/>
</>
  );
}


