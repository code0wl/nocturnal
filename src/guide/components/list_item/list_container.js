import React from "react";
import ListItem from "./list_item";

export default ({ materials, selected }) => {
  console.log(materials);
  return (
    <ul>
      <ListItem select={selected} materials={materials} />
    </ul>
  );
};
