import React from "react";
import * as components from "../../materials.json";
import Route from "react-router-dom/es/Route";

export default () => {
    return components.materials.map((component) => {
        Object.keys(component).map(item => {
            component[item].map((material) => {
                console.log("material", material.component);
                return (
                    <Route path={material.path} component={material.component}/>
                );
            });
        });
    });
}
