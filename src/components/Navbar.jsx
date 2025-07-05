import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ubah nilai ini sesuai kebutuhan
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-2">
        <div>
        <a href="#top" className="transition font-bold text-2xl text-purple-600 hover:text-white cursor-pointer">
          RavenzWRLD
        </a>
      </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-[1.1rem] font-medium list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className={`transition hover:text-purple-600 ${
    scrolled ? 'text-purple-500' : 'text-white'
  }`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          className={`md:hidden px-6 pb-4 text-[1rem] font-medium text-center ${
            scrolled ? 'bg-black text-black-800' : 'bg-black text-black'
          } list-none`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block py-2 border-b border-b-[0.5px] ${
                  scrolled ? 'text-purple-500' : 'text-white'
                } transition hover:text-purple-600`}
                onClick={() => setOpen(false)}
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
