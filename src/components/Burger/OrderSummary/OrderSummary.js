import React from 'react';

import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => (
    <li key={igKey}>
      <span>{igKey}:</span> <span>{props.ingredients[igKey]}</span>
    </li>
  ));

  return (
    <div className={classes.OrderSummary}>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p className={classes.Price}>
        <strong>Total price: {props.price.toFixed(2)}&#36;</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType='Close' clicked={props.purchaseCanceled}></Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        Continue
      </Button>
    </div>
  );
};

export default orderSummary;
