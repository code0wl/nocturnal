import React, {Component} from "react";

export class Checkbox extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="checkbox" value="true"/>
            </div>
        );
    }
}