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
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './components/HostVanInfo.jsx';
import Reviews from './pages/Host/Reviews';
import HostVanPrice from './components/HostVanPrice.jsx';
import HostVanPhotos from './components/HostVanPhotos.jsx';
import NotFound from './components/NotFound.jsx';

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
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPrice />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
