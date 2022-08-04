import React from "react";
import { getStrapiMedia } from "../../utils/media";
import styles from "../../styles/OtherLinks.module.css";

function menuItems({ data }) {
  return (
    <section class="text-gray-600 body-font font-CooperBlack">
      <h1 class="text-7xl font-medium title-font text-gray-900 mb-5 text-center py-5">
        Menu
      </h1>
      <div class="mx-auto text-gray-900 text-center" href="/">
        <a
          href="./assets/menu.pdf"
          target="_blank"
          class={`text-lg ${styles.linkunderline} `}
        >
          View a PDF Menu
        </a>
      </div>
      <div>
        <div class="container px-5 pt-5 mx-auto">
          <h3 class="text-2xl font-medium title-font text-gray-900 mb-5 py-5">
            Meals
          </h3>
          <div class="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {data.menuItem.map((item) => {
              return (
                <>
                  {item.type == "meal" ? (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <a class="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          class="object-cover object-center w-full h-full block"
                          src={`${getStrapiMedia(
                            item.image.data.attributes.url
                          )}`}
                        />
                      </a>
                      <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                        <p class="mt-1">${item.price}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div class="container px-5 pt-10 mx-auto">
          <h3 class="text-2xl font-medium title-font text-gray-900 mb-5 py-5">
            Sides
          </h3>
          <div class="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {data.menuItem.map((item) => {
              return (
                <>
                  {item.type == "sides" ? (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <a class="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          class="object-cover object-center w-full h-full block"
                          src={`${getStrapiMedia(
                            item.image.data.attributes.url
                          )}`}
                        />
                      </a>
                      <div class="mt-4">
                        <h2 class="text-gray-900 title-font text-lg font-medium">
                          {item.title}
                        </h2>
                        <p>{item.description}</p>
                        <p class="mt-1">${item.price}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div class="container px-5 py-10 mx-auto">
          <h3 class="text-2xl font-medium title-font text-gray-900 mb-5 py-5">
            Beverages
          </h3>
          <div class="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {data.menuItem.map((item) => {
              return (
                <>
                  {item.type == "beverages" ? (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <div class="mt-4">
                        <a class="block relative h-48 rounded overflow-hidden">
                          <img
                            alt="ecommerce"
                            class="object-contain object-left w-full h-full block"
                            src={`${getStrapiMedia(
                              item.image.data.attributes.url
                            )}`}
                          />
                        </a>
                        <h2 class="text-gray-900 title-font text-2xl font-medium">
                          {item.title}
                        </h2>
                        <p class="mt-1">${item.price}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default menuItems;
