import React from "react";
import * as components from "../../materials.json";
import {Link} from "react-router-dom";

export default () => {
    return components.map((stub, index) => {
        return (
            <Link key={index} to={stub.name + index}>
                <li>{stub.name}</li>
            </Link>
        );
    });
}