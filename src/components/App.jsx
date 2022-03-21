import React from "react";
import "./app.less";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Main from "./Compopents/main/Main";
import Card from "./Compopents/card/Card";
import Error from "./Compopents/Error";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/card/:username/:reponame" element={<Card/>}/>
                    <Route path="/error" element={<Error/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/error"/>}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;