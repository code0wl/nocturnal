import React from "react";
import ListItem from "../list_item/list_item";
import * as components from "../../materials.json";
import "./side_bar.css";

export default () => {
    return components.materials.map((component) => {
        const objs = Object.keys(component);
        return objs.map((material) => {
            return component[material].map((item) => {
                return (
                    <div>
                        <h4>{material}</h4>
                        <ul>
                            <ListItem items={item}/>
                        </ul>
                    </div>
                );
            });
        });
    });
};