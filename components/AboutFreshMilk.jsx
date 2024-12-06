import Image from "next/image";
import React from "react";

const AboutFreshMilk = () => {
  return (
    <div className="p-6 flex flex-col items-center gap-8 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="font-bold text-3xl text-slate-900 text-center">
        About FreshMilk
      </h1>
      {/* Description */}
      <p className="text-slate-500 font-md text-[18px] text-center sm:text-[20px] px-4">
        Welcome to FreshMilk, a village-based startup from Kadiri, dedicated to
        delivering the freshest, healthiest, and best-priced milk exclusively
        from our own cows. Unlike others, we do not source from local farmers,
        ensuring every drop of milk is pure and directly from our farm.
        Delivered to your doorstep within 3 hours of milking, we guarantee
        unmatched quality for you and your family.
      </p>
      {/* Features Section */}
      <div className="flex flex-nowrap justify-between gap-4 mt-4 w-full overflow-x-auto">
        {/* Feature: Freshness */}
        <div className="flex flex-col items-center w-28 sm:w-40 md:w-52">
          <Image
            src="/fresh-guarantee.webp"
            alt="Freshness Guaranteed"
            width={80}
            height={80}
          />
          <div className="mt-2">
            <p className="text-slate-400 text-center font-bold text-[14px] sm:text-[16px] md:text-[18px]">
              Freshness
            </p>
            <p className="text-slate-400 text-center font-bold text-[14px] sm:text-[16px] md:text-[18px]">
              Guaranteed
            </p>
          </div>
        </div>
        {/* Feature: Quality */}
        <div className="flex flex-col items-center w-28 sm:w-40 md:w-52">
          <Image
            src="/quality.webp"
            alt="100% Quality"
            width={80}
            height={80}
          />
          <div className="mt-2">
            <p className="text-slate-400 text-center font-bold text-[14px] sm:text-[16px] md:text-[18px]">
              100%
            </p>
            <p className="text-slate-400 text-center font-bold text-[14px] sm:text-[16px] md:text-[18px]">
              Quality
            </p>
          </div>
        </div>
        {/* Feature: Doorstep */}
        <div className="flex flex-col items-center w-28 sm:w-40 md:w-52">
          <Image
            src="/door-step.webp"
            alt="At Your Doorstep"
            width={80}
            height={80}
          />
          <div className="mt-2">
            <p className="text-slate-400 text-center font-bold text-[14px] sm:text-[16px] md:text-[18px]">
              At Your
            </p>
            <p className="text-slate-400 text-center font-bold text-[14px] sm:text-[16px] md:text-[18px]">
              Doorstep
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFreshMilk;
