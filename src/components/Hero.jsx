import React, { useRef } from "react";
import { Button } from './Button';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';

function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function ParallaxText({ children, baseVelocity = 100, className = "" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, -25, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const repeatedText = Array(100).fill(children).join(" "); // Tidak ada tanda strip

  return (
    <div className={`overflow-hidden w-full absolute left-0 ${className}`}>
      <motion.div
        style={{ x }}
        className="font-plaster text-5xl md:text-6xl text-purple-300 whitespace-nowrap"
      >
        <span>{repeatedText}</span>
      </motion.div>
    </div>
  );
}

const Hero = () => {
  return (
    <section
      id="top"
      style={{ backgroundImage: "url('src/assets/background.jpg')" }}
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
        Mengabadikan Cerita <br /> Anda Dengan Sinematik
      </h1>
      <p className="mb-4 text-sm md:text-base max-w-xl">
        Produksi Short Film, Iklan, dan Pemotretan Buku Tahunan Sekolah
      </p>
      <a
        href="#portofolio"
        className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition"
        >    
        Lihat Portofolio
      </a>

      {/* Parallax text bawah */}
      <ParallaxText baseVelocity={-5} className="bottom-14" >
        RAVENZ
      </ParallaxText>
      <ParallaxText baseVelocity={5} className="bottom-3" >
        WRLD
      </ParallaxText>
    </section>
  );
};

export default Hero;
