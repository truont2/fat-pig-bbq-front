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
    //     <section class="text-gray-600 body-font relative">
    //       <h1 class="text-7xl font-medium title-font text-gray-900 mb-5 text-center">Test</h1>
    //   <div class="absolute inset-0 bg-gray-300">
    //     {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
    //     <MapWithNoSSR />
    //   </div>
    //   <div class="container px-5 py-24 mx-auto flex">
    //     <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    //       <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
    //       <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
    //       <div class="relative mb-4">
    //         <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
    //         <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    //       </div>
    //       <div class="relative mb-4">
    //         <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
    //         <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
    //       </div>
    //       <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    //       <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    //     </div>
    //   </div>
    // </section>
    <section class="text-gray-600 body-font relative">
      <h2 class="text-5xl font-medium title-font text-gray-900 text-center">
        Location and HOURS
      </h2>
      <div class="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 w-screen h-80 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div class="absolute inset-0 bg-gray-300">
            <MapWithNoSSR />
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h1 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Location and Hours
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
