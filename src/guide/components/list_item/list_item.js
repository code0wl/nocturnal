import React from "react";
import {Link} from "react-router-dom";

export default ({materials, select}) => {
    return materials.map((material, index) => {
        return (
            <li key={index}>
                <Link className={window.location.pathname === "/" + material.type ? "is-selected" : ""} onClick={select} to={material.type}> {material.type} </Link>
            </li>
        );
    });
}