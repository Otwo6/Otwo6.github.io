import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Directory from './pages/Directory';
import Government from './pages/Government';
import OurMeetings from './pages/OurMeetings';
import PoliticalAction from './pages/PoliticalAction';
import ProtectVote from './pages/ProtectVote';
import PublicMeetings from './pages/PublicMeetings';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <ScrollToTop />

      {/* 1. We wrap the whole app in a flex column that takes up at least 100% of the viewport height (100vh) */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Header />
        
        {/* 2. 'flex: 1' tells this middle container to grow and fill all remaining empty space! */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/government" element={<Government />} />
            <Route path="/our-meetings" element={<OurMeetings />} />
            <Route path="/political-action" element={<PoliticalAction />} />
            <Route path="/protect-vote" element={<ProtectVote />} />
            <Route path="/public-meetings" element={<PublicMeetings />} />
          </Routes>
        </div>
        
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;