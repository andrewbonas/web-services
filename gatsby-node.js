/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  if (page.path.match(/^\/about/)) {
    deletePage(page)
  }
  if (page.path.match(/^\/terms-of-service/)) {
    deletePage(page)
  }
  if (page.path.match(/^\/signup/)) {
    deletePage(page)
  }
  if (page.path.match(/^\/style-guide/)) {
    deletePage(page)
  }
  if (page.path.match(/^\/privacy-policy/)) {
    deletePage(page)
  }
}