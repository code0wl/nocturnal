import React, {Component} from "react";
import "material-icons/css/material-icons.css";
import "materialize-css/dist/css/materialize.min.css";
import "./app.css";
import * as logo from "./assets/logo.png";
import "./styles/theme.css";
import SideBarMenu from "./components/side_bar/side_bar_menu";
import Canvas from "./components/canvas/canvas";
import {BrowserRouter as Router} from "react-router-dom";
import {ContextControl} from "./components/context_control/context_control";
import Filter from "./components/filter/filter";
import * as components from "./materials.json";

export default class App extends Component {

    constructor(props, store) {
        super(props, store);
        this.toggleContrast = this.toggleContrast.bind(this);
        this.toggleFullScreen = this.toggleFullScreen.bind(this);
        this.state = {
            isAlternative: window.localStorage.getItem("theme") === "true" ? true : false,
            filterValue: "",
            components: components.materials,
            fullScreen: window.localStorage.getItem("fullScreen") === "true" ? true : false
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    toggleContrast() {
        this.setState({
            isAlternative: !this.state.isAlternative
        });
        window.localStorage.setItem("theme", !this.state.isAlternative);
    }

    handleFilter(e) {
        const filteredComponents = components.materials.map((component) => {
            return Object.keys(component).map(c => {
                return component[c].filter(comp => {
                    return comp.type.includes(e.currentTarget.value.toLowerCase());
                });
            });
        });

        this.setState({
            filterValue: e.currentTarget.value.toLowerCase(),
            components: e.currentTarget.value !== "" ? filteredComponents : components.materials,
        });
    }

    toggleFullScreen() {
        this.setState({
            fullScreen: !this.state.fullScreen
        });
        window.localStorage.setItem("fullScreen", !this.state.fullScreen);
    }

    render() {
        return (
            <Router>
                <div className={`app ${window.localStorage.getItem("theme") === "true" ? "light-contrast" : ""}`}>
                    <div className="app-canvas">
                        <aside className={`library-side-nav ${this.state.fullScreen ? 'fullscreen' : ''}`}>
                            <ContextControl toggleFullScreen={this.toggleFullScreen} logo={logo} toggleContrast={this.toggleContrast}/>
                            <Filter change={this.handleFilter}/>
                            <SideBarMenu components={this.state.components}/>
                        </aside>
                        <Canvas/>
                    </div>
                </div>
            </Router>
        );
    }
}