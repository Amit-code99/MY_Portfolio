import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    document.title = 'Insights | Amit Yadav';
  }, []);

  const posts = [
    {
      title: "Mastering Microservices Architecture with Node.js",
      date: "15 Jan 2026",
      categories: "Backend, Node.js",
      description: "An in-depth look at building scalable and resilient microservices using Node.js and Express. We discuss message brokers, database per service patterns, and service discovery.",
      tags: ['NODE.JS', 'MICROSERVICES', 'ARCHITECTURE']
    },
    {
      title: "Optimizing React Performance for Large-Scale Applications",
      date: "22 Feb 2026",
      categories: "Frontend, React",
      description: "Strategies for improving the performance of complex React applications. Covering memoization, code-splitting, and efficient state management to ensure a smooth user experience.",
      tags: ['REACT', 'PERFORMANCE', 'OPTIMIZATION']
    },
    {
      title: "Serverless Computing: A Deep Dive into Azure Functions",
      date: "10 Mar 2026",
      categories: "Cloud, Azure",
      description: "Exploring the benefits and challenges of serverless architecture using Azure Functions. Learn how to build event-driven systems that scale automatically and reduce operational overhead.",
      tags: ['AZURE', 'SERVERLESS', 'CLOUD']
    },
    {
      title: "Implementing Secure Authentication with JWT and OAuth2",
      date: "02 Apr 2026",
      categories: "Security, Web Dev",
      description: "Best practices for implementing robust authentication and authorization in modern web applications. Understanding the flow of JWT and integrating OAuth2 for third-party logins.",
      tags: ['JWT', 'OAUTH2', 'SECURITY']
    }
  ];

  return (
    <div className="bg-[#090a0a] min-h-screen text-white pt-28 pb-20">
      <div className="px-4 md:px-8 max-w-[900px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-[1px] w-8 bg-white/30"></div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
              Blog
            </span>
          </div>
          <h1 className="text-[46px] md:text-[60px] font-bold tracking-tight leading-[1] mb-4">
            <span className="font-serif tracking-[-0.025em] px-[0.04em] italic font-normal text-[#34d399]">Insights</span> & Articles
          </h1>
          <p className="text-white/60 text-[15px] max-w-[500px] leading-relaxed">
            Thoughts on backend engineering, system design, and building production-grade applications.
          </p>
        </div>
        
        {/* Posts */}
        <div className="flex flex-col">
          {posts.map((post, index) => (
            <article key={index} className="py-10 border-b border-white/5 group cursor-pointer hover:bg-white/[0.01] transition-colors -mx-4 px-4 rounded-sm">
              
              {/* Date & Categories */}
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-mono text-[10px] tracking-[0.1em] text-[#34d399] uppercase font-bold">{post.date}</span>
                <span className="w-[3px] h-[3px] bg-white/20 rounded-full"></span>
                <span className="font-mono text-[10px] tracking-[0.1em] text-white/40 uppercase">{post.categories}</span>
              </div>

              {/* Title */}
              <h2 className="text-[24px] md:text-[30px] font-bold tracking-tight leading-[1.15] mb-4 group-hover:text-[#34d399] transition-colors">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 text-[15px] leading-relaxed mb-6 max-w-[600px]">
                {post.description}
              </p>

              {/* Tags & Read More */}
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="font-mono text-[8px] tracking-[0.1em] text-white/50 uppercase bg-white/5 border border-white/5 px-2.5 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight size={16} className="text-white/20 group-hover:text-[#34d399] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
