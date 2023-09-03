import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <Box
        component={"body"}
        className={inter.className}
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <h1>layout</h1>
        </Box>
        <Box>{children}</Box>
      </Box>
    </html>
  );
}
