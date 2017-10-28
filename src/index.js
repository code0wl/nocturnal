import React from "react";
import ReactDOM from "react-dom";
import "./guide/index.css";
import App from "./guide/app";
import config from './guide/store/config';
import registerServiceWorker from "./guide/registerServiceWorker";

const store = config();

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
