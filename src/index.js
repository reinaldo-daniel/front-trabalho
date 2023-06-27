import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App';
import Home from "./pages/Home"
import Anime from "./pages/Anime"
import Pesquisa from "./pages/Pesquisa"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="anime/:id" element={<Anime />} />
          <Route path="pesquisa" element={<Pesquisa />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);