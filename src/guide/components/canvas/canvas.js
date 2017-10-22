import React, {Component} from "react";
import "./canvas.css";
import {Route} from "react-router-dom";
import SiteRoutes from "../routes/routes";
import Code from "../code/code";

export default class Canvas extends Component {
    render() {
        return (
            <main className="canvas">
                <article className="canvas-component">
                    <h3> {window.location.pathname.replace("/", "")} </h3>
                    <Route component={SiteRoutes}/>
                </article>
                <article>
                    <Code content="hello" selected={SiteRoutes} />
                </article>
            </main>
        );
    }
}