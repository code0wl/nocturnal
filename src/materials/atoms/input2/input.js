import React from "react";

export class Input extends React.Component {
    render() {
        return (
            <div class="input-field col s6">
                <input id="last_name" type="text" class="validate"/>
                <label for="last_name">Last Name</label>
            </div>
        );
    }
}