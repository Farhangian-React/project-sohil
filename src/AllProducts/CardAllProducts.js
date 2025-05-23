
import 'react-slideshow-image/dist/styles.css';
import React, {useContext,useState,useEffect} from 'react';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FilterBrands from './FilterBrands';
import { NavLink } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Cards from "../Product/Cards";
function Tems({ currentItems,load }) {
 return (
  <> 
<Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
<Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"65vh"},
position:{xs:"static",lg:"sticky"},
top: "80px",

}}>
<FilterBrands/></Box>
<Box sx={{width:{xs:"90%",lg:"75%"},display:'flex',flexDirection:'column',justifyContent:'start',mx:1,mt:{xs:3,lg:0}}}>
<Box sx={{mx:3,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"}, height:'6vh',color:{xs:"#282828",lg:"#585858"},bgcolor:{lg:"white"}}}>
<Typography sx={{px:3,pt:0.5,fontSize:{xs:"22px"},direction:'rtl'}}>
 محصولات سهیل  
</Typography>
</Box>
<Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:1.5,pb:3,px:0}}>
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
    </Box>
  </Box>
</Box>
</Box>
  </>
);
    }
   const MemoizedComponent = React.memo(Tems);
export default function CardAllProducts({ itemsPerPage }) {
const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);
const[isLoading,setIsLoading]=useState(true);
const getData=()=>{
fetch('https://serverjson-project.onrender.com/Allproducts' )
.then(res => res.json())
.then((result)=> {
  setData(result);
 setDatashow([...data]);
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
    <MemoizedComponent currentItems={currentItems}  load={isLoading} />
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

