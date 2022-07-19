import React from "react";
import { getStrapiMedia } from "../../utils/media";
function menuItems({ data }) {
  const section={
    "meals": [], 
    "sides": []
  }
  return (
    <section class="text-gray-600 body-font">
      <h1 class="text-7xl font-medium title-font text-gray-900 mb-5 text-center py-5">
        Menu
      </h1>
      <div class=" mx-auto mb-5 text-center py-5">
        <a href="/">derek suck</a>
      </div>
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-wrap -m-4">
          {data.menuItem.map((item) => {
            return (
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={`${getStrapiMedia(item.image.data.attributes.url)}`}
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p class="mt-1">{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default menuItems;
