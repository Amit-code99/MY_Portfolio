import { Link } from 'react-router-dom';
import work1 from '../assets/work_dashboard.png';
import work2 from '../assets/work_portrait.png';
import work3 from '../assets/work_typography.png';
import work4 from '../assets/work_components.png';

const Works = () => {
  const worksItems = [
    {
      id: 'dashboards',
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: work1
    },
    {
      id: 'portraits',
      title: 'Vibrant Portraits of 2020',
      year: '2018',
      category: 'Illustration',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: work2
    },
    {
      id: 'malayalam',
      title: '36 Days of Malayalam type',
      year: '2018',
      category: 'Typography',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: work3
    },
    {
      id: 'components',
      title: 'Components',
      year: '2018',
      category: 'Components, Design',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: work4
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
