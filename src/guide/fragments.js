import React, {Component} from "react";

class Button extends React.Component {
    render() {
        return (
            <button>I am a button</button>
        );
    }
}

class Checkbox extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="checkbox" value="true"/>
            </div>
        );
    }
}

class InputField extends React.Component {
    render() {
        return (
            <div>Hi there</div>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <div>Hi there</div>
        );
    }
}