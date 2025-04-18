import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../../../Shared/Cart-Context';
import {CardData} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FilteringFrenchDoor from './FilteringFrenchDoor';
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
    const [cartItems,setCartItems]=useContext(CartContext);
    const[datacomment,setDatacomment]=useState([]);
    const convertToPersian=(str)=> {
      let persianNumber =str
      .replace(/0/g, '۰')
      .replace(/1/g, '۱')
      .replace(/2/g, '۲')
      .replace(/3/g, '۳')
      .replace(/4/g, '۴')
      .replace(/5/g, '۵')
      .replace(/6/g, '۶')
      .replace(/7/g, '۷')
      .replace(/8/g, '۸')
      .replace(/9/g, '۹');
  return(persianNumber);
    }
    const getData=()=>{
      fetch("https://serverjson-project.onrender.com/Allcomments")
      .then((res)=>
         res.json())
         .then((data)=>{
        setDatacomment(data);
        }
         )
      .catch(err=>console.log(err));
    }
    useEffect(()=>{
      getData();
      
    },[])
        const sumscore=(item)=>{
          let total=0;
          let aver=0;
       datacomment.map(i=>{
        if(i.idcomment === item.id){
          aver ++;
          total += i.score; 
        }
        });
         return total /aver;
       }
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

 <FilteringFrenchDoor/></div>
 
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
 
 <Card className='cards' sx={{width:{xs:"250px",md:"300px"},height:"460px",mx:1,my:"1em",px:1 ,pt:3 }} key={item.id}>

        <CardMedia
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
sx={{width:"250px",m:"auto",height:"200px"}}
  />
    <CardContent sx={{border:"none",height:'55px',direction:"rtl"}}>
    <p className='text-center text-sm font-bold pb-1'>
      {item.title1}
    </p>
  </CardContent>
    <CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"space-around",mt:1.5,
    alignSelf:"center",alignItems:"center",
    border:"none",height:'40px',direction:"rtl",py:0.5,my:0}}>
    <p className='text-center text-xs text-gray-700'>
      {item.title2}
      </p>
      <Rating
         sx={{color:"#f5cd00",fontSize:"1em",pr:5,alignItems:"center"}}
        name="simple-controlled"
        value={sumscore(item)}
      
      />
    
  </CardContent>
  
  <CardContent sx={{height:'70px',direction:"rtl",display:"flex",justifyContent:"center",flexDirection:"column",borderBottom:'1px solid #d4d4d4',borderTop:'1px solid #d4d4d4'}} >

 { item.off !== "" ?
      
          <div  dir="rtl" className='flex justify-between items-baseline'>
          <div   className='flex justify-center text-center rounded-md text-yellow-500 bg-gray-900 h-[20px] w-[35px]
           hover:bg-yellow-500 hover:text-gray-900'>
        <p className='text-xs text-center py-0.5' >  {convertToPersian(item.off)}%</p>
        
        </div> 
          <div className='flex flex-col' >
        <p className='text-sm text-yellow-500 text-center line-through decoration-gray-600 ' >{item.price}</p>
         <p   className='text-gray-600 text-left text-lg font-bold' >
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </p>
 </div>
 </div>

:<p className='text-lg text-center text-gray-600 font-bold '>{item.price}</p>
 }
  </CardContent>
  <CardContent sx={{display:'flex',justifyContent:'center',height: "30px"}}>
 <NavLink style={{ textDecoration: "none" }} to={"/cartbuygas" }>
                     <button    onClick={()=>{
               setCartItems([item]);
              }} className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
                     rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-1 mx-8 px-10 py-1 text-white text-md font-sans
                      hover:bg-gradient-to-r hover:from-gray-500
                     hover:via-yellow-500 hover:to-gray-500'
                      > 
                     خرید</button></NavLink>
    
  </CardContent>
</Card>

</NavLink>
      
    ))}
    </div>
    </div>
  </div>

    </>
  );
      }

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
      <Tems currentItems={currentItems} load={isLoading} />
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
 
