import React, {useContext,useState,useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import ReactPaginate from 'react-paginate';
import {CardData} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import FilterCookTop from "./FilterCookTop";
import Cards from '../../Cards';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
     return (
      <> 
          <div className='flex flex-col bg-zinc-100 justify-center m-auto'>
  <div className='flex flex-col justify-center px-8 mx-auto mt-3 mb-12 '>
  <p className='text-black py-3 text-start font-bold text-2xl' >
 گاز رومیزی
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
  
آشپزخانه‌های جدید هم همانند سایر بخش‌های زندگی انسان‌ها دستخوش تغییرات بسیار گسترده‌ای شده‌اند. یکی از تغییرات اساسی در آشپزخانه‌ها استفاده از گاز صفحه‌ای است. گاز صفحه‌ای جدیدترین مدل انواع گاز آشپزخانه است که به گاز تو کار هم معروف است. این نوع گاز مزیت‌های بسیار زیادی نسبت به گازهای قدیمی‌تر و گازهای قابل حمل دارد. 
اجاق گازهای صفحه‌ای از تنوع بسیار زیادی برخوردار هستند
 و در هزاران مدل طراحی و تولید می‌شوند و هر یک از آن‌ها رده‌ی مصرف انرژی مربوط به خود را دارند. این اجاق‌ها به طور کلی در دو مدل برقی و گازی هستند. مدل‌های برقی آن‌ها در ایران چندان متداول نیست در حالی که در بسیاری از کشورهای اروپایی از مدل‌های برقی آن‌ها استفاده می‌شود. اما مدل‌های گازی آن‌ها در ایران متداول است و در چند سال گذشته دیزاین‌های جدید آشپزخانه شامل این نوع از گازها هستند.
  </p>
  <p className='text-black py-3 text-start font-bold text-2xl' >
  انواع گاز رومیزی
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 تعداد شعله‌های اجاق گازهای صفحه‌ای متفاوت است. نمونه‌های کوچک آن‌ها دارای دو تا چهار شعله هستند که برای خانه‌های کوچک مناسب هستند و نمونه‌های بزرگ‌تر آن‌‎ها شامل پنج تا هفت شعله هستند که برای آشپزخانه‌های بزرگ و پرمصرف استفاده می‌شوند. جنس صفحه‌ی این گازها معمولاً از شیشه است که تمیز کردن آن نیازمند استفاده از مواد شوینده‌ی مخصوص است. شیشه‌ی این گازهای از مقاوم‌ترین انواع شیشه مانند شیشه سکوریت است تا در مقابل گرما هیچ آسیبی نبینند. شبکه‌ی شعله‌های این گازها معمولاً از جنس چدن است که براساس گرما هیچ آسیبی نمی‌بینند و تا سال‌ها کارایی دارند. 
گازهای رومیزی به فندک خودکار مجهز هستند و استفاده از آن‌ها بسیار آسان است. تنها نقطه‌ی ضعف آن‌ها در مقابل اجاق گازهای قابل حمل نداشتن فر است. آشپزخانه‌های مجهز به این نوع گاز نیازمند فر جداگانه هستند. آشپزی به‌وسیله‌ی اجاق گازهای صفحه‌ای خیلی سهل و آسان و لذت‌بخش است. این اجاق گازها دارای شعله‌ی پلوپز هستند و گرما را به‌تمامی نواحی قابلمه و ظروف به‌صورت یکنواخت می‌رسانند.
  </p>
  <p className='text-black py-3 text-start font-bold text-2xl' >
     خرید اینترنتی انواع گاز رومیزی
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 برای خرید اجاق گاز صفحه‌ای باید به متراژ و فضای آشپزخانه توجه کرد. آشپزخانه قلب یک خانه و اجاق قلب آشپزخانه است از این رو در انتخاب آن باید نهایت دقت و وسواس صورت بگیرد. برای خرید آن می‌توان به فروشگاه اینترنتی دیجی‌کالا مراجعه کرد. مشخصات، قیمت و نقد و بررسی تمامی اجاق گازهای صفحه‌ای از جمله گاز صفحه ای سامسونگ  در این فروشگاه وجود دارد تا تمامی افراد براساس بودجه و نیاز خود سفارششان را نهایی کنند و یک خرید آنلاین مطمئن را تجربه کنند. 
  </p>
 </div>

 <div className='flex flex-col md:flex-row justify-start w-[100vw] bg-zinc-100 m-auto' >
 <div className='flex w-[90vw] md:w-[30vw] static md:sticky md:top-[80px] self-center md:self-start md:h-[70vh] '>

 <FilterCookTop/></div>

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
  export default function CardCookTop({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
    const[isLoading,setIsLoading]=useState(true);
    const getData=()=>{
      fetch('https://serverjson-project.onrender.com/Allproducts' )
      .then(res => res.json())
      .then((result)=> {
      setData(result.filter(i=>i.product === "Gas" && i.type === "cooktop"));
       setDatashow(result.filter(i=>i.product === "Gas" && i.type === "cooktop" ));
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
          pageRangeDisplayed={5}
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