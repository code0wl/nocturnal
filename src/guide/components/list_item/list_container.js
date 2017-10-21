import React from "react";
import ListItem from "./list_item";

export default ({items}) => {
    return (
        <ul>
            <ListItem items={items}/>
        </ul>
    )
}