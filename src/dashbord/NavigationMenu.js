import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import Link from "@mui/material/Link";
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import dishwashericon from '../img/dishwasher-icon.jpg';
import washingmachins from '../img/washingmachin-icon2.png';
import gasicon from '../img/gas-icon2.jpg';
import Button from '@mui/material/Button';
import Refrigeratoricon from '../img/Refrigerator-icon1.png';
import {NavLink} from 'react-router-dom';
import './E.css';
import { Typography } from '@mui/material';

const useRovingIndex = (options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);
  const targetRefs = React.useRef([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index) => ({
    ref: (ref) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e) => {
      if (Number.isInteger(activeIndex)) {
        if (e.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
          focusNext();
        }
        if (e.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
          focusPrevious();
        }
        handlers.onKeyDown?.(e, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};
const Refrigerators  = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });
  const open = Boolean(anchorEl);
  const id = open ? 'Products-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
      <NavLink  to={"/allrefriderators" } >
        <button
          aria-expanded={open ? 'true' : 'false'}
          ref={ref}
          {...props}
       
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          className='
         my-0  px-1.5 py-2 text-gray-800 text-md font-sans  hover:text-yellow-500 bg-transparent
    '
         
        >
         
      یخچال و فریزر 
             
        </button></NavLink>
        <Popper id={id} open={open} anchorEl={anchorEl}  placement='left-end' disablePortal keepMounted>
       
          <List
            aria-label="Products"
            variant='outlined'
            orientation="vertical"
      
            sx={{
              borderRight:'1px solid black',
              mt:-2.7,
              mr:4.6,
              px:1,
              py:0.5,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'230px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'center',
              height:'250px',
              fontSize:'18px',
             
            }}
             
            
          >
            <ListItem  > 
              <NavLink to={'/shop-washing-machine'} {...getTargetProps(0)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                    یخچال های دو درب</button>
                 </NavLink> 
            </ListItem>
            <ListItem >
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(1)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                    یخچال های ساید بای ساید</button>
                 </NavLink> 
            </ListItem>
            <ListItem >
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(2)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   یخچال و فریزر پایین</button>
                 </NavLink> 
            </ListItem>
            <ListItem >
         
             
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(3)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   یخچال و فریزر بالا </button>
                 </NavLink> 
            </ListItem>
            <ListItem  >
             
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(4)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   یخچال و فریزر تخصصی</button>
                 </NavLink> 
            </ListItem>
           
          </List>
         
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});







const Cooking  = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });
  const open = Boolean(anchorEl);
  const id = open ? 'Products-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
      <NavLink className='navlinkactiv' to={"/allgas" } >
        <button
          aria-expanded={open ? 'true' : 'false'}
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          className='
          my-0  px-1.5 py-2 text-gray-800 text-md font-sans  hover:text-yellow-500 bg-transparent
     '
          
            
        >
           پخت و پز  
        </button></NavLink>
        <Popper id={id} open={open} anchorEl={anchorEl}  placement='left-end' disablePortal keepMounted>
       
          <List
            aria-label="Products"
            variant='outlined'
            orientation="vertical"
      
            sx={{
              borderRight:'1px solid black',
              mb:-13,
              mr:8.1,
              px:2,
              pb:2,
              pt:4,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'230px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'start',
              height:'250px',
              fontSize:'18px',
             
            }}
             
            
          >
            <ListItem >
               
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(0)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   اجاق گاز و فر </button>
                 </NavLink> 
            </ListItem>
            <ListItem>
            
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(1)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   گاز صفحه ای</button>
                 </NavLink> 
            </ListItem>
            <ListItem  >
            
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(2)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   هود </button>
                 </NavLink> 
            </ListItem>
            <ListItem  >
         
           
            <NavLink to={'/shop-washing-machine'} {...getTargetProps(3)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   مایکروویو </button>
                 </NavLink> 
            </ListItem>
          </List>
         
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});











