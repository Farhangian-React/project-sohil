import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import logimage from "../img/log2.png";
import logimage1 from "../img/log11.png";

export default function SignUp() {
  const [id,setId]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState({});
    const navigate=useNavigate();
    const isvalidate = ()=>{
      let isvalid =true;
      let errmesage={};
      if(fname === null || fname === ""){  
        isvalid = false;
errmesage.fname="لطفا نام را وارد کنید";
      }
      if(lname === null || lname === ""){
        
        isvalid = false;
errmesage.lname="لطفا نام خانوادگی را وارد کنید";
      }
      if(email === null || email === ""){
        
        isvalid = false;
errmesage.email="لطفا آدرس ایمیل را وارد کنید";
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
//console.log(result);
fetch("https://serverjson-project.onrender.com/users",{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({id:id,fname:fname,lname:lname,email:email,password:password})


}).then((res)=>{
    toast.success("عضویت با موفقیت صورت گرفت");
    navigate("/signin");   
  
}).catch((err)=>{
    toast.error("");
})
    }
  }


  return (
    <>
   <PageTitle  title=' عضویت در سهیل '  description=' عضویت /  عضویت در سهیل  '/>
   <TopNav/>
   <CssBaseline />
      <div>
     <ToastContainer/>  
    </div>
    <div className='w-full h-auto flex justify-start flex-col md:flex-row  bg-cover bg-center bg-no-repeat '
    style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDOnBx2I4GMh9q1Z37yKX3mF9YEdMC9i2GQ&s")`}}
     >
 
      <div className='container flex justify-center flex-col self-center md:self-start mx-3 mt-3 h-auto
      border-2 border-white backdrop-blur-sm  p-3'>
        <p className='text-lg font-bold text-white text-center mt-1  '>
       عضویت در سایت سهیل
        </p>
        <div className=' flex flex-row justify-between border-b-2 border-white h-[50px]' >
        <p className='text-sm text-center text-white p-2'>
     قبلا عضو شده اید؟
        </p>
        <NavLink to={"/signin"}><button 
       className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
       rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-1 mx-2 px-4 pb-1 text-white text-md font-sans
        hover:bg-gradient-to-r hover:from-gray-500
       hover:via-yellow-500 hover:to-gray-500'
        >ورود</button></NavLink>
        </div>
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
         
            <Grid  item xs={12} sm={6}  >
            <FormLabel sx={{fontSize:"12px",mb:1,color:"#cecece"}}>نام</FormLabel>
              <Input
            color="warning"
            placeholder='نام'
                autoComplete="fname"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="نام"
                autoFocus
                value={fname}
                onChange={(e)=> setFname(e.target.value)}
               className='input'
               sx={{fontSize:"14px"}}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.fname}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormLabel sx={{fontSize:"12px",mb:1,color:"#cecece"}}>نام خانوادگی</FormLabel>
              <Input
              color="warning"
              placeholder='نام خانوادگی'
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onChange={(e)=> setLname(e.target.value)}
                sx={{fontSize:"14px"}}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.lname}
             </Typography>
            </Grid>
            <Grid  item xs={12} sm={6}  >
            <FormLabel sx={{fontSize:"12px",mb:1,color:"#cecece"}}>نام کاربری</FormLabel>
              <Input
            color="warning"
            placeholder='نام کاربری'
                autoComplete="fname"
                name=" نام کاربری"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="نام "
                defaultValue={""}
                value={id}
                onChange={(e)=> setId(e.target.value)}
                sx={{fontSize:"14px"}}
              
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.fname}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormLabel sx={{fontSize:"12px",mb:1,color:"#cecece"}}> رمز  </FormLabel>
              <Input
              color="warning"
              placeholder="رمز" 
              autoComplete="current-password"
              name="password"
              variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                defaultValue={""}
                value={password}
                type="password"
                sx={{fontSize:"14px"}}
               
               
                onChange={(e)=> setPassword(e.target.value)}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.password}
             </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormLabel sx={{fontSize:"12px",mb:1,color:"#cecece"}}>آدرس ایمیل  </FormLabel>
              <Input
                color="warning"
              placeholder='آدرس ایمیل'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
              
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                sx={{fontSize:"14px"}}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.email}
             </Typography>
            </Grid>
           
            <Grid item xs={12} >
              <FormControlLabel
             
                control={<Checkbox color="info" value="allowExtraEmails" sx={{fontSize:"10px",color:"#E0AA3E"}} />}
                label="ثبت نام و استفاده از سهیل به معنی پذیرش قوانین و مقررات آن است."
                sx={{color:"#eee",fontSize:"10px",px:1}}
              />
            </Grid>
          </Grid>
          <button  type='submit'
          className=' bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
          rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-1 mx-40 self-center px-4 pb-1 text-white text-md font-sans
           hover:bg-gradient-to-r hover:from-gray-500
          hover:via-yellow-500 hover:to-gray-500'
          >
           عضویت
          </button>
        </form>
     
    </div>
    <Box sx={{width:"100%",display:"flex",justifyContent:"center",alignSelf:"start",mx:1,mt:1}}> 
   <Box sx={{alignSelf:"center",
       display:"flex",
       borderRadius:1,
       backgroundImage:{xs:`url(${logimage})`,lg:`url(${logimage1})`},
       backgroundPosition: 'center',
       backgroundSize:"contained",
       backgroundRepeat: 'no-repeat',
       width:"100%",
       height:{xs:"600px",lg:"600px"},
       mt:{xs:10,md:1},
     
      }}>
        </Box>
    </Box>
    </div>
    <Footer/>
    </>
  );
}
