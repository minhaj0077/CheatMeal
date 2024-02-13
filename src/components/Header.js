import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();


    return (

        <div className="flex justify-between items-center bg-green-100">
            <div className="logo-space">
                <img alt="logo" className="w-[110px] m-2" src = { LOGO_URL } ></img>
            </div>
            <div className="nav-items">
                <ul className="flex space-x-14 font-medium text-xl items-center mx-16">
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200">Online Starts: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" to="/">Home</Link></li>
                    <li><Link className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" to="/about">About Us</Link></li>
                    <li><Link className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" to="/contact">Contact Us</Link></li>
                    <li><Link className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" to="/grocery">Grocery</Link></li>
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" >Cart</li>
                    <button className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200 w-24" onClick={() => {loginBtn == "Login"? setLoginBtn("Logout"): setLoginBtn("Login");}}>{loginBtn}</button>
                
                </ul>
            </div>
        </div>

    );
};

export default Header;