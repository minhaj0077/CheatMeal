import Restrocard from "./Restrocard";
import resList from "../utils/resList";
import { useEffect, useState } from "react";





const Body = () => {

    const [restaurantRating, setRestaurantRating] = useState( resList );
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch("https://www.zomato.com/webroutes/search/home");

    //     const json = await data.json();
    //     console.log(json?.sections?.SECTION_SEARCH_RESULT);
    //     setRestaurantRating(json?.sections?.SECTION_SEARCH_RESULT[0]);  
    // };

    
        // const [loading, setLoading] = useState(true);
        // const [error, setError] = useState(null);
      

    // useEffect(() => {
    //     // Define the fetch function
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch("https://fakestoreapi.com/products");
    //         if (!response.ok) {
    //           throw new Error("Network response was not ok");
    //         }
    //         const result = await response.json();
    //         console.log("result",result)
    //         // setRestaurantRating(result); // Update the state with the fetched data
    //       } catch (err) {
    //         setError(err.message); // Handle errors
    //       } finally {
    //         setLoading(false); // Set loading to false
    //       }
    //     };
    
    //     fetchData();
    //   }, []); // Empty dependency array ensures this runs only once after the component mounts
    
    //   // Handle loading and error states
    //   if (loading) return <p>Loading...</p>;
    //   if (error) return <p>Error: {error}</p>;
    useEffect(() => {
        // Fetch data from the API
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(json => {
            setProducts(json);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }

   
    return (
        // <div className="body">

        //     <div className="search-section">
        //         <div className="logo">CheatMeal</div>
        //         <div className="search">
        //             search & button
        //         </div>
        //         <div className="filter">
        //             <button className="rating-filter"
        //             onClick={ () => {const filteredList = restaurantRating.filter((rating) => rating?.info?.rating?.aggregate_rating > 4);
        //                 setRestaurantRating(filteredList);
        //             }}>Top Reted Restaurants

        //             </button>

        //         </div>
        //     </div>

        //     <div className="cards-container">
        //         {restaurantRating.map((restaurant) => ( <Restrocard key={restaurant.info.resId} resData= {restaurant} /> ))}
        //     </div>

        // </div>
        <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
      ))}
    </div>
    );
};

export default Body;