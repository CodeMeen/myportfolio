import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import HomePage from './pages/homepage';




function App() {

 



  return (
   <HashRouter>
    <Routes>
    <Route index element={<HomePage />} />
    </Routes>
   </HashRouter>
  );
}

export default App;
