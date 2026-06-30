import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
    privacy: false,
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a96524a6-20fd-4f78-84e5-43aa6203a49a',
          subject: `New Project Inquiry from ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Not provided',
          website: formData.website || 'Not provided',
          message: formData.message || 'No additional message',
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', website: '', message: '', privacy: false });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const resetForm = () => {
    setStatus('idle');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

      {/* Dark Overlay backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-[440px] bg-[#0c0d0d] border border-white/10 rounded-sm shadow-2xl p-5 md:p-6 max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={() => { onClose(); setTimeout(resetForm, 300); }}
          className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/5 transition-colors rounded-sm z-10"
        >
          <X size={16} />
        </button>

        {/* Success State */}
        {status === 'success' && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-[#00FF66]/10 border border-[#00FF66]/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={32} className="text-[#00FF66]" />
            </div>
            <h3 className="text-[24px] font-bold text-white mb-3">Request Sent!</h3>
            <p className="text-white/60 text-[13px] max-w-[280px] mb-8">
              Thanks for reaching out. I'll review your project details and reply within 24 hours.
            </p>
            <button
              onClick={() => { onClose(); setTimeout(resetForm, 300); }}
              className="bg-[#1a1b1b] hover:bg-[#252525] border border-white/5 rounded-sm px-8 py-3 text-[13px] font-medium text-white transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mb-6">
              <AlertCircle size={32} className="text-red-400" />
            </div>
            <h3 className="text-[24px] font-bold text-white mb-3">Something went wrong</h3>
            <p className="text-white/60 text-[13px] max-w-[280px] mb-8">
              The form couldn't be submitted. Please try again or reach out via WhatsApp.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={resetForm}
                className="bg-[#1a1b1b] hover:bg-[#252525] border border-white/5 rounded-sm px-6 py-3 text-[13px] font-medium text-white transition-colors"
              >
                Try Again
              </button>
              <a
                href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-sm px-6 py-3 text-[13px] font-medium text-[#25D366] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Form State */}
        {(status === 'idle' || status === 'loading') && (
          <>
            {/* Header */}
            <div className="mb-6">
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/40 uppercase mb-2 block">
                CONTACT
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold tracking-tight leading-[1] mb-2 text-white">
                Start a <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#00FF66]">project.</span>
              </h2>
              <p className="text-white/60 text-[12px]">
                Tell us briefly about your project — I'll reply within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
                    FIRST NAME <span className="text-[#00FF66] ml-1">*</span>
                  </label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your name" className="bg-[#151515] border border-white/5 focus:border-[#00FF66] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required disabled={status === 'loading'} />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
                    LAST NAME <span className="text-[#00FF66] ml-1">*</span>
                  </label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="bg-[#151515] border border-white/5 focus:border-[#00FF66] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required disabled={status === 'loading'} />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
                  EMAIL <span className="text-[#00FF66] ml-1">*</span>
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="bg-[#151515] border border-white/5 focus:border-[#00FF66] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required disabled={status === 'loading'} />
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center">
                  PHONE NUMBER <span className="text-[#00FF66] ml-1">*</span>
                </label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 1234567890" className="bg-[#151515] border border-white/5 focus:border-[#00FF66] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" required disabled={status === 'loading'} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col">
                  <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center space-x-1">
                    <span>COMPANY NAME</span> <span className="text-white/30">— optional</span>
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="bg-[#151515] border border-white/5 focus:border-[#00FF66] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" disabled={status === 'loading'} />
                </div>
                <div className="flex-1 flex flex-col">
                  <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center space-x-1">
                    <span>CURRENT WEBSITE</span> <span className="text-white/30">— optional</span>
                  </label>
                  <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://your-domain.com" className="bg-[#151515] border border-white/5 focus:border-[#00FF66] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full" disabled={status === 'loading'} />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase mb-1.5 flex items-center space-x-1">
                  <span>MESSAGE</span> <span className="text-white/30">— optional</span>
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Idea, industry, timeline — what I should know." rows="3" className="bg-[#151515] border border-white/5 focus:border-[#00FF66] rounded-sm px-3 py-2 text-white text-[12px] outline-none transition-colors w-full resize-none" disabled={status === 'loading'}></textarea>
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-start space-x-3 pt-1">
                <div className="relative flex items-center justify-center mt-1">
                  <input type="checkbox" id="modal-privacy" name="privacy" checked={formData.privacy} onChange={handleChange} className="peer appearance-none w-3.5 h-3.5 border border-white/20 bg-[#151515] rounded-sm checked:bg-[#00FF66] checked:border-[#00FF66] cursor-pointer transition-colors" required disabled={status === 'loading'} />
                  <svg className="absolute w-2.5 h-2.5 text-[#090a0a] opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <label htmlFor="modal-privacy" className="text-[11px] text-white/60 cursor-pointer select-none leading-tight">
                  I consent to the processing of my data according to the <a href="#" className="text-white hover:text-[#00FF66] transition-colors underline decoration-white/20 underline-offset-4">privacy policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-2 bg-[#1a1b1b] hover:bg-[#202222] transition-all duration-300 hover:scale-[1.02] border border-white/5 rounded-sm py-3 flex items-center justify-center group overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00FF66] shadow-[0_0_12px_rgba(0,255,102,0.8)]"></div>
                {status === 'loading' ? (
                  <span className="flex items-center text-[12px] font-medium text-white tracking-wide">
                    <Loader2 size={14} className="animate-spin mr-2" />
                    Sending...
                  </span>
                ) : (
                  <span className="text-[12px] font-medium text-white tracking-wide group-hover:pr-2 transition-all">
                    Send request &rarr;
                  </span>
                )}
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
