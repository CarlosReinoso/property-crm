"use client";

import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";
import SendIcon from "@mui/icons-material/Send";
import { ReactNode } from "react";

const NavItem = [
  { link: "Leads", icon: <SendIcon /> },
  { link: "Properties", icon: <SendIcon /> },
];

const NavListItem = ({ link, icon }: { link: string; icon: ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <ListItemButton onClick={() => router.push(link.toLocaleLowerCase())}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={link} />
      </ListItemButton>
    </>
  );
};

const NavSideBar = () => {
  return (
    <Box>
      {NavItem.map((i) => (
        <NavListItem link={i.link} icon={i.icon}></NavListItem>
      ))}
    </Box>
  );
};

export default NavSideBar;
