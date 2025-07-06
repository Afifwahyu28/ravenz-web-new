import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white text-center px-6 py-6 text-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="mb-2">© 2025 Ravenz WRLD Studio. All Rights Reserved.</p>
      <div className="flex justify-center space-x-6 items-center">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/rvnzwrld?igsh=MnpyYWp1OXVjNDFj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition text-pink-500 hover:text-white"
          aria-label="Instagram"
        >
          <img
            src="instagram.png"
            alt="Instagram"
            className="w-5 h-5 object-contain"
          />
        </a>
        {/* YouTube */}
        <a
          href="https://youtube.com/@ravensworld5345?si=WCLlTdLPXGDzR9f_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition text-red-600 hover:text-white"
          aria-label="YouTube"
        >
          <img
            src="youtube.png"
            alt="YouTube"
            className="w-5 h-5 object-contain"
          />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
