import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import './index.css';
import Header from './navbar'; 
import Footer from './footer';
import Flot from './Floting';
import Home from './pages/Home2';
import About from './pages/About';
import Schemes from './pages/Schemes'; 
import Rti from './pages/RtiPage'; 
import Tender from './pages/Tenders'; 
import ToDoList from './pages/TodoList'; 
import EPFO from './pages/EpfoMain';
import Accing from './pages/Accounts';
import Contacting from './pages/Contacts';
import NoticePage from './pages/Notices';
import EPFOPayment from './pages/EpfoPays';
import ShopPage from './pages/Shops';
import ShopBill from './pages/ShopPays';

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
              <Route path="/todo" element={<ToDoList />} />
              <Route path="/epfo" element={<EPFO />} />
              <Route path="/accounts" element={<Accing />} />
              <Route path="/contact" element={<Contacting />} />
              <Route path="/notices" element={<NoticePage />} />
              <Route path="/epfo-payment" element={<EPFOPayment />} />
              <Route path="/vendor" element={<ShopPage />} />
              <Route path="/shoppay" element={<ShopBill />} />
           </Routes>
        </main>
        <Flot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;