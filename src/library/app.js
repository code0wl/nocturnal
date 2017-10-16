import React, {Component} from "react";
import "mini.css";
import "./app.css";
import {LibrarySideBar} from "./components/side_bar/side_bar";
import {HeaderNav} from "./components/header/header";

class App extends Component {
    render() {
        return (
            <div className="app">
                <HeaderNav/>
                <LibrarySideBar/>
            </div>
        );
    }
}

export default App;
