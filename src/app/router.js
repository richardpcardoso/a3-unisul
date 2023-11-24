
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rota from "./rota/Rota";
import Home from "./home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="rota" element={<Rota />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
