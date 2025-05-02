import * as React from 'react';
import './Bannerus.css';
import { Box, Grid, Typography } from '@mui/material';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
export default function Sheetus2() {
  return (
    <>
    <div className='bg-white my-10' >
    <div className='boxheader bg-black bg-opacity-80  flex flex-col justify-center items-center mx-auto mb-5 w-[250px]  '  >
   <p className='text-yellow-300 p-2  text-center font-bold text-xl' >
ارزش‌ های ما

   </p>
   </div>
  
       <div className='flex flex-col justify-center md:flex-row '>
        <div className='flex flex-col justify-center bg-[#464541] px-3 md:px-5 py-3 md:w-[50vw]'>
           <QrCodeOutlinedIcon sx={{mt:1,mb:0,fontSize:{xs:'65px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
            <p className='text-white py-2 px-5  text-right font-bold text-xl'>هویت یکپارچه</p>
            <p className='text-justify text-sm  text-yellow-50 font-sans px-5 py-2 '>
ما به استانداردهای اخلاقی پایبندیم و تلاش می‌کنیم تا از این راه به هویت 
یکپارچه برسیم. یکپارچگی حرفه‌ای از برنامه‌ریزی تا اجرا، از نقاط قوت ماست و برای حفظ و نگهداری‌ش، 
همه‌ی تلاشمون رو می‌کنیم.</p>
        </div>
        <div className='flex flex-col justify-center bg-[#292826] px-3 md:px-5 py-3  md:w-[50vw]'>
        <HandshakeOutlinedIcon sx={{mt:1,mb:0,fontSize:{xs:'65px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
        <p className='text-white py-2 px-5  text-right font-bold text-xl'> مشارکت واقعی</p>
            <p className='text-justify text-sm  text-yellow-50 font-sans px-5 py-2 '>
            تاکید ما اینه که با کسب‌وکارهای منطقه‌ای مشارکت قوی داشته باشیم. عنصر اصلی موفقیت ما تعهد
             به شرکاست و همیشه برای رشد و پیشرفت فکری‌مون، به اعتماد متقابل و شیوه‌های کاری منضبط، اصرار داریم</p>
        </div>
    </div>

    <div className='flex flex-col justify-center md:flex-row '>
        <div className='flex flex-col justify-center bg-[#464541] px-3 md:px-5 py-3  md:w-[50vw] '>
           <ModelTrainingOutlinedIcon  sx={{mt:1,mb:0,fontSize:{xs:'65px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
            <p className='text-white py-2 px-5  text-right font-bold text-xl'> رهبری فکری </p>
            <p className='text-justify text-sm  text-yellow-50 font-sans px-5 py-2 '>            رهبری فکری، عنصر اصلی برای موفقیت اقتصادیه!
            گروه‌های متخصص اسنوا به دلیل داشتن رهبری فکری، در زمینه‌ی تولید، توسعه و طرح‌های نوآورانه همیشه پیش‌تاز بوده و هستن!</p>
        </div>
        <div className='flex flex-col justify-center bg-[#292826] px-3 md:px-5 py-3  md:w-[50vw]'>
        <AdsClickOutlinedIcon sx={{mt:1,mb:0,fontSize:{xs:'65px',md:'65px'},alignSelf:'center',color:'#E0AA3E'}}/>
        <p className='text-white py-2 px-5  text-right font-bold text-xl'>   تمرکز بر مردم </p>
            <p className='text-justify text-sm  text-yellow-50 font-sans px-5 py-2 '>
            جهان بدون مردم معنایی نداره و ما اسنوایی‌ها متعهد به مردم و تعالی جهانی هستیم.
             جهانی که در اون کار و زندگی می‌کنیم، جهانی که مردمش لایق بهترین‌هان </p>    
                 </div>
    </div>
  
  
    </div>
    </>
  )}
  