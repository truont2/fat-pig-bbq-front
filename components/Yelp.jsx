import React from "react";
import styles from "../styles/Yelp.module.css";
import { ElfsightWidget } from "react-elfsight-widget";
import { Carousel } from "flowbite-react";
import { useRef, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Slider from "./Slider";




export default function Yelp({ data }) {
  return (
    <div className="px-5 pt-10 mx-auto overflow-x-hidden font-CooperBlack">
      <div className="text-center mb-2">
        <h1 className="text-4xl font-medium title-font text-gray-900 mb-5 text-center">
          {data.title}
          
        </h1>
        {}
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
        </div>
      </div>
        {/* <div class="elfsight-app-e86cd777-5825-4eaf-8a47-2731765a8aaa"></div> */}
        {/* <ElfsightWidget
          widgetID="e8edb333-5f3e-4b99-9ada-28e9d20d41a6"
          className={styles.yelper}
        /> */}
        {/* <div className="relative md:mt-10 mt-5 w-5/6 mx-auto h-fit flex justify-center items-center border-2 border-indigo-600"> */}

        <Slider />
      </div>

      
  );
}
