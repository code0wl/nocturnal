import React from "react";
import { Link } from "react-router-dom";

export default ({ materials, select }) => {
  return materials.map((material, index) => {
    return (
      <li key={index}>
        <Link
          className={
            window.location.pathname ===
            "/" + material.exportedComponent.toLowerCase()
              ? "is-selected"
              : ""
          }
          onClick={select}
          to={"/" + material.exportedComponent.toLowerCase()}
        >
          <span>{material.exportedComponent}</span>
          <span
            style={{
              float: "right",
              fontSize: ".8rem",
              padding: "4px",
              background: "rebeccapurple",
              borderRadius: "5px",
              margin: "-2px"
            }}
          >
            {material.type}
          </span>
        </Link>
      </li>
    );
  });
};
