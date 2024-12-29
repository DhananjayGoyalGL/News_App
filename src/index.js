import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./components/News";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<News newsName="bitcoin" />} />
        <Route path="/Apple" element={<News newsName="apple" />} />
        <Route path="/Tesla" element={<News newsName="tesla" />} />
        <Route path="/Bitcoin" element={<News newsName="bitcoin" />} />
        <Route path="/nasa" element={<News newsName="nasa" />} />
        <Route path="/upsc" element={<News newsName="upsc" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
