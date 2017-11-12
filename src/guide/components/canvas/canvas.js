import React, {Component} from "react";
import "./canvas.css";
import {Route} from "react-router-dom";
import SiteRoutes from "../routes/routes";

export default class Canvas extends Component {
    render() {
        return (
            <main style={{order: '3', transition: 'transform .4s', padding: '2rem', flexGrow: '1', height: '100vh', overflow: 'auto', transform: 'translateX(10px)'}}>
                <article className="canvas-component">
                    <h3 className="component-title"> {window.location.pathname.replace("/", "")} </h3>
                    <Route component={SiteRoutes}/>
                </article>
            </main>
        );
    }
}