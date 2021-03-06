import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </header>
  );
};

export default toolbar;
