import React from "react";
import webpageScreenshot from "../assets/job.png"; // Update with the correct path to your image

const JobPortalSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center md:items-center">
      {/* Left Section: Text and Features */}
      <div className="w-6/8 md:w-5/8 p-4 flex items-center">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Job Portal, Ultimate Place To Find The Best Job
          </h2>
          <p className="text-lg mb-8">
            Streamline the approval process with your customer to quickly close
            the deal, get the sale, and start production.
          </p>
          {/* Features in Two Columns for Desktop, Single Column for Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-start m-3">
              <span
                className="mr-2 p-2 bg-yellow-100 rounded-full animate-fade-in-up"
                // Add animate-fade-in-up class here
              >
                {/* Replace with your icon */}
                📱
              </span>
              <div>
                <h3 className="font-semibold">100% Mobile friendly</h3>
                <p>Online art approvals</p>
              </div>
            </div>
            <div className="flex items-start  m-3">
              <span
                className="mr-2 p-2 bg-green-100 rounded-full animate-fade-in-up"
                // Add animate-fade-in-up class here
              >
                {/* Replace with your icon */}⚡
              </span>
              <div>
                <h3 className="font-semibold">Speed up the design process</h3>
                <p>Everything is done online, from mockup to final design.</p>
              </div>
            </div>
            <div className="flex items-start m-3">
              <span
                className="mr-2 p-2 bg-blue-100 rounded-full animate-fade-in-up"
                // Add animate-fade-in-up class here
              >
                {/* Replace with your icon */} 🗣️
              </span>
              <div>
                <h3 className="font-semibold">Communicate easier</h3>
                <p>
                  Add multiple recipients to an Art Approval to reduce
                  traditional email clutter.
                </p>
              </div>
            </div>
            <div className="flex items-start m-3">
              <span
                className="mr-2 p-2 bg-red-100 rounded-full animate-fade-in-up"
                // Add animate-fade-in-up class here
              >
                {/* Replace with your icon */} 🔄
              </span>
              <div>
                <h3 className="font-semibold">Add changes faster</h3>
                <p>
                  Students can add comments to approvals for changes, saving you
                  both time on finalizing designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-3/8 p-4 flex justify-center">
        <img
          src={webpageScreenshot}
          alt="Job Portal Screenshot"
          className="max-w-full h-auto animate-fade-in-up"
          // Add animate-fade-in-up class here
        />
      </div>
    </section>
  );
};

export default JobPortalSection;
