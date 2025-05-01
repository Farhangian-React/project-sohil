import * as React from 'react';
import { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import "./Style.css";
import { Box,Typography,Card,CardMedia} from '@mui/material';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
export default function Style1({itemsPerPage}) {
const [cartimage,setCartimage]=useState([]);
const [cartshow,setCartshow]=useState([]);
  const getCartimage=()=>{
    fetch('https://serverjson-project.onrender.com/Cartimage')
    .then(res => res.json())
    .then((result)=> {
      setCartimage(result);
      setCartshow(result);
    },
    (error) => {
      alert('error');
    }
    )
   }
  
    useEffect( ()=>{
      getCartimage();
  
    
    },[])

  const handelclick1=()=>{
   
    setCartshow(cartimage.filter(q=> q.id1 ==="1"));
  
  }
  const handelclick2=()=>{
    
    setCartshow(cartimage.filter(q=> q.id1 ==="2"))
  }
  const handelclick3=()=>{
   
    setCartshow(cartimage.filter(q=> q.id1 ==="3"))
  }
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(cartshow.length / itemsPerPage);
  const handlePageClick = (event) => {
    console.log(itemOffset);
    const newOffset = (event.selected * itemsPerPage) % cartshow.length;
    setItemOffset(newOffset);
  };
  return (
    <>
    <div className='flex justify-center self-end my-1 mx-auto px-3 w-[93%] 
    bg-gradient-to-r from-gray-300 via-yellow-500 to-gray-300  rounded-tr-[20px] rounded-tl-[40px] rounded-br-[60px] rounded-bl-[20px]  h-[90px]'>
   <p className='text-gray-700 py-3 text-center font-bold text-xl md:text-2xl' >
  به سبک خودت زندگی کن 
  <p 
  className='text-center text-[10px] sm:text-[14px] md:text-md text-gray-600 font-sans'>
     مطالب به روز و خواندنی در مورد هر آنچه که با آن زندگی می کنید
    </p>
   </p>
</div>


<div className='flex flex-row flex-wrap justify-center w-[95%] mx-auto mt-8'>
<div className='m-2 imags1 w-[350px] h-[270px] flex justify-center rounded-lg  bg-cover bg-center bg-no-repeat items-end '
    style={{backgroundImage:`url(https://snowa.ir/wp-content/uploads/2024/04/1-600x338.jpg)`}}
     > 
     <NavLink className='linka'  to={'/ProductOff'} >
      <div className='w-[340px] type1 flex justify-center self-end my-2 mx-1 p-1.5 
       bg-gradient-to-r from-gray-300 via-yellow-500 to-gray-300  rounded-tr-[20px] rounded-tl-[40px] rounded-br-[60px] rounded-bl-[20px]  h-[30px]' >
  اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف
       </div> </NavLink>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
      </div>
      <div className='m-2 imags1 w-[350px] h-[270px] flex justify-center rounded-lg  bg-cover bg-center bg-no-repeat items-end '
    style={{backgroundImage:`url(https://snowa.ir/wp-content/uploads/2024/03/3-1-600x338.jpg)`}}
     > 
     <NavLink className='linka'  to={'/ProductOff'} >
      <div className='w-[330px] type1 flex justify-center self-end my-2 mx-1 p-1.5  bg-gradient-to-r from-gray-300 via-yellow-500 to-gray-300  rounded-tr-[20px] rounded-tl-[40px] rounded-br-[60px] rounded-bl-[20px]  h-[30px]' >
      ویژگی های لوازم خانگی دوست دار محیط زیست
       </div> </NavLink>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
      </div>
      <div className='m-2 imags1 w-[350px] h-[270px] flex justify-center rounded-lg  bg-cover bg-center bg-no-repeat items-end '
    style={{backgroundImage:`url(https://snowa.ir/wp-content/uploads/2024/02/s6-600x338.jpg )`}}
     > 
     <NavLink className='linka'  to={'/ProductOff'} >
      <div className='w-[330px]type1 flex justify-center self-end my-2 mx-1 p-1.5  bg-gradient-to-r from-gray-300 via-yellow-500 to-gray-300  rounded-tr-[20px] rounded-tl-[40px] rounded-br-[60px] rounded-bl-[20px]  h-[30px]' >
      نور آبی نمایشگرهای دیجیتالی و اثرات مخرب آن 
       </div> </NavLink>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
      </div>
      <div className='m-2 imags1 w-[350px] h-[270px] flex justify-center rounded-lg  bg-cover bg-center bg-no-repeat items-end '
    style={{backgroundImage:`url(https://snowa.ir/wp-content/uploads/2023/12/%D8%B4%D8%A7%D8%AE%D8%B5-3-600x338.jpg)`}}
     > 
     <NavLink className='linka'  to={'/ProductOff'} >
      <div className='w-[330px] type1 flex justify-center self-end my-2 mx-1 p-1.5  bg-gradient-to-r from-gray-300 via-yellow-500 to-gray-300  rounded-tr-[20px] rounded-tl-[40px] rounded-br-[60px] rounded-bl-[20px]  h-[30px]' >
      طرز تهیه آجیل بو داده برای شب یلدا  
       </div> </NavLink>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
      </div>
      <div className='m-2 imags1 w-[350px] h-[270px] flex justify-center rounded-lg  bg-cover bg-center bg-no-repeat items-end '
    style={{backgroundImage:`url(https://snowa.ir/wp-content/uploads/2023/10/6.jpg )`}}
     > 
     <NavLink className='linka'  to={'/ProductOff'} >
      <div className='w-[330px] type1 flex justify-center self-end my-2 mx-1 p-1.5  bg-gradient-to-r from-gray-300 via-yellow-500 to-gray-300  rounded-tr-[20px] rounded-tl-[40px] rounded-br-[60px] rounded-bl-[20px]  h-[30px]' >
      محافظت از لوازم برقی در هنگام رعد و برق 
       </div> </NavLink>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
      </div>
      <div className='m-2 imags1 w-[350px] h-[270px] flex justify-center rounded-lg  bg-cover bg-center bg-no-repeat items-end '
    style={{backgroundImage:`url( https://snowa.ir/wp-content/uploads/2023/12/%D8%B4%D8%A7%D8%AE%D8%B5-600x338.jpg)`}}
     > 
     <NavLink className='linka'  to={'/ProductOff'} >
      <div className='w-[330px] type1 flex justify-center self-end my-2 mx-1 p-1.5  bg-gradient-to-r from-gray-300 via-yellow-500 to-gray-300  rounded-tr-[20px] rounded-tl-[40px] rounded-br-[60px] rounded-bl-[20px]  h-[30px]' >
      ساده‌ترین راه‌ها برای داشتن منزلی با دکوراسیون پاییزی 
       </div> </NavLink>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
      </div>         
</div>

  <div className='flex flex-row justify-center mx-auto my-10'>
    <button onClick={handelclick1} className='home' >ترفند های خانگی</button>
    <button onClick={handelclick2} className='home' > آشپزی خانگی </button>
    <button onClick={handelclick3} className='home' >دکوراسیون خانگی</button>
  </div>
  <div className='flex justify-center flex-wrap mx-auto bg-zinc-100 '>
    {cartshow.map((item) => (
      





<Card className='imags1' sx={{width:{xs:"350px",md:"auto"},height:"320px",bgcolor:"#f9f9f2",marginTop:'10px',marginBottom: '10px',mx:1,mt:3, p:1 }} key={item.id}>
<CardMedia

sx={{height:"250px"}}
    component="img"
   
   image={item.img}
    alt=""
  />
      
    <p className='type1 text-[14px] md:text-[16px] text-gray-800 font-bold mx-auto mt-3 pr-2'>
   {item.text}
  </p>
  <p className='type2 text-lg text-gray-700 font-bold text-right mt-3'>
   بیشتر بخوانید...
  </p>



 
</Card>
   


    ))}
  </div>
  <ReactPaginate
      breakLabel="..."
      nextLabel=" >>"
      onPageChange={handlePageClick}
      pageRangeDisplayed={7}
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
