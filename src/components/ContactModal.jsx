import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      {/* Dark Overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-[440px] bg-[#0c0d0d] border border-white/10 rounded-sm shadow-2xl p-5 md:p-6 animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/5 transition-colors rounded-sm"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-[7px] tracking-[0.2em] text-white/40 uppercase mb-2 block">
            CONTACT
          </span>
          <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight leading-[1] mb-2 text-white">
            Start a <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">project.</span>
          </h2>
          <p className="text-white/60 text-[12px]">
            Tell us briefly about your project — we'll reply within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
                FIRST NAME <span className="text-[#8da532] ml-1">*</span>
              </label>
              <input type="text" placeholder="Anna" className="bg-[#151515] border border-white/5 focus:border-[#8da532] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
                LAST NAME <span className="text-[#8da532] ml-1">*</span>
              </label>
              <input type="text" placeholder="Smith" className="bg-[#151515] border border-white/5 focus:border-[#8da532] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
              EMAIL <span className="text-[#8da532] ml-1">*</span>
            </label>
            <input type="email" placeholder="anna@company.com" className="bg-[#151515] border border-white/5 focus:border-[#8da532] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required />
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
              PHONE NUMBER <span className="text-[#8da532] ml-1">*</span>
            </label>
            <input type="tel" placeholder="+1 555 1234567" className="bg-[#151515] border border-white/5 focus:border-[#8da532] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center space-x-1">
                <span>COMPANY NAME</span> <span className="text-white/30">— optional</span>
              </label>
              <input type="text" placeholder="Studio Inc." className="bg-[#151515] border border-white/5 focus:border-[#8da532] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center space-x-1">
                <span>CURRENT WEBSITE</span> <span className="text-white/30">— optional</span>
              </label>
              <input type="url" placeholder="https://your-domain.com" className="bg-[#151515] border border-white/5 focus:border-[#8da532] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center space-x-1">
              <span>MESSAGE</span> <span className="text-white/30">— optional</span>
            </label>
            <textarea placeholder="Idea, industry, timeline — what we should know." rows="3" className="bg-[#151515] border border-white/5 focus:border-[#8da532] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full resize-none"></textarea>
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start space-x-3 pt-1">
            <div className="relative flex items-center justify-center mt-1">
              <input type="checkbox" id="privacy" className="peer appearance-none w-3.5 h-3.5 border border-white/20 bg-[#151515] rounded-sm checked:bg-[#8da532] checked:border-[#8da532] cursor-pointer transition-colors" required />
              <svg className="absolute w-2.5 h-2.5 text-[#090a0a] opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <label htmlFor="privacy" className="text-[11px] text-white/60 cursor-pointer select-none leading-tight">
              I consent to the processing of my data according to the <a href="#" className="text-white hover:text-[#8da532] transition-colors underline decoration-white/20 underline-offset-4">privacy policy</a>.
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full mt-2 bg-[#1a1b1b] hover:bg-[#202222] transition-all duration-300 hover:scale-[1.02] border border-white/5 rounded-sm py-3 flex items-center justify-center group overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8da532] shadow-[0_0_12px_rgba(141,165,50,0.8)]"></div>
            <span className="text-[12px] font-medium text-white tracking-wide group-hover:pr-2 transition-all">
              Send request &rarr;
            </span>
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactModal;
