import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

type SEOType = {
  title?: string | null;
  description?: string | null;
  metaImageUrl?: string | null;
};

// type SiteMapQuery = {

// }

const SEO = ({ title, description, metaImageUrl }: SEOType) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    siteUrl,
    defaultTitle,
    defaultDescription,
    author,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    author,
  };

  return (
    <Helmet
      title={seo.title}
      meta={[
        { name: 'description', content: seo.description },

        /* Open Graph */
        { property: 'og:title', content: seo.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: seo.url },
        { property: 'og:description', content: seo.description },
        { property: 'og:site_name', content: defaultTitle },
        { property: 'og:image', content: metaImageUrl },
        // { property: 'og:image:alt', content: description },

        /* Twitter card */
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: metaImageUrl },
        // { name: 'twitter:image:alt', content: description },
        { name: 'twitter:site', content: metaImageUrl },
        { name: 'twitter:creator', content: seo.author },
      ]}
    />
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        author
      }
    }
  }
`;

export default SEO;
