import React from "react";

const Portofolio = () => {
  return (
    <section id="portofolio" className="px-6 py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-10">Portofolio</h2>
      {/* Tambahkan kartu-kartu portofolio di sini */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* contoh item */}
        <div className="shadow-md rounded-md overflow-hidden">
          <img src="/assets/images/proyek1.jpg" alt="Proyek 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-base">Short Film – Proyek 2024</h3>
          </div>
        </div>
        {/* tambahkan lainnya */}
      </div>
    </section>
  );
};

export default Portofolio;
