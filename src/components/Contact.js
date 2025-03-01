// import CONTACT_US from "../images/contact.png"
// const Contact = () => {
//     return(
//         <div className="width-full">
//             <img alt="aboutus" className=" h-screen"  src={CONTACT_US}/>
//         </div>
//     )
// };

// export default Contact;

import CONTACT_US from "../images/contact.png";

const Contact = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <img
        alt="Contact Us"
        src={CONTACT_US}
        className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Contact;
