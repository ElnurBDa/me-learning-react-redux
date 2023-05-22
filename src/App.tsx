import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import A from './pages/A';
import B from './pages/B';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<A />} />
          <Route path="B" element={<B />} />
          <Route path="*" element={<A />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
