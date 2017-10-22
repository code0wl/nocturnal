import React from "react";

export class Button extends React.Component {
    render() {
        return (
            <button>I am a button</button>
        );
    }
}import React, {Component} from "react";

export class Checkbox extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="checkbox" value="true"/>
            </div>
        );
    }
}import React from "react";

export class Form extends React.Component {
    render() {
        return (
            <div>Hi there</div>
        );
    }
}import React from "react";

export class InputField extends React.Component {
    render() {
        return (
            <div>Hi there</div>
        );
    }
}