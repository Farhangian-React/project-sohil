import * as React from 'react';
import  {useContext,useState,useRef} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {CartBuyContext, CartContext} from '../../Shared/Cart-Context';
import { Grid,Typography, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/joy/Tooltip';
import TopNav from '../../dashbord/TopNav';
import Footer from '../../Footer/Footer';
import { Helmet } from "react-helmet";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import { MdMessage } from "react-icons/md";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import Divider from '@mui/material/Divider';
import CartModal from "../../Carts-Shoping/CartModal";
import Badge from '@mui/material/Badge';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import '../CartBuy.css';
import { Textarea } from '@mui/joy';
import { useEffect } from 'react';
import SlideSimilarDish from "./SlideSimilarDish";
const drawerWidth = 300;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function CartBuyRefrigerator() { 
  
  const [layout, setLayout] = React.useState(undefined);
  const [cartItems,setCartItems]=useContext(CartContext);
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext); 
  const [image,setImage]=useState();
  const [index, setIndex] = React.useState(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [comment,setComment]=useState("");
  const [score,setScore]=useState("");
  const [error,setError]=useState({});
  const[commenuser,setCommenuser]=useState([]);
  const boxcommentref=useRef();
  const buttoncommentref=useRef();
  const boxnotcomments=useRef();
  const displycomments=useRef();
  const offref=useRef();
  const boxoff=useRef();

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
  const displycomment=()=>{
    boxcommentref.current.className="vis";
    displycomments.current.className="hid";
  }
    const addcomments=()=>{
      if(commenuser.length===0){
  boxnotcomments.current.className="boxnotcomments"
      }
      else{
  boxcommentref.current.className="boxcommentref";

      }
    } 
  const isvalidate = ()=>{
    let isvalid =true;
    let errmesage={};
    if(name === null || name === ""){  
      isvalid = false;
errmesage.name="لطفا نام را وارد کنید";
    }
    if( email === null ||  email === ""){
      isvalid = false;
errmesage.email="لطفا آدرس ایمیل را وارد کنید";
    }

    if(comment === null || comment === ""){ 
      isvalid = false;
errmesage.comment="لطفا دیدگاه خود را وارد کنید";
    }
    if(score === null || score === ""){ 
      isvalid = false;
errmesage.score="لطفا  امتیاز خود را وارد کنید";
    }
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }
  const sumscore=()=>{
     let total=0;
  commenuser.map(i=>{
   return  total += i.score;
   });
    return total / commenuser.length;
  }
useEffect(()=>{
  cartItems.map(i=>{ 
    fetch("https://serverjson-project.onrender.com/Allcomments")
    .then((res)=>
       res.json())
       .then((data)=>{
    data.map(j=>{
      if(j.idcomment === i.id){
        setCommenuser([...data.filter(j=>j.idcomment === i.id )])
      } 
      return cartItems;
    }
      )

    }
       )
    .catch(err=>toast.error(err))
    return console.log(cartItems);
  });
  cartItems.map(i=>{
    setImage(i.img);
    return console.log(cartItems);
  })  
  },[cartItems])
  

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(isvalidate()){
      //console.log(result);
      cartItems.map(i=>{ 
       
  fetch("https://serverjson-project.onrender.com/Allcomments",{
    method:"POST",
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
    body:JSON.stringify({idcomment:i.id,name:name,email:email,
      score:score,comment:comment})
}).then((res)=>{
toast.success("ثبت دیدگاه با موفقیت صورت گرفت") ; 

}).catch((err)=>{
    toast.error("");
})
return console.log(cartItems);
      })
          }
      }
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addToCart=(p)=>{ 
    setCartItems([p]);  
   if(cartItemsBuy.includes(p)){
    setCartItemsBuy((currState)=>{
   return [...currState]});  
  }
  else{
    setCartItemsBuy((currState)=>{
      return [...currState,p]});
   }
   setOpen(true);
    } 

  return(
    <>
     {cartItems.map(i=>
      <Helmet>
        <link  rel="icon"  href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8sUcl-xSeJ2aDKi3dB9ylFBIxBLCo-JXLg&s' />
        <title>
          سهیل / ماشین ظرفشویی   </title>
    </Helmet>
     )}
    <TopNav/>
    <div>
     <ToastContainer/>  
    </div>
    <div className='flex flex-col bg-zinc-100 '>
    {cartItems.map(i=>
    <div dir='rtl' className='flex flex-row bg-white rounded-t-3xl w-[95%] mx-auto my-4'>
    <p className='text-[14px] md:text-[16px] text-gray-600 py-2 pr-2'> محصولات /  ماشین ظرفشویی /
      </p>
      <p className='text-[12px] md:text-[14px] text-[#2b31d5] font-bold pr-1 py-2'>{i.title1} </p>
    </div>
    
    )}
   
    <div dir='rtl' className='flex flex-col md:flex-row bg-white rounded-t-3xl w-[95%] h-auto mx-auto '>
 
         {cartItems.map(i=> 
         <div className='flex flex-col justify-center mt-6 w-full md:w-[50%]'> 
           <img  className='hover:scale-125 w-[100px] h-[70px] mr-8'  alt='' src={i.berand}/>
        
          <p className='text-lg font-bold text-gray-800 py-2 text-right pr-8' >
       {i.title1}
        </p>
        <p className='text-[14px] font-bold text-gray-500 mt-3 text-right pr-8'  >
      {i.title2}
        </p>
        <Rating
             sx={{fontSize:"16px",pr:4,mb:3}}
       name="simple-controlled"
       value={sumscore()}
     />
          <p className='text-[14px] text-justify text-gray-500 pr-8 py-2 ' >
    {i.title3}
        </p>
        
        
           { i.off !== "" ?
          <div  className='flex flex-col justify-start my-1'>
             <p className='text-lg text-gray-500 line-through decoration-yellow-800 pr-8 my-1'>{i.price}</p>
            <div  className='flex flex-row justify-start'>
         <p className='text-yellow-800 font-bold text-right text-md sm:text-2xl  px-8 mt-0.5'>قیمت با  {convertToPersian(i.off)}%   تخفیف :
          
         </p>
          <p className='text-yellow-800 font-bold text-right text-md sm:text-2xl  pr-1 mt-0.5' >
       
          {addCommas(convertToPersian((convertToEnglish(i.pricenum)-(convertToEnglish(i.pricenum)*i.off / 100))+''))} تومان 
         </p>
         </div>
          </div>
          
          :
          <div  className='flex flex-row justify-start'>
          <p className='text-yellow-800 font-bold text-right text-xl pr-8 mt-0.5'>قیمت :</p>
          <p 
         className='text-yellow-800 font-bold text-right text-xl pr-8 mt-0.5' >
         {  i.price}
          </p>
           
          </div>
}
             
             <div>              
                                          <button    onClick={()=> addToCart(i)} className='bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 
                                                rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl mx-10  md:mx-16 px-10 md:px-2 py-1 mt-10 mb-5 text-white text-md font-sans
                                                 hover:bg-gradient-to-r hover:from-gray-500
                                                hover:via-yellow-800 hover:to-gray-500'
                                                 >    
                     افزودن به سبد خرید  </button>
                     <Drawer
                    sx={{
                      position:"absolute",
                      width: drawerWidth,
                      height:"60vh",
                      flexShrink: 0,
                      '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        height:"85vh",
                        boxSizing: 'border-box',
                        borderTopRightRadius:"20px",
                        borderBottomRightRadius:"20px" 
                      },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                  >
                     <DrawerHeader sx={{display:"flex",justifyContent:"space-between",backgroundColor:"white"}}>
             <Badge badgeContent={cartItemsBuy.length} color="primary"  sx={{mr:3}} >
             <RiShoppingCartLine className='w-6 h-6 text-gray-800 ' />
             </Badge>
             <p className='text-gray-600 font-bold text-lg'>سبد خرید </p>
                         <IconButton onClick={handleDrawerClose}  sx={{':hover':{color:"red"}}}>
                         {theme.direction === 'ltr' ?  <IoClose className="block h-5 w-5 text-black hover:text-red-600 "  /> :
                         <IoClose className="block h-5 w-5 text-black hover:text-red-600"  />}
                       </IconButton>
                     </DrawerHeader>
                     <Divider />
                    <CartModal/>
                     </Drawer>
             </div>
         <div className='flex justify-center mx-auto pb-3'>
         <InfoIcon sx={{mt:1,mr:1.5,fontSize:'18px',color:'#4b4f4f'}}/>
         <p className='text-[12px] text-justify pr-1 pl-5 text-gray-700 '> درخواست مرجوع کردن کالا در گروه یخچال و فریزر با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد 
          (در صورت پلمپ بودن، کالا نباید باز شده باشد).</p>
          </div>
          <Box sx={{m:2, display:'flex',justifyContent:'center'}}>
        <Tooltip color='warning'  title="اضافه به علاقمندی">
      <IconButton sx={{pl:2,color:'black' }}>
        <FavoriteBorderIcon sx={{fontSize:"22px"}} />
      </IconButton>
    </Tooltip>
    <Tooltip title=" به اشتراک گذاری کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <ShareIcon  sx={{fontSize:"22px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" اطلاع رسانی شگفت انگیز ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <NotificationsActiveOutlinedIcon  sx={{fontSize:"22px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" نمودار قیمت">
      <IconButton  sx={{pl:2,color:'black' }}>
         <TimelineOutlinedIcon  sx={{fontSize:"22px"}}/>
         </IconButton>
    </Tooltip>
        
    <Tooltip title=" مقایسه کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
        <AutoAwesomeMotionOutlinedIcon  sx={{fontSize:"22px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" افزودن به لیست ">
      <IconButton  sx={{pl:2,color:'black' }}>
   <TocOutlinedIcon  sx={{fontSize:"22px"}}/>
         </IconButton>
    </Tooltip>
         
          </Box>
           </div>
         )}

       
             
     <div dir='rtl' className='flex flex-col md:flex-row justify-start self-center md:self-start mx-auto mt-6 w-full md:w-[50%]'  >
         <div 
          className=' flex justify-center self-center w-[85%]  h-[500px] my-8  bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${image})`}}>
        </div>
         {cartItems.map(i=>
         <div  className="inline-block md:hidden overflow-y-auto overflow-x-auto [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0  py-1 bg-white
     w-[80%] mx-auto px-3  h-[120px] ">
    <ul className=" flex uppercase font-bold mr-1">
       <li>
         <Link onClick={()=>setImage(i.img)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1  bg-cover bg-center bg-no-repeat rounded-sm mx-2'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.img})`,
          }} 
       
        >
        </div>
      
        </Link>
        </li>
        <li>
           <Link onClick={()=>setImage(i.imga1)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1   bg-cover bg-center bg-no-repeat rounded-sm mx-2'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga1})`,
          }} 
       
        >
        </div>
      
        </Link>
        </li>
        <li>
           <Link onClick={()=>setImage(i.imga2)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1  bg-cover bg-center bg-no-repeat rounded-sm mx-2'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga2})`,
          }} 
       
        >
        </div>
      
        </Link>
        </li>
         <Link onClick={()=>setImage(i.imga3)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1   bg-cover bg-center bg-no-repeat rounded-sm mx-2'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga3})`,
          }} 
       
        >
        </div>
      
        </Link>
         <Link onClick={()=>setImage(i.imga4)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1   bg-cover bg-center bg-no-repeat rounded-sm mx-2'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga4})`,
          }} 
       
        >
        </div>
      
        </Link>
        </ul>
        </div>
         )}
           
 {cartItems.map(i=>
         <div  className="hidden md:flex md:flex-col md:justify-center overflow-y-auto overflow-x-auto [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar]:w-0  py-1 bg-white
     w-[100%] mx-auto px-3  h-[600px] my-8 ">
    <ul className=" flex flex-col uppercase font-bold mr-1">
       <li>
         <Link onClick={()=>setImage(i.img)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1   bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.img})`,
          }} 
       
        >
        </div>
      
        </Link>
        </li>
        <li>
           <Link onClick={()=>setImage(i.imga1)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1 bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga1})`,
          }} 
        >
        </div>
      
        </Link>
        </li>
        <li>
           <Link onClick={()=>setImage(i.imga2)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1  bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga2})`,
          }} 
        >
        </div>
        </Link>
        </li>
         <Link onClick={()=>setImage(i.imga3)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1   bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga3})`,
          }} 
       
        >
        </div>
      
        </Link>
         <Link onClick={()=>setImage(i.imga4)}>
         <div 
          className=' flex w-[100px]  h-[100px] my-1   bg-cover bg-center bg-no-repeat rounded-sm mx-auto'
          style={{
            borderRadius:"20px",
            backgroundImage:`url(${i.imga4})`,
          }} 
        >
        </div>
        </Link>
        </ul>
        </div>
         )}
        </div> 
