import React from "react";
import ReactDOM from "react-dom/client";
import resimg from "./res-image.avif";


const Header = () => {
    return (
        <div className="header">
            <div className="app-logo">CheatMeal</div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Offers</li>
                    <li>Login</li>
                    <li>Signin</li>
                </ul>
            </div>
        </div>
    );
};

const Restrocard = () => {
    return (
        <div className="res-card">
            <img className="res-image"
            src={resimg} alt="resimage"></img>
            <h3>Meghana Foods</h3>
            <h4>Biryani, chainies, japanies</h4>
            <h4>4.3 stars</h4>
            <h4>30 Min</h4>
            
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">

            <div className="search-section">
                <div className="logo">CheatMeal</div>
                <div className="search">
                    search & button
                </div>
                <div className="location-filter">locations</div>
            </div>

            <div className="cards-container">
                <Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/><Restrocard/>
            </div>

        </div>
    );
};

const Footer = () => {
    return (
        <div></div>
    );
};


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)



