import React, {Component} from "react";
import Routes from "./routes";
import "./canvas.css";

export class LibraryCanvas extends Component {
    render() {
        return (
            <main className="canvas">
                <article>
                    <Routes/>
                </article>
            </main>
        )
    }
}