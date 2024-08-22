import React from "react";
import { internships } from "../constants";

export const Internship = () => {
  return (
    <>
      <div className="internships p-5">
        <div className="internshipText flex ">
          <div className="leftIntershipText w-1/2">
            <p className="mt-6 text-neutral-500  text-lg max-w-4xl sm:max-w-full">
              Internships every months Introducing Internee.pk, the ultimate
              platform designed to turbocharge the IT sector in Pakistan! We
              recognize the immense potential of talented individuals in the
              country and aim to bridge the gap between them and the thriving IT
              industry. Internee.pk offers a comprehensive range of virtual
              internship opportunities exclusively in the IT field.
            </p>
          </div>
          <div className="rightInternshipText w-1/2 justify-end items-end flex">
            <a href="#">Browse Internships</a>
          </div>
        </div>
        <div className="internshipCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 hover:shadow-md cursor-pointer border"
            >
              <img
                src={internship.image}
                className="w-full h-48 object-cover"
              />
              <h2 className="font-semibold text-lg mt-4">{internship.title}</h2>
              <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
