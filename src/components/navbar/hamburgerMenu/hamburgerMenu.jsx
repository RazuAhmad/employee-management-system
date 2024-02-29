"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import SidebarMenuButton from "@/components/main-dashboard/sidebar/sidebarMenuButton/sidebarMenuButton";
import Image from "next/image";

function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: "100%", paddingX: "10px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* dashboard button */}
      <SidebarMenuButton
        href="/"
        buttonName="Dashboard"
        className="bg-orange-500 text-white"
        icon="material-symbols-light:dashboard-outline"
      />

      {/* Manage Employee button */}
      <SidebarMenuButton
        href="/"
        buttonName="All Employee"
        className="bg-slate-400 text-white border border-gray-950"
        icon="mdi:analytics"
      />

      {/* Employee Leave records */}
      <SidebarMenuButton
        href="/employeeLeaveRecords"
        buttonName="Leave Records"
        className="bg-slate-400 text-white border border-gray-950"
        icon="raphael:employee"
      />

      {/* Analytics button */}
      <SidebarMenuButton
        href="/analytics"
        buttonName="Analytics"
        className="bg-slate-400 text-white border border-gray-950"
        icon="mdi:analytics"
      />
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, paddingTop: "90px" }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          {DrawerList}
        </Box>
      </Drawer>
    </>
  );
}

export default HamburgerMenu;
