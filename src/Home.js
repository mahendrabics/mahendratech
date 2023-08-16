// // // // import React from 'react';
// // // // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// // // // import Register from './Register';
// // // // import Login from './Login';
// // // // import Logout from './Logout';

// // // // function Home() {
// // // //   return (
// // // //     <div>
// // // //       <h1>Welcome to My App</h1>
// // // //       <BrowserRouter>
// // // //         <nav>
// // // //           <ul>
// // // //             <li>
// // // //               <Link to="/register">Register</Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link to="/login">Login</Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link to="/logout">Logout</Link>
// // // //             </li>
// // // //           </ul>
// // // //         </nav>
// // // //         <Routes>
// // // //           <Route path="/register" element={<Register />} />
// // // //           <Route path="/login" element={<Login />} />
// // // //           <Route path="/logout" element={<Logout />} />
// // // //         </Routes>
// // // //       </BrowserRouter>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Home;


// // // import React from 'react';
// // // import { BrowserRouter } from 'react-router-dom';
// // // import Navigation from '../src/navigation';
// // // import AppRoutes from '../src/routes';

// // // function Home() {
// // //   return (
// // //     <div>
// // //       <h1>Welcome to My App</h1>
// // //       <BrowserRouter>
// // //         <Navigation />
// // //         <AppRoutes />
// // //       </BrowserRouter>
// // //     </div>
// // //   );
// // // }

// // // export default Home;


// // import React from 'react';
// // import { Routes, Route, BrowserRouter } from 'react-router-dom';
// // import Home from './Home';
// // import Register from './Register';
// // import Login from './Login';
// // import Logout from './Logout';
// // import Navigation from './navigation';

// // function Home() {
// //   return (
// //     <div>
// //       <BrowserRouter>
// //       <Routes>
// //         <Route exact path="/" element={<Navigation />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/logout" element={<Logout />} />
// //       </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
// // }

// // export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/register">Register</Link>
//           </li>
//           <li>
//             <Link to="/formm">Login</Link>
//           </li>
//           <li>
//             <Link to="/logout">Logout</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Home;
