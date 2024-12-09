"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

// Reusable AdminTag Component
const AdminTag = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/admin.png"
        alt="Admin Logo"
        className="w-6 h-6 object-contain"
      />
      <span className="text-gray-800 text-lg font-bold">Admin</span>
      <img
        src="/calender.png"
        alt="Calendar Icon"
        className="w-6 h-6 object-contain"
      />    
        <span className="text-gray-800 text-sm">14 Oct 2022</span>

      <img
        src="/tag.png"
        alt="Tag Icon"
        className="w-6 h-6 object-contain"
      />
      <span className="text-gray-800 text-lg font-bold">Wood</span>
    </div>
  );
};

// BlogContentSection Component
interface BlogContentSectionProps {
  imgSrc: string;
  title: string;
  description: string;
}

const BlogContentSection: React.FC<BlogContentSectionProps> = ({
  imgSrc,
  title,
  description,
}) => {
  return (
    <div className="w-2/3 h-auto">
      <div className="h-[400px]"> {/* Adjusted image height */}
        <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
        <div className="p-4 bg-white shadow-md mt-4">
          <AdminTag /> {/* Admin Info Section */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-relaxed">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {description}
            <br />
            <button className="text-black hover:underline text-sm cursor-pointer">
              Read More
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <div className="flex items-center border p-4 rounded-md gap-2">
        <FaSearch className="text-gray-600" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 outline-none bg-transparent"
        />
      </div>
    </div>
  );
};

// Categories Section Component
const CategoriesSection = () => {
  return (
    <div className="space-y-2 p-4 border rounded-md shadow-sm">
      <h2 className="text-lg font-bold text-black mb-3">Categories</h2>
      <ul className="space-y-2 text-gray-700">
        <li className="flex p-2 justify-between items-center">
          <span>Crafts</span>
          <span>2</span>
        </li>
        <li className="flex p-2 justify-between items-center">
          <span>Design</span>
          <span>4</span>
        </li>
        <li className="flex p-2 justify-between items-center">
          <span>Handmade</span>
          <span>8</span>
        </li>
        <li className="flex p-2 justify-between items-center">
          <span>Interior</span>
          <span>8</span>
        </li>
        <li className="flex p-2 justify-between items-center">
          <span>Wood</span>
          <span>6</span>
        </li>
      </ul>
    </div>
  );
};

// RecentPosts Component
const RecentPosts = () => {
  return (
    <div className="w-1/3 bg-white p-6 shadow-md rounded-md space-y-4">
      <div className="p-4 border shadow-sm rounded-md">
        <h2 className="text-lg font-bold text-black mb-3">Recent Posts</h2>
        <ul className="space-y-4">
          {["blog-a.png", "blog-b.png", "blog-c.png", "blog-d.png", "blog-e.png"].map((img, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <img
                src={`/${img}`}
                alt={`Recent ${idx + 1}`}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Blog Post Title {idx + 1}</span>
                <span className="text-sm text-gray-500">{`0${idx + 1} Aug 2022`}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main Blog Component
const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/blog.png"
          alt="Hero Image"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-20 h-20 object-contain cursor-pointer"
            />
          </Link>
          <div className="mt-4">
            <h1 className="text-4xl font-bold mb-1 text-gray-800">Blog</h1>
            <p className="text-gray-600 text-lg">Home &gt; Blog</p>
          </div>
        </div>
      </div>

      {/* Blog Sections */}
      <div className="container mx-auto px-6 py-10 flex gap-10">
        <BlogContentSection
          imgSrc="/blog-1.png"
          title="Exploring Modern Craft Designs"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
        />
        <div className="w-1/3 bg-white p-6 shadow-md rounded-md space-y-4">
          <SearchBar />
          <CategoriesSection />
        </div>
      </div>

      <div className="container mx-auto px-6 py-32 flex gap-10">
        <BlogContentSection
          imgSrc="/blog-2.png"
          title="Handmade Jewelry Trends"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
        />
        <RecentPosts />
      </div>

      <div className="container mx-auto px-6 py-10 flex gap-10">
        <BlogContentSection
          imgSrc="/blog-3.png"
          title="Wood Interior Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.."
        />
      </div>
   </div>
  );
};

export default Blog;
