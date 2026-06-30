import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ecommerceDashboard from '../assets/ecommerce_dashboard.png';
import brokerCommunity from '../assets/broker_community.png';
import projectPlaceholder from '../assets/project_placeholder.png';

const projectData = {
  '01': {
    title: 'Multi-Vendor E-Commerce Platform',
    year: '2025',
    tags: 'Full Stack · Microservices',
    image: brokerCommunity,
    tech: ['Node.js', 'React', 'Kafka', 'Redis', 'Docker', 'MongoDB', 'Express'],
    problem: 'Traditional monolithic e-commerce platforms struggle with scaling when multiple vendors operate simultaneously, leading to bottlenecks in order processing and inventory management.',
    solution: 'Built a microservices-based marketplace architecture with event-driven communication via Kafka, Redis caching for high-frequency reads, and containerized deployment with Docker for seamless scaling.',
    result: 'Platform handles concurrent multi-vendor transactions at scale with sub-200ms response times, automated vendor onboarding, and independent service deployment capabilities.',
  },
  '02': {
    title: 'Astrogram',
    year: '2025',
    tags: 'Full Stack · Social Media',
    image: projectPlaceholder,
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary'],
    problem: 'Needed a modern social media platform with real-time capabilities, secure authentication, and seamless media handling — all built from the ground up.',
    solution: 'Developed a full-stack social platform with real-time feeds powered by Socket.io, JWT-based authentication, media uploads via Cloudinary, and a responsive React frontend.',
    result: 'Fully functional social media application with real-time notifications, user profiles, post feeds, likes/comments, and image/video sharing — production-ready and performant.',
  },
  '03': {
    title: 'E-Commerce Dashboard',
    year: '2024',
    tags: 'Frontend · Analytics',
    image: ecommerceDashboard,
    tech: ['React', 'Chart.js', 'Tailwind CSS', 'REST API', 'Context API'],
    problem: 'E-commerce businesses need real-time visibility into sales metrics, inventory levels, and customer behavior — existing tools were either too expensive or too complex.',
    solution: 'Built a custom analytics dashboard with interactive charts, filterable data views, order management workflows, and responsive design for both desktop and mobile.',
    result: 'Clean, intuitive dashboard providing actionable insights — revenue tracking, order lifecycle management, and customer segmentation all in one view.',
  },
  '04': {
    title: 'Broker Communities Platform',
    year: '2024',
    tags: 'Full Stack · Community Platform',
    image: brokerCommunity,
    tech: ['Node.js', 'React', 'Socket.io', 'MongoDB', 'Express', 'Tailwind CSS'],
    problem: 'Real estate brokers lacked a dedicated, secure real-time channel to share exclusive listings and collaborate on deals instantly without information getting lost in noise.',
    solution: 'Built a secure full-stack community network with instant messaging via Socket.io, filterable listings database, private invitation system, and robust user roles.',
    result: 'Streamlined communication, enabling brokers to close deals 30% faster through immediate peer matching and secure real-time listing feeds.',
  },
  '05': {
    title: 'MeetYou',
    year: '2024',
    tags: 'Full Stack · Chat Platform',
    image: projectPlaceholder,
    tech: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Express'],
    problem: 'Most messaging platforms require heavy client downloads or complex logins, creating friction for users looking for quick, high-quality chat sessions.',
    solution: 'Engineered a web-native P2P messaging service using WebRTC for video/audio streams, Socket.io for fallback signaling, and a clean reactive interface.',
    result: 'Zero-friction connection establishment, providing crystal-clear 1080p video calls, low latency text channels, and secure encrypted messaging.',
  },
};

const WorkDetail = () => {
  const { id } = useParams();
  const project = projectData[id] || projectData['01'];

  useEffect(() => {
    document.title = `${project.title} | Amit Yadav`;
  }, [project.title]);

  const projectIds = Object.keys(projectData);
  const currentIndex = projectIds.indexOf(id);
  const prevId = currentIndex > 0 ? projectIds[currentIndex - 1] : null;
  const nextId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null;

  return (
    <div className="bg-[#090a0a] min-h-screen text-white pt-28 pb-20">
      <div className="px-4 md:px-8 max-w-[900px] mx-auto w-full">
        
        {/* Back link */}
        <Link to="/works" className="inline-flex items-center text-white/50 hover:text-[#34d399] transition-colors text-[13px] font-mono tracking-wide mb-12 group">
          <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          BACK TO PORTFOLIO
        </Link>

        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#34d399] uppercase">
            [{id}] CASE STUDY
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[50px] lg:text-[60px] font-bold tracking-tight leading-[1.05] mb-6">
          {project.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <span className="bg-[#34d399]/10 border border-[#34d399]/30 text-[#34d399] font-bold text-[13px] px-4 py-1.5 rounded-sm">
            {project.year}
          </span>
          <span className="text-white/60 text-[15px]">{project.tags}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tech.map((t, i) => (
            <span key={i} className="font-mono text-[9px] tracking-[0.1em] text-white/60 uppercase bg-white/5 border border-white/5 px-3 py-1.5 rounded-sm">
              {t}
            </span>
          ))}
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[16/10] rounded-sm overflow-hidden mb-16 bg-[#111212] border border-white/5">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Problem / Solution / Result */}
        <div className="space-y-12 mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-red-400/80 rounded-full"></div>
              <h2 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">The Problem</h2>
            </div>
            <p className="text-white/80 text-[16px] leading-relaxed pl-5 border-l-2 border-white/10">
              {project.problem}
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-[#34d399] rounded-full"></div>
              <h2 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">The Solution</h2>
            </div>
            <p className="text-white/80 text-[16px] leading-relaxed pl-5 border-l-2 border-[#34d399]/30">
              {project.solution}
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-blue-400/80 rounded-full"></div>
              <h2 className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">The Result</h2>
            </div>
            <p className="text-white/80 text-[16px] leading-relaxed pl-5 border-l-2 border-blue-400/30">
              {project.result}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          {prevId ? (
            <Link to={`/works/${prevId}`} className="flex items-center text-white/50 hover:text-[#34d399] transition-colors text-[13px] font-mono tracking-wide group">
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              PREVIOUS
            </Link>
          ) : <div />}
          {nextId ? (
            <Link to={`/works/${nextId}`} className="flex items-center text-white/50 hover:text-[#34d399] transition-colors text-[13px] font-mono tracking-wide group">
              NEXT
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>

      </div>
    </div>
  );
};

export default WorkDetail;
