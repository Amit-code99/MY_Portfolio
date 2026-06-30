import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import worksHeroBg from '../assets/works_hero_bg.png';
import ecommerceDashboard from '../assets/ecommerce_dashboard.png';
import brokerCommunity from '../assets/broker_community.png';
import projectPlaceholder from '../assets/project_placeholder.png';
import ContactModal from '../components/ContactModal';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Portfolio | Amit Yadav';
  }, []);

  const projects = [
    {
      id: '01',
      title: 'Multi-Vendor E-Commerce Platform',
      tags: 'FULL STACK · MICROSERVICES',
      year: '2025',
      image: brokerCommunity,
      desc: 'Scalable marketplace with multi-vendor support using microservices architecture, Kafka event streaming, and Redis caching.',
      tech: ['Node.js', 'React', 'Kafka', 'Redis', 'Docker', 'MongoDB']
    },
    {
      id: '02',
      title: 'Astrogram',
      tags: 'FULL STACK · SOCIAL MEDIA',
      year: '2025',
      image: projectPlaceholder,
      desc: 'Social media platform with real-time feeds, user authentication, and media uploads built with modern stack.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT']
    },
    {
      id: '03',
      title: 'E-Commerce Dashboard',
      tags: 'FRONTEND · ANALYTICS',
      year: '2024',
      image: ecommerceDashboard,
      desc: 'Analytics dashboard for e-commerce metrics — revenue tracking, order management, and customer insights.',
      tech: ['React', 'Chart.js', 'Tailwind CSS', 'REST API']
    },
    {
      id: '04',
      title: 'Broker Communities Platform',
      tags: 'FULL STACK · COMMUNITY PLATFORM',
      year: '2024',
      image: brokerCommunity,
      desc: 'A collaborative communication platform designed specifically for real estate brokers to coordinate deals, share property listings, and connect inside private communities in real-time.',
      tech: ['Node.js', 'React', 'Socket.io', 'MongoDB', 'Express', 'Tailwind CSS']
    },
    {
      id: '05',
      title: 'MeetYou',
      tags: 'FULL STACK · CHAT PLATFORM',
      year: '2024',
      image: projectPlaceholder,
      desc: 'A real-time audio/video and text chat platform built with WebRTC and Socket.io for direct peer-to-peer communication.',
      tech: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Express']
    }
  ];

  return (
    <div className="w-full bg-[#090a0a] text-white min-h-screen pt-24 pb-0">

      {/* Hero Section */}
      <section className="relative w-full max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-16 overflow-hidden border-b border-white/5">

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
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
              ✦ [03] CASE STUDIES
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[36px] md:text-[50px] lg:text-[46px] font-bold tracking-tight leading-[1.1] mb-8 flex flex-col">
            <span>Proven work.</span>
            <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399] mt-2">
              Real business impact.
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-[14px] md:text-[16px] max-w-xl leading-relaxed mb-20">
            A curated selection of custom web applications and full-scale growth campaigns. Built with engineering precision, optimized for high conversion.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-6 gap-6 md:gap-4">
            <div className="flex flex-col border-r border-white/10 pr-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-2">PROJECTS</span>
              <span className="font-bold text-[13px] text-white/90">10+ DELIVERED</span>
            </div>
            <div className="flex flex-col md:border-r border-white/10 md:px-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-2">DISCIPLINES</span>
              <span className="font-bold text-[13px] text-white/90 leading-tight">Full Stack • Advanced SEO • Growth Marketing</span>
            </div>
            <div className="flex flex-col border-r border-white/10 pr-4 md:px-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-2">TIMELINE</span>
              <span className="font-bold text-[13px] text-white/90">2024 — Present</span>
            </div>
            <div className="flex flex-col md:pl-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase mb-2">LOCATION</span>
              <span className="font-bold text-[13px] text-white/90">Global • Remote</span>
            </div>
          </div>

        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 pt-12">

        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#34d399] uppercase">
            [01] ALL CASES
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <Link to={`/works/${project.id}`} key={project.id} className="group flex flex-col cursor-pointer">

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-[#111212] border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#34d399]/0 group-hover:bg-[#34d399]/5 transition-colors duration-500 pointer-events-none"></div>
              </div>

              {/* Card Footer Details */}
              <div className="flex flex-col w-full">
                <div className="flex items-start justify-between w-full mb-3">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-mono text-[10px] tracking-[0.1em] text-[#34d399]">{project.id}</span>
                    </div>
                    <h3 className="text-[22px] md:text-[28px] font-bold tracking-tight group-hover:text-[#34d399] transition-colors duration-300">
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

                {/* Description */}
                <p className="text-white/50 text-[13px] leading-relaxed mb-4">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase bg-white/5 border border-white/5 px-2 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </Link>
          ))}
        </div>

      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-16 border-b border-white/5">
        <div className="max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-bold tracking-tight leading-[1.1] mb-6">
            Ready for your own <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">project?</span>
          </h2>
          <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-lg">
            I take on a limited number of projects per quarter. Send me a brief — I'll reply within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#34d399] text-[#090a0a] hover:bg-[#6ee7b7] transition-all duration-300 hover:scale-105 font-bold text-[13px] px-8 py-4 rounded-sm flex items-center justify-center"
            >
              Start a project →
            </button>
            <a
              href="https://wa.me/918948869211?text=Hi%20Amit%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all duration-300 hover:scale-105 font-bold text-[13px] text-[#25D366] px-8 py-4 rounded-sm flex items-center justify-center"
            >
              WhatsApp →
            </a>
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

export default Works;
