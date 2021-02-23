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
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-header`, // 이 class명으로 하이라이트 코드를 구현할 예정이므로 반드시 넣자.
              maintainCase: false, // 이 부분은 반드시 false로 하자. url이 대소문자를 구분하기 때문에 링크가 작동하지 않을 수 있다.
              removeAccents: true,
              fromHeading: 2,
              toHeading: 3,
              elements: [`h2`, 'h3'], // 링크를 추가할 Header 종류 선택
            },
          },
          {
            resolve: 'gatsby-plugin-local-search',
            options: {
              name: 'pages', // search 식별자 -> search를 여러개 만들때 구분하기 위함
              engine: 'lunr',
              query: `
                {
                  allMarkdownRemark {
                    nodes {
                      id
                      frontmatter {
                        title
                      }
                      fields {
                        slug
                      }
                      rawMarkdownBody
                    }
                  }
                }
              `,
              ref: 'id', // 각 인덱스 항목을 식별하기 위함
              // 이 목록은 가능한 짧아야 한다. 인덱스가 작을수록 속도가 빨라진다.
              // 그러나 검색을 유용하게 만들 수 있는 충분한 콘텐츠를 포함해야 합니다!
              index: ['title', 'body'],
              // 결과를 표시할 때 액세스할 필드가 나열
              store: ['id', 'title', 'slug'],
              normalizer: ({ data }) =>
                data.allMarkdownRemark.nodes.map((node) => ({
                  id: node.id,
                  title: node.frontmatter.title,
                  body: node.rawMarkdownBody,
                  slug: node.fields.slug,
                })),
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
};
