// import { useState, useEffect } from "react";
// import { MENU_API } from "./constants";

// const useRestaurentMenu = (resId) => {

//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         fetchData();
//     }, []);
    
//     const fetchData = async () => {
//         const data = await fetch(MENU_API + resId);
//         const json = await data.json();
//         setResInfo(json.data);
//     };

//     return resInfo;
// };

// export default useRestaurentMenu;

import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(MENU_API + resId);
                const json = await response.json();
                setResInfo(json.data);
            } catch (error) {
                console.error("Error fetching restaurant menu:", error);
            }
        };

        fetchData();
    }, [resId]); // ✅ Added resId as a dependency

    return resInfo;
};

export default useRestaurentMenu;
