import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {NavLink} from 'react-router-dom';
import CardWashingMachine from './CardWashingMachine';
import Footer from '../../Footer/Footer';
import TopNav from '../../dashbord/TopNav';
import { PageTitle } from '../../Title/PageTitle';
import SlideOffProducts from "../../SlideOffProducts";
import "../Dishwasher/Dishwasher.css";
export default  function WashingMachine() {
  return (
<>

<PageTitle title='ماشین لباس شویی' description=' ماشین لباس شویی '/>
   <TopNav/> 
   <div className='sscrol flex justify-end  mb-2 mt-0 mx-auto bg-zinc-100 z-10  overflow-x-auto  h-[80px] py-0 ' >
   <List
         role="menu"
         aria-label="Products"
         variant="outlined"
         orientation="horizontal"
         sx={{
           mt: 0,
        
          
           '--List-padding': '0.6px',
           '--ListDivider-gap': '0px',
           '--ListItemDecorator-size': '24px',
           width:'100%',
           backgroundColor:'transparent',
           alignItems:'center',
           border:"none"
           
          
         }}
       >
   <NavLink  to={'/shop-washing-machine'} style={{  textDecoration: "none" }}> 
         <ListItem role="none"
          sx={{mr:"0",fontSize:"16px",color:"oklch(0.681 0.162 75.834)",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
        ماشین لباسشویی 
         </ListItem></NavLink>
         <NavLink  to={'/allrefriderators'} style={{ textDecoration: "none"}}> 
         <ListItem role="none" sx={{mr:"0",fontSize:"16px",color:"#414141",':hover':{color:"oklch(0.681 0.162 75.834)"}}}>
        یخچال و فریزر </ListItem>
         </NavLink>
        
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
          <CardWashingMachine itemsPerPage={6}/>
      <SlideOffProducts/>
          <Footer/>
   </>
   );}    
  
