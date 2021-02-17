import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

type CategoryType = {
  totalCount: number
  fieldValue: string
}

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
  )

  const categories = data.allMarkdownRemark.group
  return (
    <div css={categoryWrapper}>
      <h2>카테고리</h2>
      {categories.map(
        ({ totalCount, fieldValue }: CategoryType, idx: number) => (
          <div key={idx} css={categoryStyle}>
            <p className="category__name">{fieldValue}</p>
            <p className="category__count">{totalCount}</p>
          </div>
        )
      )}
    </div>
  )
}

const categoryWrapper = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 3rem;
  font-size: 1.2rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`
const categoryStyle = css`
  display: flex;
  font-size: 1.6rem;
  padding: 0.5rem;

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
`
