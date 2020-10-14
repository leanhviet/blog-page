import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

// Constants
import { URLS } from '../constants/routes'

// Pages
const HomePage = lazy(() => import('../pages/Home'))

const Router = () => (
  <Switch>
    <Route exact path={URLS.HOME} component={HomePage} />
  </Switch>
)

export default Router
