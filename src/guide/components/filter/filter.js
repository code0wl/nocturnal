import React, {Component} from "react";
import "./filter.css";
import Input from "muicss/lib/react/input";

export default class Filter extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            filterValue: ""
        };
    }

    handleInput(e) {
        this.setState({
            filterValue: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="filter">
                <Input hint="Input 2" defaultValue="Value on load" onChange={this.handleInput}/>
            </div>
        )
    }
}
