import React, {Component} from "react";
import "mini.css";
import "./app.css";
import SideBar from "./components/side_bar/side_bar";
import {LibraryCanvas} from "./components/canvas/canvas";
import {HashRouter} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="app">
                    <div className="app-canvas">
                        <aside className="library-side-nav">
                            <SideBar/>
                        </aside>
                        <LibraryCanvas/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
