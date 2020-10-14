// Libs
import React, { Suspense } from 'react'
import { withRouter } from 'react-router-dom'

// Routers
import AppRouter from '../router'

const Pages = () => (
  <Suspense fallback="Loading...">
    <AppRouter />
  </Suspense>
)

export default withRouter(Pages)
