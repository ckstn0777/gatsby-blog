import React from 'react';
import { Global, css } from '@emotion/react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { BlogPostBySlugQuery } from '../../../gatsby-type';
import { globalStyle } from '../../pages';
import { postStyle } from './post.style';

type Props = {
  data: BlogPostBySlugQuery;
};

export default function PostTemplate({ data }: Props) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <section css={sectionStyle}>
        <article css={articleStyle}>
          <img
            src={post?.frontmatter?.featuredImage?.childImageSharp?.fluid?.src}
            css={articleImage}
          />
          <div css={articlePostBox}>
            <p className="date__category">
              {post?.frontmatter?.date} {post?.frontmatter?.category}
            </p>
            <h1 className="article__title">{post?.frontmatter?.title}</h1>
            <div>
              {post?.frontmatter?.tags?.map((tag, idx) => (
                <span className="article__tag" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post?.html as string }}
              css={postStyle}
            />
          </div>
        </article>
        <div css={indexWrpper}>
          <div
            dangerouslySetInnerHTML={{
              __html: post?.tableOfContents as string,
            }}
          />
        </div>
      </section>

      <Global styles={globalStyle} />
    </Layout>
  );
}

const sectionStyle = css`
  grid-column: center-start / center-end;
  min-height: 100rem;

  display: flex;
`;

const articleStyle = css`
  flex: 1 0 0;
  padding: 2rem;
`;

const articleImage = css`
  width: 100%;
  object-fit: cover;
  margin-bottom: 3rem;
`;

const articlePostBox = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1.5rem;

  .date__category {
    font-size: 1.1rem;
    color: #bdbdbd;
  }
  .article__title {
    font-size: 3rem;
    margin-bottom: 1.2rem;
  }
  .article__tag {
    background: #e1f5fe;
    border-radius: 10px;
    padding: 4px 8px;
    font-size: 1.2rem;
  }
`;

const indexWrpper = css`
  flex-basis: 25%;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2rem;

  position: sticky;
  top: 130px;
  height: fit-content;
  font-size: 1.4rem;

  ul {
    list-style: none;
  }
  li ul {
    margin: 0 0 12px 12px;
    border-left: 2px solid #4fc3f7;
  }

  li a {
    color: #424242;
    display: block;
    padding: 8px 12px 8px 6px;
    margin-left: 6px;
    border-radius: 6px;

    :hover {
      background-color: #e1f5fe;
    }
  }
`;

// context를 통해 넘겨준 slug를 통해 검색
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 250) {
              src
            }
          }
        }
        category
        tags
      }
      tableOfContents(maxDepth: 3)
    }
  }
`;
