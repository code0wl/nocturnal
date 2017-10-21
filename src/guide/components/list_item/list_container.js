import React from "react";
import ListItem from "./list_item";

export default ({items}) => {
    return items.items.map(material => {
        return (
            <ul key={material}>
                <ListItem key={items} item={material}/>
            </ul>
        );
    });
}