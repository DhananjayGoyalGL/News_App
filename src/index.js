import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./news";
import Nav from "./nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
