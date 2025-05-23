import * as React from 'react';
import  {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './CartBuy.css';
import { useEffect } from 'react';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import { Fade } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';
import Cards from './Cards';


export default function SlideSimilarRef()  {
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
   const getData=()=>{
    fetch('https://serverjson-project.onrender.com/Allproducts' )
    .then(res => res.json())
    .then((result)=> {
    setData(result.filter(i=>i.product === "Gas" ));
     setDatashow(result.filter(i=>i.product === "Gas"  ));
    },
    (error) => {
      alert('error');
    }
    )
   }
   useEffect(()=>{
    getData();
  },[])

    return(
        <><div dir='rtl' className=' flex flex-col md:hidden bg-white my-2 mx-auto w-[97%] rounded-sm '>
                <div    className='bordershadow flex flex-col justify-center w-[200px] text-start m-10 '  >
                <p className='text-2xl text-center font-bold text-gray-700 py-3' >
             محصولات مشابه
                </p>
                </div>
                <Fade>
                {datashow.map((item) => (
              
              <NavLink to={'/cartbuygas'}  className={"linkss"}>
        
         <Cards curr={item}/>
        </NavLink>
              
            ))}
           
                </Fade>
                </div>
        
               
                <div dir='rtl' className='hidden md:flex  md:flex-col lg:hidden bg-white my-2 mx-auto w-[97%] rounded-sm '>
                <div    className='bordershadow flex flex-col justify-center w-[200px] text-start m-10 '  >
                <p className='text-2xl text-center font-bold text-gray-700 py-3' >
             محصولات مشابه
                </p>
                </div>
                <Slide slidesToScroll={1} slidesToShow={3} indicators={false} >
                {datashow.map((item) => (
              
              <NavLink to={'/cartbuygas'}  className={"linkss"}>
          <Cards curr={item}/>
        </NavLink>
              
            ))}
           
           </Slide>
                </div>
                <div dir='rtl' className='hidden lg:flex lg:flex-col bg-white my-2 mx-auto w-[97%] rounded-sm '>
                <div    className='bordershadow flex flex-col justify-center w-[200px] text-start m-10 '  >
                <p className='text-2xl text-center font-bold text-gray-700 py-3' >
             محصولات مشابه
                </p>
                </div>
                <Slide slidesToScroll={1} slidesToShow={4} indicators={false} >
                {datashow.map((item) => (
              
              <NavLink to={'/cartbuygas'}  className={"linkss"}>
        
        <Cards curr={item}/>
        </NavLink>
              
            ))}
           
           </Slide>
                </div>
        
        </>
    )
}