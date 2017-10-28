import React, {Component} from "react";
import "./filter.css";
import {connect} from "react-redux";
import Input from "muicss/lib/react/input";
import {filter} from "../../actions/filter_action";

class Filter extends Component {
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
        this.props.dispatch(filter.filterValue)
    }

    render() {
        return (
            <div className="filter">
                <Input hint="Filter" onChange={this.handleInput}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        filterValue: state.filterValue
    };
}

export default connect(mapStateToProps)(Filter);