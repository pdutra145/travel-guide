import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import "tachyons";
import Locations from "./context/Locations";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Locations>
    <App />
  </Locations>,
  document.getElementById("root")
);
registerServiceWorker();
