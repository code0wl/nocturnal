import React, {Component} from "react";
import "./canvas.css";
import {Route} from "react-router-dom";
import {Button} from "../../../materials/atoms/button/Button";

export default class Canvas extends Component {
    render() {
        return (
            <main className="canvas">
                <article className="canvas-component">
                    <Route path="/button" component={Button}/>
                </article>
            </main>
        );
    }
};