import classNames from "classnames";
import NextImage from "../elements/image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";
import { getStrapiMedia } from "../../utils/media";
const FeatureRowsGroup = ({ data }) => {
  return (
    <div class="sm:w-5/6 mx-auto">
      <div className="container flex flex-col gap-12 py-8">
        {data.features.map((feature, index) => (
          <div
            className={classNames(
              // Common classes
              "flex flex-col justify-start md:justify-between md:items-center gap-10",
              {
                "lg:flex-row": index % 2 === 0,
                "lg:flex-row-reverse": index % 2 === 1,
              }
            )}
            key={feature.id}
          >
            {/* Text section */}
            {/* <div className="w-full lg:w-6/12 lg:pr-6 text-lg">
            <h3 className="title">{feature.title}</h3>
            <p className="my-6">{feature.description}</p>
            <CustomLink link={feature.link}>
              <div className="text-blue-600 with-arrow hover:underline">
                {feature.link.text}
              </div>
            </CustomLink>
          </div> */}
            {/* Media section */}
            {/* <div className="w-full sm:9/12 lg:w-4/12 max-h-full">
            {/* Images */}
            {/* {feature.media.data.attributes.mime.startsWith("image") && (
              <div className="w-full h-auto">
                <NextImage media={feature.media} />
              </div>
            )} */}
            {/* Videos */}
            {/* {feature.media.data.attributes.mime.startsWith("video") && (
              <Video
                media={feature.media}
                className="w-full h-auto"
                autoPlay
                controls={false}
              />
            )} */}
            {/* </div> */}
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={`${getStrapiMedia(feature.media.data.attributes.url)}`}
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {feature.title}
                {/* <br class="hidden lg:inline-block" />readymade gluten */}
              </h1>
              <p class="mb-8 leading-relaxed">{feature.description}</p>
              <div class="flex justify-center">
                {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                <CustomLink link={feature.link}>
                  <div className="text-blue-600 with-arrow hover:underline">
                    {feature.link.text}
                  </div>
                </CustomLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureRowsGroup;
