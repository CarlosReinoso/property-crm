import NavSideBar from "@/components/NavSideBar/NavSideBar";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Box, IconButton, Typography } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import CottageIcon from "@mui/icons-material/Cottage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Property CRM",
  description: "Manage your property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <Box
          component={"body"}
          className={inter.className}
          sx={{
            display: "flex",
            margin: "0px 0px",
            height: "100vh",
          }}
        >
          <Box sx={{ bgcolor: "lightgreen", color: "white" }}>
            <IconButton disableRipple>
              <CottageIcon />
              <Typography sx={{ marginLeft: 2 }}>Property CRM</Typography>
            </IconButton>
            <NavSideBar />
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            {children}
          </Box>
        </Box>
      </ThemeRegistry>
    </html>
  );
}
