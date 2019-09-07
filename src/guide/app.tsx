import React, { Component } from "react";
import "./app.scss";
import * as logo from "./assets/logo.png";
import "./styles/theme.scss";
import SideBarMenu from "./components/side_bar/SideBarMenu";
import { Canvas } from "./components/canvas/canvas";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextControl } from "./components/context_control/context_control";
import { Filter } from "./components/filter/filter";
import * as components from "./materials.json";

export default class App extends Component {
  state: any;
  constructor(props: any, store: any) {
    super(props, store);
    this.state = {
      selected: window.location.pathname.replace("/", ""),
      isAlternative: window.localStorage.getItem("theme") === "true",
      filterValue: "",
      components: components.materials,
      fullScreen: window.localStorage.getItem("fullScreen") === "true"
    };
  }

  toggleContrast = () => {
    this.setState({
      isAlternative: !this.state.isAlternative
    });
    window.localStorage.setItem("theme", !this.state.isAlternative + "");
  };

  handleFilter = (e: any) => {
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

    this.setState({
      filterValue: e.currentTarget.value.toLowerCase(),
      components:
        e.currentTarget.value !== "" ? filteredComponents : components.materials
    });
  };

  toggleFullScreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
    window.localStorage.setItem("fullScreen", !this.state.fullScreen as any);
  };

  render() {
    return (
      <Router>
        <div
          className={`app ${
            window.localStorage.getItem("theme") === "true"
              ? "light-contrast"
              : ""
          }`}
        >
          <a
            className="toggle-screen-stand-alone"
            onClick={this.toggleFullScreen}
          >
            &#8853;
          </a>
          <aside className="library-side-nav guide-aside">
            <ContextControl
              toggleFullScreen={this.toggleFullScreen}
              logo={logo}
              toggleContrast={this.toggleContrast}
            />
            <Filter change={this.handleFilter} />
            <SideBarMenu components={this.state.components} />
          </aside>
          <Canvas selected={this.state.selected} />
        </div>
      </Router>
    );
  }
}
