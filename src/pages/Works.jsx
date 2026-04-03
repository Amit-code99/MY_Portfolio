import { Link } from 'react-router-dom';
import work2 from '../assets/ecommerce_dashboard.png';
import work3 from '../assets/broker_community.png';

const Works = () => {
  const worksItems = [
    {
      id: 'ecommerce',
      title: 'Multi-Vendor E-Commerce Platform',
      year: '2026',
      category: 'Full Stack Development',
      description: 'Built RESTful APIs using Node.js and Express, handling core functionalities such as user authentication, product catalog management, cart operations, and order lifecycle. Integrated vendor-specific dashboards, enabling sellers to manage inventory, pricing, and orders efficiently.',
      image: work2
    },
    {
      id: 'broker',
      title: 'Broker Community Platform',
      year: '2026',
      category: 'Backend Development',
      description: 'Built scalable backend services using Node.js and Express, enabling secure user authentication, role-based access (brokers, admins), and real-time interaction capabilities. Implemented features like property listings, lead management, and broker-to-broker collaboration to improve networking and deal flow.',
      image: work3
    }
  ];

  return (
    <div className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-[900px] mx-auto w-full">
      <div className="mb-16">
        <h1 className="text-[54px] font-black text-[#2C3333] mb-4 uppercase tracking-tighter">Portfolio</h1>
        <div className="w-20 h-1.5 bg-[#F7C04A]"></div>
      </div>
      
      <div className="space-y-16">
        {worksItems.map((work) => (
          <div key={work.id} className="flex flex-col md:flex-row pb-12 border-b border-gray-100 group">
            <Link to={`/works/${work.id}`} className="shrink-0 overflow-hidden rounded-lg mb-6 md:mb-0 md:mr-10">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full md:w-[320px] h-auto md:h-[220px] object-cover hover:scale-110 transition-transform duration-500 shadow-md" 
              />
            </Link>
            <div className="flex flex-col justify-center">
              <Link to={`/works/${work.id}`}>
                <h3 className="text-3xl font-bold text-[#2C3333] mb-4 hover:text-[#F7C04A] transition-colors leading-tight">{work.title}</h3>
              </Link>
              <div className="flex items-center space-x-6 mb-6">
                <span className="bg-[#2C3333] text-white font-bold text-xs px-4 py-1.5 rounded-sm uppercase tracking-widest leading-none">{work.year}</span>
                <span className="text-[#8695A4] text-lg font-medium">{work.category}</span>
              </div>
              <p className="text-[#2C3333] text-lg leading-relaxed opacity-80">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
