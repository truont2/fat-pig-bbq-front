import Markdown from "react-markdown";
// import { getButtonAppearance } from "utils/button"
// import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image";

import React from "react";
import { useRouter } from "next/router";
import { getStrapiMedia } from "../../utils/media";
import delve from "dlv";
import image from "../../public/assets/grubhub.jpg";
import {Carousel} from 'flowbite-react';
const Hero = ({ data }) => {
  const router = useRouter();

  return (
    <div class="container mx-auto flex px-5 md:pt-20 items-center justify-center flex-col md:h-3/6 pt-20">
      <img class="lg:w-screen md:h-[36rem] h-[20rem] md:w-5/6 w-screen mb-5 object-cover object-center rounded" alt="hero" src={`${getStrapiMedia(data.picture.data.attributes.url)}`} />
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font md:text-5xl text-3xl mb-4 font-medium text-gray-900">{data.title}</h1>
        <p class="mb-8 leading-relaxed md:text-xl text-xl">{data.description}</p>
      </div>
    </div>
  //   <div className="md:h-[40rem] h-96 pt-20 px-5">
  //   <Carousel slideInterval={5000} class='h-full'>
  //     <img
  //       src={`${getStrapiMedia(data.picture.data.attributes.url)}`}
  //       alt="..."
  //     />
  //     <img
  //       src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
  //       alt="..."
  //     />
  //     <img
  //       src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
  //       alt="..."
  //     />
  //   </Carousel>
  // </div>
  );
};

export default Hero;
