import { MessageCircle, Phone, MessageSquare } from 'lucide-react';

const FloatingButtons = ({ onChatClick }) => {
  return (
    <div className="flex md:flex-col flex-row space-x-2 md:space-x-0 md:space-y-2 fixed bottom-6 right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[44px] h-[44px] bg-[#151515] hover:bg-[#252525] border border-white/5 transition-all duration-300 hover:scale-110 rounded-sm flex items-center justify-center group relative overflow-hidden shadow-lg"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-[#25D366] transition-colors shadow-[0_0_8px_rgba(37,211,102,0.8)]"></div>
        <MessageCircle size={18} strokeWidth={1.5} className="text-white/70 group-hover:text-[#25D366] transition-colors" />
      </a>

      {/* Phone */}
      <a
        href="tel:+918948869211"
        className="w-[44px] h-[44px] bg-[#151515] hover:bg-[#252525] border border-white/5 transition-all duration-300 hover:scale-110 rounded-sm flex items-center justify-center group relative overflow-hidden shadow-lg"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-[#34d399] transition-colors shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
        <Phone size={18} strokeWidth={1.5} className="text-white/70 group-hover:text-[#34d399] transition-colors" />
      </a>

      {/* Chat / Contact */}
      <button
        onClick={onChatClick}
        className="w-[44px] h-[44px] bg-[#151515] hover:bg-[#252525] border border-white/5 transition-all duration-300 hover:scale-110 rounded-sm flex items-center justify-center group relative overflow-hidden shadow-lg"
      >
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-[#34d399] transition-colors shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
        <MessageSquare size={18} strokeWidth={1.5} className="text-white/70 group-hover:text-[#34d399] transition-colors" />
      </button>
    </div>
  );
};

export default FloatingButtons;
