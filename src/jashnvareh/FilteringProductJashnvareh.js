import React, {useContext,useState} from 'react';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionSummary from '@mui/material/AccordionSummary';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
export default  function FilteringProductJashnvareh() {
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const [checked1, setChecked1] = useState(false); 
  const [checked2, setChecked2] = useState(false); 
  const [checkedB1, setCheckedB1] = useState(false); 
  const [checkedB2, setCheckedB2] = useState(false);
  const [checkedB3, setCheckedB3] = useState(false);
  const [checkedB4, setCheckedB4] = useState(false);
  const [checkedC1, setCheckedC1] = useState(false);
  const [checkedC2, setCheckedC2] = useState(false);
  const [checkedC3, setCheckedC3] = useState(false);
  const [checkedE1, setCheckedE1] = useState(false);
  const [checkedE2, setCheckedE2] = useState(false);
  const [disabledE1,setDisabledE1]=useState(false);
  const [disabledE2,setDisabledE2]=useState(false);
  const [index1,setIndex1] = React.useState(0);
  const [index, setIndex] = React.useState(0);
  
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

  const sortArrayMaxtoMin= (e)=>{
    setChecked1(e.target.checked);
    setChecked1(!checked1);
  setDatashow([...data.sort((a, b) =>
    convertToEnglish(b.pricenum) - convertToEnglish(a.pricenum)
  )]);
 
  }

  
  const sortArrayMintoMax= (e)=>{
    setChecked2(e.target.checked);
    setChecked2(!checked2);
    setDatashow([...data.sort((a, b) =>
      convertToEnglish(a.pricenum) - convertToEnglish(b.pricenum)
    )]);
    }

    const handleChangeB1 = (e) => {
   
      setCheckedB1(e.target.checked); 
       setCheckedB1(!checkedB1);
      setDatashow([...data.filter(i=>i.brands === e.target.value )]);
      if(checkedB2){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB3){
        setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB4){
        setDatashow([...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB2 && checkedB3){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB2 && checkedB4){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB3 && checkedB4){
        setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB2 && checkedB3 && checkedB4){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB1){
        if(checkedB4 && checkedB3 && checkedB2){
          setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
          }
        if(!checkedB4 && checkedB3 && checkedB2){
            setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "bush" )]);
            }
        if(checkedB4 && checkedB3 && !checkedB2){
              setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" )]);
              }
        if(checkedB4 && !checkedB3 && checkedB2){
                setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" )]);
                }
        if(!checkedB4 && !checkedB3 && !checkedB2)  {
                  setDatashow([...data]);
                }
        if(!checkedB4 && !checkedB3 && checkedB2){
                  setDatashow([...data.filter(i=>i.brands === "bush" )]);
                  }
        if(!checkedB4 && checkedB3 && !checkedB2){
                    setDatashow([...data.filter(i=>i.brands === "LG" )]);
                    }
        if(checkedB4 && !checkedB3 && !checkedB2){
                      setDatashow([...data.filter(i=>i.brands === "samsung" )]);
                      }
        }
  

    };
  const handleChangeB2 = (e) => {
  setCheckedB2(e.target.checked);
   setCheckedB2(!checkedB2);
    setDatashow([...data.filter(i=>i.brands === e.target.value)]);
  if(checkedB1){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB3){
    setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB4){
    setDatashow([...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB1 && checkedB3){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB1 && checkedB4){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB3 && checkedB4){
    setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB1 && checkedB3 && checkedB4){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
 
  if(checkedB2){
    if(checkedB4 && checkedB1 && checkedB3){
      setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
      }
      if(!checkedB4 && checkedB1 && checkedB3){
        setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" )]);
        }
        if(checkedB4 && checkedB1 && !checkedB3){
          setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" )]);
          }
          if(checkedB4 && !checkedB1 && checkedB3){
            setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" )]);
            }
            if(!checkedB4 && !checkedB3 && !checkedB1)  {
              setDatashow([...data]);
            }
    if(!checkedB4 && !checkedB3 && checkedB1){
              setDatashow([...data.filter(i=>i.brands === "Whirlpool" )]);
              }
    if(!checkedB4 && checkedB3 && !checkedB1){
                setDatashow([...data.filter(i=>i.brands === "LG" )]);
                }
    if(checkedB4 && !checkedB3 && !checkedB1){
                  setDatashow([...data.filter(i=>i.brands === "samsung" )]);
                  }
    }
    };
 

  
  const handleChangeB3 = (e) => {
    setCheckedB3(e.target.checked);
    setCheckedB3(!checkedB3);
    setDatashow([...data.filter(i=>i.brands === e.target.value )]);
    if(checkedB2){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB4){
      setDatashow([...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB4){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB2 && checkedB4){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB2 && checkedB4){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB3){
if(checkedB4 && checkedB1 && checkedB2){
  setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
  }
  if(!checkedB4 && checkedB1 && checkedB2){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" )]);
    }
    if(checkedB4 && checkedB1 && !checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" )]);
      }
      if(checkedB4 && !checkedB1 && checkedB2){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" )]);
        }
        if(!checkedB4 && !checkedB2 && !checkedB1)  {
          setDatashow([...data]);
        }
if(!checkedB4 && !checkedB2 && checkedB1){
          setDatashow([...data.filter(i=>i.brands === "Whirlpool" )]);
          }
if(!checkedB4 && checkedB2 && !checkedB1){
            setDatashow([...data.filter(i=>i.brands === "bush" )]);
            }
if(checkedB4 && !checkedB2 && !checkedB1){
              setDatashow([...data.filter(i=>i.brands === "samsung" )]);
              }
}


  };
  const handleChangeB4 = (e) => {
    setCheckedB4(e.target.checked);
    setCheckedB4(!checkedB4);
    setDatashow([...data.filter(i=>i.brands === e.target.value )]);
    if(checkedB1){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB2){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB3){
      setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB3){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB2 && checkedB3){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB3 && checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }

    if(checkedB4){
      if(checkedB3 && checkedB1 && checkedB2){
        setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
        }
        if(!checkedB3 && checkedB1 && checkedB2){
          setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" )]);
          }
          if(checkedB3 && checkedB1 && !checkedB2){
            setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" )]);
            }
            if(checkedB3 && !checkedB1 && checkedB2){
              setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" )]);
              }
              if(!checkedB2 && !checkedB3 && !checkedB1)  {
                setDatashow([...data]);
              }
      if(!checkedB2 && !checkedB3 && checkedB1){
                setDatashow([...data.filter(i=>i.brands === "Whirlpool" )]);
                }
      if(!checkedB2 && checkedB3 && !checkedB1){
                  setDatashow([...data.filter(i=>i.brands === "LG" )]);
                  }
      if(checkedB2 && !checkedB3 && !checkedB1){
                    setDatashow([...data.filter(i=>i.brands === "bush" )]);
                    }
      }

  };
 const handleChangeC1=(e)=>{
  setCheckedC1(e.target.checked); 
       setCheckedC1(!checkedC1);
      setDatashow([...data.filter(i=>i.color === e.target.value )]);
      if(checkedC2){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC3){
        setDatashow([...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC2 && checkedC3){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC1){
        if(checkedC3 && checkedC2){
          setDatashow([...data.filter(i=>i.color !== e.target.value )]);
          }
        if(checkedC3 && !checkedC2){
              setDatashow([...data.filter(i=>i.color === "مشکی" )]);
              }
        if( !checkedC3 && checkedC2){
                setDatashow([...data.filter(i=>i.color === "نقره ای"  )]);
                }
        if( !checkedC3 && !checkedC2)  {
                  setDatashow([...data]);
                }
        }
    
}
const handleChangeC2=(e)=>{
  setCheckedC2(e.target.checked); 
       setCheckedC2(!checkedC2);
      setDatashow([...data.filter(i=>i.color === e.target.value )]);
      if(checkedC1){
        setDatashow([...data.filter(i=>i.color === " سفید" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC3){
        setDatashow([...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC1 && checkedC3){
        setDatashow([...data.filter(i=>i.color === "سفید" ),...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC2){
        if(checkedC3 && checkedC1){
          setDatashow([...data.filter(i=>i.color !== e.target.value )]);
          }
        if(checkedC3 && !checkedC1){
              setDatashow([...data.filter(i=>i.color === "مشکی" )]);
              }
        if( !checkedC3 && checkedC1){
                setDatashow([...data.filter(i=>i.color === "سفید"  )]);
                }
        if( !checkedC3 && !checkedC1)  {
                  setDatashow([...data]);
                }
        }
      
}
const handleChangeC3=(e)=>{
  console.log(datashow);
  console.log(setData(data));
  setCheckedC3(e.target.checked); 
       setCheckedC3(!checkedC3);
      setDatashow([...data.filter(i=>i.color === e.target.value )]);
      if(checkedC2){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC1){
        setDatashow([...data.filter(i=>i.color === "سفید" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC2 && checkedC1){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === "سفید" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC3){
        if(checkedC1 && checkedC2){
          setDatashow([...data.filter(i=>i.color !== e.target.value )]);
          }
        if(checkedC1 && !checkedC2){
              setDatashow([...data.filter(i=>i.color === "سفید" )]);
              }
        if( !checkedC1 && checkedC2){
                setDatashow([...data.filter(i=>i.color === "نقره ای"  )]);
                }
        if( !checkedC1 && !checkedC2)  {
                  setDatashow([...data]);
                }
        }
      
}

const handleChangeE1=(e)=>{
  setCheckedE1(e.target.checked); 
  setCheckedE1(!checkedE1);
  if(e.target.value === "دارد")
  {
    setDatashow([...data.filter(i=>i.Fstar === "دارد" )]);
    setDisabledE2(!disabledE2);
  }
  if(checkedE1){
    setDatashow([...data]);
    setDisabledE2(!disabledE2);
  }
  }
  const handleChangeE2=(e)=>{
    setCheckedE2(e.target.checked); 
    setCheckedE2(!checkedE2);
    if(e.target.value === "ندارد")
    {
      setDatashow([...data.filter(i=>i.Fstar === "ندارد" )]);
      setDisabledE1(!disabledE1);
    }
    if(checkedE2){
      setDatashow([...data]);
      setDisabledE1(!disabledE1);
    }
    } 
   return (
    <>
    <div className='hidden md:flex flex-col justify-start w-[400px]  mt-4 '>
        <div dir='rtl' className='flex justify-start md:rounded-sm border-b-2 border-gray-600 md:border-none mr-2 mt-0.3
        h-[50px]
        bg-gradient-to-r from-gray-500 via-yellow-500 to-gray-500 text-white'
    >
    <p dir='rtl' className='px-2.5 py-2 text-xl font-bold ' >  نوع نمایش 
    </p>
    </div> 
    <Accordion
            expanded={index === 0}
            onChange={(event, expanded) => {
              setIndex(expanded ? 0 : null);
            }}
            sx={{borderBottom:'1px solid black',mr:1}}
          >
            <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}> قیمت </AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"گرانترین به ارزانترین"}  onChange={sortArrayMaxtoMin} />}  label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>گرانترین به ارزانترین</Typography>} />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین به گرانترین"}  onChange={sortArrayMintoMax} />}  label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>ارزانترین به گرانترین</Typography>} />

</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:"0.5em",borderRadius:"0.5em"}}
      >
    <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}>رنگ بدنه</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel  control={<Checkbox  checked={checkedC1}   onChange={handleChangeC1} value={"سفید"}  />}  label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>سفید</Typography>} />
<FormControlLabel  control={<Checkbox  checked={checkedC2}   onChange={handleChangeC2} value={"نقره ای"}/>} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>نقره ای</Typography>} />
<FormControlLabel   control={<Checkbox  checked={checkedC3}   onChange={handleChangeC3} value={"مشکی"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>مشکی</Typography>}  />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:"0.5em",borderRadius:"0.5em"}}
      >
           <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}>  برند</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel control={<Checkbox  checked={checkedB1}   onChange={handleChangeB1} value={"Whirlpool"} />}label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>Whirlpool</Typography>}  />
<FormControlLabel  control={<Checkbox checked={checkedB2}   onChange={handleChangeB2} value={"bosch"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>bosch</Typography>} />          
<FormControlLabel control={<Checkbox  checked={checkedB3}   onChange={handleChangeB3} value={"LG"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>LG</Typography>} />
<FormControlLabel  control={<Checkbox checked={checkedB4}   onChange={handleChangeB4} value={"samsung"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>samsung</Typography>} />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 3}
        onChange={(event, expanded) => {
          setIndex(expanded ? 3 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:"0.5em",borderRadius:"0.5em"}}
      >
            <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}> رتبه ی انرژی </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
   <FormControlLabel  control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>دارد</Typography>}  />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>ندارد</Typography>}  />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      </div>
      <div className='flex flex-col justify-start md:hidden w-[95%] self-center'>
<Accordion
        expanded={index1 === 0}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 0 : null);
        }}
        className=' mr-2 mt-0 
    bg-gradient-to-r from-gray-500 via-yellow-500 to-gray-500 text-white '
        
      >
        <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"#eeeeee"},mb:0,color:"#eeeeee",fontSize:"28px"}} />}> 
          <div className='flex flex-row justify-start'>
            <div  >
        <IconButton sx={{pt:0}}>
  
      <FilterAltOutlinedIcon sx={{color:"#eeeeee",fontSize:"32px"}}/>
    </IconButton>
    </div>
        <div >
      <p className='text-xl font-bold text-white' >
   فیلتر بر اساس
