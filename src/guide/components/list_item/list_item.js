import React from "react";

export default ({items}) => {
    return items.items.map(material => {
        return (
            <li> {material} </li>
        );
    });
}