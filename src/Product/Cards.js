import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "../Product/Refrigerator/Refrigerator.css";
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function Cards({ curr}) {
 const [cartItems,setCartItems]=useContext(CartContext);
      const[datacomment,setDatacomment]=useState([]);
        const convertToEnglish=(str)=> {
      
       let englishNumber =str
       .replace(/۰/g, '0')
       .replace(/۱/g, '1')
       .replace(/۲/g, '2')
       .replace(/۳/g, '3')
       .replace(/۴/g, '4')
       .replace(/۵/g, '5')
       .replace(/۶/g, '6')
       .replace(/۷/g, '7')
       .replace(/۸/g, '8')
       .replace(/۹/g, '9');
   
    return(englishNumber);
     }
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
     const addCommas=(nStr)=>{
     
       if(nStr.length === 7){
         return  nStr.substring(0,1) + "," + nStr.substring(1, 4) + "," + nStr.substring(4, 7);
       }
       if(nStr.length === 8){
         return  nStr.substring(0, 2) + "," + nStr.substring(2, 5) + "," + nStr.substring(5, 8);
       }
       if(nStr.length === 9){
         return  nStr.substring(0, 3) + "," + nStr.substring(3, 6) + "," + nStr.substring(6, 9);
     }
     }
       const getData=()=>{
           fetch("https://serverjson-project.onrender.com/Allcomments")
           .then((res)=>
              res.json())
              .then((data)=>{
             setDatacomment(data);
               console.log(cartItems);
             
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
    return(
        <>

     
     <Card  onClick={()=>{
     setCartItems([curr]);
      }}  className='cards' sx={{width:{xs:"250px",md:"300px"},height:"460px",mx:1,my:"1em",px:1 ,pt:3 }} key={curr.id}>

<CardMedia
component="img"
onClick={()=>{
setCartItems([curr]);
}}
image={curr.img}
alt=""
sx={{width:"250px",m:"auto",height:"200px"}}
/>
<CardContent sx={{border:"none",height:'55px',direction:"rtl"}}>
<p className='text-center text-sm font-bold pb-1'>
{curr.title1}
</p>
</CardContent>
<CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"space-around",mt:1.5,
alignSelf:"center",alignItems:"center",
border:"none",height:'40px',direction:"rtl",py:0.5,my:0}}>
<p className='text-center text-xs text-gray-700'>
{curr.title2}
</p>
<Rating
 sx={{color:"#f5cd00",fontSize:"1em",pr:5,alignItems:"center"}}
name="simple-controlled"
value={sumscore(curr)}

/>

</CardContent>

<CardContent sx={{height:'70px',direction:"rtl",display:"flex",justifyContent:"center",flexDirection:"column",borderBottom:'1px solid #d4d4d4',borderTop:'1px solid #d4d4d4'}} >

{ curr.off !== "" ?

  <div  dir="rtl" className='flex justify-between items-baseline'>
  <div   className='flex justify-center text-center rounded-md text-yellow-500 bg-gray-900 h-[20px] w-[35px]
   hover:bg-yellow-500 hover:text-gray-900'>
<p className='text-xs text-center py-0.5' >  {convertToPersian(curr.off)}%</p>

</div> 
  <div className='flex flex-col' >
<p className='text-sm text-yellow-500 text-center line-through decoration-gray-600 ' >{curr.price}</p>
 <p   className='text-gray-600 text-left text-lg font-bold' >

  {addCommas(convertToPersian((convertToEnglish(curr.pricenum)-(convertToEnglish(curr.pricenum)*curr.off / 100))+''))} تومان 
 </p>
</div>
</div>

:<p className='text-lg text-center text-gray-600 font-bold '>{curr.price}</p>
}
</CardContent>
<CardContent sx={{display:'flex',justifyContent:'center',height: "30px"}}>

             <div     className=' w-[120px] h-[30px] text-center  hover:bg-gradient-to-r hover:from-gray-500
              hover:via-yellow-800 hover:to-gray-500 
             rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl mx-auto my-auto  text-white text-md font-sans
              bg-gradient-to-r from-gray-500
             via-yellow-500 to-gray-500'
              > 
             خرید</div>

</CardContent>
</Card>

        </>
  );
      }