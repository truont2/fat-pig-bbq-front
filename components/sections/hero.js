import Markdown from "react-markdown";
// import { getButtonAppearance } from "utils/button"
// import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image";

import React from "react";
import { useRouter } from "next/router";
import { getStrapiMedia } from "../../utils/media";
import delve from "dlv";
import image from "../../public/assets/grubhub.jpg";
import { Carousel } from "flowbite-react";
const Hero = ({ data }) => {
  const router = useRouter();
  return (
    // <div class="container mx-auto flex px-5 md:pt-20 items-center justify-center flex-col pt-20">
    //   {/* <img
    //     class="lg:w-screen md:h-[36rem] h-[20rem] md:w-5/6 w-screen mb-5 object-cover object-center rounded"
    //     alt="hero"
    //     src={`${getStrapiMedia(data.picture.data.attributes.url)}`}
    //   /> */}
    //   <div class="text-center lg:w-2/3 w-full">
    //     <h1 class="title-font md:text-5xl text-3xl mb-4 font-medium text-gray-900">
    //       {data.title}
    //     </h1>
    //     <p class="mb-8 leading-relaxed md:text-xl text-xl">
    //       {data.description}
    //     </p>
    //   </div>
    // </div>
    <>
      <div className="md:h-[30rem] h-[20rem] md:mt-10 mt-5 w-5/6 mx-auto">
        <Carousel slideInterval={8000}>
          {data.picture.data.map((image) => {
            return (
              <img
                src={`${getStrapiMedia(image.attributes.url)}`}
                alt="..."
                class="object-cover object-center h-full w-full"
              />
            );
          })}
        </Carousel>
      </div>
      {/* <div class="text-center w-full">
        <h1 class="title-font md:text-5xl text-3xl my-4 font-medium text-gray-900">
          {data.title}
        </h1>
        <p class="mb-8 leading-relaxed md:text-xl text-xl">
          {data.description}
        </p>
      </div> */}
    </>
  );
};

export default Hero;
