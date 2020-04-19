import React from 'react'
import { Layout } from '../components'

const FourOhFour = ({ location }) => (
  <Layout pageName='Not found' pathname={location.pathname}>
    <h2>404</h2>
    <p>
      There's a page here, just probably not the one you were looking
      for.
    </p>
  </Layout>
)

export default FourOhFour
