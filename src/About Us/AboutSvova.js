import React from 'react';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import Bannerus from './Bannerus';
import Sheetus1 from './Sheetus1';
import Sheetus2 from './Sheetus2';
import './Bannerus.css';
function AboutSnova() {
  return (
    <>
    <PageTitle title='سهیل / چرا سهیل   ' description=' سهیل '/>
    <TopNav />
    <Box >
      <Bannerus/> 
    </Box>
      <Box  >
<Sheetus1/>
    </Box>
    <Box  className='sheetus2' sx={{width:'100%',height:'auto'}}>
        <Sheetus2/>
            </Box>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}
export default AboutSnova;
