import React from 'react';
import { graphql } from 'gatsby';
import { Global, css } from '@emotion/react';
import { useLocation } from '@reach/router';

import Layout from '../../components/Layout';
import { globalStyle } from '../../pages';
import { CategoryQuery } from '../../../gatsby-type';
import Thumbnail from '../../components/Thumbnail';
import Card from '../../components/Card';
import Pagenation from '../../components/Pagenation';
import Category from '../../components/Categories';
import Tags from '../../components/Tags';

type Props = {
  data: CategoryQuery;
};

export default function CategoryTemplate({ data }: Props) {
  const location = useLocation();
  const { totalCount, edges } = data.allMarkdownRemark;
  const category = location.pathname.split('/')[2];

  return (
    <Layout>
      <section css={sectionStyle}>
        <Thumbnail
          mainText={category}
          subText={`총 ${totalCount}개의 포스트`}
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

const sectionStyle = css`
  grid-column: center-start / center-end;
  min-height: 100rem;
`;

const contentStyle = css`
  margin-top: 33vh;
  display: flex;

  .side {
    flex-basis: 45%;
    padding: 1rem;

    height: 100%;
    position: sticky;
    top: 100px;
  }
`;

// context를 통해 넘겨준 slug를 통해 검색
export const query = graphql`
  query Category($category: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
`;
