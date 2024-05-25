import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import App24 from "./Axios/App24";
import App25 from "./Fake-server-Axios/App25";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* run this for basic CRUD */}
        {/* <App /> */}

        {/* run this for axios CRUD*/}
        {/* <App24 /> */}

        {/* run this for fake-server with axios CRUD */}
        <App25/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
