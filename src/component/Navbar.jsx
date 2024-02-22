import React, { useState } from "react";
import { Avatar, Menu, MenuItem, Divider } from '@mui/material';

function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div  style={{ cursor: 'pointer', marginLeft: '8px', display:"flex" }}>

    <Avatar
      alt="Profile"
      src="vite.svg"
      className="profile-image"
      aria-controls="simple-menu"
      aria-haspopup="true"
      onClick={handleClick}
      />
    <p onClick={handleClick} style={{margin:"6px", fontSize:"18px"}}>shubham</p>
      </div>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Action</MenuItem>
      <MenuItem onClick={handleClose}>Another action</MenuItem>
      <Divider />
      <MenuItem onClick={handleClose}>Something else here</MenuItem>
    </Menu>
  </div>
  );
}

const Navbar = () => {
  // State to manage the collapsed state of the navbar
  const [collapsed, setCollapsed] = useState(true);

  // Function to toggle the collapsed state
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{boxShadow:"0px 1px 12px grey"}} >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          REGAI by Prediction AI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add your other navbar items here */}
          </ul>
          {/* Render the DropdownMenu component */}
          <DropdownMenu />
            {/* shubhah   */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
