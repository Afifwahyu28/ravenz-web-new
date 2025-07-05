import React from "react";

const TentangKami = () => {
  return (
    <section id="tentang" className="px-6 md:px-16 py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Tentang Kami</h2>
        <div className="max-w-3xl mx-auto text-sm leading-relaxed mb-6">
          Kami adalah tim kreatif yang berdedikasi untuk menghasilkan karya visual berkualitas tinggi berdiri sejak 2020, kami telah menyelesaikan puluhan proyek.
          Visi kami adalah mengabadikan setiap momen dengan cerita yang bermakna.
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <img src="src/assets/TentangKami-1.jpg" className="w-50 h-60 object-cover rounded-md shadow-md shadow-current" />
          <img src="src/assets/TentangKami-2.jpg" className="w-50 h-60 object-cover rounded-md shadow-md shadow-current" />
          <img src="src/assets/TentangKami-3.jpg" className="w-50 h-60 object-cover rounded-md shadow-md shadow-current" />
        </div>
      </section>
  );
};

export default TentangKami;
