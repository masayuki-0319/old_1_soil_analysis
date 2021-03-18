import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Wizard from './components/Wizard'
import ScrollToTop from './components/ScrollTop'

export default (props: any) => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Wizard } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )
