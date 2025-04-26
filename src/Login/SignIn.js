import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import Grid from "@mui/material/Grid";
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import logimage from "../img/loge2.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const SignIn = () => {
  const [isLoading,setIsLoading]=useState(true);
  const [id,setId]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState({});
  const navigate=useNavigate();
  const isvalidate = ()=>{
    let isvalid =true;
    let errmesage={};
    if(id === null || id === ""){  
      isvalid = false;
errmesage.id="لطفا نام کاربری را وارد کنید";
    }
    
    if(password === null || password === ""){
      
      isvalid = false;
errmesage.password="لطفا رمز را وارد کنید";
    }else
    if(password.length<6){
      isvalid = false;
      errmesage.password="رمز باید حداقل ۶ کاراکتر باشد";

    }
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }

  const handlesubmit=(e)=>{
e.preventDefault();
if(isvalidate()){
fetch("https://serverjson-project.onrender.com/users/"+id).then((res)=>{
  return res.json();
}).then((resp)=>{
  if(Object.keys(resp).length===0){
    toast.error("لطفا نام کاربری  را صحیح وارد کنید");
  }
  else{
    if(resp.password === password){
      toast.success("ورود با موفقیت");
      sessionStorage.setItem("id",id);
    navigate("/")
    }
    else{
      toast.error("  لطفا ابتدا عضو شوید ");
    }
  }
  setIsLoading(false);
}).catch((err)=>{
toast.error("ورود ناموفق");
setIsLoading(false);
});
  }
}
const loading=()=>{
  isLoading ? 
  <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open
>
<CircularProgress color="inherit" />
</Backdrop>
:
navigate("/")
}

  return (
    <>
       <PageTitle  title=' ورود به حساب کاربری   '  description=' ورود /  ورود در سهیل  '/>
   <TopNav/> {/*<CssBaseline />*/}
      <div>
     <ToastContainer/>  
    </div>
    <div className='w-full h-auto flex justify-start flex-col md:flex-row  bg-cover bg-center bg-no-repeat '
    style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDOnBx2I4GMh9q1Z37yKX3mF9YEdMC9i2GQ&s")`}}
     >
 
      <div className='w-[85%] md:w-[70%] mx-auto md:mx-5 flex justify-center flex-col self-center md:self-start  mt-5  h-auto md:h-[450px] mb-5
      border-2 border-white backdrop-blur-sm  p-3'>
  <p className='text-lg font-bold text-white text-center mt-1  '>
       ورود به حساب کاربری
        </p>
       
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
            <Grid  item xs={12}   >
            <FormLabel sx={{fontSize:"15px",fontWeight:400,mb:1,color:"#fff"}}>نام کاربری یا ایمیل</FormLabel>
              <Input
            color="warning"
            placeholder=' نام کاربری'
                autoComplete="id"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="id"
                label=" نام کاربری"
                autoFocus
                value={id}
                onChange={(e)=> setId(e.target.value)}
               className='input'
               sx={{fontSize:"18px"}}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.fname}
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormLabel sx={{fontSize:"15px",fontWeight:400,mb:1,color:"#fff"}}> رمز  </FormLabel>
              <Input
                color="warning"
              placeholder="رمز"
                variant="outlined"
                required
                fullWidth
                defaultValue={""}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                sx={{fontSize:"18px"}}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.password}
             </Typography>
            </Grid>
            <Grid item xs={12} sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <FormControlLabel
             
             control={<Checkbox color="info" value="allowExtraEmails" sx={{color:"#E0AA3E"}} />}
             label="مرا بخاطر بسپار"
             sx={{color:"#eee",fontSize:"36px"}}
           />
              <NavLink className="nav">یاد آوری رمز عبور</NavLink>
            </Grid>
       
  </Grid>
 

          
  <div className='flex justify-around flex-row h-[35px] bg-transparent self-center mx-auto my-5 '>
          <button 
    onClick={loading}
           className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
       rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-1 mx-2 px-10 pb-1 text-white text-md font-sans
        hover:bg-gradient-to-r hover:from-gray-500
       hover:via-yellow-500 hover:to-gray-500'
           fullWidth
          >
           ورود
          </button>

          <NavLink to={"/signup"}>
          <button
    className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
    rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-1 mx-2 px-10 pb-1 text-white text-md font-sans
     hover:bg-gradient-to-r hover:from-gray-500
    hover:via-yellow-500 hover:to-gray-500'
           
          fullWidth
          >
           عضویت
          </button></NavLink>
          </div>
          
        
         </form>
      </div>
   

      <div className='w-[90%] flex justify-center self-center mx-auto -mt-3 bg-transparent h-[400px] ' 
   > 
   <Box 
   
   sx={{alignSelf:"start",
    justifyContent:"start",
       display:"flex",
       borderRadius:1,
       backgroundImage:{xs:`url(${logimage})`,md:`url(${logimage})`},
       backgroundPosition: "center",
       backgroundSize:"contained",
       backgroundRepeat: 'no-repeat',
       width:"90%",
       height:'90%',
       mt:2,
     
      }}>
        </Box>
    </div>

   </div>
    <Footer/>
    </>
  );
};

export default SignIn;