</div>
<div dir='rtl' className='flex flex-col justify-center bg-white  rounded-t-3xl w-[95%] mx-auto my-6'>
       <Accordion sx={{mx:"auto",width:"95%",mt:5}}
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
          
        }}
      >
         <AccordionSummary   sx={{color:"#585858",fontSize:{xs:"18px",md:'20px'}}}   expandIcon={<AddIcon sx={{fontSize:{xs:"18px",md:"20px"}}} />}> مشخصات اصلی</AccordionSummary>
        <AccordionDetails sx={{mx:"auto",width:"95%"}}>
          <Box  sx={{display:'flex'}}>
             {cartItems.map(i=> 
        <List
            aria-label="Products"
            variant="outlined"
            orientation='vertical'
            sx={{
              mt: 2,
              mb:0,
              border:'none',
              backgroundColor:'#f5f5f5',
              alignItems:'start',
            }} 
          >
            <ListItem role="none">
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>مدل : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fs}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>عمق : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fd}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>ستاره انرژی : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fstar}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}> سطح دسی بل : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.DL}   </Typography>
            </ListItem>
          </List>
            )}
        {cartItems.map(i=> 
        <List
            aria-label="Products"
            variant="outlined"
            orientation='vertical'
            sx={{
              mt: 2,
              mb:0,
              border:'none',
              backgroundColor:'#f5f5f5',
              alignItems:'start',
            }} 
          >
            <ListItem role="none">
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600',}}>وان بلند : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.TullT}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}> وان فولادی ضد زنگ : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.StainlessT}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}> ارتفاع : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fh } </Typography>
            </ListItem>
            <ListItem role="none">
          
          </ListItem>
          </List>
            )}
        {cartItems.map(i=> 
        <List
            aria-label="Products"
            variant="outlined"
            orientation='vertical'
            sx={{
              mt: 2,
              mb:0,
              border:'none',
              backgroundColor:'#f5f5f5',
              alignItems:'start',
            }} 
          >
            <ListItem role="none">
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>تعداد چرخه : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.NumCycles}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>عرض : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fw}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>  قابلیت wifi : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fwifi}   </Typography>
            </ListItem>
            <ListItem role="none">
          
            </ListItem>
          </List>
            )}
    </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mx:"auto",width:"95%"}}
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
         <AccordionSummary   sx={{color:"#585858",fontSize:{xs:"18px",md:'20px'}}}   expandIcon={<AddIcon sx={{fontSize:{xs:"18px",md:"20px"}}} />}>ویژگی ها و امکانات</AccordionSummary>
          <AccordionDetails sx={{mx:"auto"}}> 
              {cartItems.map(i=>
            <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-center mx-auto'  >  
            {i.Prop.map(j=>
              <ul>
                <li className='flex justify-center md:justify-start self-center md:self-center items-center md:items-start m-2'>
                    <img  className='hover:scale-125 w-[200px] h-[200px] '  alt='' src={j.Fimg}/>
             
                </li>
                <li className='m-2'>
                  <p className='text-center md:text-start text-sm text-gray-800 font-bold'>{j.Ftitle1}</p>
                </li>
                <li className='flex flex-wrap m-2'>
                  <p className=' md:text-start text-xs text-justify text-gray-500'>{j.Ftitle2}</p>
                </li>
              </ul>
          
         
            )}
               </div>  )}
      
              </AccordionDetails>
      </Accordion>
       <Accordion sx={{mx:"auto",width:"95%",mb:5}}
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
          <AccordionSummary   sx={{color:"#585858",fontSize:{xs:"18px",md:'20px'}}}   
           expandIcon={<AddIcon sx={{fontSize:{xs:"18px",md:"20px"}}} />}> مشخصات بیشتر</AccordionSummary>
        <AccordionDetails>
      
        </AccordionDetails>
      </Accordion>
   
    </div>
    <div dir='rtl' className='flex flex-col md:flex-row bg-white rounded-t-3xl w-[95%] mx-auto my-6'>
