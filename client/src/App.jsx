import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./lux.css";
import Edit from "./views/Edit";
import Main from "./views/Main";
import New from "./views/New";
import Nav from "./views/Nav";

function App() {
  return (
    <div className="container">
    <Nav />
      <Routes>
          <Route path='/' element={<Navigate to={"/author"} /> } /> 
          <Route element={<Main />} path="/author" />
          <Route element={<New />} path="/new" />
          <Route element={<Edit />} path="/author/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
