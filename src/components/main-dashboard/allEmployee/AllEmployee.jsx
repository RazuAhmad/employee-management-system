"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function AllEmployee() {
  const [allEmployeeData, setAllEmployeeData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setAllEmployeeData(data);
    };
    fetchData();
  }, []);

  // Handle delete employee
  const handleDeleteEmployee = (deleteId) => {
    const restOfEmployee = allEmployeeData.filter((pd) => pd.id !== deleteId);
    setAllEmployeeData(restOfEmployee);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>company</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
            <StyledTableCell>Update</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {allEmployeeData.map((singleEmployeeData) => (
            <StyledTableRow key={singleEmployeeData.id}>
              <StyledTableCell component="th" scope="row">
                {singleEmployeeData.name}
              </StyledTableCell>
              <StyledTableCell>{singleEmployeeData.email}</StyledTableCell>
              <StyledTableCell>{singleEmployeeData.phone}</StyledTableCell>
              <StyledTableCell>
                {singleEmployeeData?.company?.name}
              </StyledTableCell>

              {/* Delete button is here */}
              <StyledTableCell>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDeleteEmployee(singleEmployeeData.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>

              {/* Update button is here */}
              <StyledTableCell>
                <Button variant="outlined" startIcon={<EditIcon />}>
                  Update
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
