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
    <div className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-[680px] mx-auto w-full">
      <h1 className="text-[34px] md:text-[44px] font-bold text-[#21243D] leading-tight mb-8">
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#21243D] text-lg font-medium mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6464] transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-[#21243D] text-lg font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6464] transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-[#21243D] text-lg font-medium mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6464] transition-all"
            placeholder="Enquiry about..."
          />
        </div>

        <div>
          <label className="block text-[#21243D] text-lg font-medium mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6464] transition-all"
            placeholder="Hi Amit, I'd like to talk about..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#FF6464] hover:bg-[#ff4f4f] transition-colors text-white font-medium py-3 px-8 rounded-md text-lg w-full md:w-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
