import React from 'react';
import { css } from '@emotion/react';
import { useStaticQuery, Link, graphql } from 'gatsby';
// import { PostListQuery } from '../../../gatsby-type'

type NodeType = {
  node: {
    id: string;
    excerpt: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      featuredImage: {
        childImageSharp: {
          fluid: {
            src: string;
          };
        };
      };
    };
  };
};

export default function Cards() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 5
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 120, maxHeight: 120) {
                      src
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  );
  const { totalCount, edges } = data.allMarkdownRemark;
  console.log(totalCount);
  return (
    <div css={articleWrapper}>
      {edges.map(({ node }: NodeType) => (
        <Link to={node.fields.slug}>
          <article css={articleStyle} key={node.id}>
            <img
              src={node.frontmatter.featuredImage.childImageSharp.fluid.src}
            />
            <div css={articleTextBoxStyle}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.excerpt}</p>
              <p>{node.frontmatter.date}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

const articleWrapper = css`
  padding: 1rem;
`;

const articleStyle = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1.5rem;

  display: flex;

  /* img {
    border-radius: 20px;
  } */
`;
const articleTextBoxStyle = css`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  padding: 0 1.5rem;
  font-size: 1.2rem;

  > * {
    margin-bottom: 0.6rem;
  }
`;
