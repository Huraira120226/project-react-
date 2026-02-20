import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './pages/Features';
import Verification from './pages/Verification';

function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<h1 style={{ textAlign: 'center' }}>Welcome to Our FYP Project</h1>} />
          <Route path="/features" element={<Features />} />
          <Route path="/verify" element={<Verification />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;