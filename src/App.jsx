import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Layout from "./components/layout/index";

function App() {
  return (
    <Routes>
      {/* i cant work with tailwind-Scroll snapping and Route*/}
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;

// fullpage.js is my goal
// mantine carousel doesn't have yet scroll listener... so lets wait
