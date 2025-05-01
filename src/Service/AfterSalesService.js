import React, { useState,useEffect,useRef } from 'react';
import {Box} from '@mui/material';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import '../Product/Products.css';
import {useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
function AfterSalesService() {
  const navigate=useNavigate();
  useEffect(()=>{
let username=sessionStorage.getItem("id");
if(username===""|| username===null){

}
  },[]);

 const sheet1 =useRef();
 const sheet2 =useRef();
 const sheet3 =useRef();
 const sheet4 =useRef();
 const sheet5 =useRef();
 const sheet6 =useRef();
 const sheet7 =useRef();
 const sheet8 =useRef();

 const scrollToElement1 = () => {
  sheet1.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement2 = () => {
  sheet2.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement3 = () => {
  sheet3.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement4 = () => {
  sheet4.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement5 = () => {
  sheet5.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement6 = () => {
  sheet6.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement7 = () => {
  sheet7.current.scrollIntoView({ behavior: "smooth" });
}
const scrollToElement8 = () => {
  sheet8.current.scrollIntoView({ behavior: "smooth" });
}
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);
  useEffect(()=> {
    const interval = setInterval(()=>{
      change();},4000);
      return()=>{
        clearInterval(interval);};},[photo,type]);

        const change=()=>{
          if(photo === 4 && type === 4){
            setPhoto(1);
            setType(1);
            return;
          }
          setPhoto((prev) => prev+1);
          setType ((p) => p+1);
        };
        const returnPhotoURL=()=>{
          switch(photo){
            case 1: return 'https://www.smartsinga.com/wp-content/uploads/2022/12/5-Best-Oven-Repair-Services-in-Singapore.jpg';
            case 2: return 'https://images.airtasker.com/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_AU/1724048007182-appliance-installation.jpg';
            case 3: return 'https://mobileimages.lowes.com/marketingimages/d37b41ad-aa2f-41af-a38c-fa1d5df6368d/appliance-installation-services-og.png';
            case 4: return 'https://www.smartappliance.co.za/wp-content/uploads/2024/02/repair-a-fridge-freezer-1024x768.webp';
            default: return null;
          }
       
        }; 

  return (
    <>
    <PageTitle title='سهیل / خدمات / خدمات پس از فروش   ' description=' سهیل '/>
    <TopNav />

    <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>

    <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       
       backgroundImage: `url(${returnPhotoURL()})`,
       backgroundPosition: 'center',
       backgroundSize:'cover',
       backgroundRepeat: 'no-repeat',
       width:'100%',
       height:"90vh",
     alignItems:"end",
     alignSelf:"end"
       }} >
    
    <div className="flex justify-center overflow-x-auto [&::-webkit-scrollbar]:w-0 py-1 bg-zinc-100 w-[100%] mx-3  h-[160px] ">
    <ul className=" flex uppercase font-bold mr-1">
       <li>
        <button onClick={scrollToElement1} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img  className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]'  alt='' src='https://snowa.ir/wp-content/uploads/2023/03/1-sla.svg'/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
             ۳۰ روز ضمانت تعویض
          </p>
         </button>
         </li>
         <li>
        <button onClick={scrollToElement2} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]'  alt='' src='https://snowa.ir/wp-content/uploads/2023/03/2-sla.svg'/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
        سه ماه تعویض راﯾﮕﺎن
          </p>
         </button>
         </li>
         <li>
        <button onClick={scrollToElement3} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]' alt='' src='https://snowa.ir/wp-content/uploads/2023/03/3-sla.svg'/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
        ضمانت کمپرسور
          </p>
         </button>
         </li>
         <li>
        <button onClick={scrollToElement4} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]'   alt='' src=' https://snowa.ir/wp-content/uploads/2023/03/4-sla.svg'/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
        تعویض مادام العمر
          </p>
         </button>
         </li> 
         <li>
        <button onClick={scrollToElement5} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]'   alt='' src="https://snowa.ir/wp-content/uploads/2023/03/5-sla.svg"/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
        خدمات ۷ روز هفته
          </p>
         </button>
         </li>
         <li>
        <button onClick={scrollToElement6} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]'  alt='' src="https://snowa.ir/wp-content/uploads/2023/03/6-sla.svg "/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
        تضمین ارائه خدمات
          </p>
         </button>
         </li>
         <li>
        <button onClick={scrollToElement7} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]'   alt='' src=" https://snowa.ir/wp-content/uploads/2023/03/7-sla.svg"/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
        ۶ ماه ضمانت تعمیر
          </p>
         </button>
         </li>
         <li>
        <button onClick={scrollToElement8} className='bg-inherit w-[100px] mx-5 flex flex-col justify-center items-center  '>
        <img className='hover:scale-125 w-[50px] h-[50px] md:w-[70px] md:h-[70px]' alt='' src=" https://snowa.ir/wp-content/uploads/2023/03/8-sla.svg"/>
        <p className='text-sm text-center text-gray-700 px-1 hover:text-[#64b3f4] mt-2 '>
        تحویل محصول جایگزین  
          </p>
         </button>
         </li>
          </ul>
         </div>
      </Box>      
    <div ref={sheet1} className='flex flex-col md:flex-row bg-white px-1 md:px-3 mx-auto my-2'>
       <div className='flex justify-start md:justify-center flex-col my-2  px-2 w-full' >
         <div className='flex justify-center  bg-gradient-to-r from-[#c2e59c]  via-[#64b3f4] to-[#c2e59c] my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
          <p className='text-black py-3 text-start font-bold text-xl md:text-2xl' >
          ضمانت تعویض ۳۰ روز
         </p>
         </div>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
         یک ماه تعویض محصول یا بازگشت وجه بدون قید و شرط
         </p>
         <p  className='text-justify text-md text-gray-500 font-sans' >ضمانت ۳۰ روز تعویض یا بازگشت وجه دستگاه از زمان فروش، به مصرف کنندگان عزیز این امکان را می دهد تا هر زمان از این دوره، احساس کنند که محصول انتظارات ایشان را برآورده نمی کند حق عودت وجه یا تعویض آن با محصول دیگر محفوظ می گردد.
         </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl' >
         نکات قابل توجه:
        </p>
        <List
