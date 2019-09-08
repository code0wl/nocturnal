import React, { useState } from "react";
import "./app.scss";
import * as logo from "./assets/logo.png";
import "./styles/theme.scss";
import { SideBarMenu } from "./components/side_bar/SideBarMenu";
import { Canvas } from "./components/canvas/canvas";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextControl } from "./components/context_control/context_control";
import { Filter } from "./components/filter/filter";
import * as components from "./materials.json";

export const App = () => {
  const [isSelected, setSelected] = useState(
    window.location.pathname.replace("/", "")
  );
  const [alternative, setAlternative] = useState(
    window.localStorage.getItem("theme") === "true"
  );
  const [filterValue, setFilterValue] = useState("");
  const [component, setComponents] = useState(components.materials);
  const [isFullScreen, setFullScreen] = useState(
    window.localStorage.getItem("fullScreen") === "true"
  );

  const toggleContrast = () => {
    setAlternative(!alternative);
    window.localStorage.setItem("theme", !alternative + "");
  };

  const handleFilter = (e: any) => {
    const filteredComponents = components.materials.map((component: any) =>
      Object.keys(component).map((c: any) => {
        return component[c].filter((comp: any) => {
          const search = e.currentTarget.value.toLowerCase();
          return (
            comp.exportedComponent.toLowerCase().includes(search) ||
            comp.type.includes(search)
          );
        });
      })
    );

    setFilterValue(e.currentTarget.value.toLowerCase());

    setComponents(
      e.currentTarget.value !== ""
        ? filteredComponents
        : (components.materials as any)
    );
  };

  const toggleFullScreen = () => {
    setFullScreen(!isFullScreen);
    window.localStorage.setItem("fullScreen", !isFullScreen as any);
  };

  return (
    <Router>
      <div
        className={`nocturnal-app ${
          window.localStorage.getItem("theme") === "true"
            ? "light-contrast"
            : ""
        }`}
      >
        <a className="toggle-screen-stand-alone" onClick={toggleFullScreen}>
          &#8853;
        </a>
        <aside className="library-side-nav guide-aside">
          <ContextControl
            toggleFullScreen={toggleFullScreen}
            logo={logo}
            toggleContrast={toggleContrast}
          />
          <Filter change={handleFilter} />
          <SideBarMenu components={components} />
        </aside>
        <Canvas selected={isSelected} />
      </div>
    </Router>
  );
};
