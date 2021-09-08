// import React, { useState, useEffect } from "react";
// import { Container, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FcTodoList } from "react-icons/fc";

// function Header() {
//   const [hideNavItems, setHideNavItems] = useState(true);

//   useEffect(() => {
//     if (
//       window.location.pathname === "/welcome" ||
//       "/dashboard" ||
//       "/register"
//     ) {
//       setHideNavItems(false);
//     }
//   }, [hideNavItems]);

//   return (
//     <div className="header">
//       <div className="wrapper-logo">
//         <FcTodoList className="logo" size="60px" />
//       </div>
//       <nav className="wrapper-links">
//         {hideNavItems ? (
//           <Link className="link" path={"/signin"}>
//             signin
//           </Link>
//         ) : (
//           <>
//             <Link className="link" path="/homepage">
//               signout
//             </Link>

//             <Link className="link" path="/dashboard">
//               dashboard
//             </Link>
//           </>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Header;
