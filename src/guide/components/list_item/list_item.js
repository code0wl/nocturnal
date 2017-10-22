import React from "react";
import {Link} from "react-router-dom";

export default ({materials}) => {
    return materials.map((material, index, selected) => {
        return (
            <li key={index}>
                <Link selected={selected} to={material.type}>{material.type} </Link>
            </li>
        );
    });
}