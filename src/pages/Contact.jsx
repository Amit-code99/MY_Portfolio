import { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    document.title = 'Contact | Amit Yadav';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
          subject: formData.subject || `Contact from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#090a0a] min-h-screen text-white pt-28 pb-20">
      <div className="px-4 md:px-8 max-w-[1200px] mx-auto w-full">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[1px] w-8 bg-white/30"></div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
              Contact
            </span>
          </div>
          <h1 className="text-[46px] md:text-[60px] font-bold tracking-tight leading-[1] mb-4">
            Get in <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">touch.</span>
          </h1>
          <p className="text-white/60 text-[15px] max-w-[500px] leading-relaxed">
            Have a project in mind? Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4">Email</h3>
              <a href="mailto:amityadav63999@gmail.com" className="text-[18px] font-bold hover:text-[#34d399] transition-colors">
                amityadav63999@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4">Phone</h3>
              <a href="tel:+918948869211" className="text-[18px] font-bold hover:text-[#34d399] transition-colors">
                +91 8948869211
              </a>
            </div>
            <div>
              <h3 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4">Location</h3>
              <p className="text-[18px] font-bold">India</p>
              <p className="text-white/50 text-[14px] mt-1">Available for remote projects worldwide</p>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-sm px-6 py-4 transition-all duration-300 hover:scale-105 group"
              >
                <MessageCircle size={20} className="text-[#25D366]" />
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#25D366]">Chat on WhatsApp</span>
                  <span className="text-[11px] text-[#25D366]/60">Usually responds within an hour</span>
                </div>
                <ArrowRight size={16} className="text-[#25D366]/50 group-hover:translate-x-1 transition-transform -rotate-45" />
              </a>
            </div>

            {/* GitHub */}
            <div className="pt-2">
              <h3 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4">GitHub</h3>
              <a href="https://github.com/Amit-code99" target="_blank" rel="noopener noreferrer" className="text-[16px] font-medium hover:text-[#34d399] transition-colors flex items-center">
                github.com/Amit-code99 <ArrowRight size={14} className="ml-2 -rotate-45 opacity-50" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#111212] border border-white/5 rounded-sm p-8 md:p-12">

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-[#34d399]/10 border border-[#34d399]/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-[#34d399]" />
                </div>
                <h3 className="text-[28px] font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/60 text-[14px] max-w-[300px] mb-8">
                  Thanks for reaching out. I'll review your message and reply within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="bg-[#1a1b1b] hover:bg-[#252525] border border-white/5 rounded-sm px-8 py-3 text-[13px] font-medium text-white transition-colors">
                  Send another message
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle size={40} className="text-red-400" />
                </div>
                <h3 className="text-[28px] font-bold text-white mb-3">Something went wrong</h3>
                <p className="text-white/60 text-[14px] max-w-[300px] mb-8">Please try again or reach out via WhatsApp.</p>
                <div className="flex space-x-3">
                  <button onClick={() => setStatus('idle')} className="bg-[#1a1b1b] hover:bg-[#252525] border border-white/5 rounded-sm px-6 py-3 text-[13px] font-medium text-white transition-colors">Try Again</button>
                  <a href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-sm px-6 py-3 text-[13px] font-medium text-[#25D366] transition-colors">WhatsApp</a>
                </div>
              </div>
            ) : (
              <>
                <div className="font-mono text-[10px] tracking-[0.2em] text-[#34d399] uppercase mb-4">
                  SEND A MESSAGE
                </div>
                <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-10">
                  Tell me about your <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">project.</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase" htmlFor="contact-name">
                        Full Name <span className="text-[#34d399]">*</span>
                      </label>
                      <input
                        type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required
                        className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30"
                        placeholder="Amit Yadav"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase" htmlFor="contact-email">
                        Email <span className="text-[#34d399]">*</span>
                      </label>
                      <input
                        type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required
                        className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30"
                        placeholder="you@company.com"
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase" htmlFor="contact-phone">
                        Phone <span className="text-white/30 lowercase italic font-sans tracking-normal">optional</span>
                      </label>
                      <input
                        type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange}
                        className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30"
                        placeholder="+91 1234567890"
                        disabled={status === 'loading'}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase" htmlFor="contact-subject">
                        Subject <span className="text-[#34d399]">*</span>
                      </label>
                      <input
                        type="text" id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required
                        className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30"
                        placeholder="Project inquiry"
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase" htmlFor="contact-message">
                      Message <span className="text-[#34d399]">*</span>
                    </label>
                    <textarea
                      id="contact-message" name="message" rows="5" value={formData.message} onChange={handleChange} required
                      className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30 resize-none"
                      placeholder="Hi Amit, I'd like to talk about..."
                      disabled={status === 'loading'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#1a1b1b] hover:bg-[#202222] transition-all duration-300 hover:scale-[1.02] border border-white/5 rounded-sm py-4 flex items-center justify-center group overflow-hidden relative mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div>
                    {status === 'loading' ? (
                      <span className="flex items-center text-[13px] font-medium text-white tracking-wide">
                        <Loader2 size={16} className="animate-spin mr-2" /> Sending...
                      </span>
                    ) : (
                      <span className="text-[13px] font-medium text-white tracking-wide group-hover:pr-2 transition-all">
                        Send Message &rarr;
                      </span>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
