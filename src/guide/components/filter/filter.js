import React, {Component} from "react";
import "./filter.css";
import Input from "muicss/lib/react/input";

export default class Filter extends Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            filter: ""
        }
    }

    handleInput(e) {
        console.log(e.currentTarget.value);
        this.setState({
            filter: e.currentTarget.value
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
