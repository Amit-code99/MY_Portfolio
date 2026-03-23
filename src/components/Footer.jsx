import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bt-10">
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="text-gray-800 hover:text-[#FF6464] transition-colors">
          <Facebook size={30} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="#" className="text-gray-800 hover:text-[#FF6464] transition-colors">
          <Instagram size={30} />
        </a>
        <a href="#" className="text-gray-800 hover:text-[#FF6464] transition-colors">
          <Twitter size={30} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="#" className="text-gray-800 hover:text-[#FF6464] transition-colors">
          <Linkedin size={30} fill="currentColor" strokeWidth={0} />
        </a>
      </div>
      <p className="text-center text-gray-500 text-sm">
        Copyright ©2026 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
