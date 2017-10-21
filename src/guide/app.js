import React, {Component} from "react";
import "./app.css";
import "./theme.css";
import SideBar from "./components/side_bar/side_bar";
import LibraryCanvas from "./components/canvas/canvas";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-canvas">
                    <aside className="library-side-nav">
                        <SideBar/>
                    </aside>
                    <LibraryCanvas/>
                </div>
            </div>
        );
    }
}
