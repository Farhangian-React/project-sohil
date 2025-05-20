import * as React from 'react';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect ,useRef} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CardDatamapshow} from '../../Shared/Cart-Context';
import storeimage from "../../img/Stores.png";
import "../Stores.css";
import { Typography } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function Selector() {
  const refbox=useRef();
  const [fromostan, setFromostan] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [address,setAddress]=useState([]);
  const [datamapshow,setDatamapshow]=useContext(CardDatamapshow);
  const [dataselactor,setDataselactor]=useState([]);
  const getData=()=>{
    fetch('https://serverjson-project.onrender.com/features' )
.then(res => res.json())
.then((result)=> {
setDataselactor(result);

},
    (error) => {
      alert('error');
    }
    )
   }
  
    useEffect( ()=>{
      getData();
     
  
    },[]);

   
   const handleFromostan = (e) => {
     
    refbox.current.className="hiden";
    const ostan = dataselactor.find(

      (ostan) => ostan.name === e.target.value
    );
  
     setDatamapshow(dataselactor.filter(i=> i.name === ostan.name));
     console.log(dataselactor.filter(i=> i.name === ostan.name));
    setFromostan([ostan]);
    setFromCities(ostan.cities);



  };
  const handleFromcities = (e) => {

    const cit = fromCities.find(
      (cit) => cit.city === e.target.value
    );
const fff=fromCities.filter((f)=>{return f.city===cit.city;});
  datamapshow.map((t)=>{
   t.cities=fff;
setDatamapshow([t]);
   })
  setAddress(cit.properties);
  };
  return (
    <>

     <div className='flex flex-col justify-center w-full my-2 py-1 mx-0 md:mx-2 px-0 md:px-2 h-[500px]'>
  <div dir="rtl" className='  bg-gradient-to-r from-[#c2e59c] via-[#64b3f4] to-[#c2e59c]
   flex flex-row justify-center rounded-xl  border-2 border-gray-200
   py-0 md:py-2 px-3 sm:px-3 md:px-5 mx-0 md:mx-1 '
  >
    <div className='flex flex-col justify-start py-2 px-3 '>
      <p className='text-xs text-black mx-1 md:mx-8 '> انتخاب استان</p>
    <FormControl dir="rtl" variant="standard" sx={{ my:1,mx:{xs:1,md:5},width:{xs:"100px",sm:"200px"}}}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        value={fromostan.name}
        onChange={handleFromostan}
          label="انتخاب استان"
           className='selectclass  w-[130px] md:w-[200px]'
        > 
         {dataselactor.map((country, key) => (
          <MenuItem  value={country.name} key={key} sx={{direction:"rtl"}}>  {country.name}</MenuItem>
        ))}
        </Select>
      </FormControl>
      </div>
      <div className='flex flex-col justify-start py-2 px-3'>
      <p className='text-xs text-black mx-1 md:mx-8 '> انتخاب شهر</p>
      <FormControl  variant='standard' sx={{my:1,mx:{xs:1,md:5},width:{xs:"100px",sm:"200px"} }}>
        <Select
          value={fromCities.city}
          onChange={handleFromcities}
         label="انتخاب شهر"
     className='selectclass  w-[130px] md:w-[200px]'
        >
            {fromCities.map((city, key) => (
          <MenuItem key={key}  value={city.city} sx={{direction:"rtl"}}>  {city.city}</MenuItem>
        ))} 
        </Select>
      </FormControl>
      </div>








    </div>
    <div  className='flex flex-col justify-start h-[320px] p-2 mx-auto  overflow-y-auto  [&::-webkit-scrollbar]:w-0 overflow-x-auto  [&::-webkit-scrollbar]:h-0 mt-3'>  
       <p className='text-sm text-gray-800 my-1'>جهت مشاهده فهرست فروشگاه‌ها، ابتدا استان و شهر مورد نظر خود را انتخاب کنید</p>
    <img ref={refbox} className='mx-auto' width={300} height={400} alt=''
         src={storeimage}/>
      
      {address.map((a)=>
      <div className='flex flex-row justify-start w-full border-b-2 border-gray-500  mt-5 bg-white '>
    <PlaceOutlinedIcon className='h-4 w-4 text-blue-500 mt-2 ml-3' /> 
  <p className='py-1.5 text-md text-blue-500 ' >{a.storename} 
  <Typography variant='body2' sx={{py:0.5,color:"black"}}> {a.address} 
  </Typography> <p className='text-gray-500 text-[12px] py-0.5'> {a.callnum}
   </p>  
 
 </p>



  </div>
      )}
    </div>
    </div>
    </>
  );
}



 