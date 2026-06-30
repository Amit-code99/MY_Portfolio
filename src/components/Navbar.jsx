import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'HOME', to: '/', type: 'route' },
    { name: 'ABOUT', sectionId: 'about', type: 'scroll' },
    { name: 'SERVICES', sectionId: 'services', type: 'scroll' },
    { name: 'PORTFOLIO', to: '/works', type: 'route' },
    { name: 'BLOG', to: '/blog', type: 'route' },
    { name: 'CONTACT', to: '/contact', type: 'route' },
  ];

  return (
    <>
      {/* Floating Centered Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between bg-[#151515]/90 backdrop-blur-md border border-white/5 rounded-md px-4 md:px-6 py-3 w-[calc(100%-2rem)] max-w-[520px] shadow-2xl">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center group">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#34d399] group-hover:scale-105 transition-transform">
            <path d="M24 10L10 24L24 38L38 24L24 10Z" fill="currentColor"/>
            <path d="M24 18L18 24L24 30L30 24L24 18Z" fill="#090a0a"/>
          </svg>
        </NavLink>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20 rounded-sm px-3 py-2 items-center group"
        >
          <MessageCircle size={14} className="text-[#25D366] mr-1.5" />
          <span className="text-[11px] font-medium text-[#25D366] tracking-wide">WhatsApp</span>
        </a>

        {/* Start Project Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="relative bg-[#1a1a1a] hover:bg-[#252525] transition-colors border border-white/10 rounded-sm px-2.5 sm:px-4 py-2 flex items-center group overflow-hidden"
        >
           {/* Green subtle glow line on left */}
           <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#34d399] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
           <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-white tracking-wide z-10 group-hover:pr-1 transition-all">
             Start <span className="hidden sm:inline">a project</span> &rarr;
           </span>
        </button>

        {/* Hamburger Menu - Accessible 44x44px touch target */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="w-11 h-11 text-white/70 hover:text-white border border-white/10 rounded-sm bg-[#1a1a1a] hover:bg-[#252525] transition-colors focus:outline-none flex items-center justify-center"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Full Menu Dropdown */}
      <div className={`fixed inset-0 z-40 bg-[#090a0a]/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.type === 'route' ? (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-2xl font-bold tracking-widest transition-colors ${
                      isActive ? 'text-[#34d399]' : 'text-white hover:text-[#34d399]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ) : (
                <button
                  onClick={() => handleScrollLink(item.sectionId)}
                  className="text-2xl font-bold tracking-widest transition-colors text-white hover:text-[#34d399]"
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA in mobile menu */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <a
            href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-sm px-6 py-3 transition-colors"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            <span className="text-[14px] font-medium text-[#25D366]">Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
