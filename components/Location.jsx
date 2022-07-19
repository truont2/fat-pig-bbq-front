import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import dynamic from "next/dynamic";
import CustomLink from "../components/elements/custom-link";
//TODO: Render map and Hours of Op in the grid below.
export default function Location({ data }) {
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });
  // moment(time, "HH:mm:ss").format("hh:mm A")
  return (
    <section class="text-gray-600 body-font relative">
      <h2 class="text-5xl font-medium title-font text-gray-900 text-center">
        Location and Hours
      </h2>
      <div class="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 w-screen h-80 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div class="absolute inset-0 bg-gray-300">
            <MapWithNoSSR />
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h1 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Infromation
          </h1>
          <div class="relative my-4">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-s">
              LOCATION
            </h2>
            <p class="mt-1">7533 Olympic View Dr, Edmonds, WA 98026</p>
          </div>
          <div class="relative mb-4">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-s">
              HOURS
            </h2>
            <p class="mt-1">MON - THURS: 11 AM - 7:30 PM</p>
            <p class="mt-1">FRI: 11 AM - 8:00 PM</p>
            <p class="mt-1">SAT: 11 AM - 8:00 PM</p>
          </div>
          <a
            className="text-blue-600 with-arrow hover:underline"
            href="https://www.google.com/maps/place/Fat+Pig+BBQ/@47.8316326,-122.3389854,17z/data=!3m1!4b1!4m5!3m4!1s0x5490052a7d10f1c3:0xff02e07c8951f070!8m2!3d47.8315578!4d-122.3367393"
          >
            <div className="flex flex-row items-center">Get Directions <FaRegArrowAltCircleRight className="ml-2"/></div>
          </a>
        </div>
      </div>
    </section>
  );
}
