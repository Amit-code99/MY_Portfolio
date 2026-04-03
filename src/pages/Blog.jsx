import React from 'react';

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
    <div className="px-4 md:px-8 pt-8 md:pt-24 pb-16 max-w-[680px] mx-auto w-full">
      <h1 className="text-[44px] font-bold text-[#21243D] mb-12">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="pb-8 border-b border-gray-200">
            <h2 className="text-[30px] font-bold text-[#21243D] leading-tight mb-4">
              {post.title}
            </h2>
            <div className="text-[#21243D] mb-4 text-[20px] flex items-center space-x-4">
              <span className="font-semibold">{post.date}</span>
              <span className="text-[#8695A4]">|</span>
              <span className="text-[#8695A4]">{post.categories}</span>
            </div>
            <p className="text-[#21243D] text-[16px]">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
