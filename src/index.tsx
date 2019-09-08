import React from "react";
import { render } from "react-dom";
import { App } from "./guide/app";
import registerServiceWorker from "./guide/registerServiceWorker";

const target = document.getElementById("root");

render(<App />, target);

registerServiceWorker();
