import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-[#2C3333] border-t border-gray-700">
      <div className="flex justify-center space-x-8 mb-8">
        <a href="#" className="text-gray-400 hover:text-[#F7C04A] transition-all transform hover:scale-125">
          <Facebook size={26} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#F7C04A] transition-all transform hover:scale-125">
          <Instagram size={26} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#F7C04A] transition-all transform hover:scale-125">
          <Twitter size={26} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="#" className="text-gray-400 hover:text-[#F7C04A] transition-all transform hover:scale-125">
          <Linkedin size={26} fill="currentColor" strokeWidth={0} />
        </a>
      </div>
      <div className="text-center">
        <p className="text-gray-500 font-medium tracking-widest text-xs uppercase mb-2">
          Made with ❤️ by Amit Yadav
        </p>
        <p className="text-gray-600 text-xs">
          Copyright ©2026 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
