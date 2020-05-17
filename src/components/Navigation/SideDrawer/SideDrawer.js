import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const sideDrawer = (props) => {
  const attachedClass = props.open ? classes.Open : classes.Close;

  return (
    <Aux>
      <Backdrop show={props.open} hide={props.close} />
      <div className={`${classes.SideDrawer} ${attachedClass}`}>
        <Button clicked={props.close} btnType='Close'></Button>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
