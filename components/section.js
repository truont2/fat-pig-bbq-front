// import { useRouter } from "next/router"
import Hero from "./sections/hero";
// // import LargeVideo from "./sections/large-video"
import FeatureColumnsGroup from "./sections/feature-columns-group"
import FeatureRowsGroup from "./sections/feature-rows-group"
// // import BottomActions from "./sections/bottom-actions"
// // import TestimonialsGroup from "./sections/testimonials-group"
import RichText from "./sections/rich-text";
// // import Pricing from "./sections/pricing"
// // import LeadForm from "./sections/lead-form"
import location from '../components/Location';
import Yelp  from "../components/Yelp";
import menuItems from '../components/sections/menuItems'
import Images from '../components/sections/twoImages'
// Map Strapi sections to section components
const sectionComponents = {
  Images: Images,
  ComponentSectionsMenuItems: menuItems,
  Location: location,
  ComponentSectionsReviews: Yelp,
  ComponentSectionsHero: Hero,
// //   ComponentSectionsLargeVideo: LargeVideo,
  ComponentSectionsFeatureColumnsGroup: FeatureColumnsGroup,
  ComponentSectionsFeatureRowsGroup: FeatureRowsGroup,
// //   ComponentSectionsBottomActions: BottomActions,
// //   ComponentSectionsTestimonialsGroup: TestimonialsGroup,
  ComponentSectionsRichText: RichText,
//   ComponentSectionsPricing: Pricing,
//   ComponentSectionsLeadForm: LeadForm,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  console.log(sectionData.SectionName, "supposed type name");
  const SectionComponent = sectionComponents[sectionData.SectionName]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

// Display the list of sections
const Sections = ({ sections, preview }) => {
  return (
    <div className="flex flex-col bg-[#FAF9F6]">
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.SectionName}${section.id}`}
        />
      ))}
    </div>
  )
}

export default Sections