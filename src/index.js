import React from "react";
import ReactDOM from "react-dom";
import "./guide/index.css";
import App from "./guide/app";
import registerServiceWorker from "./guide/registerServiceWorker";

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
