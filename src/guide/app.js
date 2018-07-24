import React, { Component } from "react";
import "./app.css";
import * as logo from "./assets/logo.png";
import "./styles/theme.css";
import SideBarMenu from "./components/side_bar/side_bar_menu";
import Canvas from "./components/canvas/canvas";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextControl } from "./components/context_control/context_control";
import Filter from "./components/filter/filter";
import * as components from "./materials.json";

export default class App extends Component {
  constructor(props, store) {
    super(props, store);
    this.state = {
      isAlternative:
        window.localStorage.getItem("theme") === "true" ? true : false,
      filterValue: "",
      components: components.materials,
      fullScreen:
        window.localStorage.getItem("fullScreen") === "true" ? true : false
    };
  }

  toggleContrast = () => {
    this.setState({
      isAlternative: !this.state.isAlternative
    });
    window.localStorage.setItem("theme", !this.state.isAlternative);
  };

  handleFilter = e => {
    const filteredComponents = components.materials.map(component => {
      return Object.keys(component).map(c => {
        return component[c].filter(comp => {
          const search = e.currentTarget.value.toLowerCase();
          return (
            comp.exportedComponent.toLowerCase().includes(search) ||
            comp.type.includes(search)
          );
        });
      });
    });

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
    window.localStorage.setItem("fullScreen", !this.state.fullScreen);
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
          <div
            className={`app-canvas ${
              this.state.fullScreen ? "fullscreen" : ""
            }`}
          >
            <a
              className="toggle-screen-stand-alone"
              onClick={this.toggleFullScreen}
            >
              &#62;
            </a>
            <aside className="library-side-nav">
              <ContextControl
                toggleFullScreen={this.toggleFullScreen}
                logo={logo}
                toggleContrast={this.toggleContrast}
              />
              <Filter change={this.handleFilter} />
              <SideBarMenu components={this.state.components} />
            </aside>
            <Canvas />
          </div>
        </div>
      </Router>
    );
  }
}
