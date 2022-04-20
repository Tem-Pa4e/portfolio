import './App.css';
import {Header} from "./component/header/Header";
import {Content} from "./component/content/Content";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
