// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// const Approuter = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default Approuter;


import React from 'react';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import { Home } from '../pages/home';
import About from '../pages/about';
import Services from '../pages/Services';
import Contactus from '../pages/Contactus';
const Approuter = () => {
    return (
        
            <div>
              <BrowserRouter>
                  <Navbar />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contactus' element={<Contactus />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Services' element={<Services />} />
                  </Routes>
              </BrowserRouter>
              {/* <Navbar /> */}
            </div>
          );
}

export default Approuter;
