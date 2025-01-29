import Restrocard from "./Restrocard";
import resList from "../utils/resList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";





const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList );


    if (listOfRestaurant.length === 0) {
        return <Shimmer/>;
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
                    onClick={ () => {const filteredList = listOfRestaurant.filter((rating) => rating?.info?.rating?.aggregate_rating > 4);
                        setListOfRestaurant(filteredList);
                    }}>Top Reted Restaurants

                    </button>

                </div>
            </div>

            <div className="cards-container">
                {listOfRestaurant.map((restaurant) => ( <Restrocard key={restaurant.info.resId} resData= {restaurant} /> ))}
            </div>

        {/* </div>
        <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div> */}
      {/* ))} */}
    </div>
    );
};

export default Body;