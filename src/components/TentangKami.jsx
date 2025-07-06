import React from "react";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const TentangKami = () => {
  return (
    <section
      id="tentang"
      className="scroll-mt-32 px-6 md:px-16 py-24 bg-white"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        Tentang Kami
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] items-center gap-y-12 md:gap-y-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        {/* Teks - Kolom 1 */}
        <motion.div
          className="text-left text-lg md:text-2xl leading-relaxed text-gray-800 space-y-6 pl-2 md:pl-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <p>
            Kami adalah tim kreatif yang berdedikasi untuk menghasilkan karya
            visual berkualitas tinggi. Berdiri sejak 2020, kami telah
            menyelesaikan puluhan proyek di berbagai bidang produksi video dan fotografi.
          </p>
          <p>
            Visi kami adalah mengabadikan setiap momen dengan cerita yang bermakna
            dan visual yang sinematik.
          </p>
        </motion.div>

        {/* Spacer */}
        <div></div>

        {/* Kolase Foto */}
        <motion.div
          className="relative h-[520px] md:h-[560px] w-full max-w-md md:max-w-[750px] md:ml-auto flex justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <img
            src="src/assets/TentangKami-1.jpg"
            alt="tentang1"
            className="absolute top-0 left-0 w-[180px] h-[260px] md:w-[300px] md:h-[460px] object-cover rounded-xl shadow-xl"
          />
          <img
            src="src/assets/TentangKami-2.jpg"
            alt="tentang2"
            className="absolute top-1/2 -translate-y-1/2 left-[100px] md:left-[200px] w-[200px] h-[280px] md:w-[320px] md:h-[500px] object-cover rounded-xl shadow-xl z-10"
          />
          <img
            src="src/assets/TentangKami-3.jpg"
            alt="tentang3"
            className="absolute bottom-0 left-[220px] md:left-[400px] w-[180px] h-[260px] md:w-[320px] md:h-[480px] object-cover rounded-xl shadow-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TentangKami;
