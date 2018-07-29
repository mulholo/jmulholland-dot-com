module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'kq8wdn6jzau5',
        accessToken: '726564cc1fcbde2c10f97557983782f304c52f9af2850fde099e2b8bd3bd2f23'
      }
    },
    `gatsby-plugin-styled-components`,
  ],
};
