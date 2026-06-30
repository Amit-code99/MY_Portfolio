import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, LayoutTemplate, Sparkles, Code2, Smartphone, PenTool, TrendingUp, ArrowRight, Code, Paintbrush, Clock, Calendar, MapPin, Globe, Server, BarChart3, Search, Target, Megaphone, LineChart, Zap, Database, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import rockAsset from '../assets/hero_rock_asset.png';
import profileAsset from '../assets/profile.png';
import ContactModal from '../components/ContactModal';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Handle scroll-to-section from Navbar navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.state]);

  // Set page title
  useEffect(() => {
    document.title = 'Amit Yadav | Full Stack Developer & Digital Growth Agency';
  }, []);

  // Inline form state for Let's Talk section
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', website: '', message: '', privacy: false,
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
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
        setFormStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', website: '', message: '', privacy: false });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  // Services data
  const serviceCategories = [
    {
      category: 'Development',
      eyebrow: '[04-A]',
      services: [
        { icon: <Globe size={24} className="text-[#34d399]" />, title: 'Static Website', desc: 'Landing pages, portfolios — fast, responsive, SEO-optimized.', price: 'Starting ₹30,000', tags: ['HTML/CSS', 'REACT', 'RESPONSIVE'] },
        { icon: <Server size={24} className="text-[#34d399]" />, title: 'Dynamic Website', desc: 'Full-stack apps with admin panels, auth, and database.', price: 'Starting ₹50,000', tags: ['NODE.JS', 'CMS', 'DATABASE'] },
        { icon: <Database size={24} className="text-[#34d399]" />, title: 'Large-Scale / Custom Software', desc: 'Microservices, e-commerce platforms, SaaS products.', price: 'Starting ₹1,00,000', tags: ['MICROSERVICES', 'KAFKA', 'DOCKER'] },
      ]
    },
    {
      category: 'Digital Marketing',
      eyebrow: '[04-B]',
      services: [
        { icon: <Megaphone size={24} className="text-[#34d399]" />, title: 'Social Media Management', desc: 'Content strategy, scheduling, analytics & growth.', price: 'Starting ₹8,000/mo', tags: ['CONTENT', 'SCHEDULING', 'ANALYTICS'] },
        { icon: <Target size={24} className="text-[#34d399]" />, title: 'Advanced SEO & Growth Setup', desc: 'Technical SEO audit, keyword strategy, and data-driven marketing funnel optimization.', price: 'Starting ₹15,000', tags: ['SEO', 'DATA LAYER', 'GROWTH'] },
        { icon: <BarChart3 size={24} className="text-[#34d399]" />, title: 'Ad Campaign Management', desc: 'Google Ads, Meta Ads — strategy, optimization, reporting.', price: '% of ad spend or flat fee', tags: ['GOOGLE ADS', 'META ADS', 'ROI'] },
      ]
    },
    {
      category: 'SEO',
      eyebrow: '[04-C]',
      services: [
        { icon: <Search size={24} className="text-[#34d399]" />, title: 'On-Page SEO Audit', desc: 'Keyword analysis, meta optimization, content recommendations.', price: 'One-time ₹5,000', tags: ['KEYWORDS', 'META TAGS', 'CONTENT'] },
        { icon: <Zap size={24} className="text-[#34d399]" />, title: 'Technical SEO', desc: 'Core Web Vitals, schema markup, site speed optimization.', price: 'Starting ₹10,000', tags: ['CORE WEB VITALS', 'SCHEMA', 'SPEED'] },
        { icon: <LineChart size={24} className="text-[#34d399]" />, title: 'Monthly SEO Retainer', desc: 'Ongoing optimization, link building, ranking reports.', price: 'Starting ₹8,000/mo', tags: ['LINK BUILDING', 'RANKINGS', 'REPORTS'] },
      ]
    }
  ];

  return (
    <div className="bg-[#090a0a] min-h-screen text-white relative">

      {/* Hero Section */}
      <div
        className="min-h-screen relative flex overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${rockAsset})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#090a0a]/80 backdrop-blur-[2px]"></div>

        {/* Radial light */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[#34d399]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col relative z-10 pt-28 pb-10">

          {/* Content */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center relative z-20 mt-6 lg:mt-0">

            {/* Eyebrow */}
            <div className="flex items-center mb-6">
              <span className="font-mono text-[12px] md:text-[14px] tracking-[0.2em] text-[#34d399] uppercase">
                ✦ APP DEVELOPMENT • WEB DEVELOPMENT • SEO • DIGITAL MARKETING
              </span>
            </div>

            {/* Heading - Refactored to wrap naturally on smaller screens */}
            <h1 className="text-[28px] sm:text-[36px] md:text-[50px] lg:text-[46px] font-bold leading-[1.2] tracking-tight mb-8">
              We build high-performance <br className="hidden sm:inline" />
              <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399] relative inline-block">
                apps & scale your
                <svg className="absolute w-[110%] h-[12px] -bottom-[4px] -left-[5%] text-[#34d399]" viewBox="0 0 200 15" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              digital presence.
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-[14px] md:text-[16px] max-w-[580px] leading-relaxed mb-8">
              We combine full-stack development with data-driven SEO and marketing strategies. From custom web applications to top Google rankings, we build systems that drive real business growth.
            </p>

            {/* Buttons - Stack on mobile, inline on tablet+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto relative bg-[#151515] hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 border border-white/5 rounded-sm px-6 sm:px-8 py-4 flex items-center justify-center group overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div>
                <span className="text-[13px] font-medium text-white tracking-wide group-hover:pr-2 transition-all">
                  Start a project →
                </span>
              </button>

              <a
                href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366]/10 hover:bg-[#25D366]/15 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 border border-[#25D366]/20 rounded-sm px-6 sm:px-8 py-4 flex items-center justify-center group"
              >
                <MessageCircle size={16} className="text-[#25D366] mr-2" />
                <span className="text-[13px] font-medium text-[#25D366]">
                  WhatsApp
                </span>
              </a>

              <Link to="/works" className="w-full sm:w-auto bg-[#151515] hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 border border-white/5 rounded-sm px-6 sm:px-8 py-4 flex items-center justify-center group">
                <div className="w-[6px] h-[6px] bg-[#34d399] mr-3 rounded-sm group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                <span className="text-[13px] font-medium text-white/90">
                  Selected work
                </span>
              </Link>
            </div>

            {/* Stats - Wrapping layout with vertical safety spacing */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8 border-t border-white/10 mt-auto">
              <div className="flex items-center">
                <div className="text-[#34d399] mr-2 font-bold text-[13px]">⚡</div>
                <span className="font-semibold text-white mr-2 text-[13px]">100%</span>
                <span className="text-[10px] text-white/40 tracking-[0.1em]">
                  SEO OPTIMIZED CODE
                </span>
              </div>
              <div className="hidden sm:block w-[3px] h-[3px] bg-white/20 rounded-full"></div>
              <div className="flex items-center">
                <div className="text-[#34d399] mr-2 font-bold text-[13px]">🚀</div>
                <span className="font-semibold text-white mr-2 text-[13px]">5x</span>
                <span className="text-[10px] text-white/40 tracking-[0.1em]">
                  AVG TRAFFIC GROWTH
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Disciplines Section */}
      <section className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 py-10 relative z-10">

        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-[1px] w-8 bg-white/30"></div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
            [02] WHAT WE DO
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold tracking-tight mb-16 leading-[1.1] flex flex-col">
          <span>Engineered to scale,</span>
          <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399] mt-2">
            optimized to convert.
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: '01',
              title: 'Websites',
              icon: <LayoutTemplate size={24} className="text-[#34d399]" />,
              desc: 'High-performance marketing sites, landing pages and corporate websites — built for conversion and speed.',
              tags: ['NEXT.JS & REACT', 'HEADLESS CMS', 'SEO & PERFORMANCE', 'A/B TESTING']
            },
            {
              id: '02',
              title: 'Backend Systems',
              icon: <Server size={24} className="text-[#34d399]" />,
              desc: 'Scalable microservices, APIs, and cloud-native backends. From MVP to enterprise-grade distributed systems.',
              tags: ['NODE.JS', 'MICROSERVICES', 'KAFKA & REDIS', 'DOCKER']
            },
            {
              id: '03',
              title: 'Custom Software',
              icon: <Code2 size={24} className="text-[#34d399]" />,
              desc: 'Custom tools, internal platforms and SaaS products. From MVP to scalable enterprise solution.',
              tags: ['ARCHITECTURE', 'API DESIGN', 'DATABASES', 'CLOUD']
            },
            {
              id: '04',
              title: 'Mobile Apps',
              icon: <Smartphone size={24} className="text-[#34d399]" />,
              desc: 'Native and cross-platform apps with first-class user experience — iOS, Android and everything in between.',
              tags: ['REACT NATIVE', 'FLUTTER', 'APP STORE', 'UI/UX']
            },
            {
              id: '05',
              title: 'UI/UX Design',
              icon: <PenTool size={24} className="text-[#34d399]" />,
              desc: 'User-centric design solutions that marry aesthetics with functionality for intuitive product experiences.',
              tags: ['WIREFRAMING', 'PROTOTYPING', 'USER RESEARCH', 'FIGMA']
            },
            {
              id: '06',
              title: 'SEO & Marketing',
              icon: <TrendingUp size={24} className="text-[#34d399]" />,
              desc: 'Data-driven marketing strategies and search optimization to increase visibility and drive organic growth.',
              tags: ['TECHNICAL SEO', 'CONTENT STRATEGY', 'ANALYTICS', 'CONVERSION']
            }
          ].map((card) => (
            <div key={card.id} className="bg-[#111212] border border-white/5 rounded-sm p-8 md:p-12 relative overflow-hidden group cursor-pointer hover:border-white/10 transition-all duration-300 hover:scale-[1.02]">

              {/* Radial glow on hover */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#34d399]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Large Outline Number */}
              <div
                className="absolute top-4 right-8 text-[120px] font-black leading-none pointer-events-none transition-transform group-hover:scale-105"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)', color: 'transparent' }}
              >
                {card.id}
              </div>

              {/* Icon Box */}
              <div className="w-12 h-12 border border-[#34d399]/30 bg-[#34d399]/5 flex items-center justify-center rounded-sm mb-12 relative z-10">
                {card.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-[28px] font-bold mb-4 relative z-10">{card.title}</h3>
              <p className="text-white/60 text-[15px] leading-relaxed max-w-[85%] mb-12 relative z-10 min-h-[70px]">
                {card.desc}
              </p>

              {/* Separator */}
              <div className="w-full h-[1px] bg-white/5 mb-6 relative z-10 group-hover:bg-white/10 transition-colors"></div>

              {/* Tags & Arrow */}
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between relative z-10 gap-4">
                <div className="flex flex-wrap gap-2 max-w-[90%]">
                  {card.tags.map((tag, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white/5 border border-white/5 px-3 py-1.5 rounded-sm">
                      <div className="w-2.5 h-2.5 border border-[#34d399]/50 rounded-sm"></div>
                      <span className="font-mono text-[9px] tracking-[0.1em] text-white/70 uppercase">{tag}</span>
                    </div>
                  ))}
                </div>
                <ArrowRight size={16} className="text-white/30 group-hover:text-[#34d399] transition-colors group-hover:translate-x-1" />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 pb-16 pt-10 relative z-10">

        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="h-[1px] w-8 bg-white/30"></div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
            [03] Selected Work / 2024 - 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[38px] lg:text-[46px] font-bold tracking-tight mb-16">
          What we've <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">built.</span>
        </h2>

        {/* Projects List */}
        <div className="flex flex-col border-t border-white/10">
          {[
            { num: '01', title: 'Multi-Vendor E-Commerce Platform', tags: 'FULL STACK · MICROSERVICES', year: '2025' },
            { num: '02', title: 'Astrogram', tags: 'FULL STACK · SOCIAL MEDIA', year: '2025' },
            { num: '03', title: 'E-Commerce Dashboard', tags: 'FRONTEND · ANALYTICS', year: '2024' },
            { num: '04', title: 'Broker Communities Platform', tags: 'FULL STACK · COMMUNITY PLATFORM', year: '2024' },
            { num: '05', title: 'MeetYou', tags: 'FULL STACK · CHAT PLATFORM', year: '2024' }
          ].map((project) => (
            <Link to={`/works/${project.num}`} key={project.num} className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-8 border-b border-white/10 group cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-sm">
              <div className="flex items-center space-x-8 md:space-x-12 mb-4 md:mb-0">
                <span className="font-mono text-[9px] text-white/40 group-hover:text-[#34d399] transition-colors">{project.num}</span>
                <h3 className="text-[18px] md:text-[24px] font-bold tracking-tight group-hover:text-[#34d399] transition-colors">{project.title}</h3>
              </div>
              <div className="flex items-center space-x-6 md:space-x-10 text-white/40 font-mono text-[9px] tracking-[0.1em] uppercase ml-12 md:ml-0">
                <span>{project.tags}</span>
                <span>{project.year}</span>
                <span className="text-[#34d399] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 pb-16 pt-4 relative z-10">

        <div className="w-full h-[1px] bg-white/5 mb-10"></div>

        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-[1px] w-8 bg-white/30"></div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
            [04] INVESTMENT & GROWTH
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-bold tracking-tight mb-6 leading-[1.1] flex flex-col">
          <span>Smart investment.</span>
          <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399] mt-2">
            Uncapped scale.
          </span>
        </h2>
        <p className="text-white/70 text-[15px] leading-relaxed max-w-[580px] mb-20">
          Accelerate your digital growth with custom software development and ranking SEO strategies engineered to outpace your competition.
        </p>

        {/* Service Categories */}
        {serviceCategories.map((cat, catIdx) => (
          <div key={catIdx} className="mb-10 last:mb-0">
            {/* Category Title */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="font-mono text-[14px] md:text-[16px] font-bold tracking-[0.15em] text-[#34d399] uppercase">
                {cat.category}
              </span>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service, sIdx) => (
                <div key={sIdx} className="bg-[#111212] border border-white/5 rounded-sm p-8 md:p-10 relative overflow-hidden group hover:border-white/10 transition-all duration-300 hover:scale-[1.02] flex flex-col">

                  {/* Radial glow */}
                  <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#34d399]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                  {/* Icon */}
                  <div className="w-12 h-12 border border-[#34d399]/30 bg-[#34d399]/5 flex items-center justify-center rounded-sm mb-8 relative z-10">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-bold mb-3 relative z-10">{service.title}</h3>

                  {/* Description */}
                  <p className="text-white/60 text-[14px] leading-relaxed mb-6 relative z-10 min-h-[40px]">{service.desc}</p>

                  {/* Price */}
                  <div className="flex items-center mb-8 relative z-10">
                    <span className="text-[#34d399] font-bold text-[18px]">{service.price}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {service.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="flex items-center space-x-1.5 bg-white/5 border border-white/5 px-2.5 py-1 rounded-sm">
                        <div className="w-2 h-2 border border-[#34d399]/50 rounded-sm"></div>
                        <span className="font-mono text-[8px] tracking-[0.1em] text-white/60 uppercase">{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto relative z-10">
                    <div className="w-full h-[1px] bg-white/5 mb-6 group-hover:bg-white/10 transition-colors"></div>
                    <button
                      onClick={() => {
                        const el = document.getElementById('contact-form');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center text-[13px] font-medium text-white/70 group-hover:text-[#34d399] transition-colors"
                    >
                      Get Quote <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 pb-16 pt-4 relative z-10">

        {/* Subtle top divider for the section */}
        <div className="w-full h-[1px] bg-white/5 mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left: Image Cutout with Neon Circle Aura */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] group mx-auto md:max-w-[70%] lg:max-w-none flex items-center justify-center">

            {/* Vibrant, glowing green neon circle aura behind the engineer */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-[#34d399]/20 to-[#34d399]/40 blur-[80px] opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

            {/* Engineer Cutout */}
            <img
              src={profileAsset}
              alt="AKY Technologies"
              className="w-full h-full object-cover relative z-10 transition-all duration-700 mix-blend-lighten"
              style={{
                maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
              }}
            />

            {/* Overlay Text */}
            <div className="absolute bottom-6 right-6 flex items-center space-x-3 z-20">
              <div className="w-6 h-[1px] bg-white/50"></div>
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/70 uppercase">
                TECH AGENCY - INDIA - 2024
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Heading */}
            <h2 className="text-[28px] md:text-[38px] lg:text-[46px] font-bold tracking-tight leading-[1.0] mb-8">
              AKY <br />
              <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">Technologies.</span>
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center space-x-2 bg-[#111212] border border-white/5 px-4 py-2 rounded-sm">
                <span className="text-[#34d399] text-[12px] font-mono leading-none">⭐</span>
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/70 uppercase pt-0.5">TECH AGENCY</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#111212] border border-white/5 px-4 py-2 rounded-sm">
                <Code size={12} className="text-[#34d399]" />
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/70 uppercase pt-0.5">BACKEND ARCHITECTURE</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#111212] border border-white/5 px-4 py-2 rounded-sm">
                <Zap size={12} className="text-[#34d399]" />
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/70 uppercase pt-0.5">SCALABLE SYSTEMS</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-[15px] leading-relaxed max-w-[480px] mb-4">
              Engineering-led agency — turning complex ideas into high-performance <span className="text-[#34d399] italic font-serif text-[17px] tracking-[-0.02em] px-[0.04em]">production systems.</span>
            </p>
            <p className="text-white/60 text-[14px] leading-relaxed max-w-[480px] mb-4">
              Specializing in robust system design and seamless deployment.
            </p>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-[480px] mb-10">
              Building scalable microservices with Kafka, Redis, Docker, and cloud-native architectures. Every project is engineered for scale.
            </p>

            {/* Get a Quote CTA */}
            <button
              onClick={() => {
                const el = document.getElementById('contact-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-fit mb-16 bg-[#34d399] hover:bg-[#6ee7b7] text-[#090a0a] font-bold text-[14px] px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]"
            >
              Get a Quote →
            </button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2">
              <div className="border-t border-r border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">1<span className="text-[#34d399]">+</span></span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">YEARS EXPERIENCE</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#34d399] group-hover:bg-[#34d399]/10 transition-colors">
                  <Clock size={10} />
                </div>
              </div>

              <div className="border-t border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">3<span className="text-[#34d399]">+</span></span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">PRODUCTION PROJECTS</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#34d399] group-hover:bg-[#34d399]/10 transition-colors">
                  <Code2 size={10} />
                </div>
              </div>

              <div className="border-t border-r border-b border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">2024</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">FIRST CLIENT</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#34d399] group-hover:bg-[#34d399]/10 transition-colors">
                  <Calendar size={10} />
                </div>
              </div>

              <div className="border-t border-b border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">India</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">LOCATION</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#34d399] group-hover:bg-[#34d399]/10 transition-colors">
                  <MapPin size={10} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section id="contact-form" className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 pb-16 pt-4 relative z-10">

        {/* Subtle top divider for the section */}
        <div className="w-full h-[1px] bg-white/5 mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight mb-8 leading-[1.0]">
              Let's <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">talk.</span>
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-[400px] mb-16">
              Direct line to Amit — no account manager, no middlemen. Tell me about your next project and I'll reply within 24 hours with concrete next steps.
            </p>

            <div className="flex flex-col mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t border-white/10">
                <span className="w-32 font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mb-2 sm:mb-0">Email</span>
                <a href="mailto:amityadav63999@gmail.com" className="font-medium text-[15px] hover:text-[#34d399] transition-colors">amityadav63999@gmail.com</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t border-white/10">
                <span className="w-32 font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mb-2 sm:mb-0">Phone</span>
                <a href="tel:+918948869211" className="font-medium text-[15px] hover:text-[#34d399] transition-colors">+91 8948869211</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t border-white/10">
                <span className="w-32 font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mb-2 sm:mb-0">WhatsApp</span>
                <a href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="font-medium text-[15px] text-[#25D366] hover:text-[#1da851] transition-colors flex items-center">
                  Chat now <ArrowRight size={14} className="ml-1 -rotate-45" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t border-b border-white/10">
                <span className="w-32 font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mb-2 sm:mb-0">Location</span>
                <span className="font-medium text-[15px]">India — Available Remote</span>
              </div>
            </div>

            <div className="font-mono text-[10px] tracking-[0.1em] text-white/40 uppercase">
              REPLY WITHIN 24H • CURRENTLY AVAILABLE
            </div>
          </div>

          {/* Right Column / Form */}
          <div className="bg-[#111212] border border-white/5 rounded-sm p-8 md:p-12">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#34d399] uppercase mb-4">
              BRIEFING
            </div>
            <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight mb-10">
              Send a <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">short briefing.</span>
            </h3>

            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-[#34d399]/10 border border-[#34d399]/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-[#34d399]" />
                </div>
                <h4 className="text-[24px] font-bold text-white mb-3">Request Sent!</h4>
                <p className="text-white/60 text-[13px] max-w-[280px] mb-8">
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
                <button onClick={() => setFormStatus('idle')} className="bg-[#1a1b1b] hover:bg-[#252525] border border-white/5 rounded-sm px-8 py-3 text-[13px] font-medium text-white transition-colors">
                  Send another
                </button>
              </div>
            ) : formStatus === 'error' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle size={32} className="text-red-400" />
                </div>
                <h4 className="text-[24px] font-bold text-white mb-3">Something went wrong</h4>
                <p className="text-white/60 text-[13px] max-w-[280px] mb-8">Please try again or reach out via WhatsApp.</p>
                <div className="flex space-x-3">
                  <button onClick={() => setFormStatus('idle')} className="bg-[#1a1b1b] hover:bg-[#252525] border border-white/5 rounded-sm px-6 py-3 text-[13px] font-medium text-white transition-colors">Try Again</button>
                  <a href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-sm px-6 py-3 text-[13px] font-medium text-[#25D366] transition-colors">WhatsApp</a>
                </div>
              </div>
            ) : (
              <form className="flex flex-col space-y-6" onSubmit={handleFormSubmit}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                      FIRST NAME <span className="text-[#34d399] ml-1">*</span>
                    </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} placeholder="Your name" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30" required disabled={formStatus === 'loading'} />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                      LAST NAME <span className="text-[#34d399] ml-1">*</span>
                    </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} placeholder="Last name" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30" required disabled={formStatus === 'loading'} />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                    EMAIL <span className="text-[#34d399] ml-1">*</span>
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="you@company.com" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30" required disabled={formStatus === 'loading'} />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                    PHONE NUMBER <span className="text-[#34d399] ml-1">*</span>
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="+91 1234567890" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30" required disabled={formStatus === 'loading'} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                      COMPANY NAME <span className="ml-2 lowercase italic opacity-60 font-sans tracking-normal">optional</span>
                    </label>
                    <input type="text" name="company" value={formData.company} onChange={handleFormChange} placeholder="Your Company" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30" disabled={formStatus === 'loading'} />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                      CURRENT WEBSITE <span className="ml-2 lowercase italic opacity-60 font-sans tracking-normal">optional</span>
                    </label>
                    <input type="url" name="website" value={formData.website} onChange={handleFormChange} placeholder="https://your-domain.com" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30" disabled={formStatus === 'loading'} />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                    MESSAGE <span className="ml-2 lowercase italic opacity-60 font-sans tracking-normal">optional</span>
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleFormChange} rows="4" placeholder="Idea, industry, timeline — what I should know." className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#34d399]/50 transition-colors placeholder-white/30 resize-none" disabled={formStatus === 'loading'}></textarea>
                </div>

                <div className="flex items-start space-x-3 pt-4">
                  <input type="checkbox" id="inline-privacy" name="privacy" checked={formData.privacy} onChange={handleFormChange} className="mt-0.5 w-4 h-4 bg-[#1a1b1b] border-white/10 rounded-sm focus:ring-[#34d399] accent-[#34d399] cursor-pointer" required disabled={formStatus === 'loading'} />
                  <label htmlFor="inline-privacy" className="text-white/60 text-[12px] leading-snug cursor-pointer select-none">
                    I consent to the processing of my data according to the <a href="#" className="text-white hover:text-[#34d399] underline underline-offset-2 transition-colors">privacy policy</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full mt-4 bg-[#1a1b1b] hover:bg-[#202222] transition-all duration-300 hover:scale-[1.02] border border-white/5 rounded-sm py-4 flex items-center justify-center group overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div>
                  {formStatus === 'loading' ? (
                    <span className="flex items-center text-[13px] font-medium text-white tracking-wide">
                      <Loader2 size={16} className="animate-spin mr-2" /> Sending...
                    </span>
                  ) : (
                    <span className="text-[13px] font-medium text-white tracking-wide group-hover:pr-2 transition-all">
                      Send request &rarr;
                    </span>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating Buttons */}
      <FloatingButtons onChatClick={() => setIsModalOpen(true)} />

      {/* Modals */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default Home;