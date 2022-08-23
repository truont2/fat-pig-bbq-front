import React from "react";
import styles from "../styles/Yelp.module.css";
import { ElfsightWidget } from "react-elfsight-widget";

export default function Yelp({ data }) {
  return (
    // className={styles.container}
    <div className="container px-5 pt-10 mx-auto overflow-x-hidden font-CooperBlack">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-medium title-font text-gray-900 mb-5 text-center">
          {data.title}
        </h1>
        <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
          </div>
      </div>
      <div className={styles.component}>
        {/* <div class="elfsight-app-e86cd777-5825-4eaf-8a47-2731765a8aaa"></div> */}
        <ElfsightWidget
          widgetID="e8edb333-5f3e-4b99-9ada-28e9d20d41a6"
          className={styles.yelper}
        />
        {/* <span class="yelp-review" data-review-id="GdAN_i4sTxjM3RSGr9udYQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=eybQHt55quaeTiAsvlyZYg" rel="nofollow noopener">Cardin N.</a>'s <a href="https://www.yelp.com/biz/fat-pig-bbq-edmonds?hrid=GdAN_i4sTxjM3RSGr9udYQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/ZIRJB-lk5cD4L8GUOca3zw" rel="nofollow noopener">Fat Pig BBQ</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span> */}
      </div>
    </div>
  );
}
