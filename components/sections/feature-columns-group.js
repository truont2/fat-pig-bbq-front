const FeatureColumnsGroup = ({ data }) => {
  return (
    <section className="body-font">
      <div className="container px-5 md:py-10 pt-5 mx-auto">
        <div className="flex flex-col text-center w-full md:mb-10">
          <h1 className="text-4xl font-medium title-font mb-5 text-center font-CooperBlack text-[#212427]">
            Ordering Options
          </h1>
          <div className="flex md:mt-6 mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#813400] inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center font-Roboto">
          {data.features.map((feature, idx) => (
            <div className="xl:w-1/4 lg:w-1/2 w-full px-8 py-6 sm:border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-between" key={idx}>
              <div>
                <h2 className="text-lg sm:text-xl text-[#212427] font-medium title-font mb-2">
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
                <button className="bg-[#813400] hover:bg-[#212427] text-white font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded transition ease-out duration-200">
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
