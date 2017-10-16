import React, {Component} from "react";
import "./canvas.css";
import {Route} from "react-router-dom";
import ComponentViewer from './component_viewer';

export class LibraryCanvas extends Component {
    render() {
        return (
            <main className="canvas">
                <article>
                    <Route path='/componentName' component={ComponentViewer}/>
                </article>
            </main>
        )
    }
}