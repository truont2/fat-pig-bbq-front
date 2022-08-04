import classNames from "classnames";
import NextImage from "../elements/image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";
import { getStrapiMedia } from "../../utils/media";
const FeatureRowsGroup = ({ data }) => {
  return (
    <div class="w-screen">
      <div class="sm:w-4/6 mx-auto gap-5 container px-5 py-5 mx-auto">
        <div className="container flex flex-col gap-5 py-8 font-CooperBlack">
          {data.features.map((feature, index) => (
            <div
              class={classNames(
                // Common classes
                "flex flex-col justify-start md:justify-between items-center m-2 gap-10",
                {
                  "lg:flex-row": index % 2 === 0,
                  "lg:flex-row-reverse ": index % 2 === 1,
                }
              )}
              key={feature.id}
            >
              <div class="lg:max-w-lg lg:w-full mb-10 md:mb-0 mx-auto">
                {/* <img
                  class="object-cover object-center rounded drop-shadow-2xl"
                  alt="hero"
                  src={`${getStrapiMedia(feature.media.data.attributes.url)}`}
                /> */}
                {feature.media.data.attributes.mime.startsWith("image") && (
                  <div className="w-full h-auto">
                    <img
                      class="object-cover object-center rounded drop-shadow-2xl h-[25rem] w-full"
                      alt="hero"
                      src={`${getStrapiMedia(
                        feature.media.data.attributes.url
                      )}`}
                    />
                  </div>
                )}
                {/* Videos */}
                {feature.media.data.attributes.mime.startsWith("video") && (
                  <Video
                    media={feature.media}
                    className="w-full h-auto"
                    autoPlay
                    controls={false}
                  />
                )}
              </div>
              <div class="lg:flex-grow md:w-full lg:pl-0  flex flex-col md:items-start md:text-left text-center items-center text-center">
                <h1 class="title-font text-3xl md:text-4xl mb-4 font-medium">
                  {feature.title}
                  {/* <br class="hidden lg:inline-block" />readymade gluten */}
                </h1>
                <p class="mb-8 leading-relaxed md:text-xl text-zinc-700 body-font">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureRowsGroup;
