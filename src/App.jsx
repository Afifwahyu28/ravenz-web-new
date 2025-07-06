import './index.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import { initGA, trackPageView } from './analytics';
import LayananKami from './components/LayananKami';
import TentangKami from './components/TentangKami';
import Portofolio from './components/Portofolio';
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Tentang Kami */}
      <TentangKami />

      {/* Layanan Kami */}
      <LayananKami />

      {/* Portofolio */}
      <Portofolio />

      {/* Hubungi Kami */}
      <Kontak />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
