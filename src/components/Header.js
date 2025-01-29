import { useState } from "react";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");


    return (
        <div className="header">
            <div className="app-logo">CheatMeal</div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Offers</li>
                    <button className={`login-btn ${loginBtn === "Login" ? "login" : "logout"}`} onClick={()=> {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn ("Login")
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    
    );
};

export default Header;