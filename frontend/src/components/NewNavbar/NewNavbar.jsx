// import React, { useRef } from "react";
// import "./NewNavbar.css";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NewNavbar = () => {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_navbar");
//   };
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="brand">
//           <a href="/">Prakash Interior</a>
//         </div>
//         <div ref={navRef} className="navbar-links">
//           <a href="/">Home</a>
//           <a href="/">Services</a>
//           <a href="/">Our Work</a>
//           <a href="/">Enquiry</a>
//         </div>
//         <button className="navbar_btn navbar_close" onClick={showNavbar}>
//             <FaBars />
//           </button>
//       </div>
//       {/* <button className="navbar_btn" onClick={showNavbar}>
//         <FaTimes />
//       </button> */}
//     </nav>
//   );
// };

// export default NewNavbar;
import React, { useState } from "react";
import "./NewNavbar.css";
import { FaBars } from "react-icons/fa";

const NewNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <a href="/">Prakash Interior</a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/" className="link_option">Home</a>
            </li>
            <li>
              <a href="/" className="link_option">Services</a>
            </li>
            <li>
              <a href="/gallery" className="link_option">Gallery</a>
            </li>
            <li>
              <a href="/contact">Enquiry</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
