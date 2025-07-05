import React from "react";

const services = [
  {
    title: "Short Film",
    description: "Produksi dokumentasi dan naratif dengan storytelling yang kuat.",
    image: "/assets/images/shortfilm.jpg"
  },
  {
    title: "Iklan",
    description: "Iklan kreatif untuk TV, media sosial, dan kampanye digital.",
    image: "/assets/images/iklan.jpg"
  },
  {
    title: "Buku Tahunan",
    description: "Pemotretan case retan kreatif untuk kenangan sekolah yang tak terlupakan.",
    image: "/assets/images/bukutahunan.jpg"
  }
];

const LayananKami = () => {
  return (
    <section id="layanan" className="px-6 py-16 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-10">Layanan Kami</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LayananKami;
