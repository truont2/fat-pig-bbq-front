import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "../../utils/types";
import CustomLink from "./custom-link";
import Link from "next/link";
const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "md:w-1/6 w-3/6 text-center uppercase tracking-wide font-semibold text-base md:text-sm rounded-md mx-auto bg-[#813400] hover:bg-black text-white hover:text-white py-2 px-4 hover:border-transparent rounded",
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        {
          "px-6 py-2": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "bg-primary-600 border-primary-600": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "text-primary-600 border-primary-600": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "bg-white text-primary-600 border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white border-white": appearance === "white-outline",
        }
      )}
    >
      {button.text}
    </div>
  );
};

const ButtonLink = ({ button, appearance, compact = false }) => {
  return (
    // <CustomLink link={button}>
    //   <ButtonContent
    //     button={button}
    //     appearance={appearance}
    //     compact={compact}
    //   />
    // </CustomLink>
    <Link href={button.url}>
      <a>
        <ButtonContent
          button={button}
          appearance={appearance}
          compact={compact}
        />
      </a>
    </Link>
  );
};

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
};

export default ButtonLink;
