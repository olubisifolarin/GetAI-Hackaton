import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FAQs from './components/FAQs';
import Overview from './components/Overview';
import Contact from './components/Contact';
import Register from './components/Register';
import Timeline from './components/Timeline';

import Confirmation from './components/Confirmation';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Timeline />} />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/confirm" element={<Confirmation />} />
          </Routes>
     
      </Router>
        
      
    </div>
  );
}

export default App;
