import  React from 'react';
import  {useContext} from 'react';
import {CartBuyContext} from '../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import { Grid,} from '@mui/material';
import './Carts.css';
import Button from '@mui/material/Button';
import Buttons from './Buttons';
export default function CartModal() {
 
  
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

  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);

  const addCommas=(nStr)=>{
    console.log(setCartItemsBuy(cartItemsBuy));
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
  const totalPrice=addCommas(convertToPersian(cartItemsBuy.reduce((sum,li)=>sum+Number( convertToEnglish(li.pricenum1)-(convertToEnglish(li.pricenum1)*li.off / 100)),0)+""));
  

  return (
    <>
<div className='relative flex flex-col bg-transparent h-auto justify-start overflow-y-auto  [&::-webkit-scrollbar]:w-0 overflow-x-auto  [&::-webkit-scrollbar]:h-0' >  
{cartItemsBuy.map((item) => (
    <div className='w-full flex flex-row justify-between p-1 m-1 border-b border-gray-300'>
<div className='w-[25%]  justify-center'>
    <img src={item.img} className='w-30' alt=''/>
  </div>
  <div className='w-[75%] flex flex-col justify-around '>
      <div>
            <p className='text-sm text-gray-600 self-center text-center'>
            {item.title1}
            </p>
</div>
<div className='flex flex-row-reverse justify-around'>
      
        
          <p  className='text-md text-center self-center text-[#2b31d5] font-bold'   >
          {addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))} تومان 
         </p>
<Buttons t={item}/>
  </div>
  </div>
    </div>


))}
<div className='flex flex-row justify-between my-2 mx-auto w-[90%] '>
  <div ><p className='text-gray-700 font-bold text-lg text-start'>جمع سبد خرید :</p></div>
 <div ><p className='text-lg text-gray-700 text-center font-bold'>{totalPrice} تومان</p></div> 
</div>
<div className='flex flex-row w-[95%] mx-auto justify-around sticky bottom-0'>
  <NavLink to={'/buybasket'}  className="linkss"><button   className='bg-gradient-to-r from-gray-500 via-blue-300 to-gray-500 
                                   rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl mx-auto px-10 md:px-2 py-1 mt-10 mb-5 text-white text-sm font-sans
                                    hover:bg-gradient-to-r hover:from-gray-200
                                   hover:via-gray-500 hover:to-gray-200 hover:text-gray-800'
                                    >    
       ثبت سفارش </button></NavLink>
           <NavLink to={'/'}  className="linkss"> <button    className='bg-gradient-to-r from-gray-500 via-blue-300 to-gray-500 
                                   rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl mx-auto px-10 md:px-2 py-1 mt-10 mb-5 text-white text-sm font-sans
                                    hover:bg-gradient-to-r hover:from-gray-200
                                   hover:via-gray-500 hover:to-gray-200 hover:text-gray-800'
                                    >
         بازگشت به صفحه اصلی </button></NavLink> 
</div>

 </div>
    
    </>
  )
        }