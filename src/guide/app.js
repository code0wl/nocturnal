import React, {Component} from "react";
import "skeleton-css/css/skeleton.css";
import "material-icons/css/material-icons.css";
import "./app.css";
import "./styles/theme.css";
import SideBar from "./components/side_bar/side_bar";
import Canvas from "./components/canvas/canvas";
import {BrowserRouter as Router} from "react-router-dom";
import {ContextControl} from "./components/context_control/context_control";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app-canvas">
                        <aside className="library-side-nav">
                            <ContextControl/>
                            <SideBar/>
                        </aside>
                        <Canvas/>
                    </div>
                </div>
            </Router>
        );
    }
}
