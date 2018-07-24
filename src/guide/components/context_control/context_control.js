import React, { Component } from "react";

export class ContextControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alternativeTheme: false
    };
  }

  render() {
    return (
      <div className="guide-controls">
        <nav>
          <img src={this.props.logo} className="guide-logo" alt="logo" />
          <div className="menu-items">
            <a onClick={this.props.toggleFullScreen}> &#8854; </a>
            <a onClick={this.props.toggleContrast}> &#8857; </a>
          </div>
        </nav>
      </div>
    );
  }
}
