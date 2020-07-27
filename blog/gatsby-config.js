/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7eil2dkbi57o`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:'MnEDA_81G0FJKhM6mGB0IwjTdRBAOsrdRjXBAFZNDV4',
      },
    },
  ],
}
