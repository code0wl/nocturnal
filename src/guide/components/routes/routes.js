import React from "react";
import * as components from "../../materials.json";
import Route from "react-router-dom/es/Route";
import * as Components from "../../../materials_index";

export default () => {
    return components.materials.map((component) => {
        return Object.keys(component).map(item => {
            return component[item].map((material, index) => {
                return (
                    <Route key={index} path={material.path} component={Components[material.component]}/>
                );
            });
        });
    });
}
