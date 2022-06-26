import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:"#2d6a4f"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          <NavLink className='link' to='/Home'>Home</NavLink>

          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          {/* <Button color="inherit">Register</Button> */}

          <NavLink className='link' to='/Login' >  <Button className='btn' color="inherit">Login</Button></NavLink>
          <NavLink className='link' to='/Register' >  <Button className='btn' color="inherit">Register</Button></NavLink>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
