import useEmblaCarousel from "embla-carousel-react";
import { React , useEffect, useState, useCallback } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";


const testimonials = [
  {
    name: "Anjali Mehta",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Internshala helped me find an internship that aligned with my passion. The experience was seamless and professional.",
  },
  {
    name: "Rohan Kapoor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The platform is easy to navigate, and I loved how I could apply to multiple roles with just one click!",
  },
  {
    name: "Sneha Joshi",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "My first internship landed through this platform. It gave me the confidence and exposure I needed!",
  },
  {
    name: "Anjali Mehta",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Internshala helped me find an internship that aligned with my passion. The experience was seamless and professional.",
  },
  {
    name: "Rohan Kapoor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The platform is easy to navigate, and I loved how I could apply to multiple roles with just one click!",
  },
  {
    name: "Sneha Joshi",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "My first internship landed through this platform. It gave me the confidence and exposure I needed!",
  },
  {
    name: "Anjali Mehta",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Internshala helped me find an internship that aligned with my passion. The experience was seamless and professional.",
  },
  {
    name: "Rohan Kapoor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The platform is easy to navigate, and I loved how I could apply to multiple roles with just one click!",
  },
  {
    name: "Sneha Joshi",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "My first internship landed through this platform. It gave me the confidence and exposure I needed!",
  },
];


export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto px-20 py-5">
      <div className="space-y-8"></div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-x gap-4 px-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] px-2"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 h-full flex flex-col justify-between">
                {/* Header with Avatar, Name, and Stars */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar key={idx} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="text-gray-600 relative text-sm">
                  <FaQuoteLeft className="text-blue-500 w-5 h-5 mb-2" />
                  <p className="mb-2">{testimonial.text}</p>
                  <FaQuoteRight className="text-blue-500 w-5 h-5 mt-2 ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          onClick={scrollPrev}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          ‹
        </button>
      </div>
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          onClick={scrollNext}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
};


export const CustomerCount = () => {
  const stats = [
    { value: "300K+", label: "Companies Hiring" },
    { value: "10K+", label: "New Openings Everyday" },
    { value: "21Mn+", label: "Active Students" },
    { value: "600K+", label: "Learners" },
  ];

  return (
    <div className="space-y-8">
      {/* Full width divider */}
  

      <div className="grid px-20 grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12 py-5 md:mb-20">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`space-y-2 ${index < stats.length - 1 ? "pr-4" : ""}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-500">
              {stat.value}
            </h2>
            <p className="text-gray-600 text-xl md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Vertical divider for the stats */}
      <div className="border-t-2 border-gray-300 w-full" />
 
    </div>
  );
};

