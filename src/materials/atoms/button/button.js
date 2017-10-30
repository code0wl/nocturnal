import React from "react";

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.handleClick}> {this.props.label || "I am a Button or am i not anymore?"} </button>
        );
    }
}