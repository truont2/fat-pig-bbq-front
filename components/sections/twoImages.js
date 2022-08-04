import React from "react";
import { getStrapiMedia } from "../../utils/media";
import ButtonLink from "../elements/button-link";
import { getButtonAppearance } from "../../utils/button";
export default function twoImages({ data }) {
  return (
    // <section class="text-gray-600 body-font">
    //   <div class="container px-5 py-10 mx-auto">
    //     <div class="text-center mb-10">
    //       <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">
    //         See our Menu
    //       </h1>
    //       <div class="flex mt-6 justify-center">
    //         <div class="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
    //       </div>
    //     </div>
    //     <div class="flex flex-wrap text-center -mx-4 justify-center h-fit">
    //       {data.images.data.map((image) => {
    //         return (
    //           <div class="w-1/4 md:mb-0 mb-10 px-4">
    //             <div class="md:h-5/6 h-fit">
    //               <img
    //                 alt="images"
    //                 class="object-cover object-center h-full w-full rounded-lg"
    //                 src={`${getStrapiMedia(image.attributes.url)}`}
    //               />
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     {data.buttons != null ? data.buttons.map((button) => (
    //         <ButtonLink
    //           button={button}
    //           appearance={getButtonAppearance(button.type, "dark")}
    //           key={button.id}
    //         />
    //       )): ""}
    //   </div>
    // </section>

    // hover effect section
    // <section class="text-gray-600 body-font">
    //   <div class="container px-5 py-24 mx-auto">
    //     <div class="flex flex-col text-center w-full mb-20">
    //       <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    //         Master Cleanse Reliac Heirloom
    //       </h1>
    //       <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
    //         Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
    //         gentrify, subway tile poke farm-to-table. Franzen you probably
    //         haven't heard of them man bun deep jianbing selfies heirloom.
    //       </p>
    //     </div>
    //     <div class="flex flex-wrap -m-4">
    //       {data.images.data.map((image) => {
    //         return (
    //           <div class="lg:w-1/3 sm:w-1/2 p-4">
    //             <div class="flex relative">
    //               <img
    //                 alt="gallery"
    //                 class="absolute inset-0 w-full h-full object-cover object-center"
    //                 src={`${getStrapiMedia(image.attributes.url)}`}
    //               />
    //               <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //                 <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //                   THE SUBTITLE
    //                 </h2>
    //                 <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //                   Shooting Stars
    //                 </h1>
    //                 <p class="leading-relaxed">
    //                   Photo booth fam kinfolk cold-pressed sriracha leggings
    //                   jianbing microdosing tousled waistcoat.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-indigo-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Space The Final Frontier
            </h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {data.images.data.map((image) => {
            return (
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={`${getStrapiMedia(image.attributes.url)}`}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Shooting Stars
              </h2>
              <h4 class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </h4>
              <a href="https://www.google.com/" class="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> */}
              </a>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
