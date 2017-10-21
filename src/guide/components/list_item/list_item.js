import React from "react";

export default ({materials}) => {
    return materials.map((material, index) => {
        return (
            <li key={index}>
                <a href={`#/${material.type}`}>{material.type} </a>
            </li>
        );
    });
}