import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import UserDetails from './Pages/UserDetails';
import Edit from './Pages/Edit';
import Create from './Pages/Create';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [id, setId] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar setId={setId} />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/userdetails' element={<UserDetails setId={setId} />} />
          <Route path='/edit/:id' element={<Edit id={id} />} />
          <Route path='/create' element={<Create />} />
          <Route path='/form' element={<Edit id={id} />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
