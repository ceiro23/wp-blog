module.exports = {
  siteMetadata: {
    title: 'Blog Pietruszka',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        // baseUrl: 'wpdemo.gatsbycentral.com',
        // baseUrl: 'pietruszkabloghome.wordpress.com',
        baseUrl: 'localhost/wp-blog',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        // protocol: 'https',
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        // auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: true,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
