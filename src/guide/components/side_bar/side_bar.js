import React from "react";
import ListItem from "../list_item/list_item";
import * as components from "../../materials.json";
import "./side_bar.css";

export default () => {
    return components.map((component) => {
        return (
            <div>
                <h4>{component.material}</h4>
                <ul>
                    <ListItem/>
                </ul>
            </div>
        );
    });
};