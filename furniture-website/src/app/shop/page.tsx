// import Image from "next/image";
// import Tropy1 from "@/app/image/trophy1.png";
// import Tropy2 from "@/app/image/guarantee.png";
// import Tropy3 from "@/app/image/trop3.png";
// import Tropy4 from "@/app/image/tropy2.png";

// // Service data array
// const services = [
//   {
//     image: Tropy1,
//     title: "High Quality",
//     description: "Crafted from top materials",
//   },
//   {
//     image: Tropy2,
//     title: "Warranty Protection",
//     description: "Over 2 years",
//   },
//   {
//     image: Tropy3,
//     title: "Free Shipping",
//     description: "Order over 150 $",
//   },
//   {
//     image: Tropy4,
//     title: "24 / 7 Support",
//     description: "Dedicated support",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="bg-[#F9F1E7] px-4 sm:px-8 lg:px-12 py-11 mb-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-7 gap-8 lg:gap-12">
//         {/* Using map to iterate over the services array */}
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center space-x-4"
//           >
//             <div className="flex-shrink-0">
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 width={50}
//                 height={50}
//                 className="sm:w-14 sm:h-14 lg:w-16 lg:h-16"
//               />
//             </div>
//             <div>
//               <h3 className="font-semibold text-[18px] sm:text-[22px] lg:text-[25px] whitespace-nowrap">
//                 {service.title}
//               </h3>
//               <p className="text-[#898989] text-sm sm:text-base">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
