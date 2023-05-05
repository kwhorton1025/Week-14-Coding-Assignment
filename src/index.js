import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";//updated with more code
import "../node_modules/bootstrap/dist/css/bootstrap.css";//added
import "../node_modules/jquery/dist/jquery.js";//added
import App from "./App";//updated with my new code
import MovieList from "./movies.js";//added
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MovieList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
