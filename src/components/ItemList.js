import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 p-2 m-2 border-gray-200 text-left flex justify-between ">

                    <div className="w-9/12">

                        <div className="m-10">
                            <span className="text-xl">{item.card.info.name}</span>
                            <span className="text-xl ">  -  ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-lg m-10">{item.card.info.description}</p>

                    </div>
                    <div className="w-3/12 p-2">
                        <div className="absolute m-2 ">
                            <button className=" rounded-lg p-3  bg-black ftext-2xl  text-white shadow-lg  "
                                onClick={() => handleAddItem(item)} >Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className=""></img>

                    </div>

                </div>

            ))}
        </div>
    );
};

export default ItemList;