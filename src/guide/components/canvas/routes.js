import React from "react";
import "./canvas.css";
import {Route} from "react-router-dom";
import {Button} from "../../../materials/atoms/button/Button";

export default ({materials}) => {
    return materials.map((material, index) => {
        return (
            <Route key={index} path={material.type} component={Button}/>
        );
    });
}