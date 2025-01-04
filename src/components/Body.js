import Restrocard from "./Restrocard";
import resList from "../utils/resList";



const Body = () => {
    return (
        <div className="body">

            <div className="search-section">
                <div className="logo">CheatMeal</div>
                <div className="search">
                    search & button
                </div>
                <div className="location-filter">locations</div>
            </div>

            <div className="cards-container">
                {resList.map((restaurant) => ( <Restrocard key={restaurant.info.resId} resData= {restaurant} /> ))}
            </div>

        </div>
    );
};

export default Body;