import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Kontak = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(false), 3000); // auto-hide 3 detik
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kowcvzp",
        "template_aya369o",
        form.current,
        "0dfielWzVm1eB6e2C"
      )
      .then(
        (result) => {
          setSuccessMsg(true);
          form.current.reset();
        },
        (error) => {
          alert("Terjadi kesalahan saat mengirim pesan.");
        }
      );
  };

  return (
    <section id="kontak" className="px-6 md:px-16 py-20 bg-gray-100 text-center relative">
      <h2 className="text-2xl font-bold mb-6">Hubungi Kami</h2>

      {/* Google Maps Embed */}
      <div className="mb-8">
        <iframe
          title="Lokasi Kami"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2818402780804!2d110.40428249678956!3d-7.759904899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd3bdc4ef%3A0x6f1714b0c4544586!2sUniversitas%20Amikom%20Yogyakarta!5e0!3m2!1sid!2sid!4v1748639251429!5m2!1sid!2sid"
          width="100%"
          height="300"
          className="rounded-md border"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Form Kontak */}
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto grid gap-4 text-left">
        <input
          type="text"
          name="user_name"
          placeholder="Nama"
          className="p-3 border rounded-md"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="p-3 border rounded-md"
          required
        />
        <select name="category" className="p-3 border rounded-md" required>
          <option value="">-- Pilih Kategori --</option>
          <option value="Short Film">Short Film</option>
          <option value="Iklan">Iklan</option>
          <option value="Buku Tahunan">Buku Tahunan</option>
        </select>
        <textarea
          name="message"
          placeholder="Pesan"
          rows="4"
          className="p-3 border rounded-md"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
        >
          Kirim Pesan
        </button>
      </form>

      {/* Notifikasi sukses dengan animasi */}
      {successMsg && (
        <div
          className="fixed top-6 right-6 bg-green-600 text-white px-5 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-fadeInSlideDown z-50 cursor-pointer"
          onClick={() => setSuccessMsg(false)}
          role="alert"
          aria-live="assertive"
          style={{ minWidth: "280px" }}
        >
          {/* Icon Centang */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">Pesan berhasil dikirim!</span>
        </div>
      )}

      {/* Animasi CSS */}
      <style jsx>{`
        @keyframes fadeInSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInSlideDown {
          animation: fadeInSlideDown 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Kontak;
