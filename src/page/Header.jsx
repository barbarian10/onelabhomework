import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ButtonAppBar() {
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        {/*   <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food Calculator
          </Typography>
          {location.pathname === '/' 
          ? <Link to={'/table'}>
            <Button style={{background: 'white', color: 'grey', fontWeight: 'bold'}}>Table</Button>
          </Link>
          : <Link to={'/'}>
          <Button style={{background: 'white', color: 'grey', fontWeight: 'bold'}}>Home</Button>
        </Link>}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
