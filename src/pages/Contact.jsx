import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link
    const mailtoLink = `mailto:ameetyadav8788@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-[800px] mx-auto w-full">
      <div className="mb-16">
        <h1 className="text-[54px] font-black text-[#2C3333] mb-4 uppercase tracking-tighter">Get In Touch</h1>
        <div className="w-20 h-1.5 bg-[#F7C04A]"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-[#2C3333] mb-4 uppercase tracking-wider">Contact Details</h3>
            <p className="text-[#8695A4] mb-8 leading-relaxed font-medium">Feel free to reach out via the form or through my contact info below.</p>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-[#F7C04A] uppercase tracking-widest mb-1">Email</p>
                <p className="text-lg font-bold text-[#2C3333]">ameetyadav8788@gmail.com</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#F7C04A] uppercase tracking-widest mb-1">Location</p>
                <p className="text-lg font-bold text-[#2C3333]">India</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-8 border-[#F7C04A]">
          <div>
            <label className="block text-xs font-bold text-[#2C3333] uppercase tracking-widest mb-3" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-100 focus:border-[#F7C04A] outline-none transition-all text-lg font-medium"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2C3333] uppercase tracking-widest mb-3" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-100 focus:border-[#F7C04A] outline-none transition-all text-lg font-medium"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2C3333] uppercase tracking-widest mb-3" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-100 focus:border-[#F7C04A] outline-none transition-all text-lg font-medium"
              placeholder="Enquiry about..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#2C3333] uppercase tracking-widest mb-3" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-100 focus:border-[#F7C04A] outline-none transition-all text-lg font-medium resize-none"
              placeholder="Hi Amit, I'd like to talk about..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F7C04A] hover:bg-[#ffb200] transition-all text-[#2C3333] font-black py-5 px-12 rounded-sm text-lg uppercase tracking-widest transform hover:scale-105 mt-6 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
