import React from 'react'
import LoginButton from './LoginButton'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function Loader() {
  return (
    <Card sx={{ minWidth: 600,marginTop:"7%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
          Please Login to edit the fields
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" > <LoginButton/></Button>
      </CardActions>
    </Card>
  );
}