import React from 'react';
import { Head, withSiteData } from 'react-static';

export default withSiteData(
  ({
    siteTitle,
    siteDescription,
    siteAuthor,
    title,
    description,
    keywords,
    meta,
    image,
    defaultTitle,
    titleTemplate,
    lang
  }) => {
    const metaDescription = description || siteDescription;
    lang = lang || 'es-MX';
    meta = meta || [];
    keywords = keywords || [];
    title = title || siteTitle;
    const hasImages = image
      ? [
          { property: 'og:image', content: image },
          { property: 'twitter:image', content: image }
        ]
      : [];
    let hasTitleTemplate =
      typeof titleTemplate === 'string' ? titleTemplate : `%s en ${siteTitle}`;
    hasTitleTemplate = titleTemplate === false ? null : hasTitleTemplate;
    return (
      <Head
        htmlAttributes={{
          lang
        }}
        title={title}
        titleTemplate={hasTitleTemplate}
        defaultTitle={defaultTitle || siteTitle}
        meta={[
          ...hasImages,
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: siteAuthor
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: metaDescription
          }
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `)
                }
              : []
          )
          .concat(meta)}
      />
    );
  }
);
// export default function SEO({ description, meta, lang, keywords, title, image }) {
//   return (
//     <StaticQuery
//       query={detailsQuery}
//       render={data => {
//         const metaDescription =
//           description || data.site.siteMetadata.description;

//         const shouldHaveImage = image
//           ? [
//               { property: "og:image", content: image },
//               { property: "twitter:image", content: image }
//             ]
//           : [];
//         return (
//           <Helmet
//             htmlAttributes={{
//               lang
//             }}
//             title={title}
//             titleTemplate={`%s | ${data.site.siteMetadata.title}`}
//             meta={[
//               ...shouldHaveImage,
//               {
//                 name: `description`,
//                 content: metaDescription
//               },
//               {
//                 property: `og:title`,
//                 content: title
//               },
//               {
//                 property: `og:description`,
//                 content: metaDescription
//               },
//               {
//                 property: `og:type`,
//                 content: `website`
//               },
//               {
//                 name: `twitter:card`,
//                 content: `summary`
//               },
//               {
//                 name: `twitter:creator`,
//                 content: data.site.siteMetadata.author
//               },
//               {
//                 name: `twitter:title`,
//                 content: title
//               },
//               {
//                 name: `twitter:description`,
//                 content: metaDescription
//               }
//             ]
//               .concat(
//                 keywords.length > 0
//                   ? {
//                       name: `keywords`,
//                       content: keywords.join(`, `)
//                     }
//                   : []
//               )
//               .concat(meta)}
//           />
//         );
//       }}
//     />
//   );
// }

// SEO.defaultProps = {
//   lang: `es_MX`,
//   meta: [],
//   keywords: [],
//   image: null
// };

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string
// };
