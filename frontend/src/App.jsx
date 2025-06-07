import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/login/Login';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Help from './components/Help Us/Help'; 
function Layout({ children }) {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login';

  return (
    <div className="app-container">
      {!hideNavAndFooter && <Navbar />}
      <div className="main-content">{children}</div>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/Help Us" element={<Help />} /> {}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
