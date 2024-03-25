import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);


    return (

        <div className="flex justify-between items-center bg-green-100">
            <div className="logo-space">
                <img alt="logo" className="w-[110px] m-2" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul className="flex space-x-14 font-medium text-xl items-center mx-16">
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200">Online Starts: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" >
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" >
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" >
                        <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200 w-24"
                        onClick={() => { loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login"); }}>
                        {loginBtn}
                    </button>

                </ul>
            </div>
        </div>

    );
};

export default Header;