import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Calculation from "./pages/Calculation/Calculation";
import Questions from "./pages/Questions/Questions";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Pulse from "./components/Pulse/Pulse";
import Politic from "./pages/Politic/Politic";
import Footer from "./components/Footer/Footer";
import Important from "./pages/Important/Important";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Pulse/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/calculation" element={<Calculation/>}/>
            <Route path="/questions" element={<Questions/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/politic" element={<Politic/>}/>
            <Route path="/important" element={<Important/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
