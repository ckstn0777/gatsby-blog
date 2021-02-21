import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { PostListQuery } from '../../../gatsby-type';

type Props = {
  post: PostListQuery;
};

export default function Cards({ post }: Props) {
  const data = post;

  return (
    <div css={articleWrapper}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields?.slug as string} key={node.id}>
          <article css={articleStyle} key={node.id}>
            <img
              src={
                node.frontmatter?.featuredImage?.childImageSharp?.fluid
                  ?.src as string
              }
            />
            <div css={articleTextBoxStyle}>
              <h2>{node.frontmatter?.title}</h2>
              <p>{node.excerpt}</p>
              <p>{node.frontmatter?.date}</p>
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
