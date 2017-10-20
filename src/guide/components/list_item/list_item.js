import React from "react";
import * as components from "../../materials.json";
import Link from "react-router-dom/es/Link";

export default () => {
    return components.materials.map(component => {
        const objs = Object.keys(component);
        return objs.map((material) => {
            return component[material].map((item) => {
                return item.items.map((prop, index) => {
                    return (
                        <Link key={index} to={prop.material + "-" + item}>
                            <li key={prop+index}>{prop}</li>
                        </Link>
                    );
                })
            });
        })

    });
}