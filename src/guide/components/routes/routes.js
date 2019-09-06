import React from "react";
import * as components from "../../materials.json";
import Route from "react-router-dom/es/Route";
import * as Components from "../../../materials_index";

export default () =>
  components.materials.map(component =>
    Object.keys(component).map(item =>
      component[item].map((material, index) => (
        <Route
          key={index}
          path={material.path}
          component={Components[material.exportedComponent]}
        />
      ))
    )
  );
