// import ItemList from "./ItemList";


// // import { useState } from "react"; ----1

// const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//     const handleClick = () => {
//         setShowIndex();


//         {/*const RestaurantCategory = ({ data }) => {
//     const [showItems, setShowItems] = useState(false);
//     const handleClick = () => {
//     setShowItems(!showItems); ----1 */}
//     };

//     return (
//         <div>
//             <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
//                 <div className=" flex justify-between cursor-pointer " onClick={handleClick}>
//                     <span className="text-xl font-bold">{data.title} ({data.itemCards.length}) </span>
//                     <span>🔽</span>
//                 </div>

//                 {showItems && <ItemList items={data.itemCards} />}
//             </div>

//         </div>
//     );
// };

// export default RestaurantCategory;

import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex(showItems ? null : index);
  };

  return (
    <div className="w-full max-w-2xl bg-gray-50 shadow-lg rounded-lg p-4 mx-auto my-4">
      {/* Category Title */}
      <div
        className="flex justify-between items-center cursor-pointer p-3"
        onClick={handleClick}
      >
        <span className="text-xl font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          🔽
        </span>
      </div>

      {/* Item List (Only if expanded) */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
