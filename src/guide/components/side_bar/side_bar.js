import React, {Component} from "react";
import ListContainer from "../list_item/list_container";
import * as components from "../../materials.json";
import "./side_bar.css";

export class SideBar extends Component {
    constructor() {
        super();
        this.setSelectedComponent = this.setSelectedComponent.bind(this);
    }

    setSelectedComponent() {
        console.log("hello from sidebar");
    }

    render() {
        return components.materials.map((component) => {
            return Object.keys(component).map((material, index) => {
                const comp = component[material];
                return (
                    <div key={material + index}>
                        <h4>{material}</h4>
                        <ListContainer onClick={this.setSelectedComponent} materials={comp}/>
                    </div>
                );
            });
        });
    }
}