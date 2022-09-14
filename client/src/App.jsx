import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./lux.css";
import Edit from "./views/Edit";
import Main from "./views/Main";
import New from "./views/New";
import Nav from "./views/Nav";
// import Status from "./views/Status";
import Tabs from "./views/Tabs";

function App() {
  return (
    <div className="container">
    <Nav />
      <Routes>
          <Route path='/' element={<Navigate to={"/team"} /> } /> 
          <Route element={<Main />} path="/team" />
          <Route element={<Tabs />} path="/team/1" />
          <Route element={<New />} path="/new" />
          <Route element={<Edit />} path="/team/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
