import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money ",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Supoort 24/7",
    description: "Consultation about your Style!",
  },
];

const Services = () => {
  return (
    <div className="flex justify-center">
      <div className="container my-8 md:my-20 lg:mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {ServiceData.map((data) => (
            <div key={data.id} className="flex flex-col items-center gap-4">
              {data.icon}
              <div>
                <h1 className="flex flex-col items-center gap-4 lg:text-xl font-bold">
                  {data.title}
                </h1>
                <h1 className="flex flex-col items-center gap-4 text-gray-400 text-sm">
                  {data.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
