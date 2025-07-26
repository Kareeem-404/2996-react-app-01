import { useState } from "react";
import {
  faHeart,
  faEye,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const response = await fetch("https://dummyjson.com/products");
const data = await response.json();
const { products } = data;

export default function Products() {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center py-15 px-30">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border sm:flex-1/2 md:flex-1/3 2xl:flex-1/6 border-gray-200 rounded-lg shadow dak:bg-gray-800 dak:border-gray-700 overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          {/* Product Image */}
          <div className="relative">
            <img
              className="rounded-t-lg w-full object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>

          {/* Product Info */}

          <div className="p-5">
            {/* Name and Price */}
            <div className="flex justify-between items-start mb-2">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                {product.title}
              </h5>
              <div className="flex flex-col items-end">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating ? "text-yellow-300" : "text-gray-300"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dak:bg-blue-200 ml-2">
                {product.rating}
              </span>
            </div>

            {/* Description */}
            <p className="mb-4 text-sm text-gray-700 line-clamp-2">
              {product.description}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between space-x-2">
              <button className="flex-1 cursor-pointer flex items-center justify-center py-2 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                Add to Cart
              </button>

              <button className="p-2 cursor-pointer text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 transition-colors">
                <FontAwesomeIcon icon={faEye} />
              </button>

              <button className="p-2 cursor-pointer text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-red-700 transition-colors">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
