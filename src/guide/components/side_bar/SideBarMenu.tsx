import React, { useState } from "react";
import ListContainer from "../list_item/list_container";
import "./side_bar.scss";

export const SideBarMenu = ({ components }: any) => {
  const [selected, setSelect] = useState("");

  const setSelectedItem = () => {
    setSelect(window.location.pathname);
  };

  return components.map((component: any) =>
    Object.keys(component).map((material, index) => (
      <div key={material + index}>
        {material.length > 1 ? (
          <h6>
            {material}
            <span style={{ float: "right", color: "#999" }}>
              {component[material].length}
            </span>
          </h6>
        ) : (
          ""
        )}
        <ListContainer
          selected={setSelectedItem}
          materials={component[material]}
        />
      </div>
    ))
  );
};
