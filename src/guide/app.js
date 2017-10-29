import React, {Component} from "react";
import "material-icons/css/material-icons.css";
import "./app.css";
import "materialize-css/dist/css/materialize.min.css";
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
        this.store = store;
        this.toggleContrast = this.toggleContrast.bind(this);
        this.state = {
            isAlternative: window.localStorage.getItem("theme") === "true" ? true : false,
            filterValue: "",
            components
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
        const criteria = e.currentTarget.value.toLowerCase();

        const filteredComponents = components.materials.filter((component) => {
            return Object.keys(component).map((c, i) => {
                return component[c].map((comp) => {
                    comp.type.includes(criteria);
                });
            });
        });

        console.log(filteredComponents);

        this.setState({
            filterValue: e.currentTarget.value.toLowerCase(),
            components: this.state.filterValue  ? filteredComponents : components
        });
    }

    render() {
        return (
            <Router>
                <div className={`app ${window.localStorage.getItem("theme") === "true" ? "light-contrast" : ""}`}>
                    <div className="app-canvas">
                        <aside className="library-side-nav">
                            <ContextControl toggleContrast={this.toggleContrast}/>
                            <Filter change={this.handleFilter}/>
                            <SideBarMenu components={this.state.components.materials}/>
                        </aside>
                        <Canvas/>
                    </div>
                </div>
            </Router>
        );
    }
}