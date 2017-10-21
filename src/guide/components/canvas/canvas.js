import React from "react";
import Routes from "./routes";
import * as components from "../../materials.json";
import "./canvas.css";

export default () => {
    return (
        <main className="canvas">
            <article>
                <Routes materials={components.materials}/>
            </article>
        </main>
    )
};