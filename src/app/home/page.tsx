"use client";
import Link from "next/link";
import Image from "next/image";
import { FaShareAlt, FaHeart, FaExchangeAlt } from "react-icons/fa";
import InspirationPage from "../room/page";


const products = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/images-a.png",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "",
    image: "/Images.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/image 3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/image 4.png",
  },
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/lamp.png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/Images (3).png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/Images (4).png",
  },
  {
    id: 8,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/image8.png",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex justify-end items-center h-[716px] bg-no-repeat bg-center bg-contain bg-[#F4F5F7]"
        style={{
          backgroundImage: `url("/discover.png")`,
        }}
      >
        <div className="bg-[#FFF3E3] flex gap-[46px] flex-col w-fit mr-[58px] rounded-[10px] pl-[39px] pr-[43px] pt-[62px] pb-[37px]">
          <div>
            <h3 className="text-gray-800 text-[16px] font-semibold">New Arrival</h3>
            <h2 className="text-[52px] font-bold leading-[65px] mb-[17px] text-selfcolors-darkBrown">
              Discover Our <br />
              New Collection
            </h2>
            <p className="font-medium text-[18px] leading-[24px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper
              mattis.
            </p>
          </div>
          <div className="bg-primary px-[72px] py-[25px] w-fit cursor-pointer bg-selfcolors-darkBrown">
            <p className="text-white font-bold text-[16px]">BUY NOW</p>
          </div>
        </div>
      </div>

      {/* Browse The Range Section */}
      <div className="flex flex-col gap-[60px] items-center bg-white py-12 px-4 text-selfcolors-darkBrown">
        <div className="w-full sm:w-fit text-center">
          <h2 className="text-black font-bold text-[32px]">Browse The Range</h2>
          <p className="text-black font-normal text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[20px] text-selfcolors-darkBrown">
          {[
            { name: 'Dining', image: '/home-c.png' },
            { name: 'Living', image: '/home-b.png' },
            { name: 'Bedroom', image: '/home-a.png' },
          ].map((section) => (
            <div key={section.name} className="w-full sm:w-[381px] flex flex-col gap-[30px]">
              <div>
                <Image
                  src={section.image}
                  alt={section.name}
                  className="rounded-[4px] w-full"
                  width={900}
                  height={100}
                />
              </div>
              <div className="w-full text-center">
                <p className="font-semibold text-[24px] text-[#333333]">{section.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Products Section */}
      <div className="w-full border-b-2 py-16 flex flex-col justify-center bg-white px-4">
        <div className="flex flex-col gap-[32px] w-fit mx-auto">
          <div className="text-center">
            <h1 className="text-[40px] font-bold text-gray-600">Our Products</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="text-center border p-4 rounded-lg relative hover:scale-95 transition-transform group"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="w-full object-cover group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                  />
                  <div
                    className={`absolute top-0 right-0 text-white text-xs font-semibold px-2 py-1 rounded-br-lg ${product.discount ? 'bg-red-500' : 'bg-green-500'}`}
                  >
                    {product.discount || 'New'}
                  </div>
                </div>

                <h3 className="text-md font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.fullname}</p>
                <p className="text-gray-500 font-bold line-through">{product.originalPrice}</p>
                <p className="text-gray-800 font-bold">{product.price}</p>

                {/* Hover effect and "Add to Cart" button */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {/* Add to Cart Button */}
                  <button className="bg-white text-black py-2 px-4 rounded-lg text-lg font-semibold">
                    Add to Cart
                  </button>

                  {/* Icons below the Add to Cart button */}
                  <div className="mt-4 flex gap-6 text-white ">
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
            ))}
          </div>
          {/* Link to Product Page */}
          <div className="text-center mt-6">
            <Link
              href="/product"
              className="bg-primary text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-darkBrown transition-colors"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      <InspirationPage />

      <div className="w-full">
  <Image
    src="/share.png"
    alt="share"
    width={1400}
    height={800}
    className="w-full h-auto sm:w-1/2 md:w-2/3 lg:w-full"
  />
</div>



    </div>
  );
}