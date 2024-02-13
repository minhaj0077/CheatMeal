import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchRestaurent, setSearchRestaurent] = useState("");

  

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3733354&lng=78.413675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

    const json = await data.json();

  
    setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus ===false) return <h1>Looks like you're offline!! Please check your internet connection.</h1>


  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="w-4">
      <div className="search-filter">
        <div className="search-bar">
          <input className="input-search" type="text" value={searchRestaurent} 
          onChange={(e) => {
            setSearchRestaurent(e.target.value);
          }} />
          <button onClick={() => {
            
            const filteredRestaurant = listOfRestaurents.filter((res) => res.info.name.toLowerCase().includes(searchRestaurent.toLowerCase()));

            setFilteredRestaurant(filteredRestaurant);
          }}>search</button>
        </div>

        <button className="filter"
          onClick={() => {
            const filteredList = listOfRestaurents.filter((res) => res.info.avgRating > 4.3);
            setFilteredRestaurant(filteredList);
          }} > Top Rated Restaurents </button>

      </div>

      <div className="card-container">
        {
          filteredRestaurant.map((restaurant) =>(
          <Link className="card-font" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><Card  resData={restaurant} /></Link>
          ))}

      </div>
    </div>
  );
};

export default Body;