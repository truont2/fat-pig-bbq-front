import React from "react";
import styles from "../styles/Yelp.module.css";
import { ElfsightWidget } from "react-elfsight-widget";

export default function Yelp({ data }) {
  return (
    // className={styles.container}
    <div class="container px-5 py-10 mx-auto overflow-x-hidden">
      <div class="text-center mb-10">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-2">
          {data.title}
        </h1>
        <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
          </div>
      </div>
      <div className={styles.component}>
        {/* <div class="elfsight-app-e86cd777-5825-4eaf-8a47-2731765a8aaa"></div> */}
        <ElfsightWidget
          widgetID="b02be90c-e24f-46dc-87e7-9590c1f12baa"
          className={styles.yelper}
        />
        {/* <span class="yelp-review" data-review-id="GdAN_i4sTxjM3RSGr9udYQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=eybQHt55quaeTiAsvlyZYg" rel="nofollow noopener">Cardin N.</a>'s <a href="https://www.yelp.com/biz/fat-pig-bbq-edmonds?hrid=GdAN_i4sTxjM3RSGr9udYQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/ZIRJB-lk5cD4L8GUOca3zw" rel="nofollow noopener">Fat Pig BBQ</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span> */}
      </div>
    </div>
  );
}
