import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

// TODO import card
// import card from '../assets/twitter-card.png'

const SiteMetadata = ({ pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
            twitter
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { siteUrl, title, twitter },
      },
    }) => (
      <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
        <html lang='en' />
        <link rel='canonical' href={`${siteUrl}${pathname}`} />
        <meta name='docsearch:version' content='2.0' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        {/* <link */}
        {/*   rel='icon' */}
        {/*   type='image/png' */}
        {/*   sizes='32x32' */}
        {/*   href='/favicon-32x32.png' */}
        {/* /> */}
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        <meta property='og:url' content={siteUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en' />
        <meta property='og:site_name' content={title} />
        {/* TODO twitter card <meta property='og:image' content={`${siteUrl}${card}`} /> */}
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='675' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={twitter} />
      </Helmet>
    )}
  />
)

export default SiteMetadata
