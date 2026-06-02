import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MessageSquare, LayoutTemplate, Sparkles, Code2, Smartphone, PenTool, TrendingUp, ArrowRight, Code, Paintbrush, Clock, Calendar, MapPin } from 'lucide-react';
import rockAsset from '../assets/hero_rock_asset.png';
import profileAsset from '../assets/profile.png';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-[#8da532]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

        <div className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col relative z-10 pt-28 pb-10">
          
          {/* Content */}
          <div className="lg:w-2/3 flex flex-col justify-center relative z-20 mt-6 lg:mt-0">
            
            {/* Eyebrow */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-[1px] w-8 bg-white/30"></div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                [01] Digital Design Studio
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[42px] md:text-[60px] lg:text-[56px] font-bold leading-[1.05] tracking-tight mb-10 flex flex-col">
              
              <div className="flex items-center gap-x-5 lg:gap-x-6">
                <span>We build</span>
                <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532] mt-2 lg:mt-3">
                  digital
                </span>
              </div>
              
              <div className="flex items-center gap-x-5 lg:gap-x-6 -mt-1">
                <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532] relative">
                  products
                  <svg className="absolute w-[110%] h-[12px] -bottom-[4px] -left-[5%] text-[#8da532]" viewBox="0 0 200 15" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="mt-1">for</span>
              </div>
              
              <div className="flex items-center gap-x-5 lg:gap-x-6 -mt-1">
                <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532] relative">
                  ambitious
                  <svg className="absolute w-[110%] h-[12px] -bottom-[4px] -left-[5%] text-[#8da532]" viewBox="0 0 200 15" fill="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="mt-1">brands.</span>
              </div>

            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-[14px] md:text-[16px] max-w-[480px] leading-relaxed mb-8">
              Websites, branding, software and mobile apps — digital products for brands with ambition.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto relative bg-[#151515] hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-105 border border-white/5 rounded-sm px-8 py-4 flex items-center justify-center group overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8da532] shadow-[0_0_12px_rgba(141,165,50,0.8)]"></div>
                <span className="text-[13px] font-medium text-white tracking-wide group-hover:pr-2 transition-all">
                  Start a project →
                </span>
              </button>

              <Link to="/works" className="w-full sm:w-auto bg-[#151515] hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-105 border border-white/5 rounded-sm px-8 py-4 flex items-center justify-center group">
                <div className="w-[6px] h-[6px] bg-[#8da532] mr-3 rounded-sm group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(141,165,50,0.5)]"></div>
                <span className="text-[13px] font-medium text-white/90">
                  Selected work
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 border-t border-white/10 mt-auto">
              <div className="flex items-center">
                <div className="text-[#8da532] mr-2 text-[13px]">★</div>
                <span className="font-semibold text-white mr-2 text-[13px]">5.0</span>
                <span className="text-[10px] text-white/40 tracking-[0.1em]">
                  GOOGLE - 21 REVIEWS
                </span>
              </div>
              <div className="hidden sm:block w-[3px] h-[3px] bg-white/20 rounded-full"></div>
              <div className="flex items-center">
                <div className="text-[#8da532] mr-2 font-bold text-[13px]">8</div>
                <span className="font-semibold text-white mr-2 text-[13px]">7.5M+</span>
                <span className="text-[10px] text-white/40 tracking-[0.1em]">
                  USERS REACHED
                </span>
              </div>
              <div className="hidden sm:block w-[3px] h-[3px] bg-white/20 rounded-full"></div>
              <div className="flex items-center">
                <div className="text-[#8da532] mr-2 font-bold text-[13px]">⚡</div>
                <span className="font-semibold text-white mr-2 text-[13px]">100</span>
                <span className="text-[10px] text-white/40 tracking-[0.1em]">
                  PAGESPEED SCORE
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Disciplines Section */}
      <section className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 py-20 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-[1px] w-8 bg-white/30"></div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
            [02] Core Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[40px] md:text-[50px] lg:text-[65px] font-bold tracking-tight mb-16 max-w-2xl leading-[1.1]">
          Six <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">disciplines.</span> One team.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              id: '01', 
              title: 'Websites', 
              icon: <LayoutTemplate size={24} className="text-[#8da532]" />,
              desc: 'High-performance marketing sites, landing pages and corporate websites — built for conversion and speed.',
              tags: ['NEXT.JS & REACT', 'HEADLESS CMS', 'SEO & PERFORMANCE', 'A/B TESTING']
            },
            { 
              id: '02', 
              title: 'Branding', 
              icon: <Sparkles size={24} className="text-[#8da532]" />,
              desc: 'Brand identities from logo to design system — identities that stick and stay consistent across every touchpoint.',
              tags: ['LOGO & WORDMARK', 'VISUAL IDENTITY', 'DESIGN SYSTEM', 'BRAND GUIDELINES']
            },
            { 
              id: '03', 
              title: 'Software', 
              icon: <Code2 size={24} className="text-[#8da532]" />,
              desc: 'Custom tools, internal platforms and SaaS products. From MVP to scalable enterprise solution.',
              tags: ['ARCHITECTURE', 'API DESIGN', 'DATABASES', 'CLOUD']
            },
            { 
              id: '04', 
              title: 'Mobile Apps', 
              icon: <Smartphone size={24} className="text-[#8da532]" />,
              desc: 'Native and cross-platform apps with first-class user experience — iOS, Android and everything in between.',
              tags: ['REACT NATIVE', 'FLUTTER', 'APP STORE', 'UI/UX']
            },
            { 
              id: '05', 
              title: 'UI/UX Design', 
              icon: <PenTool size={24} className="text-[#8da532]" />,
              desc: 'User-centric design solutions that marry aesthetics with functionality for intuitive product experiences.',
              tags: ['WIREFRAMING', 'PROTOTYPING', 'USER RESEARCH', 'FIGMA']
            },
            { 
              id: '06', 
              title: 'SEO & Marketing', 
              icon: <TrendingUp size={24} className="text-[#8da532]" />,
              desc: 'Data-driven marketing strategies and search optimization to increase visibility and drive organic growth.',
              tags: ['TECHNICAL SEO', 'CONTENT STRATEGY', 'ANALYTICS', 'CONVERSION']
            }
          ].map((card) => (
            <div key={card.id} className="bg-[#111212] border border-white/5 rounded-sm p-8 md:p-12 relative overflow-hidden group cursor-pointer hover:border-white/10 transition-all duration-300 hover:scale-[1.02]">
              
              {/* Radial glow on hover */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8da532]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Large Outline Number */}
              <div 
                className="absolute top-4 right-8 text-[120px] font-black leading-none pointer-events-none transition-transform group-hover:scale-105"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)', color: 'transparent' }}
              >
                {card.id}
              </div>

              {/* Icon Box */}
              <div className="w-12 h-12 border border-[#8da532]/30 bg-[#8da532]/5 flex items-center justify-center rounded-sm mb-12 relative z-10">
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
                      <div className="w-2.5 h-2.5 border border-[#8da532]/50 rounded-sm"></div>
                      <span className="font-mono text-[9px] tracking-[0.1em] text-white/70 uppercase">{tag}</span>
                    </div>
                  ))}
                </div>
                <ArrowRight size={16} className="text-white/30 group-hover:text-[#8da532] transition-colors group-hover:translate-x-1" />
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 pb-32 pt-20 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="h-[1px] w-8 bg-white/30"></div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
            [03] Selected Work / 2024 - 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[36px] md:text-[46px] lg:text-[56px] font-bold tracking-tight mb-16">
          What we've <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">built.</span>
        </h2>

        {/* Projects List */}
        <div className="flex flex-col border-t border-white/10">
          {[
            { num: '01', title: 'Die Lackier-Werkstatt', tags: 'WEBSEITE . BRANDING', year: '2025' },
            { num: '02', title: 'UnfallFix24', tags: 'WEBSEITE . SOFTWARE', year: '2025' },
            { num: '03', title: 'Mousa Export', tags: 'WEBSEITE', year: '2025' },
            { num: '04', title: 'Steak Club', tags: 'WEBSEITE . BRANDING', year: '2024' },
            { num: '05', title: 'Josh Jabs', tags: 'WEBSEITE . BRANDING', year: '2024' }
          ].map((project) => (
            <div key={project.num} className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-8 border-b border-white/10 group cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-sm">
              <div className="flex items-center space-x-8 md:space-x-12 mb-4 md:mb-0">
                <span className="font-mono text-[9px] text-white/40 group-hover:text-[#8da532] transition-colors">{project.num}</span>
                <h3 className="text-[18px] md:text-[24px] font-bold tracking-tight group-hover:text-[#8da532] transition-colors">{project.title}</h3>
              </div>
              <div className="flex items-center space-x-6 md:space-x-10 text-white/40 font-mono text-[9px] tracking-[0.1em] uppercase ml-12 md:ml-0">
                <span>{project.tags}</span>
                <span>{project.year}</span>
                <span className="text-[#8da532] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 pb-32 pt-10 relative z-10">
        
        {/* Subtle top divider for the section */}
        <div className="w-full h-[1px] bg-white/5 mb-20"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden group border border-white/5 bg-[#111212] mx-auto md:max-w-[70%] lg:max-w-none">
            <img src={profileAsset} alt="Kerim Bilin" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
            
            {/* Overlay Text */}
            <div className="absolute bottom-6 right-6 flex items-center space-x-3">
              <div className="w-6 h-[1px] bg-white/50"></div>
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/70 uppercase">
                FOUNDER - BOCHOLT - 2024
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Heading */}
            <h2 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold tracking-tight leading-[0.9] mb-8">
              Kerim <br />
              <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">Bilin.</span>
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center space-x-2 bg-[#111212] border border-white/5 px-4 py-2 rounded-sm">
                <span className="text-[#8da532] text-[12px] font-mono leading-none">P</span>
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/70 uppercase pt-0.5">FOUNDER</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#111212] border border-white/5 px-4 py-2 rounded-sm">
                <Code size={12} className="text-[#8da532]" />
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/70 uppercase pt-0.5">DEVELOPER</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#111212] border border-white/5 px-4 py-2 rounded-sm">
                <Paintbrush size={12} className="text-[#8da532]" />
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/70 uppercase pt-0.5">DESIGNER</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 text-[15px] leading-relaxed max-w-[450px] mb-16">
              First HTML project at the age of <span className="text-[#8da532] italic font-serif text-[17px] tracking-[-0.02em] px-[0.04em]">ten.</span> Today Webify is a studio with over eleven years of experience — developer, designer and management in one person.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2">
              <div className="border-t border-r border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">20</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">AGE</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#8da532] group-hover:bg-[#8da532]/10 transition-colors">
                  <Clock size={10} />
                </div>
              </div>

              <div className="border-t border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">11<span className="text-[#8da532]">+</span></span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">YEARS CODING</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#8da532] group-hover:bg-[#8da532]/10 transition-colors">
                  <Code2 size={10} />
                </div>
              </div>

              <div className="border-t border-r border-b border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">2015</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">FIRST PROJECT</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#8da532] group-hover:bg-[#8da532]/10 transition-colors">
                  <Calendar size={10} />
                </div>
              </div>

              <div className="border-t border-b border-white/10 p-6 md:p-8 flex justify-between items-start group hover:bg-white/[0.02] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[32px] md:text-[40px] font-bold leading-none mb-2 tracking-tight">NRW</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase">LOCATION</span>
                </div>
                <div className="w-6 h-6 border border-white/10 rounded-sm flex items-center justify-center bg-white/5 text-[#8da532] group-hover:bg-[#8da532]/10 transition-colors">
                  <MapPin size={10} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="max-w-[1500px] mx-auto w-full px-4 md:px-8 lg:px-12 pb-32 pt-10 relative z-10">
        
        {/* Subtle top divider for the section */}
        <div className="w-full h-[1px] bg-white/5 mb-20"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[50px] md:text-[65px] lg:text-[80px] font-bold tracking-tight mb-8 leading-[1.0]">
              Let's <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">talk.</span>
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-[400px] mb-16">
              Direct line to Kerim — no account manager and no briefing phone-tag between departments. Tell us about your next project for ambitious digital products, and we'll reply within 24 hours with concrete next steps.
            </p>

            <div className="flex flex-col mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t border-white/10">
                <span className="w-32 font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mb-2 sm:mb-0">Email</span>
                <span className="font-medium text-[15px]">info@webify.agency</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t border-white/10">
                <span className="w-32 font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mb-2 sm:mb-0">Phone</span>
                <span className="font-medium text-[15px]">+49 1575 4405511</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center py-6 border-t border-b border-white/10">
                <span className="w-32 font-mono text-[10px] tracking-[0.1em] text-white/50 uppercase mb-2 sm:mb-0">Studio</span>
                <span className="font-medium text-[15px]">Bocholt - North Rhine-Westphalia</span>
              </div>
            </div>

            <div className="font-mono text-[10px] tracking-[0.1em] text-white/40 uppercase">
              REPLY WITHIN 24H • Q3 / Q4 AVAILABLE
            </div>
          </div>

          {/* Right Column / Form */}
          <div className="bg-[#111212] border border-white/5 rounded-sm p-8 md:p-12">
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#8da532] uppercase mb-4">
              BRIEFING
            </div>
            <h3 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-10">
              Send us a <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">short briefing.</span>
            </h3>

            <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                    FIRST NAME <span className="text-[#8da532] ml-1">*</span>
                  </label>
                  <input type="text" placeholder="Anna" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#8da532]/50 transition-colors placeholder-white/30" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                    LAST NAME <span className="text-[#8da532] ml-1">*</span>
                  </label>
                  <input type="text" placeholder="Smith" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#8da532]/50 transition-colors placeholder-white/30" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                  EMAIL <span className="text-[#8da532] ml-1">*</span>
                </label>
                <input type="email" placeholder="anna@company.com" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#8da532]/50 transition-colors placeholder-white/30" />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                  PHONE NUMBER <span className="text-[#8da532] ml-1">*</span>
                </label>
                <input type="tel" placeholder="+1 555 1234567" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#8da532]/50 transition-colors placeholder-white/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                    COMPANY NAME <span className="ml-2 lowercase italic opacity-60 font-sans tracking-normal">optional</span>
                  </label>
                  <input type="text" placeholder="Studio Inc." className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#8da532]/50 transition-colors placeholder-white/30" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                    CURRENT WEBSITE <span className="ml-2 lowercase italic opacity-60 font-sans tracking-normal">optional</span>
                  </label>
                  <input type="url" placeholder="https://your-domain.com" className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#8da532]/50 transition-colors placeholder-white/30" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase flex items-center">
                  MESSAGE <span className="ml-2 lowercase italic opacity-60 font-sans tracking-normal">optional</span>
                </label>
                <textarea rows="4" placeholder="Idea, industry, timeline — what we should know." className="bg-[#1a1b1b] border border-white/5 text-white text-[14px] px-4 py-3 rounded-sm focus:outline-none focus:border-[#8da532]/50 transition-colors placeholder-white/30 resize-none"></textarea>
              </div>

              <div className="flex items-start space-x-3 pt-4">
                <input type="checkbox" id="privacy" className="mt-0.5 w-4 h-4 bg-[#1a1b1b] border-white/10 rounded-sm focus:ring-[#8da532] accent-[#8da532] cursor-pointer" />
                <label htmlFor="privacy" className="text-white/60 text-[12px] leading-snug cursor-pointer select-none">
                  I consent to the processing of my data according to the <a href="#" className="text-white hover:text-[#8da532] underline underline-offset-2 transition-colors">privacy policy</a>.
                </label>
              </div>

              <button type="submit" className="w-full mt-4 bg-[#1a1b1b] hover:bg-[#202222] transition-all duration-300 hover:scale-[1.02] border border-white/5 rounded-sm py-4 flex items-center justify-center group overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#8da532] shadow-[0_0_12px_rgba(141,165,50,0.8)]"></div>
                <span className="text-[13px] font-medium text-white tracking-wide group-hover:pr-2 transition-all">
                  Send request &rarr;
                </span>
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#090a0a] border-t border-white/5 pt-20 pb-8 relative z-10">
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
            
            {/* Col 1: Brand */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-5 h-5 bg-[#8da532] rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#090a0a] rounded-full"></div>
                </div>
                <span className="text-white font-bold tracking-wide">Webify</span>
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold leading-[1.1] tracking-tight">
                Digital <br />
                Design Studio <br />
                from <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">Bocholt.</span>
              </h3>
            </div>

            {/* Col 2: Contact */}
            <div className="flex flex-col">
              <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">Contact</h4>
              <ul className="flex flex-col space-y-4 text-[13px] text-white/80">
                <li><a href="#" className="hover:text-[#8da532] transition-colors">info@webify.agency</a></li>
                <li><a href="#" className="hover:text-[#8da532] transition-colors">+49 1575 4405511</a></li>
              </ul>
            </div>

            {/* Col 3: Studio */}
            <div className="flex flex-col">
              <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">Studio</h4>
              <ul className="flex flex-col space-y-1 text-[13px] text-white/80">
                <li>Weidenstraße 56</li>
                <li>46395 Bocholt</li>
              </ul>
            </div>

            {/* Col 4: Sitemap & Legal */}
            <div className="flex flex-col sm:flex-row gap-12 lg:gap-8 lg:col-span-1">
              <div className="flex flex-col">
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">Sitemap</h4>
                <ul className="flex flex-col space-y-4 text-[13px] text-white/80">
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">Services</a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">Portfolio</a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Col 5 & 6: Legal & Social */}
            <div className="flex flex-col sm:flex-row gap-12 lg:gap-8 lg:col-span-1">
              <div className="flex flex-col">
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">Legal</h4>
                <ul className="flex flex-col space-y-4 text-[13px] text-white/80">
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">Imprint</a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors">Terms</a></li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase mb-6">Social</h4>
                <ul className="flex flex-col space-y-4 text-[13px] text-white/80">
                  <li><a href="#" className="hover:text-[#8da532] transition-colors group flex items-center">LinkedIn <ArrowRight size={12} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all transform -rotate-45" /></a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors group flex items-center">Instagram <ArrowRight size={12} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all transform -rotate-45" /></a></li>
                  <li><a href="#" className="hover:text-[#8da532] transition-colors group flex items-center">Google Maps <ArrowRight size={12} className="ml-1 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all transform -rotate-45" /></a></li>
                </ul>
              </div>
            </div>
            
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
            <span>&copy; 2024 WEBIFY - KERIM BILIN</span>
            <span className="mt-4 sm:mt-0">BUILT IN GERMANY</span>
          </div>

        </div>
      </footer>

      {/* Fixed Floating Buttons */}
      <div className="hidden md:flex flex-col space-y-2 fixed right-6 top-1/2 -translate-y-1/2 z-50">
        {[ 
          { id: 'wa', icon: <MessageCircle size={18} strokeWidth={1.5} /> },
          { id: 'ph', icon: <Phone size={18} strokeWidth={1.5} /> },
          { id: 'ch', icon: <MessageSquare size={18} strokeWidth={1.5} /> }
        ].map(btn => (
          <button 
            key={btn.id} 
            className="w-[42px] h-[42px] bg-[#151515] hover:bg-[#252525] border border-white/5 transition-all duration-300 hover:scale-110 rounded-sm flex items-center justify-center group relative overflow-hidden shadow-lg"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-[#8da532] transition-colors shadow-[0_0_8px_rgba(141,165,50,0.8)]"></div>
            {btn.icon}
          </button>
        ))}
      </div>

      {/* Modals */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default Home;