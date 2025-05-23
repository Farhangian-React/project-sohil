
import 'react-slideshow-image/dist/styles.css';
import React, {useContext,useState,useEffect} from 'react';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import FilterDishwasher from "../../Product/Dishwasher/FilterDishwasher";
import { ToastContainer, toast } from "react-toastify";
import './Dishwasher.css';
import { NavLink } from 'react-router-dom';
import Cards from '../Cards';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
 return (
  <>
    <div className='flex flex-col bg-zinc-100 justify-center m-auto'>
  <div className='flex flex-col justify-center px-8 mx-auto mt-3 mb-12 '>
  <p className='text-black py-3 text-start font-bold text-2xl' > ماشین ظرفشویی های سهیل</p>
  <p className='text-justify text-md text-gray-500 font-sans'>
    چرا وقت گرانبهایی را صرف شستن ظروف کنید؟ مجموعه ما دارای طیف گسترده ای از ماشین ظرفشویی های قابل اعتماد و مجلل از برندهای مشهور است.
    </p>
    <p className='text-justify text-md text-gray-500 font-sans'>
    ماشین ظرفشویی توکار: ماشین ظرفشویی داخلی ما به طور یکپارچه در کابینت آشپزخانه شما ادغام می شود و راه حلی شیک و کم مصرف برای نیازهای ظرفشویی شما ارائه می کند. مجموعه مدل های داخلی ما را از مارک های پیشرو کاوش کنید.
کشوهای ظروف: کشوهای ظروف ما یک محلول ظرفشویی انعطاف پذیر ارائه می دهند. با محفظه های جداگانه ای که می توانند به طور مستقل کار کنند، کشوهای ظرف برای خانه های کوچکتر یا آشپزخانه های کوچکتر مناسب هستند.
ماشین ظرفشویی قابل حمل: ایده آل برای اجاره کنندگان یا هر کسی که گزینه قابل حمل را ترجیح می دهد، طیف ماشین ظرفشویی قابل حمل ما عملکرد را با قابلیت حمل ترکیب می کند. از آزادی حرکت ماشین ظرفشویی خود در هر کجا که لازم است لذت ببرید.
بهترین ماشین ظرفشویی را در کلرادو بخرید
از یکی از نمایشگاه‌های لوازم خانگی ما در دنور، کلرادو، و مناطق اطراف دیدن کنید تا بهترین ماشین‌های ظرفشویی موجود در بازار را تجربه کنید. چه به دنبال یک ماشین ظرفشویی مدرن از جنس استنلس استیل باشید یا یک ماشین ظرفشویی آماده پانل، کارکنان آگاه ما شما را از طریق موجودی ما راهنمایی می کنند و به شما کمک می کنند ماشین ظرفشویی مناسب برای آشپزخانه خود را پیدا کنید. برای کمک بیشتر با ما تماس بگیرید.
    </p>
  </div>
  <div className='flex flex-col md:flex-row justify-start w-[100vw] bg-zinc-100 m-auto' >
      <div className='flex w-[90vw] md:w-[30vw] static md:sticky md:top-[80px] self-center md:self-start md:h-[70vh] '>
 
<FilterDishwasher/></div>

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
    <NavLink to={'/CartBuyDishwasher'}  className={"linkss"}>    
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

export default function CardDishwasher({ itemsPerPage }) {
const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);
const [isLoading,setIsLoading]=useState(true);

const getData=()=>{
fetch('https://serverjson-project.onrender.com/Allproducts' ).then((res)=>{
  return res.json();
}).then((result)=>{
  setData(result.filter(i=>i.product === "Dish"));
  setDatashow(result.filter(i=>i.product === "Dish"));
  setIsLoading(false);
}).catch((err)=>{
toast.error(" ورود ناموفق داده");
setIsLoading(false);
});
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
);
}

