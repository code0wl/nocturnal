import React from "react";
import ListContainer from "../list_item/list_container";
import * as components from "../../materials.json";
import "./side_bar.css";

export default () => {
    return components.materials.map((component) => {
        return Object.keys(component).map((material, index) => {
            const comp = component[material];
            return (
                <div>
                    <h4 key={material + index}>{material}</h4>
                    <ListContainer key={material} materials={comp}/>
                </div>
            );
        });
    });
};