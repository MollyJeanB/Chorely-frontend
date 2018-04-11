import React from "react";

import styles from "../componentStyles/Input.css";

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }
  render() {
    const Element = this.props.element || "input";

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className={styles.formError}>{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = (
        <div className={styles.formWarning}>{this.props.meta.warning}</div>
      );
    }

    return (
      <div className="form-input">
        <label className={styles.formWarning} htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
          {warning}
        </label>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
          className={styles[this.props.styleClassName]}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
