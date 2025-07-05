import React from "react";
import { Button } from './Button';
const Hero = () => {
  return (
    <div
        id="top"
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Mengabadikan Cerita <br /> Anda Dengan Sinematik
        </h1>
        <p className="mb-4">Produksi Short Film, Iklan, dan Pemotretan Buku Tahunan Sekolah</p>
        <Button className="bg-purple-800 hover:bg-purple-700">Lihat Portofolio</Button>
      </div>
  );
};

export default Hero;
