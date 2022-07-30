import React from "react";
import { getStrapiMedia } from "../../utils/media";
import ButtonLink from '../elements/button-link';
import { getButtonAppearance } from "../../utils/button"
export default function twoImages({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-10">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">
            See our Menu
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap text-center -mx-4 justify-center h-fit">
          {data.images.data.map((image) => {
            return (
              <div class="w-1/4 md:mb-0 mb-10 px-4">
                <div class="md:h-5/6 h-fit">
                  <img
                    alt="images"
                    class="object-cover object-center h-full w-full rounded-lg"
                    src={`${getStrapiMedia(image.attributes.url)}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {data.buttons != null ? data.buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "dark")}
              key={button.id}
            />
          )): ""}
        {/* <button class="flex mx-auto md:mt-0 mt-10 text-white bg-[#813400] border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
          Menu
        </button> */}
      </div>
    </section>
  );
}
