import React from "react";
import ListItem from "./list_item";

export default ({materials, selected}) => {
    return (
        <ul>
            <ListItem selected={selected} materials={materials}/>
        </ul>
    );
}