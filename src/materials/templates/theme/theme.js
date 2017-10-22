import React, {Component} from "react";

export class Theme extends Component {
    render() {
        return (
            <div>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>

                <p>Paragraph</p>

                <table>
                    <tr>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                    </tr>
                </table>

                <blockquote>Some quote</blockquote>
            </div>
        );
    }
}