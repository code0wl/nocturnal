import React from "react";
import {Link} from "react-router-dom";

export default ({materials}) => {
    return materials.map((material, index) => {
        return (
            <li key={index}>
                <Link to={material.type}>{material.type} </Link>
            </li>
        );
    });
}