import React from "react";
import ListItem from "./list_item";

export default ({materials}) => {
    return (
        <ul>
            <ListItem materials={materials}/>
        </ul>
    );
}