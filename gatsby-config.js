require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: "AIzaSyD1VBYRib_lXeFkixX1HM-3_-XWhPg5vO4",
          authDomain: "gatsby-login-f2893.firebaseapp.com",
          databaseURL: "https://gatsby-login-f2893-default-rtdb.firebaseio.com",
          projectId: "gatsby-login-f2893",
          storageBucket: "gatsby-login-f2893.appspot.com",
          messagingSenderId: "850767910085",
          appId: "1:850767910085:web:ed21e10b76d21930e60cac",
          measurementId: "G-8YX3H9T0G6"
        }
      }
    },
  ],
}
