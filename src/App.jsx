import { Route, Routes } from "react-router";
import './App.css'

//Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Certifications from "./pages/Certifications/Certifications";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/certifications" element={<Certifications/>}/>
      <Route path="/skills" element={<Skills/>}/>
    </Routes>
  );
}

export default App;
