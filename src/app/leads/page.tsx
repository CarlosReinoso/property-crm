import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";

export default function LeadsPage() {
  return (
    <>
      <Box>
        <h4>Leads</h4>
        <Button variant="contained" startIcon={<AddIcon />}>
          Create Lead
        </Button>
      </Box>
    </>
  );
}
