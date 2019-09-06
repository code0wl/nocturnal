import React, { Component } from "react";
import { Route } from "react-router-dom";
import SiteRoutes from "../routes/routes";

export const Canvas = () => (
  <main
    style={{
      transition: "transform .4s",
      padding: "2rem",
      height: "100vh",
      overflow: "auto",
      transform: "translateX(10px)"
    }}
  >
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
