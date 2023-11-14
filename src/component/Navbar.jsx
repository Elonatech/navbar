// import React from 'react';
// import './navbar.css';
// import { useState, useEffect } from "react";

// const Navbar = () => {

//     const [techMouseEnter, setTechMouseEnter] = useState(true)
//     const [digitalMouseEnter, setDigitalMouseEnter] = useState(false)
//     const [salesMouseEnter, setSalesMouseEnter] = useState(false)

//     const handleTechMouseEnter = () => {
//         setTechMouseEnter(true)
//         setDigitalMouseEnter(false)
//         setSalesMouseEnter(false)
//       }
//       const handleDigitalMouseEnter = () => {
//         setDigitalMouseEnter(true)
//         setSalesMouseEnter(false)
//         setTechMouseEnter(false)
//       }
//       const handleSalesMouseEnter = () => {
//         setSalesMouseEnter(true)
//         setTechMouseEnter(false)
//         setDigitalMouseEnter(false)
//       }


//   return (
//     <div className='container'>
//      <nav class="container navbar navbar-expand-lg bg-transparent fixed-top">
//         <div class="container-fluid">
//             <a class="navbar-brand" href="#">ELONATECH</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//             <div class="offcanvas-header">
//                 <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ELONATECH</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div class="offcanvas-body">
//                 <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
//                     <li class="nav-item">
//                         <a class="nav-link active" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
//                         <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
//                         </svg></a>
//                     </li>
//                     <li class="nav-item mx-4 listItem">
//                         <a class="nav-link fw-bold" href="#">Solutions</a>
//                         <ul className='innerListContainer'> 
//                             <li className='innerListItemLeft'>
//                                 <ul className='innerListContentLeft'>
//                                     <li className={techMouseEnter ? 'innerListItemContentLeftActive' : 'innerListItemContentLeft'} onMouseEnter={handleTechMouseEnter}>tech soultion</li>
//                                     <li className={digitalMouseEnter ? 'innerListItemContentLeftActive' : 'innerListItemContentLeft'} onMouseEnter={handleDigitalMouseEnter}>Digital solution</li>
//                                     <li className={salesMouseEnter ? 'innerListItemContentLeftActive' : 'innerListItemContentLeft'} onMouseEnter={handleSalesMouseEnter}>Sales</li>
//                                 </ul>
//                             </li>
//                             <hr className='line' />
//                             <li></li>
//                         </ul>
//                     </li>





//                     <li class="nav-item mx-4">
//                         <a class="nav-link fw-bold" href="#">Product</a>
//                     </li>
//                     <li class="nav-item mx-4">
//                         <a class="nav-link fw-bold" href="#">Support</a>
//                     </li>
//                     <li class="nav-item mx-4">
//                         <a class="nav-link fw-bold" href="#">Who we are </a>
//                     </li>
//                     <li class="nav-item mx-4">
//                         <a class="nav-link fw-bold" href="#">Get in touch</a>
//                     </li>
//                 {/* <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <ul class="dropdown-menu">
//                     <li><a class="dropdown-item" href="#">Action</a></li>
//                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                     <li>
//                         <hr class="dropdown-divider"/>
//                     </li>
//                     <li><a class="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                 </li> */}
//                 </ul>
//                 {/* <form class="d-flex mt-3" role="search">
//                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                 <button class="btn btn-outline-success" type="submit">Search</button>
//                 </form> */}
//             </div>
//             </div>
//         </div>
//      </nav>
//     </div>
//   )
// }

// export default Navbar