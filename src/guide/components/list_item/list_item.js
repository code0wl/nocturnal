import React from "react";

export default ({items}) => {
    console.log(items[0])
    return items.items.map(material => {
        return (
            <li> {material} </li>
        );
    });
}