import React from "react";

const LayananKami = () => {
  return (
    <section id="layanan" className="px-6 md:px-16 py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Layanan kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Short Film',
              img: 'src/assets/Short-film.jpg',
              desc: 'Produksi dokumentasi dan naratif dengan storytelling yang kuat',
            },
            {
              title: 'Iklan',
              img: 'src/assets/Iklan.jpeg',
              desc: 'Iklan kreatif untuk TV, media sosial, dan kampanye digital.',
            },
            {
              title: 'Buku Tahunan',
              img: 'src/assets/Buku-Tahunan.jpeg',
              desc: 'Pemotretan kreatif untuk kenangan sekolah yang tak terlupakan',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <img src={item.img} className="w-full h-100 object-cover rounded-md mb-2 shadow-md shadow-current" />
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm mb-2">{item.desc}</p>
              <a href="#" className="text-purple-600 text-sm underline">Pelajari lebih lanjut</a>
            </div>
          ))}
        </div>
      </section>
  );
};

export default LayananKami;
