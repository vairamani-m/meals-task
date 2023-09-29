import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DetailPage from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/meals" element={<Home />} />
          <Route exact path="/meals/:id" element={<DetailPage />} />
          <Route exact path="/"  element={<Navigate to="/meals" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
