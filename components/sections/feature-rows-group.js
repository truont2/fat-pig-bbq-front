import classNames from "classnames";
import NextImage from "../elements/image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";
import { getStrapiMedia } from "../../utils/media";
const FeatureRowsGroup = ({ data }) => {
  return (
    // <div class="w-screen">
    //   <div class="sm:w-4/6 mx-auto gap-5 container px-5 py-5 mx-auto">
    //     <div className="container flex flex-col gap-5 py-8 font-CooperBlack">
    //       {data.features.map((feature, index) => (
    //         <div
    //           class={classNames(
    //             // Common classes
    //             "flex flex-col justify-start md:justify-between items-center m-2 gap-10",
    //             {
    //               "lg:flex-row": index % 2 === 0,
    //               "lg:flex-row-reverse ": index % 2 === 1,
    //             }
    //           )}
    //           key={feature.id}
    //         >
    //           <div class="lg:max-w-lg lg:w-full mb-10 md:mb-0 mx-auto">
    //             {/* <img
    //               class="object-cover object-center rounded drop-shadow-2xl"
    //               alt="hero"
    //               src={`${getStrapiMedia(feature.media.data.attributes.url)}`}
    //             /> */}
    //             {feature.media.data.attributes.mime.startsWith("image") && (
    //               <div className="w-full h-auto">
    //                 <img
    //                   class="object-scale-down object-center drop-shadow-2xl h-[25rem] w-full"
    //                   alt="hero"
    //                   src={`${getStrapiMedia(
    //                     feature.media.data.attributes.url
    //                   )}`}
    //                 />
    //               </div>
    //             )}
    //             {/* Videos */}
    //             {feature.media.data.attributes.mime.startsWith("video") && (
    //               <Video
    //                 media={feature.media}
    //                 className="w-full h-auto"
    //                 autoPlay
    //                 controls={false}
    //               />
    //             )}
    //           </div>
    //           <div class="lg:flex-grow md:w-full lg:pl-0  flex flex-col md:items-start md:text-left text-center items-center text-center">
    //             <h1 class="title-font text-3xl md:text-4xl mb-4 font-medium">
    //               {feature.title}
    //               {/* <br class="hidden lg:inline-block" />readymade gluten */}
    //             </h1>
    //             <p class="mb-8 leading-relaxed md:text-xl text-zinc-700 body-font">{feature.description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <section class="text-gray-600 body-font">
      {data.features.map((feature, index) => (
        <div class="container px-5 py-5 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-40 h-40 rounded-full inline-flex items-center justify-center text-gray-400">
                  <img
                    alt="Image of the team members in front of the restaurant"
                    class="w-full h-full object-fill object-center rounded-full inline-block drop-shadow-2xl"
                    src={`${getStrapiMedia(feature.media.data.attributes.url)}`}
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg font-CooperBlack">
                    Bao Truong
                  </h2>
                  <div class="w-12 h-1 bg-[#813400] rounded mt-2 mb-4 "></div>
                  <p class="text-base font-CooperBlack">Owner and founder of Fat Pig BBQ</p>
                </div>
              </div>
              <div class="flex items-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4 text-zinc-700 font-CooperBlack">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureRowsGroup;
