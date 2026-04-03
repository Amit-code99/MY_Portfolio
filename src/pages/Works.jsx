import { Link } from 'react-router-dom';
import work2 from '../assets/ecommerce_dashboard.png';
import work3 from '../assets/broker_community.png';
import work4 from '../assets/work_components.png';

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
    <div className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-[800px] mx-auto w-full">
      <h1 className="text-[44px] font-black text-[#21243D] mb-12">Work</h1>
      
      <div className="space-y-8">
        {worksItems.map((work) => (
          <div key={work.id} className="flex flex-col md:flex-row pb-8 border-b border-gray-200">
            <Link to={`/works/${work.id}`} className="shrink-0">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full md:w-[246px] h-auto md:h-[180px] object-cover rounded-md mb-4 md:mb-0 md:mr-6 hover:opacity-90 transition-opacity" 
              />
            </Link>
            <div className="flex flex-col justify-center">
              <Link to={`/works/${work.id}`}>
                <h3 className="text-3xl font-bold text-[#21243D] mb-4 hover:text-[#FF6464] transition-colors">{work.title}</h3>
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#142850] text-white font-black text-sm px-3 py-1 rounded-full">{work.year}</span>
                <span className="text-[#8695A4] text-xl">{work.category}</span>
              </div>
              <p className="text-[#21243D] text-[16px]">
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
