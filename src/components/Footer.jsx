import React from "react";
import logo from "../assets/logo.png";
export const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20 py-8 rounded-3xl p-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <img src={logo} alt="Internee.pk Logo" className="w-32 mb-2" />
          <p className="text-gray-700">VIRTUAL INTERNSHIP PLATFORM</p>
        </div>

        {/* Company Links */}
        <div className="mb-4 md:mb-0">
          <h5 className="font-semibold text-gray-800 mb-2">Company</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Get Help Links */}
        <div className="mb-4 md:mb-0">
          <h5 className="font-semibold text-gray-800 mb-2">Get help</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Training Videos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Request Help
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h5 className="font-semibold text-gray-800 mb-2">
            Socialize with us
          </h5>
          <div className="flex justify-center md:justify-end space-x-3 mb-4">
            <a href="#" className="text-yellow-500">
              <i className="fab fa-youtube" />
            </a>
            <a href="#" className="text-yellow-500">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-yellow-500">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" className="text-yellow-500">
              <i className="fab fa-twitter" />
            </a>
          </div>
          <p className="text-gray-700">
            <a href="tel:+923453191638">+923453191638</a>
          </p>
          <p className="text-gray-700">
            <a href="mailto:info@internee.pk">info@internee.pk</a>
          </p>
          <p className="text-gray-700 mt-2">
            Copyright ©2024 internee.pk Pvt Ltd.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
