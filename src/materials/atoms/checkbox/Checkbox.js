import React from 'react';
import {Component} from "react/cjs/react.production.min";

export class Checkbox extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="checkbox" value="true"/>
            </div>
        );
    }
};