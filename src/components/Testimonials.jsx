import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import testimonials from "../constants";

export const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20 rounded-3xl p-5">
      <h1 className="text-3xl font-bold mb-12 sm:w-full ">
        What students are saying <br /> about Internee.pk
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-[#21282e] p-6 rounded-3xl shadow-md w-full mx-4 mb-4"
              style={{ height: "300px" }}
            >
              <p className="text-white text-lg mb-2">{testimonial.text}</p>
              <h4 className="text-[#ffcf5c] text-xl font-bold mb-2 ">
                {testimonial.user}
              </h4>
              <span className="text-white text-lg font-bold  ">
                {testimonial.company}
              </span>
              {/* <img src={testimonial.image} alt={testimonial.user} className="w-12 h-12 rounded-full mx-auto" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
