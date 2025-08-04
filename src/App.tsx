import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Partners from './pages/Partners';
import Events from './pages/Events';
import Founder from './pages/Founder';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/events" element={<Events />} />
            <Route path="/founder" element={<Founder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;