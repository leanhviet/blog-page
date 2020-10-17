// Libs
import React, { Suspense } from 'react'

// Routers
import AppRouter from '../router'

// Layout
import Layout from '../layout'

const Pages = () => (
  <Layout>
    <Suspense fallback="Loading...">
      <AppRouter />
    </Suspense>
  </Layout>
)

export default Pages
