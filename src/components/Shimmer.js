// export const ShimmerCard = () => {
//     return (
//       <div className=" animate-pulse w-[330px] h-[500px] bg-neutral-200 mt-32 mx-5 rounded-xl">
//         <div className="w-[90%] mx-auto h-[250px] bg-neutral-300 m-6  rounded-xl p-3"></div>
//         <div className="h-4/6 ml-5">
//           <div className="w-[80%] pt-3 text-lg  h-6 bg-gray-300 my-4"></div>
//             <div className="w-[70%] h-4 my-4  bg-gray-300 rounded-sm"></div>
//             <div className="w-[40%] h-4 my-4 bg-gray-300"></div>
//             <div className="w-[50%] h-4 my-4 bg-gray-300"></div>
          
//           <div className="w-[40%] h-4 bg-gray-300 mb-1 my-4 "></div>
//         </div>
//       </div>
//     );
//   };
  
//   export const Shimmer = () => {
//     return (
//       <div className="Shimmer-con flex flex-wrap justify-center">
//         {Array(20)
//           .fill("")
//           .map((index) => {
//             return <ShimmerCard key={index} />;
//           })}
//       </div>
//     );
//   };

export const ShimmerCard = () => {
  return (
    <div className="animate-pulse w-[330px] h-[500px] bg-neutral-200 mt-32 mx-5 rounded-xl">
      <div className="w-[90%] mx-auto h-[250px] bg-neutral-300 m-6 rounded-xl p-3"></div>
      <div className="h-4/6 ml-5">
        <div className="w-[80%] pt-3 text-lg h-6 bg-gray-300 my-4"></div>
        <div className="w-[70%] h-4 my-4 bg-gray-300 rounded-sm"></div>
        <div className="w-[40%] h-4 my-4 bg-gray-300"></div>
        <div className="w-[50%] h-4 my-4 bg-gray-300"></div>
        <div className="w-[40%] h-4 bg-gray-300 mb-1 my-4"></div>
      </div>
    </div>
  );
};

export const Shimmer = () => {
  return (
    <div className="Shimmer-con flex flex-wrap justify-center">
      {Array.from({ length: 20 }, (_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};
