import React, { useState } from "react";
import { Tabs, Tab, Menu, MenuItem, Divider, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  // State to manage the active tab and dropdown menu anchor element
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Function to handle opening dropdown menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ float: "right", gap: "1rem",  marginLeft:"36%"}}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Dropdown Tabs"
      >
        <Tab
          style={{ marginRight: "1rem", boxShadow: " 0px 0px 9px #a7a2a2 inset" }}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              Tag
              <ArrowDropDownIcon />
            </div>
          }
          onClick={handleMenuClick}
        />
        <Tab
          style={{ marginRight: "1rem", boxShadow: " 0px 0px 9px #a7a2a2 inset" }}
          label={
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              Agencies
              <ArrowDropDownIcon />
            </div>
          }
          onClick={handleMenuClick}
        />
        <Tab
          style={{ marginRight: "1rem", boxShadow: " 0px 0px 9px #a7a2a2 inset" }}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              Month
              <ArrowDropDownIcon />
            </div>
          }
          onClick={handleMenuClick}
        />
        <Tab
          style={{ marginRight: "1rem", boxShadow: " 0px 0px 9px #a7a2a2 inset" }}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              Year
              <ArrowDropDownIcon />
            </div>
          }
          onClick={handleMenuClick}
        />
      </Tabs>
      {/* Render dropdown menu based on active tab */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ gap: "1rem " }}
      >
        {activeTab === 0 && (
          <>
            <MenuItem onClick={handleClose}>Action 1</MenuItem>
            <MenuItem onClick={handleClose}>Another action 1</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Something else here 1</MenuItem>
          </>
        )}
        {activeTab === 1 && (
          <>
            <MenuItem onClick={handleClose}>Action 2</MenuItem>
            <MenuItem onClick={handleClose}>Another action 2</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Something else here 2</MenuItem>
          </>
        )}
        {activeTab === 2 && (
          <>
            <MenuItem onClick={handleClose}>Action 3</MenuItem>
            <MenuItem onClick={handleClose}>Another action 3</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Something else here 3</MenuItem>
          </>
        )}
        {activeTab === 3 && (
          <>
            <MenuItem onClick={handleClose}>Action 4</MenuItem>
            <MenuItem onClick={handleClose}>Another action 4</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Something else here 4</MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
