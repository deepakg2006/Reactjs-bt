// import { createRoot } from "react-dom/client";
// import "./index.css";
// import './Navbar.css'
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import App from "./App.jsx";
// import Example from "./Example.jsx";
// import Test from "./Test.jsx";
// import Navbar from "./Navbar.jsx";
// import UseEff from "./UseEff.jsx";
// import Fact from "./Fact.jsx";

// createRoot(document.getElementById("root")).render(

//   <BrowserRouter>
//    <Navbar/>
//    <UseEff/>
//    <Fact/>
//     <Routes>

//       <Route path="/" element={<Navigate to="/product" />} />

//       <Route path="/product" element={<App />} />

//       <Route path="/example" element={<Example />} />

//       <Route path="/test" element={<Test />} />

//       <Route path = "/fact" element = {<Fact/>} />

//     </Routes>

//   </BrowserRouter>

// );

import { createRoot } from "react-dom/client";
import "./index.css";
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Example from "./Example";
import Test from "./Test";
import Navbar from "./Navbar";
import UseEff from "./UseEff";
import Fact from "./Fact";
import ProductDetail from "./ProductDetails";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <Navbar />

    <Routes>

      <Route path="/" element={<Navigate to="/product" />} />

      <Route path="/product" element={<App />} />

      <Route path="/example" element={<Example />} />

      <Route path="/test" element={<Test />} />

      <Route path="/useeffect" element={<UseEff />} />

      <Route path="/fact" element={<Fact />} />

      <Route path="/product/:id" element={<ProductDetail />} />

    </Routes>

  </BrowserRouter>
);