</p>
</div>
        </div>
          </AccordionSummary>
        <AccordionDetails className='-mt-9' >
        <FormGroup>
<Accordion
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
      
        <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}> قیمت </AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel  control={<Checkbox checked={checked1} value={"گرانترین به ارزانترین"}  onChange={sortArrayMaxtoMin} />}  label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>گرانترین به ارزانترین</Typography>}  />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین به گرانترین"}  onChange={sortArrayMintoMax} />}  label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>ارزانترین به گرانترین</Typography>} />

</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
               <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}>رنگ بدنه</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel  control={<Checkbox  checked={checkedC1}   onChange={handleChangeC1} value={"سفید"}  />}  label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>سفید</Typography>} />
<FormControlLabel  control={<Checkbox  checked={checkedC2}   onChange={handleChangeC2} value={"نقره ای"}/>} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>نقره ای</Typography>} />
<FormControlLabel   control={<Checkbox  checked={checkedC3}   onChange={handleChangeC3} value={"مشکی"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>مشکی</Typography>}  />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}>  برند</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel control={<Checkbox  checked={checkedB1}   onChange={handleChangeB1} value={"Whirlpool"} />}label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>Whirlpool</Typography>}  />
<FormControlLabel  control={<Checkbox checked={checkedB2}   onChange={handleChangeB2} value={"bosch"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>bosch</Typography>} />          
<FormControlLabel control={<Checkbox  checked={checkedB3}   onChange={handleChangeB3} value={"LG"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>LG</Typography>} />
<FormControlLabel  control={<Checkbox checked={checkedB4}   onChange={handleChangeB4} value={"samsung"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>samsung</Typography>} />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 3}
        onChange={(event, expanded) => {
          setIndex(expanded ? 3 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
          <AccordionSummary  sx={{fontSize:'1.5em',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<AddIcon sx={{fontSize:'1em',ml:1}} />}> رتبه ی انرژی </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>دارد</Typography>}  />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label={<Typography sx={{fontSize:"1.6em",color:"#515151"}}>ندارد</Typography>}  />
</FormGroup>
</AccordionDetails>
</Accordion>
</FormGroup>
</AccordionDetails>
</Accordion>
</div>
</>

   )}
 
