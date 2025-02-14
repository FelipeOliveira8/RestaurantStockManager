import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/HomePage/HomePage';
import SideBar from './pages/SideBar/SideBar';
import Products from './pages/Products/Products';
import Stock from './pages/Stock/Stock';
import Clients from './pages/Clients/Clients';
import NewOrder from './pages/SubPages/NewOrder/NewOrder';

function App() {
  return (
    <BrowserRouter>
      <div className='sideBar'>
        <SideBar /> 
      </div>
      <div className='routes'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Stock" element={<Stock />} />
            <Route path="/Clients" element={<Clients />} />
            <Route path="/NewOrder" element={<NewOrder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
