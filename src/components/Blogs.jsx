import React from "react";
import { blogs } from "../constants";

export const Blogs = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mt-6 ">
        <h2 className="font-semibold text-3xl text-center mt-4">
          Recent Blogs
        </h2>
      </div>
      <div className="blogCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 hover:shadow-md cursor-pointer border"
          >
            <img src={blog.image} className="w-full object-contain" />
            <h2 className="font-semibold text-lg mt-4">{blog.title}</h2>
            <p className=" text-neutral-500  text-lg max-w-4xl sm:max-w-full">
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
