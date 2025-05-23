import React, {useContext,useState,useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import ReactPaginate from 'react-paginate';
import {CardDataShow} from '../../../Shared/Cart-Context';
import {CardData} from '../../../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import FilterMicrowaves from "./FilterMicrowaves";
import Cards from '../../Cards';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
     return (
      <>
      <div className='flex flex-col bg-zinc-100 justify-center m-auto'>
  <div className='flex flex-col justify-center px-8 mx-auto mt-3 mb-12 '>
  <p className='text-black py-3 text-start font-bold text-2xl' >
   مایکروفر
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 لوازم آشپزخانه و پخت‌وپز نیز از پیشرفت تکنولوژی تأثیر گرفته و امروزه شاهد تولید 
 انواع مختلف دستگاه‌های تسهیل کننده کارهای طبخ غذا هستیم. یکی از این لوازم مایکروفر یا اجاق مایکروویو است که برای گرم کردن سریع مواد غذایی،
  یخ‌زدایی و پخت غذا از آن استفاده می‌شود. مایکروفر دستگاهی است که از امواج مایکروویو برای افزایش انرژی مولکول‌های آب موجود در غذا و در نتیجه گرم شدن مواد غذایی استفاده می‌کند. به این دستگاه مایکروویو هم گفته می‌شود که درواقع نام امواجی است که دستگاه آن را تولید می‌کند. این امواج طول موجی بین ۱ میلیمتر تا ۳۰ سانتی‌متر دارند. امروزه امکانات بیشتری مانند گریل نیز به این دستگاه‌ها اضافه شده است که برای برخی کاربردها مورد استفاده قرار می‌گیرد. باید دقت داشته باشید که با استفاده از مایکروفر امکان تهیه برخی خوراکی‌ها مانند کیک وجود ندارد و برای این منظور باید از فر و یا سولاردم استفاده کنید.
 </p>
 <p className='text-black py-3 text-start font-bold text-2xl' >
    خرید اینترنتی مایکروفر 
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 مایکروفرهای متنوعی با امکانات و قابلیت مختلف عرضه می‌شوند که انتخاب را کمی سخت می‌کند. دیجی کالا امکان مشاهده‌ی قیمت و مقایسه‌ی مشخصات کالاهای مختلف را به شما می‌دهد تا بتوانید به راحتی انتخاب کنید. شما می‌تواند انواع مختلف مایکروفر را در فروشگاه sohil کالا مشاهده و مقایسه کرده و مناسب‌ترین گزینه را با بهترین قیمت به صورت آنلاین خریداری کنید.
  </p>
 </div>
 
 <div className='flex flex-col md:flex-row justify-start w-[100vw] bg-zinc-100 m-auto' >
 <div className='flex w-[90vw] md:w-[30vw] static md:sticky md:top-[80px] self-center md:self-start md:h-[70vh] '>
  <FilterMicrowaves/></div>
 
<div className='flex justify-center flex-wrap mx-auto bg-zinc-100 '>
 
   {
     load ? 
     <Backdrop
     sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
     open
   >
   <CircularProgress color="inherit" />
   </Backdrop>
   :
   currentItems &&
     currentItems.map((item) => (
     
       <NavLink to={'/cartbuygas'}  className={"linkss"}> 
  <Cards curr={item}/>
 </NavLink>
       
     ))}
     </div>
     </div>
           </div>
        
          
       </>
     );
   }
    const MemoizedComponent = React.memo(Tems);
  export default function CardMicrowaves({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
    const[isLoading,setIsLoading]=useState(true);
    const getData=()=>{
      fetch('https://serverjson-project.onrender.com/Allproducts' )
      .then(res => res.json())
      .then((result)=> {
      setData(result.filter(i=>i.product === "Gas" && i.type === "microwave"));
       setDatashow(result.filter(i=>i.product === "Gas" && i.type === "microwave" ));
      setIsLoading(false);
      
      },
      (error) => {
        alert('error');
        setIsLoading(false);
      }
      )
     }
    
      useEffect( ()=>{
        getData();
    
      },[])
      const [itemOffset, setItemOffset] = useState(0);
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = datashow.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(datashow.length / itemsPerPage);
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datashow.length;
        setItemOffset(newOffset);
      };
    return (
      <>
        <MemoizedComponent currentItems={currentItems} load={isLoading}  />
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className='pagination'
          pageClassName='paginationli'
          previousClassName='previousStyle'
          nextClassName='nextStyle'
        />
      </>
    );}