import React from "react";
import * as components from "../../materials.json";
import "./side_bar.css";
import ListContainer from "../list_item/list_container";

export default () => {
    return components.materials.map((component) => {
        const objs = Object.keys(component);
        return objs.map((material) => {
            return component[material].map((item) => {
                return (
                    <div>
                        <h4>metarial</h4>
                        <ListContainer items={item}/>
                    </div>
                );
            });
        });
    });
};