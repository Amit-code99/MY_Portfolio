import { useParams } from 'react-router-dom';
import dashboardImg from '../assets/work_dashboard.png';
import workCar from '../assets/work_detail_car.png';
import workMobile from '../assets/work_detail_mobile.png';

const WorkDetail = () => {
  const { id } = useParams();

  // In a real app we would fetch the details based on the id. 
  // We'll map the "dashboards" item specifically to match the template visualization.
  const title = id === 'dashboards' ? 'Designing Dashboards with usability in mind' : 'Work Details Template';
  
  return (
    <div className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-[680px] mx-auto w-full">
      <h1 className="text-[34px] md:text-[44px] font-bold text-[#21243D] leading-tight mb-8">
        {title}
      </h1>
      
      <div className="flex items-center space-x-4 mb-8">
        <span className="bg-[#FF7C7C] text-white font-bold text-sm px-3 py-1 rounded-full text-[16px]">2020</span>
        <span className="text-[#21243D] text-[20px]">Dashboard, User Experience Design</span>
      </div>

      <p className="text-[#21243D] text-[16px] mb-12 leading-relaxed">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>

      {/* Large visual representation */}
      <img 
        src={dashboardImg} 
        alt="Dashboard UI" 
        className="w-full h-auto rounded-md mb-12 shadow-sm"
      />

      <div className="mb-12">
        <h2 className="text-[30px] font-bold text-[#21243D] mb-4">Heading 1</h2>
        <h3 className="text-[24px] font-bold text-[#21243D] mb-4">Heading 2</h3>
        <p className="text-[#21243D] text-[16px] leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      {/* Image Block: Red Car */}
      <img 
        src={workCar} 
        alt="Illustration" 
        className="w-full h-auto rounded-md mb-12 shadow-sm"
      />

      {/* Image Block: Mobile App UI */}
      <img 
        src={workMobile} 
        alt="Mobile Order Schedule Design" 
        className="w-full md:w-2/3 mx-auto h-auto rounded-md shadow-sm"
      />
    </div>
  );
};

export default WorkDetail;
