import React, {Component} from "react";
import ListContainer from "../list_item/list_container";
import * as components from "../../materials.json";
import "./side_bar.css";

export default class SideBar extends Component {
    constructor() {
        super();
        this.setSelectedItem = this.setSelectedItem.bind(this);
    }

    setSelectedItem() {
        this.setState({
            selected: window.location.pathname
        });
    }

    render() {
        return components.materials.map((component) => {
            return Object.keys(component).map((material, index) => {
                const comp = component[material];
                return (
                    <div key={material + index}>
                        <h6 className="material-header-group">{material}</h6>
                        <ListContainer selected={this.setSelectedItem} materials={comp}/>
                    </div>
                );
            });
        });
    }
}