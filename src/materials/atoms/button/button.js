import React from "react";

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="waves-effect waves-light btn" onClick={this.props.handleClick}> {this.props.label || "I am a Button "} </button>
        );
    }
}