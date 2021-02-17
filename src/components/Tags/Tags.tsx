import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'

type TagType = {
  totalCount: number
  fieldValue: string
}

export default function Tags() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            totalCount
            fieldValue
          }
        }
      }
    `
  )

  const tags = data.allMarkdownRemark.group
  return (
    <div css={tagWrapper}>
      <h2>Tags</h2>
      <div css={tagBoxStyle}>
        {tags.map(({ totalCount, fieldValue }: TagType, idx: number) => (
          <div key={idx} className="tag">
            <span className="tag__count">{totalCount}</span>
            <span className="tag__name">{fieldValue}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const tagWrapper = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2rem;
  font-size: 1.2rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`

const tagBoxStyle = css`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.3rem;

  .tag {
    background: #e1f5fe;
    border-radius: 15px;
    padding: 6px;
  }
  .tag__count {
    background: #81d4fa;
    border-radius: 10px;
    padding: 2px 5px;
    margin-right: 3px;
  }
  .tag__name {
  }
`