sx = {{
    px:3,
 listStyleType: 'disc',
 pl: 2,
 '& .MuiListItem-root': {
  display: 'list-item',
 },
}}>
      <ListItem>  ثبت سفارش و فروش اشتباه شامل این طرح نمی گردد</ListItem>
      <ListItem>امکان عودت وجه برای خرید اقساطی امکان پذیر نمی باشد </ListItem>
      <ListItem>  دستگاه نباید توسط مصرف کننده دچار آسیب شده باشد</ListItem>
      <ListItem>  از مخدوش کردن اطلاعات روی محصول خودداری نمائید</ListItem>
      <ListItem>در صورتی که درخواست عودت محصول آکبند دارید به بسته بندی محصول آسیب نرسانید </ListItem>
      <ListItem>  در فرآیند تعویض بی قید و شرط، محصول باید در بسته بندی و بهمراه متعلقات عودت گردد</ListItem>
      <ListItem> بازکردن بسته بندی ، نصب و راه اندازی دستگاه باید توسط سرویسکار مجاز شرکت انتخاب سرویس انجام شده باشد</ListItem>
      <ListItem>هزینه حمل و نقل عودت محصول ، در صورت درخواست مصرف کننده به عهده ایشان است </ListItem>
      <ListItem> مابه التفاوت تغییر مدل محصول بر اساس قیمت درب کارخانه محاسبه می گردد (تغییر مدل در شرایط نادر و در صورت عدم وجود عین محصول مقدور است)</ListItem>
      <ListItem>عودت وجه بر اساس قیمت فاکتورفروش مصرف کننده می باشد و ارائه اصل فاکتور فروش، الزامی است </ListItem>
      <ListItem> مبلغ جشنواره ( پرداخت شده ) از مبلغ فاکتور فروش کسر می گردد</ListItem>
    </List>
   
        </div>
        <Box
        className='washimg'
          sx={{
           
            display:"flex",
            justifyContent:"center",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12015.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
          mt:{xs:0,md:25},
            mx:"auto"
          
       
            }}
        >
        </Box>
        </div>
        <div ref={sheet2}  className='my-2 mx-auto px-1 md:px-3 py-1 flex flex-col-reverse md:flex-row
          bg-gradient-to-r from-gray-300
             via-yellow-300 to-gray-300'> 
        <Box
            className='washimg'
          sx={{
        
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Asset1.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          mx:"auto"
       
            }}
        >
        </Box>
        <div className='flex justify-start md:justify-center flex-col my-2  px-2 w-full' >
       <div className='flex justify-center  bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
          <p className='text-black py-3 text-start font-bold text-xl md:text-2xl'  >
          ﺳﻪ ﻣﺎه ﺗﻌﻮﯾﺾ راﯾﮕﺎن ﻣﺤﺼﻮل
         </p>
         </div>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
         در ﺻﻮرت ﺑﺮوز ﺧﺮاﺑﯽ از زﻣﺎن ﻧﺼﺐ
         </p>
         <p  className='text-justify text-md text-gray-700 font-sans'>
