import React from "react";
import { motion } from "framer-motion";
import { Video, Users, Wallet, MessageSquareQuote } from "lucide-react";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MengapaKami = () => {
  const features = [
    {
      icon: (
        <Video className="w-9 h-9 text-purple-600 transition-colors duration-300 group-hover:text-purple-500" />
      ),
      title: "Sinematografi Emosional & Autentik",
      description:
        "Kami percaya setiap proyek punya cerita unik. Tim kami ahli dalam mengemas momen menjadi visual sinematik yang menggugah emosi dan terasa otentik, bukan sekadar gambar bergerak.",
    },
    {
      icon: (
        <Users className="w-9 h-9 text-purple-600 transition-colors duration-300 group-hover:text-purple-500" />
      ),
      title: "Tim Muda, Kreatif, dan Responsif",
      description:
        "Sebagai tim yang dekat dengan generasi muda, kami paham tren visual saat ini dan selalu terbuka untuk kolaborasi kreatif, baik untuk proyek sekolah maupun komersial.",
    },
    {
      icon: (
        <Wallet className="w-9 h-9 text-purple-600 transition-colors duration-300 group-hover:text-purple-500" />
      ),
      title: "Harga Transparan & Fleksibel",
      description:
        "Kami menyadari tiap proyek punya kebutuhan berbeda. Oleh karena itu, kami menyediakan paket layanan fleksibel yang bisa disesuaikan dengan anggaran Anda.",
    },
    {
      icon: (
        <MessageSquareQuote className="w-9 h-9 text-purple-600 transition-colors duration-300 group-hover:text-purple-500" />
      ),
      title: "Fokus pada Branding dan Pesan",
      description:
        "Dalam setiap produksi iklan atau film pendek, kami tak hanya merekam visual, tapi juga menyampaikan pesan yang kuat, mendalam, dan tepat sasaran untuk audiens Anda.",
    },
  ];

  return (
    <section
      id="mengapa-kami"
      className="px-6 md:px-16 py-20 bg-gray-50 text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Mengapa Memilih RavenzWRLD?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:bg-black"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariant}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-purple-500">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MengapaKami;