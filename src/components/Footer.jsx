import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-black py-10 rounded-3xl w-full max-w-[1450px] flex flex-col items-center justify-center mx-auto mt-16 -mb-[84px] relative px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:px-12">
          <h1 className="text-4xl text-white font-superbold text-center lg:text-left mb-6 lg:mb-0">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </h1>
          <div className="flex flex-col w-full max-w-[400px]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="py-2 px-4 w-full rounded-full"
            />
            <button className="bg-white mt-2 py-2 w-full rounded-full font-bold">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 pb-8">
        <div className="pt-36 pb-10 flex flex-col lg:flex-row items-center lg:items-start justify-between mx-auto w-full max-w-[1450px] px-6">
          
          {/* Left - Logo & Socials */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <img src="/images/SHOP.CO.png" className="mx-auto lg:mx-0" />
            <p className="mt-6 text-gray-600">
              We have clothes that suit your style and <br /> which you’re proud to wear. From <br /> women to men.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-28 text-center lg:text-left">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">COMPANY</h3>
              <p className="text-gray-600">About</p>
              <p className="text-gray-600">Features</p>
              <p className="text-gray-600">Works</p>
              <p className="text-gray-600">Career</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">HELP</h3>
              <p className="text-gray-600">Customer Support</p>
              <p className="text-gray-600">Delivery Details</p>
              <p className="text-gray-600">Terms & Conditions</p>
              <p className="text-gray-600">Privacy Policy</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">FAQ</h3>
              <p className="text-gray-600">Account</p>
              <p className="text-gray-600">Manage Deliveries</p>
              <p className="text-gray-600">Orders</p>
              <p className="text-gray-600">Payments</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">RESOURCES</h3>
              <p className="text-gray-600">Free eBooks</p>
              <p className="text-gray-600">Development Tutorial</p>
              <p className="text-gray-600">How to - Blogs</p>
              <p className="text-gray-600">YouTube Playlist</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-b border-gray-400 w-full max-w-[1450px] mx-auto" />

        {/* Bottom - Rights & Payment Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1450px] mx-auto mt-6 px-6">
          <p className="text-gray-600 text-center lg:text-left">
            Shop.Co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <img src="/images/Visa.png" className="h-14" />
            <img src="/images/Mastercard.png" className="h-14" />
            <img src="/images/Pp.png" className="h-14" />
            <img src="/images/Ipay.png" className="h-14" />
            <img src="/images/Gpay.png" className="h-14" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
