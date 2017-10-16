import React from "react";
import {stubs} from "./stub";

export default () => {
    return stubs.map((stub, index) => {
        return (
            <li key={index}>{stub}</li>
        );
    });
}