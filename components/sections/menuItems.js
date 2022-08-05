import React from "react";
import { getStrapiMedia } from "../../utils/media";
import styles from "../../styles/OtherLinks.module.css";

function menuItems({ data }) {
  return (
    <section class="text-gray-600 body-font font-CooperBlack">
      <div class="relative w-screen bg-black overflow-hidden">
        <img
          class="w-screen md:h-80 h-50 object-cover object-center opacity-70"
          src={`${getStrapiMedia(data.heroImage.data.attributes.url)}`}
        />
        <div class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 class="md:text-7xl text-4xl font-medium title-font text-center">Menu</h1>
          <div class="mx-auto text-center" href="/">
            <a
              href="./assets/menu.pdf"
              target="_blank"
              class={`md:text-lg text-base ${styles.linkunderline}`}
            >
              View a PDF Menu
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="container px-5 pt-5 mx-auto">
          <h3 class="text-2xl font-medium title-font text-gray-900 mb-5 py-5 md:text-left text-center">
            Meals
          </h3>
          <div class="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {data.menuItem.map((item) => {
              return (
                <>
                  {item.type == "meal" ? (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.title}>
                      <a class="block relative h-48 rounded overflow-hidden">
                        <img
                          alt={item.title}
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
          <h3 class="text-2xl font-medium title-font text-gray-900 mb-5 py-5 md:text-left text-center">
            Sides
          </h3>
          <div class="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {data.menuItem.map((item) => {
              return (
                <>
                  {item.type == "sides" ? (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.title}>
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
          <h3 class="text-2xl font-medium title-font text-gray-900 mb-5 py-5 md:text-left text-center">
            Beverages
          </h3>
          <div class="flex flex-wrap -m-4">
            {/* map through the data twice for two sections menu and sides */}
            {data.menuItem.map((item) => {
              return (
                <>
                  {item.type == "beverages" ? (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.title}>
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
