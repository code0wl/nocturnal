import React from "react";
import * as components from "../../materials.json";
import Route from "react-router-dom/es/Route";
import '../../all-components';

export default () => {
    return components.materials.map((component) => {
        Object.keys(component).map(item => {
            component[item][0].items.map((material) => {
                return (
                    <div>
                        <Route path={material.path} component={material.component}/>
                    </div>
                );
            });
        });
    });
}
