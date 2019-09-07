import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import * as components from "../../materials.json";
// @ts-ignore
import * as ExportedComponents from "../../../materials_index.tsx";

interface Props {
  selected: string;
}

export const Canvas: React.FC<Props> = ({ selected }) => {
  return (
    <main className="guide-main">
      <article>
        <h3
          style={{
            color: "#606e7f",
            textTransform: "capitalize",
            margin: "0",
            paddingBottom: "5rem"
          }}
        >
          {selected}
        </h3>

        {components.materials.map((component: any) => {
          return Object.keys(component).map((item: any) =>
            component[item].map((material: any, index: any) => {
              return (
                <Route
                  key={index}
                  exact={true}
                  path={"/" + material.exportedComponent.toLowerCase()}
                  component={ExportedComponents[material.exportedComponent]}
                />
              );
            })
          );
        })}
      </article>
    </main>
  );
};
