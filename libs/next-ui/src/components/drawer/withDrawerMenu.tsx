'use client';

import { ComponentType, useState } from 'react';
import DrawerMenu from './DrawerMenu';

export type DrawerProps ={
  toggleDrawer: (openStatus: boolean) => void
}

export function withDrawerMenu<TProps>(WrappedComponent: ComponentType<DrawerProps>) {
  return function WhitDrawerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (openStatus: boolean) => {
      setIsOpen(openStatus);
    };

       return (
      <DrawerMenu isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <WrappedComponent toggleDrawer={toggleDrawer} />
      </DrawerMenu>
    );
  };
}
