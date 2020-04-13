import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxilar/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          tranform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          display: props.show ? 'inline' : 'none'
        }}
      >
        {props.children}
      </div>
    </Aux>
  );

}
export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);
