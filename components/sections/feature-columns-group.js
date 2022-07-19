import NextImage from "../elements/image";

const FeatureColumnsGroup = ({ data }) => {
  return (
    // <div className="container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12">
    //   {data.features.map((feature) => (
    //     // <div className="flex-1 text-lg text-align: center" key={feature.id}>
    //     //   <div className="w-10 h-10">
    //     //     <NextImage media={feature.icon} />
    //     //   </div>
    //     //   <h3 className="font-bold mt-4 mb-4">{feature.title}</h3>
    //     //   <p>{feature.description}</p>
    //     //   <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    //     // </div>
    //     <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6">
    //           <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
    //           <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
    //           <a className="text-indigo-500 inline-flex items-center">Learn More
    //             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </a>
    //         </div>
    //   ))}
    // </div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Ordering Options
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Order online and have the food delivered or pick it up yourself in-store!
          </p>
        </div>
        <div class="flex flex-wrap">
          {data.features.map((feature) => (
            <div class="xl:w-1/4 lg:w-1/2 md:w-full  px-8 py-6 sm:border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-between">
              <div><h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                {feature.title}
              </h2>
              <p class="leading-relaxed text-base mb-4">
                {feature.description}
              </p></div>
              
              <a href={feature.link.url} class="text-indigo-800 inline-flex items-center with-arrow hover:underline">
                {feature.link.text}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureColumnsGroup;
