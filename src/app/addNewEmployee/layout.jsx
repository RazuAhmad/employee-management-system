import MainDashboard from "@/components/main-dashboard/main-dashboard";
import React from "react";

function AddNewEmployeeLayout({ children }) {
  return (
    <>
      <MainDashboard>{children}</MainDashboard>
    </>
  );
}

export default AddNewEmployeeLayout;
