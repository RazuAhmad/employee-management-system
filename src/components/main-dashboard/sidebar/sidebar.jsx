"use client";

import React from "react";
import AddNewEmployee from "./addNewEmployee/addNewEmployee";
import { Icon } from "@iconify/react";
import Link from "next/link";
import SidebarMenuButton from "./sidebarMenuButton/sidebarMenuButton";

function Sidebar() {
  return (
    <div className="pr-[12px] pt-6 h-full">
      <AddNewEmployee />

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
    </div>
  );
}

export default Sidebar;
