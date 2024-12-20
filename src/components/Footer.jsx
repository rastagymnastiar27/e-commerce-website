import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/shop" },
  { title: "Blogs", link: "/blogs" },
];

const Footer = () => {
  return (
    <div className="">
      <div className="container font-mono">
        <div className="grid md:grid-cols-3 py-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-mono font-semibold tracking-widest text-2xl 
              uppercase sm:text-3xl"
            >
              Culture
            </a>
            <p className="text-black dark:text-white lg:pr-24 pt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              alias cum
            </p>
            <a
              href="https://github.com/rastagymnastiar27"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm 
              rounded-full"
            >
              Visit my Github Page
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-black dark:text-white 
              duration-200">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="text-black dark:text-white hover:dark:text-gray-400 
                      hover:text-white duration-300"
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 text-black dark:text-white 
              duration-200 ">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-black dark:text-white hover:dark:text-gray-400 
                      hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto text-black dark:text-white">
              <h1 className="text-xl font-bold sm:text-left mb-3 duration-200">Address</h1>
              <div>
                <div className="flex items-center gap-3 hover:dark:text-gray-400 hover:text-white 
                duration-300">
                  <FaLocationArrow />
                  <p>Bandung, Indonesia</p>
                </div>
                <div className="flex items-center gap-3 mt-6 hover:dark:text-gray-400 hover:text-white 
                duration-300">
                  <FaMobileAlt />
                  <p>+phone</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
