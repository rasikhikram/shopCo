import React from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../product.json";

const NewArrivals = () => {
  const navigate = useNavigate();

  const uniqueProducts = productsData.products.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.id === product.id)
  );

  const handleProductClick = (product) => {
    navigate("/shop", { state: { product } });
  };

  return (
    <div className="w-full max-w-[1450px] mx-auto mt-20 border-b px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-superbold text-center">
        NEW ARRIVALS
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-8 lg:gap-20 mt-12 items-center justify-center">
        {uniqueProducts.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer text-center"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.productName}
              className="w-full max-w-[300px] mx-auto"
            />
            <h1 className="text-lg md:text-2xl mt-4 font-bold font-monospace">
              {product.productName}
            </h1>
            <h2 className="text-xl md:text-3xl mt-2 font-bold">
              {product.productPrice}
            </h2>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12 mb-16">
        <a
          href="/shop"
          className="py-3 px-10 md:px-14 border border-gray-400 rounded-3xl text-sm md:text-lg"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default NewArrivals;
