import React from 'react'
import Layout from '../components/Layout'

const FourOhFour = ({ location }) => (
  <Layout pathname={location.pathname}>
    <h2>404</h2>
    <p>
      There's a page here, just probably not the one you were looking
      for.
    </p>
  </Layout>
)

export default FourOhFour
