import React from "react";
import Image1 from "../assets/category/tops.png";
import Image2 from "../assets/category/jackets-1.png";
import Image3 from "../assets/category/shoes.png";
import Button from "../components/Button.jsx";
import { Link } from'react-router-dom';

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Fashion</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Graphic T-Shirts
                </p>
                <Link
                to={`/item`}>
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </Link>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Fashion</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Outerwear
                </p>
                <Link
                to={`/item`}>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandGreen"}
                  />
                </Link>
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[300px] absolute -right-6 -translate-y-1/2 top-1/2"
            />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Fashion</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Shoes
                </p>
                <Link
                to={`/item`}>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandBlue"}
                  />
                </Link>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[350px] absolute -right-6 -translate-y-1/2 top-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
