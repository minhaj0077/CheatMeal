// import Card from "./Card";
// import { useState, useEffect } from "react";
// import {Shimmer} from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { CDN_URL } from "../utils/constants";


// const Body = () => {

//   const [listOfRestaurents, setListOfRestaurents] = useState([]);

//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [searchRestaurent, setSearchRestaurent] = useState("");

  
// console.log("list", listOfRestaurents);
  

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
    
//     const data = await fetch(CDN_URL );
//       // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3733354&lng=78.413675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

//     const json = await data.json();

  
//     setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//   };

//   const onlineStatus = useOnlineStatus();
//   if (onlineStatus ===false) return <h1>Looks like you're offline!! Please check your internet connection.</h1>


//   return listOfRestaurents.length == 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="">
//       <div className="flex space-x-16">
//         <div className="m-4 p-4 space-x-5 ">
//           <input className="border border-solid border-black w-80 h-11 p-2" type="text" value={searchRestaurent} 
//           onChange={(e) => {
//             setSearchRestaurent(e.target.value);
//           }} />
//           <button className="hover:bg-gray-300 p-3 rounded-lg bg-gray-200 font-bold " onClick={() => {
            
//             const filteredRestaurant = listOfRestaurents.filter((res) => res.info.name.toLowerCase().includes(searchRestaurent.toLowerCase()));

//             setFilteredRestaurant(filteredRestaurant);
//           }}>search</button>
//         </div>

//         <div className="m-4 p-4 flex items-center" >
//         <button className="hover:bg-gray-300 p-3 rounded-lg bg-gray-200 w-56 font-bold "
//           onClick={() => {
//             const filteredList = listOfRestaurents.filter((res) => res.info.avgRating > 4.3);
//             setFilteredRestaurant(filteredList);
//           }} > Top Rated Restaurents </button>
//         </div>

        

//       </div>

//       <div className="flex flex-wrap ">
//         {
//           filteredRestaurant.map((restaurant) =>(
//           <Link className="card-font" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><Card  resData={restaurant} /></Link>
//           ))}

//       </div>
//     </div>
//   );
// };

// export default Body;


import Card from "./Card";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CDN_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return <h1>Looks like you're offline!! Please check your internet connection.</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 w-full max-w-lg">
          <input
            className="border border-solid border-gray-400 w-full h-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            placeholder="Search for restaurants..."
            value={searchRestaurant}
            onChange={(e) => setSearchRestaurant(e.target.value)}
          />
          <button
            className="p-3 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="p-3 w-full md:w-56 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
