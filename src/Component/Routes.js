

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Logc from './Logc';
import Register from './Register';
import Login from './Login';

const RouteComponent = () => {

  return (



    <Routes>
      <Route path="/" element={<Logc />} />
      <Route path="/pie" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RouteComponent;