<Box  sx={{width:"100%",display:"flex",justifyContent:"start",flexDirection:"column",mt:{xs:3,lg:1},pb:{lg:3}}}>
{cartItems.map(i=>
    <Box container sx={{whiteSpace:"wrap",width:"90%",display:'flex',flexDirection:"row",alignSelf:"center",bgcolor:'white',px:3,py:0,mx:{xs:1,md:5},my:1,borderRadius:'10px',direction:'rtl'}}>
     <MdMessage className='w-10 h-10 text-[#E0AA3E] pt-3' /> 
      <p className='text-[18px] font-bold text-gray-700 px-2 pt-2'> نظرات کاربران 
      
       </p>
    </Box>)}
    <Box  sx={{whiteSpace:"wrap",display:'flex',flexDirection:"column",bgcolor:'white',p:3,mx:{xs:1,md:5},my:1,border:"1px dashed #d0d0d0",borderRadius:'10px',direction:'rtl'}}>
      <Typography  sx={{my:1,fontSize:"18px",fontWeight: 'bold'}}>
      دیگران را با نوشتن نظرات خود، برای انتخاب این کالا راهنمایی کنید.
      </Typography>
      <Typography sx={{color:"#2b31d5",fontSize:"16px"}}>
      لطفا پیش از ارسال نظر، خلاصه قوانین زیر را مطالعه کنید:
      </Typography>
      <Typography sx={{fontWeight: 'light',fontSize:"16px",color:"#6e6e6e"}}>
      لطفا متن ارسالی به دور از توهین و تمسخر باشد.
      </Typography>
      <Typography  sx={{fontWeight: 'light',fontSize:"16px",color:"#6e6e6e"}}>
      از ارسال لینک‌ سایت‌های دیگر و ارایه‌ی اطلاعات شخصی نظیر شماره تماس، ایمیل و آی‌دی شبکه‌های اجتماعی پرهیز کنید.
      </Typography>
      <Typography sx={{pt:2}}>
      در نظر داشته باشید هدف نهایی از ارائه‌ی نظر درباره‌ی کالا ارائه‌ی اطلاعات مشخص و مفید برای راهنمایی سایر کاربران در فرآیند انتخاب و خرید یک محصول است.
      </Typography>
  
    </Box>
       <button ref={buttoncommentref} onClick={addcomments}  className='bg-gradient-to-r from-yellow-500 via-gray-500 to-yellow-500 
                                   rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl mx-6  sm:mx-16 px-2 py-1 mt-10 mb-5 text-white text-md font-sans
                                    hover:bg-gradient-to-r hover:from-gray-500
                                   hover:via-yellow-800 hover:to-gray-500'
                                    >  مشاهده ی دیدگاه کاربران </button>

       <Box  ref={boxnotcomments} sx={{display:"none"}}>
         <p className='text-sm md:text-xl text-gray-700 mx-auto'> دیدگاهی برای این محصول ثبت نشده است</p> 
       </Box>
     <div ref={boxcommentref} className='hidden'>
      <Typography variant='h5' sx={{direction:"rtl",color:"#282828",my:0,py:0}}>دید گاه ها...
      <Box className='linetin'></Box>
      </Typography>
     
       {commenuser.map(j=> 
  <Typography sx={{direction:"rtl"}}>
      <Typography variant='body2' sx={{mt:3}}>{j.name}</Typography>
      <Rating
        name="simple-controlled"
        value={j.score}
        sx={{fontSize:"14px",my:1}}
      />
      <Typography sx={{fontSize:"16px",color:"#585858"}}>{j.comment}</Typography>
      <Box className='linetinck'></Box>
     </Typography>
       )}
       
   </div>
