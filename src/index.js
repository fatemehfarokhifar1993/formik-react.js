import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
//ReactDOM.render(<App/>,document.getElementById("root"))
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);