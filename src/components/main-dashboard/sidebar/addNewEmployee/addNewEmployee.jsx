import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

function AddNewEmployee() {
  return (
    <Link href="/addNewEmployee">
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ width: "100%", marginBottom: "64px" }}
      >
        Add Employee
      </Button>
    </Link>
  );
}

export default AddNewEmployee;
