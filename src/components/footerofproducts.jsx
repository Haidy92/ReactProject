import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography ,Box} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faSnapchatGhost,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons'; 
const Footerofproducts = () => {
  return (
    <>
      <Stack spacing={20} direction="row" sx={{ padding: 5, alignItems:'center', justifyContent:'center'}} className='bg-gradient-to-r from-pink-100 to-blue-100'>
        <Stack spacing={1} direction="column" >
          <Typography variant='h6'sx={{'&:hover':{color:'blue'}}}>ABOUT US</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Our Story</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Careers</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Blog</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Press</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Affiliate Program</Typography>
        </Stack>

        <Stack spacing={1} direction="column">
          <Typography variant='h6' sx={{'&:hover':{color:'blue'}}}>CUSTOMER SERVICE</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Contact Us</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Shipping Info</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Returns & Exchanges</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>FAQs</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Order Tracking</Typography>
        </Stack>

        <Stack spacing={1} direction="column">
          <Typography variant='h6' sx={{'&:hover':{color:'blue'}}}>SHOP</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>New Arrivals</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Best Sellers</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Gift Cards</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Sale</Typography>
          <Typography sx={{'&:hover':{color:'blue'}}}>Brands</Typography>
        </Stack>
        
      </Stack>
      <Box className='bg-gradient-to-r from-pink-100 to-blue-100'
        sx={{
          
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          py: 2,
          
        }}
      >
        <Typography variant='h6' sx={{'&:hover':{color:'blue'}}}>CONNECT WITH US</Typography>
          
          <FontAwesomeIcon icon={faFacebookF}  className="icon-hover" />
        <FontAwesomeIcon icon={faInstagram} className="icon-hover"/>
        <FontAwesomeIcon icon={faTwitter} className="icon-hover" />
        <FontAwesomeIcon icon={faSnapchatGhost} className="icon-hover"/>
        <FontAwesomeIcon icon={faYoutube} className="icon-hover" />
      </Box>
    </>
  );
};

export default Footerofproducts;
