import React, { useState } from "react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const Portofolio = () => {
  const [showAll, setShowAll] = useState(false);

  const mainItems = [
    {
      title: 'Short Film – Proyek',
      year: '2024',
      img: 'src\assets\Portfolio-1.jpeg',
    },
    {
      title: 'Iklan – Kampanye',
      year: '2023',
      img: '/portfolio/Portfolio-2.jpeg',
    },
    {
      title: 'Buku Tahunan – SMA',
      year: '2024',
      img: '/portfolio/Portfolio-3.jpeg',
    },
  ];

  const extraItems = [
    {
      title: 'Wedding – Bali',
      year: '2023',
      img: '/portfolio/Portfolio-4.jpeg',
    },
    {
      title: 'Dokumenter – Lokal',
      year: '2022',
      img: '/portfolio/Portfolio-5.jpeg',
    },
    {
      title: 'Music Video – Indie',
      year: '2024',
      img: '/portfolio/Portfolio-6.jpeg',
    },
  ];

  return (
    <section id="portofolio" className="px-6 md:px-16 py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Portofolio</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {mainItems.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-xl mb-3 shadow-lg"
            />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.year}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button onClick={() => setShowAll(true)} className="bg-purple-800 hover:bg-purple-700">
          Lihat Semua Portofolio
        </Button>
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Portofolio Lengkap</h3>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-gray-500 hover:text-purple-600 text-sm"
                >
                  Tutup ✕
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {extraItems.map((item, idx) => (
                  <div key={idx}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[300px] object-cover rounded-xl mb-3 shadow-md"
                    />
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portofolio;
