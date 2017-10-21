import React from 'react';
import {Button} from "../../../materials/atoms/button/Button";
import {Checkbox} from "../../../materials/atoms/checkbox/Checkbox";
import {Route} from "react-router-dom";

export default () => {
    return (
        <div>
            <Route path="/button" component={Button}/>
            <Route path="/checkbox" component={Checkbox}/>
        </div>
    );
}
