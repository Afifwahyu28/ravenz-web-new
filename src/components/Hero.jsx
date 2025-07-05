import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[url('/path/to/your/hero-image.jpg')] bg-cover bg-center text-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Mengabadikan Cerita <br /> Anda Dengan Sinematik
      </h1>
      <p className="mt-4 text-sm md:text-base max-w-xl">
        Produksi Short Film, Iklan, dan Pemotretan Buku Tahunan Sekolah
      </p>
      <a href="#portofolio" className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition">
        Lihat Portofolio
      </a>
    </section>
  );
};

export default Hero;
