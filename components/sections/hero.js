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
    <>
      <div className="md:h-[40rem] h-[15rem] md:mt-10 mt-5 w-5/6 mx-auto">
        <Carousel slideInterval={6000}>
          {data.picture.data.map((image, idx) => {
            return (
              <img
              key={idx}
                src={`${getStrapiMedia(image.attributes.url)}`}
                alt="fat pig bbq images"
                class="object-cover object-center h-full w-full"
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
