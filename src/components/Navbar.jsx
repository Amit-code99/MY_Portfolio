import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Centered Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between bg-[#151515]/90 backdrop-blur-md border border-white/5 rounded-md px-6 py-3 w-[450px] shadow-2xl">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center group">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8da532] group-hover:scale-105 transition-transform">
            <path d="M24 10L10 24L24 38L38 24L24 10Z" fill="currentColor"/>
            <path d="M24 18L18 24L24 30L30 24L24 18Z" fill="#090a0a"/>
          </svg>
        </NavLink>

        {/* Start Project Button */}
        <button className="relative bg-[#1a1a1a] hover:bg-[#252525] transition-colors border border-white/10 rounded-sm px-6 py-2 flex items-center group overflow-hidden">
           {/* Green subtle glow line on left */}
           <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8da532] shadow-[0_0_8px_rgba(141,165,50,0.8)]"></div>
           <span className="text-[13px] font-medium text-white tracking-wide z-10 group-hover:pr-1 transition-all">Start a project &rarr;</span>
        </button>

        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-white p-2 border border-white/10 rounded-sm bg-[#1a1a1a] hover:bg-[#252525] transition-colors focus:outline-none flex items-center justify-center">
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile/Full Menu Dropdown (Simplified placeholder) */}
      <div className={`fixed inset-0 z-40 bg-[#090a0a]/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col items-center space-y-8">
          {['HOME', 'ABOUT', 'PORTFOLIO', 'SERVICE', 'BLOG', 'CONTACT US'].map((name) => (
            <li key={name}>
              <NavLink
                to={name === 'HOME' ? '/' : `/${name.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-2xl font-bold tracking-widest transition-colors ${
                    isActive ? 'text-[#8da532]' : 'text-white hover:text-[#8da532]'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
