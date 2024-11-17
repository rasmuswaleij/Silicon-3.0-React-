import React, { useContext, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { DarkModeContext } from "./components/context/DarkModeProvider";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div data-theme={!darkMode ? "dark" : "light"}>
        <BrowserRouter>
          <Header />
          <main className="bg-neutral-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
