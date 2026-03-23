import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Works', path: '/works' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="py-6 px-4 md:px-8 flex justify-end items-center max-w-5xl mx-auto w-full relative z-50">
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <ul className={`md:flex md:space-x-8 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-20 md:top-0 transition-all duration-300 ${isOpen ? 'flex flex-col items-center space-y-4 py-4 shadow-md md:shadow-none' : 'hidden'}`}>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'text-[#FF6464] font-medium text-lg md:text-lg' : 'text-gray-900 hover:text-[#FF6464] font-medium text-lg md:text-lg'
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
