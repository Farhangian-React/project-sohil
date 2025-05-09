import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import Box from '@mui/material/Box';
import TopNav from '../dashbord/TopNav';
import Divider from '@mui/material/Divider';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import './jashnvareh.css';
export default function TabestaneJashnvareh() {
  return (
    <>
    <PageTitle  title=' جشنواره زمستانه  '  description=' جشنواره / جشنواره زمستانه  '/>
   <TopNav/>

   <div className='flex flex-col bg-[#ececec]'>

    <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       backgroundImage: 'url("https://rtaoutdoorliving.com/wp-content/uploads/2022/07/an-rta-outdoor-kitchen-in-the-snow-with-coyote-fridge.jpg")',
       backgroundPosition: 'center',
       backgroundSize:'cover',
       backgroundRepeat: 'no-repeat',
       width:'100%',
       height:"60vh",
       
       }} >
           <div className=' flex flex-row justify-center items-center mx-auto w-[70%] self-end h-[250px] 
            bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 mb-5'>
          
          <div 
           className='jashnnav relative flex justify-center w-[200px] md:w-[250px] h-[175px] overflow-hidden rounded-xl p-10 m-2'
     >
               <div className="gerdali"><NavLink className="linkj" to={'/ProductOff'} > 
               <p className='text-md font-bold text-center text-[#E0AA3E] py-2 '
             >  کالاهای تخفیف دار </p>
        </NavLink></div>
          </div>
          <div 
           className='jashnnav1 relative flex justify-center w-[200px] md:w-[250px] h-[175px] overflow-hidden rounded-xl p-10 m-2'
     >
               <div className="gerdali"><NavLink className="linkj" to={'/ProductOff'} > 
               <p className='text-md font-bold text-center text-[#E0AA3E] py-2 '
             >
         محصولات جشنواره</p>
        </NavLink></div></div>

         </div>
         </Box>



         <div className='flex flex-col bg-white py-5  px-5 md:px-10  my-0 ' >
      <div className='shadowjashnvareh flex flex-col justify-start w-auto self-start my-8'>
        <p className='text-xl text-black text-center font-medium p-2'>
        جشنواره زمستانه ی سهیل
        </p>
        </div>
        <p  className='text-justify text-md text-[#585858] font-sans'>
        جشنواره فروش زمستانه برند سهیل و دوو (ویژه مصرف کنندگان) از روز یکشنبه 15 مهر ماه 1403 در سراسر کشور اجرا 
        و تا اطلاع ثانوی ادامه خواهد داشت. این جشنواره به مصرف کنندگانی تعلق می‌گیرد که محصولات مشمول جشنواره را از پانزدهم مهر ماه تا پایان زمان جشنواره ، 
        خریداری و نصب نمایند.
         در طرح جشنواره زمستانه محصولات تلویزیون، ساید بای ساید، یخچال فریزر،
          ظرفشویی و لباسشویی های دوو دارای هدیه نقدی و غیر نقدی هستند
           و با خرید هر یک از محصولات جشنواره تا سقف 50,000,000 ریال هدیه نقدی و محصولات هدیه ای چون جاروبرقی و چای ساز برای مشتریان در نظر گرفته شده.
           فروشگاه انتخاب سنتر به عنوان نمایندگی رسمی برند دوو و سهیل تمامی محصولات این دو
         برند را با بهترین قیمت روز بازار و ضمانت نامه 24
         ماهه رسمی انتخاب الکترونیک عرضه می کند.
