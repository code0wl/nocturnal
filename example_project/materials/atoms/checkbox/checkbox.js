import React, { Component } from "react";

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  handleChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });

    if (this.props.handleToggle) {
      this.props.handleToggle();
    }
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          className="filled-in"
          onChange={() => this.handleChange}
          id="filled-in-box"
          checked={this.state.isChecked}
        />
        <label htmlFor="filled-in-box">Filled in</label>
      </div>
    );
  }
}
