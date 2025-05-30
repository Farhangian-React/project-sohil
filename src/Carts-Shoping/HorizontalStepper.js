import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1:<IconButton ><NavLink > < LocalMallOutlinedIcon /> </NavLink> </IconButton> ,
    2:<IconButton><NavLink  ><HomeWorkOutlinedIcon /></NavLink></IconButton>,
    3:<IconButton><NavLink  >< AirportShuttleOutlinedIcon/></NavLink></IconButton> ,
    4:<IconButton><NavLink  ><CreditCardOutlinedIcon/> </NavLink></IconButton> ,
    5:<IconButton><NavLink  ><ThumbUpOffAltOutlinedIcon/> </NavLink></IconButton>,
    6:<IconButton><NavLink  ><CheckOutlinedIcon/> </NavLink></IconButton>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['  سبد خرید', ' آدرس ارسال  ', '  روش ارسال','پرداخت','تایید سفارش','ثبت سفارش'];

export default function HorizontalStepper() {
  return (
    <Stack sx={{ width: '100%',direction:'ltr'}} >
    
      <Stepper alternativeLabel activeStep={0} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step  key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
