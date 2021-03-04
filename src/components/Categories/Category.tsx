import React from 'react';
import { css } from '@emotion/react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { bg } from '../../utils/bg';

type CategoryType = {
  totalCount: number;
  fieldValue: string;
};

export default function Category() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___category) {
            totalCount
            fieldValue
          }
        }
      }
    `
  );

  const categories = data.allMarkdownRemark.group;
  return (
    <div css={categoryWrapper}>
      <h2>카테고리</h2>
      {categories.map(
        ({ totalCount, fieldValue }: CategoryType, idx: number) => (
          <Link to={`/category/${fieldValue}`} key={idx} css={categoryStyle}>
            <p className="category__name">{fieldValue}</p>
            <p className="category__count">{totalCount}</p>
          </Link>
        )
      )}
    </div>
  );
}

const categoryWrapper = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 3rem;
  font-size: 1.2rem;

  @media only screen and (max-width: ${bg.medium}) {
    flex-basis: 45%;
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;
const categoryStyle = css`
  display: flex;
  font-size: 1.6rem;
  padding: 0.5rem;

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .category__name {
    flex: 1 0 0;
  }

  .category__count {
    background: #81d4fa;
    border-radius: 25px;
    width: 25px;
    height: 25px;
    text-align: center;
    color: white;
  }
`;
