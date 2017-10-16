import React from "react";
import {stubs} from "./stub";
import {Link} from "react-router-dom";

export default () => {
    return stubs.map((stub, index) => {
        return (
            <Link key={index} to={stub.replace(" ", "")+index}>
                <li>{stub+index}</li>
            </Link>
        );
    });
}