import * as React from 'react'
import Layout from '../components/Layout'

interface FourOhFourProps extends GatsbyPageProps {}

const FourOhFour = ({ location }: FourOhFourProps) => (
  <Layout pathname={location.pathname}>
    <h2>404</h2>
    <p>
      There's a page here, just probably not the one you were looking
      for.
    </p>
  </Layout>
)

export default FourOhFour
