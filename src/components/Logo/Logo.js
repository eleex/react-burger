import React from 'react';

import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.svg';

const logo = () => {
  return (
    <img
      className={classes.Logo}
      src={burgerLogo}
      alt='MyBurger'
      width='38'
      height='38'
    />
  );
};

export default logo;
