import React from "react";
import ListContainer from "../list_item/list_container";
import "./side_bar.scss";

export const SideBarMenu = ({ components, select }: any) =>
  components.map((component: any) =>
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
        <ListContainer selected={select} materials={component[material]} />
      </div>
    ))
  );
