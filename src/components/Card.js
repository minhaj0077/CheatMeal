// import { IMG_URL } from "../utils/constants";

// const Card = (props) => {
//     const { resData } = props;

//     const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

//     return (
//         <div className="hover:bg-gray-200 rounded-xl shadow-black shadow-md m-6 p-4 w-[330px] h-[530px] bg-gray-100">
//             <img className="w-[330] h-[280] rounded-xl shadow-md shadow-black" alt="FoodItem" src={IMG_URL  + cloudinaryImageId} />
//             <h2 className="font-bold my-4">{name}</h2>
//             <h3 className="my-2">{cuisines.join(", ")}</h3>
//             <h3 className="my-2">{avgRating}</h3>
//             <h3 className="my-2">{costForTwo}</h3>
//             <h3 className="my-2">{resData.info.sla.deliveryTime} minuets</h3>
//         </div>
//     );
// };

// export default Card;

import { IMG_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;

  return (
    <div className="hover:bg-gray-200 rounded-xl shadow-lg m-4 p-4 w-full max-w-sm bg-gray-100">
      <img
        className="w-full h-56 object-cover rounded-xl shadow-md"
        alt="FoodItem"
        src={IMG_URL + cloudinaryImageId}
      />
      <h2 className="font-bold my-2 text-lg">{name}</h2>
      <h3 className="text-gray-600 text-sm truncate">{cuisines.join(", ")}</h3>
      <div className="flex justify-between items-center mt-3">
        <h3 className="text-sm font-semibold bg-green-500 text-white px-2 py-1 rounded-md">
          ⭐ {avgRating}
        </h3>
        <h3 className="text-sm font-semibold">{costForTwo}</h3>
      </div>
      <h3 className="mt-2 text-gray-700 text-sm">🚚 {resData.info.sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default Card;
