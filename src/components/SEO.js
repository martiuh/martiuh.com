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
