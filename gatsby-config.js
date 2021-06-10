module.exports = {
  siteMetadata: {
    title: `Victor Landim | Front-end Engineer`,
    description: `I'm Victor Landim, a motivated full stack web developer passionate about code and music. I believe in  technology as a means to enhance and positively impact the lives of others around me. In my work, I strive for both  simplicity and efficiency. Always learning and adapting.`,
    author: `@victorlandim`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3n7hmkdb9fkd`,
        accessToken: `yg8Ou9gXbEpIi5HrLjcQ4QXH4FCkR2LY9NRcaHnhem4`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vicotr-landim-portfolio`,
        short_name: `victor-landim`,
        start_url: `/`,
        background_color: `#202020`,
        theme_color: `#202020`,
        display: `minimal-ui`,
        icon: `src/data/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-145822869-1',
      },
    },
  ],
}
