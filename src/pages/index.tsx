import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Thumbnail from '../components/Thumbnail';
import Card from '../components/Card';
import Category from '../components/Categories';
import Tags from '../components/Tags';
import Pagenation from '../components/Pagenation';
import { PostListQuery } from '../../gatsby-type';
import SEO from '../components/SEO';

type Props = {
  data: PostListQuery;
};

export default function Home({ data }: Props) {
  const totalCount = data.allMarkdownRemark.totalCount;

  return (
    <Layout>
      <SEO />
      <section css={sectionStyle}>
        <Thumbnail
          mainText="방문해주셔서 감사합니다."
          subText="소설읽는 개발자 입니다."
        />
        <div css={contentStyle}>
          <div className="content">
            <Card post={data} />
            <Pagenation totalCount={totalCount} />
          </div>
          <div className="side">
            <Category />
            <Tags />
          </div>
        </div>
      </section>
      <Global styles={globalStyle} />
    </Layout>
  );
}

export const globalStyle = css`
  // --font-primary:
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16 = 62.5% -> 1rem = 10px
  }

  body {
    // font-family: $font-primary;
    background: linear-gradient(139.17deg, #f5f5f5 0%, #bdbdbd 100%), #bdbdbd;
    font-weight: 300;
    line-height: 1.6;
  }

  ::-webkit-scrollbar {
    width: 1.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(147, 161, 161, 0.75);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
`;

const sectionStyle = css`
  grid-column: center-start / center-end;
  min-height: 100rem;
`;

const contentStyle = css`
  margin-top: 33vh;
  display: flex;

  .side {
    flex-basis: 50%;
    padding: 1rem;

    height: 100%;
    position: sticky;
    top: 100px;
  }
`;

export const query = graphql`
  query PostList($skip: Int) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
      skip: $skip
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
`;
