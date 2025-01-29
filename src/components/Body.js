import Restrocard from "./Restrocard";
import resList from "../utils/resList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";





const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList );
    const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

    const [searchText, setSearchText] = useState("");


    if (listOfRestaurant.length === 0) {
        return <Shimmer/>;
    };

    return (
        <div className="body">

            <div className="search-section">
                <div className="logo">CheatMeal</div>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant);
                    }}>search</button>
                </div>
                <div className="filter">
                    <button className="rating-filter"
                    onClick={ () => {const filteredList = listOfRestaurant.filter((rating) => rating?.info?.rating?.aggregate_rating > 4);
                        setListOfRestaurant(filteredList);
                    }}>Top Reted Restaurants

                    </button>

                </div>
            </div>

            <div className="cards-container">
                {filteredRestaurant.map((restaurant) => ( <Restrocard key={restaurant.info.resId} resData= {restaurant} /> ))}
            </div>
    </div>
    );
};

export default Body;