در صورتیکه محصول نصب شده طی دوره سه ماهه اول دچار خرابی ذاتی شود حق تعویض یا عودت وجه برای مصرف کننده محفوظ است. خرابی ذاتی به عیوبی اطلاق می گردد که خود یا پتانسیل آن عیب، ناشی از فرآیند تولید یا عملیات لجستیک باشد
            </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
         نکات قابل توجه:
        </p>
        <p  className='text-justify text-md text-gray-700 font-sans'>
        بازه ۳ ماهه از تاریخ نصب محصول محاسبه می گردد
دستگاه نباید بدلیل استفاده نادرست مصرف کننده دچار آسیب شده باشد
بازکردن بسته بندی ، نصب و راه اندازی دستگاه باید توسط سرویسکار مجاز شرکت
کلیه هزینه های نقل و انتقال دستگاه در صورت تایید خرابی ذاتی به عهده شرکت انتخاب سرویس است
            </p>
         
        </div>
      
        </div>


        <div ref={sheet3} className='flex flex-col md:flex-row bg-white px-1 md:px-3 mx-auto my-2'> 
        <div className='flex justify-start md:justify-center flex-col my-2  px-2 w-full' >
       <div className='flex justify-center  bg-gradient-to-r from-[#c2e59c]  via-[#64b3f4] to-[#c2e59c] my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
          <p  className='text-black py-3 text-start font-bold text-xl md:text-2xl'  >
          ۱۲۰ ماه ضمانت کمپرسور
         </p>
         </div>
         <p  className='text-gray-700 py-3 text-start font-bold text-xl' >
         ﻣﺤﺼﻮﻻت ﺑﺮودﺗﯽ و ﻣﻮﺗﻮرﻫﺎی داﯾﺮﮐﺖ دراﯾﻮ
         </p>
         <p className='text-justify text-md text-gray-500 font-sans'>
         در صورتیکه محصول نصب شده طی دوره سه ماهه اول دچار خرابی ذاتی شود حق تعویض یا عودت وجه برای مصرف کننده محفوظ است. خرابی ذاتی به عیوبی اطلاق می گردد که خود یا پتانسیل آن عیب، ناشی از فرآیند تولید یا عملیات لجستیک باشد
            </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'>
         نکات قابل توجه:
        </p>
        <p  className='text-justify text-md text-gray-500 font-sans'>
        بازه ۳ ماهه از تاریخ نصب محصول محاسبه می گردد
دستگاه نباید بدلیل استفاده نادرست مصرف کننده دچار آسیب شده باشد
بازکردن بسته بندی ، نصب و راه اندازی دستگاه باید توسط سرویسکار مجاز شرکت انتخاب سرویس انجام شده باشد
کلیه هزینه های نقل و انتقال دستگاه در صورت تایید خرابی ذاتی به عهده شرکت انتخاب سرویس است
            </p>
      
        </div>
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12017.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          mx:"auto"
          
       
            }}
        >
        </Box>
        </div>
        <div ref={sheet4}  className='my-2 mx-auto px-1 md:px-3 py-1 flex flex-col-reverse md:flex-row
          bg-gradient-to-r from-gray-300
             via-yellow-300 to-gray-300'> 
       <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12026.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        <div className='flex justify-start md:justify-center flex-col my-2  px-2 w-full' >
       <div className='flex justify-center  bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
          <p  className='text-black py-3 text-start font-bold text-xl md:text-2xl'  >
          اراﺋﻪ ﭘﺸﺘﯿﺒﺎﻧﯽ
         </p>
         </div>
         <p  className='text-gray-700 py-3 text-start font-bold text-xl' >
         ﯾﺎ ﺗﺴﻬﯿﻼت ﺗﻌﻮﯾﺾ ﻣﺎدام اﻟﻌﻤﺮ ﻣﺤﺼﻮﻻت
         </p>
         <p  className='text-justify text-md text-gray-700 font-sans'>
         عهد مادام العمر تامین قطعات محصولات گروه انتخاب به مصرف کنندگان این فرصت را می دهد تا زمانی که امکان تعمیر برای محصول وجود داشته باشد از دستگاه استفاده نمایند . در صورت عدم تامین قطعه یا عدم تعمیر محصول فرصت تعویض دستگاه با دستگاه های موجود، بهمراه تسهیلات خرید برای مصرف کننده محفوظ می گردد
            </p>  
         <p  className='text-gray-700 py-3 text-start font-bold text-xl'  >
         نکات قابل توجه:
        </p>
        <p className='text-justify text-md text-gray-700 font-sans'>  
