import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { BlogPostBySlugQuery } from '../../../gatsby-type'

type Props = {
  data: BlogPostBySlugQuery
}

export default function PostTemplate({ data }: Props) {
  const post = data.markdownRemark
  console.log(post)
  return <p>wefwef</p>
}

// context를 통해 넘겨준 slug를 통해 검색
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        tags
      }
    }
  }
`
