
import 'react-slideshow-image/dist/styles.css';
import React, {useContext,useState,useEffect} from 'react';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import FilterBrands from './FilterBrands';
import { NavLink } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Cards from "../Product/Cards";
function Tems({ currentItems,load }) {
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
    const FilteringDish=()=>{
      
   setDatashow(data.filter(i=> i.product === "Dish"));
  
    }
    const FilteringWash=()=>{
    
      setDatashow(data.filter(i=> i.product === "Wash"));
      
       }
       const FilteringGas=()=>{
       
        setDatashow(data.filter(i=> i.product === "Gas"));
       
         }
         const FilteringRef=()=>{
       
          setDatashow(data.filter(i=> i.product === "Ref"));
         
           }
   return (
    <> 
  
  <div className='flex flex-col bg-zinc-100 justify-center m-auto'>
   <div className="flex justify-start  overflow-x-auto  [&::-webkit-scrollbar]:w-0 py-1 bg-white mb-2" >
        <ul
             className=" flex uppercase font-bold mr-8"
            >
                <li>
                  <button onClick={FilteringDish}  className="bg-transparent w-[120px] flex  text-sm items-center py-2  font-medium
       text-gray-700
       transition delay-150 duration-300 ease-in-out
      hover:text-yellow-500"> ماشین ظرفشویی</button>   
              </li>
              <li >
              <button onClick={FilteringWash} 
               className="bg-transparent w-[120px] flex  text-sm items-center py-2  font-medium
       text-gray-700
       transition delay-150 duration-300 ease-in-out
       hover:text-yellow-500"> ماشین لباسشویی</button>
              </li>
              <li>
              <button onClick={FilteringRef}
              className="bg-transparent w-[120px] flex  text-sm items-center py-2  font-medium
              text-gray-700
              transition delay-150 duration-300 ease-in-out
           hover:text-yellow-500"
              >   یخچال و فریزر </button>   
              </li>
              <li  >
              <button onClick={FilteringGas}  className="bg-transparent w-[120px] flex  text-sm items-center py-2  font-medium
       text-gray-700
       transition delay-150 duration-300 ease-in-out
      hover:text-yellow-500">  پخت و پز</button>
              </li>
            </ul>
          </div>
            
          <div className='bordershadow flex flex-col justify-center items-center mx-auto my-5 '  >
          <p  className='text-lg text-center text-[#371303] px-5 pb-3 font-bold  '>محصولات whirlpool </p>
      </div>
      <div className='flex flex-col md:flex-row justify-start w-[100vw] bg-zinc-100 m-auto' >
        <div className='flex w-[90vw] md:w-[30vw] static md:sticky md:top-[80px] self-center md:self-start md:h-[70vh] '>
  
   <FilterBrands/></div>
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
      <NavLink to={'/CartBuyJashnvareh'}  className={"linkss"}>    
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
  
export default function CardWhirlpool({ itemsPerPage }) {

const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);
const[isLoading,setIsLoading]=useState(true);
const getData=()=>{
fetch('https://serverjson-project.onrender.com/Allproducts' )
.then(res => res.json())
.then((result)=> {
setData(result.filter(i=>i.brands === "Whirlpool"));
 setDatashow(result.filter(i=>i.brands === "Whirlpool"));
setIsLoading(false);

},
(error) => {
  alert('error');
  setIsLoading(false);
}
);

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

