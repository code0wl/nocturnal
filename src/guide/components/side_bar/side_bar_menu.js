import React, {Component} from "react";
import ListContainer from "../list_item/list_container";
import "./side_bar.css";

export default class SideBarMenu extends Component {
    constructor(props) {
        super(props);
        this.setSelectedItem = this.setSelectedItem.bind(this);
    }

    setSelectedItem() {
        this.setState({
            selected: window.location.pathname
        });
    }

    render() {
        return this.props.components.map((component) => {
            return Object.keys(component).map((material, index) => {
                return (
                    <div key={material + index}>
                        {material.length > 1 ? <h6 style={{fontSize: "16px", margin: "0", padding: "3rem 1rem 1rem 1rem", borderBottom: "1px solid", textTransform: "capitalize", color: "#4a525e"}}>{material} <span style={{float: "right", color: "#999"}}>{component[material].length}</span></h6> : ""}
                        <ListContainer selected={this.setSelectedItem} materials={component[material]}/>
                    </div>
                );
            });
        });
    }
}
