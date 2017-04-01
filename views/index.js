import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './components/App'
import locales from './intl/metadata.js'
import { standardizeLocale } from './utils'
import './styles'

const history = createBrowserHistory()

const routes = (
  <Router history={history}>
    <Route component={({ match, location }) =>
      Object.keys(locales).map(path => location.pathname.includes(path)).reduce((a, b) => a || b) ?
      <Route path="/:locale" component={App} /> :
      <Redirect to={`/${standardizeLocale(navigator.language)}`}/>
    } />
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))
