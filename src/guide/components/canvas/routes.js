import React from "react";
import "./canvas.css";
import {Route} from "react-router-dom";
import ComponentViewer from "./component_viewer";

export default () => {
    return (
        <Route path='/button' component={ComponentViewer}/>
    );
}