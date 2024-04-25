'use client';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode, useState } from 'react';

type DrawerProperties = {
  isOpen: boolean;
  toggleDrawer: (openStatus: boolean) => void;
};
type ChildrenFunction = (props: DrawerProperties) => ReactNode;

interface DrawerMenuProps {
  children: ChildrenFunction | ReactNode;
}
export function DrawerMenu({ children }: DrawerMenuProps) {
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
        {typeof children === 'function'
          ? children({ isOpen, toggleDrawer })
          : children}
      </Drawer>
    </>
  );
}

export default DrawerMenu;
