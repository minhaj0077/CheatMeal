// import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
// import Cart from "./components/Cart";



// const Grocery = lazy(() => import("./components/Grocery"));



// const App = () => {
//     return (
//         <Provider store={appStore}>
//             <div className="app">
//                 <Header />
//                 <Outlet />
                
//             </div> 
//         </Provider>

//     );
// };

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "/",
//                 element: <Body />
//             },
//             {
//                 path: "/about",
//                 element: <About />,
//             },
//             {
//                 path: "/contact",
//                 element: <Contact />,
//             },
//             {
//                 path: "/grocery",
//                 element: <Suspense fallback={<h1>Loading.......</h1>}><Grocery /></Suspense>,
//             },
//             {
//                 path: "/restaurants/:id",
//                 element: <RestaurantMenu />
//             },
//             {
//                 path: "/cart",
//                 element: <Cart/>
//             }
//         ],
//         errorElement: <Error />,
//     },

// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
    return (
        <Provider store={appStore}>
            <>
                <Header />
                <Outlet />
                <Footer/>
            </>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { 
                path: "/grocery",
                element: (
                    <Suspense fallback={<div className="text-center text-2xl mt-10">Loading...</div>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            { path: "/restaurants/:id", element: <RestaurantMenu /> },
            { path: "/cart", element: <Cart /> },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
