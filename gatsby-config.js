require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'James Mulholland',
    siteUrl: 'https://jmulholland.com',
    description: 'My personal website',
    twitter: '@mulholio',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
  ],
}
