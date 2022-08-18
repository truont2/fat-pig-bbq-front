import NextImage from "../elements/image";

const FeatureColumnsGroup = ({ data }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 md:py-10 py-5 mx-auto font-CooperBlack">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-4xl font-medium title-font text-gray-900 mb-5 text-center">
            Ordering Options
          </h1>
          <div className="flex md:mt-6 mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {data.features.map((feature, idx) => (
            <div className="xl:w-1/4 lg:w-1/2 w-full px-8 py-6 sm:border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-between" key={idx}>
              <div>
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  {feature.description}
                </p>
              </div>

              <a
                href={feature.link.url}
                className="text-indigo-800 inline-flex items-center"
              >
                <button className="bg-[#813400] hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
                  {feature.link.text}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureColumnsGroup;
