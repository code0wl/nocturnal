import React from "react";
import ListContainer from "../list_item/list_container";
import * as components from "../../materials.json";
import "./side_bar.css";

export default () => {
    return components.materials.map((component) => {
        return Object.keys(component).map((material) => {
            return component[material].map((materials) => {
                return (
                    <div>
                        <h4>{material}</h4>
                        <ListContainer items={materials}/>
                    </div>
                );
            });
        });
    });
};