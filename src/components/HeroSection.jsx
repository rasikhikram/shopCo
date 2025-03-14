import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='bg-[url("/images/Hero.png")] h-screen w-full bg-cover bg-center flex items-center'>
        <div className="max-w-2xl space-y-10 px-6 md:px-12 lg:ml-[190px] pt-[100px] lg:pt-[150px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-superbold leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <a
            href="/shop"
            className="bg-black text-white text-lg md:text-2xl px-6 py-3 rounded-3xl inline-block"
          >
            SHOP NOW
          </a>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row md:space-x-6 mt-6 md:mt-10">
            <div className="border-b md:border-r md:border-b-0 border-gray-400 p-4 text-center">
              <h1 className="text-2xl md:text-3xl font-bold">200 +</h1>
              <p className="text-gray-600 text-sm md:text-lg">International Brands</p>
            </div>
            <div className="border-b md:border-r md:border-b-0 border-gray-400 p-4 text-center">
              <h1 className="text-2xl md:text-3xl font-bold">2,000 +</h1>
              <p className="text-gray-600 text-sm md:text-lg">High-Quality Products</p>
            </div>
            <div className="p-4 text-center">
              <h1 className="text-2xl md:text-3xl font-bold">30,000 +</h1>
              <p className="text-gray-600 text-sm md:text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-black py-6 px-4 md:py-10 flex flex-wrap items-center justify-center gap-6 md:gap-24">
        <img src="/images/Versace.png" alt="VERSACE" className="h-6 md:h-10" />
        <img src="/images/Zara.png" alt="ZARA" className="h-6 md:h-10" />
        <img src="/images/Gucci.png" alt="GUCCI" className="h-6 md:h-10" />
        <img src="/images/Prada.png" alt="PRADA" className="h-6 md:h-10" />
        <img src="/images/Ck.png" alt="CALVIN KLEIN" className="h-6 md:h-10" />
      </div>
    </div>
  );
};

export default HeroSection;