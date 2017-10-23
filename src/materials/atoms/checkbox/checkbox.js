import React, {Component} from "react";

export class Checkbox extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="checkbox" onClick={this.props.handleToggle} value={this.props.toggle}/>
            </div>
        );
    }
}