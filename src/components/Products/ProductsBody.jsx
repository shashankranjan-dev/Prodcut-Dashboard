import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductsBody() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div class="flex min-h-screen">
        <div class="container ml-6 mr-auto flex flex-wrap items-start">
          <div class="w-full ml-5 pl-4 lg:pl-2 mb-4 mt-4">
            <h1 class="text-xl lg:text-3xl text-gray-700 font-bold">
              Best Sellers
            </h1>
          </div>
          {products.map((product) => (
            <div class="w-full md:w-1/2 lg:max-w-sm   p-4 mb-2  hover:cursor-pointer">
              <div class=" rounded-lg m-h-64 p-4 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure class="mb-2">
                  <img
                    src={product.thumbnail}
                    alt=""
                    class="h-64 ml-auto mr-auto"
                  />
                </figure>
                <div class="rounded-lg p-4 bg-indigo-700 flex flex-col">
                  <div>
                    <span className="flex justify-between">
                      <p class="text-white text-md font-medium leading-none pb-1">
                        {product.brand}
                      </p>
                      <p className="bg-yellow-400 py-1 px-2 rounded-full text-white text-sm font-semibold leading-none pb-1 flex hover:cursor-pointer">
                        {product.rating}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="pl-1 w-4 h-4 font-bold "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </p>
                    </span>
                    <h5 class="text-white text-xl font-bold leading-none">
                      {product.title}
                    </h5>
                    {/* <span class="text-xs text-gray-400 w-full truncate overflow-hidden">
                      {product.description}
                    </span> */}
                  </div>
                  <div class="flex items-center">
                    <div class="text-lg text-white font-light">
                      $ {product.price}
                    </div>
                    <button class="rounded-full bg-white text-black hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="stroke-current m-auto"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsBody;
