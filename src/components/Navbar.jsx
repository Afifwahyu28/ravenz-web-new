import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Mengapa Kami', href: '#mengapa-kami' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`mx-4 mt-3 rounded-2xl px-6 md:px-16 py-1 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-white/20 shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Logo & Brand */}
        <a
          href="#top"
          className={`flex items-center gap-2 font-bold text-2xl transition-colors duration-300 ${
          scrolled ? 'text-black hover:text-purple-600' : 'text-white hover:text-purple-300'
        }`}
        >
        <img
          src="logo.png"
          alt="Logo"
          className={`h-8 w-8 object-contain transition-colors duration-300 ${
          scrolled ? 'brightness-0' : 'brightness-200'
        }`}
        />
        RavenzWRLD
      </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[1.1rem] font-medium list-none items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition hover:text-purple-600 ${
                  scrolled ? 'text-purple-500' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black text-white text-center px-6 py-4 rounded-b-2xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 border-b border-white/20 hover:text-purple-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
