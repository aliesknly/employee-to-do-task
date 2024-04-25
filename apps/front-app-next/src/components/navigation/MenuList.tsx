'use client';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DrawerProps, withDrawerMenu } from '@libs/next-ui/components';
import Link from 'next/link';
import { MODULES_ROUTE, RoutesType } from '../../common';
import { FC } from 'react';

export const MenuList: FC<DrawerProps> = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {MODULES_ROUTE.map((route: RoutesType, index) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton component={Link} href={route.path}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const DrawerMenuList = withDrawerMenu(MenuList);
