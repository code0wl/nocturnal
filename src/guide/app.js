import React, {Component} from "react";
import "./app.css";
import "./styles/theme.css";
import SideBar from "./components/side_bar/side_bar";
import Canvas from "./components/canvas/canvas";
import {BrowserRouter as Router} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app-canvas">
                        <aside className="library-side-nav">
                            <SideBar/>
                        </aside>
                        <Canvas/>
                    </div>
                </div>
            </Router>
        );
    }
}
