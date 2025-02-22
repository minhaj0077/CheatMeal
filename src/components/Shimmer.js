export const ShimmerCard = () => {
    return (
      <div className=" animate-pulse w-[250px] h-[380px] bg-neutral-700 mx-5  mb-4 rounded-xl">
        <div className="w-[99%] mx-auto h-[170px] bg-gray-400 mb-3 rounded-xl p-3"></div>
        <div className="h-3/6 ml-[10px] mx-auto">
          <div className="w-[97%] pt-3 text-lg  h-4 bg-gray-400 mb-3"></div>
  
          <div className="flex  w-[97%]  h-5  gap-3 my-4 ">
            <div className="w-[30%] bg-gray-400 rounded-sm"></div>
            <div className="w-[30%] bg-gray-400"></div>
            <div className="w-[30%] bg-gray-400"></div>
          </div>
          <div className="w-[97%] h-3 bg-gray-400 mb-1 "></div>
        </div>
      </div>
    );
  };
  
  export const Shimmer = () => {
    return (
      <div className="Shimmer-con flex flex-wrap mt-6 justify-center">
        {Array(20)
          .fill("")
          .map((index) => {
            return <ShimmerCard key={index} />;
          })}
      </div>
    );
  };




//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//         <div className="shimmer-card"></div>
//     </div>
//     );
// };

// export default Shimmer;

