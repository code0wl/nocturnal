import React from "react";
import { Route } from "react-router-dom";
import SiteRoutes from "../routes/routes";

export const Canvas = () => (
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
        {" "}
        {window.location.pathname.replace("/", "")}{" "}
      </h3>
      <Route component={SiteRoutes as any} />
    </article>
  </main>
);
