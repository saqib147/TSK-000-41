import React from "react";
import img from "../assets/programing.png";
import checkIcon from "../assets/square.svg";

export const WhyInternee = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold mb-4">Why Internee.pk</div>
        <div className="flex flex-wrap justify-center md:flex-row-reverse lg:flex-row align-center">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 content-center">
            <ul className="list-none mb-0 align-center">
              <li className="flex items-center mb-8">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  width="40" // updated width attribute
                  height="40" // updated height attribute
                  style={{ color: "#65a30d", marginRight: "30px" }} // added margin-right
                />{" "}
                <span className="text-lg font-semibold">
                  5500+ Students already registered
                </span>
              </li>
              <li className="flex items-center mb-8">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  width="40" // updated width attribute
                  height="40" // updated height attribute
                  style={{ color: "#65a30d", marginRight: "30px" }} // added margin-right
                />{" "}
                <span className="text-lg font-semibold">
                  Task based projects that based on hands on experience
                </span>
              </li>
              <li className="flex items-center mb-8">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  width="40" // updated width attribute
                  height="40" // updated height attribute
                  style={{ color: "#65a30d", marginRight: "30px" }} // added margin-right
                />{" "}
                <span className="text-lg font-semibold">
                  Massive Courses with high-quality videos on LMS
                </span>
              </li>
              <li className="flex items-center mb-8">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  width="40" // updated width attribute
                  height="40" // updated height attribute
                  style={{ color: "#65a30d", marginRight: "30px" }} // added margin-right
                />{" "}
                <span className="text-lg font-semibold">
                  Empowering youth towards IT revolution & technology
                </span>
              </li>
              <li className="flex items-center mb-8">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  width="40" // updated width attribute
                  height="40" // updated height attribute
                  style={{ color: "#65a30d", marginRight: "30px" }} // added margin-right
                />{" "}
                <span className="text-lg font-semibold">
                  Hands on Experience via Virtual internship
                </span>
              </li>
              <li className="flex items-center mb-8">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  width="40" // updated width attribute
                  height="40" // updated height attribute
                  style={{ color: "#65a30d", marginRight: "30px" }} // added margin-right
                />{" "}
                <span className="text-lg font-semibold">
                  Complete your task and get market competent job
                </span>
              </li>
              <li className="flex items-center mb-8">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  width="40" // updated width attribute
                  height="40" // updated height attribute
                  style={{ color: "#65a30d", marginRight: "30px" }} // added margin-right
                />{" "}
                <span className="text-lg font-semibold">
                  Direct Collaboration with companies for direct hiring
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4 h-2/3">
            <img src={img} alt="Image" className="w-full h-2/3 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