افت قیمت محصول در دوره گارانتی محاسبه نمی گردد
در دوره خارج از گارانتی ، به ازای هر ماه کارکرد محصول از زمان نصب ، ۱% از قیمت روز دستگاه کسر می گردد
تسهیلات ارائه شده بر اساس طرحهای فروش روز به مصرف کننده ارائه می گردد
        </p>
        </div>
        </div>
   
   
        <div ref={sheet5} className='flex flex-col md:flex-row bg-white px-1 md:px-3 mx-auto my-2'> 
        <div className='flex justify-start md:justify-center flex-col my-2  px-2 w-full' >
       <div className='flex justify-center  bg-gradient-to-r from-[#c2e59c]  via-[#64b3f4] to-[#c2e59c] my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
          <p className='text-black py-3 text-start font-bold text-xl md:text-2xl' >
          ارائه خدمات در ۷ روز هفته
         </p>
         </div>
         <p className='text-gray-700 py-3 text-start font-bold text-xl' >
         و ۲۴ ساعت شبانه روز
         </p>
         <p  className='text-justify text-md text-gray-500 font-sans'>
         پاسخگویی ۲۴ ساعته و مراجعه در ۷ روز هفته حتی روزهای تعطیل، تعهدی است که شرکت انتخاب سرویس را در قبال اعتماد مصرف کنندگان به انتخاب الکترونیک ، برای خود ایجاد کرده است .
            </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl' >
         نکات قابل توجه:
        </p>
        <p className='text-justify text-md text-gray-500 font-sans'>
        شماره ۴ رقمی رایگان ۱۶۹۹ با امکان پاسخگویی به تماس هم زمان مشتریان ، از سراسر ایران آماده پاسخگویی به نیاز مشتریان است
هماهنگی و قرار ملاقات طی همان روز توسط نزدیکترین تکنسین با مصرف کننده انجام می شود
خدمات گارانتی در همه ساعات شبانه روز ، هیچ هزینه اضافی به مصرف کننده تحمیل نمی کند
              </p>
        </div>
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12009.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        </div>


        <div ref={sheet6}  className='my-2 mx-auto px-1 md:px-3 py-1 flex flex-col-reverse md:flex-row
          bg-gradient-to-r from-gray-300
             via-yellow-300 to-gray-300'> 
       <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12012.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          mx:"auto"
       
            }}
        >
        </Box>
        <div className='flex justify-start md:justify-center flex-col my-2  px-2 w-full' >
       <div className='flex justify-center  bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
           <p className='text-black py-3 text-start font-bold text-2xl' >
          تضمین ارائه خدمات به هنگام
         </p>
         </div>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >p
         یک ماه گارانتی رایگان به ازای هر روز تأخیر
         </p>
         <p className='text-justify text-md text-gray-700 font-sans'>
         زمان قرار ملاقات جهت انجام خدمت در اولین ساعات روز توسط سرویسکار انجام می شود . سرویسکار به جهت اثبات خوشقولی، زمانها خالی را به مصرف کننده پیشنهاد داده و ایشان بهترین انتخاب را انجام می دهد

            </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl' >
         نکات قابل توجه:
        </p>
        <p  className='text-justify text-md text-gray-700 font-sans'>  

        انتخاب خدمت در ۳ شیفت ( صبح ، عصر یا شب ) امکان پذیر است .
