import React from 'react';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import Style1 from './Style1';
function LifeStyle() {
  return (
    <>
    <PageTitle title='سهیل / سبک زندگی    ' description=' سهیل '/>
               <TopNav />
    <Box sx={{width:'100%' ,height:'100 vh', bgcolor:"#ececec",py:3}}>
      <Style1  itemsPerPage={5} />
                                     </Box>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default LifeStyle;
