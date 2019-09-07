import React from "react";
import ListItem from "./list_item";

export default ({ materials, selected }) => (
  <ul>
    <ListItem select={selected} materials={materials} />
  </ul>
);
