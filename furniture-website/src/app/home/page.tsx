"use client";

import Image from "next/image";
// import { Icon } from "@iconify/react";

const products = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    image: "/Images (1).png",
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
    image: "/image3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: "",
    image: "/Images(2).png",
  },
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: "",
    image: "/Images(4).png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    originalPrice: "",
    image: "/image7.png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    image: "/image.png",
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
            <h3 className="text-[#333333] text-[16px] font-semibold">New Arrival</h3>
            <h2 className="text-primary text-[52px] font-bold leading-[65px] mb-[17px]">
              Discover Our <br />
              New Collection
            </h2>
            <p className="font-medium text-[18px] text-[#333333] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper
              mattis.
            </p>
          </div>
          <div className="bg-primary px-[72px] py-[25px] w-fit cursor-pointer">
            <p className="text-white font-bold text-[16px]">BUY NOW</p>
          </div>
        </div>
      </div>

      {/* Browse The Range Section */}
      <div className="flex flex-col gap-[60px] items-center bg-[#F4F5F7] py-12 px-4">
        <div className="w-fit text-center">
          <h2 className="text-[#333333] font-bold text-[32px]">Browse The Range</h2>
          <p className="text-[#666666] font-normal text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[20px]">
          {/* Dining Section */}
          <div className="w-full sm:w-[381px] flex flex-col gap-[30px]">
            <div>
              <Image
                src="/home-a.png"
                alt="Dining"
                className="rounded-[4px] w-full"
                width={900}
                height={100}
              />
            </div>
            <div className="w-full text-center">
              <p className="font-semibold text-[24px] text-[#333333]">Dining</p>
            </div>
          </div>

          {/* Living Section */}
          <div className="w-full sm:w-[381px] flex flex-col gap-[30px]">
            <div>
              <Image
                src="/home-b.png"
                alt="Living"
                className="rounded-[4px] w-full"
                width={900}
                height={100}
              />
            </div>
            <div className="w-full text-center">
              <p className="font-semibold text-[24px] text-[#333333]">Living</p>
            </div>
          </div>

          {/* Bedroom Section */}
          <div className="w-full sm:w-[381px] flex flex-col gap-[30px]">
            <div>
              <Image
                src="/home-c.png"
                alt="Bedroom"
                className="rounded-[4px] w-full"
                width={900}
                height={100}
              />
            </div>
            <div className="w-full text-center">
              <p className="font-semibold text-[24px] text-[#333333]">Bedroom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="w-full border-b-2 py-16 flex flex-col justify-center bg-[#F4F5F7] px-4">
        <div className="flex flex-col gap-[32px] w-fit mx-auto">
          <div className="text-center">
            <h1 className="text-[40px] font-bold text-Gray1">Our Products</h1>
          </div>
          <div className="flex gap-[21px] overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
            {products.map((product, index) => (
              <div
                className="bg-white group relative overflow-hidden w-[285px] md:w-[285px] lg:w-[285px]"
                key={index}
              >
                <div className="w-full h-[301px]">
                  <div
                    className="flex h-full w-full bg-no-repeat bg-center relative group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  >
                      {/* Product badges */}
                  </div>
                  <div>
                      {/* Add to cart */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
