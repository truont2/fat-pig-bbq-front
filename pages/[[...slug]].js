import Link from "next/link";
import { fetchAPI, getGlobalData } from "../utils/api";
import { getLocalizedPaths } from "../utils/localize";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Sections from "../components/section";
import Seo from "../components/elements/seo";
import Layout from "../components/layout";
import { FadeLoader } from "react-spinners";

export default function DynamicPage({
  sections,
  metadata,
  preview,
  global,
  pageContext,
}) {
  const router = useRouter();

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return (
      //   <section class="text-gray-600 body-font" style={{height: "calc(88vh - 150px)"}}>
      //   <div class="container px-5 pt-10 pb-24 mx-auto">
      //     <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      //       {/* <h1 className="text-center text-3xl">This page does not exist. Please return to the main page. Thank you!</h1> */}
      //       <iframe src="/assets/menu.pdf" width="100%" height="600px"></iframe>
      //     </div>
      //   </div>
      // </section>
      <div className="grid h-screen mx-auto">
        <iframe src="/assets/menu.pdf" width="100%" height="900px"></iframe>
      </div>
    );
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return (
      <div className="grid h-screen place-items-center">
        <FadeLoader color="#da2222" />
      </div>
    );
  }

  // Merge default site SEO settings with page specific SEO settings
  if (metadata.shareImage?.data == null) {
    delete metadata.shareImage;
  }
  const metadataWithDefaults = {
    ...global.attributes.metadata,
    ...metadata,
  };

  return (
    <div
      style={{
        margin: "auto",
        background: "FAF9F6",
        paddingBottom: "50px",
      }}
    >
      {/* <Seo metadata={metadataWithDefaults} /> */}
      <Layout global={global} pageContext={pageContext}>
        <Seo metadata={metadataWithDefaults} />
        <Sections sections={sections} preview={preview} />
      </Layout>
    </div>
  );
}

// tell next.js how many pages there are
// export async function getStaticPaths(context) {
//   // attempt to work on the multiple lanugauage part
//   const pages = await context.locales.reduce(
//     async (currentPagesPromise, locale) => {
//       // function runs twice for the number of locals present 2x for en and fr
//       const currentPages = await currentPagesPromise;
//       const localePages = await fetchAPI("/pages", {
//         locale,
//         fields: ["slug", "locale"],
//       });
//       return [...currentPages, ...localePages.data];
//     },
//     Promise.resolve([])
//   );

//   const paths = pages.map((page) => {
//     const { slug, locale } = page.attributes;
//     const slugArray = !slug ? false : slug.split("/");
//     return {
//       params: { slug: slugArray },
//       locale,
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// for each individual page: get the data for that page
// export async function getStaticProps(context) {

//   const dev = process.env.NODE_ENV !== 'production';
//   const server = dev ? 'http://localhost:1337' : process.env.NEXT_PUBLIC_STRAPI_URL;

//   const { params, locale, locales, defaultLocale, preview = null } = context;

//   const globalLocale = await getGlobalData(locale);

//   // getting local data for page
//   const slugString = (!params.slug ? ["homepage"] : params.slug).join("/");
//   const res = await fetch(
//     `${server}/api/pages?filters[slug][$eq]=${slugString}&[populate]=deep`,
//     {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       // body: JSON.stringify(data) // body data type must match "Content-Type" header
//     }
//   );
//   const data = await res.json();
//   const pageData = data.data[0];
//   if (pageData == null) {
//     // Giving the page no props will trigger a 404 page
//     return { props: {} };
//   }
//   const { contentSections, metadata, localizations, slug } =
//     pageData.attributes;

//   const pageContext = {
//     locale,
//     locales,
//     defaultLocale,
//     slug,
//     localizations,
//   };

//   const localizedPaths = getLocalizedPaths(pageContext);
//   return {
//     props: {
//       preview,
//       sections: contentSections,
//       metadata,
//       global: globalLocale,
//       pageContext: {
//         ...pageContext,
//         localizedPaths,
//       },
//     },
//   };
// }
