// import GROCERY from "../images/grocery.jpg"
// const Grocery = () => {
//     return (
//         <div>
//             <img alt="aboutus" className="h-screen w-screen "  src={GROCERY}/>
//         </div>
//     )
// }

// export default Grocery

import GROCERY from "../images/grocery.jpg";

const Grocery = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <img
        alt="Grocery"
        src={GROCERY}
        className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Grocery;
