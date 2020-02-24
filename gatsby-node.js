const PATH = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const resultTemplate = PATH.resolve("./src/templates/result.js")
  const res = await graphql(`
    query {
      allAllJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `) // Query comes here

  res.data.allAllJson.edges.forEach(edge => {
    createPage({
      component: resultTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