</Box>
   
    <Box   sx={{width:"100%",display:"flex",justifyContent:"start",flexDirection:"column",mt:{xs:3,lg:1},pb:3,
    bgcolor:'white',direction:'rtl'}}
    
    >   
    {cartItems.map(i=>
    <Box container sx={{mx:3,py:3,display:'flex',flexDirection:"column",bgcolor:'white',direction:'rtl'}}>
      <p className='text-[16px] font-bold text-gray-700 py-1'> اولین نفری باشید که دیدگاهی را ارسال می کنید برای : 
       </p>
      <p className='text-[14px] text-[#2b31d5] font-bold pt-1' > {i.title1} </p>
       <Box className='linetinck'></Box>
    </Box>
    )}
         <form  noValidate onSubmit={handlesubmit}>
          <Box sx={{mt:1,mx:3}}>
            <div className='flex flex-row justify-start'>
              <div className='flex flex-col justify-start w-[30%]'>
           <Input
              sx={{fontSize:"16px"}}
            color="warning"
            placeholder='نام'
                autoComplete="fname"
                name="نام"
                variant="outlined"
                required
                id="firstName"
                label="نام"
                autoFocus
               className='input'
               value={name}
               onChange={(e)=> setName(e.target.value)}
              />
              <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               
                {error.name}
              </Typography>
              </div>
              <div className='flex flex-col justify-start  w-[70%]'>
            <Input
              sx={{fontSize:"16px",mr:2}}
                color="warning"
              placeholder='آدرس ایمیل'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              
              />
              <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               
               {error.email}
             </Typography>
             </div>
             </div>
                <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"16px",mt:3}}> امتیاز شما</FormLabel>
                <Rating
        name="simple-controlled"
        value={score}
        
        onChange={(event, newValue) => {
          setScore(newValue)
          ;
        }}
      />
       <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.score}
              
             </Typography>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"16px",mt:3}}> دیدگاه شما <AcUnitIcon  sx={{fontSize:"8px",color:"#615d5d"}}/>  </FormLabel>
            <Textarea
          
             color="warning"
                 variant="outlined"
                 required
              
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"100%",height:"180px",fontSize:"16px"}}
             ></Textarea>

               <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.comment}
              
             </Typography>
           
            

          <button
          className='bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 
                                   rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl mx-auto   px-8 py-1 mt-10 mb-5 text-white text-md font-sans
                                    hover:bg-gradient-to-r hover:from-gray-500
                                   hover:via-yellow-800 hover:to-gray-500 hover:text-white'
            type="submit"
            
          >
             ثبت دیدگاه
          </button>
          </Box>
        </form>
        </Box> 


</div>
   <SlideSimilarDish/>     
</div>
    <Footer/>
    </>
  );
}
