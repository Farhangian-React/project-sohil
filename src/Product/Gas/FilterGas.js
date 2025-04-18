import React, {useContext,useState} from 'react';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
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

export default  function FilterGas() {

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
  const [checkedD1, setCheckedD1] = useState(false);
  const [checkedD2, setCheckedD2] = useState(false);
  const [checkedE1, setCheckedE1] = useState(false);
  const [checkedE2, setCheckedE2] = useState(false);
  const [checkedS1, setCheckedS1] = useState(false);
  const [checkedS2, setCheckedS2] = useState(false);
  const [checkedN1, setCheckedN1] = useState(false);
  const [checkedN2, setCheckedN2] = useState(false);
  const [checkedM1, setCheckedM1] = useState(false);
  const [checkedM2, setCheckedM2] = useState(false);
  const [checkedO1, setCheckedO1] = useState(false);
  const [checkedO2, setCheckedO2] = useState(false);
  const [checkedF1, setCheckedF1] = useState(false);
  const [checkedF2, setCheckedF2] = useState(false);
  const [checkedY1, setCheckedY1] = useState(false);
  const [checkedY2, setCheckedY2] = useState(false);
  const [checkedP1, setCheckedP1] = useState(false);
  const [checkedP2, setCheckedP2] = useState(false);
  const [checkedW1, setCheckedW1] = useState(false);
  const [checkedW2, setCheckedW2] = useState(false);
  const [checkedH1, setCheckedH1] = useState(false);
  const [checkedH2, setCheckedH2] = useState(false);
  const [checkedH3, setCheckedH3] = useState(false);
  const [disabledD1,setDisabledD1]=useState(false);
  const [disabledD2,setDisabledD2]=useState(false);
  const [disabledE1,setDisabledE1]=useState(false);
  const [disabledE2,setDisabledE2]=useState(false);
  const [disabledS1,setDisabledS1]=useState(false);
  const [disabledS2,setDisabledS2]=useState(false);
  const [disabledN1,setDisabledN1]=useState(false);
  const [disabledN2,setDisabledN2]=useState(false);
  const [disabledM1,setDisabledM1]=useState(false);
  const [disabledM2,setDisabledM2]=useState(false);
  const [disabledO1,setDisabledO1]=useState(false);
  const [disabledO2,setDisabledO2]=useState(false);
  const [disabledF1,setDisabledF1]=useState(false);
  const [disabledF2,setDisabledF2]=useState(false);
   const [disabledY1,setDisabledY1]=useState(false);
  const [disabledY2,setDisabledY2]=useState(false);
  const [disabledP1,setDisabledP1]=useState(false);
  const [disabledP2,setDisabledP2]=useState(false);
  const [disabledW1,setDisabledW1]=useState(false);
  const [disabledW2,setDisabledW2]=useState(false);
  const [disabledH1,setDisabledH1]=useState(false);
  const [disabledH2,setDisabledH2]=useState(false);
  const [disabledH3,setDisabledH3]=useState(false);
  const [index, setIndex] = React.useState(null);
  const [index1, setIndex1] = React.useState(null);
  
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
const handleChangeD1=(e)=>{
  setCheckedD1(e.target.checked); 
  setCheckedD1(!checkedD1);
  if(e.target.value === "۴ عدد")
  {
    setDatashow([...data.filter(i=>i.NumBurn === "۴ عدد" )]);

  setDisabledD2(!disabledD2);
  }
  if(checkedD1){
    setDatashow([...data]);
    setDisabledD2(!disabledD2);
  }
}
const handleChangeD2=(e)=>{
  setCheckedD2(e.target.checked); 
  setCheckedD2(!checkedD2);
  if(e.target.value === "۵ عدد")
  {
    setDatashow([...data.filter(i=>i.NumBurn === "۵ عدد" )]);
    setDisabledD1(!disabledD1);
  }
  if(checkedD2){
    setDatashow([...data]);
    setDisabledD1(!disabledD1);
  }
}
const handleChangeS1=(e)=>{
    setCheckedS1(e.target.checked); 
    setCheckedS1(!checkedS1);
    if(e.target.value === "دارد")
    {
      setDatashow([...data.filter(i=>i.ProofMode === "دارد" )]);
      setDisabledS2(!disabledS2);
    }
    if(checkedS1){
      setDatashow([...data]);
      setDisabledS2(!disabledS2);
    }
    }
    const handleChangeS2=(e)=>{
      setCheckedS2(e.target.checked); 
      setCheckedS2(!checkedS2);
      if(e.target.value === "ندارد")
      {
        setDatashow([...data.filter(i=>i.ProofMode === "ندارد" )]);
        setDisabledS1(!disabledS1);
      }
      if(checkedS2){
        setDatashow([...data]);
        setDisabledS1(!disabledS1);
      }
      }

      const handleChangeN1=(e)=>{
        setCheckedN1(e.target.checked); 
        setCheckedN1(!checkedN1);
        if(e.target.value === "دارد")
        {
          setDatashow([...data.filter(i=>i.StorageDrawer === "دارد" )]);
          setDisabledN2(!disabledN2);
        }
        if(checkedN1){
          setDatashow([...data]);
          setDisabledN2(!disabledN2);
        }
        }
        const handleChangeN2=(e)=>{
          setCheckedN2(e.target.checked); 
          setCheckedN2(!checkedN2);
          if(e.target.value === "ندارد")
          {
            setDatashow([...data.filter(i=>i.StorageDrawer === "ندارد" )]);
            setDisabledN1(!disabledN1);
          }
          if(checkedN2){
            setDatashow([...data]);
            setDisabledN1(!disabledN1);
          }
          }
          const handleChangeM1=(e)=>{
            setCheckedM1(e.target.checked); 
            setCheckedM1(!checkedM1);
            if(e.target.value === "دارد")
            {
              setDatashow([...data.filter(i=>i.WarmingDrawer === "دارد" )]);
              setDisabledM2(!disabledM2);
            }
            if(checkedM1){
              setDatashow([...data]);
              setDisabledM2(!disabledM2);
            }
            }
            const handleChangeM2=(e)=>{
              setCheckedM2(e.target.checked); 
              setCheckedM2(!checkedM2);
              if(e.target.value === "ندارد")
              {
                setDatashow([...data.filter(i=>i.WarmingDrawer === "ندارد" )]);
                setDisabledM1(!disabledN1);
              }
              if(checkedM2){
                setDatashow([...data]);
                setDisabledM1(!disabledM1);
              }
              }
              const handleChangeO1=(e)=>{
                setCheckedO1(e.target.checked); 
                setCheckedO1(!checkedO1);
                if(e.target.value === "دارد")
                {
                  setDatashow([...data.filter(i=>i.ContinuosGrate === "دارد" )]);
                  setDisabledO2(!disabledO2);
                }
                if(checkedO1){
                  setDatashow([...data]);
                  setDisabledO2(!disabledO2);
                }
                }
                const handleChangeO2=(e)=>{
                  setCheckedO2(e.target.checked); 
                  setCheckedO2(!checkedO2);
                  if(e.target.value === "ندارد")
                  {
                    setDatashow([...data.filter(i=>i.ContinuosGrate === "ندارد" )]);
                    setDisabledO1(!disabledO1);
                  }
                  if(checkedO2){
                    setDatashow([...data]);
                    setDisabledO1(!disabledO1);
                  }
                  }
                  const handleChangeF1=(e)=>{
                    setCheckedF1(e.target.checked); 
                    setCheckedF1(!checkedF1);
                    if(e.target.value === "دارد")
                    {
                      setDatashow([...data.filter(i=>i.SabbathMode === "دارد" )]);
                      setDisabledF2(!disabledF2);
                    }
                    if(checkedF1){
                      setDatashow([...data]);
                      setDisabledF2(!disabledF2);
                    }
                    }
                    const handleChangeF2=(e)=>{
                      setCheckedF2(e.target.checked); 
                      setCheckedF2(!checkedF2);
                      if(e.target.value === "ندارد")
                      {
                        setDatashow([...data.filter(i=>i.SabbathMode === "ندارد" )]);
                        setDisabledF1(!disabledF1);
                      }
                      if(checkedF2){
                        setDatashow([...data]);
                        setDisabledF1(!disabledF1);
                      }
                      }


const handleChangeE1=(e)=>{
  setCheckedE1(e.target.checked); 
  setCheckedE1(!checkedE1);
  if(e.target.value === "دارد")
  {
    setDatashow([...data.filter(i=>i.ProofMode === "دارد" )]);
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
      setDatashow([...data.filter(i=>i.ProofMode === "ندارد" )]);
      setDisabledE1(!disabledE1);
    }
    if(checkedE2){
      setDatashow([...data]);
      setDisabledE1(!disabledE1);
    }
    }
    const handleChangeY1=(e)=>{
      setCheckedY1(e.target.checked); 
      setCheckedY1(!checkedY1);
      if(e.target.value === "دارد")
      {
        setDatashow([...data.filter(i=>i.DualFuel === "دارد" )]);
        setDisabledY2(!disabledY2);
      }
      if(checkedY1){
        setDatashow([...data]);
        setDisabledY2(!disabledY2);
      }
      }
      const handleChangeY2=(e)=>{
        setCheckedY2(e.target.checked); 
        setCheckedY2(!checkedY2);
        if(e.target.value === "ندارد")
        {
          setDatashow([...data.filter(i=>i.DualFuel === "ندارد" )]);
          setDisabledY1(!disabledY1);
        }
        if(checkedY2){
          setDatashow([...data]);
          setDisabledY1(!disabledY1);
        }
        }
        const handleChangeP1=(e)=>{
          setCheckedP1(e.target.checked); 
          setCheckedP1(!checkedP1);
          if(e.target.value === "۲۸ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۸ اینچ" )]);
        
          setDisabledP2(!disabledP2);
          }
          if(checkedP1){
            setDatashow([...data]);
            setDisabledP2(!disabledP2);
          }
        }
        const handleChangeP2=(e)=>{
          setCheckedP2(e.target.checked); 
          setCheckedP2(!checkedP2);
          if(e.target.value === "۲۹ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۹ اینچ" )]);
        
          setDisabledP1(!disabledP1);
          }
          if(checkedP2){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
          }
        }
        const handleChangeW1=(e)=>{
          setCheckedW1(e.target.checked); 
          setCheckedW1(!checkedW1);
          if(e.target.value === "۳۰ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۳۰ اینچ" )]);
        
          setDisabledW2(!disabledW2);
          }
          if(checkedW1){
            setDatashow([...data]);
            setDisabledW2(!disabledW2);
          }
        }
        const handleChangeW2=(e)=>{
          setCheckedW2(e.target.checked); 
          setCheckedW2(!checkedW2);
          if(e.target.value === "۳۲ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۳۲ اینچ" )]);
        
          setDisabledW1(!disabledW1);
          }
          if(checkedW2){
            setDatashow([...data]);
            setDisabledW1(!disabledW1);
          }
        }
        const handleChangeH1=(e)=>{
          setCheckedH1(e.target.checked); 
          setCheckedH1(!checkedH1);
          if(e.target.value === "۳۷ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۳۷ اینچ" )]);
        
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
          }
          if(checkedH1){
            setDatashow([...data]);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
          }
        }
        const handleChangeH2=(e)=>{
          setCheckedH2(e.target.checked); 
          setCheckedH2(!checkedH2);
          if(e.target.value === "۴۷ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۴۷ اینچ" )]);
        
          setDisabledH1(!disabledH1);
          setDisabledH3(!disabledH3);
          }
          if(checkedH2){
            setDatashow([...data]);
            setDisabledH1(!disabledH1);
            setDisabledH3(!disabledH3);
          }
        }
        const handleChangeH3=(e)=>{
          setCheckedH3(e.target.checked); 
          setCheckedH3(!checkedH3);
          if(e.target.value === "۴۸ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۴۸ اینچ" )]);
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          }
          if(checkedH3){
            setDatashow([...data]);
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
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
        <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',ml:1}} />}>قیمت </AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"گرانترین به ارزانترین"}  onChange={sortArrayMaxtoMin} />} label="گرانترین به ارزانترین" />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین به گرانترین"}  onChange={sortArrayMintoMax} />} label=" ارزانترین به گرانترین" />

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
        <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}>رنگ بدنه</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel  control={<Checkbox  checked={checkedC1}   onChange={handleChangeC1} value={"سفید"}  />} label="سفید" />
