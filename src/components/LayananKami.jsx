import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LayananKami = () => {
  const layananData = [
    {
      title: 'Short Film',
      img: 'public/Short-Film.jpg',
      desc: 'Produksi dokumentasi dan naratif dengan storytelling yang kuat',
      detail: 'Kami menghadirkan sinematografi yang menggugah emosi dengan pendekatan naratif yang kreatif, cocok untuk pernikahan, dokumenter, atau proyek personal.'
    },
    {
      title: 'Iklan',
      img: 'public/Iklan.jpeg',
      desc: 'Iklan kreatif untuk TV, media sosial, dan kampanye digital.',
      detail: 'Tim kami merancang iklan yang menarik secara visual dan efektif menyampaikan pesan brand untuk berbagai media.'
    },
    {
      title: 'Buku Tahunan',
      img: 'public/Buku-Tahunan.jpg',
      desc: 'Pemotretan kreatif untuk kenangan sekolah yang tak terlupakan',
      detail: 'Kami membuat sesi foto bertema dan desain buku tahunan yang memorable, cocok untuk sekolah dasar hingga menengah atas.'
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="layanan" className="px-6 md:px-16 py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12">Layanan Kami</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {layananData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-5">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[380px] object-cover rounded-xl mb-5 shadow-lg"
            />
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>

            <button
              onClick={() => toggleDetail(idx)}
              className="mt-3 text-sm text-purple-600 hover:text-purple-800 transition focus:outline-none bg-transparent appearance-none p-0 cursor-pointer"
            >
              {openIndex === idx ? 'Tutup' : 'Pelajari lebih lanjut'}
            </button>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.p
                  key="detail"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-sm text-left text-gray-600"
                >
                  {item.detail}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LayananKami;
