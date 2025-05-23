import React, {useContext,useState,useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import ReactPaginate from 'react-paginate';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import FilterGas from "./FilterGas";
import Cards from '../Cards';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
   function Tems({ currentItems,load }) {
     return (
      <>
         <div className='flex flex-col bg-zinc-100 justify-center m-auto'>
  <div className='flex flex-col justify-center px-8 mx-auto mt-3 mb-12 '>
  <p className='text-black py-3 text-start font-bold text-2xl' >
    پخت و پز
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
در sohil، انتخاب گسترده ما از وسایل آشپزی به شما کمک می کند تا تجربه آشپزخانه خود را بهبود ببخشید. از آشپزخانه هوشمند و اجاق گاز گرفته تا اجاق‌ها و مایکروویوهای خلاقانه، ما همه چیزهایی را که برای تهیه غذاهای خوشمزه به آسانی نیاز دارید، در اختیار داریم. بهترین معاملات را در مورد برندهای لوکس آشپزی مانند samsung،   wirpool , LG ,bush و موارد دیگر کاوش کنید!
 </p>
 <p className='text-black py-3 text-start font-bold text-2xl' >
  دسته بندی لوازم پخت و پز
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 اجاق‌های دیواری: آشپزخانه خود را با اجاق‌های دیواری شیک و با صرفه‌جویی در فضا متحول کنید، کنترل دقیق دما و گزینه‌های پخت همه‌کاره را ارائه می‌دهد. اجاق‌های تک جداره، اجاق‌های دوجداره، اجاق‌های مایکروویو و کشوهای گرم‌کننده را کاوش کنید.
اجاق‌های اجاق‌پز: تجربه آشپزی خود را با اجاق‌های قدرتمند و کارآمد ما که دارای کنترل گرمای پاسخگو و پیکربندی‌های چندگانه مشعل برای تطبیق با تکنیک‌های مختلف پخت هستند، ارتقا دهید. اجاق‌های برقی، گازی، و اجاق‌های القایی را هم‌اکنون کاوش کنید!
محدوده ها: محدوده های ما راحتی یک اجاق گاز و اجاق گاز را در یک دستگاه ترکیب می کنند. فرقی نمی‌کند گاز، برق یا دو سوخت را ترجیح دهید، محدوده‌های ما کنترل دقیق دما و فضای پخت و پز کافی را ارائه می‌دهند تا به دستور العمل‌های مورد علاقه شما زنده شود.
مایکروویو: پخت و پز سریع و کارآمد، گرم کردن مجدد و یخ زدایی را با مایکروویوهای با کارایی بالا تجربه کنید. با کنترل‌های کاربرپسند و فناوری پیشرفته، مایکروویوهای ما نتایج ثابتی را ارائه می‌دهند.
هودهای برد: آشپزخانه خود را با هودهای قدرتمندی که بوی آشپزی، چربی و ذرات معلق در هوا را از بین می برند، تازه و بدون دود نگه دارید. هودهای کانالی و هودهای بدون کانال ما که برای حداکثر تهویه و عملکرد بی سروصدا طراحی شده اند، کیفیت هوا و آسایشی که شایسته شماست را فراهم می کنند.
لوازم کوچک: با وسایل کوچک ما، روال آشپزی خود را آسان‌تر کنید، که برای وعده‌های غذایی سریع و میان‌وعده با کمترین تلاش مناسب است. از مخلوط کن و غذاساز گرفته تا توستر و قهوه ساز، وسایل کوچک ما راحتی و کارایی را ارائه می دهند.
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
بهترین لوازم آشپزی را از ما بخرید
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 در sohil،تلاش ما فراتر از فروش لوازم خانگی است، ما متعهد به ارائه بهترین لوازم آشپزی موجود در بازار هستیم. اگر سؤالی دارید، اکنون با کارشناسان لوازم آشپزی ما تماس بگیرید..
 </p>
</div>
<div className='flex flex-col md:flex-row justify-start w-[100vw] bg-zinc-100 m-auto' >
 <div className='flex w-[90vw] md:w-[30vw] static md:sticky md:top-[80px] self-center md:self-start md:h-[70vh] '>

<FilterGas/></div>


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
  export default function CardGas({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
    const [isLoading,setIsLoading]=useState(true);
    const getData=()=>{
      fetch('https://serverjson-project.onrender.com/Allproducts' )
  .then(res => res.json())
  .then((result)=> {
  setData(result.filter(i=>i.product === "Gas"));
   setDatashow(result.filter(i=>i.product === "Gas"));
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