<FormControlLabel  control={<Checkbox  checked={checkedC2}   onChange={handleChangeC2} value={"نقره ای"}/>} label="نقره ای" />
<FormControlLabel   control={<Checkbox  checked={checkedC3}   onChange={handleChangeC3} value={"مشکی"} />} label="مشکی" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',ml:1}} />}> تعداد شعله</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedD1} value={"۴ عدد"} disabled={disabledD1}  onChange={handleChangeD1} />} label="۴ عدد" />
<FormControlLabel control={<Checkbox checked={checkedD2} value={"۵ عدد"} disabled={disabledD2}   onChange={handleChangeD2}/>} label="۵ عدد" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',ml:1}} />}>  برند</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel control={<Checkbox  checked={checkedB1}   onChange={handleChangeB1} value={"Whirlpool"} />} label="Whirlpool" />
<FormControlLabel  control={<Checkbox checked={checkedB2}   onChange={handleChangeB2} value={"bush"} />} label="bush" />          
<FormControlLabel control={<Checkbox  checked={checkedB3}   onChange={handleChangeB3} value={"LG"} />} label="LG" />
<FormControlLabel  control={<Checkbox checked={checkedB4}   onChange={handleChangeB4} value={"samsung"} />} label="samsung" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 4}
        onChange={(event, expanded) => {
          setIndex(expanded ? 4 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}>حالت گواهی</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 5}
        onChange={(event, expanded) => {
          setIndex(expanded ? 5 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',ml:1}} />}>   دوگانه سوز</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel control={<Checkbox checked={checkedY1}   onChange={handleChangeY1} disabled={disabledY1} value={"دارد"}  />} label="دارد" />
        <FormControlLabel  control={<Checkbox checked={checkedY2}   onChange={handleChangeY2} disabled={disabledY2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 6}
        onChange={(event, expanded) => {
          setIndex(expanded ? 6 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}>  عمق</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۸ اینچ"} />} label="۲۸ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۲۹ اینچ"} />} label="۲۹ اینچ" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 7}
        onChange={(event, expanded) => {
          setIndex(expanded ? 7 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
   
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}} />}>  عرض</AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۳۲ اینچ"} />} label="۳۲ اینچ" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 8}
        onChange={(event, expanded) => {
          setIndex(expanded ? 8 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',ml:1}} />}>  ارتفاع</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۳۷ اینچ"} />} label="۳۷ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۴۷ اینچ"} />} label="۴۷ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۴۸ اینچ"} />} label="۴۸ اینچ" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 9}
        onChange={(event, expanded) => {
          setIndex(expanded ? 9 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}> قابلیت خود تمیزی</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedS1}   onChange={handleChangeS1} disabled={disabledS1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedS2}   onChange={handleChangeS2} disabled={disabledS2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 10}
        onChange={(event, expanded) => {
          setIndex(expanded ? 10 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}>  کشوی ذخیره </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedN1}   onChange={handleChangeN1} disabled={disabledN1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedN2}   onChange={handleChangeN2} disabled={disabledN2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 11}
        onChange={(event, expanded) => {
          setIndex(expanded ? 11 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}> کشوی گرم کننده</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedM1}   onChange={handleChangeM1} disabled={disabledM1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedM2}   onChange={handleChangeM2} disabled={disabledM2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 12}
        onChange={(event, expanded) => {
          setIndex(expanded ? 12 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}>توری پیوسته </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedO1}   onChange={handleChangeO1} disabled={disabledO1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedO2}   onChange={handleChangeO2} disabled={disabledO2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 13}
        onChange={(event, expanded) => {
          setIndex(expanded ? 13 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',ml:1}}/>}>حالت سبت</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedF1}   onChange={handleChangeF1} disabled={disabledF1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedF2}   onChange={handleChangeF2} disabled={disabledF2} value={"ندارد"} />} label="ندارد" />
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
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>قیمت </AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"گرانترین به ارزانترین"}  onChange={sortArrayMaxtoMin} />} label="گرانترین به ارزانترین" />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین به گرانترین"}  onChange={sortArrayMintoMax} />} label=" ارزانترین به گرانترین" />

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
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>رنگ بدنه</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel  control={<Checkbox  checked={checkedC1}   onChange={handleChangeC1} value={"سفید"}  />} label="سفید" />
<FormControlLabel  control={<Checkbox  checked={checkedC2}   onChange={handleChangeC2} value={"نقره ای"}/>} label="نقره ای" />
<FormControlLabel   control={<Checkbox  checked={checkedC3}   onChange={handleChangeC3} value={"مشکی"} />} label="مشکی" />
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
          <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}> تعداد شعله</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedD1} value={"۴ عدد"} disabled={disabledD1}  onChange={handleChangeD1} />} label="۴ عدد" />
<FormControlLabel control={<Checkbox checked={checkedD2} value={"۵ عدد"} disabled={disabledD2}   onChange={handleChangeD2}/>} label="۵ عدد" />
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
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>  برند</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel control={<Checkbox  checked={checkedB1}   onChange={handleChangeB1} value={"Whirlpool"} />} label="Whirlpool" />
<FormControlLabel  control={<Checkbox checked={checkedB2}   onChange={handleChangeB2} value={"bush"} />} label="bush" />          
<FormControlLabel control={<Checkbox  checked={checkedB3}   onChange={handleChangeB3} value={"LG"} />} label="LG" />
<FormControlLabel  control={<Checkbox checked={checkedB4}   onChange={handleChangeB4} value={"samsung"} />} label="samsung" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 4}
        onChange={(event, expanded) => {
          setIndex(expanded ? 4 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>حالت گواهی</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 5}
        onChange={(event, expanded) => {
          setIndex(expanded ? 5 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>   دوگانه سوز</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel control={<Checkbox checked={checkedY1}   onChange={handleChangeY1} disabled={disabledY1} value={"دارد"}  />} label="دارد" />
        <FormControlLabel  control={<Checkbox checked={checkedY2}   onChange={handleChangeY2} disabled={disabledY2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 6}
        onChange={(event, expanded) => {
          setIndex(expanded ? 6 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>  عمق</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۸ اینچ"} />} label="۲۸ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۲۹ اینچ"} />} label="۲۹ اینچ" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 7}
        onChange={(event, expanded) => {
          setIndex(expanded ? 7 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
   
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>  عرض</AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۳۲ اینچ"} />} label="۳۲ اینچ" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 8}
        onChange={(event, expanded) => {
          setIndex(expanded ? 8 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>  ارتفاع</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۳۷ اینچ"} />} label="۳۷ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۴۷ اینچ"} />} label="۴۷ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۴۸ اینچ"} />} label="۴۸ اینچ" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 9}
        onChange={(event, expanded) => {
          setIndex(expanded ? 9 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}> قابلیت خود تمیزی</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedS1}   onChange={handleChangeS1} disabled={disabledS1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedS2}   onChange={handleChangeS2} disabled={disabledS2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 10}
        onChange={(event, expanded) => {
          setIndex(expanded ? 10 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>  کشوی ذخیره </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedN1}   onChange={handleChangeN1} disabled={disabledN1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedN2}   onChange={handleChangeN2} disabled={disabledN2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 11}
        onChange={(event, expanded) => {
          setIndex(expanded ? 11 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}> کشوی گرم کننده</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedM1}   onChange={handleChangeM1} disabled={disabledM1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedM2}   onChange={handleChangeM2} disabled={disabledM2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 12}
        onChange={(event, expanded) => {
          setIndex(expanded ? 12 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>توری پیوسته </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedO1}   onChange={handleChangeO1} disabled={disabledO1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedO2}   onChange={handleChangeO2} disabled={disabledO2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 13}
        onChange={(event, expanded) => {
          setIndex(expanded ? 13 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
         <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',ml:1}} />}>حالت سبت</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedF1}   onChange={handleChangeF1} disabled={disabledF1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedF2}   onChange={handleChangeF2} disabled={disabledF2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion> 
      </FormGroup>
      </AccordionDetails>
      </Accordion> 
</div>
</>
   )}
 
