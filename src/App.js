import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './server.js';
import './App.css';
import Home from './pages/Vans/Home';
import About from './pages/Vans/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashboard from "./pages/Host/Dashboard";
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />}/>
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
