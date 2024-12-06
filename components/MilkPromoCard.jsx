import React from "react";
import Image from "next/image";

const MilkPromoCard = () => {
  return (
    <div className="bg-green-200 border-l-[5px] border-green-500 m-5 rounded-md flex flex-col items-start md:items-center justify-start md:justify-center gap-5 p-5 md:h-[300px]">
      {/* Text and Button Section */}
      <div className="flex flex-col items-start md:items-center gap-5 w-full md:w-2/3 lg:w-1/3 text-left md:text-center">
        <div className="font-bold text-green-600 text-3xl sm:text-4xl">
          <h1>Fresh Milk</h1>
          <h1>Direct to Your</h1>
          <h1>Doorstep</h1>
        </div>
        <div className="w-48 bg-green-100 rounded-lg h-12 flex justify-center items-center self-end md:self-center">
          <button className="text-green-600 font-bold text-[22px] sm:text-[20px]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Image Section (Hidden on Medium and Larger Screens) */}
      <div className="w-full md:hidden">
        <Image
          src="/kidImage.jpg"
          alt="kid-img"
          width={200}
          height={200}
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default MilkPromoCard;
