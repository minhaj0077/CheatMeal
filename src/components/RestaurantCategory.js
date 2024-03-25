import ItemList from "./ItemList";
// import { useState } from "react"; ----1

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();


        {/*const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
    setShowItems(!showItems); ----1 */}
    };

    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
                <div className=" flex justify-between cursor-pointer " onClick={handleClick}>
                    <span className="text-xl font-bold">{data.title} ({data.itemCards.length}) </span>
                    <span>🔽</span>
                </div>

                {showItems && <ItemList items={data.itemCards} />}
            </div>

        </div>
    );
};

export default RestaurantCategory;