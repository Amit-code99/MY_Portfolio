const Blog = () => {
  const posts = [
    {
      title: "Mastering Microservices Architecture with Node.js",
      date: "15 Jan 2026",
      categories: "Backend, Node.js",
      description: "An in-depth look at building scalable and resilient microservices using Node.js and Express. We discuss message brokers, database per service patterns, and service discovery."
    },
    {
      title: "Optimizing React Performance for Large-Scale Applications",
      date: "22 Feb 2026",
      categories: "Frontend, React",
      description: "Strategies for improving the performance of complex React applications. Covering memoization, code-splitting, and efficient state management to ensure a smooth user experience."
    },
    {
      title: "Serverless Computing: A Deep Dive into Azure Functions",
      date: "10 Mar 2026",
      categories: "Cloud, Azure",
      description: "Exploring the benefits and challenges of serverless architecture using Azure Functions. Learn how to build event-driven systems that scale automatically and reduce operational overhead."
    },
    {
      title: "Implementing Secure Authentication with JWT and OAuth2",
      date: "02 Apr 2026",
      categories: "Security, Web Dev",
      description: "Best practices for implementing robust authentication and authorization in modern web applications. Understanding the flow of JWT and integrating OAuth2 for third-party logins."
    }
  ];

  return (
    <div className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-[800px] mx-auto w-full">
      <div className="mb-16">
        <h1 className="text-[54px] font-black text-[#2C3333] mb-4 uppercase tracking-tighter">Insights</h1>
        <div className="w-20 h-1.5 bg-[#F7C04A]"></div>
      </div>
      
      <div className="space-y-16">
        {posts.map((post, index) => (
          <div key={index} className="pb-12 border-b border-gray-100 group">
            <h2 className="text-3xl font-bold text-[#2C3333] leading-tight mb-6 group-hover:text-[#F7C04A] transition-colors cursor-pointer">
              {post.title}
            </h2>
            <div className="text-[#8695A4] mb-6 text-sm flex items-center space-x-6 font-medium uppercase tracking-wider">
              <span className="font-bold text-[#2C3333]">{post.date}</span>
              <span className="text-gray-300">|</span>
              <span>{post.categories}</span>
            </div>
            <p className="text-[#2C3333] text-lg leading-relaxed opacity-80">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
