// import { useRouteError } from "react-router-dom";

// const Error = () => {
//     const err = useRouteError();
//     console.log(err);
//     return(
//         <div>
//             <h1>Oops😮</h1>
//             <h2>Somthing went wrong!!</h2>
//         </div>
//     )
// };

// export default Error;

import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-5xl font-bold text-red-600">Oops! 😮</h1>
      <h2 className="text-xl font-semibold mt-4">Something went wrong!!</h2>
      {err && (
        <p className="text-gray-700 mt-2">
          {err.status} - {err.statusText || "Unexpected Error"}
        </p>
      )}
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
