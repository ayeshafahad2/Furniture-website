import React from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Importing star icons

const ProductPage = () => {
  return (
    <>
      {/* Main Product Banner */}
      <div className="relative">
        <Image
          src="/blog.png"
          alt="Hero Image"
          width={1400}
          height={400}
          className="object-cover w-full h-[300px] sm:h-[400px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain cursor-pointer sm:w-[100px] sm:h-[100px]"
          />
          <h1 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-800">
            Product Comparison
          </h1>
          <p className="mt-2 text-sm sm:text-lg text-gray-600">
            Home &gt; Comparison
          </p>
        </div>
      </div>

  
 

      <div className="container mx-auto px-4 py-8">
  {/* Main Container */}


  {/* Product Cards Section */}
  <div className="flex flex-wrap justify-center gap-8">
  <h1 className="text-2xl w-40 sm:text-3xl font-semibold mb-4">
      Go to Product page for more Products
      <br/>
      <span className="text-gray-500 underline text-lg sm:text-xl cursor-pointer">
      View More
    </span>
    </h1>
   
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <h2 className="text-lg sm:text-xl font-semibold">Asgaard Sofa</h2>
      <Image
        src="/Asgaard.png"
        alt="Asgaard Sofa"
        width={200}
        height={200}
        className="rounded-lg shadow-md"
      />
      {/* Price and Ratings */}
      <div className="mt-4">
        <p className="text-xl font-semibold text-gray-700">$225,500</p>
        <div className="flex items-center justify-center mt-2">
          <div className="flex">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
          </div>
          <p className="ml-2 text-gray-600">4.7</p>
        </div>
        <div className="flex justify-center items-center mt-2 text-gray-600">
          <span>| 137 Reviews</span>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center max-w-xs">
      <h2 className="text-lg sm:text-xl font-semibold">Outdoor Sofa</h2>
      <Image
        src="/outdoor.png"
        alt="Outdoor Sofa"
        width={200}
        height={200}
        className="rounded-lg shadow-md"
      />
      {/* Price and Ratings */}
      <div className="mt-4">
        <p className="text-xl font-semibold text-gray-700">$225,500</p>
        <div className="flex items-center justify-center mt-2">
          <div className="flex">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
          </div>
          <p className="ml-2 text-gray-600">4.7</p>
        </div>
        <div className="flex justify-center items-center mt-2 text-gray-600">
          <span>| 137 Reviews</span>
        </div>
      </div>
    </div>

    {/* Dropdown Section */}
    <div className="flex flex-col items-center">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Add a Product</h2>
      <select
  className="bg-selfcolors-darkBrown text-white py-2 px-4 rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
>
        <option value="" disabled selected>
          Choose a product
        </option>
        <option value="asgaard">Asgaard Sofa</option>
        <option value="outdoor">Outdoor Sofa</option>
      </select>
    </div>
  </div>
</div>


      {/* Divider */} 
      <div className="border-b w-full mt-16 border-r-1 border-gray-800 max-h-full"></div>
{/* Divider */}


      {/* Specifications Section */}
      <div className="flex flex-wrap items-start justify-between mt-14 w-full px-4">
        {/* General Details */}

        <div className="flex flex-col gap-6   text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
          <h1 className="text-[24px] pt-3 sm:text-[28px] font-semibold">General</h1>

          <h4>Sales Package</h4>
          <h4>Model Number</h4>
          <h4>Secondary Material</h4>
          <h4>Configuration</h4>
          <h4>Upholstery Material</h4>
          <h4>Upholstery Color</h4>
        </div>
        

        {/* Product Info */}
        <div className="flex flex-col pt-20 gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">

          <h4>1 sectional sofa</h4>
          <h4>TFCBLIGRBL6SRHS</h4>
          <h4>Solid Wood</h4>
          <h4>L-shaped</h4>
          <h4>Fabric + Cotton</h4>
          <h4>Bright Grey & Lion</h4>
        </div>
        {/* Product Info for Second Item */}
        <div className="flex flex-col  pt-20 gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>1 Three Seater, 2 Single Seater</h4>
          <h4>DTUBLIGRBL568</h4>
          <h4>Solid Wood</h4>
          <h4>L-shaped</h4>
          <h4>Fabric + Cotton</h4>
          <h4>Bright Grey & Lion</h4>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-wrap items-start justify-between mt-14 w-full px-4">
        {/* Labels */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
      
          <h1 className="text-[24px] pt-4 sm:text-[28px] font-semibold">Product</h1>
          <h4>Filling Material</h4>
          <h4>Finish Type</h4>
          <h4>Adjustable Headrest</h4>
          <h4>Maximum Load Capacity</h4>
          <h4>Origin of Manufacture</h4>
        </div>

        

        {/* Product Info Column 1 */}
        <div className="flex flex-col pt-20 gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>Foam</h4>
          <h4>Bright Grey & Lion</h4>
          <h4>No</h4>
          <h4>280 KG</h4>
          <h4>India</h4>
        </div>

        {/* Product Info Column 2 */}
        <div className="flex flex-col pt-20 gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>Matte</h4>
          <h4>Bright Grey & Lion</h4>
          <h4>Yes</h4>
          <h4>300 KG</h4>
          <h4>India</h4>
        </div>
      </div>

        {/* Product Details */}
        <div className="flex flex-wrap items-start justify-between mt-14 w-full px-4">
        {/* Labels */}
        <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
          <h1 className="text-[24px] pt-4 sm:text-[28px] font-semibold">Dimensions</h1>
          <h4>Width</h4>
          <h4>Height</h4>
          <h4>Depth</h4>
          <h4>Weight</h4>
          <h4>Seat Height</h4>
          <h4>Leg Height</h4>
        </div>

        

        {/* Product Info Column 1 */}
        <div className="flex flex-col pt-20 gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>265.32 cm</h4>
          <h4>76 cm</h4>
          <h4>167.76 cm</h4>
          <h4>45 KG</h4>
          <h4>41.52 cm</h4>
          <h4>5.46 cm</h4>
        </div>

        {/* Product Info Column 2 */}
        <div className="flex flex-col pt-20 gap-6 text-[18px] sm:text-[20px] mt-6 sm:mt-0 w-full sm:w-1/3">
          <h4>265.32 cm</h4>
          <h4>76 cm</h4>
          <h4>167.76 cm</h4>
          <h4>45 KG</h4>
          <h4>41.52 cm</h4>
          <h4>5.46 cm</h4>
        </div>
      </div>

      {/* Warranty Details */}
      <div className="flex flex-wrap items-start justify-between mt-14 sm:text-[20px] text-[18px] sm:px-6 px-4">
        {/* Column 1 - Warranty Labels */}
        <div className="flex flex-col gap-6 mb-6 sm:mb-0 sm:mx-auto w-full sm:w-1/3">
          <h1 className="text-[24px] pt-4 sm:text-[28px] font-semibold">Warranty</h1>
          <h4>Warranty Summary</h4>
          <br/>
          <h4>Warranty Service Type</h4>
          <br/>
          <h4>Covered in Warranty</h4>
          <br/>
          <h4>Not Covered in Warranty</h4>
          <br/>
          <h4>Domestic Warranty</h4>
        </div>

        {/* Column 2 - Warranty Details for Product 1 */}
        <div className="flex flex-col pt-20 gap-6 sm:mt-0 sm:mx-auto w-full sm:w-1/3">
          <h4 className="w-full sm:w-[230px]">1 Year Manufacturing Warranty</h4>
          <h4 className="w-full sm:w-[290px] ">
            For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com
          </h4>
          <h4 className="w-full sm:w-[260px] ">Warranty Against Manufacturing Defect</h4>
          <h4 className="w-full sm:w-[260px] ">
            The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear.
          </h4>
          <h4>1 Year</h4>
        </div>

        {/* Column 3 - Warranty Details for Product 2 */}
        <div className="flex flex-col pt-20 gap-6 sm:mt-0 sm:mx-auto w-full sm:w-1/3">
          <h4 className="w-full sm:w-[230px]">1.2 Year Manufacturing Warranty</h4>
          <h4 className="w-full sm:w-[260px] ">
            For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com
          </h4>
          <h4 className="w-full sm:w-[260px] ">Warranty of the product is limited to manufacturing defects only.</h4>
          <h4 className="w-full sm:w-[245px] ">
            The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use.
          </h4>
          <h4>3 Months</h4>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
