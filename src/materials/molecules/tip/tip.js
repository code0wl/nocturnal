import React from "react";
import "./tip.css";
import {Checkbox} from "../../atoms/checkbox/checkbox";

export class Tip extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTip = this.toggleTip.bind(this);
        this.state = {
            display: false
        }
    }

    toggleTip() {
        this.setState({
            display: !this.state.display
        });

        console.log('clicked')
    }

    render() {
        return (
            <div>
                <Checkbox handleToggle={this.toggleTip}/>
                <div className={`component-tooltip ${this.state.display ? "is-showing" : ""}`}>
                    Tooltip content
                </div>
            </div>
        );
    }
}