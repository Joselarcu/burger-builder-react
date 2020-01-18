import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxilar/Auxiliar";
import Backdrop from "../Backdrop/Backdrop";
class modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate(){
    console.log('[Modal will update]');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            tranform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            display: this.props.show ? "inline" : "none"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default modal;
