import React, {Component} from "react";

export default class Filter extends Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            filter: ""
        }
    }

    handleInput(e) {
        this.setState({
            filter: e.currentTarget.value
        });
    }

    render() {
        return (
            <input type="search" placeholder="Filter" onChange={this.handleInput}/>
        )
    }
}
