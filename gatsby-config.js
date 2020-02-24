module.exports = {
  siteMetadata: {
    title: `Quinielas hoy - al instante`,
    description: `Los últimos resultados de quiniela y sorteos de todas las loterías en Argentina. Los sorteos se actualizan en tiempo real.`,
    author: `Quinielahoy.com`,
    siteUrl: `https://www.quinielashoy.com`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jsondata`,
        // typeName: ({ node, object, isArray }) => object.level,
        path: `./src/data/`,
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111025197-2",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [`400`, `500`, `700`],
            },
            {
              family: `Open Sans`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quinielahoy`,
        short_name: `Quinielahoy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/FavIcon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/quiniela/*`] },
    },
  ],
}
