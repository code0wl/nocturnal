import React from "react";

export class Circle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="waves-effect waves-light btn" onClick={this.props.handleClick}> {this.props.label || "I am a Button "} </button>
        );
    }
}