✔️لیست کد مدل های مشمول جشنواره و مبالغ هدیه آن به صورت (مناطق عادی و ویژه) مشخص شده است.
✔️منظور از مناطق ویژه، استان‌های : ایلام ، آذربایجان غربی ، بوشهر، خراسان جنوبی ، 
خراسان شمالی، خوزستان ، سیستان و بلوچستان ، فارس ،کردستان، کرمان ،کرمانشاه و هرمزگان می‌باشد. 
(مبالغی که در محصولات درج شده، برای مناطق عادی می‌باشد، اما این استان هایی که نام برده شد، شامل هدیه بیشتری می‌باشند)
            </p>

           
      <div className='shadowjashnvareh flex flex-col justify-start w-auto self-start my-8'>
        <p className='text-xl text-black text-center font-medium p-2'>
        نحوه شرکت در جشنواره سهیل
        </p>
        </div>
        <p className='text-lg text-gray-800 text-start font-bold px-2 py-3'>
      ۱- نصب محصول :
        </p>
        <p  className='text-justify text-md text-[#585858] font-sans'>
        پس از انتخاب و خرید کالای مورد نظر، سفارش خود را تحویل گرفته و جهت نصب محصول و بهره مندی از مزایای گارانتی محصول، با شماره 1699 بدون پیش شماره تماس بگیرید.
        </p>
        <p className='text-lg text-gray-800 text-start font-bold px-2 py-3'>
        ۲- دریافت کد تخفیف : 
          </p>
          <p  className='text-justify text-md text-[#585858] font-sans'>
          پس از نصب محصول و مشاهده فاکتور توسط نماینده مجاز خدمات پس از فروش، به ازای هر محصول خریداری شده، یک عدد کد تخفیف به شماره پذیرش خریدار اختصاص داده خواهد شد. این کد تخفیف شامل یک کد شش رقمی است که از طریق پیامک برای خریدار ارسال خواهد شد.
            </p>
            <p className='text-lg text-gray-800 text-start font-bold px-2 py-3'>
            ۳- فعال سازی کد تخفیف :
          </p>
          <p  className='text-justify text-md text-[#585858] font-sans'>
          پس از دریافت کد تخفیف به منظور فعالسازی آن، با مراجعه به صفحه فعالسازی کد تخفیف جشنواره (لینک در همین صفحه)، اطلاعات درخواست شده را ثبت نمایید. این اطلاعات شامل : کد تخفیف، شماره پذیرش، شماره شبا و شماره همراه است. پس از ثبت اطلاعات و دریافت کد تایید، جهت فعالسازی کد تخفیف گزینه ثبت نهایی را انتخاب نمایید.
            </p>
            <p className='text-lg text-gray-800 text-start font-bold px-2 py-3'>
           ۴- نحوه دریافت هدیه نقدی جشنواره : 
          </p>
          <p  className='text-justify text-md text-[#585858] font-sans'>
          پس از تایید شماره شبا مبلغ هدیه جشنواره ، حداکثر ظرف مدت یک ماه واریز و از طریق پیامک اطلاع رسانی خواهد شد.
            </p>
        

      <div className='shadowjashnvareh flex flex-col justify-start w-auto self-start my-8'>
        <p className='text-xl text-black text-center font-medium p-2'>
        نکات مهم:
          </p>
          </div>
          <p  className='text-justify text-md text-[#585858] font-sans py-0.5'>
         ۱.فعال‌سازی فقط از طریق شماره موبایلی که به مرکز ارتباط با مشتریان سهیل اعلام کرده اید امکان پذیر است .
            </p>
            <p  className='text-justify text-md text-[#585858] font-sans py-0.5'>
           ۲.شماره پذیرش خود را پس از درخواست نصب محصول ، از طریق پیامک دریافت نموده اید .
            </p>
            <p  className='text-justify text-md text-[#585858] font-sans py-0.5'>
          ۳.این جشنواره به مصرف کنندگانی تعلق می‌گیرد که محصولات مشمول جشنواره را از پانزدهم مهر ماه تا پایان زمان جشنواره ، خریداری و نصب نمایند.
            </p>
        
        
       
      <div className='shadowjashnvareh flex flex-col justify-start w-auto self-start my-8'>
        <p className='text-xl text-black text-center font-medium p-2'>
        نصب محصول
          </p>
          </div>
          <p  className='text-justify text-md text-[#585858] font-sans py-0.5'>
          به منظور بهره مندی از شرایط جشنواره خرید زمستانه سهیل با مرکز تماس مشتریان گروه انتخاب از طریق شماره ۱۶۹۹ (بدون پیش شماره از سراسر کشور) تماس حاصل کنید و درخواست نصب محصول خریداری شده خود را اعلام نمایید. در این مرحله یک کد پذیرش نصب برای شما پیامک می‌شود. شایان ذکرست، فعالسازی این جشنواره تنها برای شماره تلفن همراهی خواهد بود که به این مرکز اعلام می‌کنید.
        </p> 

        <div className='shadowjashnvareh flex flex-col justify-start w-auto self-start my-8'>
        <p className='text-xl text-black text-center font-medium p-2'>
        دریافت کد تخفیف جشنواره
          </p>
          </div>
          <p  className='text-justify text-md text-[#585858] font-sans py-0.5'>
          نحوه دریافت کد تخفیف جشنواره و مراحل آن
            </p>
            <div className='flex flex-col md:flex-row justify-center mx-auto mt-10'>
            <div className='flex flex-col justify-center py-2'> 
            <p className='text-xl text-center font-medium '>
                 <BuildOutlinedIcon sx={{color:"#E0AA3E",fontSize:{xs:"80px",lg:"60px"}}}/>
            </p>
            <p className='text-xl text-gray-700 text-center font-medium pt-1.5 '> در زمان نصب محصول  </p>
            <p  className='text-justify text-md text-[#585858] font-sans  px-5 py-2'>
              پس از درخواست نصب محصول و مشاهده فاکتور خرید، تاریخ خرید توسط نماینده مجاز خدمات پس از خرید ثبت می گردد.</p>
            </div>
         <div className='bg-[#E0AA3E] w-[8px] h-[200px] my-auto  hidden md:flex'></div>
         <div className='bg-[#585858] h-[3px] w-[90%] mx-auto  flex md:hidden'></div>
            <div className='flex flex-col justify-center py-2'> 
            <p className='text-xl text-center font-medium '>
                 <MarkAsUnreadIcon  sx={{color:"#E0AA3E",fontSize:{xs:"80px",lg:"60px"}}}/>
            </p>
            <p className='text-xl text-gray-700 text-center font-medium pt-1.5 '> دریافت کد شش حرفی جشنواره  </p>
            <p  className='text-justify text-md text-[#585858] font-sans  px-5 py-2'>
              به ازای هر محصول درج شده در جدول فوق، یک کد شش حرفی به شماره پذیرش مصرف کننده اختصاص داده می شود</p>
            </div>
            <div className='bg-[#E0AA3E] w-[8px] h-[200px] my-auto hidden md:flex'></div>
            <div className='bg-[#585858] h-[3px] w-[90%] mx-auto  flex md:hidden'></div>
            <div className='flex flex-col justify-center py-2'> 
            <p className='text-xl  text-center font-medium '>
                 <InsertLinkIcon  sx={{color:"#E0AA3E",fontSize:{xs:"80px",lg:"60px"}}}/>
            </p>
           
            <p className='text-xl text-gray-700 text-center font-medium pt-1.5 '> دریافت لینک فعالسازی </p>
               
               
            <p  className='text-justify text-md text-[#585858] font-sans px-5 py-2'>
              لینک فعالسازی از طریق پیامک برای مصرف کننده 
              ارسال خواهد شد که با کلیک بر روی این گزینه فعالسازی صورت می‌گیرد.</p>
            </div>
        </div>
        </div>
</div>
    <Footer/>
    </>
  );
}







  

   
