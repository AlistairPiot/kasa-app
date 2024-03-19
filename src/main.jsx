import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import APropos from "./pages/aPropos/APropos";
import Header from "./components/header/Header";
import Error from "./pages/error/Error";
import FicheLogement from "./pages/ficheLogement/FicheLogement";
import Footer from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <div className="page-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route
                        path="/fiche-logement/:id"
                        element={<FicheLogement />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    </React.StrictMode>
);
