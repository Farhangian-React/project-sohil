import React, {useContext,useState,useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import ReactPaginate from 'react-paginate';
import {CardDataShow} from '../../../Shared/Cart-Context';
import {CardData} from '../../../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import FilterHoods from "./FilterHoods";
import Cards from '../../Cards';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
     return (
      <>
         <div className='flex flex-col bg-zinc-100 justify-center m-auto'>
  <div className='flex flex-col justify-center px-8 mx-auto mt-3 mb-12 '>
  <p className='text-black py-3 text-start font-bold text-2xl' >
   هود آشپزخانه
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 با توجه به اینکه خانم های خانه دار و سایر افراد خانواده ساعات زیادی
  از روز را در آشپزخانه سپری می کنند و همینطور تغییر دکوراسیون منازل به سمت فضاهای باز و آشپزخانه های کوچک و اغلب اپن پیش روی کرده است دقت در تهویه هوای این محیط به عنوان قلب خانه، حائز اهمیت است. به همین دلیل این روزها در تمامی آشپزخانه ها،  نزدیک به اجاق گاز وسیله ای به نام هود تعبیه شده است تا با مکش بو، دود و حتی چربی ناشی از پخت و پز، موجب تهویه بهتر هوا شود. با انتخاب هود متناسب با دکوراسیون علاوه بر جلوگیری از بوی نامطبوع، می توان ظاهری زیبا برای آشپزخانه ایجاد کرد.
  </p>
  <p className='text-black py-3 text-start font-bold text-2xl' >
    خرید اینترنتی هود آشپزخانه
 </p>
 <p className='text-justify text-md text-gray-500 font-sans'>
 مشغله های روزمره زندگی از جمله ساعات کاری زیاد و هدر رفتن زمان در ترافیک های طولانی، افراد را بر آن داشته که 
 روش های جدید و سریع تری چون خرید آنلاین را جایگزین روش های مرسوم مثل مراجعه حضوری به فروشگاه های مختلف و گشت و گذار در بازار، کنند. به همین منظور فروشگاه های اینترنتی مختلفی مثل سایت دیجی کالا مجموعه ای از بهترین و مرغوب ترین مدل های هود آشپزخانه را برای فروش اینترنتی عرضه می کند. شما با مراجعه به این سایت معتبر می توانید کالای مورد نظر خود را از میان تنوع بالای محصولات ارائه شده از برترین برند ها، با اطمینان از کیفیت آن انتخاب و تهیه کنید. به علاوه خرید اینترنتی این امکان را به شما می دهد تا با برخورداری از تخفیف های مختلف سایت، اقلام مورد نیاز خود را با قیمت ارزان تهیه کنید.
 </p>
 </div>
 <div className='flex flex-col md:flex-row justify-start w-[100vw] bg-zinc-100 m-auto' >
 <div className='flex w-[90vw] md:w-[30vw] static md:sticky md:top-[80px] self-center md:self-start md:h-[70vh] '>

  <FilterHoods/></div>
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
  export default function CardHoods({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
    const[isLoading,setIsLoading]=useState(true);
    const getData=()=>{
      fetch('https://serverjson-project.onrender.com/Allproducts' )
      .then(res => res.json())
      .then((result)=> {
      setData(result.filter(i=>i.product === "Gas" && i.type === "hood"));
       setDatashow(result.filter(i=>i.product === "Gas" && i.type === "hood" ));
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