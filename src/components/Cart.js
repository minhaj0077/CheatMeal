// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";


// const Cart = () => {
//     const cartItems = useSelector((store) => store.cart.items);

//     const dispatch = useDispatch();

//     const handleClearCart = () => {
//         dispatch(clearCart());
//     };

//     return (
//         <div className="w-6/12 m-auto  ">
//             <div className="font-bold bg-gray-200 text-2xl mt-10 p-2 flex justify-between">
//                 <h1 className="p-2 m-1">Cart list</h1>
//                 <button className="bg-gray-300 p-2 m-1 rounded-xl  " onClick={handleClearCart} >Clear Cart</button>

//             </div>


//             <div>
//                 <ItemList items={cartItems} />
//                 <div>
//                     {cartItems.length == 0 && <h1 className="text-center p-3 m-3 my-10 font-bold text-3xl  "> Cart is empty add items to the cart! </h1>}
//                 </div>

//             </div>

//         </div>
//     )
// };

// export default Cart;

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Cart Header */}
      <div className="font-bold bg-gray-200 text-2xl mt-10 p-3 flex justify-between items-center rounded-lg shadow-md">
        <h1 className="p-2">🛒 Cart List</h1>
        <button
          className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div className="mt-6">
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h1 className="text-center p-6 mt-10 font-bold text-xl sm:text-2xl md:text-3xl text-gray-700">
            🛍️ Your cart is empty. Add items to the cart!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
