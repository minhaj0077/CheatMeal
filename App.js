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

const Restrocard = (props) => {
    const { resName, cuisine, rating, time} = props;

    return (
        <div className="res-card">
            <img className="res-image"
            src={resimg} alt="resimage"></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
            
        </div>
    );
};

const Cardslist = {
    
{type: "restaurant",…g}
{type: "restaurant",…}
{type: "restaurant", info: {resId: 19026140, name: "McDonald's", image: {,…}, o2FeaturedImage: {,…},…},…}
{type: "restaurant",…}
{type: "restaurant", info: {resId: 90195, name: "KFC", image: {,…}, o2FeaturedImage: {,…},…},…}
{type: "restaurant",…}
{type: "restaurant",…}
{type: "restaurant", info: {resId: 19721316, name: "Pizza Hut", image: {,…}, o2FeaturedImage: {,…},…},…}
{type: "restaurant",…}
{type: "restaurant",…} 
{type: "restaurant",…}
 {type: "restaurant",…}
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
                <Restrocard resName="KFC" cuisine="biryani, chainise, japanise"
                reting="4.4" time="25min" />
                <Restrocard resName="Mecdonals" cuisine="burgure, chicken 65, japanise"
                reting="4.3" time="27min" />
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



