import React from "react";
import logos from "../assets/t.png";
import hero from "../assets/hero.png";
import fav from "../assets/fav.png";

import FrontEnd from "../assets/FrontEnd.png";
import BackEnd from "../assets/BackendDevelopment.png";
import Cloud from "../assets/cloud.png";
import hack from "../assets/hack.png";
import LogoDesign from "../assets/LogoDesign.png";
import Mobile from "../assets/MobileApp.png";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const HeroSection = () => {
  const [text, setText] = useTypewriter({
    words: [
      "On your desire domain",
      "Gives hands on experience",
      "get a compatetive job",
    ],
    loop: true,
    delay: 100,
    typeSpeed: 50,
  });

  return (
    <>
      <div className="lg:flex lg:flex-row md:flex md:flex-row sm:block gap-3 ">
        <div className="flex flex-col items-center mt-6 lg:mt-20 lg:w-1/2 md:w-1/2 sm:w-full">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-wide">
            Looking for dream Internship?
            <span className="typewriter-text-wrapper">
              <span className="typewriter-text text-lime-500 ">{text}</span>
              <Cursor className="typewriter-cursor" />
            </span>
          </h1>
          <p className="mt-6 text-neutral-500  text-lg max-w-4xl sm:max-w-full">
            Internee.pk kickstart student's tech careers with first internships,
            providing industry exposure, practical skills, and networking
            opportunities, paving the way for their success in the tech
            industry.
          </p>
          <img src={logos} />
          <div className="lg:flex lg:flex-row md:flex md:flex-row sm:block justify-center items-center mt-10 gap-4 ">
            <a
              href="#"
              className="text-lime-600 py-2 px-3 border-2 border-lime-500 rounded-md text-center mr-2 mb-2 text-lg font-medium sm:w-auto w-full"
            >
              Internee's Login
            </a>
            <a
              href="#"
              className="text-white bg-gradient-to-r from-lime-400 via-lime-450 to-lime-500 hover:bg-gradient-to-br font-mediu, rounded-md text-lg px-3 py-2 text-center mr-2 mb-2 sm:w-auto w-full"
            >
              Job Portal
            </a>
          </div>
        </div>
        <div className="flex lg:w-1/2 md:w-1/2 sm:w-full justify-center mt-10 ">
          <img
            src={hero}
            className="w-full h-full object-contain animate-fade-in-up"
          />
        </div>
      </div>
      <div className="internshipSection bg-white sm:p-1">
        <div className="container mx-auto p-5">
          <img src={fav} className="w-24 h-24 mx-auto" />
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-wide text-center">
            Who is Internee.pk?
          </h2>
          <p className="mt-6 text-neutral-500  text-lg text-center max-w-4xl sm:max-w-full ">
            The ultimate platform designed to turbocharge the IT sector in
            Pakistan! We recognize the immense potential of talented individuals
            in the country and aim to bridge the gap between them and the
            thriving IT industry. Internee.pk offers a comprehensive range of
            virtual internship opportunities exclusively in the IT field
          </p>
        </div>
        <p className="font-semibold text-lg text-center">
          Click Below and grab your internship now
        </p>
      </div>
      <div className="bg-lime-500 rounded-3xl py-20 p-5">
        <div className="container mx-auto p-4">
          <Swiper
            spaceBetween={50}
            slidesPerView={1} // show 3 cards on desktop
            navigation
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} swiper-pagination-bullet"></span>`;
              },
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3, // show 3 cards on desktop
              },
              768: {
                slidesPerView: 2, // show 1 card on tablet
              },
              640: {
                slidesPerView: 1, // show 1 card on mobile
              },
            }}
          >
            <SwiperSlide>
              <div
                className="flex flex-col justify-evenly bg-white rounded-2xl shadow-md p-4 "
                style={{ height: "600px" }}
              >
                <img src={FrontEnd} className="w-full h-48 object-cover" />
                <h2 className="font-semibold text-lg mt-4">
                  FrontEnd Internship
                </h2>
                <p className="text-neutral-500 text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta voluptates aliquid dicta! Laborum voluptates ea odio
                  accusantium culpa quasi error quas. Nihil, tempora?
                </p>
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col justify-evenly bg-white rounded-2xl shadow-md p-4 "
                style={{ height: "600px" }}
              >
                <img src={Cloud} className="w-full h-48 object-cover" />
                <h2 className="font-semibold text-lg mt-4">
                  Cloud Computing Internship
                </h2>
                <p className="text-neutral-500 text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate laboriosam quod laborum excepturi aut ea, maiores
                  expedita dolorum vitae sunt pariatur vero aperiam a facilis
                  consequatur ut tenetur unde iste.
                </p>
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col justify-evenly bg-white rounded-2xl shadow-md p-4 "
                style={{ height: "600px" }}
              >
                <img src={LogoDesign} className="w-full h-48 object-cover" />
                <h2 className="font-semibold text-lg mt-4">
                  Graphic Design Internship
                </h2>
                <p className="text-neutral-500 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore deleniti recusandae aliquid dicta suscipit, corporis
                  commodi adipisci, sed, ipsum quia vero delectus perferendis
                  molestiae!
                </p>
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col justify-evenly bg-white rounded-2xl shadow-md p-4 "
                style={{ height: "600px" }}
              >
                <img src={hack} className="w-full h-48 object-cover" />
                <h2 className="font-semibold text-lg mt-4">
                  Cyber Security Internship
                </h2>
                <p className="text-neutral-500 text-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                  doloribus, esse accusamus perferendis deleniti quas recusandae
                  reprehenderit ex animi atque sint eius dolorum, consequuntur,
                  commodi repudiandae hic corporis?
                </p>
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col justify-evenly bg-white rounded-2xl shadow-md p-4 "
                style={{ height: "600px" }}
              >
                <img src={Mobile} className="w-full h-48 object-cover" />
                <h2 className="font-semibold text-lg mt-4">
                  Mobile Development Internship
                </h2>
                <p className="text-neutral-500 text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  exercitationem labore, expedita sunt ullam illum rem
                  consequuntur accusamus vel rerum! Amet neque repellendus
                  obcaecati incidunt minus.
                </p>
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex flex-col justify-evenly bg-white rounded-2xl shadow-md p-4 "
                style={{ height: "600px" }}
              >
                <img src={BackEnd} className="w-full h-48 object-cover" />
                <h2 className="font-semibold text-lg mt-4">
                  BackEnd Development Internship
                </h2>
                <p className="text-neutral-500 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur non incidunt deserunt? Id rem ut dolore accusantium
                  repellendus sequi, qui mollitia labore, consequuntur
                  repudiandae quo, laudantium fugiat explicabo commodi sit
                  aliquam quibusdam saepe perspiciatis.
                </p>
                <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
        <p className="text-white text-2xl font-semibold text-center">
          Lean skills, Market will be yours
        </p>
      </div>
    </>
  );
};
