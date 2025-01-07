import Restrocard from "./Restrocard";
import resList from "../utils/resList";
import { useState } from "react";



const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">

            <div className="search-section">
                <div className="logo">CheatMeal</div>
                <div className="search">
                    search & button
                </div>
                <div className="filter">
                    <button className="rating-filter" onClick={() => { const filteredList = listOfRestaurants.filter((res) => res.info.rating.aggregate_rating > 4);
                        setListOfRestaurants(filteredList);
                    }} >Top Reted Restaurants</button>

                </div>
            </div>

            <div className="cards-container">
                {listOfRestaurants.map((restaurant) => ( <Restrocard key={restaurant.info.resId} resData= {restaurant} /> ))}
            </div>

        </div>
    );
};

export default Body;