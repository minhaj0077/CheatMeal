import { CDN_URL } from "../utils/constants";

const Card = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

    return (
        <div className="res-card">
            <img className="card-logo" alt="FoodItem" src={CDN_URL  + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h3>{resData.info.sla.deliveryTime} minuets</h3>
        </div>
    );
};

export default Card;