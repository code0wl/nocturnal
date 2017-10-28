import React, {Component} from "react";
import "skeleton-css/css/skeleton.css";
import "material-icons/css/material-icons.css";
import "./app.css";
import "./styles/theme.css";
import SideBar from "./components/side_bar/side_bar";
import Canvas from "./components/canvas/canvas";
import {BrowserRouter as Router} from "react-router-dom";
import {ContextControl} from "./components/context_control/context_control";
import Filter from "./components/filter/filter";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.toggleContrast = this.toggleContrast.bind(this);
        this.state = {
            isAlternative: window.localStorage.getItem("theme") === "true" ? true : false
        }
    }

    toggleContrast() {
        this.setState({
            isAlternative: !this.state.isAlternative
        });
        window.localStorage.setItem("theme", !this.state.isAlternative);
    }

    render() {
        return (
            <Router>
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
