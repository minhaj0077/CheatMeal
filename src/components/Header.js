import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();


    return (

        <div className="header">
            <div className="logo-space">
                <img alt="logo" className="logo" src = { LOGO_URL } ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Starts: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link className="header-text" to="/">Home</Link></li>
                    <li><Link className="header-text" to="/about">About Us</Link></li>
                    <li><Link className="header-text" to="/contact">Contact Us</Link></li>
                    <li><Link className="header-text" to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {loginBtn == "Login"? setLoginBtn("Logout"): setLoginBtn("Login");}}>{loginBtn}</button>
                
                </ul>
            </div>
        </div>

    );
};

export default Header;