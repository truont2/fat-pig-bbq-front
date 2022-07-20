import PropTypes from "prop-types";
import Markdown from "react-markdown";

const RichText = ({ data }) => {
  return (
    // <div className="prose prose-lg container py-12">
    //   <Markdown>{data.content}</Markdown>
    // </div>
    <div className="container mx-auto px-4 pt-12 text-center">
      <h1 class="title-font sm:text-4xl md:text-6xl mb-5 font-medium text-gray-900 text-center">About us</h1>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p class="leading-relaxed text-lg">
              {data.content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default RichText;
