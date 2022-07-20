import React from "react";
import { getStrapiMedia } from "../../utils/media";

export default function twoImages({ data }) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
          {data.images.data.map((image) => {
            return (
              <div class="sm:w-1/3 mb-10 px-4">
                <div class="rounded-lg h-4/6 overflow-hidden">
                  <img
                    alt="content"
                    class="object-cover object-center h-full w-full"
                    src={`${getStrapiMedia(image.attributes.url)}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
