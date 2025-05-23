import React, {useContext,useState,useEffect} from 'react';
import {CardData} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import FilteringRefrigerators from "../FilteringRefrigerators";
import Cards from '../../Cards';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
   return (
    <> 
    <div className='flex flex-col bg-zinc-100 justify-center m-auto'>
  <div className='flex flex-col justify-center px-8 mx-auto mt-3 mb-12 '>
  <p className='text-black py-3 text-start font-bold text-2xl' >
         یخجال های دو درب
         </p>
         <p className='text-justify text-md text-gray-500 font-sans'>
      یخچال های دو درب  دارای یک یخچال در بالای کشوی فریزر هستند. این یخچال
       دارای انعطاف پذیری دو درب است که برای آشپزخانه های باریک طراحی شده و ظاهری 
      پیشرفته به آشپزخانه شما می بخشد. مدل‌های منتخب دارای کشوهای میانی
       برای انعطاف‌پذیری بیشتر هستند تا هر مورد خانه خود را داشته باشد.
      </p>
      <p className='text-justify text-md text-gray-500 font-sans'>
      ما مفتخریم که یخچال‌ها را با هر قیمتی ارائه می‌کنیم تا بتوانید
       آنچه را که نیاز دارید بیابید. با انتخاب محدوده بودجه خود شروع کنید، سپس ظرفیتی را انتخاب کنید که متناسب با مواد غذایی هفتگی خانوار شما باشد که ابعادی متناسب با آشپزخانه شما داشته باشد. سپس سبک مورد علاقه خود را از درب داخلی به سمت درب فرانسوی و موارد دیگر انتخاب کنید! هنگامی که یکی را که دوست دارید پیدا کردید، آن را برای 
       خرید به سبد خرید خود اضافه کنید و ضمانت های خود را اضافه کنید یا 
       با مدل های دیگر مقایسه کنید تا انتخاب کاملی داشته باشید.
      </p>
    </div>
    <div className='flex flex-col md:flex-row justify-start w-[100vw] bg-zinc-100 m-auto' >
      <div className='flex w-[90vw] md:w-[30vw] static md:sticky md:top-[80px] self-center md:self-start md:h-[70vh] '>

 <FilteringRefrigerators/></div>
 
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
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>    
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
export default function CardRefrigeratorsFrenchDoor({ itemsPerPage }) {
 
  
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const[isLoading,setIsLoading]=useState(true);
 const getData=()=>{
  fetch('https://serverjson-project.onrender.com/Allproducts' )
  .then(res => res.json())
  .then((result)=> {
  setData(result.filter(i=>i.product === "Ref" && i.type === "FrenchDoor"));
   setDatashow(result.filter(i=>i.product === "Ref" && i.type === "FrenchDoor" ));
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
      <MemoizedComponent currentItems={currentItems} load={isLoading} />
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
  );
}
 