const Products = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });
  const open = Boolean(anchorEl);
  const id = open ? 'Products-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
        <Link
          
         
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          sx={{color:'white',textDecoration:'none',fontSize:"1em"}}
        >
          محصولات 
        </Link>
        <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
       
          <List
            aria-label="Products"
            variant='outlined'
            orientation="vertical"
      
            sx={{
              my: 1,
              p:2,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'210px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'start',
              height:'250px',
              fontSize:'18px',
             
            }}
             
            
          >
            <ListItem  >
                <ListItemDecorator  >
              <img src={Refrigeratoricon} width={20} alt='img1' />
              </ListItemDecorator>
              
                 <NavLink className='navlink1' to={"/allrefriderators" } {...getTargetProps(0)}>  <Refrigerators/> </NavLink>
             
            </ListItem>
            <ListItem >
            <ListItemDecorator  >
              <img src={washingmachins} width={20} alt='img2' />
              </ListItemDecorator>
              
                <NavLink to={'/shop-washing-machine'} {...getTargetProps(1)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   ماشین لباسشویی</button>
                 </NavLink> 
             
            </ListItem>
            <ListItem >
            <ListItemDecorator  >
              <img src={gasicon} width={20} alt='img3' />
              </ListItemDecorator>
             
            <NavLink className='navlink1' to={'/allgas'} {...getTargetProps(2)}><Cooking/> </NavLink>
            
            </ListItem>
            <ListItem  >
              <ListItemDecorator  >
              <img src={dishwashericon} width={20} alt='img4' />
              </ListItemDecorator>
              
              <NavLink to={'/shop-dishwasher'} {...getTargetProps(1)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   ماشین ظرفشویی</button>
                 </NavLink> 
              
            </ListItem>
          </List>
         
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});
const Shows = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });

  const open = Boolean(anchorEl);
  const id = open ? 'about-popper' : undefined;
  return (
    <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
      <Box onMouseLeave={() => setAnchorEl(null)}>
        <Link
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
          sx={{color:'white',textDecoration:'none',fontSize:"1em"}}
        >
          جشنواره ها 
        </Link>
        <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
          <List
                 aria-label="Products"
                 variant="outlined"
                 orientation="vertical"
           
                 sx={{
                   my: 1,
                   p:2,
                   boxShadow: 'md',
                   borderRadius: 'sm',
                   '--List-radius': '8px',
                   '--List-padding': '4px',
                   '--ListDivider-gap': '4px',
                   '--ListItemDecorator-size': '32px',
                   backgroundColor:'#fff',
                   width:'220px',
                   height:'100px',
                   alignItems:'start',
                   display:'flex',
                   justifyContent: 'center'
                 }}
          >
           
            <ListItem>
               
            <NavLink to={'/jashnehtabestane'} {...getTargetProps(0)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   جشنواره زمستانه</button>
                 </NavLink>  
            </ListItem>
            <ListItem>
              
            <NavLink to={'/karttakhfif'} {...getTargetProps(1)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   فعال سازی کارت تخفیف</button>
                 </NavLink> 
            </ListItem>
          </List>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});
const Servis = React.forwardRef(({ focusNext, focusPrevious, ...props }, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
    initialActiveIndex: null,
    vertical: true,
    handlers: {
      onKeyDown: (event, fns) => {
        if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
          event.preventDefault();
        }
        if (event.key === 'Tab') {
          setAnchorEl(null);
          fns.setActiveIndex(null);
        }
        if (event.key === 'ArrowLeft') {
          setAnchorEl(null);
          focusPrevious();
        }
        if (event.key === 'ArrowRight') {
          setAnchorEl(null);
          focusNext();
        }
      },
    },
  });

  const open = Boolean(anchorEl);
  const id = open ? 'about-popper' : undefined;
  return (
    <ClickAwayListener  onClickAway={() => setAnchorEl(null)}>
      <Box  onMouseLeave={() => setAnchorEl(null)}>
        <Link
          ref={ref}
          {...props}
          onKeyDown={(event) => {
            props.onKeyDown?.(event);
            if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
              setAnchorEl(null);
            }
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              targets[0]?.focus();
              setActiveIndex(0);
            }
          }}
          onFocus={(event) => setAnchorEl(event.currentTarget)}
          onMouseEnter={(event) => {
            props.onMouseEnter?.(event);
            setAnchorEl(event.currentTarget);
          }}
           sx={{color:'white',textDecoration:'none',fontSize:"1em"}}
      
        >
          خدمات 
        </Link>
        <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
        <List
            aria-label="Products"
            variant="outlined"
            orientation="vertical"
      
            sx={{
              my: 1,
              p:2,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '4px',
              '--ListDivider-gap': '4px',
              '--ListItemDecorator-size': '32px',
              backgroundColor:'#fff',
              width:'200px',
              alignItems:'start',
              display:'flex',
              justifyContent: 'center',
             
            }}
             
            
          >
       
            <ListItem >
               
            <NavLink to={'/AfterSalesService'} {...getTargetProps(0)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   خدمات پس از فروش </button>
                 </NavLink> 
            </ListItem>
            <ListItem >
               
            <NavLink to={'/ContactUsForm'} {...getTargetProps(1)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   فرم تماس با ما </button>
                 </NavLink> 
            </ListItem>
            <ListItem >
               
            <NavLink to={'/PopularQuestions'} {...getTargetProps(2)}><button className='bg-inherit text-gray-800 text-[16px] hover:text-yellow-500'>
                   سوالات متداول</button>
                 </NavLink>
            </ListItem>
          </List>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
});

export default function NavigationMenu() {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  return (
    <Box sx={{display:"flex"}} >
      <List
        orientation="horizontal"
        className='lis'
        
        sx={{
          
          '--List-radius': '8px',
          '--List-padding': '8px',
          '--List-gap': '12px',
          '--ListItem-gap': '0px',
          
          
         
        }}
      >
        
        <ListItem  className='list'>
          
          <Products 
            onMouseEnter={() => {
              setActiveIndex(0);
              targets[0].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(0)}
          />
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem className='list'>
          <Shows
            onMouseEnter={() => {
              setActiveIndex(1);
              targets[1].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(1)}
          />
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list' >
        <NavLink className='hover' to={"/Stores"}   {...getTargetProps(2)} style={{color:'white',textDecoration:'none',fontSize:"1em"}} >
            فروشگاه </NavLink>  
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list'   >
        <NavLink className='hover' to={"/about-snova"}   {...getTargetProps(3)} style={{color:'white',textDecoration:'none',fontSize:"1em"}} >
            چرا سهیل </NavLink> 
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list'  >
        <NavLink className='hover' to={"/life-style"}   {...getTargetProps(4)} style={{color:'white',textDecoration:'none',fontSize:"1em"}} >
             سبک زندگی </NavLink>
        </ListItem>
        <ListItem>
          <Typography sx={{color:'white',fontSize:'20px'}}> / </Typography>
        </ListItem>
        <ListItem  className='list'>
          <Servis
            onMouseEnter={() => {
              setActiveIndex(5);
              targets[5].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(5)}
            className='servis'
          />
        </ListItem>
      </List>
    
    </Box>
  );
}
