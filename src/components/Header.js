// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { useSelector } from "react-redux";
// import LOGO_IMG from "../images/logo.svg"

// const Header = () => {

//     const [loginBtn, setLoginBtn] = useState("Login");

//     const onlineStatus = useOnlineStatus();

//     const cartItems = useSelector((store) => store.cart.items);


//     return (

//         <div className="flex justify-between items-center bg-green-100">
//             <div className="logo-space">
//                 <Link><img alt="logo" className="w-[110px] m-2 rounded-full " src={LOGO_IMG}/></Link>
//                 {/* <img alt="logo" className="w-[110px] m-2 rounded-full " src={LOGO_IMG} ></img> */}
//             </div>
//             <div className="nav-items">
//                 <ul className="flex space-x-14 font-medium text-xl items-center mx-16">
//                     <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200">Online Starts: {onlineStatus ? "🟢" : "🔴"}
//                     </li>
//                     <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200">
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" >
//                         <Link to="/about">About Us</Link>
//                     </li>
//                     <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" >
//                         <Link to="/contact">Contact Us</Link>
//                     </li>
//                     <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200">
//                         <Link to="/grocery">Grocery</Link>
//                     </li>
//                     <li className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200" >
//                         <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
//                     </li>
//                     <button className="hover:bg-green-200 p-3 rounded-lg hover:shadow-lg hover:shadow-black-200 w-24"
//                         onClick={() => { loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login"); }}>
//                         {loginBtn}
//                     </button>

//                 </ul>
//             </div>
//         </div>

//     );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react"; // Import icons
import LOGO_IMG from "../images/logo.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);

    // Function to close the menu when an option is selected
    const handleMenuClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="bg-green-100 px-5 md:px-10 flex justify-between items-center shadow-lg relative">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img alt="logo" className="w-[80px] md:w-[100px] m-2 rounded-full" src={LOGO_IMG} />
                </Link>
            </div>

            {/* Menu Button (Visible on Small Screens) */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-black focus:outline-none"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Navigation Links (Hidden in Large Screens & Shown in Small Screens) */}
            {isMenuOpen && (
                <div className="absolute top-10 right-0 w-[30%] md:w-[20%] bg-green-100 shadow-lg p-4 rounded-lg bg-opacity-80 backdrop-blur-md">
                    <ul className="flex flex-col space-y-4 text-lg">
                        <li onClick={handleMenuClick} className="hover:bg-green-200 p-3 rounded-lg">
                            Online Status: {onlineStatus ? "🟢" : "🔴"}
                        </li>
                        <li onClick={handleMenuClick} className="hover:bg-green-200 p-3 rounded-lg">
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={handleMenuClick} className="hover:bg-green-200 p-3 rounded-lg">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li onClick={handleMenuClick} className="hover:bg-green-200 p-3 rounded-lg">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li onClick={handleMenuClick} className="hover:bg-green-200 p-3 rounded-lg">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li onClick={handleMenuClick} className="hover:bg-green-200 p-3 rounded-lg">
                            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                        </li>
                        <button
                            onClick={() => {
                                setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
                                handleMenuClick();
                            }}
                            className="hover:bg-green-200 p-3 rounded-lg"
                        >
                            {loginBtn}
                        </button>
                    </ul>
                </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
                <ul className="flex space-x-14 font-medium text-xl items-center mx-16">
                    <li className="hover:bg-green-200 p-3 rounded-lg">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="hover:bg-green-200 p-3 rounded-lg"><Link to="/">Home</Link></li>
                    <li className="hover:bg-green-200 p-3 rounded-lg"><Link to="/about">About Us</Link></li>
                    <li className="hover:bg-green-200 p-3 rounded-lg"><Link to="/contact">Contact Us</Link></li>
                    <li className="hover:bg-green-200 p-3 rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="hover:bg-green-200 p-3 rounded-lg"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button
                        className="hover:bg-green-200 p-3 rounded-lg w-24"
                        onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
                    >
                        {loginBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
