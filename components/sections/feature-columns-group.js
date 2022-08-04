import NextImage from "../elements/image";

const FeatureColumnsGroup = ({ data }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 md:py-10 py-5 mx-auto font-CooperBlack">
        <div class="flex flex-col text-center w-full mb-10">
          <h1 class="text-4xl font-medium title-font text-gray-900 mb-5 text-center">
            Ordering Options
          </h1>
          <div class="flex md:mt-6 mt-2 justify-center">
            <div class="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          {data.features.map((feature, idx) => (
            <div class="xl:w-1/4 lg:w-1/2 md:w-full  px-8 py-6 sm:border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-between" key={idx}>
              <div>
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {feature.title}
                </h2>
                <p class="leading-relaxed text-base mb-4">
                  {feature.description}
                </p>
              </div>

              <a
                href={feature.link.url}
                class="text-indigo-800 inline-flex items-center"
              >
                <button class="bg-[#813400] hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
                  {feature.link.text}
                </button>
                {/* <svg
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureColumnsGroup;
