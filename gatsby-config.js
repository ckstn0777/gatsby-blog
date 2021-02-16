/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: 'https://ckstn0777.github.io/',
    title: `소설읽는 개발자`,
    description: `항상 새로운 기술을 추구합니다. 웹 개발자가 꿈입니다.`,
    author: `ckstn0777`,
    contacts: {
      github: 'https://github.com/ckstn0777',
      email: 'ckstn0777@naver.com',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-graphql-codegen`,
    //   options: {
    //     fileName: `./gatsby-type.ts`,
    //   },
    // },
  ],
}
