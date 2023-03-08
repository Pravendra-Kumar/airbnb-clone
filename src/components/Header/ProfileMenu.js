import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./header.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}

      <div id="basic-button" 
        className='profile-menu-flex'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MenuIcon/>
        <AccountCircleIcon/>
        </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }} className="menu-items"
      >
        <MenuItem  className="menu-items" onClick={handleClose}>SignUp</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Login</MenuItem>
        <div style={{height:"1px", background:"var(--grey", width:"100%"}} />
        <MenuItem className="menu-items" onClick={handleClose}>Airbnb Your Home</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem className="menu-items" onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}