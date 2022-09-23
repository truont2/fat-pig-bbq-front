// slide effect explained
//  how this function works is by spreading all the items onto a single row.
// once the state updates, we translate by x number of vw then it will go to that item
//     // use a state to keep track of slide index
//     // if you click a button, translate by x number of distance
//     // its like traversing to the 3rd element by going 240vw to it.

import BtnSlider from "./BtnSlider";
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const reviews = [
    {
      name: "testing",
      rating: 3, //rating is out of 5
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae magnam velit cumque iusto labore ad modi, cupiditate suscipit doloribus aperiam, fugit quo voluptate totam sed dignissimos tenetur praesentium qui laudantium?",
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "testing2",
      rating: 4, //rating is out of 5
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae magnam velit cumque iusto labore ad modi, cupiditate suscipit doloribus aperiam, fugit quo voluptate totam sed dignissimos tenetur praesentium qui laudantium?",
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "testing2",
      rating: 4, //rating is out of 5
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae magnam velit cumque iusto labore ad modi, cupiditate suscipit doloribus aperiam, fugit quo voluptate totam sed dignissimos tenetur praesentium qui laudantium?",
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  const length = reviews.length;
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : length - 1);
    }
    if (direction === "r") {
      setIndex(index !== length - 1 ? index + 1 : 0);
    }
  };

  //   fade effect approach
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    if (slideIndex !== reviews.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else  {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else  {
      setSlideIndex(reviews.length - 1);
    }
  };

  return (

    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => prevSlide()}
      >
        left
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-80 * slideIndex}vw)`, width: `${reviews.length * 100}%` }}
      >
        {reviews.map((review, index) => (
        <div className={`${styles.reviewContainer}`} key={index}>
            <section class="text-gray-600 body-font">
              <div class="container px-5 mx-auto">
                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed text-lg">
                        {index}
                  </p>
                  <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                  <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p class="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0, justifyContent: "flex-end" }}
        onClick={() => nextSlide()}
      >
        right
      </div>
    </div>
  );
};

export default Featured;

//   fade effect approach
//   how this works: change the index value of the slideIndex state using the folliwing methods and state
// by changing the slide index here, you can change what the map wants to render
// items are mapped vertically currently

// basically each item has a index, when the state is updated,
// javascript sees that it can only apply a certain class to a specific item in map because of our conditional statement
// all the items are basically layered on top of each other but only one is shown becayase of the class conditions
// import BtnSlider from "./BtnSlider";
// import styles from "../styles/Fade.module.css";
// import { useState } from "react";

// const Featured = () => {
//   const reviews = [
//     {
//       name: "testing",
//       rating: 3, //rating is out of 5
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae magnam velit cumque iusto labore ad modi, cupiditate suscipit doloribus aperiam, fugit quo voluptate totam sed dignissimos tenetur praesentium qui laudantium?",
//       img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     },
//     {
//       name: "testing2",
//       rating: 4, //rating is out of 5
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae magnam velit cumque iusto labore ad modi, cupiditate suscipit doloribus aperiam, fugit quo voluptate totam sed dignissimos tenetur praesentium qui laudantium?",
//       img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     },
//     {
//       name: "testing2",
//       rating: 4, //rating is out of 5
//       review:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae magnam velit cumque iusto labore ad modi, cupiditate suscipit doloribus aperiam, fugit quo voluptate totam sed dignissimos tenetur praesentium qui laudantium?",
//       img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     },
//   ];

//   const [slideIndex, setSlideIndex] = useState(1);

//   //   functions to change the pointers
//   const nextSlide = () => {
//     if (slideIndex !== reviews.length) {
//       setSlideIndex(slideIndex + 1);
//     } else if (slideIndex === reviews.length) {
//       setSlideIndex(1);
//     }
//   };

//   const prevSlide = () => {
//     if (slideIndex !== 1) {
//       setSlideIndex(slideIndex - 1);
//     } else if (slideIndex === 1) {
//       setSlideIndex(reviews.length);
//     }
//   };

//   const moveDot = (index) => {
//     setSlideIndex(index);
//   };
//   // for autoplay if you want
//   //  useEffect(()=>{
//   //     const interval = setInterval(()=>{
//   //         nextSlide();
//   //     }, 3000);
//   //     return () => clearInterval(interval);
//   // });

//   // for rating component; either download and use npm react start rating, flowbite, or do pure css/JS
//   return (
//     <div className={styles.containerSlider}>
//       {reviews.map((obj, index) => {
//         return (
//           <div
//             key={obj.id}
//             className={`${styles.slide} ${
//               slideIndex === index + 1 ? `${styles.active}` : ""
//             }`}
//           >
//             <section class="text-gray-600 body-font">
//               <div class="container px-5 mx-auto">
//                 <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     class="inline-block w-8 h-8 text-gray-400 mb-8"
//                     viewBox="0 0 975.036 975.036"
//                   >
//                     <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
//                   </svg>
//                   <p class="leading-relaxed text-lg">{index}</p>
//                   <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
//                   <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
//                     HOLDEN CAULFIELD
//                   </h2>
//                   <p class="text-gray-500">Senior Product Designer</p>
//                 </div>
//               </div>
//             </section>
//           </div>
//         );
//       })}
//       <BtnSlider moveSlide={nextSlide} direction={"next"} />
//       <BtnSlider moveSlide={prevSlide} direction={"prev"} />

//       {/* Dots are not functional yet */}
//       <div className={styles.containerDots}>
//         {reviews.map((item, index) => (
//           <div
//             onClick={() => moveDot(index + 1)}
//             className={
//               slideIndex === index + 1
//                 ? `${styles.dot} ${styles.active}`
//                 : `${styles.dot}`
//             }
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Featured;
