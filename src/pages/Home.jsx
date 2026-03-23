import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import work1 from '../assets/work_dashboard.png';
import work2 from '../assets/work_portrait.png';
import work3 from '../assets/work_typography.png';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-2/3 md:pr-10 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#21243D] leading-tight mb-6">
            Hi, I am Amit Yadav,<br className="hidden md:block" />
            Software Developer
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Software Developer with strong expertise in Node.js, Python, and modern frontend technologies including React.js, Tailwind CSS, and JavaScript. MCA graduate with a solid foundation in building scalable, responsive, and user-centric web applications. Experienced with Azure and Adobe Target, with a focus on delivering efficient and high-performance solutions.
          </p>
          <button className="bg-[#FF6464] hover:bg-[#ff4f4f] transition-colors text-white font-medium py-3 px-8 rounded">
            Download Resume
          </button>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            src={avatar}
            alt="Amit's Profile"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-[0_5px_0px_5px_rgba(237,247,250,1)]"
          />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="bg-[#EDF7FA] py-8 pb-16">
        <div className="px-4 md:px-8 max-w-5xl mx-auto">
          <div className="flex justify-center md:justify-between items-center mb-6">
            <h2 className="text-[22px] text-[#21243D]">Recent posts</h2>
            <Link to="/blog" className="hidden md:block text-[#00A8CC] hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-[26px] font-bold text-[#21243D] leading-tight mb-4">
                  {item === 1 ? "Building a Scalable Multi-Vendor E-Commerce Platform" : "Building a Scalable Broker Community Platform"}
                </h3>
                <div className="text-[#21243D] mb-4 text-lg flex items-center space-x-4">
                  <span>Mar 2026 | Backend Development</span>
                  <span className="text-gray-400">|</span>
                  <span>{item === 1 ? "Node.js,Express.js, MongoDB, JavaScript" : "Node.js,Express.js, MongoDB, JavaScript"}</span>
                </div>
                <p className="text-gray-600">
                  {item === 1 ? "Built RESTful APIs using Node.js and Express, handling core functionalities such as user authentication, product catalog management, cart operations, and order lifecycle. Integrated vendor-specific dashboards, enabling sellers to manage inventory, pricing, and orders efficiently." : "Built scalable backend services using Node.js and Express, enabling secure user authentication, role-based access (brokers, admins), and real-time interaction capabilities. Implemented features like property listings, lead management, and broker-to-broker collaboration to improve networking and deal flow."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="px-4 md:px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-[22px] text-[#21243D] mb-8 text-center md:text-left">Featured works</h2>

        <div className="space-y-8">
          {/* Work Item 1 */}
          <div className="flex flex-col md:flex-row pb-8 border-b border-gray-200">
            <img src={work1} alt="Dashboard" className="w-full md:w-[246px] h-auto md:h-[180px] object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#21243D] mb-4">Designing Dashboards</h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#142850] text-white font-black text-sm px-3 py-1 rounded-full">2025</span>
                <span className="text-[#8695A4] text-xl">Dashboard</span>
              </div>
              <p className="text-[#21243D]">
                Built RESTful APIs using Node.js and Express to handle core functionalities such as product management, order tracking, user control, and inventory updates. Designed secure authentication and role-based access for admins and vendors.
              </p>
            </div>
          </div>

          {/* Work Item 2 */}
          <div className="flex flex-col md:flex-row pb-8 border-b border-gray-200">
            <img src={work2} alt="Illustration" className="w-full md:w-[246px] h-auto md:h-[180px] object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#21243D] mb-4">Vibrant Portraits of 2025</h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#142850] text-white font-black text-sm px-3 py-1 rounded-full">2018</span>
                <span className="text-[#8695A4] text-xl">Illustration</span>
              </div>
              <p className="text-[#21243D]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          {/* Work Item 3 */}
          <div className="flex flex-col md:flex-row pb-8 border-b border-gray-200">
            <img src={work3} alt="Typography" className="w-full md:w-[246px] h-auto md:h-[180px] object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#21243D] mb-4">36 Days of Malayalam type</h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#142850] text-white font-black text-sm px-3 py-1 rounded-full">2018</span>
                <span className="text-[#8695A4] text-xl">Typography</span>
              </div>
              <p className="text-[#21243D]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
