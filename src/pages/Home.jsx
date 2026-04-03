import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Play } from 'lucide-react';
import avatar from '../assets/avatar.png';
import work2 from '../assets/ecommerce_dashboard.png';
import work3 from '../assets/broker_community.png';

const Home = () => {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-[#2A3131] relative overflow-hidden rounded-bl-[150px] md:rounded-bl-[350px] min-h-[100vh] flex items-center md:items-end md:pb-0 pb-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center justify-between relative h-full pt-36 md:pt-40">
          
          {/* Left Text */}
          <div className="md:w-[50%] z-20 flex flex-col items-start mt-4 md:mt-[-80px]">
            <p className="text-white text-[20px] md:text-[22px] mb-1 font-normal tracking-wide">Hello I am</p>
            <p className="text-white text-[20px] md:text-[22px] mb-4 font-normal tracking-wide">Amit Yadav</p>
            
            <h1 className="text-white text-[56px] md:text-[85px] font-bold leading-[1.05] mb-16 tracking-tight">
              Software <br/> Developer
            </h1>
            
            {/* Play Button */}
            <div className="w-[85px] h-[85px] flex justify-center items-center relative cursor-pointer group mt-2 md:ml-12">
              <div className="absolute inset-0 rounded-full border-[6px] border-[#ecc655] shadow-[0_0_15px_rgba(236,198,85,0.4)] transition-transform group-hover:scale-105"></div>
              <div className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center pl-1 z-10 transition-transform group-hover:scale-110 shadow-sm">
                <Play className="fill-[#ecc655] text-[#ecc655]" size={20} />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-[50%] flex justify-center md:justify-end items-end h-[60vh] md:h-auto absolute bottom-0 right-0 md:relative z-10 opacity-70 md:opacity-100 overflow-hidden md:overflow-visible pointer-events-none mt-20 md:mt-0">
            <img 
              src={avatar} 
              alt="Amit Yadav" 
              className="w-auto h-full max-h-[85vh] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Social Sidebar */}
          <div className="hidden md:flex flex-col space-y-[8px] absolute right-8 top-1/2 -translate-y-1/2 z-30">
            {[
               { id: 'fb', icon: <Facebook size={18} fill="currentColor" stroke="none" /> },
               { id: 'tw', icon: <Twitter size={18} fill="currentColor" stroke="none" /> },
               { id: 'in', icon: <Linkedin size={18} fill="currentColor" stroke="none" /> },
               { id: 'ig', icon: <Instagram size={18} /> }
            ].map(social => (
               <div key={social.id} className="w-[42px] h-[42px] bg-[#9ba5a5] hover:bg-[#ecc655] transition-colors duration-300 rounded-[5px] flex items-center justify-center cursor-pointer group shadow-sm">
                 <div className="text-[#2A3131]">{social.icon}</div>
               </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Works Section */}
      <section className="px-6 md:px-24 py-28 bg-white max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-[15px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-4">Latest Works</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[#2A3131] leading-[1.1] tracking-tight">Project <br /> Collections</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <ProjectBox
            title="Multi-Vendor E-Commerce Platform"
            category="Full Stack Development"
            image={work2}
            id="ecommerce"
          />
          <ProjectBox
            title="Broker Community Platform"
            category="Backend Development"
            image={work3}
            id="broker"
          />
        </div>
        
        <div className="mt-16 flex justify-center md:justify-start">
           <Link to="/works" className="px-10 py-5 bg-[#2A3131] text-white font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-[#ecc655] hover:text-[#2A3131] transition-colors rounded-sm">View All Works</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ecc655] py-28 relative overflow-hidden">
        <div className="px-6 md:px-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2A3131] leading-[1.1] tracking-tight mb-10 md:mb-0">
            Ready to Build <br /> Your Next Vision?
          </h2>
          <Link 
            to="/contact" 
            className="px-10 py-5 bg-[#2A3131] text-white font-bold text-[13px] uppercase tracking-[0.2em] hover:-translate-y-1 transition-transform rounded-sm shadow-xl"
          >
            Contact Me Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const ProjectBox = ({ title, category, image, id }) => (
  <Link to={`/works/${id}`} className="group block">
    <div className="w-full aspect-[4/3] overflow-hidden rounded-md mb-8 shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    <div>
        <span className="text-[#ecc655] text-[13px] font-bold uppercase tracking-[0.2em] mb-4 block">{category}</span>
        <h4 className="text-3xl md:text-[32px] font-bold text-[#2A3131] leading-tight group-hover:text-[#ecc655] transition-colors">{title}</h4>
    </div>
  </Link>
);

export default Home;
