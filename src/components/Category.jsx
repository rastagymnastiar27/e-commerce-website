import React from "react";
import Image1 from "../assets/category/belts.png";
import Image2 from "../assets/category/ring.png";
import Image3 from "../assets/category/jeans.png";
import Button from "../components/Button.jsx";
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 
          text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Fashion</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Belts
                </p>
                <Link
                to={`/item`}
                >
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </Link>
              </div>
            </div>
            <img src={Image1} alt="" className="w-[320px] absolute right-0 top-0" />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl 
          relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Fashion</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Rings
                </p>
                <Link
                to={`/item`}>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandYellow"}
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
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white 
          rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Fashion</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Baggy Jeans
                </p>
                <Link
                to={`/item`}>
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-primary"}
                  />
                </Link>
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[300px] absolute -right-10 -translate-y-1/2 top-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
