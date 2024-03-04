import React from "react";
import ReactDOM from "react-dom/client";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route, link, Router } from "react-router-dom";
import Home from "./Home";
import Contact from "./Pages/Contact";

function App() {
    
    return(
      <BrowserRouter>
        <Routes>
            <Route index path="/" element = {<Home />}></Route>
            <Route path="About" element = {<About />}></Route>
            <Route path="Contact" element = {<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    )

}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);