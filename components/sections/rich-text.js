import PropTypes from "prop-types";
import Markdown from "react-markdown";
import { getStrapiMedia } from "../../utils/media";
const RichText = ({ data }) => {
  return (
    // <div classNameName="prose prose-lg container py-12">
    //   <Markdown>{data.content}</Markdown>
    // </div>
    <div className="container mx-auto px-4 pt-12 text-center">
      <h1 className="title-font text-4xl md:text-6xl mb-5 font-medium text-gray-900 text-center text-center font-CooperBlack">{data.title}</h1>
      <img
        className="md:w-4/6 md:h-[30rem] h-[15rem] w-screen mb-10 object-cover object-center rounded mx-auto"
        alt="hero"
        src={`${getStrapiMedia(data.image.data.attributes.url)}`}
      />
      <section className="text-zinc-700 body-font font-Roboto">
        <div className="container px-5 mx-auto">
          <div className="w-5/6 mx-auto text-center">
            <p className="leading-relaxed md:text-2xl text-lg">
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
