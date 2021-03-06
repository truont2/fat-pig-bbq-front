import React from 'react'
import styles from '../styles/Yelp.module.css';
import { ElfsightWidget } from 'react-elfsight-widget';

export default function Yelp({data}) {
  return (
    <div className={styles.container}>
        <h1 class="text-7xl font-medium title-font text-gray-900 mb-5 text-center">{data.title}</h1>
        <div className={styles.component}>
        {/* <div class="elfsight-app-e86cd777-5825-4eaf-8a47-2731765a8aaa"></div> */}
        <ElfsightWidget widgetID="b02be90c-e24f-46dc-87e7-9590c1f12baa" className={styles.yelper}/>
        {/* <span class="yelp-review" data-review-id="GdAN_i4sTxjM3RSGr9udYQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=eybQHt55quaeTiAsvlyZYg" rel="nofollow noopener">Cardin N.</a>'s <a href="https://www.yelp.com/biz/fat-pig-bbq-edmonds?hrid=GdAN_i4sTxjM3RSGr9udYQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/ZIRJB-lk5cD4L8GUOca3zw" rel="nofollow noopener">Fat Pig BBQ</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span> */}
        </div>
    </div>
  )
}

