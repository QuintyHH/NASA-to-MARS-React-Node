import React from 'react'
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { Snackbar } from './components/Snackbar'
import { Home } from './components/Pages/Home'
import { Easter } from './components/Pages/Easter'
import routes from './constants/routes'
import store from './store'
import './index.css'

const app = (
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <Snackbar />
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path={routes.HOME} component={Home} />
          <Route path={routes.CONSPIRACY} component={Easter} />
          <Redirect to={routes.HOME} />
        </Switch>
      </Router>
    </SnackbarProvider>
  </Provider>
)
const here = document.querySelector('#here')
render(app, here)
