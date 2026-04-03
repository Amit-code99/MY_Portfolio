import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PORTFOLIO', path: '/works' },
    { name: 'SERVICE', path: '/services' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <nav className="w-full py-8 md:py-10 px-6 md:px-24 absolute top-0 left-0 z-50 flex items-center justify-between">
      <div className="flex items-center">
        <NavLink to="/" className="flex items-center">
          <span className="text-white text-[24px] md:text-[28px] font-bold tracking-tight">AMIT</span>
          <span className="text-[#f2bd3f] text-[24px] md:text-[28px] font-bold tracking-tight ml-[6px]">YADAV</span>
        </NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <ul className={`md:flex md:space-x-8 lg:space-x-10 absolute md:static bg-[#2A3131] md:bg-transparent w-full md:w-auto left-0 top-[80px] md:top-0 transition-all duration-300 ${isOpen ? 'flex flex-col items-center space-y-6 py-10 shadow-xl' : 'hidden'}`}>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `text-[13px] font-medium tracking-wide transition-colors ${
                  isActive ? 'text-white' : 'text-[#f6f6f6] hover:text-[#f2bd3f] opacity-90 hover:opacity-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
