import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8 place-items-center">
      {/* Card Section */}
      {item.map((item) => (
        <div
          data-aos="fade-up"
          data-aos-delay={item.aosDelay}
          className="group shadow-lg rounded-lg dark:shadow-gray-500 bg-white dark:bg-gray-800 transition-shadow duration-100"
          key={item.id}
        >
          <div className="relative overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="h-[180px] w-[260px] object-cover rounded-t-lg transition-transform duration-200 group-hover:scale-150"
            />
            {/* Hover button */}
            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
              <Link to={`/item/${item.id}`}>
                <Button
                  text={"Details"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </Link>
            </div>
          </div>
          <div className="leading-7 px-2">
            <h2 className="font-semibold">{item.title}</h2>
            <h2 className="font-bold">${item.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
