import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.show !== nextProps.show) {
      return true;
    }

    if (this.props.children !== nextProps.children) {
      return true;
    }

    return false;
  }

  render() {
    const show = this.props.show ? classes.Show : null;

    return (
      <Aux>
        <Backdrop show={this.props.show} hide={this.props.modalClosed} />
        <div className={`${classes.Modal} ${show}`}>{this.props.children}</div>
      </Aux>
    );
  }
}

export default Modal;
