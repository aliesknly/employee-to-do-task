'use client';

import { ComponentType } from 'react';
import DrawerMenu from './DrawerMenu';
import { DrawerProps } from './DrawerProps';

export function withDrawerMenu(WrappedComponent: ComponentType<DrawerProps>) {
  return function WhitDrawerMenu() {
    return (
      <DrawerMenu>
        {({ toggleDrawer }) => (
          <WrappedComponent toggleDrawer={toggleDrawer} />
        )}
      </DrawerMenu>
    );
  };
}
