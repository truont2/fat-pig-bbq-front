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
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <img className="h-3/5 mb-4" src={`${getStrapiMedia(data.picture.data.attributes.url)}`}></img>
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{data.title}</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome!</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{data.description}</p>          
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero


