import React, {Component} from "react";

export class Checkbox extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            isChecked: false
        };
    }

    handleChange() {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    render() {
        return (
            <div>
                <input type="checkbox" className="filled-in" onChange={this.handleChange} id="filled-in-box" checked={this.state.isChecked}/>
                <label htmlFor="filled-in-box">Filled in</label>
            </div>
        );
    }
}