جبران خسارت تاخیر در مراجعه هماهنگ شده ، ۱ ماه گارانتی اضافه به ازای هر روز تاخیر است
ملاک محاسبه انحراف، از روز مقرر (در توافق با مصرف کننده) تا پایان روز مراجعه محاسبه می گردد و به ازای هر روز تأخیر، ۱ ماه گارانتی به مدت زمان دوره گارانتی اضافه می گردد
در صورتیکه درفرآیند تعمیر، مصرف کننده نتواند از محصول خود یا محصول جایگزین استفاده نماید با تخصیص گارانتی اضافه به محصول جبران خسارت می گردد
به ازای هر روز خرابی محصول از روز ششم به بعد،( عدم استفاده مطلوب ) ۱ ماه گارانتی به ازای هر روز تأخیر در رفع مشکل به مدت زمان گارانتی محصول اضافه می شود
        </p>
      </div>
        </div>
   
   
        <div ref={sheet7} className='flex flex-col md:flex-row bg-white px-1 md:px-3 mx-auto my-2'> 
        <div className='flex justify-start md:justify-center flex-col my-2  px-2 w-full' >
       <div className='flex justify-center  bg-gradient-to-r from-[#c2e59c]  via-[#64b3f4] to-[#c2e59c] my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
          <p className='text-black py-3 text-start font-bold text-xl md:text-2xl'  >
          شش ماه ضمانت تعمیر
         </p>
         </div>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
         غیر گارانتی
         </p>
         <p  className='text-justify text-md text-gray-500 font-sans'>
         پاسخگویی ۲۴ ساعته و مراجعه در ۷ روز هفته حتی روزهای تعطیل، تعهدی است که شرکت انتخاب الکترونیک را در قبال اعتماد مصرف کنندگان به انتخاب الکترونیک ، برای خود ایجاد کرده است .
            </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
         نکات قابل توجه:
        </p>
        <p  className='text-justify text-md text-gray-500 font-sans'>
        شماره ۴ رقمی رایگان ۱۶۹۹ با امکان پاسخگویی به تماس هم زمان مشتریان ، از سراسر ایران آماده پاسخگویی به نیاز مشتریان است
هماهنگی و قرار ملاقات طی همان روز توسط نزدیکترین تکنسین با مصرف کننده انجام می شود
خدمات گارانتی در همه ساعات شبانه روز ، هیچ هزینه اضافی به مصرف کننده تحمیل نمی کند
            </p>
       </div>
        <Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12028.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        </div>
        <div ref={sheet8}  className='my-2 mx-auto px-1 md:px-3 py-1 flex flex-col-reverse md:flex-row
          bg-gradient-to-r from-gray-300
             via-yellow-300 to-gray-300'> 
<Box
          className='washimg'
          sx={{
           
            display:"flex",
            borderRadius:1,
            backgroundImage:'url("https://snowa.ir/wp-content/uploads/2023/03/Group12027.svg")',
            backgroundPosition: 'center',
            backgroundSize:{xs:"contained",lg:"contained"},
            backgroundRepeat: 'no-repeat',
            height:{xs:"460px",lg:"500px"},
            width:{xs:"80%",lg:"80%"},
           my:{xs:2},
          
       
            }}
        >
        </Box>
        <div className='flex justify-start md:justify-center flex-col my-2 w-full px-2' >
       <div className='flex justify-center  bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 my-3 text-black w-auto pr-2 
         rounded-tr-md rounded-tl-3xl rounded-br-3xl rounded-bl-md '>
          <p className='text-black py-3 text-start font-bold text-xl md:text-2xl'  >
          ﺗﺤﻮﯾﻞ ﻣﺤﺼﻮل ﺟﺎﯾﮕﺰﯾﻦ
         </p>
         </div>
           <p className='text-gray-700 py-3 text-start font-bold text-xl' >
        ﺗﺤﻮﯾﻞ ﻣﺤﺼﻮل ﺟﺎﯾﮕﺰﯾﻦ ﻫﻨﮕﺎم ﺗﻌﻤﯿﺮ و ﺗﻌﻮﯾﺾ ﻣﺤﺼﻮﻻت
         </p>
       
         <p className='text-justify text-md text-gray-700 font-sans'>
         هدف از اجرای این طرح،‌ افزایش رضایت مشتریانی است که خرابی محصول مانع استفاده مطلوب از لوازم خانگی ایشان شده و تحویل محصول امانی میتواند نیاز مصرف کننده را طی دوره تعمیرات یا مدت زمان تحویل محصول جایگزین فراهم نماید
            </p>
         <p className='text-gray-700 py-3 text-start font-bold text-xl'  >
         نکات قابل توجه:
        </p>
        <p className='text-justify text-md text-gray-700 font-sans'>  
        پیشنهاد محصول جایگزین به مصرف کنندگانی که طی دوره کوتاه مدت ۱ روز به بالا به علت تعمیر یا عدم کارایی محصول امکان استفاده مطلوب از محصول خود را ندارند، داده می شود
محصول امانی جایگزین محصولی است که حداقل نیازهای مشتری را پاسخگو باشد
نصب و راه اندازی و جابجایی محصول جایگزین به صورت رایگان توسط شرکت انتخاب سرویس داده می شود
</p>
      </div>
        </div>
</Box>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default AfterSalesService;
