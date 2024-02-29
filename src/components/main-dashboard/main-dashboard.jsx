import { Box, Grid, Hidden } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar/sidebar";

function MainDashboard({ children }) {
  return (
    <Box component="section" sx={{ marginX: "24px", paddingTop: 8 }}>
      <Grid container>
        <Grid
          item
          md={2.5}
          lg={2}
          display={{ xs: "none", md: "block" }}
          className="border-gray-400 border-r-2 h-svh"
        >
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9.5} lg={10}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainDashboard;
