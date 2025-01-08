import Restrocard from "./Restrocard";
import resList from "../utils/resList";
import { useEffect, useState } from "react";



const Body = () => {

    const [restaurantRating, setRestaurantRating] = useState( resList );

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.zomato.com/hyderabad/kukatpally-restaurants?place_name=Bhagya%20Nagar%20Colony,%20Kukatpally,%20Hyderabad&dishv2_id=30308&context=delivery&category=1");
        const json = await data.json();
        console.log(json);
        setRestaurantRating(json?.sections?.SECTION_SEARCH_RESULT);  
    };
   
    return (
        <div className="body">

            <div className="search-section">
                <div className="logo">CheatMeal</div>
                <div className="search">
                    search & button
                </div>
                <div className="filter">
                    <button className="rating-filter"
                    onClick={ () => {const filteredList = restaurantRating.filter((rating) => rating?.info?.rating?.aggregate_rating > 4);
                        setRestaurantRating(filteredList);
                    }}>Top Reted Restaurants

                    </button>

                </div>
            </div>

            <div className="cards-container">
                {restaurantRating.map((restaurant) => ( <Restrocard key={restaurant.info.resId} resData= {restaurant} /> ))}
            </div>

        </div>
    );
};

export default Body;