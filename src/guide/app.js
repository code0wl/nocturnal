import React, {Component} from "react";
import "material-icons/css/material-icons.css";
import "./app.css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/theme.css";
import SideBar from "./components/side_bar/side_bar";
import Canvas from "./components/canvas/canvas";
import {BrowserRouter as Router} from "react-router-dom";
import {ContextControl} from "./components/context_control/context_control";
import Filter from "./components/filter/filter";

export default class App extends Component {

    constructor(props, store) {
        super(props, store);
        this.store = store;
        this.toggleContrast = this.toggleContrast.bind(this);
        this.state = {
            isAlternative: window.localStorage.getItem("theme") === "true" ? true : false
        };
    }

    toggleContrast() {
        this.setState({
            isAlternative: !this.state.isAlternative
        });
        window.localStorage.setItem("theme", !this.state.isAlternative);
        console.log(this.store)
    }

    render() {
        return (
            <Router >
                <div className={`app ${window.localStorage.getItem("theme") === "true" ? "light-contrast" : ""}`}>
                    <div className="app-canvas">
                        <aside className="library-side-nav">
                            <ContextControl toggleContrast={this.toggleContrast}/>
                            <Filter/>
                            <SideBar/>
                        </aside>
                        <Canvas/>
                    </div>
                </div>
            </Router>
        );
    }
}
