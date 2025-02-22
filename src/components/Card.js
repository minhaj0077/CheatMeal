import { IMG_URL } from "../utils/constants";

const Card = (props) => {
    const { resData } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

    return (
        <div className="hover:bg-gray-200 rounded-xl shadow-black shadow-md m-6 p-4 w-[330px] h-[530px] bg-gray-100">
            <img className="w-[330] h-[280] rounded-xl shadow-md shadow-black" alt="FoodItem" src={IMG_URL  + cloudinaryImageId} />
            <h2 className="font-bold my-4">{name}</h2>
            <h3 className="my-2">{cuisines.join(", ")}</h3>
            <h3 className="my-2">{avgRating}</h3>
            <h3 className="my-2">{costForTwo}</h3>
            <h3 className="my-2">{resData.info.sla.deliveryTime} minuets</h3>
        </div>
    );
};

export default Card;