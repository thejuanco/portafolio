import { Route, Routes } from "react-router";
import './App.css'

//Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Certifications from "./pages/Certifications/Certifications";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/certifications" element={<Certifications/>}/>
      <Route path="/skills" element={<Certifications/>}/>
    </Routes>
  );
}

export default App;
