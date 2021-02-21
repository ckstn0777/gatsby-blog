const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// 페이지용 슬래그(/) 만들기
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // node에 fields가 생기고 거기에 slug : /2021/02/2021-02-17-redux-thunk/
    // 이런식으로 추가되어 graphql로 조회가능해진다.
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// 페이지 만들기(template과 연결)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //////////////////////////////////
  // 게시글용 페이지 만들기
  const result = await graphql(`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post/index.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  //////////////////////////////////
  // 페이지네이션 페이지(/pages/2) 만들기
  const limit = 5; // 5개씩
  const page = Math.ceil(result.data.allMarkdownRemark.totalCount / limit); // 총 페이지 수
  for (let i = 2; i <= page; i++) {
    createPage({
      path: `/pages/${i}`,
      component: path.resolve(`./src/pages/index.tsx`),
      context: {
        skip: (i - 1) * limit,
      },
    });
  }

  //////////////////////////////////
  // 카테고리 페이지 만들기
  const categories = await graphql(`
    query {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  categories.data.allMarkdownRemark.group.forEach(({ fieldValue }) => {
    console.log(fieldValue);
    createPage({
      path: `/category/${fieldValue}`,
      component: path.resolve(`./src/templates/category/index.tsx`),
      context: {
        category: fieldValue,
      },
    });
  });
};
