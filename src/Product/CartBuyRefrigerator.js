import * as React from 'react';
import  {useContext,useState,useRef} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {CartBuyContext, CartContext} from '../Shared/Cart-Context';
import { Grid,Typography,Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/joy/Tooltip';
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
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
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import CartModal from "../Carts-Shoping/CartModal";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import HiveIcon from '@mui/icons-material/Hive';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import './CartBuy.css';
import { Textarea } from '@mui/joy';
import { useEffect } from 'react';
import SlideSimilarRef from "./SlideSimilarRef";
const drawerWidth = 450;
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
  const [advantage,setAdvantage]=useState("");
  const [disadvantages,setDisadvantages]=useState("");
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
  const offrefprice=()=>{
    cartItems.map(i=>{
      if(i.off === ""){
     
        boxoff.current.className="boxoff";
return cartItems;
      }
      else{
        offref.current.className="offref";
        return console.log(cartItems);
      }
    }
    )}
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
  displycomments.current.className="disply";
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
    if( advantage === null || advantage === ""){
      isvalid = false;
errmesage.advantage="لطفا نقاط قوت را وارد کنید";
    }
    if(disadvantages === null || disadvantages === ""){
      isvalid = false;
errmesage.disadvantages="لطفا نقاط ضعف را وارد کنید";
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
  
  useEffect(()=>{ 
    offrefprice();
  },[])
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(isvalidate()){
      //console.log(result);
      cartItems.map(i=>{ 
       
  fetch("https://serverjson-project.onrender.com/Allcomments",{
    method:"POST",
    headers:{"content-type":"aplication/json"},
    body:JSON.stringify({idcomment:i.id,name:name,email:email,advantage:advantage,disadvantages:disadvantages,
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
          سهیل / یخچال فریزر / {i.title1}
           </title>
    </Helmet>
     )}
    <TopNav/>
    <div>
     <ToastContainer/>  
    </div>
    <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
    {cartItems.map(i=>
    <Box container sx={{display:'flex',flexDirection:"row",bgcolor:'white',mx:5,mb:2,mt:{xs:12,lg:2},borderRadius:'10px',direction:'rtl'}}>
    <Typography  sx={{px:2,py:1,color:"gray",fontSize:"16px"}}> محصولات / یخچال و فریزر /
      </Typography><Typography sx={{pt:1.2,color:"#674e06",fontSize:"14px"}}>{i.title1} </Typography>
    </Box>
    )}
   <Box container sx={{height:"auto",bgcolor:"blue",display:'flex',flexDirection:{xs:'column',lg:"row"},bgcolor:'white',mx:5,mt:0,mb:5,borderRadius:'10px',direction:'rtl'}}>
        <Box >
         {cartItems.map(i=> 
         <Box   sx={{mt:{xs:1,md:1},display:'flex', flexDirection:'column',justifyContent:'center',bgcolor:'white'}}> 
         <Box sx={{px:5,mt:1,mb:{xs:12,lg:12},width:'15%',height:'20px'}}>
         <img src={i.berand} width={'90%'}/>
         </Box>
          <Typography variant='h5' sx={{px:5,mb:3,mt:0,textAlign:'right',fontSize:"16px"}}  >
       {i.title1}
        </Typography>
        <Typography variant='h6'  sx={{px:5,mb:1,color:'gray',textAlign:'right'}}  >
      {i.title2}
        </Typography>
        <Rating
             sx={{fontSize:"22px",px:5,mb:3}}
       name="simple-controlled"
       value={sumscore()}
     />
          <Typography  sx={{px:5,my:1,color:'#585858',textAlign:'right',fontSize:"15px",textAlign:"justify"}}>
    {i.title3}
        </Typography>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'start'}}>
         <Typography variant='h5' sx={{px:5,mt:2.6,textAlign:'right'}}>قیمت :</Typography>
          <Typography ref={offref} variant="h4" sx={{color:'#b77d08',px:5,mt:2,textAlign:'right'}}  >
         {  i.price}
          </Typography>
          
          </Box>
          <Box ref={boxoff} sx={{display:'flex',flexDirection:'row',justifyContent:'start',my:1.5}}>
         <Typography variant='h5' sx={{color:"red",px:5,mt:0.5,textAlign:'right'}}>قیمت با  {convertToPersian(i.off)}%   تخفیف :</Typography>
          <Typography variant="h5" sx={{color:'red',px:1,mt:0.5,textAlign:'right'}}  >
       
          {addCommas(convertToPersian((convertToEnglish(i.pricenum)-(convertToEnglish(i.pricenum)*i.off / 100))+''))} تومان 
         </Typography>
          </Box>
        <Button size='large'  color='secondary'  onClick={()=>
         addToCart(i)
       }
       sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"22px",
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mx:30, my:3,py:0.5,px:0}}
       > 
        افزودن به سبد خرید  </Button>
        <Drawer
       sx={{
         position:"absolute",
         width: drawerWidth,
         height:"60vh",
         flexShrink: 0,
         '& .MuiDrawer-paper': {
           width: drawerWidth,
           height:"95vh",
           boxSizing: 'border-box', 
         },
       }}
       variant="persistent"
       anchor="right"
       open={open}
     >
        <DrawerHeader sx={{display:"flex",justifyContent:"space-around",backgroundImage:"#f2f2f2"}}>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"start",width:"100%"}}>
<Box sx={{width:"30px",alignSelf:'center',pr:2}}>
<Badge badgeContent={cartItemsBuy.length}  color="warning" >
<ShoppingCartIcon color="action"sx={{color:"black"}} />
</Badge>
</Box> 
<Box sx={{width:"80px",alignSelf:'center',pr:0}}>
<Typography

noWrap
component="a"
href="/"
sx={{
mr:1 ,
mt:0,
display: 'flex',
flexGrow: 0,
fontSize:"22px",
color: '#202020',
textDecoration: 'none',
direction:"rtl"
}}
>
سبدخرید
</Typography>
</Box>
</Box>
           <Box sx={{width:"100%",direction:"ltr"}}>

            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
             </Box>
        </DrawerHeader>
        <Divider />
        <CartModal/>
        </Drawer>
         <Box sx={{display:'flex',justifyContent:'center',pb:{xs:5,lg:1},mx:2}}>
         <InfoIcon sx={{mt:0,pr:1.5,fontSize:'18px',color:'#4b4f4f'}}/>
         <Typography variant='body2' sx={{direction:'rtl',pl:5,pr:1,color:'#333637'}}> درخواست مرجوع کردن کالا در گروه یخچال و فریزر با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد 
          (در صورت پلمپ بودن، کالا نباید باز شده باشد).</Typography>
          </Box>
          <Box sx={{m:2, display:'flex',justifyContent:'center'}}>
        <Tooltip color='warning'  title="اضافه به علاقمندی">
      <IconButton sx={{pl:2,color:'black' }}>
        <FavoriteBorderIcon sx={{fontSize:"32px"}} />
      </IconButton>
    </Tooltip>
    <Tooltip title=" به اشتراک گذاری کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <ShareIcon  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" اطلاع رسانی شگفت انگیز ">
      <IconButton  sx={{pl:2,color:'black' }}>
         <NotificationsActiveOutlinedIcon  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" نمودار قیمت">
      <IconButton  sx={{pl:2,color:'black' }}>
         <TimelineOutlinedIcon  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
        
    <Tooltip title=" مقایسه کالا ">
      <IconButton  sx={{pl:2,color:'black' }}>
        <AutoAwesomeMotionOutlinedIcon  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
    <Tooltip title=" افزودن به لیست ">
      <IconButton  sx={{pl:2,color:'black' }}>
   <TocOutlinedIcon  sx={{fontSize:"32px"}}/>
         </IconButton>
    </Tooltip>
         
          </Box>
           </Box>
         )}
     </Box>
       
             
     <Box   sx={{mt:{xs:5,lg:1}, mx:{xs:1,lg:3},display:'flex',flexDirection:{xs:"column",lg:"row"},justifyContent:'start',alignSelf:{xs:"center",lg:"start"},direction:'rtl'}} >
       <Box  sx={{mx:{xs:0,lg:2},mt:{xs:2,lg:4},pt:{lg:1},display:'flex',alignItems:'center',justifyContent:'center'}} >

          <Box 
           sx={{
            display:"flex",
            borderRadius:5,
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
            height:{xs:"600px",lg:"400px"},
            width:{xs:"650px",lg:"350px"},
           my:{xs:0},
    
            }}
          >
            </Box>  

      
        </Box>
      {cartItems.map(i=>
       < Box   sx={{pt:{lg:5},mx:0,display:'flex',flexDirection:{xs:"row",lg:"column"},justifyContent:'center'}} >
       <Link onClick={()=>setImage(i.img)}>
        <Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${i.img})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:{xs:"110px",lg:"90px"},
        width:{xs:"110px",lg:"90px"},
       my:{xs:2,lg:1},p:0
       ,alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
        <Link onClick={()=>setImage(i.imga1)}>
        <Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${i.imga1})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:{xs:"110px",lg:"90px"},
        width:{xs:"110px",lg:"90px"},
       my:{xs:2,lg:1},p:0
       ,alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
        <Link onClick={()=>setImage(i.imga2)}>
        <Box  
       sx={{
        display:"flex",
        borderRadius:5,
        backgroundImage:`url(${i.imga2})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height:{xs:"110px",lg:"90px"},
        width:{xs:"110px",lg:"90px"},
       my:{xs:2,lg:1},p:0
       ,alignItems:'center',justifyContent:'center',mx:1}}> 
        </Box>
        </Link>
        <Box className="allproduct"
      sx={{ height:{xs:"110px",lg:"90px"},
      width:{xs:"110px",lg:"90px"}, display:"flex",
      borderRadius:5, my:{xs:2,lg:1},p:0,mx:1    
    }}>
         <Button  onClick={() => {
            setLayout('center');
          }} sx={{color:'black',mt:{xs:2,md:2}}}><Typography variant='h6' sx={{textAlign:'center',fontWeight:'800'}}>...</Typography></Button>





<Modal   open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog layout={layout} sx={{display:"flex",flexWrap:"wrap",overflow:"auto"}}>
          <ModalClose  sx={{color:"red"}} />
          {cartItems.map(i=><Typography variant='body1' sx={{mt:4,direction:'rtl'}}>{i.title1} </Typography>
          
          )}
        {cartItems.map(i=><Typography variant='h5' sx={{color:'black',mt:2,mb:4,direction:'rtl'}}>مدل: {i.title2} </Typography>)}
          <Box  sx={{width:'100%',height:'100 vh',direction:{xs:'rtl',md:'ltr'}, display:'flex',flexDirection:{xs:"column",lg:"row"},justifyContent:'center',bgcolor:'#fff'}}>
        <Grid sx={{mx:{xs:2,md:2},mt:{xs:2,lg:1},display:'flex',justifyContent:'center'}} >
             {cartItems.map(i=> 
        <img  src={image} width={'100%'} alt=''  /> 
        )}
        </Grid>
     
       < Grid
        container
        spacing={0}
       
    
      >
       <Grid  xs={4} md={4} sx={{alignItems:'center',display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'} height={'100 vh'} alt=''/></Link>)} </ Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'}  height={'100 vh'} alt=''/></Link>)}</Grid> 
       <Grid  xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'}  height={'100 vh'} alt=''/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'}  height={'100 vh'} alt=''/></Link>)} </ Grid> 
      <Grid  xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.img)}><img  src={i.img} width={'100%'}  height={'100 vh'} alt=''/></Link>)} </Grid>
       <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}> {cartItems.map(i=><Link onClick={()=>setImage(i.imga1)}><img src={i.imga1} width={'100%'} height={'100 vh'} alt=''/></Link>)} </Grid> 
      <Grid xs={4} md={4} sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga2)}><img src={i.imga2}  width={'100%'}  height={'100 vh'} alt=''/></Link>)} </ Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'} height={'100 vh'} alt=''/></Link>)}</Grid> 
       <Grid xs={4} md={4}  sx={{alignItems:'center',p:0,display:'flex',justifyContent:'center',m:0}}>{cartItems.map(i=><Link onClick={()=>setImage(i.imga3)}><img src={i.imga3}  width={'100%'} height={'100 vh'} alt=''/></Link>)}</Grid> 
       </Grid>
        </Box>
        
         
        </ModalDialog>
      </Modal>

      </Box>
      
       
        </Box>
       
      )}
        </Box> 
       
       
     
</Box>
<Box container sx={{display:'flex',flexDirection:'column',bgcolor:'white',mx:5,mt:0,mb:5,borderRadius:'10px',direction:'rtl'}}>
<Grid container
           justifyContent={'start'}
        
       rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
       margin={0}
       sx={{display:'flex',flexDirection:'column'}}
       >
       
      <Accordion sx={{mr:2,ml:6,mt:2}}
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
          
        }}
      >
         <AccordionSummary   sx={{color:"#585858",fontSize:{xs:"18px",md:'20px'}}}   expandIcon={<AddIcon sx={{fontSize:{xs:"18px",md:"20px"}}} />}> مشخصات اصلی</AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5}}}>
          <Box  sx={{display:'flex'}}>
          <Grid xs={12} md={4} >
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
          </List>
            )}
        </Grid>
        <Grid xs={12} md={4} >
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
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600',}}>ظرفیت : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fcap}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>یخ ساز : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fice}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}> ارتفاع : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fh } </Typography>
            </ListItem>
          </List>
            )}
        </Grid>
        <Grid xs={12} md={4} >
    
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
           
              <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>تعداد قفسه : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fshelf}</Typography>
            
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>عرض : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fw}   </Typography>
            </ListItem>
            <ListItem role="none">
            <Typography sx={{fontSize:{xs:'14px',md:'18px'},fontWeight:'600'}}>  قابلیت wifi : </Typography>
              <Typography sx={{pr:1,fontSize:{xs:'14px',md:'16px'}}}>{i.Fwifi}   </Typography>
            </ListItem>
          </List>
            )}
        </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{mr:2,ml:6}}
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
         <AccordionSummary   sx={{color:"#585858",fontSize:{xs:"18px",md:'20px'}}}   expandIcon={<AddIcon sx={{fontSize:{xs:"18px",md:"20px"}}} />}>ویژگی ها و امکانات</AccordionSummary>
        <AccordionDetails sx={{ml:{xs:5}}}> 
        {cartItems.map(i=>
      <Box  sx={{ml:{xs:3},display:'flex',flexWrap:'wrap',justifyContent:'center'}}>  
      {i.Prop.map(j=>
         <Grid xs={6} md={3} sx={{display:"flex",justifyContent:"center",alignSelf:"center",px:1}}>  
         <List
            aria-label="Products"
            variant="outlined"
            orientation='vertical'
            sx={{mt: 2,mb:0,border:'none',alignItems:'start',height:"500px",boxShadow:" 5px 5px 40px #dcdcdc "
            }} 
          >
            <ListItem role="none" >
            <Box
             sx={{
              display:'flex',
              justifyContent:'center',
             backgroundImage: `url(${j.Fimg})`,
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:{xs:'150px',lg:"250px"},
             height:{xs:"150px",lg:"250px"}
             }}
          >
          </Box>
            </ListItem>
           <ListItem role="none">
           <Typography sx={{mt:0,fontSize:{xs:'16px',md:'20px'},fontWeight:'600'}}>{j.Ftitle1} </Typography>
           </ListItem>
           <ListItem role="none">
             <Typography sx={{fontSize:{xs:'12px',md:'16px'}}}> {j.Ftitle2}  </Typography>
           </ListItem>
         </List>
       </Grid>
      )}
         </Box>  )}

        </AccordionDetails>
      </Accordion>
      <Accordion  sx={{mr:2,ml:6,mb:2}}
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
          <AccordionSummary   sx={{color:"#585858",fontSize:{xs:"18px",md:'20px'}}}   expandIcon={<AddIcon sx={{fontSize:{xs:"18px",md:"20px"}}} />}> مشخصات بیشتر</AccordionSummary>
        <AccordionDetails>
        <Grid  >
        
        </Grid>
        </AccordionDetails>
      </Accordion>
   
        </Grid>
</Box>
<Box sx={{display:'flex',bgcolor:'white',mx:5,mt:0,mb:5,flexDirection:{xs:"column",lg:"row"},mt:{xs:3,lg:1},borderRadius:'10px',direction:'rtl'}}>
<Box  sx={{width:"100%",display:"flex",justifyContent:"start",flexDirection:"column",mt:{xs:3,lg:1},pb:{lg:3}}}>
{cartItems.map(i=>
    <Box container sx={{whiteSpace:"wrap",width:"90%",display:'flex',flexDirection:"row",alignSelf:"center",bgcolor:'white',px:3,py:0,mx:{xs:1,md:5},mb:2,mt:{xs:2,md:2},borderRadius:'10px',direction:'rtl'}}>
     <MessageOutlinedIcon sx={{pr:2,pt:3,color:"#E0AA3E",fontSize:"34px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#3d3d3d",fontSize:"18px",fontWeight:'bold'}}> نظرات کاربران<Typography variant='body2' sx={{pt:0.4,color:"#674e06"}}> {i.title1} </Typography>
       </Typography>
    </Box>)}
    <Box  sx={{whiteSpace:"wrap",display:'flex',flexDirection:"column",bgcolor:'white',p:3,mx:{xs:1,md:5},mb:2,mt:{xs:2,md:2},border:"1px dashed #d0d0d0",borderRadius:'10px',direction:'rtl'}}>
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
    <Button ref={buttoncommentref} onClick={addcomments}  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"22px",
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mx:25, my:3,py:0.5,px:0}}> مشاهده ی دیدگاه کاربران </Button>
       <Box  ref={boxnotcomments} sx={{display:"none"}}> <Typography variant='h6' sx={{color:"#585858",textAlign:"center",mx:5}}> دیدگاهی برای این محصول ثبت نشده است</Typography> 
       </Box>
     <Box ref={boxcommentref} sx={{ display:"none"}}>
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
       
   </Box>
<Button ref={displycomments} onClick={displycomment}sx={{display:"none"}} ><Typography variant='body1' sx={{color:"#E0AA3E"}}>  ادامه ی نظرات...</Typography></Button>
    </Box>
   
    <Box   sx={{width:"100%",display:"flex",justifyContent:"start",flexDirection:"column",mt:{xs:3,lg:1},pb:3,
    bgcolor:'white',direction:'rtl'}}
    
    >   
    {cartItems.map(i=>
    <Box container sx={{mx:3,py:3,display:'flex',flexDirection:"column",bgcolor:'white',direction:'rtl'}}>
      <Typography  sx={{pl:0.6,py:0,color:"#3d3d3d",fontSize:"18px"}}> اولین نفری باشید که دیدگاهی را ارسال می کنید برای : 
       </Typography>
       <Typography variant='body2' sx={{pt:0.4,color:"#674e06"}}>  {i.title1} </Typography>
       <Box className='linetinck'></Box>
    </Box>
    )}
         <form  noValidate onSubmit={handlesubmit}>
          <Box sx={{mt:1,mx:3}}>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"18px"}}>نام <AcUnitIcon  sx={{fontSize:"8px",color:"#615d5d"}}/></FormLabel>
              <Input
              sx={{fontSize:"24px"}}
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
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"18px"}}> آدرس ایمیل <AcUnitIcon  sx={{fontSize:"8px",color:"#615d5d"}}/></FormLabel>
              <Input
              sx={{fontSize:"24px"}}
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
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"18px"}}><HiveIcon sx={{fontSize:"12px",color:"green"}}/>نقاط قوت   </FormLabel>
              <Input
              sx={{fontSize:"24px"}}
                color="warning"
            type='text'
                variant="outlined"
                required
               
                defaultValue={null}
                value={advantage}
                onChange={(e)=> setAdvantage(e.target.value)}
              />
              <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               
               {error.advantage}
             </Typography>
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"18px"}}><HiveIcon sx={{fontSize:"12px",color:"red"}}/> نقاط ضعف  </FormLabel>
              <Input
               sx={{fontSize:"24px"}}
               color="warning"
            type='text'
                variant="outlined"
                required
                defaultValue={null}
                value={disadvantages}
                onChange={(e)=> setDisadvantages(e.target.value)}
              />
               <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.disadvantages}
            
             </Typography>
                <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"18px"}}> امتیاز شما</FormLabel>
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
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"18px"}}> دیدگاه شما <AcUnitIcon  sx={{fontSize:"8px",color:"#615d5d"}}/>  </FormLabel>
            <Textarea
          
             color="warning"
                 variant="outlined"
                 required
              
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"100%",height:"200px",fontSize:"24px"}}
             ></Textarea>

               <Typography variant='body1' sx={{color:"#f54141",mt:1}}>
               {error.comment}
              
             </Typography>
           
            

          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"22px",
           borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mt:2,py:0.3,px:6}}
            type="submit"
            
          >
           ثبت
          </Button>
          </Box>
        </form>
        </Box> 


</Box>
   <SlideSimilarRef/>     
</Box>
    <Footer/>
    </>
  );
}







  

   
