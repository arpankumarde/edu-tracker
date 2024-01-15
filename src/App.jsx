import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { EachBlog, Home, NotFound } from "./screens";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/blog/:blogid" element={<EachBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
};

export default App;
