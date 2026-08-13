import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import DefaultPageLayout from './components/page-layouts/DefaultPageLayout';
import HomePage from './components/pages/HomePage';
import TableReservation from './components/pages/TableReservation';
import UnderConstruction from './components/pages/UnderConstruction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultPageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<UnderConstruction />} />
          <Route path="/menu" element={<UnderConstruction />} />
          <Route path="/reserve-a-table" element={<TableReservation />} />
          <Route path="/order-online" element={<UnderConstruction />} />
          <Route path="/login" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
