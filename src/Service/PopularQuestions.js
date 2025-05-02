import React from 'react';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import './service.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import  img2 from "../img/Questions-pana2.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import mass from "../img/mass2.png";
import { NavLink } from 'react-router-dom';
function PopularQuestions() {
    const [index, setIndex] = React.useState(null);

  return (
    <>
    <PageTitle title='سهیل / خدمات / سوالات متداول' description=' سهیل '/>
    <TopNav />



    <div 
    className='flex justify-center flex-col md:flex-row  bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 w-full h-auto md:h-[300px]
    items-center self-center mt-0' >
    <div className='flex justify-center flex-col self-center w-[95%] md:w-[50%] mx-auto mt-3 '>    
<p  className='text-gray-700 py-3 text-center font-bold text-2xl' >
سئوالات متداول
</p>
<p className='text-center text-[14px] md:text-md text-gray-800 font-sans my-1'>
پاسخ به مهم‌ترین سوالات و دغدغه‌های شما
</p>
<div dir='rtl' className='border-2 border-gray-700 flex justify-center self-center my-3'>
   <IconButton type="button" sx={{ p: '10px',color:"#282828" }} aria-label="search" >
        <SearchIcon />
      </IconButton> 
      <InputBase
        sx={{direction:"rtl", mr: 3, flex: 1,color:"white" }}
        type="text"
        placeholder="در اینجا جستجو کنید"
        inputProps={{ 'aria-label': 'جستجوی محصولات سهیل' }}
      
      />
   </div>
   </div> 
   <img className='imgsohil' width={300} height={200} alt=''
         src={img2}/>

       </div>
       <div className='flex flex-col bg-inherit w-[90%] mx-auto' >
       <div className='bordershadow flex flex-col justify-center items-center mx-auto mt-10 mb-6 w-[250px]  '  >
       <p  className='text-lg text-center text-[#371303] px-5 pb-3 font-bold  '>  متداول ترین سوالات </p>
</div>
      <div className='flex flex-col justify-center my-5 mx-auto '>
       
      <Accordion sx={{mt:2}}
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
          
        }}
      >
        <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}> بازه ی زمانی برگزاری جشنواره چه مدت است؟ 
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}> بازه زمانی تعریف شده برای جشنواره های فروش محدود است. زمان پایان جشنواره متعاقباً در وب سایت اعلام می گردد.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}> کدام کد مدل ها مشمول جشنواره میگردد؟ 
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>کد مدل های مشمول جشنواره را از این صفحه مشاهده نمایید.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion 
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        منظور از مناطق ویژه چیست؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>منظور از مناطق ویژه، استان‌های: آذربایجان غربی، کردستان، کرمانشاه، همدان، ایلام، خوزستان، بوشهر، هرمزگان، سیستان و بلوچستان، کرمان، کهگیلویه و بویراحمد، فارس، لرستان و زنجان می‌باشد. گاهاً مبلغ جشنواره در این مناطق متفاوت می‌باشد. </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion 
        expanded={index === 3}
        onChange={(event, expanded) => {
          setIndex(expanded ? 3 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       جشنواره به چه صورت پرداخت میگردد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>مبلغ جشنواره بصورت نقدی و از طریق شماره شبای اعلام شده هنگام فعالسازی کد تخفیف پرداخت می‌شود. </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion 
        expanded={index === 4}
        onChange={(event, expanded) => {
          setIndex(expanded ? 4 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       ایا فقط خریدهای نقدی مشمول جشنواره میگردد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>خیر – خریدهای نقدی و اقساطی به شرط خرید در بازه اعلام شده، مشمول جشنواره می‌شود. </Typography>
        </AccordionDetails>
      </Accordion>
   
      <Accordion 
        expanded={index === 5}
        onChange={(event, expanded) => {
          setIndex(expanded ? 5 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       ایا قبل از نصب محصول میتوان کد تخفیف را فعال کرد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>خیر - برای فعالسازی کد تخیف حتماً بایستی نصب محصول انجام شده باشد. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 6}
        onChange={(event, expanded) => {
          setIndex(expanded ? 6 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        اعتبار کد تخفیف تا چه زمانی می باشد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>اعتبار کد تخفیف به مدت محدود می‌باشد. بنابراین بهتر است هر چه سریعتر نسبت به فعالسازی آن اقدام نمود.

شرکت اسنوا بعد از اتمام جشنواره هیچ مسئولیتی در قبال کد تخفیف غیر فعال ندارد. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 7}
        onChange={(event, expanded) => {
          setIndex(expanded ? 7 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        جشنواره به چه کسانی تعلق میگیرد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>کد تخفیف جهت خریدارانی ارسال می‌گردد که محصولات جشنواره را از تاریخ شروع جشنواره به مدّت محدود خریداری و نصب نمایند. </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 8}
        onChange={(event, expanded) => {
          setIndex(expanded ? 8 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
        شماره ی شبا بایستی مربوط به کدام بانک باشد؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>
شماره شبا بایستی مربوط به بانکهای تلفیق شده و حساب های راکد نباشد. </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion
        expanded={index === 9}
        onChange={(event, expanded) => {
          setIndex(expanded ? 9 : null);
        }}
      >
              <AccordionSummary   sx={{':hover':{color:"#E0AA3E"},color:"#585858",fontSize:{xs:"14px",md:'16px'}}}  
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#E0AA3E"},fontSize:{xs:"18px",md:"22px"}}} />}>   
       منظور از کد جشنواره چیست؟
        </AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5},mt:0,pt:0}}>
       <Typography variant='body1' sx={{color:"#414141"}}>منظور همان کد تخفیفی است که از طریق پیامک به شماره پذیرش مصرف کننده اختصاص داده می‌شود. این کد حاوی یک کد شش حرفی به نام کد تخفیف می‌باشد. </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
</div>
<div 
 className='flex justify-center flex-col-reverse md:flex-row-reverse  bg-gradient-to-r  from-yellow-500 via-gray-500 to-yellow-500 w-full h-auto md:h-[300px]
    items-center self-center mt-0'
     >
         <img className='imgsohil' width={300} height={200} alt=''
         src={mass}/>  
      
          <div  className='flex justify-center flex-col self-center w-[95%] md:w-[50%] mx-auto mt-3 '>    
<p  className='text-gray-700 py-3 text-center font-bold text-2xl'>
پاسخ سوال خود را پیدا نکردید؟
</p>
<p className='text-center text-[14px] md:text-md text-gray-800 font-sans py-1'>
شما می‌توانید با پر کردن فرم تماس و پرسیدن سوال خود با ما در تماس باشید
</p>
<div dir='rtl' className=' flex justify-center self-center my-3'>
  <NavLink to={'/ContactUsForm'}>
<button className='button1'  >  <span className='formbutton'>  تماس با ما</span>   </button></NavLink>
</div>
   </div> 
        </div>
    
      <Footer/>
    
      </>
  );
}

export default PopularQuestions;
