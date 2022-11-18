import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import { styled, alpha } from '@mui/material/styles';
import { Link } from '@mui/material';


export default function Footer() {
  const Appbar = styled(AppBar)(({ theme }) => ({
    color:"white",
    backgroundColor:"black",
    fontsize:"2.5rem"
  }));
  
  

  

  return (
    <Box sx={{ flexGrow: 1 }} bottom="0">
      <FormGroup>
       
      </FormGroup>
      <Appbar position="static" sx={{padding:"1rem"}}  >

      <Typography variant="h5"  align="center">
      {'Copyright © '}
      <Link  href="https://mui.com/">
        Student Management System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

        
      </Appbar>
    </Box>
  );
}
