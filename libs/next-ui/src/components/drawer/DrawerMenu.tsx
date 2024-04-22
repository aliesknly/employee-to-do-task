'use client';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export interface DrawerProps {
    children: React.ReactNode;
    isOpen: boolean;
    toggleDrawer: (openStatus: boolean) => void;
}
export function DrawerMenu(props: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (openStatus: boolean) => {
    setIsOpen(openStatus);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
        {props.children}
      </Drawer>
    </>
  );
}

export default DrawerMenu;
