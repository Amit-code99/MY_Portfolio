import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone, MessageSquare } from 'lucide-react';
import worksHeroBg from '../assets/works_hero_bg.png';
import projectPlaceholder from '../assets/project_placeholder.png';
import ContactModal from '../components/ContactModal';

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: '01',
      title: 'Die Lackier-Werkstatt',
      tags: 'WEBSEITE · BRANDING',
      year: '2025',
      image: projectPlaceholder
    },
    {
      id: '02',
      title: 'UnfallFix24',
      tags: 'WEBSEITE · SOFTWARE',
      year: '2025',
      image: projectPlaceholder
    },
    {
      id: '03',
      title: 'Mousa Export',
      tags: 'WEBSEITE',
      year: '2025',
      image: projectPlaceholder
    },
    {
      id: '04',
      title: 'Steak Club',
      tags: 'WEBSEITE · BRANDING',
      year: '2024',
      image: projectPlaceholder
    }
  ];

  return (
    <div className="w-full bg-[#090a0a] text-white min-h-screen pt-24 pb-32">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 pt-20 pb-32 overflow-hidden border-b border-white/5">
        
        {/* Abstract Background Image */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full opacity-40 lg:opacity-70 pointer-events-none" style={{
            backgroundImage: `url(${worksHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}></div>

        <div className="relative z-10 max-w-3xl">
          
          {/* Eyebrow */}
          <div className="flex items-center space-x-3 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
              [P] PORTFOLIO - SELECTED WORK
            </span>
          </div>

          {/* Huge Heading */}
          <h1 className="text-[46px] md:text-[60px] lg:text-[80px] font-bold tracking-tight leading-[1] mb-8">
            Was wir <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">gebaut</span> haben.
          </h1>

          {/* Description */}
          <p className="text-white/70 text-[15px] md:text-[18px] max-w-xl leading-relaxed mb-24">
            Ausgewählte Cases aus 2024-2025. Jedes Projekt mit klarem Ziel, 
            gemessenen Resultaten und einer Handschrift.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-6">
            <div className="flex flex-col border-r border-white/10 pr-6 mb-6 md:mb-0">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-3">Projekte</span>
              <span className="font-bold text-[14px]">6</span>
            </div>
            <div className="flex flex-col md:border-r border-white/10 pl-6 md:pl-0 md:px-6 mb-6 md:mb-0">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-3">Disziplinen</span>
              <span className="font-bold text-[14px] leading-tight">Web · Branding ·<br/>Software · Mobile</span>
            </div>
            <div className="flex flex-col border-r border-white/10 pr-6 md:px-6">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-3">Zeitraum</span>
              <span className="font-bold text-[14px]">2023 — 2026</span>
            </div>
            <div className="flex flex-col pl-6">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-3">Standort</span>
              <span className="font-bold text-[14px]">Bocholt · Remote</span>
            </div>
          </div>

        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 pt-24">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#8da532] uppercase">
            [01] ALLE CASES
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <Link to={`/works/${project.id}`} key={project.id} className="group flex flex-col cursor-pointer">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-[#111212] border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#8da532]/0 group-hover:bg-[#8da532]/5 transition-colors duration-500 pointer-events-none"></div>
              </div>

              {/* Card Footer Details */}
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#8da532]">{project.id}</span>
                  </div>
                  <h3 className="text-[22px] md:text-[28px] font-bold tracking-tight group-hover:text-[#8da532] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase mt-2">
                    {project.tags}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/40 pt-1 group-hover:text-white transition-colors">
                  {project.year}
                </span>
              </div>

            </Link>
          ))}
        </div>

      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-24 border-b border-white/5">
        <div className="max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-bold tracking-tight leading-[1.1] mb-6">
            Bereit für dein eigenes <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#8da532]">Projekt?</span>
          </h2>
          <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-lg">
            Wir nehmen vier Projekte pro Quartal an. Schreib uns kurz — wir antworten innerhalb von 24 Stunden.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#8da532] text-[#090a0a] hover:bg-[#9ebc3b] transition-all duration-300 hover:scale-105 font-bold text-[13px] px-8 py-4 rounded-sm flex items-center justify-center"
          >
            Projekt starten →
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-[#090a0a] pt-20 pb-8 relative z-10">
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

export default Works;
