

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import RouteComponent from "./Component/Routes"; 
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteComponent />
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
