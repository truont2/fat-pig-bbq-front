import Markdown from "react-markdown"
// import { getButtonAppearance } from "utils/button"
// import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

import React from "react";
import { useRouter } from 'next/router';
import { getStrapiMedia } from "../../utils/media";
import delve from 'dlv';

const Hero = ({ data }) => {
  const router = useRouter();

  return (
    // <div className='container mx-auto px-4'>
    //   <section className="text-gray-600 body-font">
    //     <div className="container px-5 py-24 mx-auto">
    //       <div className="flex flex-col text-center w-full mb-20">
    //         <img className="h-3/5 mb-4" src={`${getStrapiMedia(data.picture.data.attributes.url)}`}></img>
    //         <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{data.title}</h2>
    //         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome!</h1>
    //         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{data.description}</p>          
    //       </div>
    //     </div>
    //   </section>

    // </div>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col md:h-3/6 h-screen">
    <img class="lg:w-screen h-[36rem] md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={`${getStrapiMedia(data.picture.data.attributes.url)}`} />
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data.title}</h1>
      <p class="mb-8 leading-relaxed">{data.description}</p>
    </div>
  </div>
</section>
  )
}

export default Hero


