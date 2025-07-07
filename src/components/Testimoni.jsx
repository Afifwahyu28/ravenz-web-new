import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimoni = () => {
  const testimonials = [
    {
      name: "SMA 1 Merdeka",
      project: "Buku Tahunan Sekolah",
      title: "Kreatif dan Luar Biasa!",
      quote:
        "Timnya asik dan sangat kreatif! Buku tahunan sekolah kami jadi keren banget dan beda dari yang lain. Semua siswa dan guru sangat puas dengan hasilnya.",
      stars: 5,
    },
    {
      name: "Kopi Senja",
      project: "Iklan Digital",
      title: "Iklan yang Menjual",
      quote:
        "Iklan produk kami dieksekusi dengan sangat profesional. Hasilnya melebihi ekspektasi dan engagement media sosial kami meningkat drastis. Terima kasih, RavenzWRLD!",
      stars: 5,
    },
    {
      name: "Festival Film Indie",
      project: "Short Film",
      title: "Storytelling yang Kuat",
      quote:
        "Short film yang mereka produksi punya storytelling yang kuat dan visual yang sangat menyentuh. Benar-benar tim yang berbakat dan recommended!",
      stars: 5,
    },
    {
      name: "BEM Universitas Bangsa",
      project: "Dokumentasi Acara",
      title: "Pelayanan Cepat & Profesional",
      quote:
        "Prosesnya sangat cepat dan mudah. Mereka berhasil menangkap semua momen penting di acara kami dengan sinematik. Sangat profesional.",
      stars: 5,
    },
    {
      name: "Brand Fashion Lokal",
      project: "Iklan Koleksi Baru",
      title: "Visual yang Estetik",
      quote:
        "RavenzWRLD berhasil menerjemahkan visi brand kami ke dalam visual yang estetik dan sesuai dengan target pasar kami. Kerja yang bagus!",
      stars: 5,
    },
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section id="testimoni" className="px-6 md:px-16 py-20 bg-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-gray-800">
          Apa Kata Klien RavenzWRLD 👋🏻
        </h2>
        <p className="text-gray-600">
          Kumpulan cerita dan kepuasan dari klien yang telah berkolaborasi
          dengan kami.
        </p>
      </div>

      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden mt-12 relative"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 py-4"
          whileTap={{ cursor: "grabbing" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%] bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="flex mb-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {testimonial.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-sm font-semibold text-gray-800">
                - {testimonial.name}
              </p>
              <p className="text-xs text-purple-600 font-medium">
                {testimonial.project}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="hidden md:flex justify-center mt-8 gap-6 items-center">
        <p className="text-m text-gray-600">Geser untuk melihat lebih banyak</p>
      </div>
    </section>
  );
};

export default Testimoni;
