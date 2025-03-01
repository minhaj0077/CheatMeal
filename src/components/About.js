// import ABOUT_US from "../images/aboutus.png";

// const About = () => {
//     return (
//         <div>
//             <img alt="aboutus"  src={ABOUT_US}/>
//     </div>
//     )
   
// };

// export default About;

import ABOUT_US from "../images/aboutus.png";

const About = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <img
        alt="About Us"
        src={ABOUT_US}
        className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default About;
