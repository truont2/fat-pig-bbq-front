import classNames from "classnames";
import NextImage from "../elements/image";
import Video from "../elements/video";
import CustomLink from "../elements/custom-link";
import { getStrapiMedia } from "../../utils/media";
const FeatureRowsGroup = ({ data }) => {
  return (
    <section className="text-gray-600 body-font">
      {data.features.map((feature, index) => (
        <div className="container px-5 py-5 mx-auto flex flex-col" key={index}>
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-40 h-40 rounded-full inline-flex items-center justify-center text-gray-400">
                  <img
                    alt="Image of the team members in front of the restaurant"
                    className="w-full h-full object-fill object-center rounded-full inline-block drop-shadow-2xl"
                    src={`${getStrapiMedia(feature.media.data.attributes.url)}`}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Bao Truong
                  </h2>
                  <div className="w-12 h-1 bg-[#813400] rounded mt-2 mb-4 "></div>
                  <p className="text-base">Owner and Founder of Fat Pig BBQ</p>
                </div>
              </div>
              <div className="flex items-center sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-zinc-700">
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
