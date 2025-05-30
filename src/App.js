import React, {useEffect, useContext} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {Route, Routes, useLocation} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Legal from "./pages/Legal/Legal";
import Calculation from "./pages/Calculation/Calculation";
import Questions from "./pages/Questions/Questions";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Pulse from "./components/Pulse/Pulse";
import Politic from "./pages/Politic/Politic";
import Footer from "./components/Footer/Footer";
import Important from "./pages/Important/Important";
import Track from "./pages/Track/Track";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./pages/Admin/Admin";


function App() {
    const {store} = useContext(Context);
    const location = useLocation();


    useEffect(() => {
        if(localStorage.getItem("token")){
            store.checkAuth();
        }
    }, [])


    if(store.isLoading) {
        return <div></div>
    }

    return (
        <div className="App">
            <Navigation />
            <Pulse />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/calculation" element={<Calculation />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/politic" element={<Politic />} />
                <Route path="/important" element={<Important />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/track" element={<Track />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<PrivateRoute />}>
                    <Route path="" element={<Admin />} />
                </Route>
            </Routes>
            {location.pathname !== "/admin" && <Footer />}
        </div>
    );
}

export default observer(App);