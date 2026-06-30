import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#090a0a] border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Slogan */}
          <div className="col-span-2 flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              {/* Custom SVG Circle Logo matching the user's AKY sliced design */}
              <svg viewBox="0 0 100 100" className="w-10 h-10 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <mask id="aky-mask">
                    <rect width="100" height="100" fill="white" />
                    {/* Sliced cuts angled to match italic slant */}
                    <rect x="36" y="5" width="4" height="90" fill="black" transform="rotate(12 36 50)" />
                    <rect x="64" y="5" width="4" height="90" fill="black" transform="rotate(12 64 50)" />
                  </mask>
                </defs>
                <circle cx="50" cy="50" r="48" fill="black" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <text 
                  x="50" 
                  y="65" 
                  fontFamily="'Inter', 'Arial Black', sans-serif" 
                  fontWeight="900" 
                  fontStyle="italic"
                  fontSize="36" 
                  fill="white" 
                  textAnchor="middle" 
                  mask="url(#aky-mask)"
                  letterSpacing="-1.5"
                >
                  AKY
                </text>
              </svg>
              <span className="text-white font-bold tracking-wide text-lg">AKY Technologies</span>
            </div>
            <h3 className="text-[18px] md:text-[20px] font-medium leading-[1.4] text-white/80 max-w-sm">
              Building scalable web apps <br />
              & driving digital growth.
            </h3>
          </div>

          {/* Col 2: Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">CONTACT</h4>
            <ul className="flex flex-col space-y-4 text-[13px]">
              <li>
                <a href="mailto:amityadav63999@gmail.com" className="text-[#00FF66] hover:text-[#33ff85] transition-colors font-medium">
                  amityadav63999@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918948869211" className="text-white/80 hover:text-[#00FF66] transition-colors">
                  +91 8948869211
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/80 hover:text-[#00FF66] transition-colors flex items-center group"
                >
                  WhatsApp <ArrowRight size={12} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all transform -rotate-45" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Location */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">LOCATION</h4>
            <ul className="flex flex-col space-y-2 text-[13px]">
              <li className="text-white font-bold">India</li>
              <li className="text-white/40">Available Remote</li>
            </ul>
          </div>

          {/* Col 4: Sitemap */}
          <div className="col-span-1 flex flex-col">
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">SITEMAP</h4>
            <ul className="flex flex-col space-y-4 text-[13px] text-white">
              <li><Link to="/" className="hover:text-[#00FF66] transition-colors">Home</Link></li>
              <li><Link to="/works" className="hover:text-[#00FF66] transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-[#00FF66] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#00FF66] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 5: Social */}
          <div className="col-span-1 flex flex-col">
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">SOCIAL</h4>
            <ul className="flex flex-col space-y-4 text-[13px] text-white/80">
              <li>
                <a href="https://github.com/Amit-code99" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF66] transition-colors group flex items-center">
                  GitHub <ArrowRight size={12} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all transform -rotate-45" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF66] transition-colors group flex items-center">
                  LinkedIn <ArrowRight size={12} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all transform -rotate-45" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@akyofficial9341" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FF66] transition-colors group flex items-center">
                  YouTube <ArrowRight size={12} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all transform -rotate-45" />
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
          <span>&copy; 2026 AKY Technologies. All rights reserved.</span>
          <span className="mt-4 sm:mt-0">BUILT BY AKY.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
