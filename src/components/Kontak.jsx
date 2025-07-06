import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Kontak = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(false), 3000);
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
        () => {
          setSuccessMsg(true);
          form.current.reset();
        },
        () => {
          alert("Terjadi kesalahan saat mengirim pesan.");
        }
      );
  };

  return (
    <section
      id="kontak"
      className="px-6 md:px-16 py-12 bg-gray-100 text-center relative"
    >
      <h2 className="text-2xl font-bold mb-4">Sampaikan Cerita Anda ke Kami!</h2>
      <h3 className="text-m font-medium mb-7">Kami siap membantu menghidupkan visi Anda melalui karya visual yang autentik dan sinematik. Mari wujudkan cerita Anda jadi nyata.</h3>

      {/* Grid dua kolom: Form & Info+Maps */}
      <div className="grid md:grid-cols-2 gap-8 items-start text-left">
        {/* Form Kontak */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Nama"
            className="p-3 border rounded-md bg-white text-black"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 border rounded-md bg-white text-black"
            required
          />
          <select name="category" className="p-3 border rounded-md bg-white text-black" required>
            <option value="">-- Pilih Kategori --</option>
            <option value="Short Film">Short Film</option>
            <option value="Iklan">Iklan</option>
            <option value="Buku Tahunan">Buku Tahunan</option>
          </select>
          <textarea
            name="message"
            placeholder="Pesan"
            rows="4"
            className="p-3 border rounded-md bg-white text-black"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
          >
            Kirim Pesan
          </button>
        </form>

        {/* Info Kontak + Map */}
        <div className="space-y-4">
          {/* Info Kontak */}
          <div className="space-y-3">
            <p className="text-sm">📧 Email: Jhcinema00@gmail.com</p>
            <p className="text-sm">📞 Telepon: +62 895-3006-5082</p>
            <p className="text-sm">📍 Alamat: Bale Catur Sleman Regency</p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-64 rounded-md overflow-hidden shadow-md">
            <iframe
              title="Lokasi Kami"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.724724514702!2d110.28638807495913!3d-7.818934677647969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDknMDguMiJTIDExMMKwMTcnMjAuMyJF!5e0!3m2!1sen!2sid!4v1751821500529!5m2!1sen!2sid"
              width="100%"
              height="100%"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Notifikasi sukses */}
      {successMsg && (
        <div
          className="fixed top-6 right-6 bg-green-600 text-white px-5 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-fadeInSlideDown z-50 cursor-pointer"
          onClick={() => setSuccessMsg(false)}
          role="alert"
          aria-live="assertive"
          style={{ minWidth: "280px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
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
