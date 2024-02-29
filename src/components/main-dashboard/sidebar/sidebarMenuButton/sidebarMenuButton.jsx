import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

function SidebarMenuButton({ href, buttonName, className, icon }) {
  return (
    <Link href={`${href}`}>
      <button
        className={`w-full py-[10px] cursor-pointer hover:bg-[#538DFF4D] mb-6 rounded-md pl-6 flex gap-2 items-center ${className}`}
      >
        <Icon icon={icon} style={{ color: "white", width: "3rem" }} />
        <span>{buttonName}</span>
      </button>
    </Link>
  );
}

export default SidebarMenuButton;
