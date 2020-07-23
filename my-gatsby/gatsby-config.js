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
        spaceId: `l13pyplihak0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'Hb9VvP43yAUDA2A9wOLktAEzzMT2ZskGgS5jwwJW74g',
      },
    },
  ],
}
