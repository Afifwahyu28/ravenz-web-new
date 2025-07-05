import React from "react";
import { Button } from './Button';

const Portofolio = () => {
  return (
    <section id="portofolio" className="px-6 md:px-16 py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Portofolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Short Film – Proyek',
              year: '2024',
              img: 'src/assets/Portfolio-1.jpeg',
            },
            {
              title: 'Iklan – Kampanye',
              year: '2023',
              img: 'src/assets/Portfolio-2.jpeg',
            },
            {
              title: 'Buku Tahunan – SMA',
              year: '2024',
              img: 'src/assets/Portfolio-3.jpeg',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <img src={item.img} className="w-full h-50 object-cover rounded-md mb-2 shadow-md shadow-current" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.year}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button className="bg-purple-800 hover:bg-purple-700">Lihat Semua Portofolio</Button>
        </div>
      </section>
  );
};

export default Portofolio;
