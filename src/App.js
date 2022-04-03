import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import Logout from "./Pages/Logout";

const App=() => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" >
        <Route path="/" element={<Home />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Logout" element={<Logout />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
