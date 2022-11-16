import * as React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import One from './pages/One/One';
import Two from './pages/Two/Two';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<One />} />
        <Route path="one" element={<One />} />
        <Route path="two" element={<Two />} />
      </Routes>
    </BrowserRouter>
  );
}
