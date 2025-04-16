import * as React from 'react';
import { Facebook, Instagram,  Telegram ,LinkedIn ,WhatsApp} from "@mui/icons-material";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Box from '@mui/material/Box';
import dishwashericon from '../img/dishwasher-icon.jpg';
import washingmachins from '../img/washingmachin-icon2.png';
import gasicon from '../img/gas-icon2.jpg';
import Refrigeratoricon from '../img/Refrigerator-icon1.png';
import {  Typography } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {NavLink} from 'react-router-dom';
import './Footer.css';
import Divider from '@mui/material/Divider';
export default function Footer() {
  return (
    <div className='flex flex-col bg-zinc-900 px-3' >
       <div className='bg-zinc-900 flex flex-col md:flex-row' >
        <div className='mx-0 mt-5 bg-zinc-900 flex  self-center justify-center flex-row w-[100%] md:w-[60%] '>
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
             m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"oklch(0.21 0.006 285.885)"
            }}   
          >
            <ListItem >
            <ListItemDecorator>
              <img src={Refrigeratoricon} className='w-[30px] md:w-[50px]' alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem >
           
            <NavLink className='navlinkfooter'  to={'/allrefriderators'}  
            style={{ textDecoration: "none",fontSize:"16px",color:"oklch(0.945 0.129 101.54)" }}>  یخچال و فریزر </NavLink>
            </ListItem>
            <Divider component="li" />
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-refrigeratorsidbysid'}
              style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}> ساید بای ساید </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-refrideratortopfreezer'} 
            style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}> فریزر بالا</NavLink>
            </ListItem>
            <ListItem >
               <NavLink className='navlinkwhite' to={'/shop-refrideratorbottomfreezer'}
                style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}>فریزر پایین </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-refrigeratorfrenchdoor'}
             style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}> فریزر دو در</NavLink>
            </ListItem>
            <ListItem >
               <NavLink className='navlinkwhite' to={'/shop-refrideratorspecializedfreezer'} 
               style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}>یخچال و فریزر تخصصی</NavLink>
            </ListItem>
          </List>
    
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"oklch(0.21 0.006 285.885)"
            }}  
          >
            <ListItem >
            <ListItemDecorator>
              <img src={gasicon} className='w-[30px] md:w-[50px]' alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem>
            <NavLink  className='navlinkfooter' to={'/allgas'}
              style={{ textDecoration: "none",fontSize:"16px",color:"oklch(0.945 0.129 101.54)" }}>   اجاق گاز   </NavLink>
            </ListItem>
      <Divider component="li" />
            <ListItem>
            <NavLink className='navlinkwhite' to={'/shop-ranges'}
              style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}>  اجاق گاز و فر </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-cooktop'} 
              style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}> گاز صفحه ای</NavLink>
            </ListItem>
            <ListItem >
               <NavLink className='navlinkwhite' to={'/shop-hood'} 
                 style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}>هود </NavLink>
            </ListItem>
            <ListItem >
            <NavLink className='navlinkwhite' to={'/shop-microwaves'} 
              style={{ textDecoration: "none",fontSize:"14px",color:"#8a8a8a" }}>مایکروویو</NavLink>
            </ListItem>
          </List>
   
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"oklch(0.21 0.006 285.885)"
            }}  
          >
            <ListItem >
            <ListItemDecorator>
              <img src={washingmachins} className='w-[30px] md:w-[50px]' alt='' />
              </ListItemDecorator>
            </ListItem>
            <ListItem >
            <NavLink  className='navlinkfooter' to={'/shop-washing-machine'} 
            style={{ textDecoration: "none",fontSize:"16px",color:"oklch(0.945 0.129 101.54)" }}  >   ماشین لباسشویی  </NavLink>
            </ListItem>
            <Divider component="li" />
            
          </List>
     
       
       
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              m:"auto",
              border:'none',
              backgroundColor:'#fff',
              height:'350px',
              alignItems:'start',
              bgcolor:"oklch(0.21 0.006 285.885)"
            }}
          >
            <ListItem >
            <ListItemDecorator>
              <img src={dishwashericon} className='w-[30px] md:w-[50px]'  alt=''/>
              </ListItemDecorator>
            </ListItem>
            <ListItem >
            <NavLink  className='navlinkfooter' to={'/shop-dishwasher'}
              style={{ textDecoration: "none",fontSize:"16px",color:"oklch(0.945 0.129 101.54)" }}>ماشین ظرفشویی </NavLink>
            </ListItem>
          </List>
          </div>
          <div className='mx-0 bg-zinc-900 flex flex-col  w-[100%] md:w-[40vw] self-center justify-start md:justify-center py-12 sm:py-5 md:mt-8 px-5 '>
          <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
            <Typography  sx={{color:"#8a8a8a",textAlign:"justify",fontSize:"1em",mb:"3em"}}>
            در فروشگاه 
          <NavLink style={{ textDecoration: "none",fontSize:"1em",color:"oklch(0.945 0.129 101.54)" }} to={"/"} >  “سهیل” </NavLink> 
             می توانید  لوازم خانگی خارجی اعم از  یخچال فریزر، ماشین لباسشویی، 
            ماشین ظرفشویی و لوازم پخت و پز را با سهولت کامل خریداری کنید. قیمت رقابتی، فروش اقساطی، ارسال سریع به تمام نقاط ایران، تنوع بالای محصولات، فروشگاه “سهیل” را به یکی از معتبرترین فروشگاه آنلاین در ایران تبدیل نموده است. همکاران ما در  “سهیل” همواره سعی نموده‌اند اطلاعات کامل و دقیقی را نسبت به محصولات، شیوه‌های ارسال، نحوه‌ی پرداخت، گارانتی محصولات و… در اختیار مشتریان عزیز قرار دهند و خط مشی ما، جلب رضایت مشتری در تمامی مراحل خرید آنلاین است.
            </Typography>
            </Box>
            <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <PlaceOutlinedIcon sx={{pr:0,pt:0,mt:1,color:"oklch(0.945 0.129 101.54)",fontSize:"22px"}}/> 
      <Typography  sx={{pr:"1em",py:"0.5em",color:"#8a8a8a",fontSize:"1em"}}> دفتر مرکزی: تهران، سعادت آباد، میدان کتاب، بلوار کوهستان، نبش گل‌گشت، پلاک 2/1</Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <PhoneEnabledOutlinedIcon sx={{pr:0,pt:0,mt:1,color:"oklch(0.945 0.129 101.54)",fontSize:"22px"}}/> 
      <Typography  sx={{pr:"1em",py:"0.5em",color:"#8a8a8a",fontSize:"1em"}}> <NavLink className={"linkacont"}> 
