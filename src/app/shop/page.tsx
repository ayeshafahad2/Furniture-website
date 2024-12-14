"use client"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FaHeart, FaShareAlt, FaExchangeAlt,FaSlidersH  , FaThLarge,} from 'react-icons/fa';
import "@fortawesome/fontawesome-free/css/all.min.css";

    

const ShopPage = () => {
    const [show, setShow] = useState(16); // Default number of items per page
    const [sortBy, setSortBy] = useState('Default'); // Default sort option
  
    // Handle the change in the number of items to show
    const handleShowChange = (newShow: number) => {
      setShow(newShow);
    };
  
    // Handle the change in sorting option
    const handleSortChange = (newSortBy: string) => {
      setSortBy(newSortBy);
    };
    const [currentPage, setCurrentPage] = useState(1);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const handleNext = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
    return (
        <>
            <div>
            <div className="relative">
        <Image src="/blog.png" alt="Hero Image" width={400} height={200} className="w-full h-[400px] object-cover" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
         
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={200}
              className="w-20 h-20 object-contain cursor-pointer"
            />
          
          <div className="mt-4">
            <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
            <p className="text-gray-600 text-lg">Home &gt; Shop</p>
          </div>
        </div>
      </div>

        
      </div>
      <div className="h-auto bg-selfcolors-lightCream flex flex-col sm:flex-row items-center justify-between py-4 px-2 sm:px-6">
      <div className="flex flex-wrap items-center justify-evenly sm:justify-between w-full space-x-3 sm:space-x-6">
        {/* Filter with Lines Icon */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaSlidersH size={28} />
          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold">Filter</h3>
        </div>

        {/* Square Grid Icon */}
        <FaThLarge size={25} />

        {/* Custom View List Icon */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="h-[2px] w-[20px] bg-black"></div>
          <div className="h-[8px] w-[25px] bg-black"></div>
          <div className="h-[2px] w-[20px] bg-black"></div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 w-full">
        {/* Showing information */}
        <span className="text-xs sm:text-sm md:text-base">Showing 1–{show} of 32 results</span>

        {/* Show selector */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-xs sm:text-sm md:text-base">Show</span>
          <div
            className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center rounded-md cursor-pointer"
            onClick={() => handleShowChange(show === 16 ? 32 : 16)} // Toggle between 16 and 32 items
          >
            <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">{show}</h3>
          </div>
        </div>

        {/* Sort by selector */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-xs sm:text-sm md:text-base">Sort by</span>
          <div
            className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center rounded-md"
            onClick={() => handleSortChange(sortBy === 'Default' ? 'Price' : 'Default')} // Toggle between 'Default' and 'Price'
          >
            <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">{sortBy}</h3>
          </div>
        </div>
        </div>
                    </div>

        
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  {Array(4).fill(
    [
      { 
        id: "product1", 
        name: "Syltherine", 
        desc: "Stylish cafe chair", 
        price: "Rp 2.500.000", 
        discountPrice: "Rp 3.500.000", 
        image: "/images-a.png", 
        tag: "-30% OFF", 
        tagColor: "bg-red-500" 
      },
      { 
        id: "product2", 
        name: "Leviosa", 
        desc: "Stylish", 
        price: "Rp 2.500.000", 
        image: "/Images.png", 
      },
      { 
        id: "product3", 
        name: "Lolito", 
        desc: "Luxury big sofa", 
        price: "Rp 7.000.00", 
        discountPrice: "Rp 14,000.00", 
        image: "/Images (3).png", 
        tag: "-50% OFF", 
        tagColor: "bg-red-500" 
      },
      { 
        id: "product4", 
        name: "Respira", 
        desc: "Outdoor bar table and stool", 
        price: "Rp 500.000",  
        discountPercent: "New", 
        image: "/Images (4).png", 
        tag: "New", 
        tagColor: "bg-green-500" 
      }
    ].map((product) => (

      <div key={product.id} className="text-center border p-4 rounded-lg relative hover:scale-95 transition-transform group">
        <div className="relative">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={150} 
            height={150} 
            className="w-full object-cover group-hover:opacity-75 transition-opacity duration-300 ease-in-out" 
          />
          <div className={`absolute top-0 right-0 text-white text-xs font-semibold px-2 py-1 rounded-br-lg ${product.tagColor}`}>
            {product.tag}
          </div>
        </div>

        <h3 className="text-md font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.desc}</p>
        <p className="text-gray-500 font-bold line-through">{product.price}</p>
        <p className="text-gray-800 font-bold">{product.discountPrice}</p>

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
  {/* Add to Cart Button */}
  <Link href="/singleproduct">
    <button className="bg-white text-black py-2 px-4 rounded-lg text-lg font-semibold">
      Add to Cart
    </button>
  </Link>

  {/* Icons below the Add to Cart button */}
  <div className="mt-4 flex gap-6 text-white">
    <button className="hover:text-gray-300 transition-colors duration-200 ease-in-out flex flex-col items-center">
      <FaShareAlt className="mb-1" />
      Share
    </button>
    <button className="hover:text-gray-300 transition-colors duration-200 ease-in-out flex flex-col items-center">
      <FaExchangeAlt className="mb-1" />
      Compare
    </button>
    <button className="hover:text-gray-300 transition-colors duration-200 ease-in-out flex flex-col items-center">
      <FaHeart className="mb-1" />
      Like
    </button>
  </div>
</div>


      </div>
    ))
  )}
</div>


<div className='flex items-center justify-center gap-8 mt-14'>
      {/* Page 1 */}
      <div
        className={`w-[60px] h-[60px] flex items-center justify-center cursor-pointer ${
          currentPage === 1 ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
        }`}
        onClick={() => handlePageChange(1)}
      >
        1
      </div>
      {/* Page 2 */}
      <div
        className={`w-[60px] h-[60px] flex items-center justify-center cursor-pointer ${
          currentPage === 2 ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
        }`}
        onClick={() => handlePageChange(2)}
      >
        2
      </div>
      {/* Page 3 */}
      <div
        className={`w-[60px] h-[60px] flex items-center justify-center cursor-pointer ${
          currentPage === 3 ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
        }`}
        onClick={() => handlePageChange(3)}
      >
        3
      </div>
      {/* Next Button */}
      <div
        className='w-[60px] h-[60px] flex items-center justify-center cursor-pointer bg-[#F9F1E7]'
        onClick={handleNext}
      >
        Next
      </div>
    </div>
        </>
    )
}

export default ShopPage