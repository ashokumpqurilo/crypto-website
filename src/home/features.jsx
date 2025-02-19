"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Heading from "../common/Heading";

export default function Features() {
  const features = [
    {
      title: "Create, launch, and chain AI agents effortlessly",
      description:
        "Serverless AI agent deployment happens in the cloud, enabling users to create and manage AI workflows without server infrastructure.",
      image: "/images/feature1.png",
    },
    {
      title: "Create, launch, and chain AI agents effortlessly",
      description:
        "Serverless AI agent deployment happens in the cloud, enabling users to create and manage AI workflows without server infrastructure.",
        image: "/images/feature1.png",
    },
    {
      title: "Create, launch, and chain AI agents effortlessly",
      description:
        "Serverless AI agent deployment happens in the cloud, enabling users to create and manage AI workflows without server infrastructure.",
        image: "/images/feature1.png",
    },
  ];

  return (
    <div id="features"  className='pb-4 lg:pb-12 px-4 lg:px-8'
        // style={{backgroundImage: "url(/images/feature.jpg)"}}
    >
    <Heading title={"Features"} />

      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1A0B2E] rounded-2xl p-6 text-center border-4 border-transparent hover:border-purple-400 transition-all duration-300">
                <img
                  src={feature.image}
                  alt="Feature"
                  className="w-full rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
