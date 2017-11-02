import React from "react";
import {Link} from "react-router-dom";

export default ({materials, select}) => {
    return materials.map((material, index) => {
        return (
            <li key={index}>
                <Link className={window.location.pathname === "/" + material.exportedComponent ? "is-selected" : ""} onClick={select} to={material.exportedComponent}>
                    {material.exportedComponent}
                    <span data-badge-caption="" className="new badge blue"> {material.type} </span>
                </Link>
            </li>
        );
    });
}