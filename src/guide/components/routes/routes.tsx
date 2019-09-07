import React from "react";
import * as components from "../../materials.json";
import { Route } from "react-router-dom";
// @ts-ignore
import * as ExportedComponents from "../../../materials_index.tsx";

export default () =>
  components.materials.map((component: any) =>
    Object.keys(component).map(item =>
      component[item].map((material: any, index: any) => {
        return (
          <Route
            key={index}
            path={material.path}
            component={ExportedComponents[material.exportedComponent]}
          />
        );
      })
    )
  );
