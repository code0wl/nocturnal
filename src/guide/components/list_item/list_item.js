import React from "react";
import * as components from "../../materials.json";
import {Link} from "react-router-dom";

export default () => {
    return components.map(component => {
        return component.items.map((item, index) => {
            return (
                <Link key={index} to={item}>
                    <li>{item}</li>
                </Link>
            );
        });
    });
}