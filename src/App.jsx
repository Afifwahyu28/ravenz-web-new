import './index.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Button } from './components/Button';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import { initGA, trackPageView } from './analytics';

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
      <div
        id="top"
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Mengabadikan Cerita <br /> Anda Dengan Sinematik
        </h1>
        <p className="mb-4">Produksi Short Film, Iklan, dan Pemotretan Buku Tahunan Sekolah</p>
        <Button className="bg-purple-800 hover:bg-purple-700">Lihat Portofolio</Button>
      </div>

      {/* Tentang Kami */}
      <section id="tentang" className="px-6 md:px-16 py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Tentang Kami</h2>
        <div className="max-w-3xl mx-auto text-sm leading-relaxed mb-6">
          Kami adalah tim kreatif yang berdedikasi untuk menghasilkan karya visual berkualitas tinggi berdiri sejak 2020, kami telah menyelesaikan puluhan proyek.
          Visi kami adalah mengabadikan setiap momen dengan cerita yang bermakna.
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <img src="/tentang1.jpg" className="w-40 h-60 object-cover rounded-md" />
          <img src="/tentang2.jpg" className="w-40 h-60 object-cover rounded-md" />
          <img src="/tentang3.jpg" className="w-40 h-60 object-cover rounded-md" />
        </div>
      </section>

      {/* Layanan Kami */}
      <section id="layanan" className="px-6 md:px-16 py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-6">Layanan kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Short Film',
              img: '/layanan1.jpg',
              desc: 'Produksi dokumentasi dan naratif dengan storytelling yang kuat',
            },
            {
              title: 'Iklan',
              img: '/layanan2.jpg',
              desc: 'Iklan kreatif untuk TV, media sosial, dan kampanye digital.',
            },
            {
              title: 'Buku Tahunan',
              img: '/layanan3.jpg',
              desc: 'Pemotretan kreatif untuk kenangan sekolah yang tak terlupakan',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <img src={item.img} className="w-full h-60 object-cover rounded-md mb-2" />
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm mb-2">{item.desc}</p>
              <a href="#" className="text-purple-600 text-sm underline">Pelajari lebih lanjut</a>
            </div>
          ))}
        </div>
      </section>

      {/* Portofolio */}
      <section id="portofolio" className="px-6 md:px-16 py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-6">Portofolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Short Film – Proyek',
              year: '2024',
              img: '/portofolio1.jpg',
            },
            {
              title: 'Iklan – Kampanye',
              year: '2023',
              img: '/portofolio2.jpg',
            },
            {
              title: 'Buku Tahunan – SMA',
              year: '2024',
              img: '/portofolio3.jpg',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <img src={item.img} className="w-full h-60 object-cover rounded-md mb-2" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.year}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button className="bg-purple-800 hover:bg-purple-700">Lihat Semua Portofolio</Button>
        </div>
      </section>

      {/* Hubungi Kami */}
      <Kontak />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
