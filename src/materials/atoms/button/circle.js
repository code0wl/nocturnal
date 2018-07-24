import React from "react";

export class Circle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="btn-floating btn-large waves-effect waves-light btn" onClick={this.props.handleClick}> <i className="mi mi-edit"></i> </button>
        );
    }
}