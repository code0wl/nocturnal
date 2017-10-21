import React from "react";
import "./canvas.css";
import {Button} from '../../../materials/atoms/button/Button';
import {Checkbox} from '../../../materials/atoms/checkbox/Checkbox';

export default () => {
    return (
        <main className="canvas">
            <article className="canvas-component">
                <h3>Button</h3>
                <Button/>
            </article>
            <article className="canvas-component">
                <h3>Checkbox</h3>
                <Checkbox />
            </article>
        </main>
    )
};