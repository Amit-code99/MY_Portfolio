import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      categories: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      categories: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      categories: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      categories: "Express, Handlebars",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
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
