import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route path="/" element={
          <div className="main-wrapper">
            {/* Home usually takes up the full screen height */}
            <section id="home" className="min-vh-100">
              <Home />
            </section>
            
            <div className="container">
              {/* Increased padding from py-5 to py-custom or larger margins */}
              <section id="about" style={{ padding: '100px 0' }}>
                <About />
              </section>

              <section id="projects" style={{ padding: '100px 0' }}>
                <Project />
              </section>

              <section id="contact" style={{ padding: '100px 0' }}>
                <Contact />
              </section>
            </div>
          </div>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;