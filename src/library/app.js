import React, {Component} from "react";
import "./app.css";
import "mini.css";
import {LibrarySideBar} from "./components/side_bar/side_bar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <LibrarySideBar/>
            </div>
        );
    }
}

export default App;
