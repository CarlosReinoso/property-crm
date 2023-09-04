import { Box, Button, Container, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import LeadsTable from "@/components/LeadsTable";

export default function LeadsPage() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>Leads</h4>
          <Button variant="contained" startIcon={<AddIcon />}>
            Create Lead
          </Button>
        </Box>
      </Container>
      <Divider />
      <LeadsTable />
    </>
  );
}
