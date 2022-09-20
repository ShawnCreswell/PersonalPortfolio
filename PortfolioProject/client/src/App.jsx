import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./lux.css";
import "./App.css";
import Edit from "./views/Edit";
import Main from "./views/Main";
import New from "./views/New";
import Nav from "./views/Nav";
import Status from "./views/Status";
import StatusList from "./components/StatusList";
import Home from "./views/Home";

function App() {
  return (
    <div>
        <Nav />
      <div className="container mt-5">
        <Routes>
            <Route path='/' element={<Navigate to={"/portfolio"} /> } />
            <Route element={<Main />} path="/portfolio" />
            <Route element={<Home />} path="/home" />
            <Route element={<New />} path="/new" />
            <Route element={<Edit />} path="/portfolio/edit/:id" />
            <Route path="status" element={<Status />}>
              <Route index element={<Navigate to="1" />} />
              <Route path="1" element={<StatusList num="1" />} />
              <Route path="2" element={<StatusList num="2" />} />
              <Route path="3" element={<StatusList num="3" />} />
            </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
