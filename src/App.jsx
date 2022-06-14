import React from 'react';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Ayuda from "./pages/Ayuda";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/ayuda' element={<Ayuda />} />
        <Route path='*' element={<Error />} />
      </Routes>
  </Router>
  );
}

export default App;