09300318282</NavLink> </Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <EmailOutlinedIcon sx={{pr:0,pt:0,mt:1,color:"oklch(0.945 0.129 101.54)",fontSize:"22px"}}/>
     <Typography  sx={{pr:"1em",py:"0.5em",color:"#8a8a8a",fontSize:"1em"}}>  <NavLink className={"linkacont"}> 
elhamfarhangian6@gmail.com </NavLink> </Typography> 
      
     
    </Box>
            </div>
            </div>
          <div   >
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
            sx={{
              my: 0,
              border:'none',
              backgroundColor:'oklch(0.21 0.006 285.885)',
              height:'90px',
              alignItems:'center',
              width:'100%',
            }}
             > 
              <ListItem>
              <Typography level='h6' sx={{color:'#ececec',mt:0}}> سهیل در شبکه های اجتمایی</Typography>
              </ListItem>
              <ListItem>
                <List  
            aria-label="Products"
            variant="outlined"
            orientation="horizontal"
            sx={{border:'none'}}
            >     
                <NavLink  className='navicon1'><Facebook  sx={{fontSize:"1em",color:"#3e98ed"}}/></NavLink>
                <NavLink  className='navicon2'><Instagram sx={{fontSize:"1em",color:"#f35131"}} /></NavLink>
                <NavLink  className='navicon3'><Telegram  color="info" sx={{fontSize:"1em"}} /></NavLink>
                <NavLink  className='navicon4'><WhatsApp   sx={{fontSize:"1em",color:"#4fe69b"}} /></NavLink>
                <NavLink className='navicon5'><LinkedIn   sx={{fontSize:"1em",color:"#3e98ed"}} /></NavLink>
              </List>
              </ListItem> 
            
            </List>
          </div>
      <Box sx={{bgcolor:'oklch(0.21 0.006 285.885)',mb:3,mt:0}}>
        <Typography sx={{textAlign:'center',fontSize:"14px",color:'#8a8a8a',mt:8}}>
           © 1384-1402 Copyright:سهیل -کلیه حقوق محفوظ است
        </Typography>
      </Box>
     
    </div>
  );
}
