import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RequestPage from './pages/RequestPage';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='request' element={<RequestPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
