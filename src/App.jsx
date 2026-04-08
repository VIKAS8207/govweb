import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import './index.css';
import Header from './navbar'; 
import Footer from './footer';
import Home from './pages/Home2';
import About from './pages/About';
import Schemes from './pages/Schemes'; 
import Rti from './pages/RtiPage'; 
import Tender from './pages/Tenders'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow pt-32 bg-gray-50"> 
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/schemes" element={<Schemes />} /> 
              <Route path="/rti" element={<Rti />} />
              <Route path="/tender" element={<Tender />} />
           </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;