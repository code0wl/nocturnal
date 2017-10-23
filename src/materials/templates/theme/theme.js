import React, {Component} from "react";

export class Theme extends Component {
    render() {
        return (
            <div>
                <article className="canvas-component">
                    <h3>Headers </h3>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>
                </article>

                <article className="canvas-component">
                    <h3>Paragraph</h3>
                    <p>Paragraph</p>
                </article>

                <article className="canvas-component">
                    <h3>Table</h3>
                    <table class="u-full-width">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Dave Gamache</td>
                            <td>26</td>
                            <td>Male</td>
                            <td>San Francisco</td>
                        </tr>
                        <tr>
                            <td>Dwayne Johnson</td>
                            <td>42</td>
                            <td>Male</td>
                            <td>Hayward</td>
                        </tr>
                        </tbody>
                    </table>
                </article>

                <article className="canvas-component">
                    <h3>Block quotes</h3>
                    <blockquote>Some quote</blockquote>
                </article>

                <article className="canvas-component">
                    <h3>Lists</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>
                            Item 2
                            <ul>
                                <li>Item 2.1</li>
                                <li>Item 2.2</li>
                            </ul>
                        </li>
                        <li>Item 3</li>
                    </ul>
                </article>
            </div>
        );
    }
}